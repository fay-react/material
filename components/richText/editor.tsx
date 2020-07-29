/**
 * Create by fay on 2018-10-18 11:30
 */
import React from 'react';
// import './style/index.less';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
  Editor, EditorState,
  convertFromRaw, convertToRaw,
  SelectionState, Modifier
} from 'draft-js';
import {Buttons as InlineStyleButtons, customStyleMap as customStyleMap} from './inlineStyle';
import {Button as FontSizeButton, customStyleMap as fontSizeCustomStyleMap} from './inlineStyle/fontSize';
import {Button as ColorButton, customStyleMap as colorCustomStyleMap} from './inlineStyle/color';
import {Button as BackgroundColorButton, customStyleMap as backgroundColorCustomStyleMap} from './inlineStyle/backgroundColor';
import {Buttons as BlockStyleButtons, styleFn as blockStyleFn} from './blockStyle';
import {Buttons as BlockRenderButtons, blockRendererFn} from './blockRender';
import {Button as SaveButton} from './save';
import {Buttons as StorageButtons} from './storage';
import extendedBlockRenderMap from './blockRenderMap';
import {insertImages} from './utils/file';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      // backgroundColor: theme.palette.common.white
      width: '100%',
      height: '100%',
      border: '1px solid #999999',
      borderRadius: '10px',
      overflow: 'hidden'
    },
    editor: {
      width: '100%',
      minHeight: '200px',
      height: '100%',
      padding: '15px',
      color: '#000000',
      lineHeight: '30px',
      "& .fay-rte-text-align-right": {
        textAlign: 'right'
      },
      "& .fay-rte-text-align-center": {
        textAlign: 'center'
      },
      "& .fay-rte-text-align-left": {
        textAlign: 'left'
      },
      "& .fay-rte-blockquote": {
        display: 'block',
        borderLeft: '5px solid #d2d2d2',
        color: '#666',
        margin: 0,
        padding: '5px 20px',
        fontSize: '15px',
        fontStyle: 'italic',
        backgroundColor: '#eff9ff'
      },
      "& .fay-rte-lineHeight1em": {
        lineHeight: '1em',
      },
      "& .fay-rte-lineHeight1d5em": {
        lineHeight: '1.5em',
      },
      "& .fay-rte-lineHeight2em": {
        lineHeight: '2em',
      },
      "& .fay-rte-lineHeight2d5em": {
        lineHeight: '2.5em',
      },
      "& .fay-rte-lineHeight3em": {
        lineHeight: '3em',
      },
      "& .fay-rte-lineHeight3d5em": {
        lineHeight: '3.5em',
      },
      "& .fay-rte-lineHeight4em": {
        lineHeight: '4em',
      },
    },
    operation: {
      padding: '10px 20px',
      borderBottom: '1px solid #999999'
    },
    grid: {
      height: 38
    }
  }),
);

export default ({onSave, placeholder, defaultValue, onChange}: any) => {
  const classes = useStyles();
  // const initData = EditorState.createWithContent(emptyContentState);
  const [editorState, setEditorState] = React.useState(EditorState.createWithContent(defaultValue ? convertFromRaw(JSON.parse(defaultValue)) : emptyContentState));
  // const [height, setHeight] = React.useState<string|number>(0);
  const editorRef = React.createRef<any>();
  const operateRef = React.createRef<any>();

  const handleFocus = () => {
    editorRef.current.focus();
  }
  
  // const handleKeyCommand = (command: DraftEditorCommand, editorState: EditorState) => {
  //   console.log(editorState, command);
  //   const newState = RichUtils.handleKeyCommand(editorState, command);
  //   console.log(newState);
  //   if (newState) {
  //     // if(JSON)
  //     handleChange(newState);
  //     return "handled";
  //   }
  //   return "not-handled";
  // }

  const handlePastedText = (text: string) => {
    if(text){
      const currentContent = editorState.getCurrentContent();
      const currentSelection = editorState.getSelection();
      const newContent = Modifier.replaceText(
        currentContent,
        currentSelection,
        text
      );
      const newEditorState = EditorState.push(editorState, newContent, 'insert-characters');
      handleChange(EditorState.forceSelection(newEditorState, newContent.getSelectionAfter()));
      return "handled";
    }
    return "not-handled";
  }

  const handlePastedFiles = (files: Array<Blob>) => {
    console.log(files);
    console.log(files.length);
    if(files){
      insertImages(editorState, files).then(res => {
        if(res.success){
          handleChange(res.editorState!);
        }else{
          alert(res.msg);
        }
      })
      return "handled";
    }
    return "not-handled";
  }

  const handleDroppedFiles = (_selection: SelectionState, files: Array<Blob>) => {
    return handlePastedFiles(files);
  }

  const handleChange = (_editorState: EditorState) => {
    setEditorState(_editorState);
    const raw = convertToRaw(_editorState.getCurrentContent());
    const value = JSON.stringify(raw);
    onChange && onChange(value);
  };

  React.useEffect(() => {
    handleFocus();
    console.log(editorState);
  }, [JSON.stringify(convertToRaw(editorState.getCurrentContent()))]);

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" className={classes.operation} ref={operateRef} spacing={1}>
        <Grid item className={classes.grid}>
          <StorageButtons onChange={handleChange} editorState={editorState}/>
        </Grid>
        <Grid item className={classes.grid}>
          <Divider orientation="vertical"/>
        </Grid>
        <Grid item className={classes.grid}>
          <InlineStyleButtons onChange={handleChange} editorState={editorState}/>
        </Grid>
        <Grid item className={classes.grid}>
          <FontSizeButton onClick={handleFocus} onChange={handleChange} editorState={editorState}/>
        </Grid>
        <Grid item className={classes.grid}>
          <ColorButton onChange={handleChange} editorState={editorState}/>
        </Grid>
        <Grid item className={classes.grid}>
          <BackgroundColorButton onChange={handleChange} editorState={editorState}/>
        </Grid>
        <Grid item className={classes.grid}>
          <Divider orientation="vertical"/>
        </Grid>
        <Grid item className={classes.grid}>
          <BlockStyleButtons onChange={handleChange} editorState={editorState}/>
        </Grid>
        <Grid item className={classes.grid}>
          <Divider orientation="vertical"/>
        </Grid>
        <Grid item className={classes.grid}>
          <BlockRenderButtons onChange={handleChange} editorState={editorState}/>
        </Grid>
        {/* <InlineStyleButtons onChange={handleChange} editorState={editorState}/>
        <FontSizeButton onChange={handleChange} editorState={editorState}/>
        <ColorButton onChange={handleChange} editorState={editorState}/> */}
        {/* <BackgroundColorButton onChange={handleChange} editorState={editorState}/>
        <Divider orientation="vertical" /> */}
        {/* <BlockStyleButtons onChange={handleChange} editorState={editorState}/> */}
        <Grid item className={classes.grid}>
          <Divider orientation="vertical"/>
        </Grid>
        {onSave && <SaveButton onSave={onSave} editorState={editorState}/>}
      </Grid>
      <div className={classes.editor} onClick={handleFocus}>
        <Editor placeholder={placeholder} editorKey="fayRte" editorState={editorState}
                customStyleMap={{...customStyleMap, ...fontSizeCustomStyleMap, ...colorCustomStyleMap, ...backgroundColorCustomStyleMap}}
                blockStyleFn={blockStyleFn}
                blockRenderMap={extendedBlockRenderMap}
                blockRendererFn={blockRendererFn}
                // handleKeyCommand={handleKeyCommand}
                handlePastedText={handlePastedText}
                handlePastedFiles={handlePastedFiles}
                handleDroppedFiles={handleDroppedFiles}
                onChange={handleChange}
                ref={editorRef}/>
      </div>
    </div>
  )
}

const emptyContentState = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: '',
      key: 'foo',
      type: 'unstyled',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [],
    },
  ],
});

// class RTE extends Component{

//     constructor(props) {
//         super(props);
//         const {value} = props;
//         this.editorState = value ? EditorState.createWithContent(convertFromRaw(JSON.parse(value))):EditorState.createEmpty();
//         this.value =value;
//         this.state = {editorState: this.editorState, height: 0};
//         this.editorRef = React.createRef();
//         this.operateRef = React.createRef();
//     }

//     mount = false;

//     focus = () => {
//         this.editorRef.current.focus();
//     };

//     componentWillReceiveProps(nextProps){
//         const {value} = nextProps;
//         if(value){
//             let editorState;
//             if(value === this.value){
//                 editorState = this.editorState;
//             }else{
//                 editorState = nextProps.value ? EditorState.createWithContent(convertFromRaw(JSON.parse(nextProps.value))):EditorState.createEmpty();
//             }
//             this.setState({editorState});
//         }
//     }

//     onChange = (editorState) => {
//         this.props.value && this.props.onChange || this.setState({editorState});
//         this.onChangeToProps(editorState);
//     };

//     onChangeToProps = (editorState) => {
//         const raw = convertToRaw(editorState.getCurrentContent());
//         const value = JSON.stringify(raw);
//         this.editorState = editorState;
//         this.value =value;
//         if(this.props.onChange){
//             this.props.onChange(value);
//         }
//     };

//     resize = () => {
//         setTimeout(()=>{
//             if(this.mount){
//                 const operateHeight = this.operateRef.current.offsetHeight;
//                 const nextHeight = 'calc(100% - '+parseFloat(operateHeight)+'px)';
//                 if(nextHeight !== this.state.height){
//                     this.setState({height: nextHeight});
//                 }
//                 this.resize();
//             }
//         }, 300);
//     };

//     componentDidMount(){
//         this.mount = true;
//         this.resize();
//     }

//     componentWillUnmount(){
//         this.mount = false;
//     }

//     render() {
//         const {editorState, height} = this.state;
//         const {onSave} = this.props;
//         return (
//             <div className='fay-draft'>
//                 <div className='fay-draft-operation' ref={this.operateRef}>
//                     <StorageButtons onChange={this.onChange} editorState={editorState}/>
//                     <Divider type="vertical" />
//                     <InlineStyleButtons onChange={this.onChange} editorState={editorState}/>
//                     <FontSizeButton onChange={this.onChange} editorState={editorState}/>
//                     <ColorButton onChange={this.onChange} editorState={editorState}/>
//                     <BackgroundColorButton onChange={this.onChange} editorState={editorState}/>
//                     <Divider type="vertical" />
//                     <BlockStyleButtons onChange={this.onChange} editorState={editorState}/>
//                     <Divider type="vertical" />
//                     {onSave && <SaveButton onSave={onSave} editorState={editorState}/>}
//                 </div>
//                 <div className='fay-draft-editor' style={{height}} onClick={this.focus}>
//                     <Editor editorState={editorState}
//                             customStyleMap={{...customStyleMap, ...fontSizeCustomStyleMap, ...colorCustomStyleMap, ...backgroundColorCustomStyleMap}}
//                             blockStyleFn={blockStyleFn}
//                             onChange={this.onChange}
//                             ref={this.editorRef}/>
//                 </div>
//             </div>
//         )
//     }
// }

// export default RTE;
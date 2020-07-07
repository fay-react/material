/**
 * Create by fay on 2018-10-18 09:41
 */
import React from 'react';
import Button from '../../button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import ImageStyle from './image-style';
const maxSize = 2*1024*1024;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      zIndex: 2,
      height: 200,
      width: 200,
      overflow: 'auto',
      marginTop: '115px',
      padding: theme.spacing(2, 0),
      overflowX: 'hidden'
    },
    input: {
      display: 'none',
    },
  }),
);

export default ({onChange}: any) => {
  const classes = useStyles();
  const [openImageStyle, setOpenImageStyle] = React.useState(false);
  const inputRef = React.useRef<any>();

  const handleChange = (e: any) => {
    console.log(e.target.value);
    console.log(e.target.files[0].size);
    console.log(e.target.files[0]);
    const size = e.target.files[0].size;
    if(size > maxSize){
      console.log('图片不得超过2M');
      return;
    }
    setOpenImageStyle(true);
  }

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    inputRef.current.click();
  }

  const handleCloseImageStyle = (value?: string) => {
    if(value){
      const formData = new FormData();
      formData.append('file', inputRef.current.files[0]);
      fetch('/oss', {
        method: 'POST',
        body: formData,
      }).then(response => response.json())
      .catch(error => {
        console.error('Error:', error)
        inputRef.current.value='';
      })
      .then(res => {
        inputRef.current.value='';
        if(res.success){
          onChange(res.result, {textAlign: value});
        }else{
          console.log('图片上传失败');
        }
      });
    }
    setOpenImageStyle(false);
  }

  return (
    <div>
      <input ref={inputRef} accept="image/*" className={classes.input} type="file" onChange={handleChange}/>
      <Button
        title={'上传图片'}
        onMouseDown={handleMouseDown}
      >
        <CropOriginalIcon/>
      </Button>
      <ImageStyle open={openImageStyle} onClose={handleCloseImageStyle}/>
    </div>
  )
}

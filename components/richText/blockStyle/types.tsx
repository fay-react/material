/**
 * Create by fay on 2018-10-17 18:54
 */
import React from 'react';
import Yinyong from './icons/yinyong';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
// import CropOriginalIcon from '@material-ui/icons/CropOriginal';
// import Icon, {IconProps} from '@material-ui/core/Icon';

interface Type{
  title: string,
  style: object,
  type: string,
  label: string,
  editorClassName?: 'text-align-right' | 'text-align-center' | 'text-align-left' | 'blockquote',
  icon?: React.ReactNode
  children?: any
}

const types: Type[] = [
  {
    title: '居左',
    style:{},
    type: 'text-align-left',
    label: '居左',
    editorClassName: 'text-align-left',
    icon: FormatAlignLeftIcon
  },
  {
    title: '居中',
    style:{},
    type: 'text-align-center',
    label: '居中',
    editorClassName: 'text-align-center',
    icon: FormatAlignCenterIcon
  },
  {
    title: '居右',
    style:{},
    type: 'text-align-right',
    label: '居右',
    editorClassName: 'text-align-right',
    icon: FormatAlignRightIcon
  },
  {
    title: '引用',
    style:{},
    type: 'blockquote',
    label: '引用',
    editorClassName: 'blockquote',
    icon: Yinyong
  },
  {
    title: '无序列表',
    style:{},
    type: 'unordered-list-item',
    label: '无序列表',
    icon: FormatListBulletedIcon
  },
  {
    title: '有序列表',
    style:{},
    type: 'ordered-list-item',
    label: '有序列表',
    icon: FormatListNumberedIcon
  },
  // {
  //   title: '行高',
  //   style:{fontFamily: 'cursive', paddingLeft: '15px', paddingRight: '15px'},
  //   type: 'line-height',
  //   label: '行高',
  //   children: [
  //     {
  //       style:{fontFamily: 'cursive', paddingLeft: '15px', paddingRight: '15px'},
  //       type: 'lineHeight1em',
  //       label: '1倍',
  //       editorClassName: 'lineHeight1em'
  //     },{
  //       style:{fontFamily: 'cursive', paddingLeft: '15px', paddingRight: '15px'},
  //       type: 'lineHeight1d5em',
  //       label: '1.5倍',
  //       editorClassName: 'lineHeight1d5em'
  //     },{
  //       style:{fontFamily: 'cursive', paddingLeft: '15px', paddingRight: '15px'},
  //       type: 'lineHeight2em',
  //       label: '2倍',
  //       editorClassName: 'lineHeight2em'
  //     },{
  //       style:{fontFamily: 'cursive', paddingLeft: '15px', paddingRight: '15px'},
  //       type: 'lineHeight2d5em',
  //       label: '2.5倍',
  //       editorClassName: 'lineHeight2d5em'
  //     },{
  //       style:{fontFamily: 'cursive', paddingLeft: '15px', paddingRight: '15px'},
  //       type: 'lineHeight3em',
  //       label: '3倍',
  //       editorClassName: 'lineHeight3em'
  //     },{
  //       style:{fontFamily: 'cursive', paddingLeft: '15px', paddingRight: '15px'},
  //       type: 'lineHeight3d5em',
  //       label: '3.5倍',
  //       editorClassName: 'lineHeight3d5em'
  //     },{
  //       style:{fontFamily: 'cursive', paddingLeft: '15px', paddingRight: '15px'},
  //       type: 'lineHeight4em',
  //       label: '4倍',
  //       editorClassName: 'lineHeight4em'
  //     }
  //   ],
  // },
  {
    title: 'h1',
    style:{},
    type: 'header-one',
    label: 'H1',
    icon: () => <>H1</>
  },
  {
    title: 'h2',
    style:{},
    type: 'header-two',
    label: 'H1',
    icon: () => <>H2</>
  },
  {
    title: 'h3',
    style:{},
    type: 'header-three',
    label: 'H1',
    icon: () => <>H3</>
  },
  {
    title: 'h4',
    style:{},
    type: 'header-four',
    label: 'H1',
    icon: () => <>H4</>
  },
  {
    title: 'h5',
    style:{},
    type: 'header-five',
    label: 'H1',
    icon: () => <>H5</>
  },
  {
    title: 'h6',
    style:{},
    type: 'header-six',
    label: 'H1',
    icon: () => <>H6</>
  },
]

export default types;

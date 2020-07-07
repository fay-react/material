import React from 'react';
import {Editor, Text} from '../../../components/richText';
// import {makeStyles} from "@material-ui/core/styles";

// const useStyles = makeStyles(() => ({
//   root: {
//
//   },
// }));

export default () => {
  // const classes = useStyles();
  const [data, setData] = React.useState<string|null>(null);

  const handleSave = (res: string) => {
    setData(res);
  }

  return (
    <>
      <Editor placeholder={"write something"} onSave={handleSave}/>
      <Text value={data}/>
    </>
  )
}
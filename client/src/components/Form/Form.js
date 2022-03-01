import React, {useState} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
export default function Form() {
  const [postData, setPostData] = useState({
    creator: '',
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  })

  function handleSubmit() {}


  function clear() {}
  return (
    <Paper onSubmit={handleSubmit}>
    <form onSubmit={handleSubmit}>

      <Typography>Creating an Event</Typography>
      <TextField name="creator" variant="outlined" label="Creator" value={postData.creator} onChange{(e) => setPostData({...postData, creator: e.target.value})}/>
      <TextField name="title" variant="outlined" label="Title" value={postData.title} onChange{(e) => setPostData({...postData, title: e.target.value})}/>
      <TextField name="message" variant="outlined" label="Message" value={postData.message} onChange{(e) => setPostData({...postData, message: e.target.value})}/>
      <Button type="submit">Submit</Button>
      <Button type="submit" onClick={clear}>clear</Button>
    </form>
      
    </Paper>
  );
}

import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Note(props) {

  function Handledelete()
{
  {props.deleteNote(props.id)}
}
  return (
    <div className="note">
      <h1 >{props.title}</h1>
      <p >{props.content}</p>
      <button onClick={Handledelete}> <DeleteOutlineIcon />
</button>
    </div>
  );
}

export default Note;

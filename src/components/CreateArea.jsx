import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import _ from "lodash"


function CreateArea(props) {
  const [newNote,setNewNote]=useState({title:"",content:""});
  // console.log(newNote);
  function HandleClick(event){
    const {name,value}=event.target;
    setNewNote( {...newNote,[name]:_.capitalize(value)})
  }

  function onSubmit(event){
   {props.HandleAdd(newNote)};
   setNewNote( {title:"",content:""});
   event.preventDefault();
  }

  const [isExpanded,setExpanded]=useState(false)
  function onClick(event){
setExpanded(true);
  }

  return (
    <div>
      <form onClick={onClick} >
      
      {/* Render the title area only when isExpanded is true . */}
      {(isExpanded ? <input onChange={HandleClick} value={newNote.title} name="title" placeholder="Title"/> : (null) ) } 
      
        <textarea   onChange={HandleClick} value={newNote.content} name="content" placeholder="Take a note..." rows="1" />
        
        {/* // Use the zoom effect only when isExpanded is true */}
        <Zoom in={isExpanded}> 
          <button onClick={onSubmit} >
             <AddIcon />
          </button>
        </Zoom>
          </form>
    </div>
  );
}

export default CreateArea;

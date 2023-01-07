import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notecollection from "../note";
import CreateArea from "./CreateArea";




function App(){

    const [noteList,setnoteList]=useState([])
   // console.log("notecollection"+notecollection[0].title);
 
   function AddNote(note){
    console.log(note);
    setnoteList([note,...noteList])
   }
   function RemoveNote(id){
    setnoteList( noteList.filter((noteitem,index)=>{ return index!==id} ) )
   }
    return(<div> 
    <Header /> 
    
    <CreateArea HandleAdd={AddNote} />

      { noteList.map(function(note,index){  
        return <Note id={index} key={index} title={note.title} 
                     content={note.content}
                     deleteNote={RemoveNote} />
        })}
    
    <Footer />
    </div>) 
}

export default App;





import React, { useState, useRef } from 'react';
import './App.css';
import Icon from "./assets/image.png"

function App() {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(['Wash the Car','tsk with drop-down menu','Badge on the right task','Go Grocery Shopping','Wash the car','service the car']);
 
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
 
  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };
  return (
    <div className="App">
        <div className="Navbar">
          <img style={{width:"80px",height:"50px",marginRight:"80%"}}src={Icon} alt="img"/>
         </div>
        <div style={{justifyContent:"flex-start", padding:"20px", }}>
          <h4>Analytical Dashboard</h4>
        </div>

        <div style={{marginLeft:"20%"}}>
          <h2>Task List</h2>
        </div>
        <>
    {
    list &&
    list.map((item, index) => (
      <div style={{backgroundColor:'lightblue', margin:'10px 20%', textAlign:'left', fontSize:'30px', alignItems:"start"}}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable>
          {item}
      </div>
      ))}
      <div style={{display:'flex'}}>
      <div style={{color:'blue',marginLeft:"60%"}}>
         Cancel
      </div>
      <button style={{backgroundColor:"blue", color:"white", borderRadius:"10px", padding:"15px 32px",textAlign:'center',textDecoration:"none",display:"inline-block",fontSize:"16px", marginLeft:"10%"}}>Save</button>
      </div>
     
    </>

    <div className="chatBox">
         
    </div>
    </div>
  );
}

export default App;





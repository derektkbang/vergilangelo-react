import React from 'react';

function Itab(props){


    function HoverOver(e) {
        if(props.out.id != props.activetab){
            e.target.style.background = 'rgb(221, 221, 221)';
            e.target.style.color = 'black';
        }
        else{
            e.target.style.background = 'black';
            e.target.style.color = 'white';
        }
      }

      function HoverAfter(e) {
        if(props.out.id != props.activetab){
        e.target.style.background = 'rgb(52, 52, 52)';
        e.target.style.color = 'white'
        }
        else{
            e.target.style.background = 'black';
            e.target.style.color = 'white';
        }
      }

    const addstyle = ()=>{
        if(props.out.id == props.activetab){
            return {backgroundColor:'black', color:'white'}
        }
        else{
            return {backgroundColor: 'rgb(52, 52, 52)', color:'white'}
        }
    };

    return(
    <div>
      <div style = {addstyle()} onMouseLeave={HoverAfter} onMouseOver={HoverOver} onClick={props.ctab.bind(this,props.out.id)}>{props.out.title}</div>  
    </div>
    );
}

export default Itab;
import React, { Component } from 'react';
import Emaildata from './email';
import Videodata from './video';
import Imagedata from './image';
import './style.css'
import Tabledata from './table';
import Textdata from './text';

class Body extends Component {

    render() {

        var displaycontent = ()=>{
            var activetab = this.props.activetab;
            if(activetab===1){
                return <Textdata/>
            }
            else if (activetab===2){
                return <Imagedata/>
            }
            else if (activetab===3){
                return <Videodata/>
            }
            else if(activetab===4){
                return <Tabledata/>
            }
            else{
                return <Emaildata/>
            }

        }
        return (displaycontent())
    }
}
export default Body;
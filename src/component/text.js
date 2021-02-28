import React from "react"
import ReactDOM from "react-dom"
import './style.css';

function Textdata() {
    return(
        <div>
        <body>
        <form action="index.js">
                    <label for="fName">First name: </label>
                    <br></br>
                    <input type="text" id="fName" name="First"></input>
                    <br></br>
                    <br></br>
                    <label for="lName">Last name: </label>
                    <br></br>
                    <input type="text" id="lName" name="Last"></input>
                    <br></br>
                    <label>
                    <br></br>
                    <input type ="radio" value="Red" name="Team"></input>
                    Red Team
                    <span></span>
                    </label>
                    <label>
                    <input type ="radio" value="Blue" name="Team"></input>
                    Blue Team
                    <span></span>
                    </label>
                    <br></br>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                    </form>
        </body>
        </div>
    )
}
export default Textdata;
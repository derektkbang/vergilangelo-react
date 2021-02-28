import React from "react"
import ReactDOM from "react-dom"
import './style.css';

function Emaildata(){
    return(
<body>
    <label for="email">E-Mail Address:</label><br></br>
    <br></br>
    <input type="text" id="email" name="email"></input>
    <br></br>
    <br></br>
    <button type="submit" >Submit</button>
    <script defer type='text/jsx'>
        {

    function check(str) 
        {
            if (str.includes("@")&&(str.endsWith(".edu")||str.endsWith(".com")))
                alert("Email address approved.");
            else
              alert("Invalid email address.");
        }
    }

</script>
</body>
)
}

export default Emaildata;
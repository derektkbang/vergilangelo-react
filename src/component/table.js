import React from "react"
import ReactDOM from "react-dom"
import './style.css';

function Tabledata(){
    return(
<body>
<h3>Things that make me feel smarter:</h3>
    <table>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
        <tr>
          <td>Tiers Exist - My Argument</td>
          <td>Fighting game expert Bafael describes the nature of tiers and the belief that they do not exist using Ultimate Mortal Kombat 3 </td>
          <td><a href="https://www.youtube.com/watch?v=6mBNdB-mrGk">Source</a></td>
        </tr>
        <tr>
          <td>How Aladdin Changed Animation (by Screwing Over Robin Williams)</td>
          <td>Lindsay Ellis goes over the history of Aladdin and how Robin Williams' fears of celebrity voice acting taking over the animated movie industry were realized</td>
          <td><a href="https://www.youtube.com/watch?v=nyiBdccfNkg">Source</a></td>
          
        </tr>
        <tr>
          <td>DefunctTV: The History of Oobi</td>
          <td>Kevin Perjurer tells the tale of the rather bizarre puppet show without puppets that I had vague memories of but could never quite recall in its fullest.</td>
          <td><a href="https://www.youtube.com/watch?v=bWhFKMn08u8">Source</a></td>
        </tr>
      </table>
      
      
</body>
    )
}

export default Tabledata;
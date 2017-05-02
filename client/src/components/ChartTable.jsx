import React from 'react'
import TableRow from './TableRow.jsx'

const ChartTable = (props) => {

  if(!props.songs.length){
    return null
  }
  
 const tableRows = props.songs.map((song, index)=>{
   return(
    <TableRow  artURL ={song['im:image'][1].label} songLink= {song.link[1].attributes.href}  mediaType={song.link[1].attributes.type} position= {index+1} title ={song.title.label} artist={song['im:artist'].label} key={index}>
  </TableRow>
 
     )
 })

return(
  <div className="chartTable">
  <table>
      <tbody>
        <tr>
        <th>Position</th>
        <th>Title</th>
        <th>Artist</th>
        <th>Album Cover</th>
        <th>Play Song</th>
        </tr>
        {tableRows}
      </tbody>
    </table>
 
  </div>
 
  )
}

export default ChartTable


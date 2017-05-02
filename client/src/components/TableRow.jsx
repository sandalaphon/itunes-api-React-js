import React from 'react'

const TableRow = (props) => {

  return (
    <tr>
    <td>{props.position}</td>
    <td>{props.title}</td>
    <td>{props.artist}</td>
    <td><img src={props.artURL}/></td>
    <td>
    <audio controls>
    <source src={props.songLink} type={props.mediaType}>
    </source>
    </audio>
    </td>
    </tr>
    )

}


export default TableRow
import React from 'react'

export const OneViewNote = ({text, index, setTimeLoad}) => {

  const onClick = (e) => {
    fetch(`http://localhost:7070/notes/${e.target.id}`, { method: 'DELETE' })
    setTimeout(() => {setTimeLoad(new Date)}, 10)
  }

  return (
    <li className="note" key={index}>
      <p className="note--text">{text}</p>
      <button className="button--delete" onClick={onClick} id={index}>DELETE</button>
    </li>
  )
}

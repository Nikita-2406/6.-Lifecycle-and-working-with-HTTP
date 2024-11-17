import { useState } from "react"

export const AddNote = ({setTimeLoad}) => {
  const [textContent, setTextContent] = useState('')

  const onchange = (e) => {
    setTextContent(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(textContent)
    if (textContent) {
      fetch("http://localhost:7070/notes"
    ).then(response => response.json())
    .then(data => {
      // const index = data.length
      const dataPOST = {
        id: data.length,
        content: textContent
      }
      fetch("http://localhost:7070/notes", {
      method: "POST",
      body: JSON.stringify(dataPOST)
    })
    .then(response => console.log(response))
    })
    setTextContent('')
    
    setTimeout(() => {setTimeLoad(new Date)}, 10)
  } else {alert("Пустое поле ввода!")}

    // console.log(e)
  }

  return (
    <div className="block--add">
      <form onSubmit={onSubmit}>
        <h3 className="header--new--note">New Note</h3>
        <textarea className="input--node" onChange={onchange} value={textContent}></textarea><br></br>
        <button className="add--button">Add</button>
      </form>
    </div>
  )
}

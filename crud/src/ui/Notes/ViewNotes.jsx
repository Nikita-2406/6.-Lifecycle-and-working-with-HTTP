import { useEffect, useState } from "react"
import { OneViewNote } from "./OneViewNote"

export const ViewNotes = ({setTimeLoad, timeLoad}) => {
  const [listNotes, setListNote] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:7070/notes"
  ).then(response => response.json())
  .then(data => {
    setListNote(data)
  })
  .catch(error => console.error("Error:", error));
  }, [timeLoad])

  const rebootData = () => {
    setTimeLoad(new Date)
  //   fetch("http://localhost:7070/notes"
  // ).then(response => response.json())
  // .then(data => {
  //   setListNote(data)
  // })
  // .catch(error => console.error("Error:", error));
  }

  const view = []

  listNotes.forEach(elem => {
    view.push(
      <OneViewNote text={elem.content} index={elem.id} setTimeLoad={setTimeLoad}/>
    )
  })

  return (
    <div className="view--notes">
      <h2 className="header--view--notes">Notes</h2>
      <button className="button--reboot" onClick={rebootData}>reboot</button>
      <ul className="body--view--notes">
        {view}
      </ul>
    </div>
  )
}

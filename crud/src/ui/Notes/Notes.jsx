import { useState } from "react"
import { AddNote } from "./AddNote"
import { ViewNotes } from "./viewNotes"

export const Notes = () => {
  const [timeLoad, setTimeLoad] = useState(new Date)
  return (<>
    <ViewNotes setTimeLoad={setTimeLoad} timeLoad={timeLoad}/>
    <AddNote setTimeLoad={setTimeLoad}/>
  </>)
}

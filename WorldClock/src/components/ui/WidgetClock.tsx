import { useState } from "react"
import { ClockForm } from "./ClockForm"
import { ClockView } from "./ClockView"


export interface IuseStateInfoClock {
  name: string
  deviation: number
}

export const WidgetClock = () => {
  const [infoClock, setInfoClock] = useState<IuseStateInfoClock[]>([])
  // const [time]
  console.log()

  return (<>
  <ClockForm setInfoClock={(newClock: IuseStateInfoClock) => {
    // let ready = infoClock
    // ready = ready?.concat([newClock])
    setInfoClock(infoClock?.concat([newClock]))
  }}/>
  <ClockView infoClock={infoClock}
      setInfoClock={setInfoClock}/>
  </>)
}

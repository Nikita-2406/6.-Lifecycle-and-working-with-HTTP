import { useEffect, useState } from "react";
import { IuseStateInfoClock } from "./WidgetClock";

interface IOneViewProps {
  index: number
  infoClock: IuseStateInfoClock[] | undefined
  elem: IuseStateInfoClock
  setInfoClock: Function
}

export const OneView = ({index, infoClock, elem, setInfoClock}: IOneViewProps) => {

  const [date, setDate] = useState(new Date)
  
  let timeout:number;

  const loadTime = () => {
    console.log("load Time!!!")
    setDate(new Date)
  }

  useEffect(() => {
    timeout = setTimeout(loadTime, 1000)
  }, [date])

  useEffect(() => {
    console.log("О, привет!")
    return () => {
      console.log("закончиили свою жизнь(")
      clearTimeout(timeout)
    } // WillUnMount
  }, []) // WillMount

  const hours = date.getHours() + elem.deviation < 0 ? 24 + (date.getHours() + elem.deviation) : date.getHours() + elem.deviation

  const timeNow = `${hours % 24}:${date.getMinutes()}:${date.getSeconds()}`
  
  const onClickButton = () => {
    infoClock?.splice(infoClock?.indexOf(elem), 1)
    setInfoClock(infoClock?.concat())
  }

  return (
    <div className="time--block" key={index}>
      <div>{elem.name}</div>
      <div>{timeNow}</div>
      <button onClick={onClickButton}>close</button>
    </div>
  )
}

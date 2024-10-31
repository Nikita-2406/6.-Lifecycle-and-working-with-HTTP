// import { useEffect, useState } from "react"
import { OneView } from "./OneView"
import { IuseStateInfoClock } from "./WidgetClock"

interface IClockViewPeops {
  infoClock: IuseStateInfoClock[] | undefined
  setInfoClock: Function
}

export const ClockView = ({infoClock, setInfoClock}: IClockViewPeops) => {
  // const date = new Date()
  let index = 0;
  return (<>
  {infoClock?.map(elem => {
    index++
    return <OneView
        index={index}
        infoClock={infoClock}
        elem={elem}
        setInfoClock={setInfoClock}/>
  })
  }
  </>)
}

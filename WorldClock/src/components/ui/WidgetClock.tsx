import { ChangeEvent, useEffect, useState } from "react"
import { ClockForm } from "./ClockForm"
import { ClockView } from "./ClockView"


export interface IuseStateInfoClock {
  // [key: string]: string
  name: string
  deviation: number
}

export const WidgetClock = () => {
  const [infoClock, setInfoClock] = useState<IuseStateInfoClock[]>([])
// <<<<<<< HEAD
//   // const [inputInfo, setInputInfo] = useState({
//   //   name: "", 
//   //   deviation: 0
//   // })

//   const inputInfo:IuseStateInfoClock = {
//       name: "", 
//       deviation: 0
//     }
//   console.log("Мы начали")
// =======
  // const [time]
  console.log()
// >>>>>>> parent of 8a5c92e (ДО)

  // useEffect(() => {
  //   console.log("Main start")
  //   return () => {console.log("Main finish")}
  // }, [])

  // const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   // const res = infoClock
  //   // console.log([inputInfo])
  //   // infoClock?.push(inputInfo)
  //   setInfoClock(infoClock?.concat([inputInfo]))
  //   // console.log("add")
  //   // console.log(res)
  // }

  // const handlerChange = ({target}: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = target
  //   inputInfo[name] = value
  // }
  
  return (<>
    {/* <form onSubmit={handlerSubmit}>
      <input type="text" name="name" onChange={handlerChange}/>
      <input type="number" name="deviation" onChange={handlerChange} value={inputInfo.deviation}/>
      <button>Add</button>
    </form> */}
  <ClockForm setInfoClock={(newClock: IuseStateInfoClock) => {
    setInfoClock(infoClock?.concat([newClock]))
  }}/>
  <ClockView infoClock={infoClock}
      setInfoClock={setInfoClock}/>
  </>)
}

import { ChangeEvent, useState } from "react"
// import { IuseStateInfoClock } from "./WidgetClock"

interface IClockFormProps {
  setInfoClock: Function
}

export const ClockForm = ({setInfoClock}: IClockFormProps) => {
  const [inputInfo, setInputInfo] = useState({
    name: "", 
    deviation: 0
  })

  const handlerChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setInputInfo((prev) => ({
      ...prev, 
      [name]: name === "deviation" ? Number(value) : value 
    }))
  }

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const res = infoClock
    // console.log([inputInfo])
    // infoClock?.push(inputInfo)
    setInfoClock(inputInfo)
    // console.log("add")
    // console.log(res)
  }

  
  return (
    <form onSubmit={handlerSubmit}>
      <input type="text" name="name" onChange={handlerChange}/>
      <input type="number" name="deviation" onChange={handlerChange} value={inputInfo.deviation} min={-24} max={24}/>
      <button>Add</button>
    </form>
  )
}

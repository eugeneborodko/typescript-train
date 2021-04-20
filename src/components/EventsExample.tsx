import React, { useState } from "react"
import { useRef } from "react"
import { FC } from "react"

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value)
    console.log(inputRef.current?.value)
  }

  const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('Drag')
  }

  const overHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDrag(true)
  }

  const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDrag(false)
  }

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDrag(false)
    console.log('drop')
  }

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder="Управляемый" />
      <input ref={inputRef} type="text" placeholder="Неуправляемый" />
      <button onClick={clickHandler}>button</button>
      <div onDrag={dragHandler} draggable
        style={{ width: '200px', height: '200px', background: 'red' }}>

      </div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={overHandler}
        style={{ width: '200px', height: '200px', background: isDrag ? 'blue' : 'red', marginTop: '15px' }}>
      </div>
    </div>
  )
}

export default EventsExample
import { useState } from 'react'
import { evaluate } from "mathjs"

export const numbersRows = [
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["3", "2", "1"],
  ["0"]
]

export const operations = ["/", "*", "-", "+", "="]

const Calculator = () => {
  const [value, setValue] = useState("")

  const handleBtnClick = (btnValue: string) => {
    if(btnValue === "=") {
      setValue((prev) => evaluate(prev))
      return
    }
    setValue((prev) => prev + btnValue)
  }

  return (
    <section>
      <h2>My Calculator</h2>
      <input onChange={() => {}} value={value} />
      {numbersRows.map((row: string[], index) => (
        <div key={index + 1} role={`row`}>
          {row.map((number: string) => (
            <button key={number} onClick={() => handleBtnClick(number)}>
              {number}
            </button>
          ))}
        </div>
      ))}
      {operations.map((operation: string, index) => (
        <button key={index} onClick={() => handleBtnClick(operation)}>
          {operation}
        </button>
      ))}
    </section>
  )
}

export default Calculator

import React, { useState } from "react"
import Counter from "./counter"
import CounterHooks from "./counterHooks"
export const ThemeContext = React.createContext()
function App() {
  const [theme, setTheme] = useState("red")
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={9} />
      CounterHooks
      <CounterHooks initialCount={8} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red"
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  )
}

export default App

import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <h1>navbar</h1>
      <div className="h-screen">
      <Outlet />
      </div>
      <h1>Footer</h1>
    </>
  )
}

export default App

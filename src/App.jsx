import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App

import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Tasks from '../pages/Tasks.jsx'
import About from '../pages/About.jsx'

const AppRoutes = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
  )
}

export default AppRoutes
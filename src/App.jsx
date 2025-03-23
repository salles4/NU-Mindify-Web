import { BrowserRouter, Route, Routes } from 'react-router'
import StudentsPage from './pages/Sample/StudentsPage'
import Sample from './pages/Sample/Sample'
import Dashboard from './pages/Sample/Dashboard'
import Glossary from './pages/Sample/Glossary'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/glossary' element={<Glossary />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from './pages/dashboard/Dashboard'
import Glossary from './pages/glossary/Glossary'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/glossary' element={<Glossary />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

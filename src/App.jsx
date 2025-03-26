import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard/Dashboard'
import Glossary from './pages/glossary/Glossary'
// import Template from './pages/template/Template'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/glossary' element={<Glossary />}></Route>
          {/* <Route path='/template' element={<Template />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

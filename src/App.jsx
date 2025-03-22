import { BrowserRouter, Route, Routes } from 'react-router'
import Sample from './pages/Sample/Sample'
import StudentsPage from './pages/Sample/StudentsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sample />} />
          <Route path='/students' element={<StudentsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

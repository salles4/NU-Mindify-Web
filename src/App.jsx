import { BrowserRouter, Route, Routes } from 'react-router'
import Sample from './pages/Sample/Sample'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

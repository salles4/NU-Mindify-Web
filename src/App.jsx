import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import { ActiveContext } from './contexts/Contexts'


import Dashboard from './pages/dashboard/Dashboard'
import Analytics from './pages/analytics/Analytics'
import Reports from './pages/reports/Reports'
import Leaderboard from './pages/leaderboard/Leaderboard'
import ManageQuestion from './pages/questions/ManageQuestion'
import ManageStudents from './pages/students/ManageStudents'
import ManageGlossary from './pages/glossary/ManageGlossary'
import Profile from './pages/profile/Profile'
import AccountManagement from './pages/accounts/AccountManagement'



function App() {
  const [isActive, setActive] = useState(false)
  const [selected, setSelected] = useState('dashboard')

  return (
    <ActiveContext.Provider value={{ isActive, setActive, selected, setSelected }}>
      <BrowserRouter>
        <div className='main-container'>
          <Sidebar />
          
          <div className='content-container'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/analytics' element={<Analytics />} />
              <Route path='/reports' element={<Reports />} />
              <Route path='/leaderboard' element={<Leaderboard />} />
              <Route path='/question' element={<ManageQuestion />} />
              <Route path='/glossary' element={<ManageGlossary />} />
              <Route path='/students' element={<ManageStudents />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/account' element={<AccountManagement />} />
              <Route path='*' element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ActiveContext.Provider>
  )
}

export default App

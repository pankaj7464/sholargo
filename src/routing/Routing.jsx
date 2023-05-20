import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aboutus from '../pages/Aboutus'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Account from '../component/dashboard/account/Account'
import Scholarship from '../component/dashboard/scholarship/Scholarship'
import Analytics from '../component/dashboard/Analytics'
import Saved from '../component/dashboard/scholarship/Saved'
import Search from '../component/dashboard/scholarship/Search'
import Applied from '../component/dashboard/scholarship/Applied'
import UserForm from '../component/dashboard/account/UserForm'
const Routing = () => {
  return <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='analytics' element={<Analytics />} />
        <Route path='account' element={<Account />} >
          <Route path='' element={<UserForm />} />
          <Route path='education' element={<UserForm />} />
        </Route>
        <Route path='scholarships' element={<Scholarship />}>
          <Route path='' element={<Search />} />
          <Route path='saved' element={<Saved />} />
          <Route path='applied' element={<Applied />} />
        </Route>
      </Route>
      <Route path='/about-us' element={<Aboutus />} />
    </Routes>
  </>
}

export default Routing
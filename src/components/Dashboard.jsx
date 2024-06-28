// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useLocation } from 'react-router-dom'

function Dashboard() {
  const location = useLocation();
  const { email } = location.state || { email: ''};
  return (
    <div>
      <h1> {email}</h1>
    </div>
  )
}

export default Dashboard
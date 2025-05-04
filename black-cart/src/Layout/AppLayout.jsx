import React from 'react'

function AppLayout({children}) {
  return (
    <div className= 'max-w-[1320px] w-full'>
      {children}
    </div>
  )
}

export default AppLayout

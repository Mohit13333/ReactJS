import React from 'react'

function Logo({width = '100px'}) {
  return (
    <img src="https://warwick.ac.uk/services/library/using/productivity-tools/microsoft_todo_logo.jpg" alt="LOGO" width={width} className='rounded-lg'/>
  )
}

export default Logo
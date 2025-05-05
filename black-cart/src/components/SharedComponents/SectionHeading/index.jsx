import React from 'react'

function SectionHeading({heading}) {
  return (
    <div className = 'w-full flex items-center justify-between'>
            <div>{heading}</div>
            <div></div>
    </div>
  )
}

export default SectionHeading

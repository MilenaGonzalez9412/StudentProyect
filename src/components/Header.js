import React from 'react'
import './Header.css'

export default function Header({title, year}) {
  return (
   <header>
        <div className="d-flex align-items-center p-3 my-3 text-black-50 bg-purple rounded shadow-sm">
      
        <div className="lh-100">
            <h6 className="mb-0 text-black lh-100">{title} {year}</h6>
        </div>
    </div>
   </header>
  )
}

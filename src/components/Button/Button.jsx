import React from 'react'
import './Button.css'

export default function Button({type, onclick, loading, nfbtn, btnLight, children}) {
  return (
    <button type={type} onClick={onclick} className="button" disabled={loading} style={{ width: nfbtn ? "50%" : "", backgroundColor: btnLight ? "#fff" : "", color: btnLight ? "#000" : "", border: btnLight ? "1px solid #dee2e6" : ""}}>{children}</button>
  )
}

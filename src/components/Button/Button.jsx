import React from 'react'
import './Button.css'

export default function Button({loading, type, label, nfbtn, btnLight}) {
  return (
    <button className="button" disabled={loading} onClick={type} style={{ width: nfbtn ? "50%" : "", backgroundColor: btnLight ? "#fff" : "", color: btnLight ? "#000" : "", border: btnLight ? "1px solid #dee2e6" : ""}}>{label}</button>
  )
}

import React from 'react'
import Button from '../Button/Button'
import './PasswordResetForm.css'

export default function PasswordResetForm({email, setEmail, triggerResetEmail}) {
  return (
    <div className="passwordreset-form">
        <form onSubmit={triggerResetEmail}>
            <div>
                <label htmlFor='email-address'>Email address</label>
                <input id="email-address" value={email} name={email} type="email" required placehoder="email address" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <Button label="Reset password" />
        </form>
    </div>
  )
}

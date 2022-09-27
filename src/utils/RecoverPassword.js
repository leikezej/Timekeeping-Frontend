import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Button, GhostInput } from "./styledComponents"
import RecoverPasswordStyles from "./RecoverPassword.styles"
import axios from "axios"

class RecoverPassword extends Component {
  state = {
    email: "",
    submitted: false
  }
  handleChange = e => {
    this.setState({ email: e.target.value })
  }
  sendPasswordResetEmail = e => {
    e.preventDefault()
    const { email } = this.state
    axios.post(`http://localhost:8080/api/auth/reset_password/${email}`)
    this.setState({ email: "", submitted: true })
  }
  render() {
    const { email, submitted } = this.state
    return (
      <RecoverPasswordStyles>
        <h3>Reset your password</h3>
        {submitted ? (
          <div className="reset-password-form-sent-wrapper">
            <p>
              If that account is in our system, we emailed you a link to reset
              your password.emailRouter
            </p>
            <Link to="/login" className="ghost-btn">
              Return to sign in
            </Link>
          </div>
        ) : (
          <div className="reset-password-form-wrapper">
            <p>
              It happens to the best of us. Enter your email and we'll send you
              reset instructions.
            </p>
            <form onSubmit={this.sendPasswordResetEmail}>
              <GhostInput
                onChange={this.handleChange}
                value={email}
                placeholder="Email address"
              />
              <Button className="btn-primary password-reset-btn">
                Send password reset email
              </Button>
            </form>
            <Link to="/login">I remember my password</Link>
          </div>
        )}
      </RecoverPasswordStyles>
    )
  }
}
export default RecoverPassword
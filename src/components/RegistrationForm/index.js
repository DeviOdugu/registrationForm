// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmit: false,
    errorMsgForFirst: '',
    errorMsgForLast: '',
  }

  onClickButton = () => {
    this.setState({
      isSubmit: false,
      firstName: '',
      lastName: '',
    })
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value,
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value,
    })
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const errorMessage = 'Required'
    if (firstName === '') {
      this.setState({
        errorMsgForFirst: errorMessage,
      })
    } else {
      this.setState({
        errorMsgForFirst: '',
      })
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const errorMessage = 'Required'
    if (lastName === '') {
      this.setState({
        errorMsgForLast: errorMessage,
      })
    } else {
      this.setState({
        errorMsgForLast: '',
      })
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    const errorMessage = 'Required'
    if (firstName === '' && lastName === '') {
      this.setState({
        errorMsgForFirst: errorMessage,
        errorMsgForLast: errorMessage,
      })
    } else if (firstName === '') {
      this.setState({
        errorMsgForFirst: errorMessage,
      })
    } else if (lastName === '') {
      this.setState({
        errorMsgForLast: errorMessage,
      })
    } else {
      this.setState({
        errorMsgForFirst: '',
        errorMsgForLast: '',
        isSubmit: true,
      })
    }
  }

  render() {
    const {
      firstName,
      lastName,
      errorMsgForFirst,
      errorMsgForLast,
      isSubmit,
    } = this.state
    return (
      <div className="card-container">
        <h1 className="heading"> Registration </h1>
        {!isSubmit && (
          <form className="card" onSubmit={this.onSubmitForm}>
            <label htmlFor="firstName" className="label">
              FIRST NAME
            </label>

            <input
              value={firstName}
              type="text"
              placeholder="First name"
              id="firstName"
              className="name"
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
            />

            <p className="error"> {errorMsgForFirst} </p>
            <label htmlFor="lastName" className="label">
              LAST NAME
            </label>

            <input
              value={lastName}
              type="text"
              placeholder="Last name"
              id="lastName"
              className="name"
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
            />
            <p className="error"> {errorMsgForLast} </p>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}
        {isSubmit && (
          <div className="card1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              height="25px"
              width="25px"
            />
            <p className="s"> Submitted Successfully </p>
            <button
              type="button"
              onClick={this.onClickButton}
              className="submit-button-response"
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm

import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  AppContainer,
  LoginBgContainer,
  LoginImgContainer,
  WebsiteLogo,
  FormContainer,
  WelcomeHeading,
  LabelText,
  InputBox,
  LoginBtn,
} from './styledComponents'

class LoginPage extends Component {
  state = {userId: '', pin: '', showLoginErr: false, errorMsg: ''}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangeUserPin = event => {
    this.setState({pin: event.target.value})
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showLoginErr: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {user_id: userId, pin}
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const responsive = await fetch(apiUrl, options)
    const data = await responsive.json()

    if (responsive.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    const {userId, pin, showLoginErr, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppContainer>
        <LoginBgContainer>
          <LoginImgContainer>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </LoginImgContainer>
          <FormContainer onSubmit={this.onSubmitForm}>
            <WelcomeHeading>Welcome Back!</WelcomeHeading>
            <LabelText htmlFor="username">User ID</LabelText>
            <InputBox
              id="username"
              type="text"
              placeholder="Enter User Id"
              onChange={this.onChangeUserId}
              value={userId}
            />
            <LabelText htmlFor="pin">PIN</LabelText>
            <InputBox
              id="pin"
              type="password"
              placeholder="Enter PIN"
              onChange={this.onChangeUserPin}
              value={pin}
            />
            <LoginBtn type="submit">Login</LoginBtn>
            {showLoginErr && (
              <p style={{color: 'red', marginTop: 0}}>{errorMsg}</p>
            )}
          </FormContainer>
        </LoginBgContainer>
      </AppContainer>
    )
  }
}

export default LoginPage

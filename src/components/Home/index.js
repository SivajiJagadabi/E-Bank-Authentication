import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  HomeContainer,
  HeaderContainer,
  WebSiteLogo,
  LoginBtn,
  DigitalCardHead,
  VisaCardImg,
} from './styledComponents'

class HomePage extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  render() {
    return (
      <HomeContainer>
        <HeaderContainer>
          <WebSiteLogo
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
          <LoginBtn type="button" onClick={this.onClickLogout}>
            Logout
          </LoginBtn>
        </HeaderContainer>
        <DigitalCardHead>Your Flexibility, Our Excellence</DigitalCardHead>
        <VisaCardImg
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </HomeContainer>
    )
  }
}

export default HomePage

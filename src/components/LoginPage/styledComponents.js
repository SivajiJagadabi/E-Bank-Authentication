import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  background-color: #152850;
  height: 100vh;
`

export const LoginBgContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 80%;
  background-color: white;
  border-radius: 8px;
`

export const LoginImgContainer = styled.div`
  width: 60%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0eefe;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`

export const WebsiteLogo = styled.img`
  width: 70%;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  height: 80vh;
  align-items: center;
  background-color: white;
`

export const WelcomeHeading = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: #183b56;
  align-self: flex-start;
  margin-left: 45px;
`

export const LabelText = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: #5a7184;
  margin-top: 20px;
  align-self: flex-start;
  margin-left: 45px;
  margin-bottom: 0px;
`

export const InputBox = styled.input`
  width: 80%;
  height: 34px;
  border: 1px solid lightGray;
  border-radius: 3px;
  margin-top: 8px;
`

export const LoginBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 80%;
  height: 32px;
  color: white;
  background-color: #1565d8;
  border-radius: 5px;
  margin-top: 45px;
`

// https://assets.ccbp.in/frontend/react-js/ebank-login-img.png alt should be website login

// https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png alt should be website logo

// https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png alt should be digital card

// https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png alt should be not found

// Hex: #152850
// Hex: #e0eefe
// Hex: #183b56
// Hex: #5a7184
// Hex: #ffffff
// Hex: #c3cad9
// Hex: #1565d8
// Hex: #ff0b37
// Hex: #f8fafc

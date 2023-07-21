import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 30px;
`

export const HomeContainer = styled.div`
  background-color: #152850;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const WebSiteLogo = styled.img`
  height: 50px;
  width: 100px;
`

export const LoginBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 90px;
  height: 32px;
  color: white;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid white;
`

export const DigitalCardHead = styled.h1`
  font-size: 40px;
  color: white;
  margin-top: 50px;
  text-align: center;
`

export const VisaCardImg = styled.img`
  width: 550px;
  align-self: center;
  margin-top: 20px;
`

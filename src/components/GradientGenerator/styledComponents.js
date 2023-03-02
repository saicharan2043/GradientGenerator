// Style your elements here

import styled from 'styled-components'

export const BgColor = styled.div`
  background-image: linear-gradient(
    to ${props => props.directionMain},
    ${props => props.colorOneMain},
    ${props => props.colorTwoMain}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const Heading = styled.h1`
  width: 70%;
  font-family: 'Roboto';
  font-size: 50px;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 767px) {
    width: 90%;
    font-size: 30px;
  }
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 40px;
`

export const UnOrderList = styled.ul`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  padding: 0px;
  @media (max-width: 767px) {
    width: 90%;
  }
`

export const ColorContainerSuper = styled.div`
  display: flex;
  width: 30%;
  margin-bottom: 15px;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    width: 90%;
  }
`

export const SubColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-right: 20px;
  margin-left: 20px;
  @media (max-width: 767px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`

export const TextColor = styled(Paragraph)`
  font-size: 18px;
  align-self: center;
  margin-bottom: 15px;
`
export const Input = styled.input`
  width: 150px;
  height: 50px;
  background-color: transparent;
  border-width: 0px;
`

export const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: #00c9b7;
  border-radius: 8px;
  border-width: 0px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`

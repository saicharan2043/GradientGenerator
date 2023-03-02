// Style your elements here
import styled from 'styled-components'

export const List = styled.li`
  width: 150px;
  height: 40px;
  border-radius: 7px;
  background-color: #ffffff;
  border-width: 0px;
  font-family: 'Roboto';
  font-size: 15px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  font-weight: bold;
  align-self: center;
  opacity: ${props => (props.isTrue === true ? 1 : 0.5)};
  @media (max-width: 767px) {
    width: 40%;
    margin-bottom: 10px;
  }
`

export const TabButton = styled.button`
  background-color: transparent;
  border-width: 0px;
`

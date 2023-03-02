import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  BgColor,
  Heading,
  Paragraph,
  UnOrderList,
  ColorContainerSuper,
  SubColorContainer,
  TextColor,
  Input,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    colorOneNormal: '#8ae323',
    colorTwoNormal: '#014f7b ',
    colorOneMain: '#8ae323',
    colorTwoMain: '#014f7b ',
    directionNormal: 'top',
    directionMain: 'top',
  }

  changeColorOne = event => {
    this.setState({colorOneNormal: event.target.value})
  }

  changeColorTwo = event => {
    this.setState({colorTwoNormal: event.target.value})
  }

  clickTab = value => {
    this.setState({directionNormal: value})
  }

  clickButton = () => {
    const {colorOneNormal, colorTwoNormal, directionNormal} = this.state
    this.setState({
      colorOneMain: colorOneNormal,
      colorTwoMain: colorTwoNormal,
      directionMain: directionNormal,
    })
  }

  render() {
    const {
      colorOneNormal,
      colorTwoNormal,
      directionNormal,
      colorOneMain,
      colorTwoMain,
      directionMain,
    } = this.state

    return (
      <BgColor
        colorOneMain={colorOneMain}
        colorTwoMain={colorTwoMain}
        directionMain={directionMain}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnOrderList>
          {gradientDirectionsList.map(echValue => (
            <GradientDirectionItem
              itemlist={echValue}
              key={echValue.directionId}
              clickTab={this.clickTab}
              isTrue={echValue.value === directionNormal}
            />
          ))}
        </UnOrderList>
        <Paragraph>Pick the colors</Paragraph>
        <ColorContainerSuper>
          <SubColorContainer>
            <TextColor>{colorOneNormal}</TextColor>
            <Input
              type="color"
              onChange={this.changeColorOne}
              value={colorOneNormal}
            />
          </SubColorContainer>

          <SubColorContainer>
            <TextColor>{colorTwoNormal}</TextColor>
            <Input
              type="color"
              onChange={this.changeColorTwo}
              value={colorTwoNormal}
            />
          </SubColorContainer>
        </ColorContainerSuper>
        <Button onClick={this.clickButton}>Generate</Button>
      </BgColor>
    )
  }
}

export default GradientGenerator

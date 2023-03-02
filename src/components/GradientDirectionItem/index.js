// Write your code here
import {List, TabButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {itemlist, clickTab, isTrue} = props
  const {value, displayText} = itemlist
  console.log(isTrue)

  const activeTab = () => {
    clickTab(value)
  }

  return (
    <List onClick={activeTab} isTrue={isTrue}>
      <TabButton onClick={activeTab}>{displayText}</TabButton>
    </List>
  )
}

export default GradientDirectionItem

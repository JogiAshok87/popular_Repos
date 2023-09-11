// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguageItem} = props
  const {language} = eachLanguageItem
  return (
    <li>
      <p>{language}</p>
    </li>
  )
}

export default LanguageFilterItem

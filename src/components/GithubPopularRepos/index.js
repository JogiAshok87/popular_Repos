import {Component} from 'react'

import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">popular</h1>
        <ul>
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              eachLanguageItem={eachLanguage}
              key={eachLanguage.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos

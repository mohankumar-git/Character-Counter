import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './App.css'
import {
  AppContainer,
  ResponsiveContainer,
  CharacterCountContainer,
  UserCharacter,
  ContentContainer,
  CharacterCountHeading,
  UserCharacterHeading,
  SearchContainer,
  Input,
  Button,
  Image,
  ListContainer,
  Items,
} from './styledComponents'

class App extends Component {
  state = {userInput: '', savedText: []}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  saveUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const obj = {
      id: uuid(),
      text: userInput,
    }
    this.setState(prevState => ({
      userInput: '',
      savedText: [...prevState.savedText, obj],
    }))
  }

  renderList = () => {
    const {savedText} = this.state

    return (
      <ListContainer>
        {savedText.map(item => (
          <li key={item.id}>
            <Items>
              {item.text} : {item.text.length}
            </Items>
          </li>
        ))}
      </ListContainer>
    )
  }

  renderImage = () => (
    <>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </>
  )

  render() {
    const {userInput, savedText} = this.state
    console.log(savedText)
    return (
      <AppContainer>
        <ResponsiveContainer>
          <CharacterCountContainer>
            <ContentContainer>
              <CharacterCountHeading>
                Count the characters like a Boss
              </CharacterCountHeading>
              {savedText.length !== 0 ? this.renderList() : this.renderImage()}
            </ContentContainer>
          </CharacterCountContainer>
          <UserCharacter>
            <ContentContainer>
              <UserCharacterHeading>Character Counter</UserCharacterHeading>
              <SearchContainer onSubmit={this.saveUserInput}>
                <Input
                  type="text"
                  placeholder="Enter the Characters here"
                  onChange={this.onChangeUserInput}
                  value={userInput}
                />
                <Button type="submit">Add</Button>
              </SearchContainer>
            </ContentContainer>
          </UserCharacter>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default App

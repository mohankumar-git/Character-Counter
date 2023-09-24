import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  width: 80%;
  height: 550px;
  border-radius: 12px;
  display: flex;
`

export const CharacterCountContainer = styled.div`
  background-color: #f9bf21;
  width: 50%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`
export const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

export const UserCharacter = styled.div`
  background-color: #0f172a;
  width: 50%;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`
export const CharacterCountHeading = styled.h1`
  color: #334155;
  font-size: 26px;
  font-family: 'Roboto';
  font-weight: 600;
  width: 100%;
`

export const UserCharacterHeading = styled.h1`
  color: #fac534;
  font-size: 26px;
  font-family: 'Roboto';
  font-weight: 600;
  text-align: center;
  width: 100%;
`
export const SearchContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Input = styled.input`
  color: #000000;
  font-size: 15px;
  font-family: 'Roboto';
  background-color: #ffffff;
  border: none;
  outline: none;
  padding: 8px 16px;
  border-radius: 5px;
  margin-right: 16px;
`
export const Button = styled.button`
  background-color: #fac534;
  color: #334155;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 8px 12px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
`
export const Image = styled.img`
  width: 100%;
  margin-top: 20px;
`
export const ListContainer = styled.ul`
  margin-top: 20px;
  list-style: none;
  padding-left: 0px;
`

export const Items = styled.p`
  color: #334155;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
`

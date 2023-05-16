import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 5px;
`;

const Img = styled.img`
  margin-bottom: 5px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  text-align: start;
  margin: 5px;
`;

const Description = styled.p`
  color: grey;
  font-size: 0.8rem;
  text-align: start;
  margin: 5px;
`;

const Subtitle = styled.div`
  border-top: solid lightgrey;
  text-align: start;
  margin: 5px;
  padding: 5px 0px;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  background-color: lightgrey;
  border-radius: 20px;
  padding: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background-color: lightgreen;
  color: white;
  margin: 20px;
  box-sizing: content-box;
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Img src="https://cdn.pixabay.com/photo/2023/04/20/09/54/pecan-nuts-7939326_1280.jpg" alt="" />
      <Title>Card Title</Title>
      <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Description>
      <Subtitle>Subtitle</Subtitle>
      <SubContainer>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
      </SubContainer>
      <Button>Action</Button>
    </Container>
  )
}

export default App

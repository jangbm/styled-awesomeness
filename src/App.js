import React, { Component, Fragment } from "react";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Container>
        <Button>버튼</Button>
        <Button danger>버튼</Button>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 10px;
  padding: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  width: 300px;
  margin: 20px;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#00cec9" : "#ff7675")};
`;

export default App;

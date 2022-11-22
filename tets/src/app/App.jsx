import React from "react";
import styled from "styled-components";
const App = () => {
  return (
    <>
      <Contain>
        <Content>asds</Content>
      </Contain>
    </>
  );
};
const Contain = styled.div`
  height: 100vh;
  padding: 50px;
  background-color: aliceblue;
`;
const Content = styled.div`
  width: 100%;
  background-color: #eaeaea;
  height: 100%;
`;
export default App;

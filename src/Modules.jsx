import React from "react";
import styled from "styled-components";
import ModulesList from "./components/ModulesList";

const Modules = () => {
  return (
    <Wrapper className="container">
      <div>
        <h1 className="heading">Modules</h1>
        <div className="main-product">
          <ModulesList />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .heading {
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export default Modules;

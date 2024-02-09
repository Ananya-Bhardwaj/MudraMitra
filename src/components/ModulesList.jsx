import React from 'react'
import { UseModuleContext } from '../context/ModuleContext'
import styled from 'styled-components';
import Module from '../Module';
const ModulesList = () => {

  const {modules} = UseModuleContext();
  return (
    <Wrapper>
        <div className=' grid grid-two-column'>
            {modules.map((curElem) => {
                return <Module key = {curElem.id} {...curElem}/>
            })}
        </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
    .grid {
        display: grid;
        gap: 1rem;
    }

    .grid-two-column {
        grid-template-columns: repeat(2, 1fr);
    }
`;
export default ModulesList

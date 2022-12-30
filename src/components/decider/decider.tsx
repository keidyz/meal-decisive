import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

const DecideButton = styled.div`
    padding: 2px 10px;
    background-color: #f7fff7;
    border-radius: 5px;
    color: #1a535c;
    font-size: 10vw;
    cursor: pointer;
`

export const Decider: FunctionComponent<{}> = () => {
    return (
        <Wrapper>
            <DecideButton>Choose a meal</DecideButton>
        </Wrapper>
    )
}

import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

// colors
// f7fff7 white
// ff6b6b dark peach

const Background = styled.div`
    background-color: #ff6b6b;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    padding: 20px;
`;

const Title = styled.div`
    color: #f7fff7;
    text-align: center;
`

export const Home: FunctionComponent<{}> = () => {
    return (
        <Background>
            <Title>Meal Decisive</Title>
        </Background>
    );
};

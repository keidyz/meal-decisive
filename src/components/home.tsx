import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import {Options} from './options'
import {Decider} from './decider'
import { Logo } from './svg'

// colors
// f7fff7 white
// ff6b6b dark peach

const Background = styled.div`
    background-color: #ff6b6b;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    padding-top: 20px;
`;

const SubBackground = styled.div`
    padding: 20px;
`;

const LogoSection = styled.div`
    background-color: #f7fff7;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`
// Fork MEAL DECISIVE Spoon
//        ^ plate ^

export const Home: FunctionComponent<{}> = () => {
    return (
        <Background>
            <LogoSection>
                <Logo width='160'/>
            </LogoSection>
            <SubBackground>
                <Decider />
                <Options />
            </SubBackground>
        </Background>
    );
};

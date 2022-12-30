import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.span<{
    isSelected: boolean;
}>`
    background-color: ${({ isSelected }) =>
        isSelected ? '#4ecdc4' : '#f7fff7'};
    border-radius: 20px;
    padding: 2px 10px;
    margin-right: 10px;
    border: ${({ isSelected }) => (isSelected ? '2px solid #1a535c' : '2px solid #ff6b6b')};
    color: #1a535c;
    cursor: pointer;
`;

interface OptionProps {
    content: string;
    isSelected: boolean;
    onClick?: () => void;
}

export const Option: FunctionComponent<OptionProps> = (props) => {
    let { content, isSelected, onClick } = props;
    return (
        <Wrapper isSelected={isSelected} onClick={onClick}>
            {content}
        </Wrapper>
    );
};

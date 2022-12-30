import React, { FunctionComponent, useState } from 'react';
import { Option } from './option';
import styled from 'styled-components';
import foodOptionsJson from '../../food-options.json';
const { foodOptions } = foodOptionsJson;

const Abc = styled.div`
    padding: 10px 0;
`;

export const Options: FunctionComponent<{}> = () => {
    const [selected, setSelected] = useState(foodOptions.reduce((acc, curr) => {
        acc[curr] = true;
        return acc;
    }, {} as { [key: string]: boolean }))

    const toggleSelected = (name: string) => {
        setSelected({...selected, [name]: !selected[name]})
    }

    return (
        <div>
            <div>Custom Options</div>
            <Abc>
                <Option isSelected={false} content="select all" />
                <Option isSelected={false} content="select none" />
            </Abc>
            <div>
                {foodOptions.map((foodOption, index) => {
                    return (
                        <Option
                            key={index}
                            isSelected={selected[foodOption]}
                            content={foodOption}
                            onClick={() => toggleSelected(foodOption)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

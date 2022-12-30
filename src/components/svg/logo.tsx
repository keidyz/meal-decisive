import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export interface LogoProps {
    width?: string;
}

const StyledSvg = styled.svg`
    @media all and (-ms-high-contrast: none) {
        height: 100%;
    }
`;

export const Logo: FunctionComponent<LogoProps> = ({ width = '200' }) => {
    return (
        <div>
            <StyledSvg
                width={width}
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                viewBox="0 0 235.292 159.144"
            >
                <g transform="translate(-11.324 -398.526)">
                    <ellipse
                        style={{
                            fill: '#f7fff7',
                            fillOpacity: 1,
                            stroke: '#1a535c',
                            strokeWidth: 5,
                            strokeMiterlimit: 4,
                            strokeDasharray: 'none',
                            strokeOpacity: 1,
                        }}
                        cx={121.565}
                        cy={451.887}
                        rx={66.02}
                        ry={50.861}
                    />
                    <path
                        style={{
                            fill: '#1a535c',
                            fillOpacity: 1,
                            stroke: 'none',
                            strokeWidth: 1.08937,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeMiterlimit: 4,
                            strokeDasharray: 'none',
                        }}
                        d="M29.742 409.38c-3.69 3.017-1.638 19.89-3.649 20.918-5.655-.275-.877-20.027-4.031-20.36-6.316 9.263-1.374 26.825 2.16 31.483 4.782 5.277.296 37.836.296 53.873 3.227 1.58 6.558 1.91 10.076 0 0-16.037-4.486-48.596.296-53.873 3.534-4.658 8.476-22.22 2.16-31.483-3.154.333 1.624 20.085-4.031 20.36-2.011-1.027.413-17.9-3.277-20.919z"
                    />
                    <path
                        style={{
                            fill: '#1a535c',
                            fillOpacity: 1,
                            strokeWidth: 1.08937,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        }}
                        d="M214.119 409.889c-20.27.969-9.957 27.57-5.46 32.376 5.864 8.09 1.168 36.793.98 54.131 2.958 1.123 6.11 1.76 10.22 0-.138-17.338-5.087-46.041-.28-54.13 4.498-4.807 14.81-31.408-5.46-32.377z"
                    />
                    <text
                        xmlSpace="preserve"
                        style={{
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '53.482px',
                            lineHeight: 1.25,
                            fontFamily: 'sans-serif',
                            fill: '#1a535c',
                            fillOpacity: 1,
                            stroke: '#1a535c',
                            strokeWidth: 1.33706,
                            strokeOpacity: 1,
                        }}
                        x={121.56}
                        y={470.272}
                        transform="rotate(.144)"
                    >
                        <tspan
                            style={{
                                fontStyle: 'normal',
                                fontVariant: 'normal',
                                fontWeight: 400,
                                fontStretch: 'normal',
                                fontFamily: 'Roboto',
                                InkscapeFontSpecification: 'Roboto',
                                textAlign: 'center',
                                textAnchor: 'middle',
                                fill: '#1a535c',
                                fillOpacity: 1,
                                stroke: '#1a535c',
                                strokeWidth: 1.33706,
                                strokeOpacity: 1,
                            }}
                            x={121.56}
                            y={470.272}
                        >
                            {'Meal'}
                        </tspan>
                    </text>
                    <text
                        xmlSpace="preserve"
                        style={{
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '63.7873px',
                            lineHeight: 1.25,
                            fontFamily: 'sans-serif',
                            fill: '#1a535c',
                            fillOpacity: 1,
                            stroke: '#1a535c',
                            strokeWidth: 1.59468,
                            strokeOpacity: 1,
                        }}
                        x={127.865}
                        y={473.056}
                        transform="rotate(.254)"
                    >
                        <tspan
                            style={{
                                fontStyle: 'normal',
                                fontVariant: 'normal',
                                fontWeight: 400,
                                fontStretch: 'normal',
                                fontFamily: 'Roboto',
                                InkscapeFontSpecification: 'Roboto',
                                textAlign: 'center',
                                textAnchor: 'middle',
                                fill: '#1a535c',
                                fillOpacity: 1,
                                stroke: '#1a535c',
                                strokeWidth: 1.59468,
                                strokeOpacity: 1,
                            }}
                            x={127.865}
                            y={555.172}
                        >
                            {'Decisive'}
                        </tspan>
                    </text>
                </g>
            </StyledSvg>
        </div>
    );
};

import React from 'react';

const Logo = ({ option = 1 }) => {
    if(option === 1){
        return(
                <>
                    <svg width="360" height="360" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="180" cy="180" r="160" fill="white" />

                        <circle cx="180" cy="180" r="60" fill="yellow" />
                        <path d="M180 110 L190 100 L170 100 Z" fill="black" />
                        <rect x="175" y="230" width="10" height="20" fill="black" />

                        <circle cx="60" cy="60" r="20" fill="white" />
                        <path d="M60 45 L65 40 L55 40 Z" fill="turquoise" />
                        <rect x="57" y="70" width="6" height="10" fill="turquoise" />

                        <circle cx="300" cy="60" r="20" fill="white" />
                        <path d="M300 45 L305 40 L295 40 Z" fill="turquoise" />
                        <rect x="297" y="70" width="6" height="10" fill="turquoise" />

                        <path d="M 110 270 Q 180 320 250 270 T 340 250" fill="#FED7B5" />

                        <path d="M80 80 L 140 150" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)" />
                        <path d="M280 80 L 220 150" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)" />
                        <path d="M80 270 L 140 200" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)" />
                        <path d="M280 270 L 220 200" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)" />

                        <defs>
                            <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                                <path d="M0,0 L0,6 L9,3 z" fill="black" />
                            </marker>
                        </defs>
                    </svg>

                
                </>
            ); 
    }else if(option === 2){
        return(
            <>
                <svg width="360" height="360" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="white" />

                    <circle cx="180" cy="180" r="60" fill="yellow" />
                    <line x1="180" y1="120" x2="180" y2="160" stroke="black" stroke-width="2" />
                    <ellipse cx="180" cy="190" rx="20" ry="10" fill="black" />

                    <path d="M 60 180 Q 180 60 300 180 T 180 300 60 180" stroke="black" stroke-width="2" fill="none" />
                    <path d="M 300 180 Q 180 300 60 180 T 180 60 300 180" stroke="black" stroke-width="2" fill="none" />

                    <circle cx="60" cy="180" r="20" fill="white" stroke="turquoise" stroke-width="2"/>
                    <line x1="60" y1="160" x2="60" y2="175" stroke="turquoise" stroke-width="1" />
                    <ellipse cx="60" cy="190" rx="7" ry="3" fill="turquoise" />

                    <circle cx="300" cy="180" r="20" fill="white" stroke="turquoise" stroke-width="2"/>
                    <line x1="300" y1="160" x2="300" y2="175" stroke="turquoise" stroke-width="1" />
                    <ellipse cx="300" cy="190" rx="7" ry="3" fill="turquoise" />

                    <path d="M 100 290 Q 180 350 260 290 T 330 270" fill="#FFDAB9" />

                </svg>

            </>
        ); 
    }else if(option === 3){
        return(
            <>
                <svg width="360" height="360" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="180" cy="180" r="60" fill="lightslategray" />
                    <line x1="180" y1="120" x2="180" y2="160" stroke="black" strokeWidth="2" />
                    <ellipse cx="180" cy="190" rx="20" ry="10" fill="black" />

                    <path d="M 60 180 Q 180 60 300 180 T 180 300 60 180" stroke="black" strokeWidth="2" fill="none" />
                    <path d="M 300 180 Q 180 300 60 180 T 180 60 300 180" stroke="black" strokeWidth="2" fill="none" />

                    <circle cx="60" cy="180" r="20" fill="none" stroke="turquoise" stroke-width="2"/>
                    <line x1="60" y1="160" x2="60" y2="175" stroke="turquoise" strokeWidth="1" />
                    <ellipse cx="60" cy="190" rx="7" ry="3" fill="turquoise" />

                    <circle cx="300" cy="180" r="20" fill="none" stroke="turquoise" strokeWidth="2"/>
                    <line x1="300" y1="160" x2="300" y2="175" stroke="turquoise" strokeWidth="1" />
                    <ellipse cx="300" cy="190" rx="7" ry="3" fill="turquoise" />

                    <path d="M 100 290 Q 180 350 260 290 T 330 270" fill="#FFDAB9" />

                </svg>

            </>
        ); 
    }
};

export default Logo;

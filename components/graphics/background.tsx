import React from 'react'; 

const Background = () =>{
    return(
        <>
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 600 400'  preserveAspectRatio='none'>
                <rect fill='#000000' width='800' height='400' />
                <defs>
                    <radialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'>
                        <stop offset='0' stop-color='#DD0007' />
                        <stop offset='1' stop-color='#000000' />
                    </radialGradient>
                    <linearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'>
                        <stop offset='0' stop-color='#B10B0E' stop-opacity='0' />
                        <stop offset='1' stop-color='#B10B0E' stop-opacity='0.5' />
                    </linearGradient>
                </defs>
                <rect fill='url(#a)' width='800' height='400' />
                <g fillOpacity='0.4'>
                    <circle fill='url(#b)' cx='267.5' cy='61' r='300' />
                    <circle fill='url(#b)' cx='532.5' cy='61' r='300' />
                    <circle fill='url(#b)' cx='400' cy='30' r='300' />
                </g>
            </svg>
        </>
    )
}

export const Background2 = () =>{

    return(
        <>
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 600 400'  preserveAspectRatio='none'>
            </svg>

        </>
    )
}

export default Background; 




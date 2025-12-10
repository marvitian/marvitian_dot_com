import React, { useState } from 'react';


import Day1 from './AoC2025/Day1.jsx';


function Intro()
{
    return(
        <div>
            <h1>Advent of Code 2025</h1>
            <p>
                It's that time of year again! This year I want to take the 
                opportunity to learn a new language, while practicing some 
                that I already know. 
            </p>
            <br /> 
            <p>
                I will start each problem in <strong>Python</strong>, since I am familiar with 
                it I will be able to focus on the problem.
                <br />
                Next I will implement
                the solution in <strong>C++</strong> to expand my current knowledge on the language. 
                <br />
                Finally, I will port my algorithms to <strong>Rust</strong>, a new language for me. 
                I've heard lots of good things about it, and given my interest in 
                low level programming, it seems a suitable language for me. 
            </p>
        </div>
    );
}



function AoC_page()
{
    return(
        <div>
            <Intro /> 
            <Day1 />
        </div>
    )
}

export default AoC_page;
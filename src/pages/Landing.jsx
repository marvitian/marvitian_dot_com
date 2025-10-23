import React from 'react';
import '../styles/App.css';
import '../styles/ContentBox.css';




function Landing(){
    return (
        <div>
            <code>{window.location.hostname}</code>
            <h2>Hey there!</h2>
            {/* typewriter */}
            
            <p className='typewriter --n:148'>
                This will serve as my portfolio for my experience gained through my career and education, 
                as well as a way to document my journey of learning full stack web development.
                <br/>
                <br/>
            
            </p>
            <div>
                <h3>Stuff I have going on:</h3>
                <div className="displayContentContainer">
                    {/* <button className="contentBox" onClick={()=>window.location.href = ("./takenote")}>TakeNote</button> */}
                    <button className="contentBox" onClick={()=>window.location.href = ("./school")}>School</button>
                    <button className="contentBox" onClick={()=>window.location.href = ("./work")}>Work</button>
                    {/* <button className="contentBox" onClick={()=>window.location.href = ("./ASIC")}>ASIC</button> */}
                    <button className="contentBox" onClick={()=>window.location.href = ("./drone")}>DRONE</button>
                    {/* <button className="contentBox" onClick={()=>window.location.href = ("./projects")}>Projects</button> */}
                    {/* <button className="contentBox" onClick={()=>window.location.href = ("./projects")}>Projects</button> */}
                    {/* <button className="contentBox" onClick={()=>window.location.href = ("./leetcode")}>LeetCode</button> */}
                </div>
            </div>
        </div>
    )
}

export default Landing;
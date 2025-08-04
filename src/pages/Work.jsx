import React from 'react';

function Internship(){
    return(
        <div>
            <h2>Applications Engineering / DevOps Internship</h2>
            <h4>May 2022 - August 2023</h4>
            <p>
                During my internship at <strong><i>REDACTED</i></strong> I
                was introduced to the fast pace world of DevOps and Applications Engineering.
                As a smaller company I was able to work on a variety of projects and tasks.
                I was able to work on the following:
                <ul>
                    <li><h3>Firmware implementation</h3></li>
                    <ul>
                        <li>Write C++ code to compile firmware for our proprietary PSM using our in-house instruction set</li>
                        <li>Provided time and memory complexity Metrics of existing and proposed subroutines</li>
                        <li>Customer correspondence to facilitate product implementaion</li>
                    </ul>
                    <br/>
                    <li><h3>Tool Development</h3></li>
                    <ul>
                        <li>Area Estimation Tool</li>
                        <ul>
                            <li>JS</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        <li>Multi Chip Auto Cross Connection Pin Mapping </li>
                        <ul>
                            <li>Python</li>
                            <ul>
                                <li>NumPy</li>
                                <li>Pandas</li>
                                <li>Excel Manipulation</li>
            
                            </ul>
                            <li>Excel</li>
                        </ul>
                        <li>QA Testing Parallelization</li>
                        <ul>
                            <li>OS Process management in BASH</li>
                            <li>Allowed lengthy tests to be ran in parallel by making them run in the background</li>
                            <li>Kept track of the status of each process and release licence on completion to prevent locking licence, preventing others from using CADENCE licence</li>

                        </ul>
                    </ul>
                    <br/>
                    <li><h3>Release Automation</h3></li>
                    <ul>
                        <li>Bash Scripting</li>
                        <ul>
                            <li>Automate File Mapping, Encrpytion, and QA tests</li>
                            <li>Version Control Automation</li>
                        </ul>
                    </ul>
                </ul>
            </p>
        </div>
    );
}

function TME(){
    return (
        <div>
            <h2>Applications Engineer</h2>
            <h4>May 2024 - Present</h4>
            <p>
                As a Technical Marketing Engineer at <strong><i>REDACTED</i></strong> I
                am responsible for the following:
                <ul>
                    <li><h3>Customer Correspondance</h3></li>
                    <ul>
                        <li>Provide technical support to customers</li>
                        <li>Respond to customer Jira tickets</li>
                        <li>Implement customer requests and triage issues to design team</li>
                    </ul>
                    <br/>
                    <li><h3>Technical Documentation</h3></li>
                    <ul>
                        <li>Write and maintain technical documentation for our products</li>
                        <li>Provide performance metrics of solutions</li>
                    </ul>
                    <br/>
                    <li><h3>Product Testing</h3></li>
                    <ul>
                        <li>Electrical Eye Analysis</li>
                        <li>Obtain behaviour reports of customer implementations using lab equipment</li>
                        <li>Electtrical characterization</li>
                        <li>Timing Analysis of implementing subroutines on sillicon</li>
                        <li>Create software interface to provide control of physical components such as memory registers and command status registers</li>
                        <li>manual configuration of memory subsystems</li>
                        <li>LP4 configuration</li>
                        <li>LP5x Configuration</li>
                        <li>JEDEC standard implementation into our communicaitons with the memory</li>
                    </ul>
                    <li><h3>Board Bringup</h3></li>
                    <ul>
                        <li>Board Layout Validation</li>
                        <li>Debugging shorts and signal anomolies</li>
                        <li>DDR4 Protocol validation</li>
                        
                    </ul>
                    <li><h3>Firmware Solutions Architecture</h3></li>
                    <ul>
                        <li>Hardware/Software Interfacing</li>
                        <li>Memory Subsystem Configuration</li>
                        <li>Memory Subsystem Performance Metrics</li>
                        <li>Memory Subsystem Power Metrics</li>
                        <li>Memory Subsystem Timing Metrics</li>
                        <li>Memory Subsystem Temperature Metrics</li>
                        <li>Memory Subsystem Reliability Metrics</li>

                    </ul>
                </ul>
            </p>
        </div>
    );
}

function Work(){
    return (
        <div>
            <h1>Work</h1>
            <p>Here is where I will document my journey through my career</p>
            <br/>
            <p>I have 2 years experience working with memory subsystems, with exposure to technologies associated with LPDDR54, HBM, and GDDR6. </p>
            <br/>
            <hr/>
            <TME />
            <hr/>
            <h2>Final Year of Undergrad</h2>
            <h4>Septemer 2023 - April 2024</h4>
            
            <hr/>
            <Internship />
            <hr/>
        </div>
    );
}


export default Work;
import React from 'react';
import '../styles/School.css';

function Masters(){
    return(
        <div>
            <h1>M.Eng Candidate in Computer Networks</h1>
            <p>Here is where I will document my journey through my graduate studies</p>
            <hr/>
            <h3>Courses Completed:</h3>
                <table>
                    <th style={{width:"10%"}}>Course code</th>
                    <th style={{width:"40%"}}>Course Name</th>
                    <th style={{width:"10%"}}>Grade</th>
                    <tr>
                        <td>CN8810</td>
                        <td>Intro to Computer Networks</td>
                        <td>A+</td>
                    </tr>
                    <tr>
                        <td>CN8813</td>
                        <td>IP Protocols</td>
                        <td>A+</td>
                    </tr>

                </table>
        </div>
    );
}

function Undergrad(){
    return(
        <div>
            <h1>B.Eng Computer Engineering</h1>
            <h2>Minor in Software Engineering</h2>
            {/* <h3>Highlights:</h3> */}
            <h3>Networks & Communication Systems</h3>
                <table>
                    <th style={{width:"10%"}}>Course code</th>
                    <th style={{width:"40%"}}>Course Name</th>
                    <th style={{width:"10%"}}>Grade</th>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/COE768_course_outline.pdf" target="_blank">COE 768</a></td>
                        <td>Computer Networks</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/COE865_course_outline.pdf" target="_blank">COE 865</a></td>
                        <td>Advanced Computer Networks</td>
                        <td>B+</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.torontomu.ca/calendar/2024-2025/courses/computer-engineering/COE/892/" target="_blank">COE 892</a></td>
                        <td>Distributed Cloud Computing</td>
                        <td>A-</td>
                    </tr>
                </table>

            <h3>Computer Architecture</h3>
                <table>
                    <th style={{width:"10%"}}>Course code</th>
                    <th style={{width:"40%"}}>Course Name</th>
                    <th style={{width:"10%"}}>Grade</th>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/COE328_course_outline.html" target="_blank">COE 328</a></td>
                        <td>Digital Systems</td>
                        <td>A+</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/COE538_course_outline.html" target="_blank">COE 538</a></td>
                        <td>Microprocessor Systems</td>
                        <td>A+</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/COE608_course_outline.pdf" target="_blank">COE 608</a></td>
                        <td>Computer Organization and Architecture</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        {/* operating systems */}
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/COE628_course_outline.pdf" target="_blank">COE 628</a></td>
                        <td>Operating Systems</td>
                        <td>B+</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/COE718_course_outline.pdf" target="_blank">COE 718</a></td>
                        <td>Embedded System Design</td>
                        <td>A-</td>
                    </tr>
                </table>

            <h3>Software Systems Engineering</h3>
                <table>
                    <th style={{width:"10%"}}>Course code</th>
                    <th style={{width:"40%"}}>Course Name</th>
                    <th style={{width:"10%"}}>Grade</th>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/CPS125_course_outline.html" target="_blank">CPS 125</a></td>
                        <td>Digital Computation and Programming</td>
                        <td>A-</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/COE318_course_outline.html" target="_blank">COE 318</a></td>
                        <td>Software Systems</td>
                        <td>A+</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/COE528_course_outline.pdf" target="_blank">COE 528</a></td>
                        <td>Object Oriented Eng Analysis and Design</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/CPS510_course_outline.pdf" target="_blank">CPS 510</a></td>
                        <td>Database Systems</td>
                        <td>A+</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/COE691_course_outline.pdf" target="_blank">COE 691</a></td>
                        <td>Software REQs Analysis SPEC</td>
                        <td>B-</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/COE692_course_outline.pdf" target="_blank">COE 692</a></td>
                        <td>Software Design Architecture</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/CPS714_course_outline.pdf" target="_blank">CPS 714</a></td>
                        <td>Software Project Management</td>
                        <td>A-</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/COE891_course_outline.pdf" target="_blank">COE 891</a></td>
                        <td>Software Testing and QA</td>
                        <td>A-</td>
                    </tr>
                </table>
            <h3>Computer Science / Data Science</h3>
                <table>
                    <th style={{width:"10%"}}>Course code</th>
                    <th style={{width:"40%"}}>Course Name</th>
                    <th style={{width:"10%"}}>Grade</th>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/COE428_course_outline.pdf" target="_blank">COE 428</a></td>
                        <td>Algorithms and Data Structures</td>
                        <td>CRD</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/CPS688_course_outline.pdf" target="_blank">CPS 688</a></td>
                        <td>Advanced Algorithms</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/ELE888_course_outline.pdf" target="_blank">ELE 888</a></td>
                        <td>Intelligent Systems & Machine Learning</td>
                        <td>A-</td>
                    </tr>
                </table>

            <h3>Engineering Physics & Mathematics</h3>
                <table>
                    <th style={{width:"10%"}}>Course code</th>
                    <th style={{width:"40%"}}>Course Name</th>
                    <th style={{width:"10%"}}>Grade</th>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/PCS211_course_outline.pdf" target="_blank">PCS 211</a></td>
                        <td>Physics: Mechanics</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/PCS125_course_outline.pdf" target="_blank">PCS 125</a></td>
                        <td>Physics: Waves and Fields</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/PCS224_course_outline.pdf" target="_blank">PCS 224</a></td>
                        <td>Solid State Physics (Semiconductor Physics)</td>
                        <td>A+</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/MEC511_course_outline.pdf" target="_blank">MEC 511</a></td>
                        <td>Thermodynamics and Fluids</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/CHY102_course_outline.pdf" target="_blank">CHY 102</a></td>
                        <td>General Chemistry</td>
                        <td>B+</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/MTH314_course_outline.pdf" target="_blank">MTH 314</a></td>
                        <td>Discrete Math for Engineers</td>
                        <td>CRD</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/MTH514_course_outline.pdf" target="_blank">MTH 514</a></td>
                        <td>Probability and Stochastic Processes</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/MTH140_course_outline.pdf" target="_blank">MTH 140</a></td>
                        <td>Calculus 1</td>
                        <td>C+</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/MTH240_course_outline.pdf" target="_blank">MTH 240</a></td>
                        <td>Calculus 2</td>
                        <td>B-</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/MTH312_course_outline.pdf" target="_blank">MTH 312</a></td>
                        <td>Calculus 3: Differential Equations and Vector Calculus</td>
                        <td>B</td>
                    </tr>
                    
                </table>

                <h3>Electrical Engineering</h3>
                <table>
                    <th style={{width:"10%"}}>Course code</th>
                    <th style={{width:"40%"}}>Course Name</th>
                    <th style={{width:"10%"}}>Grade</th>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/ELE202_course_outline.pdf" target="_blank">ELE 202</a></td>
                        <td>Electric Circuit Analysis</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/ELE302_course_outline.pdf" target="_blank">ELE 302</a></td>
                        <td>Electric Networks</td>
                        <td>B-</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/ELE404_course_outline.pdf" target="_blank">ELE 404</a></td>
                        <td>Electronic Circuits 1</td>
                        <td>CRD</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/ELE532_course_outline.pdf" target="_blank">ELE 532</a></td>
                        <td>Signals and Systems</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.ee.torontomu.ca/undergraduate/outlines/ELE734_course_outline.pdf" target="_blank">ELE 734</a></td>
                        <td>Low Power Digital Integrated Circuits</td>
                        <td>B</td>
                    </tr>
                </table>

        </div>


    );
}






function School(){
    return (
        <div>
            <Masters />
            <Undergrad />
        </div>
    )
}










export default School;

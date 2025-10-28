import React, { useState } from 'react';



function Intro()
{
    return(
        <div>
            
            <h2> What this page is </h2> 
            <p> 
                I will hone my skills in embedded systems by designing and building a custom drone. The primary focus will be on 
                designing custom firmware for the flight controller using FreeRTOS on an ESP32 microcontroller.
            </p>
            
            <p>
                Side goals include learning about control theory, radio communication protocols, and camera integration for FPV flying.
            </p>

            <h2> Why a drone? </h2>
            <p>
                Drones are complex embedded systems that require real-time control, sensor integration, and wireless communication. 
                Building a drone from scratch will challenge me to apply my embedded systems knowledge in a practical way.
            </p>

            <h2> This page </h2>
            <p>
                I will post progress updates, learning topics, design decisions, and technical challenges I encounter along the way in the updates section. 
                This section will be a very informal method of journaling my progress, allowing me to brainstorm on half-baked ideas and document the decision making process 
                without overcrowding my formal documentation.
            </p>

            <p>
                The design overview section will contain more formal documentation of the system architecture, hardware selection, and firmware design.
            </p>
            
        </div>
    )
}

function Updates()
{
    return(<div> 
                    <h2> UPDATES </h2>
                    <div className='blog_entry'>
                        <h2> Oct 27 2025</h2>
                        <p>
                            The motors showed up, but the package was empty... contacted the seller for a replacement.
                            <br/>
                            <br/>
                            In the meantime I spent some time working on the flight controller FSM and organizing the RTOS tasks. The 
                            FSM states and events have been defined in the Design Overview section.
                            <br/>
                            <br/>
                            The implementation of the FSM will make use of FreeRTOS queues to have the states respond to events asynchronously. Each state will run as a separate task, waiting for events to be posted to its queue. 
                            When an event is received, the state will process it and determine if a transition to another state is required. This way 
                            it will be easy to manage the deadlines and timing requirements of each state without blocking the entire system.
                            <br/>
                            <br/>
                            I've been thinking alot about the motor control. Pitch and roll seems straightforward, but yaw seems tricky.
                            I have a IMU that I want to play with, hopefully it will be accurate enough for basic flight stabilization.
                            <br/>
                            <br/>
                            I was hoping to start testing the motor control, but without the motors I will instead look into the frame. 
                            My coworker said he wouldn't mind 3d printing some parts for me, so I will start digging into the details.
                            <br/>
                        </p>
                    </div>
                    <div className='blog_entry'>
                        <h2> Oct 24 2025</h2>
                        <p>
                            Today I dug deeper into how my drone’s RTOS actually fits together, especially the flight control side. I put together a System Architecture Document on github to help me organize my thoughts.
                            <br/>
                            <br/>
                            I've begun to draw out the finite state machine (FSM) for the flight controller. The main states are 
                            <br/>
                            BOOT <br/>
                            INIT <br/>
                            DISARMED <br/>
                            PREPARE <br/>
                            ARMED <br/>
                            FLYING <br/>
                            LANDING <br/>
                            FAILSAFE  <br/>
                            Each state has specific conditions for transitioning to the next state, like arming the motors or detecting a loss of signal.
                            <br/>
                            <br/>
                            After some research about flight control, I realized there are two main loops I need to implement: the rate loop and the estimator.
                            The rate loop is the super-fast inner control loop that keeps the drone stable — it runs about a thousand times a second and directly drives the motors based on the gyroscope readings. It’s basically the drone’s reflex system, reacting instantly to any rotation.

                            The estimator, on the other hand, is the part that figures out how the drone is oriented in space. It combines the gyro and accelerometer data to get a smooth, stable estimate of roll, pitch, and yaw. It doesn’t have to run as fast as the rate loop — a couple hundred times a second is fine — but it’s essential for the controller to know which way “level” actually is.

                            I also learned that the ESP32’s built-in Hall effect sensor isn’t useful for flight — it only detects magnetic fields near the chip, not orientation. For proper flight estimation I’ll need a real IMU (Inertial Measurement Unit) gyro + accel, and maybe a magnetometer later.

                             <br/>
                            TLDR: <br/>
                                -	Created a rough draft for the state machine<br/>
                                -   Beginning to organize the high level task organization for the RTOS <br/>
                                -	The rate loop keeps the drone stable at ~1 kHz. <br/> 
                                -	The estimator runs slower (~200 Hz) to smooth out the sensor noise. <br/> 
                                -	The state machine decides what’s allowed (motors off, armed, flying, failsafe). <br/> 
                                -	The Hall sensor is basically useless for flight, need to get a commercial IMU <br/> 

                            It’s starting to make sense how all the pieces of the RTOS fit together now.
                        </p>
                    </div> 
                    <div className='blog_entry'>
                        <h2> Oct 22 2025</h2>
                        <p> 
                            The motors are on the way! 4 dc motors with propellers should be here in a week or so.
                            <br/>
                            <br/>
                            In the meantime I've spent a lot of time playing with the ESP32 and FreeRTOS. I have extensive developing firmware at work for the memory controller PHY
                            but none of the features of that controller are near as exciting as half the features I've discovered on the ESP32.
                            <br/>
                            <br/>
                            I think an interesting challenge will be to go through the esp-idf examples one by one and documenting the process. I'm going to spend some time tomorrow creating 
                            separate page for that, as well as maybe a github repo to go along with it.
                            <br/>
                            <br/>
                            I've been digging into the data sheet for the camera module built into this board, when we used it for the capstone, 
                            the video was very low quality and laggy, but I think I see some ways I can improve that if I'm clever enough.
                            <br/>
                            <br/>
                            More updates to come.
                        </p>
                    </div>


                    <div className='blog_entry'>
                        
                        <h2> Oct 21 2025</h2>
                        <p> 
                            So there were alot of updates today... 
                            <br/>
                        </p>
                        <h3> Requirements Spec and Analysis </h3>
                        <h4> Brain MCU Selection </h4>
                        <p>
                            My goal going into this project was to reuse as much hardware as i could from my capstone project. The
                            MCU used in that project was the Freenove ESP32 wrover e camera board. To my knowledge this as good as any to begin development, and 
                            for the cost of $0.00, i have no issues seeing how far it will take me.
                            <br/>
                            <br/>
                        </p>

                        <h4> Motor </h4>
                        <p>
                            after seeing that that ESP32 has built in mcPWM I realized that I could use it to drive the motors directly if I decide to use brushed DC motors. 
                            This would simplify the hardware design and reduce cost significantly, though I would be sacrificing some efficiency and performance.                
                            Since the main goal of this project is to create a portfolio of embedded systems design, I think this is a reasonable trade-off. 
                            I won't lie, the brushless motors do look pretty cool... my ego won't let me buy an ESC for this project. I think once I have a working prototype
                            I may circle back to brushless motors for the performance boost, and try to design an ESC with some help from my EE friends. 
                            <br/>
                            <br/>
                            After some digging it looks like there is very little information on using brushed DC motors for drones, 
                            mostly because of the performance hit. However, I did find a few examples of hobbyists using them for small drones, 
                            however the metrics provided are not targeted towards drone applications, so this will likely require more 
                            experimental tuning rather than calculation based design.
                            <br/>
                        </p> 
                            <h4> Firmware </h4>
                        <p>
                            For the firmware I will use freeRTOS as the framework to build upon. I want as much of this project to be made from scratch 
                            as possible, so the RTOS will help me manage the complexity of the system while still allowing me to write my own code for the specific functionality I need.
                            I have some research to do with respect to some of the more complex features such as radio communication control and camera integration, but I think I can handle the motor control 
                            and basic flight stabilization on my own.
                            <br/> 
                            <br/> 
                            I got the esp-idf set up today, and i'm playing with some of the RTOS examples. I think I've decided to add
                            a JTAG interface during prototyping to help with scheduling issues and debugging.
                            <br/>
                            <br/>
                            Theres so much more to research but it's late and I work in the morning... more updates to come.
                            
                        </p>
                    </div>
                    <div className="blog_entry">
                        <h2> OCT 20 2025</h2> 
                        <p> Starting this off I need to break this project up into digestable bites </p> 
                        <p> the initial list is as follows: </p>
                        <ol>
                            <li> Requirements Spec and Analysis</li>
                            <li> Hardware design and selection </li>
                            <li> Flight controller programming </li>
                            <li> Radio communication setup </li>
                            <li> POV camera integration </li> 
                        </ol>
                    </div>

                    

                    
                </div>
    );
}

function Design_Overview()
{

    return(
        <div>
            <h2> Design Overview</h2>
            <h3> Flight controller </h3>
            <h4> FSM </h4>
            <table>
                <tr> 
                    <th> State → Event </th>
                    <th> Next State </th>
                    <th> Action </th>
                </tr>
                <tr>
                    <td>ST_BOOT + EV_BOOT_DONE </td>
                    <td> ST_INIT </td>
                    <td> Initialize peripherals, sensors, and communication interfaces </td>
                </tr>
                <tr>
                    <td> ST_INIT + EV_INIT_FAIL </td>
                    <td> ST_FAILSAFE </td>
                </tr>
                <tr>
                    <td> ST_INIT + EV_INIT_DONE </td>
                    <td> ST_DISARMED </td>
                    <td> Wait for arming command </td>
                </tr>
                <tr>
                    <td> ST_DISARMED + EV_ARM_CMD </td>
                    <td> ST_PREPARE </td>
                    <td> Begin calibration / Self checks</td>
                </tr>
                <tr>
                    <td> ST_PREPARE + EV_PREPARE_FAIL </td>
                    <td> ST_FAILSAFE</td>
                </tr>
                <tr> 
                    <td> ST_PREPARE + EV_PREPARE_DONE </td>
                    <td> ST_ARMED </td>
                    <td> Allow takeoff </td>
                </tr>
                <tr>
                    <td> ST_ARMED + EV_TAKEOFF_CMD </td>
                    <td> ST_TAKEOFF </td>
                    <td> Initiate takeoff sequence,  </td>
                </tr>
                <tr>
                    <td> ST_TAKEOFF + EV_TAKEOFF_STABILIZED </td>
                    <td> ST_FLYING </td>
                    <td> Accept control </td>
                </tr>
                <tr>
                    <td> ST_FLYING + EV_LAND_CMD </td>
                    <td> ST_LANDING </td>
                    <td> Initiate landing sequence </td>
                </tr>
                <tr>
                    <td> ST_LANDING + EV_LANDED </td>
                    <td> ST_ARMED </td>
                    <td> Cut motors </td>
                </tr>
                <tr>
                    <td> ST_ARMED + EV_DISARM_CMD </td>
                    <td> ST_DISARMED </td>
                    <td> Disarm motors </td>
                </tr>
                
            </table>
        </div>
    )
}

function Nav_bar({ activeView, setActiveView })
{
    return(
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '20px' }}>
            <button className="buttonBox" onClick={() => setActiveView('intro')}> Intro </button>
            <button className="buttonBox" onClick={() => setActiveView('updates')}> Updates </button>
            <button className="buttonBox" onClick={() => setActiveView('design')}> Design Overview </button>
        </div>
    )
}

function Drone_page()
{
    const [activeView, setActiveView] = useState('intro');
    
    return (
        <div>
            <div style={{ width: '80vw', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <h1>Embedded Drone Development</h1>
            <Nav_bar activeView={activeView} setActiveView={setActiveView} />
            
            {activeView === 'intro' && <Intro />}
            {activeView === 'design' && <Design_Overview />}
            {activeView === 'updates' && <Updates />}

            </div>  
        </div>

    );

}

export default Drone_page;

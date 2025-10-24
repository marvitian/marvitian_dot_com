import React from 'react';



function Intro()
{
    return(
        <div>
            <h1>Embedded Drone Development</h1>
            <p> 
                Using my knowledge of embedded systems to
                build a custom drone from scratch. This will involve designing the
                hardware, selecting appropriate components, and programming the flight
                controller to ensure stable flight and maneuverability.
            </p>
            
        </div>
    )
}

function Updates()
{
    return(<div> 
                    <h2> UPDATES </h2>
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
        </div>
    )
}

function Nav_bar()
{
    return(
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '20px' }}>
            {/* <a href="/drone"> Intro </a>
            <a href="/drone/updates"> Updates </a>
            <a href="/drone/design_overview"> Design Overview </a> */}
            <button className="buttonBox" onClick={()=>window.location.href = ("/drone")}> Intro </button>
            <button className="buttonBox" onClick={()=>window.location.href = ("/drone/updates")}> Updates </button>
            <button className="buttonBox" onClick={()=>window.location.href = ("/drone/design_overview")}> Design Overview </button>
        </div>
    )
}

function Drone_page()
{
    
    
    return (
        <div>
            <div style={{ width: '80vw', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            {/* <div style={{ display: 'flex', flexDirection: 'row' , justifyContent: 'space-evenly' }}> */}
            <Nav_bar />
            <Intro />
            <Design_Overview /> 
            <Updates />

            </div>  
        </div>

    );

}

export default Drone_page;

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






function Drone_page()
{
    
    
    return (
        <div>
            <Intro />
            <div style={{ display: 'flex', flexDirection: 'row' , justifyContent: 'space-evenly' }}>

                <div style={{ width: '40vw'}}> 
                    <h2> UPDATES </h2>
                    <div className='blog_entry'>
                        <h2> Oct 22 </h2>
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
                        
                        <h2> Oct 21 </h2>
                        <p> 
                            So there were alot of updates today... 
                            <br/>
                            <h3> Requirements Spec and Analysis </h3>
                            <h4> Brain MCU Selection </h4>
                            My goal going into this project was to reuse as much hardware as i could from my capstone project. The
                            MCU used in that project was the Freenove ESP32 wrover e camera board. To my knowledge this as good as any to begin development, and 
                            for the cost of $0.00, i have no issues seeing how far it will take me.
                            <br/>
                            <br/>
                            <h4> Motor </h4>
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
                            <h4> Firmware </h4>
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
                        <h2> OCT 20 </h2> 
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
                <div>
                    <h2> Design Overview</h2>
                </div>
            </div>  
        </div>

    );

}

export default Drone_page;

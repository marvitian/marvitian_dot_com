import React from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const fread = `def f_read(filename):
    with open(filename, "r") as f:
        # content = f.read()        # whole file in contents(string) 
        # for line in f:            # access contents line by line
        # content = f.readlines()   # all lines into list

        content = f.readlines()
        return content`;

function Day1_pt1_python()
{
    return(
        <div>
            To start, I will create a file read script that I can call externally, since this will certainly be 
            required for every problem to come. This is dead simple in python, however I want to keep this standard 
            for the other languages I'm going to use.
            <SyntaxHighlighter language="python" style={oneDark} showLineNumbers>
                {fread}
            </SyntaxHighlighter>

            For the first part of this problem, I created a simple script that takes each input and checks if the
            dial lands on zero. Simple enough.
            <SyntaxHighlighter language="python" style={oneDark} showLineNumbers>
                {
                `
from file_read import f_read

dial = 50
dial_size = 100 # 0-99

count = 0
magnitude = 0
content = f_read("input.txt")
with open("out.txt", 'a') as w:
    for line in content:
        magnitude = int(line[1:]) # string slicing - start at 1 and go to end
        if line[0] != 'R':
            magnitude = -(magnitude)
        dial = dial + magnitude 
        # we want the Euclidian remainder to be language agnostic, since i want to port this to cpp and rust
        wrapped = ((dial % dial_size) + dial_size) % dial_size
        # print(f"{line:l}|{dial:l}|{wrapped:l}")
        
        dial = wrapped
        if dial == 0:
            count+=1
print(count)
                `
                }
            </SyntaxHighlighter>

        </div>
    )
}

function Day1_pt2_python()
{
    return(
        <div>
            To continue this problem, I needed a bit of math. (you know it was frustrating when 
            the pen and paper come out)
            <br />
            <img src="src\assets\day1_pt2_scratch.JPG" width="400"/>

            <br />
            After a couple of iterations, I cleaned up the boilerplate stuff and put in some logging
            to see what was going on. 
            <SyntaxHighlighter language="python" style={oneDark} showLineNumbers>
                {`from file_read import f_read

dial = 50
dial_size = 100  # 0-99

count = 0
magnitude = 0
content = f_read("input.txt")

with open("out.txt", 'w') as w:
    w.write("NEW FILE\\n")
with open("out.txt", 'a') as w:
    for line in content:
        line = line.strip()

        prev_dial = dial
        dir = line[0]
        
        # let M be the Magnitude 
        M = int(line[1:])  # string slicing - start at 1 and go to end
        
        # Let m be the signed value
        if (dir == 'R'):
            m = M
        else:
            m = -M
        
        # new dial value 
        dial = dial + m

        # we want the Euclidian remainder to be language agnostic, since i want to port this to cpp and rust
        wrapped = ((dial % dial_size) + dial_size) % dial_size
        dial = wrapped

        # This is where the logic comes in and most of solution lays
        if (dir == 'R'):
            if (M >= (100-prev_dial)):
                
                count += ((M - (100-prev_dial)) // 100) + 1
        else:
            if (prev_dial) <= M:
                if prev_dial == 0:
                    count += ((M-prev_dial) // 100)
                else:
                    count += ((M-prev_dial) // 100) + 1
        w.write(f"|line: {line:10}  | dial:{prev_dial:2}->{dial:2}| count:{count:10} |\\n")
        print(f"{line}")
print(count)
                `}
            </SyntaxHighlighter>
        The simplicity of this stuff is what really makes you appreciate python, might not be 
        elegant, but it feels good for the soul.

        </div>
    )
}

function Day1()
{
    return(
        <div style={{padding:"1em"}}>
            <h2>Day 1: Secret Entrance</h2>
            <h3>Part 1</h3>
            <h4>Problem</h4>
            <p>To solve this problem, you must determine how many times a rotational dial
                lands on zero.
            </p>
            <details><summary>Full Story</summary>
                <a href='https://adventofcode.com/2025/day/1'>source</a>
                <article class="day-desc">
                    
                    <p>The Elves have good news and bad news.</p>
                    <p>The good news is that they've discovered <a href="https://en.wikipedia.org/wiki/Project_management" target="_blank">project management</a>! This has given them the tools they need to prevent their usual Christmas emergency. For example, they now know that the North Pole decorations need to be finished soon so that other critical tasks can start on time.</p>
                    <p>The bad news is that they've realized they have a <em>different</em> emergency: according to their resource planning, none of them have any time left to decorate the North Pole!</p>
                    <p>To save Christmas, the Elves need <em>you</em> to <em>finish decorating the North Pole by December 12th</em>.</p>
                    <p>Collect stars by solving puzzles.  Two puzzles will be made available on each day; the second puzzle is unlocked when you complete the first.  Each puzzle grants <em class="star">one star</em>. Good luck!</p>
                    <p>You arrive at the secret entrance to the North Pole base ready to start decorating. Unfortunately, the <em>password</em> seems to have been changed, so you can't get in. A document taped to the wall helpfully explains:</p>
                    <p>"Due to new security protocols, the password is locked in the safe below. Please see the attached document for the new combination."</p>
                    <p>The safe has a dial with only an arrow on it; around the dial are the numbers <code>0</code> through <code>99</code> in order. As you turn the dial, it makes a small <em>click</em> noise as it reaches each number.</p>
                    <p>The attached document (your puzzle input) contains a sequence of <em>rotations</em>, one per line, which tell you how to open the safe. A rotation starts with an <code>L</code> or <code>R</code> which indicates whether the rotation should be to the <em>left</em> (toward lower numbers) or to the <em>right</em> (toward higher numbers). Then, the rotation has a <em>distance</em> value which indicates how many clicks the dial should be rotated in that direction.</p>
                    <p>So, if the dial were pointing at <code>11</code>, a rotation of <code>R8</code> would cause the dial to point at <code>19</code>. After that, a rotation of <code>L19</code> would cause it to point at <code>0</code>.</p>
                    <p>Because the dial is a circle, turning the dial <em>left from <code>0</code></em> one click makes it point at <code>99</code>. Similarly, turning the dial <em>right from <code>99</code></em> one click makes it point at <code>0</code>.</p>
                    <p>So, if the dial were pointing at <code>5</code>, a rotation of <code>L10</code> would cause it to point at <code>95</code>. After that, a rotation of <code>R5</code> could cause it to point at <code>0</code>.</p>
                    <p>The dial starts by pointing at <code>50</code>.</p>
                    <p>You could follow the instructions, but your recent required official North Pole secret entrance security training seminar taught you that the safe is actually a decoy. The actual password is <em>the number of times the dial is left pointing at <code>0</code> after any rotation in the sequence</em>.</p>
                    <p>For example, suppose the attached document contained the following rotations:</p>
                    <pre><code>L68
                    L30
                    R48
                    L5
                    R60
                    L55
                    L1
                    L99
                    R14
                    L82
                    </code></pre>
                    <p>Following these rotations would cause the dial to move as follows:</p>
                    <ul>
                    <li>The dial starts by pointing at <code>50</code>.</li>
                    <li>The dial is rotated <code>L68</code> to point at <code>82</code>.</li>
                    <li>The dial is rotated <code>L30</code> to point at <code>52</code>.</li>
                    <li>The dial is rotated <code>R48</code> to point at <code><em>0</em></code>.</li>
                    <li>The dial is rotated <code>L5</code> to point at <code>95</code>.</li>
                    <li>The dial is rotated <code>R60</code> to point at <code>55</code>.</li>
                    <li>The dial is rotated <code>L55</code> to point at <code><em>0</em></code>.</li>
                    <li>The dial is rotated <code>L1</code> to point at <code>99</code>.</li>
                    <li>The dial is rotated <code>L99</code> to point at <code><em>0</em></code>.</li>
                    <li>The dial is rotated <code>R14</code> to point at <code>14</code>.</li>
                    <li>The dial is rotated <code>L82</code> to point at <code>32</code>.</li>
                    </ul>
                    <p>Because the dial points at <code>0</code> a total of three times during this process, the password in this example is <code><em>3</em></code>.</p>
                    <p>Analyze the rotations in your attached document. <em>What's the actual password to open the door?</em></p>
                </article>
            </details>
            <h4>Solution</h4>
            <details><summary>Python Solution</summary>
                <Day1_pt1_python />
            </details>
            <h3>Part 2</h3>
            <h4>Problem</h4>
            The next part of this problem requires a count of each time the 'dial' lands on <strong>or passes</strong> 0 on the dial.
            <details><summary>Full Story</summary>
            <article class="day-desc">
                
                <p>You're sure that's the right password, but the door won't open. You knock, but nobody answers. You build a snowman while you think.</p>
                <p>As you're rolling the snowballs for your snowman, you find another security document that must have fallen into the snow:</p>
                <p>"Due to newer security protocols, please use <em>password method <span title="You should have seen the chaos when the Elves overflowed their 32-bit password method counter.">0x434C49434B</span></em> until further notice."</p>
                <p>You remember from the training seminar that "method 0x434C49434B" means you're actually supposed to count the number of times <em>any click</em> causes the dial to point at <code>0</code>, regardless of whether it happens during a rotation or at the end of one.</p>
                <p>Following the same rotations as in the above example, the dial points at zero a few extra times during its rotations:</p>
                <ul>
                <li>The dial starts by pointing at <code>50</code>.</li>
                <li>The dial is rotated <code>L68</code> to point at <code>82</code>; during this rotation, it points at <code>0</code> <em>once</em>.</li>
                <li>The dial is rotated <code>L30</code> to point at <code>52</code>.</li>
                <li>The dial is rotated <code>R48</code> to point at <code><em>0</em></code>.</li>
                <li>The dial is rotated <code>L5</code> to point at <code>95</code>.</li>
                <li>The dial is rotated <code>R60</code> to point at <code>55</code>; during this rotation, it points at <code>0</code> <em>once</em>.</li>
                <li>The dial is rotated <code>L55</code> to point at <code><em>0</em></code>.</li>
                <li>The dial is rotated <code>L1</code> to point at <code>99</code>.</li>
                <li>The dial is rotated <code>L99</code> to point at <code><em>0</em></code>.</li>
                <li>The dial is rotated <code>R14</code> to point at <code>14</code>.</li>
                <li>The dial is rotated <code>L82</code> to point at <code>32</code>; during this rotation, it points at <code>0</code> <em>once</em>.</li>
                </ul>
                <p>In this example, the dial points at <code>0</code> three times at the end of a rotation, plus three more times during a rotation. So, in this example, the new password would be <code><em>6</em></code>.</p>
                <p>Be careful: if the dial were pointing at <code>50</code>, a single rotation like <code>R1000</code> would cause the dial to point at <code>0</code> ten times before returning back to <code>50</code>!</p>
                <p>Using password method 0x434C49434B, <em>what is the password to open the door?</em></p>
                </article>
            </details>
            <h4>Solution</h4>
            <details><summary>Python Solution</summary>
                <Day1_pt2_python />
            </details>
        </div>
    )
}

export default Day1;
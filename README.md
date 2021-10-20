**Copycat** is a Light & Sound Memory game originally created to apply for CodePath's SITE Program. 
https://copycat-lights-game.glitch.me

## Video Walkthrough

<img src='http://g.recordit.co/lqrs2pI0tf.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<img src='http://g.recordit.co/okvurfEeip.gif' title='Video Walkthrough 2' width='' alt='Video Walkthrough 2' />

GIF created with [Recordit](http://recordit.co/).

## Reflection 

At first, I struggled to figure out how the *setTimeout* timing system given in the code provided to us works. Specifically, I did not understand why the delay was increasing each time we called the setTimeout function in the loop. If we are playing a clue every 750 ms, shouldn’t the delay always be 1000? Additionally, most functions I had worked with in Python run immediately. If the sum() function is on Line 28, it will run after Lines 1-27, no questions asked, and you can go to Line 28 to see it. But setTimeout is a function that itself calls a second function after some time. You can’t move to a specific line to “see” where the second function is called. Overall, because this function behaved differently from what I was familiar with, I needed to do more research.

To overcome this challenge, I first read more information about setTimeout on W3Schools. Reading this information helped me gain a basic understanding of the function’s purpose and its parameters. I also drew a [diagram](https://i.imgur.com/JXf5LYs.png) [see link] that visualized the main for loop in playClueSequence() and calculated a schedule with example times for when each clue in a level would play. Through this process, I understood that the “schedule” is constructed all at once (or, at least, very quickly) within the loop. After the loop finishes, the timer starts at 0 ms, and it counts up from there. The first clue plays at 1000 ms, the second clue plays at 2333 ms, later, and so on

The diagram cleared up both of my questions. First, the delay is not always 1000 ms because the schedule starts at 0 ms and counts up from there. It doesn’t reset back to 0 until all clues are played in a level. Second, although we can’t “see” where the second function is called, the diagram (both the loop and the schedule) allowed me to see the data structure operating behind the scenes. 

 If I had a few more hours:
  - By adding a difficulty setting, I allowed the user to customize the game to their preferences. To increase the user's flexibility, I would allow the user to choose which level to start on (instead of starting from Level 1 every time, which can get repetitive.)
    I would also allow the user to choose how many buttons there are to increase or decrease the difficulty. These features allow the user to play the game how they want.
   - I would fix a bug where, if you left-click on a button and drag your mouse away (while still holding the button down), the tone would continue playing indefinitely. I tried to fix this bug by introducing a new event handler, "onmouseout," that would stop playing the tone whenever the cursor moves away from the button. However, that introduced another (more serious) bug. While the page plays a clue sequence, moving your cursor on and off the button would stop playing the tone. The fix, therefore, requires creating a new function to check if the clue sequence has finished playing... not that simple, but doable!
   - Sound effects! Won the game? Play an applause sound! Lost the game? Play a "bamp" noise! The purpose, then, is to add some "excitement" to the game and to add feedback: reward players for their good work and reinforce that behavior, and alert them when they made an error.
   - As mentioned above, dynamically resize the buttons for mobile input.

   
## License

    Copyright 2021 Parker Cline.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
  

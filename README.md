# Pre-work - _Copycat_

**Copycat** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Parker Cline**

Time spent: **9** hours spent in total

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tab), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial *[Google Fonts, gradients]*
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image) *[animations when clicked and gradients]*
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added a difficulty setter, which controls how many levels are in the game.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://g.recordit.co/lqrs2pI0tf.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<img src='http://g.recordit.co/okvurfEeip.gif' title='Video Walkthrough 2' width='' alt='Video Walkthrough 2' />

GIF created with [Recordit](http://recordit.co/).

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
- https://www.w3schools.com/jsref/jsref_push.asp
- https://www.w3schools.com/css/css_font_google.asp
- https://vaidehijoshi.github.io/blog/2015/01/06/the-final-countdown-using-javascripts-setinterval-plus-clearinterval-methods/
- https://stackoverflow.com/questions/9689109/how-to-display-javascript-variables-in-a-html-page-without-document-write/9689182
- https://code.tutsplus.com/tutorials/create-a-sticky-note-effect-in-5-easy-steps-with-css3-and-html5--net-13934
- https://www.w3schools.com/cssref/css3_pr_transform.asp
- https://www.w3schools.com/cssref/css_colors.asp
- https://www.w3schools.com/jsref/met_win_settimeout.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

At first, I struggled to figure out how the *setTimeout* timing system works (in playClueSequence.) Specifically, I did not understand why the delay was increasing each time we called the setTimeout function in the loop. If we are playing a clue every 750 ms, shouldn’t the delay always be 1000? Additionally, most functions I had worked with in Python run immediately. If the sum() function is on Line 28, it will run after Lines 1-27, no questions asked, and you can go to Line 28 to see it. But setTimeout is a function that itself calls a second function after some time. You can’t move to a specific line to “see” where the second function is called. Overall, because this function behaved differently from what I was familiar with, I needed to do more research.

To overcome this challenge, I first read more information about setTimeout on W3Schools. Reading this information helped me gain a basic understanding of the function’s purpose and its parameters. I also drew a (diagram)[https://i.imgur.com/JXf5LYs.png] [see link] that visualized the main for loop in playClueSequence() and calculated a schedule with example times for when each clue in a level would play. Through this process, I understood that the “schedule” is constructed all at once (or, at least, very quickly) within the loop. After the loop finishes, the timer starts at 0 ms, and it counts up from there. The first clue plays at 1000 ms, the second clue plays at 2333 ms, later, and so on

The diagram cleared up both of my questions. First, the delay is not always 1000 ms because the schedule starts at 0 ms and counts up from there. It doesn’t reset back to 0 until all clues are played in a level. Second, although we can’t “see” where the second function is called, the diagram (both the loop and the schedule) allowed me to see the data structure operating behind the scenes. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   - How do we input and process information like in registration forms? Where would they be stored?
   - How can we make our webpages generally more "responsive" to being played on phones and tablets? (Example: in this game, we would need to dynamically resize the buttons so that the user does not have to scroll down.) Would we need to change JavaScript? What parts of JavaScript work on mobile devices, and what parts don't? 
   - This game was very small and only one page. However, I'd imagine workflow changes when you work on a larger project (i.e. my Capstone in SITE?) How does working on a large-scale project differ from a smaller one? (Both in planning what you want to code and during the coding process itself.)
   - Adding on to that question, how do we not get overwhelmed by all the tasks we need to complete and organize all of these tasks--especially when working as a team?

   
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
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
  
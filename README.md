# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Alexander Verdugo**

Time spent: **8** hours spent in total

Link to project:https://glitch.com/edit/#!/codepath-prework-alexaderverdgo?path=index.html%3A83%3A32

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [I added another button called "Hard Mode" this cuts the clue playtime in half and doubles the length of the pattern] List anything else that you can get done to improve the app!

## Video Walkthrough


![](https://i.imgur.com/LCMYpJr.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[The only outside resourse I used was the site provided in the pre-word document]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[One of the challenges I faced while using Html for the first time in this pre-work, was shaping the buttons on the page. At first, I struggled with getting the dimensions right in the style folder. To overcome this I did some research on w3bschools and found you can create class objects in Css and assign preset values with these classes. After learning this I created a panel class for each button and played with the values until I got the shape I wanted then assigned the buttons to the corresponding classes. Another challenge I overcame in this project was implemented another game mode. I  was able to create a button after the initial pre-work, but I struggled to wire it up in a way that changed the game. I then came up with the idea to create a function for the hard mode which changed the game values. However, the values were constants and could not be mutated in a function, after referring to the pre-work document I changed them all to the "var" data type which allowed me to write my function.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[After completing the project, one main question I had was when working with a team on a web development project is the work usually distributed between the different files ex. one programmer works on the javascript, one the Html, and one the CSS. Or are certain functions and items on the page assigned to different developers. I have only experienced sort of paired programming or team programming when working on one file, or one language so the ability to understand what another person writes is much simpler. However, as I have learned web development is much more complex so I am curious as to what is a good team strategy for large web development projects. ]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours and the better understanding I know have I would like to implement different modes to the game such as an "expert mode" where the game will only play sounds and the user must memorize each sound to button to complete the pattern. Also with that time, I think it would be good to implement a scoreboard to show the number of games one by a user. Finally, I would like to add a "theme" feature which would be a button that can change the sound, color, and images displayed by each button. I think this would give the game much-needed replay value and variety. ]



## License

    Copyright [Alexander Verdugo]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
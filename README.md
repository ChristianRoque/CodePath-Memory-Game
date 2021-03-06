# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Christian Roque

Time spent: **3.5** hours spent in total
Submitted by: Chistian Roque


Link to project: https://glitch.com/edit/#!/ritzy-heathered-william

## Required Functionality

The following **required** functionality is complete:

- ✅ Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- ✅ "Start" button toggles between "Start" and "Stop" when clicked.
- ✅ Game buttons each light up and play a sound when clicked.
- ✅ Computer plays back sequence of clues including sound and visual cue for each button
- ✅ Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- ✅ User wins the game after guessing a complete pattern
- ✅ User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
- ✅ More than 4 functional game buttons
- ✅ Playback speeds up on each turn
- ✅ Computer picks a different pattern each time the game is played
- ✅ Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- ✅ User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

![](https://i.imgur.com/zEPQfqN.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   Stackoveflow for ideas on how to set up the intevals and :

   https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   The trickiest part of the activity was the timer with concerns lying on when timing. I would also have to keep an eye out on values to
   reset in case the user stops the game or loses vs time just running out. The most obvious solution was to compartmentalize the functionality
   of the timer to have more control over it with two functions, start and stop, that manage when clear or initialize the setInvertval var.
   Features such as extra lives, adding new buttons, and creating a random pattern were more simple, often taking the most time debugging to handle
   unexpected user interactions.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   Making scalable projects with conscious decisions on scalability and system design are some of the ideas that appear the most abstruse to me.
   Database choice, security protocols when constructing API's and readable code are some of the aspects I would like to polish during the internship.

4) If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   I believe making the game, timer, and play-note logic into their own respective classes is the most appropriate step to create a scalable project. This will prove beneficial in the future to implement new features
   such as new sounds, more keys, and others. React.js would be the best framework to handle the DOM.

## License

    Copyright Christian Roque

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

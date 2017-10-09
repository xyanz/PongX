BitBalloon analyst-total-40544.bitballoon.com
 -----------------------------------------
 
 -------------------------------------------
 Slides Link
 ---------------------------------
 *** YZ /Aug 11,2017 ***
 
 # PongX Proposal
 
 ## What is PongX?
 
 A modern take on the classic game of Pong, with some differences and
 additional features. Instead of the player scoring points by making the
 opponent miss, the player can simply earn points by hitting the ball at
 any moment.
 
 ## Wireframe
 
 ![3 Phase WireFrame](/pongWF.jpg)

 
 
 ## Initial thoughts on game structure
 
 - Make a playing field (table), ball, paddle
 - Have ball move about with randomly assigned velocity
 - On paddle collision, bounce ball back towards other player
 - On paddle collision, add point to player for successful hit
 
 ## Phases of Completion
 
 ### Phase I
 - Create basic HTML structure for gameboard Phase 2, including table,
 paddles, ball
 -Assign keydown event listeners to allow paddle movements
 
 ### Pahse II
 - Enable ball movement on game start
 - Collission detection between paddle and ball by checking X,Y, width
 and height elements of each object
 - Track player score based on number of successful ball collisions 
 
 ### Phase III
 - Allow computer paddle to track ball based on ("Y") location 
 - Add horizontal ball movement and randomize animation by changing
 default timer settings
 - Add CSS styling to game page, add paddle images
 - Add timer countdown to give player winning condition(no loss - friendship wins :))

 
 ### Phase IV
 - Add landing page with form to get player name and desired difficulty
 - Add CSS styling, custom font, background to all 3 Phase pages
 - Display game winning message on phase 3 with player name, score, and time of round
 - Checking proper ball collision scoring by setting interval timeout to 
 avoid multiple scoring function calls in a short time

 ### Phase V 
 - Convert to classes
 - Add Powerups
 - Add custom player paddles
 - difficulty settings
 
 ## Links and Resources
 -https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_cleartimeout2

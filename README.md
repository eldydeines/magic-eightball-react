
# Eight Ball

In this exercise, I need to build a simulation of a classic kid’s toy, the Magic Eight Ball.

## Requirements
- This should appear as a black ball that initially reads “Think of a Question”.
- When you click on the ball, it should choose a random answer & the matching color for that answer. 
- Two Components
  - App: A simple component that just renders an EightBall component.
  - EightBall: The component for the magic eight ball.  The EightBall should take a single property, answers, which should be an array of objects, with each object having a key for msg and color. The EightBall will need state to keep track of the current color and message text, and this state should initially be “black” and “Think of a Question”.  Make it so that the ball chooses a random message when it is clicked on. This should change the background color of the ball and the message.

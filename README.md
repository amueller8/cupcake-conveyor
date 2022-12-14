# Cupcake Conveyor

# About

Cupcake Conveyor is a casual creator with 2 different creation modes.
One is the conveyor belt frosting mode, where you can bake cupcakes that come by on a conveyor belt and then select frosting colors for cupcakes as they come by.
You can create fun scrolling patterns as the cupcakes go by, and if you come up with anything very pleasing, you can pause
the conveyor belt to take a screenshot!

The other mode is decorating mode, where you can frost a plain cupcake and also add magic color-changing sprinkles.

The conveyor option is great for people who don't feel like they are artists-- they can still inform a creative process without much mouse-dragging!
The decorating mode is great for freestyle artists, and each screenshot you take will be different due to the sprinkles flashing colors.

(The conveyor option was loosely inspired by [this game I played in childhood, Hey Girls Muffin Maker ](
The Hey Girls Muffin Maker - Holly Hobbie - NuMuKihttps://www.numuki.com › ... › Holly Hobbie Games); (have linked to a hosting site).
That game gave negative feedback if you messed up though (it was humorous). My version of the game is simplified, and just lets the creator create.

### What are users casually creating?
Users are casually creating cupcakes in a variety of ways!

### How are they kept engaged and excited to create?
Users have a couple of decorating options in case one becomes boring. They can toggle back and forth!
They also can play with pausing the conveyor belt to create new visuals.

### How does this help people make something they are proud to share?

There are a couple of options, one that is a little more regimented (conveyor mode) and one that is freeform.
So if someone doesn't feel comfortable or maybe is unable to use a mouse well (eg physical disability) they can still participate
and create something "polished", or someone can put themselves out there and try freehand cupcake decorating!

## Conveyor Mode
After clearing the entry screen:
<img width="498" alt="Screen Shot 2022-12-14 at 10 08 29 AM" src="https://user-images.githubusercontent.com/68559641/207632517-4fcb57c7-ac1c-4b3a-ae9f-5add2f9738cc.png">

5 baked cupcakes!
<img width="494" alt="Screen Shot 2022-12-14 at 10 08 48 AM" src="https://user-images.githubusercontent.com/68559641/207632584-a8881bf0-e6a1-41c4-835a-9e51d620fa16.png">

## Decorating Mode
<img width="484" alt="Screen Shot 2022-12-14 at 10 10 05 AM" src="https://user-images.githubusercontent.com/68559641/207632967-68e8f56c-236a-4be9-a07c-d53b82a0bee7.png">



# Link to Play
See it on openprocessing.org [here](https://openprocessing.org/sketch/1772103);


# Personal Meaning

This idea was inspired by a game I loved as a child (linked above), it was very satisfying to decorate cupcakes on a conveyor belt.
That game was far more complex, but telling people I was working on this brought me lots of joy! It reminded me of hanging out with
my sisters as we all watched each other play computer games (definitely nostalgia).
It also was very fun to create something "cute": I sometimes shy away from stuff like this as a woman in CS because I don't want to
feel like I'm playing into a stereotype of being too girly, but this was really fun and I'm so glad I didn't feel personal pressure to
do something more stereotypically intellectual/lofty.


At least 1 paragraph that explains how working on this system challenged you as a computer scientist. How did you push yourself outside of your comfort zone? Why was this an important challenge for you? What are the next steps for you going forward?

# Challenges
I had never used Processing.Js before and I was in for a big learning curve in terms of figuring out animations, etc.
I also had initially scoped out more than I could handle which was very frustrating. I had to scale it back appropriately so that
I could still include both modes (initially I had spent hours working on an animation for frosting dropping down out of the icing bag, 
a la Holly Hobby Muffin Maker, but although I had the falling part working very well, setting the X coordinates appropriately within the time loop
proved to be elusive with the few strategies I tried).
It was a good lesson in scope, for sure.

#Bugs
I turned a bug into a feature-- with the frosting bag, although you could cycle through 4 colors, the 4th color was coming out as a no-fill no stroke
shape. So I made that "no frosting". My intuition is that is is something with how I update num_frosting_changes (number of clicks on the frosting bag) versus
how often the draw loop is updated, but I spent a good hour debugging and didn't quite resolve it so turned it into a feature.

Also, I hard code the icing start color as pink, so even if you start with the frosting bag as blue/purple, when you bake the cupcake
it will come out pink. This was to keep consistency among the start colors: I had considered a global array of start colors for each cupcake
but decided to scrap it (seemed like a lot of for loops/etc) in the interest of finishing out the rest of features.

#Resources
In additon to the processing.js documentation, I found these resources helpful:

https://discourse.processing.org/t/how-to-save-a-previous-mouse-position/24434/2
<br>
The above resource helped with saving mouse positions for the frosting/sprinkles. I was having a frustrating experience
with a single ellipse moving around the screen because the mouseX/mouseY and loop were updating and drawing so often, nothing got left behind.
(ie the circles hadn't been redrawn before)..
https://bjango.com/articles/processingperfectloops/ 
<br>
The above resource I used for the timeLoop feature of the conveyor belt, to keep the conveyor squares and cupcakes all moving 
continuously.

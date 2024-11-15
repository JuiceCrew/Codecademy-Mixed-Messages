# Mixed Messages
This is the first portfolio project on the Codecademy platform for the Full-Stack Developer path. For this project I was tasked to write a program using Javascript which,
when run, would generate a randomomized message every time. There was no direction
given on how this project should be laid out; the only direction given was that
the output should consist of at least 3 pieces of data.

At first I wasn't sure how I wanted to go about creating this program; I wasn't 
concerned too much with the coding part but rather what form I wanted it to take.
I wanted the output to be an actual sentence and not just a random jumble of words
so I started looking up the actual anatomy of an English sentence. While interesting,
I quickly realized that for the program to output a truly random coherent sentence each 
time, it would quickly grow out of scope of the project. Instead I settled on the idea
of each sentence following a specific structure that the random word selections could
just slot into.

## Inspiration

I took inspiration from an old educational video game from my childhood
called "Reading Blaster Ages 9-12"; a game that taught early linguistics through various
fun minigames. There was a specific minigame that took the form of a slot machine of words
which when spun, would output a random selection of 5 words. The user and computer would
take turns spinnning and selecting a word that fit into the criteria in their sentence with
the goal being the first to create a random kooky sentence.

![Reading Blaster Logo](/Images/Reading-Blaster-Logo.jpg)
![Slot Machine Game](/Images/slot-machine.jpg)

For my program, I decided on 8 different lists of 30 words each organized into arrays that would be randomly selected from. I also included a loop that has a 50% chance to select additional subjects to include in the sentence. When run the program loads the random selections into a new array and joins them together before displaying to the console.

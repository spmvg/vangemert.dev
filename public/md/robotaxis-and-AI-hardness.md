Date: 16 Jan. 2022

## Robotaxis and AI-hardness
There seems to be an ever-growing hype surrounding the field of AI.
In this post, I recap complexity theory, discuss why I haven't seen Tesla Robotaxis whizzing around my neighbourhood and introduce the term "AI-hard".

### NP-hardness
In computer science, the field of complexity theory focuses on classifying a problem based on its computational difficulty.
One of the most famous problems in complexity theory is the P versus NP problem.
It is suspected that there exists a class of problems for which it is easy to _verify_ a solution, but which are difficult to solve.

A problem is called NP-hard if it is at least as hard as the hardest problems in NP.
An example of such a problem is the travelling salesman problem.
Given the suspicion that P is not NP, it is suspected that the travelling salesman problem rapidly becomes more difficult with the scaling of the problem.
Computer scientists are aware of the apparent difficulty of the problem, and treat it accordingly. 
I'm not aware of a startup claiming to have efficiently solved the travelling salesman problem.
Doing so would instantly unlock one million dollars of prize money from the Clay Mathematics Institute.

### Tesla Robotaxis
Enter the field of AI.
Companies still throw about claims about the superiority of their AI left, right and center.
For decades, the singularity seems right around the corner.

For example, in 2019 Tesla [predicted](https://www.youtube.com/watch?v=0GnH_C6NrOM) full self-driving Robotaxis by 2020.
Owners of Tesla cars would allow their car to become a full self-driving taxi while they were not using it.
The owners would get a share of the revenue.
The probable gross profit of a single Robotaxi would be approximately $30 000 per year.
Tesla CEO Elon Musk had the following to say about buying a Tesla:

> _"Really the fundamental message that consumers should be taking today, is that it's financially instane to buy anything other than a Tesla."_ (Elon Musk, 2019. [YouTube](https://www.youtube.com/watch?v=F8TLsdpYsow))

Their stock price has gone to the stratosphere since.
In 2022 unfortunately, Robotaxis are still nowhere to be found.

### The difficulty of self-driving
Even though the market hasn't reached consensus on the difficulty of full self-driving, it looks like Elon Musk has finally drawn the conclusion that the problem of full self-driving is not as difficult as he thought.
It turns out to be harder:

> _"What it comes down to at the end of the day, is: to solve self-driving, [...] you basically need to recreate what humans do to drive. Which is: humans drive with optical sensors (eyes) and biological neural nets."_ (Elon Musk, 2021. [YouTube](https://www.youtube.com/watch?v=DxREm3s1scA&t=3945s))

This realization should not have come as a surprise.
For decades, scientists have struggled to understand why there are certain problems that a toddler can solve, but current AI can't.
As an example of such a problem, think for example of CAPTCHAs and why they exist.
It begs the question: are there problems that are equally hard as solving artificial general intelligence?
Is self-driving one of them?

A personal recommendation is the following.
In 2005, Jeff Hawkins published a [book](https://en.wikipedia.org/wiki/On_Intelligence) disseminating the differences between our brain and then state-of-the-art neural networks.
Even though the framework proposed in the book might not be completely accurate, the examples given make it seem unlikely that we will build an artificial general intelligence without taking more inspiration from biology.
Incremental advances in AI still have not yielded an AI comparable to humans.

### AI-hardness 
It seems like there are problems in AI that are fundamentally difficult to solve.
These problems could be called "AI-hard", taking inspiration from the term "NP-hard" in complexity theory.
AI-hard problems would require an artificial general intelligence to solve.
They arise in fields where we need human-like experience to solve problems.

Self-driving seems to be AI-hard.
More generally, problems involving vision seem to be AI-hard, such as facial recognition.
We have facial recognition software that "kind of works", but it does not compare to humans.
Also, problems involving language processing seem to be AI-hard, such as chatbots.
When we communicate with other humans, we interpret language based on a context that cannot be easily learned without general intelligence, even with large datasets.
The same holds true for spoken language processing.

Moreover, anything that involves creativity seems to be AI-hard.
These problems would include for example music production, writing code and code review (yes, I know about GitHub Copilot and I still do not fear for my job).

Current AI shines however when a problem can be sufficiently constrained or sufficient margin for error in the outputs is allowed.
These problems are not AI-hard.
Consider the victory of the Google AlphaGo team in 2017 against Ke Jie.
Current AI can beat the best human Go player.
AlphaGo is however highly specific to the game of Go.
This breakthrough doesn't seem to have gotten us closer to artificial general intelligence.

And so the promise of full self-driving remains...

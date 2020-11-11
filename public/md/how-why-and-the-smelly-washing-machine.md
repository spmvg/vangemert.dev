Date: 2 Nov. 2020
## How, why and the smelly washing machine

When it comes to commenting code, most people that I meet, tend to fall in one of two categories:

* Team "self-documenting-code."
Good code documents itself.
If you need to write comments, then your code is not clear enough: adjust your code.
* Team "half-code-half-comments."
Code is only an implementation: the "how."
It does not describe the rationale behind it: what the code is trying to achieve.

Personally, I fall squarely into team "half-code-half-comments."
This post is a short fictional story describing why.

##### LaundryRobot Inc.
Suppose: we work at LaundryRobot Incorporated.
We produce a personal robot assistant that helps you with daily chores.
One of the tasks our robot can do, is unloading a washing machine.
The source for unloading a washing machine, looks like this
```
class LaundryRobot(Robot):
    ...

    def unload_washing_machine(self):
        ...
        self.place_laundry_basket()
        self.open_door()
        self.place_clothes_in_laundry_basket()
        self.bring_laundry_basket_to_owner()
        return

    ...
```
The entire codebase is absolutely beautiful.
So beautiful in fact, that the developers didn't even need to write a single comment.
This saved the developers a lot of time.
The project was delivered before the deadline.
The users are happy.
The investors are happy.
The management is happy.
The original developers retire after receiving a huge bonus, spending the rest of their lives drinking Mai Tais and kicking back with their flip-flops on.

After a while, the newly hired development team receives customer feedback.
The laundry robot does not close the washing machine door.
A new developer, eager to show off his skills to the company, already sees why this is the case.
The original developers _obviously_ forgot to close the washing machine door when unloading laundry.
He quickly makes a pull request, adding `self.close_door()` to the routine:
```
class LaundryRobot(Robot):
    ...

    def unload_washing_machine(self):
        ...
        self.place_laundry_basket()
        self.open_door()
        self.place_clothes_in_laundry_basket()
        self.close_door()
        self.bring_laundry_basket_to_owner()
        return

    ...
```
All unit tests pass, QA signs off and he is proud of his contribution to this very successful project.

However, it turns out that your grandmother was right.
If you close the washing machine door immediately after doing laundry, the moist environment causes mould to grow inside the washing machine.
After a few months, most LaundryRobot users have smelly washing machines due to the bacteria growth.

The original developers intentionally did not add a door-closing function, since they were aware of the mould issue.
Is it the junior developer's fault however, for not having had a grandmother who told him that you should leave the washing machine door open, so the moisture can escape?

A simple comment would have been enough to prevent this incident:
```
class LaundryRobot(Robot):
    ...

    def unload_washing_machine(self):
        ...
        self.place_laundry_basket()
        self.open_door()
        self.place_clothes_in_laundry_basket()
        self.bring_laundry_basket_to_owner()
        return  # leave the door open to prevent mould buildup

    ...
```
The purpose of the code was contained in the absence of an implementation.
But there is no way to know, without explicitly writing down the purpose using a comment.

##### The "why" that cannot be described by the "how"
The smelly washing machine story is an example of a purpose which cannot be described by an implementation.
This example might be a clear-cut extreme.
It was the absence of an implementation, that was the purpose of the code.

It's not hard to imagine more subtle examples.
As an example: incrementing a counter at a specific place to prevent a race-condition, but not describing why this increment was placed there.

Without properly defining the "why" using comments, developers constantly have to guess what the original idea was behind the implementation.
A partial understanding of purpose is just as dangerous as a total misunderstanding.
Explicitness, using comments, is therefore a necessity.

##### The "why"
The problem with self-documenting-code, is that the purpose of the code needs to be reverse-engineered from the implementation.
Code often needs to be refactored, leaving little of the original implementation: solely the purpose remains, hopefully.
Even if code doesn't need to be refactored, it can contain bugs.
When resolving these bugs, it is important to keep the main purpose of the code intact.
Without documentation, the implementation defines the purpose.
Changing the implementation then carries the risk of conflicting with the original purpose of the code.

Explicitly documenting this purpose, is what commenting code should be all about.
Date: 8 Sep. 2020
## The number of bugs grows exponentially
The bigger a piece of software gets, the bigger the potential becomes for bugs.
This post describes how the number of bugs can grow exponentially and what can be done about it.

##### More possibilities
Often, there are more ways to use a function than the developer intended.
Even the most simple functions in Python can yield unexpected results: for example due to dynamic typing.
To describe how functions can be used in unintended ways, a simple function will be investigated.
Keep in mind that bugs are not often the result of a single unintended side-effect, but regularly have multiple causes.
The separate constituents of a bug might be obvious individually, but nontrivial in combination.
Compounding small deviations from the norm might lead to a big deviation in the result.
Let's focus on ways to use the division operator `/` in Python.

The division operator takes two numbers and divides them: it doesn't get much simpler.
Give it two numbers and it does what you expect.
But there are unintended ways to use the division operator.
Giving a `float` or an `int` to the division operator behaves differently in Python 2 vs. Python 3: so `1/2` can be `0`, depending on the version.
This specific example might be widely known in Python, but that is not a guarantee for a bug-free life.
Checking the result of division might have slipped through the cracks when porting from Python 2 and Python 3, causing bugs that are hard to find.

Another example of a nontrivial use of the division operator, is the following. 
Everyone who did high school math knows that dividing by zero is not allowed.
The division operator can raise a `ZeroDivisionError`.
Depending on how exceptions are handled in the calling code, this can cause unexpected behaviour.

More subtle can be the following.
Suppose the numerator and denominator have both been checked: they are not zero.
Then it can be assumed in the following code that the result will also be nonzero.
No!
With Numpy, the division operator supports the following statement `1/np.inf` equaling `0.0`.
But you also checked that the inputs are `numbers.Number`s, so this cannot happen, right?
No: `np.inf` happens to be an instance of `numbers.Number`.
These kind of incorrect assumptions and improper checks can create subtle bugs.

It is not hard to imagine how many more opportunities there are for unintended behaviour in complex functions.
For example, the division operator is a golden child compared to reading from a writing to a backend.

##### An exponential bugs model
Having explored how simple code can have more ways to use it than initially expected, let's try to make a qualitative model about bugs.
Assume that the number of bugs is proportional to the number of ways to use a piece of software.
The proportionality constant is not relevant to the conclusions.
Every new feature adds potential for unexpected side effects.
Let's say that the entire project consists of _N_ features.
Denote the number of ways to use feature number _i_ as

![Number of ways to use feature i](./images/num_uses_10pt_200dpi.png "Number of ways to use feature i") 

where _i_ can vary from 1 to _N_.
It is not necessary to determine the exact value of this number: just how it scales.
The total number of possibilities to use the software is then in the worst case

![Exponential growth](./images/exponential_10pt_200dpi.png "Exponential growth") 

which grows exponentially in every feature added.
Since the number of bugs is assumed to be a fraction of the total number of uses, the number of bugs will grow exponentially as well.

As an example, suppose that the project consists of 5 features, each with 4 possible use-cases.
The total number of ways to use the software is then 4^5 = 1024.
Adding another feature with again 4 use-cases, makes the number of possible uses, therefore the number of bugs and thus the workload of the bugfixing team, increase four-fold.
It is clear how the bugfixing workload can quickly become unmanageable.

##### What this means for Python development
Since the number of bugs grows exponentially with the size of the project, care must be taken to make this growth as slow as possible.
The number of available persons fixing bugs is finite.
The following can be done to help "flatten the curve".
* **Simple is better.**
Prefer small-and-easy over Swiss army knives.
Good examples are basic Unix command line tools.
Nobody wants to install an entire framework to use only a small component.
If a tool supports multiple use-cases, most components will rarely be used.
* **Limit the number of ways in which your function can be used.**
Of course, while taking the main functionality into consideration.
Be explicit about function signatures.
Make warnings and throw exceptions instead of making assumptions.
Check if the input actually makes sense: if a number is supposed to be positive, then complain when it is negative.
Don't use boolean kwargs to alter function behaviour.
Always ask yourself "can this variable reasonably be `None`?"

    A good example is the `datetime.datetime` object in Python.
The constructor of `datetime.datetime` only accepts a single format: year, month, day.
Other ways of initializing it are supported by special functions such as `.fromtimestamp`.
* **Be clear about requirements.**
Confusion about requirements forces you to leave options open, which opens the door for bugs.
* **Make fewer features.**
This is easier said than done and sounds trivial.
However, good developers distinguish themselves in part by knowing when to and when not to make something new.
You are probably not the first one implementing this logic, and will probably not be the last.

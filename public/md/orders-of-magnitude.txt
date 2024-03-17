Date: 23 Jan. 2021, Steven van Gemert

## Thinking in orders of magnitude

When you ask a physicist _"how big is A?"_ or _"how fast is B?"_ the response will ideally be: _"between X and Y."_
Taking into account uncertainty is drilled into physicists from early on.
But even if a physicist doesn't know a value, nor the uncertainty, rarely will you get the answer _"I don't know."_
Usually, potentially after a bit of contemplation, you will get an answer like: _"on the order of 10 microns."_
This is an order of magnitude estimate.
In my experience, order of magnitude estimates are underutilized in business, while they can be very useful in preventing bad decisions.
This article is an introduction to order of magnitude estimates.

First, orders of magnitude will be introduced.
Second, examples will be given.
Then, how to estimate the uncertainty of an order of magnitude estimate will be shown.
Finally, key take-aways are summarized.

#### Orders of magnitude
The order of magnitude of a value is the "closest" power of 10 to that value.
More technically, if you would draw the value on a logarithmic scale, the order of magnitude would be the nearest power of 10.
For example, the order of magnitude of 128 is 10^2, and 9999 is on the order of 10^4.

An order of magnitude calculation is a calculation, often just a multiplication, where the purpose of the calculation is the order of magnitude of the result: not the precise value.
If the result is several orders of magnitude off of what is acceptable for a project, it disproves bad ideas early.

#### Calculating the number of trees on earth
As an example of an order of magnitude calculation, let's calculate the number of trees on earth using an order of magnitude calculation.
Let's make some rough assumptions:
* The surface area of the earth is [510 million square kilometers](https://en.wikipedia.org/wiki/Earth).
* Eye-balling Google Maps, let's say a third of the earth is land.
* Eye-balling Google Maps again, let's say that half of the land contains trees.
* Looking outside, let's say that trees are 10 m apart in a rectangular grid.

The result of this calculation, gives on the order of 10^11 trees on earth.
A [study](https://www.nature.com/articles/nature14967) in Nature calculates the number of trees on earth to be 3⋅10^12.
This is just more than an order of magnitude off of our calculation.
However, that's not the point.

Suppose that someone would tell you that he/she [planted a million trees](https://en.wikipedia.org/wiki/Team_Trees) and therefore contributed to a significant reduction in global warming.
Since there are 5 orders of magnitude between the number of trees he/she planted and the actual number of trees on earth, (and you estimated the uncertainty of your order of magnitude estimate, see a following section) you can quickly draw the conclusion: well, I don't think so.

#### Charlie's wisdom
Billionaire investor Charlie Munger, known for his involvement in Berkshire Hathaway, is quoted by Poor Charlie's Almanack as having said the following regarding their keys to success: _"It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent."_
Order of magnitude calculations will not allow you to make precise calculations, but they will allow you to be consistently not stupid.

#### Estimating uncertainty in order of magnitude calculations
Order of magnitude calculations are often multiplications.
Hand-wavingly, an order of magnitude of uncertainty in the input, will yield an order of magnitude of uncertainty in the output, as one might expect.
This will be illustrated in this section.

To see how the errors in order of magnitude estimates propagate, assume that

* The factors of order of magnitude estimates are independent, which to be honest, is quite a statement.
Independence is not necessary, but it guarantees the factoring of the expectations.
* And the variance of the result exists,

Then the variance of the order of magnitude estimate _X_, consisting of _n_ factors, grows [as follows](https://stats.stackexchange.com/a/52699):

![Variance of a product of independent random variables.](./images/variance_product_independent_10pt_200dpi.png "Variance of a product of independent random variables.") 

This equation shows that factors of the estimate that have zero variance, scale the resulting standard deviation with their magnitude.
Therefore, the only interesting components of the calculation are the components that have variance.

The equation simplifies when the estimated standard deviations are much bigger than the expected value of the factor, which is usually the case in order of magnitude estimates.
It is not uncommon to be unsure if a factor should be an order of magnitude higher or lower.
Assuming that the estimated standard deviations of the factors are much bigger than the expected values, the squared expectations can be neglected:

![Variance in approximation of big uncertainty.](./images/variance_product_independent_approx_10pt_200dpi.png "Variance in approximation of big uncertainty.") 

This equation shows that when the uncertainties of the factors are high compared to the expectation, they simply multiply the standard deviation of the order of magnitude estimate.
In other words: an order of magnitude of standard deviation in a factor, will result in an order of magnitude of standard deviation in the calculation result.

#### Guessing the uncertainty in the trees example
Let's continue with the trees-example of a previous section.
To guess the uncertainty in our order of magnitude estimate, the rule-of-thumb will be applied: an order of magnitude in, yields an order of magnitude out.
I would argue that the uncertainties of the components, are as follows:

* The surface area of the earth: the ancient Greeks already knew the circumference of the earth with an impressive precision.
In the meantime, we've spent a lot of time measuring our surroundings.
The uncertainty in this value is neglegible compared to the other uncertainties.
* How much of the earth is land: we assumed that a third of the earth is land.
Would I believe you if you said that two thirds of the earth was land, an increase of a factor 2?
No: I can see with my own eyes that there is more ocean than land, but not impressively much more.
Let's take a factor of 2 of uncertainty: approximately a third of an order of magnitude.
* How much of the land contains trees: we assumed half of the earth.
There is a lot of desert, and there are a lot of mountains.
Would I believe you if you said that 5% of the earth's surface is forested?
Maybe.
I'm not a a geographer.
Let's add an order of magnitude.
* What is the spacing between trees in an average forest: we took a tree-spacing of 10 m.
Would a spacing of 100 m sound reasonable?
I don't think so: it's not really a forest then.
What about a spacing of 30 m?
Or 3 m?
Sounds reasonable.
Let's add a factor 3: half an order of magnitude of uncertainty.
Since we had to square the spacing in the calculation to obtain an area, the uncertainty in the area is 1 order of magnitude.

Adding up all uncertainties, the error in our estimate of the number of trees on earth could be as big as about 2 orders of magnitude.

#### Take-aways
* Order of magnitude estimates like _"approximately 1000,"_ while not useful for making precise statements, are often enough to disprove bad ideas early.
* Uncertainty of order of magnitude estimates can be guessed by multiplying relative uncertainties of the factors.
Hand-wavingly: an order of magnitude of uncertainty in a factor, gives an order of magnitude of uncertainty in the estimate.
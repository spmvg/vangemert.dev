Date: 2 Jun. 2021
## Adding confidence intervals to maximum likelihood estimates using `sympy`
While working on a [package](https://github.com/spmvg/evt) called `evt` for extreme value theory in Python, it was necessary to add confidence intervals to a maximum likelihood estimate.
Based on design considerations, the implementation that was considered to be optimal, is not the prettiest.
Nevertheless, it will offer an interesting read for those interested.
This post touches upon some interesting parts of statistics, and concludes by showing an example of the power of symbolic algebra in the actual code.
First, a quick introduction into the distribution.

##### The generalized extreme value distribution
The generalized extreme value distribution (GEV) is a distribution that arises in the study of statistical extremes.
Extreme value theory will not be the subject of this post.
For an excellent introduction, see [1].
The probability density function _f_ of the GEV will be referred to later.
It is defined as

![GEV](./images/gev_10pt_200dpi.png "GEV") 

where
* _x_ is a random variable,
* _γ_ is the extreme value index,
* _μ_ is the location parameter, and
* _σ_ is the scale parameter.

The GEV is also defined for _γ_ zero, but this is out of scope.
We will come back to the GEV shortly, but first: let's provide some context.
As usual in maximum likelihood estimation, we will assume a model and try to fit a dataset to it.
Luckily, `scipy` has us [covered](https://docs.scipy.org/doc/scipy/reference/tutorial/stats/continuous_genextreme.html).
A trivial next step is then to ask: how certain is this estimate?
That's where confidence intervals come in.
Confidence intervals often come with asterisks, unfortunately.

##### Interpreting confidence intervals
An _α_% confidence interval ideally indicates: on average in _α_% of the cases, the actual value is within this boundary.
However, this is often not the case.
The following points are important to keep in mind when interpreting confidence intervals.
* **Confidence intervals do not account for model-error.**
  For example, if you calculate error bars assuming a normal distribution, but your data is not normally distributed, your error bars will generally be off.
* **Confidence intervals are random variables.**
  This needs no explanation, but should not be forgotten.
* **Confidence intervals generally do not account for bias.**
  Confidence intervals often indicate the variance of the estimate, not the bias.
  Take this into account when interpreting them.
  Given an estimator and a dataset, estimating bias generally becomes a chicken-or-egg problem.
  Using multiple estimators is always a good choice, though not a remedy.

##### Estimating confidence intervals for maximum likelihood
In maximum likelihood estimation, there are multiple options for estimating confidence intervals.
For example:

* Calculate the [observed Fisher information](https://en.wikipedia.org/wiki/Observed_information) at the estimate.
  In this case we need to differentiate the PDF with respect to all combinations of parameters.
* Apply [Wilks' theorem](https://en.wikipedia.org/wiki/Wilks%27_theorem) to the log-likelihood ratio statistic.
  This requires numerical root finding in the case of the GEV, specifically: the nearest root.
  Good luck finding that numerically and keeping your code generic.
* If you're lucky, a probabilist has derived asymptotic behaviour of the estimate.
  This is not the case for the GEV, as far as I'm aware.
* Resample the dataset and estimate the parameters many times.
  This is computationally intensive.

Since the code of the `evt` package is supposed to be as generic as possible, I opted to go with the observed Fisher information.
Thus, I needed to differentiate the PDF of the GEV with respect to all combinations of parameters.
Manually this is quite a beast.
The only realistic option would be: symbolic algebra.
And that's where `sympy` comes in.

##### Calculating observed Fisher information
Simply put, the Fisher information indicates how much information sample data provides about an unknown parameter
_θ_ of a distribution _f_(_x_; _θ_), where _x_ is a random variable.
In the case of the GEV, 3 parameters need to be estimated: _γ_, _μ_ and _σ_.
Based on the [definition](https://en.wikipedia.org/wiki/Observed_information) of the observed Fisher information, we will need to estimate matrix elements of the following form:

![Observed Fisher information](./images/observed_fisher_10pt_200dpi.png "Observed Fisher information") 

where _i_ and _j_ are the matrix indices which enumerate the dimension of the parameter vector _θ_ – which is, 3.
Now, the fun part begins.

##### Design considerations
Knowing that the differentiation would be performed using symbolic algebra, we have several options to integrate the result in the `evt` package:

* Do it once using a scratch script and copy-paste it into the source code.
  This is error-prone and hurts while writing this.
* Evaluate the symbolic differentiation at run-time.
  This is wasteful.
* Evaluate the symbolic differentiation once, [lambdify](https://docs.sympy.org/latest/modules/utilities/lambdify.html) the function and serialize the function for later.
  This would have to depend for example on `pickle` (insert versioning issues here).
  Also, the `evt` package would then depend on `sympy`, while the actual usage of `sympy` is a one-timer.
  It's best practice to limit the dependencies, when possible.
* Evaluate the differentiation once and store the result as Python-code in the repository (ouch).
  Even though it is not pretty, compared to the rest of the options, it looks like the best approach.

So that's how I got on the path to write one of the pieces of code that I'm not the most proud of, but it's interesting enough to write about.
Let's step through the implementation.

##### Implementation
The first part is a [script](https://github.com/spmvg/evt/blob/master/sympy/create_compiled_expressions.py) that generates the module, which calculates the observed Fisher information.
The resulting module starts with a fat disclaimer:

```python
...
    'This file is not intended to be human-readable. It is generated by ``sympy/create_compiled_expressions.py``:',
    'see the generation file for further details.',
...
```
The symbolic differentiation is handled by `sympy`:
```python
from sympy import symbols, exp, log, diff

x, g, a, s = symbols('x g a s')
variables = [g, a, s]

...

for row_variable in variables:
    row = []
    for column_variable in variables:
        row.append(str(
            -diff(
                diff(
                    log_f,
                    column_variable
                ),
                row_variable
            )
        )
...
```
The function is stored by casting it to `str` and replacing representations of mathematical functions with their `numpy` equivalents.
The expectations are approximated by taking the mean.
Finally, the generated code is stored as a [private module](https://github.com/spmvg/evt/blob/master/src/evt/_compiled_expressions/compiled_expressions.py), to prevent users from thinking I'm a maniac.

And that's it!
Is it pretty?
No.
Does it work?
Yes.
Does it perform?
Well enough.
Time to focus on more important issues, and let's forget that I ever wrote this.
But first, let's publish a blogpost about it.

##### Bibliography
1. De Haan, Laurens, and Ana Ferreira. _Extreme value theory: an introduction._ Springer Science & Business Media, 2007.

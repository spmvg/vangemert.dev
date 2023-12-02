Date: 17 Oct. 2020, Steven van Gemert
## Datetimes and DST

On the surface, handling dates and times sounds like a trivial task.
Those with more experience know that it is not as simple as it looks.
The veteran knows that it is not that complex either: if you commit to the proper approach.
This post discusses some problems that can occur when handling datetimes.
Since some of these problems are caused by general misunderstanding of datetimes, this post will first highlight some datetime operations.
Then problems and solutions will be discussed.
Finally, the take-aways are summarized.

### Localizing
Python datetimes come in two flavors: timezone-aware and timezone-unaware.
An example of a timezone-unaware timestamp is "1 Jan 2020 at 01:00."
This datetime has no practical meaning, unless a timezone is added.
The process of adding a timezone to a timezone-unaware timestamp is called "localizing."
Localizing is often confused with timezone conversion.
Let's look at an example of localizing.

Timezones are commonly handled by the `pytz` library.
It is not part of the Python core.
The `datetime` package also allows you to provide a timezone on datetime definition directly, but this is not recommended since [it does not handle DST changes properly](https://stackoverflow.com/a/39460268).
A timestamp can be localized by using `.localize` from a `pytz`-timezone as follows
```
>>> import datetime
>>> import pytz
>>> pytz.timezone('Europe/Amsterdam').localize(datetime.datetime(2000, 1, 1))
datetime.datetime(2000, 1, 1, 0, 0, tzinfo=<DstTzInfo 'Europe/Amsterdam' CET+1:00:00 STD>)
```
This results in a datetime of 1 January 2000 at 00:00 Amsterdam-time.
It works nicely for this datetime: but problems can arise due to daylight savings time (DST).

### One timezone to rule them all: UTC
The Coordinated Universal Time (UTC - yes this is really the acronym) is an internationally recognized standard time.
For most practical purposes, excluding leap seconds, UTC is equal to Greenwich Mean Time (GMT).
UTC time is called "Zulu-time."
String representations in UTC commonly have the suffix `Z`: for example `2000-01-01T00:00:00Z`.
UTC does not have DST-changes.
This makes UTC timestamps unambiguous - also in the case of leap-seconds - and this is why UTC time is used all over the place.

In [a previous article](https://vangemert.dev/#/blog/strings-bytes-unicode), the golden rule of handling strings and bytes was: convert bytes to strings as soon as possible, and let the application logic only handle strings.
A similar rule exists for datetimes: convert datetimes to UTC as soon as possible, and let application logic only handle timezone-aware UTC timestamps.

### Daylight savings time
Some timezones adjust for summer-time and winter-time: moving the clock forward and backward at certain times of the year.
This is referred to as DST.
If you were not a programmer, DST would merely be an inconvenience, causing you probably no more struggle than having to manually adjust an analog clock every once in a while.
But we don't have this luxury.
Datasets are what they are, and we should deal with them.
Let's focus on the example of the DST changes of Amsterdam in the year 2000.

##### Non-existent times
In Amsterdam, the clock moved forward one hour on 26 March 2000 from 02:00 to 03:00.
The datetime at 26 March 2000 02:30 should never occur: thus an implementation should complain when this value is given.
However, by default, `.localize` does not complain when this datetime is given
```
>>> pytz.timezone('Europe/Amsterdam').localize(datetime.datetime(2000, 3, 26, 2, 30))
datetime.datetime(2000, 3, 26, 2, 30, tzinfo=<DstTzInfo 'Europe/Amsterdam' CET+1:00:00 STD>)
```
Instead, it is treated as the same exact UTC timestamp as 26 March 2000 **03:30**
```
>>> pytz.timezone('Europe/Amsterdam').localize(datetime.datetime(2000, 3, 26, 2, 30)).astimezone(pytz.utc)
datetime.datetime(2000, 3, 26, 1, 30, tzinfo=<UTC>)
>>> pytz.timezone('Europe/Amsterdam').localize(datetime.datetime(2000, 3, 26, 3, 30)).astimezone(pytz.utc)
datetime.datetime(2000, 3, 26, 1, 30, tzinfo=<UTC>)
```
This might cause unexpected behaviour.
This conversion happens because `.localize` contains a parameter called `is_dst` which [defaults to](https://github.com/stub42/pytz/blob/b70911542755aeeea7b5a9e066df5e1c87e8f2c8/src/pytz/tzinfo.py#L112) `False`.
In other words: `.localize` assumes that the datetime is not DST.

It would be best if `.localize` raised an exception when a non-existent time is provided.
This can be achieved by passing `is_dst=None` to `.localize`, as follows
```
>>> pytz.timezone('Europe/Amsterdam').localize(datetime.datetime(2000, 3, 26, 2, 30), is_dst=None)
Traceback (most recent call last):
  ...
pytz.exceptions.NonExistentTimeError: 2000-03-26 02:30:00
```
This is good: when we provide a non-existent timestamp - a value that doesn't make sense - the program raises an exception.
It is now up to the developer to determine the correct course of action in the context of the application.

Concluding, the rule is: when localizing datetimes, use `.localize(..., is_dst=None)` to prevent unexpected behaviour during DST transitions.
Handle non-existent datetimes in the context of the application.

##### Ambiguous times
In the previous section, non-existent timestamps due to the clock moving forward, were discussed.
Similarly, when the clock moves backwards, there will be times that occur twice.
This can cause ambiguity when determining the corresponding datetime.
Let's focus on DST changes in Amsterdam in the year 2000 again.

On 29 October 2000, the clock was moved backwards from 03:00 to 02:00 in Amsterdam.
The timestamp 02:30 therefore occurred twice: it is ambiguous.
However, the default behaviour of `.localize` is to ignore the DST part of this ambiguous timestamp.
This can be seen by comparing the equivalent UTC timestamps.
```
>>> pytz.timezone('Europe/Amsterdam').localize(datetime.datetime(2000, 10, 29, 1, 30)).astimezone(pytz.utc)
datetime.datetime(2000, 10, 28, 23, 30, tzinfo=<UTC>)
>>> pytz.timezone('Europe/Amsterdam').localize(datetime.datetime(2000, 10, 29, 2, 30)).astimezone(pytz.utc)
datetime.datetime(2000, 10, 29, 1, 30, tzinfo=<UTC>)
>>> pytz.timezone('Europe/Amsterdam').localize(datetime.datetime(2000, 10, 29, 3, 30)).astimezone(pytz.utc)
datetime.datetime(2000, 10, 29, 2, 30, tzinfo=<UTC>)
```
Observe that according to `.localize`, between 01:30 Amsterdam-time and 02:30 Amsterdam-time, the equivalent UTC timestamp moves ahead by two hours.
Even though you would expect there to be a single hour difference between 01:30 and the first occurrence of 02:30 in Amsterdam time.
In other words: `.localize` assumes that the timestamp 02:30 indicates the _second_ instance that 02:30 occurred that night, ignoring the first instance that 02:30 occurred.
This might cause unexpected behaviour.

It would be best to raise an exception in this case.
As with non-existent timestamps, this can be fixed by adding `is_dst=None` to `.localize`
```
>>> pytz.timezone('Europe/Amsterdam').localize(datetime.datetime(2000, 10, 29, 2, 30), is_dst=None)
Traceback (most recent call last):
  ...
pytz.exceptions.AmbiguousTimeError: 2000-10-29 02:30:00
```
Now `.localize` indicates that the timestamp 02:30 is ambiguous: this is good.
It is up to the developer to handle this case in the context of the application.
The same rule applies as in the previous section about non-existent datetimes: to localize datetimes, use `pytz.timezone(...).localize(..., is_dst=None)`.
Handle non-existent and ambiguous datetimes in the context of the application.

### Timezone conversion
In the previous sections, time conversion from local time to UTC has been done by `.astimezone`.
This is an example of datetime conversion.
DST changes complicate the conversion from local time to UTC, due to non-existent and ambiguous timestamps.
Therefore, developers should be careful when converting to local time to UTC.

UTC does not have DST changes.
Therefore, converting from UTC to any other timezone can be done without DST problems.
Once the timestamp is in UTC format, converting to other timezones can be done without issues.
The bottom line is the following.
Converting from local time to UTC must be done carefully due to DST changes.
Converting from UTC to local time does not cause DST issues.

## Take-aways
* **Golden rule:** convert datetimes to timezone-aware UTC timestamps as soon as possible.
* **Common string format:** whenever datetimes need to be represented as strings, use the same format everywhere.
For example: RFC3339 in Zulu-format.
* **Localizing:** to localize datetimes, use `pytz.timezone(...).localize(..., is_dst=None)`.
Handle non-existent and ambiguous datetimes in the context of the application.
* **Timezone conversion:** converting from local time to UTC must be done carefully due to DST changes.
Converting from UTC to local time does not cause DST issues.

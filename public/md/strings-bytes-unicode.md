Date: 22 Apr. 2020, Steven van Gemert

## Strings, bytes and unicode
Strings, bytes and unicode cause confusion among Python programmers - and they shouldn't.
This post goes into the differences, and concludes with how to write bug-free string handling in Python 2 and 3.
Understanding the differences between "string"-types and "bytes"-types in Python 2 and 3 is the first step.
After the pitfalls are understood, the main rule is formulated: convert from the bytes-type to the string-type as soon as possible, and let application logic only handle string-types.

##### Strings and bytes
Most programming languages make a distinction between a string-type, which represents text, and a bytes-type, which represents an encoded version of said text.
Bytes should be seen as a sequence of 8-bit values, between 0 and 255.
Strings are an interpretation of those bytes as text.
Python 2 and Python 3 handle these string-like and bytes-types differently.
It is however possible to make code that is compatible with both Python 2 and Python 3.

##### Encoding
The conversion of a string-type to a bytes-type is called encoding.
Similarly, the operation of going from a bytes-type to a string-type is called decoding.
The encoded sequence of bytes has no meaning, unless a mapping is determined between the bytes and the corresponding string representation.

_Table 1: The string-types and bytes-types in Python 2 and 3 might be confusing: but it is what it is. Encoding means going from string to bytes; decoding is the opposite._
|          | String-type | Bytes-type |
|----------|:-----------|------------|
| _Python 2_ | `unicode`   | `str`          |
| _Python 3_ | `str`         | `bytes`        |
|          |             |              |
|          |  `decode <--` |  |
|          |   | `--> encode`   |

The first confusion arises from the difference in string-datatypes in Python 2 and Python 3.
This is displayed schematically in Table 1.
In Python 2, the string-type is called `unicode`, while the bytes-counterpart is called `str`.
In Python 3, the string-type is `str` (!) while the bytes-counterpart is called `bytes`.

Not only the names are different, but also the representation.
In Python 2, `'A'` will result in a bytes-type `str`, while in Python 3 `'A'` results in a string-type - also `str`.

There are notations that make sense in both Python 2 and 3.
`u'A'` denotes a `unicode` variable in Python 2, and a `str` variable in Python 3: both string-types.
`b'A'` denotes a `bytes` variable in Python 3, and a `str` variable in Python 2: both bytes-types.

Besides this inconvenient naming of datatypes, the way in which Python 2 and Python 3 handle these string and bytes types, is also different.
Put simply: Python 2 tries to help you behind the scenes, while Python 3 is more strict.
Regarding strings, Python 3 is like a strict teacher.
Due to the inherent "helpfulness" of Python 2, code that runs fine on Python 3 can crash in some cases in Python 2, and vice versa.

##### Python 2 tries to be helpful
To illustrate the "helpfulness" in Python 2, let's try to do an operation that doesn't make sense: decoding a string-type.
In Python 3, `'A'` denotes a string-type, and if we decode it, we will get an error.
```
>>> 'A'.decode()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'str' object has no attribute 'decode'
>>> 
```
But in Python 2, `u'A'` results in a `unicode` type, and if we try to decode it, we get a `unicode` type back.
```
>>> u'A'.decode()
u'A'
>>> 
```
In [a post](https://vangemert.dev/#/blog/number-of-bugs-grows-exponentially) about exponential growth of bugs, one of the conclusions is that allowing too many use-cases for a function, opens the door for bugs.
Encoding and decoding implicitly in Python 2 is a good example.
Python 3 only allows you to do what makes sense - and will complain when you ask it to do something that doesn't.

##### The default encoder changed
To add to the confusion: the default encoder also changed between Python 2 and Python 3.
Python 2 uses the ASCII encoding by default, while Python 3 uses UTF-8.
The ASCII encoding contains a smaller character set than the UTF-8 encoding.
Strings that are encoded properly on Python 3, might fail on Python 2, due to the implicit usage of the ASCII encoding, combined with the "not very helpful" conversion.
As an example, take the following code in Python 2:
```
>>> '{}'.format(u'e')
'e'
>>> 
```
There is a bad practice here.
Note the mixing of the string-type inside the format, and the bytes-type outside of it.
The string-type will be implicitly encoded, before formatting in the bytes-type.
However, when a character is encountered that cannot be encoded using ASCII, the code crashes:
```
>>> '{}'.format(u'é')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
UnicodeEncodeError: 'ascii' codec can't encode character u'\xe9' in position 0: ordinal not in range(128)
>>> 
```
Note the encoding error: before the bytes-type can be formatted, Python tries to implicitly encode the string-type, but fails since it defaults to ASCII.
The corresponding Python 3 code looks as follows:
```
>>> b'{}'.format('e')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'bytes' object has no attribute 'format'
>>> 
```
Note that Python 3 is more strict and complains about a bytes-type not having the ``format`` attribute: Python 3 indicates that we're trying to do something that we shouldn't.

##### How to keep your sanity
The way out of the confusion, is to use string-types when you are handling strings, and bytes-types when you are handling bytes.
It is best practice to convert from bytes to string as soon as possible, and let the application logic only handle string types.
Should you have to write code that is Python 2 and Python 3 compatible, the ``six`` library can help you to distinguish between the string-type and the bytes-type, depending on the Python version.

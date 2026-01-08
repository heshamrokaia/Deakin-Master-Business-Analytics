# -*- coding: utf-8 -*-
"""


DEMO CODE WEEK 2  TUPLES
"""

my_tuple = 1, 2, 3 # our first tuple
my_tuple = (1, 2, 3) # the same
my_tuple = 1, 2, 3, # again the same
len(my_tuple) # 3, same as for lists

#Show an error
#my_tuple[0] = 'a' # error! tuples are immutable

a, b = 0, 1 # a gets 0 and b gets 1

a, b = [0, 1] # exactly the same effect

(a, b) = 0, 1 # same

[a,b] = [0,1] # same thing

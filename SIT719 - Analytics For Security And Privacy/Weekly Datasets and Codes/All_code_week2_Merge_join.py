# -*- coding: utf-8 -*-
"""
WEEKLy DEMO data Merge Combine
"""
import numpy as np
import pandas as pd
df1 = pd.DataFrame({'key': ['b', 'b', 'a', 'c', 'a', 'a', 'b'],'data1': range(7)})
df2 = pd.DataFrame({'key': ['a', 'b', 'd'],'data1': range(3)})

pd.merge(df1, df2, on='key')

"""
Out[40]: 
  key  data1_x  data1_y
0   b        0        1
1   b        1        1
2   b        6        1
3   a        2        0
4   a        4        0
5   a        5        0
"""

pd.concat([df1,df2],axis=0)

"""
Out[108]: 
  key  data1
0   b      0
1   b      1
2   a      2
3   c      3
4   a      4
5   a      5
6   b      6
0   a      0
1   b      1
2   d      2


"""

df1 = pd.DataFrame({'key': ['a', 'a', 'a', 'a', 'b', 'b', 'b'], 'data1': range(7)})

"""
Out[117]: 
  key  data1
0   a      0
1   a      1
2   a      2
3   a      3
4   b      4
5   b      5
6   b      6
"""


df_a=df1.iloc[0:4]

"""
Out[130]: 
  key  data1
0   a      0
1   a      1
2   a      2
3   a      3
"""

df_b=df1.iloc[4:]

"""
Out[132]: 
  key  data1
4   b      4
5   b      5
6   b      6
"""


data = pd.DataFrame(np.arange(6).reshape((2, 3)), index=pd.Index(['Ohio', 'Colorado'], name='state'),   columns=pd.Index(['one', 'two', 'three'],   name='number'))

"""
Out[136]: 
number    one  two  three
state                    
Ohio        0    1      2
Colorado    3    4      5

"""










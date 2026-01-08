# -*- coding: utf-8 -*-
"""
WEEKLy DEMO Data Cleaning
"""

import pandas as pd
from numpy import nan as NA
data = pd.Series([1, NA, 3.5, NA, 7])

data.isnull()

"""
Out[19]: 
0    False
1     True
2    False
3     True
4    False
dtype: bool


"""

data.dropna()

"""
Out[17]: 
0    1.0
2    3.5
4    7.0
dtype: float64
"""

data.fillna(0)

"""
Out[23]: 
0    1.0
1    0.0
2    3.5
3    0.0
4    7.0
"""

data.fillna(data.mean())

"""
Out[24]: 
0    1.000000
1    3.833333
2    3.500000
3    3.833333
4    7.000000
dtype: float64
"""








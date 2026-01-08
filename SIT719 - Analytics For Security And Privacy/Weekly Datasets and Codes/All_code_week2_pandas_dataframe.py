# -*- coding: utf-8 -*-
"""
WEEKLY DEMO 

pandas dataframe
"""

d = {'col1': [1, 2], 'col2': [3, 4]}
df = pd.DataFrame(data=d)


"""

>>> df
   col1  col2
0     1     3
1     2     4
"""

df2 = pd.DataFrame(np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), columns=['a', 'b', 'c']

)


# Import the `pandas` library as `pd`
import pandas as pd

# Load in the data with `read_csv()`
iris_data = pd.read_csv("https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data", header=None)

# Print out `iris_data`
print(iris_data)


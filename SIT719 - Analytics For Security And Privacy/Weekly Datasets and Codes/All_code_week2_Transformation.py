# -*- coding: utf-8 -*-
"""
DEMO CODE TRANSFORMATION
"""

data = {"Name": ["Adrian", "Bob", "Liza", "Bob"],
		"Age": [24, 28, 18, 28],
		"Sex": ["Male", "Male", "Female", "Male"]}
df = pd.DataFrame(data)
print(df)


"""
It will show you:
     Name  Age     Sex
0  Adrian   24    Male
1     Bob   28    Male
2    Liza   18  Female
3     Bob   28    Male
"""

df = df.drop_duplicates()
print(df)


"""
     Name  Age     Sex
0  Adrian   24    Male
1     Bob   28    Male
2    Liza   18  Female

"""

df=df.replace(to_replace ="Male", value ="M")

df=df.replace(to_replace ="Female", value ="F")



"""

Out[82]: 
     Name  Age Sex
0  Adrian   24   M
1     Bob   28   M
2    Liza   18   F

"""
import pandas as pd
import numpy as np
data = pd.DataFrame(np.random.randn(1000, 4))
data.describe()
col = data[2]
col[np.abs(col) > 3]

data[np.abs(data) > 3] = np.sign(data) * 3
data.describe()










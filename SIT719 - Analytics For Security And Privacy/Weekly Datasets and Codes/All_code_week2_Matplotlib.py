# -*- coding: utf-8 -*-
"""
WEEKLY DEMO MatplotLib
"""

import matplotlib.pyplot as plt
plt.plot([1, 2, 3, 4])
plt.ylabel('some numbers')
plt.show()


import numpy as np

# evenly sampled time at 200ms intervals
t = np.arange(0., 5., 0.2)
plt.plot(t, t, 'r--', t, t**2, 'bs', t, t**3, 'g^')
plt.show()



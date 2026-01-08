# -*- coding: utf-8 -*-
"""
Created on Fri Jan 17 15:01:56 2020


"""

import pandas as pd


from sklearn.metrics import confusion_matrix

dfp = pd.read_csv('payment_fraud.csv')

df = pd.get_dummies(dfp, columns=['paymentMethod'])

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    df.drop('label', axis=1), df['label'],
    test_size=0.33, random_state=17)

from sklearn.linear_model import LogisticRegression
clf = LogisticRegression()
clf.fit(X_train, y_train)


y_pred = clf.predict(X_test)

from sklearn.metrics import accuracy_score

print(accuracy_score(y_pred, y_test))


print(confusion_matrix(y_test, y_pred))
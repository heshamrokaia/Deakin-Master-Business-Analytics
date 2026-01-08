# -*- coding: utf-8 -*-
"""
Created on Tue Feb 11 11:21:10 2020

@author: aanw
"""


import pandas as pd
from sklearn.metrics import confusion_matrix

dfp = pd.read_csv('UNSWNB15Training.arff.csv')

X_train=dfp.iloc[:,:-1] 
y_train=dfp['label']

dfp2 = pd.read_csv('UNSWNB15Testing.arff.csv')

X_test=dfp2.iloc[:,:-1] 
y_test=dfp2['label']


from sklearn.linear_model import LogisticRegression
clf = LogisticRegression()
clf.fit(X_train, y_train)


y_pred = clf.predict(X_test)

from sklearn.metrics import accuracy_score

print('LR')

print(accuracy_score(y_pred, y_test))
print(confusion_matrix(y_test, y_pred))



"""
Naive Bayes

"""
print('NB')

from sklearn.naive_bayes import GaussianNB
gnb = GaussianNB()
y_pred = gnb.fit(X_train, y_train).predict(X_test)
print(accuracy_score(y_pred, y_test))
print(confusion_matrix(y_test, y_pred))


"""
Decision Tree

"""

print('DT')
from sklearn.tree import DecisionTreeClassifier # Import Decision Tree Classifier
from sklearn import metrics #Import scikit-learn metrics module for accuracy calculation

# Create Decision Tree classifer object
clf = DecisionTreeClassifier()

# Train Decision Tree Classifer
clf = clf.fit(X_train,y_train)

#Predict the response for test dataset
y_pred = clf.predict(X_test)

print(accuracy_score(y_pred, y_test))
print(confusion_matrix(y_test, y_pred))





"""
MLP

"""
print('MLP')


from sklearn.neural_network import MLPClassifier
clf = MLPClassifier(hidden_layer_sizes=(8,8,8), activation='relu', solver='adam', max_iter=500)
clf.fit(X_train, y_train)

y_pred = clf.predict(X_test)

print(accuracy_score(y_pred, y_test))
print(confusion_matrix(y_test, y_pred))


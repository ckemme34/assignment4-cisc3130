# CISC 3130 MY9 Data Structures Assignment 4 - C. Kemme
An analysis of "Better Now" by Post Malone

## Introduction
  Assignment 4 revolves around its presentation, and style.  For the assignment we are to introduce ourselves to the wide world of the world wide web, and web development. The project serves to act as a baseline for project orientation and as the start of a presentable portfolio. Assignment 4 involves preparing an image containing a word cloud of lyrics, depicting their frequency. More frequently occuring words will appear larger and closer to the center of the cloud, while less frequent words lie on the outside of the cloud and are considerably smaller. As this is our first "dip" into the world of web development, the guidelines are to create a simple webpage with a static image contatining the word cloud.

## Method
  Using a previously created frequency list using our code in [Assignment 3](https://github.com/ckemme34/assignment3-cisc3130-Cameron-Kemme), we will generate an image using the Any Chart library. Their library consists of many charts and outlines, but they provide a interactive word frequency chart. The cloud has the ability to display the frequency, percent of occurance and place each word in different categories. For the purposes of this assignment, I chose the categories to be Used Once (n=1), Used Infrequently (1<n<=5), Used Frequently (5<n<=10), Used Very Frequently (10<n<=20) and used most frequently (n>20). Additionally, one can confirm the existance of the words used by Malone by clicking on the word; redirecting you to the dictionary to check. AnyChart's components go beyond the requirements of this assignments, so I've provided a static webpage as well, with only a static image generated by AnyChart.
  
## Link

  Project is hosted using [GitHub Pages](https://ckemme34.github.io/assignment4-cisc3130/static.html).
  Write up can be found at: (https://docs.google.com/document/d/19Ko-47G0ddDvvMc4EEBquKAB3EqRXbLjRkKE0OKCs7g/edit?usp=sharing)

## Authors

* **Cameron Kemme**

## Licensing

Songwriters: Austin Richard Post / Carl Austin Rosen / Frank Dukes / Kaan Gunesberk / Louis Bell / William Thomas Walsh / Adam King Feeney
Better Now [lyrics](https://genius.com/Post-malone-better-now-lyrics) © Sony/ATV Music Publishing LLC, Universal Music Publishing Group

Thank you to [Any Chart](https://www.anychart.com/) for providing a free trial for their Javascript Libraries.

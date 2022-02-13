# MLTD Calculator

The MLTD Calculator is a simple web application for [IDOLM@STER MILLION LIVE THEATER DAYS](https://millionlive.idolmaster.jp/theaterdays/) players to calculate how many times they need to play the songs to meet their event goals.

The application is mainly built with React JS and SCSS.

>❗️NOTICE: 
>- This application is doing only rough calculation.
>- The results are not rounded to integers, which can help users to adjust their plays.

## Features

0. There are random mini characters generatad on welcome page. On special days, there are also special banners genereated randomly.

1. Users can select type of the events. (There are still event types which I don't have data about, their pages will be developed soon after the coming one is hold.)

2. When users fill in the form and click 'Calculate' button, they will get a result telling how many times they still need to play to meet the goal.
The event item quantity you use are set to the minimum as defalt.

3. When click on 'Clear' button, the form will be reset.

## Users' Guide

!["usersguide]{https://github.com/BosiC0015/mltd-calculator/blob/master/public/20220212_190615.gif}

## Setup and Run

1. ```cd``` to the directory
2. install the depensencies in terminal with ```git install``` command
3. run ```npm start```
4. open http://localhost:3000/ in the browser.
# RhyFoRe - Rhytms For Resistence

## Hi people we are planning the RhyFoRe a software package to support your local protest, 

## by enabling participants to sync their druming together with a digital tool independent from their location.

It would be ideal if people can deploy it on their own server so the hardware requirements stay low. 


## Our Goal: 

Synchronizing clients so all of them receive a signal simultaniously. And therefore are enabled to drum in the same rhytm, wherever their location is. This program can be used for protests as a measure to prevent the spreading of the coronavirus.
We want to use digital technology for the good of the people and this is one of the tools we found for this.

All the clients should receive either an visual change in the website or a audible signal depending on their choice. 

The "signals" mentioned here are those visual or audible changes.

We are planning to create an API that handles the requests. 

The mainpart in the beginning will a browseable website that receives the clients, lets them access the API . 


### We created a roadmap to develop the RhyFoRe: 


### In development:

- Creating the API that serves the signals at the time of the event

- MongoDB to save the time of the events and the rhytm

### Still open:

- Creating a Frontend using Angular or React that connects to the API and displays or plays the signals.

- Creating an APK to access the API and displays or plays the sigals but it should also access the camera and especially the flashlight so it can be used as a signal as well .
  + Extra: If their could be an solution how we can connect this app so it triggers an external light source, it would be amazing. Altough maybe it easier to just           make a program to run it on a raspberry pi  



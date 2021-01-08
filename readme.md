# RhyFoRe - Rhytms For Resistence
### Hi people we are planning the RhyFoRe a software package to support your local protest, by enabling participants to sync their druming together with a digital tool independent from their location.

It would be ideal if people can deploy it on their own server so the hardware requirements stay low. 

### Our Goal: 

Synchronizing clients so all of them receive the signal to hit the drum simultaniously. And therefore are enabled to drum in the same rhytm, wherever their location is. This program can be used for protests as a measure to prevent the spreading of the coronavirus.
We want to use digital technology for the good of the people and this is one of the tools we found for this.
All the clients should receive either an visual change in their client software or a audible signal depending on their choice. 
The signals mentioned here are those visual or audible changes.
We created an API that handles the requests the frontend sends. 
The mainpart in the beginning will a browseable website that receives the client and lets them access the API, receives the data when to play and transforms it to the signals that will be displayed or played on the clients device. 
### We created a roadmap to develop the RhyFoRe: 

### Finished development:

* Creating the API that serves the signals at the time of the event See the [API.md] <https://github.com/RhyFoRe/RhyFoRe/edit/main/API.md> ---  finished in a minimalistic version focused on function
* Creating the API that serves the signals at the time of the event See the API.md: <https://github.com/RhyFoRe/RhyFoRe/edit/main/API.md> ---  finished in a minimalistic version focused on function
* MongoDB to save the Data --- finished 

### Still open:

* Creating a Frontend using pure Javascript or Angular or React that connects to the API and translates it to display or play the signals 
* Creating an APK to access the API and translates it to display or play the signals. It should also access the camera and especially the flashlight so it can be used as a signal as well.
  * Extra: If their could be an solution how we can connect this app so it triggers an external light source, it would be amazing. Altough maybe it is easier to just create a program to run it on a raspberry pi or something similar.
  
#### I hope everything was clear there is a discussion board enabled here for this project.

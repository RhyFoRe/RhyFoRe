## API Specifications

It is running and uses a very simple scheme to provide the rhytm and also handles them as specific events. 

So it is possible to set: 

* The title of the event -- title 
* The description of the event -- description
* A time the event starts 
* The duration of a loop in floating point accuracy in seconds -- duration
* The total number of loop repeats --> the time the events starts + the duration of the loop * the loop repeats =  the end of the event
* A first beat SlaveFirst (personally i think we should rename this, i dont want slaves)  it is the time between the start and the first beat in the loop -- slaveFirst
* A second beat SlaveSecond it is the time between the first beat and the second beat in floating point accuracy in seconds -- SlaveSecond
* A third beat SlaveThird it is the time between the second beat and the third beat in floating point accuracy in seconds -- SlaveThird

Sure this is just a minimalistic start but actually we can do already a lot with three beats :) 

So this is the data requestable by the clients and they should translate this to the appropriate frontend information and signal wished for by the client.

### There are four cases: 

#### Client connected but the event didnt start:

There should be the title and description of the next upcoming event being displayed plus a timer when it starts. 

#### Client was connected and the event is starting:
If the event starts it must calculate to play the signals for the beat according with the start time, the duration of the loop and the loop repeats to find the end of the event and repeat till this point. 

If the event ends we can add a message  -- create an extra variable for this in the database? 
And after that  restart the timer for the start of the next event and display the title and description again of the next event.






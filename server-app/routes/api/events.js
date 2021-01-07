var router = require('express').Router();
var mongoose = require('mongoose');
var EventSignal = mongoose.model('EventSignal');

// return a list of events
router.get('/', function(req, res, next) {


  EventSignal.find().sort({'createdAt': -1}).then(function(events){
    return res.json(events);
  }).catch(next);
});

router.post('/', function(req, res, next){
    var eventSignal = new EventSignal();
    console.log('--------', req.body)
    const errors = []
    let { title, description, duration, slaveFirst = 0, slaveSecond = 0, slaveThird = 0, eventDate, repeatCount = 0
    } = req.body
    if(!duration) {
        errors.push('duration cant be blank')
    }

    // if(!slaveFirst) {
    //     errors.push('slaveFirst cant be blank');
    // }
    // if(!slaveSecond) {
    //     errors.push('slaveSecond cant be blank');
    // }
    // if(!slaveThird) {
    //     errors.push('slaveThird cant be blank');
    // }
    if(Number(duration) < (Number(slaveFirst) + Number(slaveSecond) + Number(slaveThird))){
        errors.push('Duration cant be less than total of all slaves');
    }

    if(errors.length > 0 ) {
        return res.status(400).json({success: false, message: errors.join(',')})
    }

    console.log({eventDate})
    eventSignal.duration = duration;
    eventSignal.slaveFirst = slaveFirst;
    eventSignal.slaveSecond = slaveSecond;
    eventSignal.slaveThird = slaveThird;
    eventSignal.title = title;
    eventSignal.description = description;
    eventSignal.eventDate = eventDate
    eventSignal.repeatCount = repeatCount
    eventSignal.save().then(function(){
      return res.json({eventSignal: eventSignal.toJSONFor()});
    }).catch(next);
  });


router.delete('/:id', function(req, res, next) {
  const { id } = req.params
    EventSignal.findById(id).then(function(event){
    if(!event){ return res.sendStatus(401); }
    event.remove((eventStatus) => {
      return res.json({eventStatus});  
    })
  }).catch(next);
});
module.exports = router;

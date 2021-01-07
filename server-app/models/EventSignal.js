var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var EventSignalSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: {
      type: Number,
      default: 0,
      required: true
  },
  repeatCount: { type: Number, default: 0 },
  slaveFirst: { type: Number, default: 0 },
  slaveSecond:{ type: Number, default: 0 },
  slaveThird: { type: Number, default: 0 },
  slaveThird: { type: Number, default: 0 },
  eventDate: {type: Date}
}, {timestamps: true});

EventSignalSchema.plugin(uniqueValidator, {message: 'is already taken'});

// EventSignalSchema.pre('validate', function(next){
//   if(!this.slug)  {
//     this.slugify();
//   }

//   next();
// });

// EventSignalSchema.methods.slugify = function() {
//   this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
// };

// EventSignalSchema.methods.updateFavoriteCount = function() {
//   var article = this;

//   return User.count({favorites: {$in: [article._id]}}).then(function(count){
//     article.favoritesCount = count;

//     return article.save();
//   });
// };

EventSignalSchema.methods.toJSONFor = function(user){
  return {
    duration: this.duration,
    slaveFirst: this.slaveFirst,
    title: this.title,
    description: this.description,
    slaveSecond: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    slaveThird: this.slaveThird
  };
};

mongoose.model('EventSignal', EventSignalSchema);

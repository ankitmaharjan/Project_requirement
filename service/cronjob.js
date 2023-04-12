// const schedule = require('node-schedule');

// const job = schedule.scheduleJob('At every minute.', function(){
//   console.log('The answer to life, the universe, and everything!');
// });

const schedule = require('node-schedule');

const job = schedule.scheduleJob({second:0,hour: 0, minute: 0, dayOfWeek: 0}, function(){
  console.log('The answer to life, the universe, and everything!');
});
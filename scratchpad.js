const moment = require('moment-timezone');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const tz = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(tz);

const timezone = 'America/Vancouver';
const currentDate = new Date('2020-08-07T12:00-07:00');

const nowMoment = moment(currentDate);
const nowDayJs = dayjs(currentDate);

// true - same date UTC
console.log(nowDayJs.toISOString() === nowMoment.toISOString());

// true - same date: 2020-08-07T12:00:00-07:00
console.log(nowDayJs.format() === nowMoment.format());

// true - same milliseconds: 1596826800000
console.log(nowDayJs.valueOf() === nowMoment.valueOf());

// false - timezone comparison
tzMoment = moment.tz(nowMoment, timezone);
tzDayJs = dayjs.tz(nowDayJs, timezone);
console.log(tzDayJs.format() === tzMoment.format());



console.log(tzDayJs.format());
console.log(tzMoment.format());

console.log(currentDate);


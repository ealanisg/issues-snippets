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

// milliseconds for currentDate: 1596826800000
console.log(nowDayJs.valueOf() === nowMoment.valueOf()); // -> true

tzMoment = moment.tz(nowMoment, timezone);
tzDayJs = dayjs.tz(nowDayJs, timezone);
console.log(tzDayJs.format() === tzMoment.format()); // -> false (true is expected)

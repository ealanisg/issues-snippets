const moment = require('moment-timezone');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const tz = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(tz);

const timezone = 'America/Vancouver';
const currentDate = new Date('2020-08-08T12:00-07:00');
const nowMoment = moment(currentDate);
const nowDayJs = dayjs(currentDate);

// milliseconds for currentDate: 1596913200000
console.log(nowDayJs.valueOf() === nowMoment.valueOf()); // -> true

// timezone
tzMoment = moment.tz(nowMoment, timezone);
tzDayJs = dayjs.tz(nowDayJs, timezone);
console.log(tzDayJs.format() === tzMoment.format()); // -> true

// daylight
// https://www.timetemperature.com/canada/daylight_saving_time_canada.shtml
const plainDate = currentDate.toISOString().slice(0, 10); // 2020-08-08
const dlMoment = moment.tz('2020-03-08', timezone).set({
  hour: 12,
  minute: 30
});
const dlDayJs = dayjs.tz('2020-03-08', timezone)
  .set('hour', 12)
  .set('minute', 30);
console.log(dlDayJs.format() === dlMoment.format()); // -> false (true expected)
// 2020-03-07T12:30:00-08:00 !== 2020-03-08T12:30:00-07:00

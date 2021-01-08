const moment = require('moment-timezone');
const { formatISO, set, getTime } = require('date-fns');
const { utcToZonedTime } = require('date-fns-tz');

const timezone = 'America/Vancouver';
const currentDate = new Date('2020-03-08T12:00-07:00');
const nowMoment = moment(currentDate);
const nowDateFns = currentDate;

// milliseconds for currentDate: 1583694000000
console.log(getTime(nowDateFns) === nowMoment.valueOf()); // -> true

// timezone
tzMoment = moment.tz(nowMoment, timezone);
tzDateFns = formatISO(nowDateFns);
console.log(tzDateFns === tzMoment.format()); // -> true

// daylight
// https://www.timetemperature.com/canada/daylight_saving_time_canada.shtml
const plainDate = currentDate.toISOString().slice(0, 10); // 2020-08-08
const dlMoment = moment.tz(plainDate, timezone).set({
  hour: 12,
  minute: 30
});
const dlDateFns = utcToZonedTime(plainDate, timezone);
const dlDateFnsSet = set(dlDateFns, { hours: 12, minutes: 30 });
console.log(formatISO(dlDateFnsSet) === dlMoment.format()); // -> true

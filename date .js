const birthday = new Date("February 23, 2003 23:16:23:200");

const gethour = birthday.getHours();
const getmin = birthday.getMinutes();
const getsec = birthday.getSeconds();
const milsec = birthday.getMilliseconds();
const date = birthday.getDate();
const month = birthday.getMonth();
const year = birthday.getFullYear();

console.log(gethour);
console.log(getmin);
console.log(getsec);
console.log(milsec)
console.log(date);
console.log(month);
console.log(year); 

console.log(birthday.getTimezoneOffset());
console.log(Date.now())
console.log(Date.parse("2003-02-23"))

console.log(new Date(Date.UTC(96, 1, 2, 3, 4, 5)).toUTCString());
console.log(new Date("2018-01-02T03:04:05.678Z").getUTCDay());
console.log(new Date("2018-01-02T03:04:05.678Z").getUTCDate());
console.log(new Date("2018-01-02T03:04:05.678Z").getUTCMonth());
console.log(new Date("2018-01-02T03:04:05.678Z").getUTCFullYear());
console.log(new Date("2018-01-02T03:04:05.678Z").getUTCHours());
console.log(new Date("2018-01-02T03:04:05.678Z").getUTCSeconds());
console.log(new Date("2018-01-02T03:04:05.678Z").getUTCMilliseconds());

console.log(new Date(birthday.setDate(22)));
console.log(new Date(birthday.setMonth(0)));
console.log(new Date(birthday.setFullYear(2002)));
console.log(new Date(birthday.setHours(10)));
console.log(new Date(birthday.setMinutes(10)));
console.log(new Date(birthday.setSeconds(10)));
console.log(new Date(birthday.setMilliseconds(10)));

console.log(new Date(birthday.setUTCDate(13)));
console.log(new Date(birthday.setUTCMonth(10)));
console.log(new Date(birthday.setUTCFullYear(1999)));
console.log(new Date(birthday.setUTCHours(17)));
console.log(new Date(birthday.setUTCMinutes(23)));
console.log(new Date(birthday.setUTCSeconds(54)));
console.log(new Date(birthday.setUTCMilliseconds(100)));

console.log(new Date(1993, 6, 28, 14, 39, 7).toDateString());
console.log(new Date("05 October 2011 14:48 UTC").toISOString());
console.log(new Date("05 October 2011 14:48 UTC").toJSON());
console.log(new Date(Date.UTC(2011, 2, 30, 3, 4, 5)).toLocaleDateString());
console.log(new Date(Date.UTC(2011, 2, 30, 3, 4, 5)).toLocaleString());
console.log(new Date(Date.UTC(2011, 2, 30, 3, 4, 5)).toLocaleTimeString());
console.log(new Date("August 19, 1975 23:15:30").toString());
console.log(new Date("August 19, 1975 23:15:30").toTimeString());
console.log(new Date("August 19, 1975 23:15:30").toUTCString());
console.log(new Date(Date.UTC(96, 1, 2, 3, 4, 5)).valueOf());






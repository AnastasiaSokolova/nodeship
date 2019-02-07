module.exports = function(...args) {

    let dayInMs = 24*60*60*1000,
       [event, year, month, day] = [...args],
       currentDate = new Date(),
       currentYear = currentDate.getFullYear();

    if(currentDate.getMonth()+1 > month) {
        ++currentYear;
    }

    if(currentDate.getMonth()+1 <= month){
        if(currentDate.getDate() > day) {
            ++currentYear;
        }
    }

    let date = new Date(currentYear, month-1, day+1);
    let timeDiff = Math.abs(date.getTime() - currentDate.getTime());
    let dayDiff = Math.floor(timeDiff / dayInMs);
    console.log(`${dayDiff} days left until ${event}`);

};
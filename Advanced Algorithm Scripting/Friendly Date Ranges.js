/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].
*/

/*
makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].
makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].
makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].
makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].
*/

function makeFriendlyDates(arr) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var currentYear = new Date().getFullYear();

    var tmpDateArr, tmpDateObjArr, tmpFormatArr;
    tmpDateObjArr = arr.map(function(date) {
        tmpDateArr = date.split('-');
        var tmpDate = new Date();
        tmpDate.setFullYear(tmpDateArr[0], parseInt(tmpDateArr[1]) - 1, parseInt(tmpDateArr[2]));
        return tmpDate;
    });
    //Parse input arr to formatted date arr.
    tmpFormatArr = arr.map(function(date) {
        tmpDateArr = date.split('-');
        return monthNames[parseInt(tmpDateArr[1]) - 1] + " " + convertDay(tmpDateArr[2]) + ", " + tmpDateArr[0];
    });

    if (tmpFormatArr[0] === tmpFormatArr[1]) return tmpFormatArr.slice(1);
    //Time diff less than a year
    if (tmpDateObjArr[1].setFullYear(tmpDateObjArr[1].getFullYear() - 1) - tmpDateObjArr[0].getTime() < 0) {
        tmpFormatArr[1] = tmpFormatArr[1].split(',')[0]; //remove year if less than a year

        if (tmpDateObjArr[0].getFullYear() === currentYear) {
            tmpFormatArr[0] = tmpFormatArr[0].split(',')[0]; //remove year if also start from current year

            if (tmpDateObjArr[0].getMonth() === tmpDateObjArr[1].getMonth()) {
                tmpFormatArr[1] = tmpFormatArr[1].split(' ')[1]; //remove month if also end in same month
            }
        }



        return tmpFormatArr;
    }


    return tmpFormatArr;

    function convertDay(day) {
        day = parseInt(day);
        if (day == 1) return "1st";
        if (day == 2) return "2nd";
        if (day == 3) return "3rd";
        return day + "th";
    }
}
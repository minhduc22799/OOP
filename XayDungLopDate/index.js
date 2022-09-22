let myDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }


    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
        this.year = year;
    }
};

let date = new myDate(22, 2, 22022)
date.setDay(12);
date.setMonth(5)
date.setYear(2033)

let day = date.getDay();
let month = date.getMonth();
let year = date.getYear()
alert(day + "/" + month+"/"+year);
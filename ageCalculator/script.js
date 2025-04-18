function daysPerMonth(year, month) {
    let montht = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (findLeapYear(year) && month == 2)
        return 29;
    console.log("daysPerMonth method called");
    return montht[month - 1];
};
function findLeapYear(year) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
};
function ageCalculate() {
    let [year, month, days] = document.getElementById("input").value.split("-").map(Number);
    let [lYear, lMonth, lDays] = [0, 0, 0];
    let [daysCount, monthCount] = [0, 1];
    let [cYear, cMonth, cDate] = [new Date().getFullYear(), (1 + new Date().getMonth()), new Date().getDate()];
    let condition = true;
    if (year < cYear || (year === cYear && month < cMonth) || (year === cYear && month === cMonth && days < cDate))
        condition = true;
    else
        condition = false;
    while (year < cYear || (year === cYear && month < cMonth) || (year === cYear && month === cMonth && days < cDate)) {
        days++;
        lDays++;
        daysCount++;
        if (days > daysPerMonth(year, month)) {
            console.log(daysPerMonth(year, month));
            days = 1;
            month++;
        }
        if (month > 12) {
            month = 1;
            year++;
        }
        if (daysCount == daysPerMonth(year, monthCount)) {
            lMonth++;
            daysCount = 1;
            count = 1;
        }
    }
    lYear = Math.floor(lMonth / 12);
    if (condition)
        document.getElementById("result").textContent = `Age: ${lYear} years, ${lMonth} months, ${lDays} days`;
    else
        document.getElementById("result").textContent = "Enter correct date month and year"
}

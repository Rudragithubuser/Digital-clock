function clock() {
    var monthnames = ["Janaury", "febrauary", "March", "April", "May", "June", "July", "August", "Sepetember", "october", "November", "December"];
    var daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "sunday"];

    var today = new Data();

    document.getElementById('Date').innerHTML = (dayNames[today.gets()] + " " +
        today.getData() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear(

        ));


    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSecond();
    var day = h < 11 ? 'AM' : 'PM';

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;


    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;



} var inter = setInterval(clock, 400);

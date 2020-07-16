let date = new Date();

function renderCalendarView() {

    const month = date.getMonth();

    const monthNames = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
    ];
    
    const weekdayNames = [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
    ]
    
    let days = "";
    

    document.querySelector('.date h1').innerHTML = monthNames[month];
    document.querySelector('.date p').innerHTML = weekdayNames[date.getDay()] + " - " + date.getDate() + ". " + monthNames[month] + " " + date.getFullYear();

    const monthDayDivs = document.querySelector('.days');
    const lastDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const lastDayOfLastMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDayOfCurrentMonthIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    console.log(lastDayOfCurrentMonthIndex);

    for (let i = firstDayIndex; i > 0; i--) {
        days += `<div class="prev-date">${lastDayOfLastMonth - i + 1}</div>`;
        monthDayDivs.innerHTML = days;
    }

    for (let i = 1; i <= lastDayOfCurrentMonth; i++) {

        if (i === new Date().getDate() 
            && date.getMonth() === new Date().getMonth()
            && date.getFullYear() === new Date().getFullYear()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
        monthDayDivs.innerHTML = days;
    }

    for (let i = 1; i < 7 - lastDayOfCurrentMonthIndex; i++) {
        days += `<div class="next-date">${i}</div>`;
        monthDayDivs.innerHTML = days;
    }
}

function decreaseMonth() {
    date.setMonth(date.getMonth() - 1);
    console.log(date);
    renderCalendarView();
}

function increaseMonth() {
    date.setMonth(date.getMonth() + 1);
    console.log(date);
    renderCalendarView();
}

document.querySelector('.fa-angle-left').addEventListener('click', function () {
    decreaseMonth();
})

document.querySelector('.fa-angle-right').addEventListener('click', function () {
    increaseMonth();
})

renderCalendarView();
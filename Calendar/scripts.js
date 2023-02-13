'use strict'

const data_cell = document.querySelectorAll('td')
const h1 = document.querySelector('h1 span')
const [prev_button, next_button] = [document.getElementById('prev_button'), document.getElementById('next_button')]

// main function
function select_new_month (month) {
    let prev_start_day = month.position === 0 ? 31 : months[month.position - 1].total_days  ;
    let day = 1;
    h1.innerText = month.name + " - 2023";

    // main loop, 0 to 41 (all 42 data cells)
    for (let i = 0; i < data_cell.length; i++) {

        // leading days - before month
        if (i < month.start_day) {
            console.log(prev_start_day, month.start_day)
            data_cell[i].innerText = prev_start_day - (month.start_day - i - 1)
            data_cell[i].classList.add('dark-text')
            console.log('leading days')
        }
        
        // main days - month
        else if (i <= month.total_days + month.start_day - 1) {
            data_cell[i].innerText = day;
            day++;
            data_cell[i].classList.remove('dark-text')
            console.log('main days')
        }
        
        // trailing days - following month
        else {
            console.log('trailing days')
            data_cell[i].innerText = day - month.total_days;
            day++;
            data_cell[i].classList.add('dark-text')
        }
    }
}

// setting default month to "January"
let current_month_position = 0;
select_new_month(months[current_month_position])

// Event listerners
prev_button.addEventListener('click', event => {
    if (current_month_position === 0) {
        current_month_position = 11;
        select_new_month(months[current_month_position])    
    }
    else {
        current_month_position--;
        select_new_month(months[current_month_position])    
    }
})

next_button.addEventListener('click', event => {
    if (current_month_position === 11) {
        current_month_position = 0;
        select_new_month(months[current_month_position])    
    }
    else {
        current_month_position++;
        select_new_month(months[current_month_position])    
    }
})






//      ***
//      PREVIOUSLY ATTEMPTED CODE BELOW:
//      ***

/*
function main_function (month) {
    h1.innerText = calendar_months[month].name + " - 2023";
    let dark_text = true;
    let day = 0;
    let previous_total_days = calendar_months[month].position === 0 ? 31 : calendar_months[month - 1].total_days;
    
    // if start_day is 0
    if (calendar_months[month].start_day === 0) {
        dark_text = false;
        populate_from_start_day(month, day, dark_text, 0)
    }
    else {
        dark_text = true;
        populate_before_start_day(month, previous_total_days, dark_text)
        populate_from_start_day(month, day, dark_text, table_data[month].start_day)
        
    }
    
    // for (let i = 0; i < calendar_months[month].start_day - 1; i++) {
    //     dark_text = true;
    //     populate_before_start_day(previous_total_days, month, i)
    // }

    // start-day 5 (sat)
    // previous day 30 


    
}

// SIDE FUNCTIONS

function populate_before_start_day (month, previous_total_days, dark_text) { 
    console.log('started here')
    console.log(previous_total_days)
    for (let i = 0; i < calendar_months[month].start_day; i++) {
        console.log("HERE" + i)
        table_data[i].innerText = previous_total_days - (calendar_months[month].start_day - 1);
        text_colour(dark_text, i)
    }
}

function populate_from_start_day (month, day, dark_text, j){
    for (let i = j; i < table_data.length; i++) {
        console.log(i)
        day++;
        if (calendar_months[month].total_days < day) {
            console.log('there')
            day = 1;
            table_data[i].innerText = day;
            dark_text = true;
            text_colour(dark_text, i)
        } 
        else {
            table_data[i].innerText = day;
            text_colour(dark_text, i)
        }
    }
}

function text_colour (boolean, index) {
    if (boolean) {
        table_data[index].classList.add('dark-text')
    } else {
        table_data[index].classList.remove('dark-text')
    }
}

main_function(7) //aug

*/
import React, { Component } from 'react';

// import days from '../data/days';
//import day_eng from '../data/day_eng';
import months from '../data/months';

import '../style/Datepicker.css'




//render years for select
const RenderYears = (state) => {
    let year = state.currYear;
    var startYear = 1930; //optional!
    // var initYear = thisYear - 30;
    const years = [];

    while (startYear <= year) {
        years.push(startYear++);
    }
    
    const optYears = years.map((year, index) => {
        // if (year = initYear) {
        //     return (<option defaultValue={initYear} key={index}>{year}</option>)
        // }
        return (
            <option key={index}>{year}</option>
        )
    })

    return optYears;
};

//render months for select
const RenderMonths = () => {
    const optMonths = months.map((month, index) => {

        return (
            <option key={index} value={index}>{month}</option>
        )
    })

    return optMonths; 
};

//render months for select
const RenderDays = state => {
    const days = [];
    
    console.log(state.days);

    for (let i = 1; i <= state.days; i++) {
        days.push(i);  
    };

    const optDays = days.map((day, index) => {
        return (
            <option key={index}>{day}</option>
        )
    })

    return optDays;
};


// Render a hole year
const RenderYear = props => {
    console.log(props.calendar);

    const rows = props.calendar.map((days_in_month, index) => {
        let days = [];
        for (let d = 1; d <= days_in_month; d++) {
            days.push(d);
        }
        return (
            <tr key={index}>
            <td>
                    {days}
            </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>;


};



class Datepicker extends Component {
    constructor(props) {
        super(props);
        const today = new Date();

        this.initialState = {
            date: '',
            currYear: today.getFullYear(),
            currMonth: today.getMonth(),
            currDay:'select month',
        }

        this.state = this.initialState

        this.handleChange = this.handleChange.bind(this);

    };

    checkSelectedYear = event => {
        let currYear = event.target.value
        console.log(currYear);
    };

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        this.getDays(this.state.currYear, this.state.currMonth);
    };

    isLeapYear = year => {

        if ((year % 4 === 0 && year % 100 !== 0 )|| year % 400 === 0) {
            return true
        }
    
        return false
    };

    //months: 0, 1, 2, 3... = jan, feb, mars, april...
    getDays = (year, month) => {
        let leapyear = this.isLeapYear(year);
        let days = 30;

        if ((month % 2 === 0 && month <= 6) || (month %2 !== 0 && month >= 7)) { //
            days = 31
        } else if (month === 1 && leapyear) { //leapyear
            console.log("leapyear!");
            days = 29
        } else if (month === 1) { //feb
            days = 28
        } else {
            days = 30
        }

        return days
    };


    getCalendar = () => {
        let currYear = this.state.currYear;
        let calendar = [];

        for (let m = 0; m < 12; m++) {
            calendar.push(this.getDays(currYear, m));            
        }

       return calendar;        
    };




    render () {
        const { currYear, currMonth, currDay } = this.state;
        const calendar = this.getCalendar();
        const days = this.getDays(currYear, currMonth);
        // const monthCalendar = this.getMonthCalendar();
        // const test = this.getWeekDay(2019, 5,1);
        // console.log(test);


        return (
            <div className="container">
                <form>
                    <select 
                        className="dp-select" 
                        value={this.state.currYear}
                        name="currYear"
                        // onChange={this.checkSelectedYear}>
                        onChange={this.handleChange}>
                        <RenderYears currYear={currYear}/>
                    </select>
                    <select
                        className="dp-select"
                        value={this.state.currMonth}
                        name="currMonth"
                        onChange={this.handleChange}>
                        <RenderMonths currMonth={currMonth}/>
                    </select>
                    <select
                        className="dp-select"
                        value={this.state.currDay}
                        name="currDay"
                        onChange={this.handleChange}>
                        <RenderDays days={days} />
                    </select>

                    <table
                        name="currDay"
                        value={this.state.currDay}
                        onChange={this.handleChange}>
                        <RenderYear calendar={calendar} currDay={currDay}/>
                    </table>


                </form>

                {/* <table className="dp-mini-year">
                    <RenderMonthCalendar monthCalendar={monthCalendar} />
                </table>

                <table className="dp-mini-year">
                    <RenderYear calendar={calendar} />
                </table> */}

            </div>
        )
    }
};

export default Datepicker;

// //Tablehead that is wrong
// const TableHead = () => {
//     const showday = day_eng.map((day, id) => {
//         return (
//             <th className="dpth" key={day.id}>{day.dy}</th>
//         )
//     })

//     return (
//         <thead className="dpheader">
//             <tr>
//                 {showday}
//             </tr>
//         </thead>
//     )
// };

// //Render month
// const RenderMonthCalendar = props => {
//     console.log(props.monthCalendar);

//     const rows = props.monthCalendar.map((days, index) => {
//         return (
//             <tr key={index}>
//                 <td>
//                     {days}
//                 </td>
//             </tr>
//         )
//     })

//     return (<tbody>{rows}</tbody>)


// };


// //1 = mon, 2, tuesday...
// getWeekDay = (year, month, day) => {
//     const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
//     year -= month < 3;
//     return Math.round(((year + (year / 4) - (year / 100) + (year / 400) + t[month - 1] + day) % 7) - 0.6);
// };

// //return an array to render a months calendar
// getMonthCalendar = () => {
//     //Array 5 x 7 days
//     const monthCal = [[], []];
//     const year = this.state.currYear;
//     console.log(year);

//     const month = this.state.currMonth;
//     console.log(month);

//     //const firstday = this.getWeekDay(this.getWeekDay(year, month, 1));
//     const days = this.getDays(year, month);

//     console.log(days);



//     return monthCal;


// };

// //create a dateform - NOT WORIKING
// getDate = () => {
//     const year = this.state.currYear;
//     const month = this.state.currMonth;
//     const day = this.state.currDay;
//     const test = (year + ', ' + month + ', ' + day);

//     this.setState({ date: [test] });

//     console.log(this.state.date)
// };
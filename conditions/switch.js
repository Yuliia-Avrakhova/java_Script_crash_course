const month = 12; //December//Month of year:  December
let monthOfYear = " ";

switch (month){
    case 1:{
        monthOfYear = "January"
        console.log("January");
        return "OK";
    }
    case 2:{
        monthOfYear = "February"
        console.log("February");
    }
    break;
    case 3:{
        monthOfYear = "March"
        console.log("March");
    }
    break;
    case 4:{
        monthOfYear = "April"
        console.log("April");
    }
    break;
    case 5:{
        monthOfYear = "May"
        console.log("May");
    }
    break;
    case 6:{
        monthOfYear = "June"
        console.log("June");
    }
    break;
    case 7:{
        monthOfYear = "July"
        console.log("July");
    }
    break;
    case 8:{
        monthOfYear = "August"
        console.log("August");
    }
    break;
    case 9:{
        monthOfYear = "September"
        console.log("September");
    }
    break;
    case 10:{
        monthOfYear = "October"
        console.log("October");
    }
    break;
    case 11:{
        monthOfYear = "November"
        console.log("November");
    }
    break;
    case 12:{
        monthOfYear = "December"
        console.log("December");
    }
    break;
    default:{
        console.error("You provided a wrong number of month");
    }
}
console.log("Month of year: ", monthOfYear);

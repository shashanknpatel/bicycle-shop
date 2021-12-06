/* the script is placed inside an immediately invoked function expression which helps protect the scope of variables */

(function() {
    //part one: create hotel objext and write out the offer details

    //create a hotel object using object literal syntax
    var hotel = {
        name: 'Park',
        roomRate: 240, //amount in dollars
        discount: 15, //percentage discount
        offerPrice: function() {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };


//write out the hotel name, standard rate, and the special rate
var hotelName, roomRate, specialRatte; //declare variables

hotelName = document.getElementById('hotelName'); //get elements
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');

hotelName.textContent = hotel.name;                       //write hotel name
roomRate.textContent = '$' + hotel.roomRate.toFixed(2);   //write room rate
specialRate.textContent = '$' + hotel.offerPrice();       //write offer price

//part two: calculate and write out the expiry details for the offer
var expiryMsg; //message displayed to users
var today; //today's date
var elEnds; // the element that shows the message about the offer ending

function offerExpires(today) {
    //declare variables within the function for local scope var weekFromToday,day,date,month,year,dayNames,monthNames;
    //add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    //create arrays to hold the names of days / months
    dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];;
    monthNames= ['January' ,'February', 'March','April','May','June','July','August','September','October','November','December'];

    //collect the parts of the dat to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    //create the message
    expiryMsg = 'offer expires next';
    expiryMsg += day + ' <br />(' + date + ' ' + month + '' + year + ')';
    return expiryMsg
}

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);

// finish the immediately invoked function expression
}());
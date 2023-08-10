/*
1) if ticket number is less then 100 , per ticket price is = 100 tk;
2) if ticket number is more than 100 , but less than 200 , first 100 is 100 tk and last 100 ticket price is 90 tk ,
3) other than 200 hundred per ticket price is 70 tk,
*/ 

function ticketPrice(ticketQuantity){
    const first100Price =100;
    const secoundPrice = 90;
    const restTicket = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Price;
        return price
    }
}
const finalPrice = ticketPrice(15);
console.log(finalPrice);


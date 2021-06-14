


function kilometerToMeter(km){
    var meter = km * 1000;
    return meter;
}


function budgetCalculator(watchQ,mobileQ,laptopQ){
    var watch = watchQ * 50;
    var mobile = mobileQ * 100;
    var laptop = laptopQ * 500;

    var total = (watch+mobile+laptop);

    return total;
}


function hotelCost(days){
    let cost = 0;
    if(days > 0 && days <= 10){
       return cost = days * 100;
    }
    else if (days >= 11 && days <= 20){
       return cost = days * 80;
    }
    else{
        return cost = days * 50; 
    }
}
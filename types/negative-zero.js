let trendRate = -0;
trendRate === -0; //  true

trendRate.toString(); //  "0" OOPS!
trendRate === 0; //  True OOPS!
trendRate < 0; //  false
trendRate > 0; //  false

Object.is(trendRate, -0); //  true
Object.is(trendRate, 0); //  false
//  That is the better way to really check if -0 is actually -0

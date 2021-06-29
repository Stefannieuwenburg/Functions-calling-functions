/*
const scream = function (){
    console.log("Aaaaaaa");

};
scream();
document.write();

const makeNoise = function (){
    scream();

};

makeNoise();

const add = function (numberA,numberB){
return numberA + numberB

};

const eight = add (3, 5);
console.log(eight);

const DoCalculation = function (){
    const six = add(2,4);
    console.log(six);
};
DoCalculation();
*/

//opd hey kiddo
const isAdult = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const HeeThere = function(age) {
    if (isAdult(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

console.log(HeeThere(65)); // "Hello there"
console.log(HeeThere(10)); // "Hey kiddo"


//eerste vat oplossing
const calculateVAT = function(basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function(basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000, 21)); // 1210
console.log(calculatePriceIncludingVAT(2, 9)); // 2.18

//2e vat oplossing

const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21)); // [1000, 210]
console.log(calculateBasePriceAndVAT(2.18, 9)); // [2, 0.18]

//einde opdracht.
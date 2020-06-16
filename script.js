// Rest param
function max(a,b,... nums) {
    console.log(nums)
}

// max(1,5,7);


// Spread operator
const arr = [1, 2, 3];
const str ='haFSFAui pizFASFda lapouSFASfhaya';

function hui (str) {
    const asfa= [...str];
    console.log((asfa));
    const arr = str.toLowerCase()
    .split(' ')
    .map(el => el[0].toUpperCase() + el.slice(1));
    
    return arr;
}

console.log(hui(str));
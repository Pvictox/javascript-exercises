const sumAll = function(integer1, integer2) {
    // 1, 4 === 1+2+3+4
    let sum = 0;

    if (typeof(integer1) === typeof(integer2) && typeof(integer1) === 'number' && integer1 >-1 && integer2>-1){
        if (integer1 < integer2){
            for (let i =integer1; i<integer2+1; i++){
                sum+=i;
            }
        }else{
            for (let i =integer1; i>integer2-1; i--){
                sum+=i;
            }
        }
    }else{
        return "ERROR";
    }
     
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const fibonacci = function(number) {
    let t1 = 1;
    let t2 = 1;
    if (+number < 0){
        return "OOPS";
    }
    if (+number == 1 || +number == 2){
        return t1;
    }else{
        let result;
        for (let i=2; i<+number; i++){
            result = t1+t2;
            t2 = t1
            t1 = result
        }
        return result
    } 
};

// Do not edit below this line
module.exports = fibonacci;

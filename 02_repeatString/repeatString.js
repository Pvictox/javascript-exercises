const repeatString = function(frase, times) {
    let text = "";
    if (times < 0){
        return "ERROR";
    }
    for(let i =0; i<times; i++){
        text+=frase;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(frase) {
    let lenFrase = frase.length;
    let newFrase = "";
    for (let i =lenFrase-1; i>-1; i--){
        newFrase+= frase[i];
    }
    return newFrase;
};

// Do not edit below this line
module.exports = reverseString;

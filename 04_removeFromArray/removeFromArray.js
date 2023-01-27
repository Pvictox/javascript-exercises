const removeFromArray = function() {
    array = arguments[0] //Array que será removido valores;
    newArray = [];
    if (array.length === arguments.length-1){
        return [];
    }
    for (let i=1; i<arguments.length; i++){
        if (i == 1) newArray = array.filter(elemento => elemento!==arguments[i]);
        else newArray = newArray.filter(elemento => elemento!==arguments[i]);
    }
    return newArray;



};

// Do not edit below this line
module.exports = removeFromArray;

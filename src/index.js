/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var numberOfLoveTriangles = 0;
    var positionFirst = 0;
    var positionSecond = 0;
    var positionThird  = 0;
    var temporaryArray = [];
    var FlagOne = false;
    var FlagTwo = false;

    function uniqueArray(array) {
        var object = {};

        for (var i = 0; i < array.length; i++) {
            var str = array[i];
            object[str] = true;
        }

        return Object.keys(object);
    }

    for(var i = 0; i < preferences.length; i++) {
        for (var j = 0; j <= temporaryArray.length; j++) {
            if (temporaryArray[j] == preferences[i]) {
                FlagOne = true;
            } else if(j === temporaryArray.length && !FlagOne){
                positionFirst = preferences[i];
                positionSecond = preferences[positionFirst - 1];
                positionThird = preferences[positionSecond - 1];


                if (((preferences[positionSecond] - 1) !== i) && (preferences[positionThird - 1] === preferences[i]) &&
                    (preferences[positionSecond - 1] !== preferences[positionThird - 1])) {
                    numberOfLoveTriangles++;
                    FlagTwo = true;
                }
            }
        }

        if(FlagTwo) {
            temporaryArray.push(positionFirst);
            temporaryArray.push(positionSecond);
            temporaryArray.push(positionThird);
        }
        temporaryArray = uniqueArray(temporaryArray);
        FlagOne = false;
        FlagTwo = false;
    }

    return numberOfLoveTriangles;
};

//Example array of words
var words = ["dog", "case", "god", "esac", "seac", "jimbo", "ogd", "taco", "cota", "DOG"];

//count the total number of anagram sets in an array of strings. Capital and lowercase chars are considered identical
function countAnagramSets(arrayOfWords) {
    var anagramCount = {};
    var totalCount = 0;
    
    //sort each element in the array alphabetically
    for (var i in arrayOfWords) {
        //split each element up into chars, alpha sort the chars, join back into a string and lowercase the string
        arrayOfWords[i] = arrayOfWords[i].split("").sort().join("").toLowerCase();
    }
    //count all duplicate array values
    arrayOfWords.forEach(function(x) {
        anagramCount[x] = (anagramCount[x] || 0) + 1;
    });
    //if an anagram is found more than once in the list, add to total.  
    for (var j in anagramCount) {
        if (anagramCount[j] > 1) {
            totalCount = totalCount + 1;
        }
        console.log(j + ' = ' + anagramCount[j]);
    }
    console.log("Total sets of anagrams = " + totalCount);
}
countAnagramSets(words);

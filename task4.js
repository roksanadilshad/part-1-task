function longestWord(sentence){
    let words = sentence.split(" ");//sentence er word guli k arrat te convert kore.
    let longest = "";


    for(let word of words ){
        if(word.length > longest.length){
              longest = word; //kono word er length longest er kono word er boro hole longest = word hobe. word = longest dile kaj hbe na.
        }
    }
    return longest;
    
}
const result = longestWord(" I am learning Programming to become a programmer");
console.log(result);


function numbOfVowel(text, letter){
    let count = 0;
    for(const che of text.toLowerCase()){
        if(letter.includes(che)){
            count++;
        }
    }
    return count;
}
const text = "Write a function to count the number of vowels in a string.";
const letter = "aeiou";
console.log(numbOfVowel(text, letter));

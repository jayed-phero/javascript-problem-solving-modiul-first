function reverseString(text){
    let reversed = '';
    for(let i = text.length - 1; i >= 0; i-- ){
        const index = i;
        const element = text[index];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}

const myString = 'He is a good person';
const reversed = reverseString(myString);
console.log('reversed output', reversed)



function reverseWord(str){
    const words = str.split(' ');
    const result  = [];
    for(let i = words.length - 1; i>=0; i--){
        const element = words[i];
        result.push(element);
    }
    const revers = result.join(' ');
    return revers;
}

const myStrings = 'she is a good girl';
reverseWord(myStrings);
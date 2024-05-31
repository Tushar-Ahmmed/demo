// let myStr = "I fell in love javascript programming language"
// var vowel = ['a','e','i','o','u']

// function vowelConsonant(st){
//     let vow = 0, con = 0
//     let str = st.toLowerCase()
//    for (i=0; i<str.length; i++){
//     if(str[i] != " "){
//         if(vowel.includes(str[i]))
//             vow++;
//         else
//             con++
//         }
//    }
//    return {vow, con}
// }
// let result = vowelConsonant(myStr)
// document.write(`<h2>Vowel: ${result.vow} and <br> Consonant: ${result.con}<h2>`)


// let text = "TusharMOMMOMrwes"
// function LongestPalindrome(texts){
//     flag = 0;
//     for(i = 0; i<texts.length; i++){
//         for(j=texts.length; j>i+1; j--){
//             let condition1 = texts.slice(i,j)
//             let condition2 = Array.from(texts.slice(i,j)).reverse().join('')
//             if(condition1 === condition2){
//                 return condition1
//             }   
//         }
//     }
// }

// let palindrome = LongestPalindrome(text)
// document.write(`<h2>Full Text is : ${text}</h2>`)
// document.write(`<h2>Longest palindrome is : ${palindrome}</h2>`)









// let num = 17
// flag = 0
// for (i=2; i<= Math.sqrt(num); i++ ){
//     if(num%i == 0){
//         flag++
//         console.log(num ,"is not Prime");
//     }        
// }

// if (flag == 0){
//     console.log(num,"is Prime");
// }

function sumAllPrime(num){
    let sumprime = 0
   
    for (j=2; j<=num; j++){
        let prime = true
        for(k=2; k <= Math.sqrt(j); k++){
            if(j%k == 0)
                prime = false
        }
        if(prime)
            sumprime += j
    }
    return sumprime
}

console.log(sumAllPrime(10));
console.log(sumAllPrime(977));

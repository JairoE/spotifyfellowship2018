document.addEventListener("DOMContentLoaded", ()=>{

  /*
Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

*/
function sortByString(s,t){
  for(let i=0; i< t.length; i++){
    if(s.indexOf(t[i]) > 0 ){
      s = moveLetter(s,s.indexOf(t[i]))
    }
  }
  return s
}

function moveLetter(s,i){
  let first_part_of_string = s.slice(0,i)
  let rest_of_string = s.slice(i+1)
  let newString = s[i] + first_part_of_string + rest_of_string
  console.log(newString)
  return newString
}
sortByString("weather","therapyw")

/*
Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

For s = "4[ab]", the output should be decodeString(s) = "abababab"
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

// function decodeString(s){
//   if(s.match(/\[/g).length === 1){
//     s = multiplyString(s)
//     return s
//   }

//   decodeString(s.slice(s.indexOf("[")+1, s.lastIndexOf("]")))
// }

// function multiplyString(s){
//   let encoded_string = s.slice(s.indexOf("[")+1,s.indexOf("]"))
//   let k = parseInt(s.slice(0,s.indexOf("[")))

//   let multipliedString = ""
//   while (k > 0) {
//     multipliedString += encoded_string
//     k -= 1
//   }

//   return multipliedString
// }

function decodeString(s){
  let encoded_string = s.slice(s.indexOf("[")+1,s.lastIndexOf("]"))
  let k = parseInt(s.slice(0,s.indexOf("[")))

  let ms = ""
  while (k > 0) {
    ms += encoded_string
    k -= 1
  }
  let ms2= ""
  while(ms.indexOf("[") != -1){
    if(ms.indexOf("]") != ms.length-1){
      ms = ms.slice(0,ms.indexOf("[")-1) + decodeString(ms.slice(ms.indexOf("[")-1, ms.indexOf("]"))) + ms.slice(ms.indexOf("]")+1)

      console.log(ms)
    }else{
      ms = ms.slice(0,ms.indexOf("[")-1) + decodeString(ms.slice(ms.indexOf("[")-1, ms.indexOf("]")))

    }
  }

  return ms
}

decodeString("2[b3[a]]")
/*
Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.

Write a function that, given an amount of money and an array of coin denominations, computes the kber of ways to make the amount of money with coins of the available denominations.

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

*/


})

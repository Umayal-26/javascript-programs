// for(let a=0;a<=100;a++)
//    {
//     if(a%3==0 && a%5==0)
//         document.write("FizzBuzz")
//     else if(a%3==0)
//         document.write("Fizz")
//     else if(a%5==0)
//       document.write("Buzz")
//     else
//       document.write(a+" ")
//    }

//palindrome

// function palindrome(string)
// {
//     let i=string.length-1
//     for(let j=0;j<string.length/2;j++){
//         if(string[j]!=string[i]){
//             return false;
//         }
//         i--;
//     }
//     return true;
// }
// let str1="mom";
// let str2="kerala";
// document.write(palindrome(str1))

//largest number

// function array(a)
// {
//     let max=0;
//     for(let i=0;i<a.length;i++)
//     {
//     if(a[i]>max)
//       max=a[i]
//     }  
//     return max;
// }
// document.write(array([1,2,35,45]))

function countchar(str){
    let char={};
    for(let i=0;i<str.length;i++){
        let character=str[i]
        if(char[character]){
            char[character]++;
        }
        else
        char[character]=1
    }
    return char;
}
let str1="umayal"
console.log(countchar(str1))









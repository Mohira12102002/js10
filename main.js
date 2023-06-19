//1-misol

function engUzunString(array) {
    let maxLength = 0;
    let longestString = '';
  
    for (let i = 0; i < array.length; i++) {
      const currentString = array[i];
      if (currentString.length > maxLength) {
        maxLength = currentString.length;
        longestString = currentString;
      }
    }
  
    const reversedString = longestString.split('').reverse().join('');
    return {
      length: maxLength,
      string: reversedString
    };
  }
  
  const strings = ['Salom', 'Hello', 'Merhaba', 'Hola'];
  const result = engUzunString(strings);
  console.log('Eng uzun stringning uzunligi:', result.length);
  console.log('Eng uzun string (teskari):', result.string);
  
//2-misol

  function olibTashlash(string) {
    const charCounts = {};
    const removedChars = [];
  
    for (let i = 0; i < string.length; i++) {
      const currentChar = string[i];
      charCounts[currentChar] = charCounts[currentChar] + 1 || 1;
    }
  
    for (let i = 0; i < string.length; i++) {
      const currentChar = string[i];
      if (charCounts[currentChar] === 1) {
        removedChars.push(currentChar);
      }
    }
  
    return removedChars.join('');
  }
  
  const input = "abcdabc";
  const result1 = olibTashlash(input);
  console.log('O\'chirilgan takrorlanmagan harflar:', result1);
  
  //3-misol

  function almashtirishBelgisi(string) {
    const result2 = string.replace(/[0-9]/g, '$');
    return result2;
  }
  
  const input1 = "p3ython";
  const replacedString = almashtirishBelgisi(input1);
  console.log('Natija:', replacedString);


  //4-misol

  function raqamniBirxillikkaTekshirish(number) {
    const digits = number.toString().split(''); 
  
    for (let i = 1; i < digits.length; i++) {
      if (digits[i] !== digits[0]) {
        return false; 
      }
    }
  
    return true;
  }
  
  console.log(raqamniBirxillikkaTekshirish(1234));     // false
  console.log(raqamniBirxillikkaTekshirish(1111));     // true
  
  
  //5-misol

  function rearrangeArray(arr) {
    if (arr.length % 2 === 1) {
      return false; 
    }
  
    const midIndex = arr.length / 2;
    const firstHalf = arr.slice(0, midIndex);
    const secondHalf = arr.slice(midIndex);
  
    return [...secondHalf, ...firstHalf];
  }
  
  console.log(rearrangeArray([1, 2, 3, 4, 5, 6]));      // [4, 5, 6, 1, 2, 3]
  console.log(rearrangeArray([1, 2, 3, 4, 5, 6, 7]));   // false
  

  //6-misol

  function checkObjectValues(firstObject, secondObject) {
    for (let key in secondObject) {
      if (!(key in firstObject) || firstObject[key] !== secondObject[key]) {
        return false; 
      }
    }
  
    return true; 
} 
  const firstObject = { age: 25, hair: 'long', beard: true };
  const secondObject = { hair: 'long', beard: true };
  
  console.log(checkObjectValues(firstObject, secondObject));  // true
  

  //7-misol


  function validateNumber(input2) {
    if (isNaN(input2)) {
      return false; 
    }
  
    const number = Number(input2);
  
    if (Number.isInteger(number)) {
      return true; 
    } else {
      return false; 
    }
  }
  
  console.log(validateNumber(123));     // true
  console.log(validateNumber('456'));   // true
  console.log(validateNumber('abc'));   // false
  console.log(validateNumber('12.34')); // false
  
function bigWords(string, stringArray) {
    const result = [];
  
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i].length > string.length) {
        result.push(stringArray[i]);
      }
    }
  
    return result;
  }
  
 function printArray(stringArray) {
    const ul = document.getElementById('wordList');
  
    for (let i = 0; i < stringArray.length; i++) {
      const li = document.createElement('li');
      li.textContent = stringArray[i];
      ul.appendChild(li);
    }
  }
  
  const myArray = ['Sopes', 'Tacos', 'Quesadillas', 'Gorditas', 'Tostadas', 'Enchiladas'];
  const inputString = 'Comida';
  
  const resultArray = bigWords(inputString, myArray);
  printArray(resultArray);
const numberInput = document.querySelector('#number'); // get the number input field
const ulList = document.querySelector('ul');
numberInput.value = ''

numberInput.addEventListener('change', () => { // Check for a change in the number and do...
  ulList.innerHTML = ''; // empty the list
  const numberValue = numberInput.value; // Get the number value that was inputted
for (let i = 1; i <= numberValue; i++) { // run a loop as long as the Int is lower than the inputted number
  if (i % 3 === 0 && i % 5 === 0) { // if the value of i is divisible by 3 && 5
    createList('FizzBuzz') // create a new li-tag with the content FizzBuzz
  } 
  else if (i % 5 === 0) { // if the value of i is divisible by 5
    createList('Buzz') // create a new li-tag with the content Buzz
  }
  else if (i % 3 === 0) { // if the value of i is divisible by 3
    createList('Fizz') // create a new li-tag with the content Fizz
  }
  else { // if the value of i is neither divisible by 3 and / or (XOR) 5
    createList(i) // create a new li-tag with the content i (number)
  }
}
});

function createList(input) {
      const createList = document.createElement('li'); // create a new li element
      createList.textContent = input; // set the content of the li-tag
      if (createList.textContent === 'Fizz') {
        createList.style.backgroundColor = '#845ec2'
      } else if (createList.textContent === 'Buzz') {
        createList.style.backgroundColor = '#0081cf'
      } else if (createList.textContent === 'FizzBuzz') {
        createList.style.backgroundColor = '#008e9b'
      }
      ulList.appendChild(createList); // append the li-tag with content to the ul-tag
}
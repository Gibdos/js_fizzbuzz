const numberInput = document.querySelector('#number');
const para1 = document.querySelector('p');

numberInput.addEventListener('change', () => {
  const numberValue = numberInput.value;
for (let i = 1; i <= numberValue; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    para1.innerHTML += "FizzBuzz" + "<br />";
  } 
  else if (i % 5 === 0) {
    para1.innerHTML += "Buzz" + "<br />";
  }
  else if (i % 3 === 0) {
    para1.innerHTML += "Fizz" + "<br />";
  }
  else {
    para1.innerHTML += i + "<br />";
  }
}
});

function askNameAndShow() {
    let name = prompt("Введите ваше имя:");
    if (name) {
      alert(`Привет, ${name}!`);
    }
  }
  
  askNameAndShow();

  function askMovieName(){ 
    let name = prompt("Какой ваш любимый фильм?"); 
    if (name.toLowerCase() === "аватар"){
        console.log('Аватар', name); 
        alert("Good choice!"); 
    } else { 
        alert("try again!"); 
    } 
} 
askMovieName();

const array = ['a', 'b', 'c'];
arr[0] = 'слово';
arr[1] = 'Это предложение';
arr[2] = 'a';
console.log(array);
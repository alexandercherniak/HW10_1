function render (arg) {
  let arr = [];
  for (let key in this){
    if (this[key] == arguments.callee) {
      continue;
    }; 
    if (arg == true && !this.hasOwnProperty(key)) {
      continue;
    };
      arr.push(' ' + key + ': ' + this[key]);
  } document.write(arr);
}

let obj = {
  x: 10,
  y: 20,
  name: 'Alex',
  renderObject: render,
};

let parentObj = {
  z: 30,
  surname: 'Ivanov',
  renderObject: render,
};

obj.__proto__ = parentObj;

obj.renderObject();
document.write('</br>------------------------------------</br>');
obj.renderObject(true);
























// function render () {
//   for (let key in obj){
//     if (!obj.hasOwnProperty(key)) {continue};
//   }
//     let arr = Object.entries(obj);
//     document.write(arr.join(','+' '));
//   }

// let parentObj = {
//   z: 30,
//   surname: 'Ivanov',
//   renderObject: render,
// }

// let obj = {
//   x: 10,
//   y: 20,
//   name: 'Alex',
// };

// obj.__proto__ = parentObj;
// console.log(parentObj);

// obj.renderObject();
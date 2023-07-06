import myName from "./myName";
function component() {
    const element = document.createElement('div');

// use your function!
element.textContent = myName('Cody');

// use your functions

element.textContent = myName('Cody')
return element;

}

document.body.appendChild(component());


// Name export
const functionOne  = () => 'ONE';
const fucntionTwo = () => 'TWO';

export {
    functionOne,
    fucntionTwo
};
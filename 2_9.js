const name = 'Luffy';
const lastname = 'Monkey D.';

function welcome(name) {
    return `Welcome, ${name}!`
}

const fullname = `${lastname} ${name}`
console.log(`${welcome(fullname)}`);

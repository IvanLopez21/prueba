function newfunction(name, age, country) {
  var name = name || 'oscar';
  var name = name || 19;
  var name = name || 'Mexico';
  console.log(name, age, country)
}

//es6
function newfunction2(name = 'oscar', age = 19, country = 'MX'){
  console.log(name, age, country)
}

newfunction2();

///////
let hello = 'Hello'
let world = 'World'
let epicPrhase = `${hello} ${world}`
console.log(epicPrhase)

//multiline
let lorem = 'quiero escribir una frase epica \n'+ 'perrona pinche mamalona me la pelan todos'

let lorem2 = `otra frase epica que necesitamos perras
              ahora otra frase epica perras
`

console.log(lorem)
console.log(lorem2)

let person = {
  "name": "Ivan",
  "age": 29,
  "country": "MX"
}

let {name, age, country} = person;

console.log({person})
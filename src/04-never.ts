const withoutEnd = ()=>{
  while(true){
    console.log('nunca pares de aprender!')
  }
}

const fail = (message: string)=>{
  throw new Error(message)
}

const example =(input: unknown)=>{
  if(typeof input === 'string'){
    return 'Es un string'
  } else if (Array.isArray(input)){
    return 'Es un array'
  } else {
    return fail('No encontrado')
  }
}

console.log(example('hola'))
console.log(example([1,23,4]))
console.log(example(23))
console.log(example('Este es un fail. Espero que no me rompa el CPU'))

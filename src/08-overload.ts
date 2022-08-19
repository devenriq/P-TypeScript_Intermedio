// Nico => [N,I,c,o] => string => string[]
// [N,I,c,o] => Nico => string => string[]

function parseStr(input:string | string[]):string | string[] {
  if(Array.isArray(input)){
    return input.join('') // retornando un string
  } else {
    return input.split('') // retornando un string[]
  }
}

const rtaArray = parseStr('Nico')
console.log(rtaArray)

const rtaString = parseStr(["N", "i", "c", "o"])
console.log(rtaString)

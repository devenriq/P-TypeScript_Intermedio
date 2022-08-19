let anyVar: any;
anyVar= true;
anyVar= undefined;
anyVar= null;
anyVar= '';
anyVar= [];

let isNew: boolean = anyVar

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = '';
unknownVar = [];
unknownVar = {};

if(typeof unknownVar === 'string'){
  unknownVar.toUpperCase()
}

const parse = (str: string): unknown =>{
  return JSON.parse(str)
}

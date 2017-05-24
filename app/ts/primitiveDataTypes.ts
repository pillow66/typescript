/**
 * Created by pathsourcecom on 17/5/24.
 */

/**
 * javascript原始数据类型:
 * Boolean, Number, String, null, undefined, Symbol(ES6新类型)
 *
 * TypeScript中:
 * 使用boolean定义布尔值类型
 * 使用number定义数值类型
 * 使用string定义字符串类型
 * 使用void(空值)表示没有任何返回值的函数
 * 使用null定义该原始数据类型(null类型的变量只能被赋值为null)
 * 使用undefined定义该原始数据类型(undefined类型的变量只能被赋值为undefined)
 * void与null, undefined的区别:null, undefined是所有类型的子类型,null, undefined类型的变量可以赋值给任何类型的变量
 */

let isDone:boolean = false;
console.log(isDone);

//使用构造函数Boolean创造的是一个Boolean对象
//error TS2322: Type 'Boolean' is not assignable to type 'boolean'.'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
let booleanObject:boolean = new Boolean(1);
console.log(booleanObject);
let booleanObject2:boolean = Boolean(0);
console.log(booleanObject2);

let decLiteral:number = 6;
console.log(decLiteral);

let name:string = '66';
console.log(name);
let sentence:string = `Hello ${name}`;
console.log(sentence);

function getName():void {
    console.log("void");
};
getName();
let v:void;
console.log(v); //undefined

let n:null = null;
console.log(n);
let u:undefined = undefined;
console.log(u);

let num:number = null;
let u2:undefined;
let num2:number = u2;
let v2:void;
//let num3:number = v2;


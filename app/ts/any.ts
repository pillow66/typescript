/**
 * Created by pathsourcecom on 17/5/24.
 */

/**
 * 任意值:
 * any用来表示允许赋值为任意类型
 * typescript中定义一个普通类型的变量,在后续赋值中改变数据类型不被允许
 * any类型定义的变量,允许后续赋值为任意类型,不被类型检查
 * 变量如果在声明时未指定类型且未赋值,会被识别为any类型
 */

let age:string = 'six';
//error TS2322: Type '7' is not assignable to type 'string'.
//age = 7;

let age2:any = 'six';
age2 = 7;

let anyThing:any = 'hello';
console.log(anyThing.setName('66'));
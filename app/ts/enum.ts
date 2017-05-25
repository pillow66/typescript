/**
 * Created by pathsourcecom on 17/5/25.
 */

/**
 * 枚举:
 * 使用enum定义,默认值从0开始,可自定义
 *
 * 枚举项:
 * 常数项
 * 计算所得项,后不得跟未手动赋值的枚举项
 *
 * 常数枚举:
 * 使用const enum定义,不得包含计算所得项
 *
 * 外部枚举:
 * 使用declare enum定义,declare只用于编译检查,编译结果中会被删除,可同时使用const declare
 * 多用于申明文件中
 *
 */

enum Days {Sun, Mon}
console.log(Days["Sun"] === 0); //true
console.log(Days[1] === "Mon"); //true

//手动设置枚举值
enum Days2{Sun = 2, Mon = 1, Tue}
console.log(Days2["Sun"] === 2); //true
//未手动设置的枚举值,会接上一个枚举项递增
console.log(Days2["Tue"] === 2); //true
//被Tue覆盖
console.log(Days2[2] === "Sun"); //false
console.log(Days2[2] === "Tue"); //true

//枚举值可以不是数字,需要使用类型断言让typescript无视类型检查
enum Days3 {Sun, Mon = <any>"s"}
console.log(Days3["Mon"] === "s"); //true

//枚举值可以是小数,默认步长仍是1
enum Days4 {Sun = 1.5, Mon}
console.log(Days4["Sun"] === 1.5); //true
console.log(Days4["Mon"] === 2.5); //true

const enum Directions{up, down, left, right}

declare enum Directions2{up}
//declare编译后会被移除,实际运行中会爆Directions2 is not defined
//主要用于声明
//let dirs = [Directions2.up];

const declare
enum Directions3{up}
let dirs2 = [Directions3.up];
console.log(dirs2[0] === 0); //true
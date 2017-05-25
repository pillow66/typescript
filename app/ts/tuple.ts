/**
 * Created by pathsourcecom on 17/5/25.
 */


/**
 * 元组
 * typescript数组为相同类型对象(除非显示指定为any类型),元组可为不同类型对象
 * 元组起源于函数编程语言
 *
 * 越界元素
 * 当赋值给越界元素,类型会被限制为每个类型的联合类型
 *
 * 有啥卵用?
 */

let tuple1:[string, number] = ['lulu', 66];
console.log(tuple1[0]);
console.log(tuple1[1]);

let tuple2:[string, number];
tuple2[0] = "lu";

let tuple3:[string, number];
tuple3 = ["lu", 6];

let tuple4:[string, number];
//error TS2322: Type '[string]' is not assignable to type '[string, number]'.
//Property '1' is missing in type '[string]'.
//tuple4 = ["lu"];

let tuple5:[string, number] = ['lu', 6, 6, 'lu'];
//let tuple6:[string, number] = ['lu', 6, false];
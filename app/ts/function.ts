/**
 * Created by lulu on 16/12/30.
 */
"use strict"

/**
 * 函数声明和函数表达式
 * 区别:变量提升
 */
A();
//B();

//命名函数
function A() {
};

//匿名函数
var B = function () {
};

/**
 * 函数类型
 * 通过可选类型声明注释显示声明一个元素类型
 */
//指定参数name类型为string, 返回值类型为number
function C(name:string):number {
    return 6;
};

//声明接受一个name为string类型参数,调用后返回类型为string的函数变量
//var D:(name:string) => number;
var D:(name:string) => string;
//将一个符合变量类型的函数赋值给变量
D = function ():string {
    return "66";
};

//或者简写为一行
var D:(name:string) => string = function (name:string):string {
    return "66";
};

//以上只是为了方便对类型的理解,所添加冗余类型声明并不必须

/**
 * 函数可选参数
 * 通过在参数后追加一个字符?
 */
function E(foo:number, bar?:number, foobar?:number):number {
    var result = foo;

    if (bar) {
        result += bar;
    }

    if (foobar) {
        result += foobar;
    }

    return result;
};

//console.log(E()); //参数不匹配
console.log(E(1)); //1
console.log(E(1, 2)); //3
console.log(E(1, null, 3)); //4
console.log(E(1, 2, 3)); //6

/**
 * 默认参数函数
 * 某些场景,应为一个可选参数设置默认值
 */
function F(foo:number, bar?:number = 0, foobar?:number = 1):number {
    return foo + bar + foobar;
};

console.log(F(1)); //2

/**
 * 剩余参数的函数
 * ...语法允许传递任意数量的参数
 */
function G(...foo:number[]):number {
    var result = 0;
    var len = foo.length;

    for (; len--;) {
        result += foo[len];
    }

    return result;
};

console.log(G()); // 0
console.log(G(1)); //1
console.log(G(1, 2)); //3
console.log(G(1, 2, 3)); //6

/**
 * 函数重载
 * typescript通过声明多个函数签名,再将一个签名作为实现,
 */
//重载签名,必须有相同返回
function H(name:string):string;
function H(age:number):string;
//function H(age:number, sex:boolean):string;
//实现签名,兼容所有重载签名,在最后,接受一个any类型或联合类型的参数作为参数
function H(value:(string | number)):string {
    switch (typeof value) {
        case "string":
            //模板字符串
            return `name:${value}`;
        case "number":
            return `age:${value}`;
        default:
            return "";
    }
}

//console.log(H());
console.log(H("lulu"));
console.log(H(6));

/**
 * 特定重载签名(接口)
 * 用一个特定的签名来创建具有同样名称,参数数量,不同返回类型的多个函数
 */
interface I {
    //特定重载签名
    createI(type:"div"):HTMLDivElement;
    createI(type:"span"):HTMLSpanElement;
    //非特定重载签名,至少一个,包含以上特定重载签名的类型
    createI(value:string):HTMLElement;
}

/**
 * 函数作用域
 * typescript(和javascript)中,变量作用域在一个函数中
 * 变量提升:javascript在运行时,所有变量声明会在函数执行前移动到函数顶端
 */

/**
 * IIFE(立即调用函数表达式)
 */
var g = 6;
(function (global) {
    var g = 66;
    console.log(g); //66
    console.log(global.g); //6
})(this);

class J {
    //私有属性通过IIFE实现
    private _name:string;

    constructor() {
        this._name = "lulu";
    }

    getName():string {
        return this._name;
    }

    setName(val:string):void {
        this._name = val;
    }
}

var j = new J();
console.log(j.getName()); //lulu
j.setName("66");
console.log(j.getName()); //66
//console.log(_name);

/**
 * 泛型
 * 在函数名后加<T>,表示为一个泛型函数
 */
function K<T>(url:string, callBack:(list:T[]) => void):void {
    var data = [];
    //console.log(T);

    switch (url) {
        case "url/number":
            data = [1, 2, 3];
            break;
        case "url/string":
            data = ["66", "77"];
            break;
        default :
            break;
    }

    callBack(data);
};

K<number>("url/number", function (list:number[]) {
    console.log(list);
});

K<string>("url/string", function (list:string[]) {
    console.log(list);
});

/**
 * tag函数和标签模板
 * tag函数扩展和修改模板字符串的行为
 * tag函数,必须返回一个字符串,第一个参数是模板字符串中所有静态字面量数组,剩余参数是模板字符串中所有变量
 * tag(literals:string[], ...values:any[]):string
 */
function L(literals, ...placeholders) {
    var result = ""
    var len = placeholders.length;
    for (; len--;) {
        result += placeholders[len] + " ";
    }

    len = literals.length;
    for (; len--;) {
        result += literals[len] + " ";
    }

    return result;
};

var l = L `hello ${g} ${1 + 2} world`;
console.log(l); //3 6  world  hello

/**
 * 回调和高阶函数
 * typescript中,函数可以作为参数传递给其他函数,也可以被其他函数返回
 * 回调函数:被传递给其他函数的函数
 * 高阶函数:返回另一个函数的函数
 */
//回调函数
var m = function () {
    console.log("back");
};
//高阶函数,参数为一个函数
function M(callback:() => void) {
    console.log("call");
    callback();
};
M(m); // 先call再back

/**
 * 箭头函数
 * function表达式的缩写,且会在其作用域内绑定this,不用担心this指向
 */
var _name = "77";
class Person {
    constructor(name:string) {
        this._name = name;
    }

    delay1() {
        //不使用箭头函数,this指向setTimeout回调函数所在全局对象
        setTimeout(function () {
            console.log("delay1:", this._name);
        }, 100);
    }

    delay2() {
        //使用箭头函数,this指向Person实例对象
        setTimeout(()=> {
            console.log("delay2:", this._name);
        }, 100);
    }
}

var p = new Person("66");
p.delay1(); //77
p.delay2(); //66

/**
 * 回调地狱和promise
 * 对异步操作结果的承若
 * pending:初始状态
 * fulfilled:异步结果成功状态,执行then方法
 * rejected:异步结果失败状态,执行catch方法
 * typescript并没有引入promise模式,此处引入第三方q.js,或使用ES6
 */
//CommonJS模式引入q
var $q = require('q');
//异步(Async)方法,返回一个Promise对象
function N1Async() {
    return $q.Promise(function (resolve, reject) {
        setTimeout(()=> {
            try {
                console.log("N1Async");
                resolve({result: 1});
            }
            catch (e) {
                reject();
            }
        }, 200);
    });
};

function N2Aysnc() {
    return $q.Promise(function (resolve, reject) {
        setTimeout(()=> {
            try {
                console.log("N2Async");
                resolve({result: 2});
            }
            catch (e) {
                reject();
            }
        }, 300);
    });
};

//串行执行3个异步方法
N1Async().then(N2Aysnc).then(N1Async); //先N1Async再N2Async最后N1Async
//并行执行2个异步方法
$q.all([N1Async(), N2Aysnc()]).then((result)=> {
    console.log(result); // [{result:1}, {result:2}]
});

/**
 * 生成器
 * 一种新型的函数,可以在执行过程中暂停多次,并随后恢复其运行
 * 生成器为一个值序列,生成器对象为一个迭代器,可以调用next()产生结果
 * 定义为function *XXXX(){}
 * 意义:终止函数执行,在需要时恢复执行
 */

 /*function* O(){
    yield 1;
    yield 2;
    return 3;
 }

 var o = new O();
 console.log(o.next()); //{value:1, done:false} 执行到yield 1;返回1,并终止,直到下一次next调用;
 console.log(o.next()); //{value:2, done:false} 执行到yield 2;返回2,并终止,直到下一次next调用
 console.log(o.next()); //{value:3, done:true} 调用next,最终才完成该函数的执行
 console.log(o.next()); //{done:true}*/

/**
 * 异步函数async和await
 * 在异步操作中被调用,使用async,await关键字指定是不阻塞程序执行还是阻塞等待异步结果
 * 比promise模式可读性更高
 */
var p = N1Async();
//异步方法
async function P():number {
    //阻塞等待异步结果,利用yield实现
    var i = await p;
    console.log("await", i); //后输出:await Object {result:1}
    return i.result;
};

console.log("async", P()); //先输出:async Promise

/**
 * Created by pathsourcecom on 17/4/4.
 */
"use strict"

/**
 * Typescript只存在于程序设计阶段,最终会被编译为Javascript,在node.js或浏览器中运行
 * Typescript运行时就是Javascript运行时
 *
 * Javascript运行时环境有一个基于事件循环的并发模型
 *
 * 运行时概念:
 * 1.frame:一个连续工作单元,Javascript函数被调用时,运行时环境会在stack中创建一个frame,函数返回时,frame出栈
 * 2.stack:包含一个信息在执行时的所有frame,事件循环会从上至下处理stack中的frame
 * 3.queue:包含一个待执行信息的列表,每一个信息都与一个函数相互关联,当stack为空,queue中的一条信息就会被取出并处理(调用该信息关联函数,作为frame添加到stack顶部)
 * 4.heap:一个内存存储空间,不关注存储内容的保存顺序,保存了所有正在被使用的变量和对象以及不会再使用到还未被垃圾回收的frame
 * 5.事件循环:运行时环境执行在一个单线程中,事件循环内信息是线性执行(web work多线程,他们拥有各自的stack,queue,heap)
 * 优点:非阻塞IO,执行顺序容易预测和追踪
 * 缺点:当一个信息需要大量时间处理,应用无响应,应该保持每个信息处理简短,分多个小函数
 *
 * this操作符
 * Javascript的this值由所属函数被调用的方式决定
 * 全局上下文中的this始终指向全局对象(浏览器中window对象即全局对象)
 * 函数上下文中的this指向由函数调用方式决定
 *
 * call, apply, bind方法目的都是用来设置函数内部中this操作符值
 */

function f1(){
    return this;
};
f1() === window; //true

function f2(){
    "use strict";

    return this;
};
console.log(f2()); //undefine;
console.log(this); //window

var p = {
    age: 6,
    getAge: function () {
        return this.age;
    }
};
//函数以实例方式调用,this指向该实例
console.log(p.getAge()); //6

function Person(){
};
Person.prototype.age = 6;
Person.prototype.getAge = function () {
    return this.age;
};
var p2 = new P();
console.log(p2.age); //6
console.log(p2.getAge); //6
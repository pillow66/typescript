/**
 * Created by pathsourcecom on 17/4/2.
 */
"use strict"

/**
 * SOLID原则
 * SRP:单一职责,函数,类,模块必须专注于单一的任务
 * OCP:开/闭原则,设计时必须考虑代码具有可扩展性,但必须最少的修改已有代码
 * LSP:里氏替换原则,只要继承的是同一接口,程序里任意一个类都可以被其他类替换,而不需要额外工作程序
 * ISP:接口隔离原则,应该将那些非常大的接口(大而全)拆分成一些更小的接口
 * DIP:依赖反转原则,一个方法应遵从依赖于抽象(接口)而不是一个实例
 */

class Person {
    public name:string;
    public email:Email;

    constructor(name:string, email:Email) {
        this.name = name;
        this.email = email;
    }
}

class Email {
    private email:string;

    constructor(email:string) {
        if (this.validateEmail(email)) {
            this.email = email;
        }
    }

    private  validateEmail(email:string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    get():string {
        return this.email;
    }
}

var email = new Email("66@66.com");
console.log(email.get());
var me = new Person("66", email);
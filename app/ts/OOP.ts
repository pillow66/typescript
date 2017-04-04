/**
 * Created by pathsourcecom on 17/4/2.
 */
"use strict"
document.querySelector("body>div").innerHTML = "( >﹏<。)";

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

    getPerson():string {
        return this.name + " " + this.email.getEmail();
    }
}

//单一职责
class Email {
    private _email:string;

    constructor(email:string) {
        if (this.validateEmail(email)) {
            this._email = email;
        }
    }

    private validateEmail(email:string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    getEmail():string {
        return this._email;
    }
}

var email = new Email("66@66.com");
//email._email;
console.log(email.getEmail());
var me = new Person("66", email);
console.log(me.name + " " + me.email + " " + me.getPerson());

/**
 * 接口
 * interface常用来定义一个不包含数据和逻辑代码但用函数签名定义了行为的抽象类型
 * typescript中接口的不同点:
 * 1.接口可以扩展其他接口或者类
 * 2.接口可以定义数据和行为而不只是行为(WTF)
 */

/**
 * 关联:有联系,有独立生命周期,但没有从属关系的关系
 * 聚合:有从属关系,有独立生命周期,且子对象不能从属于其他对象的关系
 * 组合:没有独立生命周期,父对象被删除后子对象也被删除的关系
 */

/**
 * 继承
 * 可对已有类扩展
 */
class Teacher extends Person {
    teach() {
        return "welcome";
    }
}

var t = new Teacher("lulu", new Email("lulu@lulu.com"));
console.log(t.name + " " + t.email + " " + t.getPerson() + " " + t.teach());
//me.teach(); //父类Person并没有teach方法

/** super关键字可引用父类方法属性,实现子类方法重写 **/
class Teacher2 extends Person {
    private _subject:string;

    constructor(name:string, email:Email, subject:string) {
        super(name, email);
        this._subject = subject;
    }

    getPerson():string {
        return "Teacher2:" + super.getPerson() + " " + this._subject;
    }
}

var t2 = new Teacher2("LULU", new Email("LULU@LULU.COM"), "SUBJECT");
console.log(t2.name + " " + t2.email + " " + t2.getPerson());

/** ( >﹏<。)不推荐过多层级继承,建议保证DIT在0-4间 **/

/**
 * 混合
 * 多重继承的替代方案
 * ( >﹏<。)typescript不支持多重继承(just like C#),这个特性会潜在增加复杂性,导致钻石问题
 */
class Eat {
    eat():string {
        return "eat";
    }
}

class Drink {
    drink():string {
        return "drink";
    }
}

//EatDrink类会实现Eat, Drink类中声明的功能,定义了
class EatDrink implements Eat, Drink {
    eat:() => string;
    drink:() => string;
}

//提供混合的关键方法:迭代所有父类属性(存储到baseCtors),将实现复制到子类(derivedCtor)
//此为范式
function applyMixins(derivedCtor:any, baseCtors:any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            //排除构造函数
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
};

applyMixins(EatDrink, [Eat, Drink]);

var ed = new EatDrink();
console.log(ed.eat()); // eat
console.log(ed.drink()); // drink

/**
 * ( >﹏<。)混合限制:
 * 1.只能继承一级的方法和属性(getOwnPropertyNames)
 * 2.如果继承多个父类有同名方法,会被最后一个父类的方法覆盖
 * 但以上都不算事儿,如果真满足不了需求,得考虑设计是不是有问题( >﹏<。)
 */

/**
 * 范型类
 * 避免代码重复的利器(同范型函数)
 */
class Sister {
    public name:string;
}

class SisterList {
    getList(list:Sister[]) {
        return list;
    }
}

var sisterlist = new SisterList();
console.log(sisterlist.getList([new Sister(), new Sister()]).length);

class Brother {
    public name:string;
    public work:string;
}

class BrotherList {
    getList(list:Brother[]) {
        return list;
    }
}

var brotherlist = new BrotherList();
console.log(brotherlist.getList([new Brother()]).length);

/** ( >﹏<。)没有使用范型类SisterList,BrotherList类存在大量重复代码 **/

class AllList<T> {
    getList(list:T[]) {
        return list;
    }
}

var alllist = new AllList<Sister>();
console.log(alllist.getList([new Sister()]).length);
alllist = new AllList<Brother>();
console.log(alllist.getList([new Brother(), new Brother()]).length);

/** ( >﹏<。)使用范型类AllList一个搞定 **/

/**
 * 范型约束
 * 约束允许作为T的类型
 */
//定义一个接口
interface IValidatableInterface {
    isValid():boolean;
}

class SisterPluss implements IValidatableInterface {
    public name:string;

    public isValid():boolean {
        return true;
    }
}

class BrotherPluss implements IValidatableInterface {
    public name:string;
    public work:string;

    public isValid():boolean {
        return true;
    }
}

class AllListPluss<T extends IValidatableInterface> {
    getList(list:T[]) {
        var result = [];
        var len = list.length;

        for (; len--;) {
            var item = list[len];
            if (item.isValid()) {
                result.push(item);
            }
            else {
                break;
            }
        }

        return result;
    }
}

alllist = new AllListPluss<SisterPluss>();
console.log("PLUSS:" + alllist.getList([new SisterPluss()]).length);
alllist = new AllList<BrotherPluss>();
console.log("PLUSS:" + alllist.getList([new BrotherPluss(), new BrotherPluss()]).length);
//alllist = new AllListPluss<Sister>();
//console.log("PLUSS:" + alllist.getList([new Sister()]).length); //ERROR: isValid is not a function


/**
 * 范型约束中使用多重类型
 * 不能再定义泛型约束是指定多个类型,应该将多类型转变为一个超接口解决
 */
interface IFlyInterface {
    fly();
}

interface ISwimInterface {
    swim();
}

interface IAllSportsInterface extends IFlyInterface, ISwimInterface {
}

class Sports<T extends IAllSportsInterface> {
    justDoIt() {
        //return new T(); // 找不到标识符T
        var type:{new():T;}; // 正确创建T对象的方法
        return new type();
    }
}

/**
 * 命名空间(内部模块)
 * 主要用于组织代码
 * 声明一个命名空间,所有实体部分默认都是私有,可以用export关键字导出公共部分
 */
/// <reference path="./models/Model1.ts" />
/// <reference path="./models/Model2.ts" />
var model1 = new lulu.Model1();
console.log(model1.name);
var model2_1 = new lulu.app.Model2_1();
console.log(model2_1.name);
var model2_2 = new lulu.app.Model2_2();
console.log(model2_2.name);

//import语句可提供模块别名
import e2e = lulu.app.test.e2e;
var test = new e2e.test();
console.log(test.name);

/**
 * 模块(外部模块)
 * 模块与命名空间的区别,命名空间需要用<script></script>引入,模块会由模块加载器自动引入
 * typescript 1.5以后支持ES6模块加载语法
 */
import {OutModel1} from "./outModels/OutModel1";
var outModel1 = new OutModel1();
console.log(outModel1.name);

import {OM2} from "./outModels/OutModel2";
var om2 = new OM2();
console.log(om2.name);

//导入多个模块到实体
import {OutModel3_1, OutModel3_2} from "./outModels/OutModel3";
var outModel3_1 = new OutModel3_1();
console.log(outModel3_1.name);
var outModel3_2 = new OutModel3_2();
console.log(outModel3_2.name);
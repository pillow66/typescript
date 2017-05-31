/**
 * Created by pathsourcecom on 17/5/25.
 */

/**
 * 类
 *
 *
 *
 */

/**
 * ES6类用法
 * 使用class定义
 * 使用constructor定义构造函数
 * 通过new生成实例,自动调用构造函数
 * 使用extends实现继承,子类使用super调用父类构造函数和方法
 * 使用getter, setter取值设值
 * 使用static定义静态方法,无需实例化,直接通过类访问
 */
class Animal {
    //修饰符是typescript用法(逃~
    private _age:number;
    public name:string;

    constructor(name) {
        this.name = name;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    say() {
        return `hello`;
    }

    static isAnimal() {
        return true;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    say() {
        return super.say() + ' cat';
    }
}

let cat = new Cat("66");
cat.name = "lulu";
//cat._age;
console.log(cat.name);
cat.age = 666;
console.log(cat.age);
console.log(cat.say());

//cat.isAnimal();
console.log(Cat.isAnimal());

/**
 * typescript中类的用法
 * 可使用访问修饰符public, private, protected(ヾ(｡｀Д´｡)卧槽~)
 * public修饰属性或方法是共有的,默认所有属性和方法都是public
 * private修饰属性或方法是私有的(但typescript编译后的代码,并不能限制private属性在外部的可访问性)
 * protected修饰的属性或方法是受保护的,类似private,但子类允许被访问
 *
 * 抽象类
 * abstract用于定义抽象类和抽象方法(ヾ(｡｀Д´｡)卧槽~)
 * 抽象类不允许实例化,抽象方法必须被子类实现
 *
 * 以上C#既视感(ヾ(｡｀Д´｡)卧槽~)
 */
abstract class Bird{
    public name:string;
    public abstract say();
}

class Sword extends Bird{
    //error TS2515: Non-abstract class 'Sword' does not implement inherited abstract member 'say' from class 'Bird'.
    //必须要实现抽象方法
    public say(){
        console.log("sword");
    }
}

let s:Sword = new Sword();
let bird:Bird = new Sword();

//error TS2511: Cannot create an instance of the abstract class 'Bird'.
//let b = new Bird();

/**
 * 类与接口
 * interface除了描述对象Shape外,还可对类进行抽象
 *
 * 类实现接口
 * 一个类只能继承另一个类,不同类之间的共有特性需要
 */

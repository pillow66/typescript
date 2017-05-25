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
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    say() {
        return `hello`;
    }

    static isAnimal() {
        return true;
    }
}

class Cat extends Animal{
    constructor(name){
        super(name);
    }

    say(){
        return super.say() + ' cat';
    }
}


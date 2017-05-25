/**
 * Created by pathsourcecom on 17/5/25.
 */

/**
 * 类型断言:
 * 用来绕过编译器类型推断,手动指定一个值的类型
 * <类型>值
 * 值 as 类型
 *
 * 类型断言不是类型转换,断言成一个联合类型中不存在的类型是不允许的
 */

function getLength(something:string | number):number {
    //联合类型变量再不确定到底是哪一个类型时,只能访问联合类型中所有类型的共有属性或方法
    //类型断言可以可以在还不确定类型的时候访问一个类型的属性方法
    if ((<string>something).length) {
        return (<string>something).length;
    }
    else {
        return something.toString().length;
    }
};

console.log(getLength(6));
console.log(getLength("six"));
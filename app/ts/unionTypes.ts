/**
 * Created by pathsourcecom on 17/5/24.
 */

/**
 * 联合类型:
 * 取值可以为多种类型中的一种
 *
 * 访问联合类型的属性或方法:
 * typescript不确定一个联合类型的变量到底是哪个类型,只能访问此联合类型的共有属性或方法
 *
 * 联合类型的变量在赋值时,会依据类型推论推断出一个类型
 */

let favorite:string|number;
favorite = "six";
console.log(favorite.length);
favorite = 6;
//console.log(favorite.length);
//favorite = false;

function getAttr(something:string| number):string {
    //error TS2339: Property 'length' does not exist on type 'string | number'.
    //return something.length;

    return something.toString();
}
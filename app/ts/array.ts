/**
 * Created by pathsourcecom on 17/5/24.
 */

/**
 * typescript中数组:类型+[]
 * 数组值不能出现其他类型
 *
 * 数组泛型:Array<type>表示数组
 *
 * 用接口表示数组
 *
 * 用any表示数组中允许出现任意类型
 *
 * 类数组(Array-like Object):
 * 不是数组类型,比如arguments
 * 类数组有自己的接口定义,如IArguments, NodeList, HTMLCollection等
 */

let arr1:number[] = [1, 2, 3];
//error TS2322: Type '(string | number)[]' is not assignable to type 'number[]'.
//Type 'string | number' is not assignable to type 'number'.
//Type 'string' is not assignable to type 'number'.
//let arr2: number[] = [1,2,3,'b'];

let arr2:Array<number> = [1, 2];

interface NumberArray {
    [index:number]:number;
}
let arr3:NumberArray = [1, 2, 3];

let arr4:any[] = ['a', 2];

function sum() {
    //error TS2322: Type 'IArguments' is not assignable to type 'number[]'.
    //Property 'push' is missing in type 'IArguments'.
    //let args:number[] = arguments;

    let args:IArguments = arguments;
}

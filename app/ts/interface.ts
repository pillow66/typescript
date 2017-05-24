/**
 * Created by pathsourcecom on 17/5/24.
 */

/**
 * 对象的类型————接口
 * typescript中接口较为灵活,除了可用于对类的一部分行为进行抽象外,也常用于对"对象的shape"进行描述
 * 指定变量类型为一个接口,约束变量的形状必须和接口保持完全一致
 *
 * 可选属性:
 * 希望不要完全匹配一个形状时,使用?定义可选属性
 *
 * 任意属性:
 * 希望一个接口允许有任意属性,使用[]定义任意属性
 * 一旦指定了任意属性的类型,确定属性,可选属性的值类型必须是任意属性类型的子集
 *
 * 只读属性:
 * 希望对象中的一些字段只在创建时被赋值,使用readonly定义只读属性
 * 只读约束存在于第一次给对象赋值时,而不是第一次给只读属性赋值时
 */

interface Person2 {
    name:string;
    age:number;
}
let p:Person2 = {
    name: "66",
    age: 6
    //error TS2322: Type '{ name: string; age: number; sex: string; }' is not assignable to type 'Person2'.
    //sex:"male"
};

interface Person3 {
    name:string;
    age?:number;
}
let p2:Person3 = {
    name: "lulu"
};

interface Person4 {
    name:string;
    [propName:string]:any;
}
let p3:Person4 = {
    name: "six",
    like: "555",
    getName: function () {
    }
};

interface Person5 {
    //error TS2322: Type '{ age: number; name: string; }' is not assignable to type 'Person5'.
    //Property 'age' is incompatible with index signature.
    //Type 'number' is not assignable to type 'string'.

    //age:number;
    age:string;
    [propName:string]:string;
}
let p4:Person5 = {
    //age:6,
    age: "six",
    name: "66"
};

interface Person6 {
    readonly id?:number;
    name:string
}
let p5:Person6 = {
    id: 0,
    name: "66"
};
//error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
//p5.id = 1;

let p6:Person6 = {
    name: "66"
};
//error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
//p6.id = 0;
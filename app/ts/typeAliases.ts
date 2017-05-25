/**
 * Created by pathsourcecom on 17/5/25.
 */

/**
 * 类型别名
 * 用来给一个类型起一个新名字,多用于联合类型
 * type 名称 = 类型;
 *
 * 字符串字面量类型
 * 用来约束值只能是某几个字符串中的一个
 * type 名称 = '字符串1' | '字符串2' | '字符串3'
 */

type str = string;
type fun = ()=> str;
type strFun = str | fun;

function getName(n:strFun):str {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
};

console.log(getName("66"));
console.log(getName(function () {
    return "lulu";
}));

type EventNames = 'click' | 'scroll';
function handleEvent(eventName:EventNames){
};
handleEvent('click');
//error TS2345: Argument of type '"mousemove"' is not assignable to parameter of type 'EventNames'.
//handleEvent('mousemove');


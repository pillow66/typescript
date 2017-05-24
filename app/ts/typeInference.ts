/**
 * Created by pathsourcecom on 17/5/24.
 */

/**
 * 类型推论:
 * 没有明确指定类型,typescript会在变量第一次赋值时,推测出一个类型
 */

let favorite = 'six';
//error TS2322: Type '6' is not assignable to type 'string'.
//favorite = 6;
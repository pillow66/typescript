/**
 * Created by pathsourcecom on 17/5/25.
 */

/**
 * 声明文件
 * 当使用第三方库时,需要引用声明文件,如:$("#foo"),typescript并不知道$是什么鬼
 * 通常会把类型声明放到一个单独文件中,就是声明文件
 * 约定声明文件以.d.ts为后缀,然后在使用到的文件头部/// <reference path="./xxx.d.ts" /> 引入
 *
 * declare定义的类型只用于编译检查,最终结果中会被删除
 *
 * typescript推荐使用@types管理第三方声明文件
 */

/// <reference path="declare.zepto.d.ts" />
$("#content").html("(ฅ´ω`ฅ)");
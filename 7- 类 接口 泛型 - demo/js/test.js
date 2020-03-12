"use strict";
/*

功能：定义一个惭怍数据库的类

思路：需要约束规范所以要定义接口 ，需要代码重用所以用到泛型




*/
//定义数据库的类来实现接口，规定数据库有增加和删除的方法
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.prototype.add = function (info) {
        console.log(info);
        console.log('添加成功');
        return true;
    };
    DB.prototype.del = function (info) {
        console.log('添加成功');
        return true;
    };
    return DB;
}());
//创建User类
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// 实例化User类
var u = new User();
u.name = 'wade';
u.password = '123456';
//实例化数据类 调用其方法
var db = new DB(); // User类作为参数来约束调用add方法传入的参数
db.add(u);

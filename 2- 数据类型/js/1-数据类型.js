"use strict";
/*
es5 中可以这样写 ts中不行

     var flag=true
     flag = 456

ts 增加了类型校验，可以指定类型 ，使代码更规范 有利于维护，一旦指定类型不能修改
变量:类型

也可以不指定类型


*/
// 布尔类型(boolean)
/*

错误写法 因为ts中定义变量一旦指定类型不能修改

 var flag:boolean=true
 flag=1213


正确写法：
        var flag:boolean=true
        flag=false

*/
// 数字类型（number）
/*
 var a:number=123
 a=455

*/
// 字符串类型（string）
/*
    var a:string='wade'
    a='lbj'

*/
// 数组类型（array）
/*
  方式一：
     表示数组中的数据都是number类型，有其他类型ts代码会报错
     var arr:number[]=[1,2,3]

  方式二：
      Array表示arr是数组类型 number表示里面都是数字型
      var arr:Array<number>=[1,2,3]

*/
// 元组类型（tuple） 属于数组的一种
// 可以给指定任意位置上的类型
/*

     表示数组中的数据都是number类型，有其他类型ts代码会报错
     let  arr:[number,string]=[123,'wade']

*/
// 枚举类型（enum）
// 使用 enum 关键字定义，enum 类型名称{}
/*

 定义的时候
           若没有赋值 则获取的是下标
           若赋值 则获取的是具体的值

且赋值的元素后面的元素下标以该赋值的元素下标开始往后递增
enum Color{blue,red=6,'black'=44,white}
let a:Color=Color.blue
let b:Color=Color.red
let c:Color=Color.black
let d:Color=Color.white
console.log(a) // 0
console.log(b) // 6
console.log(c) // 44
console.log(d) // 45

一般用于状态码

 enum Status{success=1,error=0}
 let s:Status=Status.success
 console.log(s) //1

*/

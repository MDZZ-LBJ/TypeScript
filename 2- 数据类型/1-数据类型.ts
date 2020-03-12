
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

// 任意类型类型（any）
// 重新赋值时可以修改类型
/*
   let a:any='wade'
   a=123

   let arr:any=[1,2,'wade']

  用处：用于手动设置样式
    var a=document.getElementById('xx')
    a.name='wade' 会报错

    正确写法，由于ts中没有Object类型 所以使用 any
    var a:any=document.getElementById('xx')
    a.name='wade' 会报错

*/


//  null 和 undefined 其他数据类型(never类型)的子类型
//
/*
  var a:number
  console.log(a) 报错

  var a:undefined
  console.log(a) 正确

  若一个类型可能是 number 类型 可能是null 可能是undefined
  可以设置多个类型，ts中或是一个 |
    var a:number | null | undefined
    a=123
    console.log(a)

  null 和 undefined 用法一样

*/


//  void 类型  没有任何类型
//  一般用于方法没有返回值,表示方法没有返回任何类型
/*
         function run():void {
            console.log('----')
        }
        run()

       有返回值时 指定对应类型
        function run():num {
            return 123
        }
        run()

*/

//  nerver 类型  其他类型(包括null ，undefined) 代表从不会出现的值
//  表示nerver的变量只能被 nerver类型所赋值
/*
  var a:nerver
  a=(()=>{

        throw new Error('错误信息')

            })()

用于抛出异常，几乎用不到，因为抛出异常也可以用string或者用any
*/
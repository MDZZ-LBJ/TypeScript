"use strict";
/*

接口：
   接口是一种规范的定义
   interface 关键字修饰


1 属性接口: 对属性(json,对象)的约束
  // 以前对属性约束的写法
 // 规定了传入的参数info值是个对象 且必须有name属性 且是个string类型
    function printLabel(info:{name:string}):void {

        console.log('---我是label')
    }

    var l={name:'123'} //正确
    // var l={age:'123'} 错误
    // var l={name:'123',age:20} 正确
    // var l={name:12}  // 错误
    printLabel(l)


 //使用接口对属性约束的写法
//要求：传入的参数必须含有firstName和senondName 且为string类型
    // 1 定义接口 对firstName和senondName进行约束
    interface FullName {
        firstName:string
        senondName:string
        //senondName?:string 加上？号表示这个属性可传可不传
    }

    // 2 在方法中实现接口 赋值给name
    function printName(name:FullName) {
        console.log(name.firstName+'--'+name.senondName)
    }
    //3 执行方法 传入参数 必须含有firstName和senondName 且为string类型
    var obj={age:20,firstName:'lbj',senondName:'wade'}
    printName(obj)
    //注意 ： 要是直接传入对象 则不能包含其他属性 否则报错
    //printName({age:20,firstName:'lbj',senondName:'wade'})


2 函数类型接口
    // 定义一个join接口 规定函数传入的参数必须是string类型，返回值也必须是string类型
     interface join{
         //　（传入参数及类型）：函数返回类型
         (key:string,value:string):string
     }

     //调用接口对fun函数进行约束
     var fun:join=function (key:string,value:string):string {

          return key+value
     }

    var res=fun('wade','lbj')
    alert(res)


3 可索引接口 对 数组/对象 的约束(使用较少)
  // 对数组的约束
        interface UserArr {
            //规定数组的索引值是number类型 值是string类型
            [index:number]:string
        }

        var arr:UserArr=['wade','lbj']

  //对对象的约束
       interface UserObj {
       //规定对象的索引必须是string类型，值必须是string类型
           [index:string]:string
        }
    
        var arr:UserObj={'name':'wade'}

4 类类型接口 对类的约束 和抽象类有点相似
        interface Animal {
            //规定这个类必须有name属性且为string类型 和 eat方法且没有返回值
            name:string
            eat():void
        }
        // implements表示实现这个接口
        class Dog implements Animal{
            name:string
            constructor(name:string){
                this.name=name
            }
            eat(){
                console.log(this.name+'--吃骨头')
            }
        }
        var d=new Dog('小黑')
        d.eat()


5 接口的继承

        //Person接口 继承了 Animal接口，xiaoMing类在实现Person接口的
        //时候要实现该接口的所有方法以及该接口的父接口的所有方法
        interface Animal {
            eat():void
        }

        interface Person extends Animal{
            work():void
        }

        class xiaoMing implements Person{
            name:string
            constructor(name:string){
                this.name=name
            }
            eat(){
                console.log(this.name+'--吃饭')
            }
            work(){
                console.log(this.name+'--工作')
            }
        }
        var s=new xiaoMing('小明')
            s.work()

*/

"use strict";
/*
 通过class关键字

定义类


    class Person {
        name:string; //属性 前面省略public关键字
        constructor(n:string){ //构造函数 实例化时触发
           this.name=n
        }
        run():void{
                alert(this.name)
            }
    }

    var p=new Person('wade')
    p.run()

  //若定义类时 只写属性 类中没有使用到这个属性要用 undefined 或一下 否则报错
  //因为ts中要保证属性要赋值
  class Person {
        name:string | undefined;
    }


改变属性值

    class Person {
        name:string; //属性 前面省略public关键字
        constructor(n:string){ //构造函数 实例化时触发
           this.name=n
        }
        getName():string{
            return this.name
        }
        setName(name:string):void{
            this.name=name
        }
    }

    var p=new Person('wade')
    alert(p.getName())// wade
    p.setName('lbj')  //改变属性值
    alert(p.getName())// lbj


继承 extends + super
    class Person {
        name:string; //属性 前面省略public关键字
        constructor(n:string){ //构造函数 实例化时触发
           this.name=n
        }
        run():string{
           return `${this.name}--跑步`
        }
    }

    class Son extends Person{
        constructor(name:string){
            super(name) //表示调用父类的构造函数
        }
    }

    var s=new Son('wade')
    alert(s.run())
    //实例化子类时会执行子类的构造函数constructor，
    //然后super会执行父类的构造函数，并传递类name
    //Son 继承类 Person 类能调用run方法，所以打印：wade--跑步

    若子类中方法和父类中方法一样，则执行子类的，先看子类中有没有，没有的话在从父类中找


类里面的修饰符 ts定义属性提供类三种修饰符,若不加 默认为public
   public 公有类型， 在类里面，子类，类外面都可以访问
   protected 保护类型， 在类里面，子类可以访问 ，类外面不可以访问
   private 私有类型， 在类里面可以访问，子类，类外面不可以访问

*/

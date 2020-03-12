"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*

静态方法：
     static 关键字修饰
     只可以获取类的静态属性

     class Person {
            public name:string
            static age:number=20
            constructor(name:string){
                this.name=name
            }
            run(){
               alert(this.name+'--跑步')
            }
            static work(){
                alert(this.age+'--年龄')//可以获取属性
               // alert(this.name+'--工作')//获取不到属性

            }
        }
        //执行静态方法，类型.方法名
        Person.work()


多态: 子类继承父类的方法，执行出不同结果 ，属于继承
        class Animal {
            public name:string
            constructor(name:string){
                this.name=name
            }
            eat(){
               console.log('---吃')
            }

        }

        class Dog extends Animal{
            constructor(name:string){
                super(name)
            }
            eat(){
                console.log(this.name+'吃骨头')
            }
        }


        class Cat extends Animal{
            constructor(name:string){
                super(name)
            }
            eat(){
                console.log(this.name+'吃老鼠')
            }
        }

        Dog 和 Cat 都继承了Animal父类中的 eat 方法
        重写eat方法，执行出不同结果，叫做多态


抽象类
     提供给其他类继承的基类，不能够实例化
      abstract 关键字修饰抽象类和抽象方法
      抽象类中的抽象方法不包含具体实现，必须在派生类(子类)中实现
      抽象方法只能放在抽象类之中，抽象类可以其他的方法和属性
      抽象类的子类必须实现抽象类中的抽象方法
*/
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃骨头');
    };
    return Dog;
}(Animal));
var d = new Dog('lbj');
d.eat();

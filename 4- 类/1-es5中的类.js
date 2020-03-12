/*

1 es5 中的类
 没有专门定义类的方法，通过function构造


function Person(){
  this.name='wade'
  this.age=20
  this.run=function(){  //实例方法，必须实例化后执行
    alert(this.name+'--跑步')
  }
}


var p=new Person()
console.log(p.name)  // wade

2  原型链里面增加属性和方法
   Person.prototype.sex='男'
   Person.prototype.work=function(){
      alert('工作')
   }
   console.log(p.sex)  // 男

3 类里面的静态方法
  直接通过 类.方法名 执行
    Person.getInfo=function(){
      alert('信息')
    }
    Person.getInfo()


4 继承

    function son(){
        Person.call(this) //对象冒充实现继承，
    }
    var s=new son()
    s.run()  //只能继承构造函数中的属性和方法
    s.work() //报错 不能继承原型链上的属性和方法


    function son(){

    }
    son.prototype=new Person() //原型链实现继承，
    var s=new son()
    s.work()
  // 既能继承构造函数中的属性和方法,又能继承原型链上的属性和方法

  // 但是实例化时没法给父类传参
      function Person(name,age){
          this.name=name
          this.age=age
          this.run=function(){
            alert(this.name+'--跑步')
          }
    }
    function son(name,age){

    }
    son.prototype=new Person()
    var s=new son('lbj',18)
    s.run() // undefined--跑步 父类接受不到传的值


  对象冒充+原型链 实现继承
  既可以继承构造函数中的属性和方法，又可以继承原型链上的属性和方法
  又可以给父类传值

    function son(name,age){
        Person.call(this,name,age)
    }
    son.prototype=new Person()
    var s=new son('lbj',18)
    s.run() // lbj--跑步


*/



 
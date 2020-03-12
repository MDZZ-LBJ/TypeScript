/*
装饰器：是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为
       通俗的讲装饰器就是一个方法，可以注入到类，方法，属性或参数上来扩展功能
       不修改类的前提下进行功能扩展


种类：类装饰器，属性装饰器，方法装饰器，参数装饰器

执行顺序: 属性装饰器>方法装饰器>方法参数装饰器>类装饰器
         注意：同一类型装饰器若有多个 写法从上到下
               执行从下往上执行，从右往左执行

写法：普通装饰器（无法传参） 装饰器工厂（可传参）

//1 类装饰器：普通装饰器写法（无法传参）

            function logClass(target:any) {
                console.log(target)// target 为被修饰的当前类

                target.prototype.url='xxxxx' //给类增加属性
                target.prototype.run=function () {
                    console.log('在跑步')   //给类增加方法
                }
            }

            @logClass
            class HttpClient {
                constructor(){

                }
                getData(){

                }
            }

            var http:any=new HttpClient()
            console.log(http.url)
            http.run()

//1 类装饰器：装饰器工厂写法（可传参）

            function logClass(params:string) {
                return function (target:any) {
                    console.log(params) // 传入的参数
                    console.log(target) //被修饰的类
                    target.prototype.url='xxxxx' //给类增加属性
                    target.prototype.run=function () {
                        console.log('在跑步')   //给类增加方法
                    }
                }
            }

            @logClass('wade') // 传参
            class HttpClient {
                constructor(){

                }
                getData(){

                }
            }

            var http:any=new HttpClient()
            console.log(http.url)
            http.run()

//1 类装饰器

            // 重载构造函数和方法

            function logClass(target:any) {
               return class extends target{
                   url='yyyyyyyyy' //
                   getData(){
                      console.log('------')
                   }
               }
            }

            @logClass
            class HttpClient {
                url:string | undefined
                constructor(){
                   this.url='xxxxxxxxxxx'
                }
               getData(){

                }
            }

            var http:any=new HttpClient()
            console.log(http.url) // 'yyyyyyyyy'
            http.getData()   // '------'


*/

//2 属性装饰器


 // 属性装饰器接收两个参数  一个是被修饰的类 一个是属性
function logProperty(target:any,attr:any) {
    console.log(target) // 被修饰的类
    console.log(attr)  //  属性名称
    target[attr]='--------'

}


class HttpClient {
    @logProperty //属性装饰器 放在属性上面
    url:string | undefined

}




var http:any=new HttpClient()
console.log(http.url) // '--------'














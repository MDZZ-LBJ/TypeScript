"use strict";
/*

//3 方法装饰器 可以修改类中的方法，
    接收三个参数：被修饰的类， 方法名， 方法描述

        function logMethod(target:any,methodName:any,desc:any) {
            console.log(target)    //被修饰的类
            console.log(methodName) //方法名
            console.log(desc)      // 方法描述

            target.url='xxxxxxxx'     //给类增加属性
            target.run=function () {
                console.log('在跑步')   //给类增加方法
            }
            //修改被装饰器修饰的方法 将+1 改为 +2
             var oldMethod=desc.value // 先保存原来的方法
            desc.value=function (args:number) {
                args=args+2
                console.log(args+'------')
                //覆盖原方法， apply第二个参数必须是数组
                oldMethod.apply(this,[args])

            }
        }


        class HttpClient {
            @logMethod
            getData(num:number){
                num=num+1
                console.log(num+'=======')

            }
        }

        var http:any=new HttpClient()
        console.log(http.url)
        http.run()
        http.getData(12)

//3 方法参数装饰器 （用的不多）
        // 接收三个参数：被修饰的类， 方法名， 参数索引
        function logArgs(target:any,methodName:any,paramsIndex:any) {

            console.log(target)    //被修饰的类
            console.log(methodName) //方法名
            console.log(paramsIndex)      // 参数索引


        }

        class HttpClient {
            getData(@logArgs num:number){
                console.log(num )
            }
        }


/
*/

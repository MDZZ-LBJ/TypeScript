
/*

方法返回值类类型必须和方法类型一致

定义方法：

 方式一：函数声明法
        function run():string{

             return 'wade'
        }

 方式二：匿名函数
        var run=function():number{
              return 123
        }



1 定义方法传参：传入值的类型必须和参数类型一致
       function getInfo(name:string,age:number):string{

             return `${name}---${age}`
        }

      getInfo('wade',20)


2  没有返回值的方法：使用viod类型
      function run():viod{

           console.log('----')
      }

3  方法可选参数 使用 ？ ，形参后面加问号 表示这个参数可传可不传，且可选必须要放在最后面
   es5中实参和形参个数一致，ts中必须一样，若不一样需要配置

        function getInfo(name:string,age?:number):string{

            return `${name}---${age}`
        }

        getInfo('wade')


4 默认参数 传值的时候使用传入的值，不传的时候使用默认值
     es5中无法设置默认参数，es6和ts中可以设置默认参数
       function getInfo(name:string,age:number=20):string{

            return `${name}---${age}`
        }

        getInfo('wade')

5 剩余参数  使用展开运算符...

      function sum(...args:number[]):number{
        var sum=0
        for(var i = 0;i<args.length;i++){
            sum+=args[i]
        }
        return sum
     }
     sum(1,2,3,4)

      注意要是这样写表示 a=1,b=2  , 3,4传给数组
     function sum(a:number,b:number,...args:number[]):number{
            var sum=a+b
            for(var i = 0;i<args.length;i++){
                sum+=args[i]
            }
            return sum
         }
     sum(1,2,3,4)


6 函数重载
  两个或以上同名函数，传入参数不同，执行结果不同

    function getInfo(name:string):string

    function getInfo(age:number):number

    function getInfo(args:any):any{

        if(typeof args =='string'){
            return '姓名：' + args
        }else {
            return '年龄：' + args
        }

    }

    //匹配调用，传值的时候必须对应上面方法中定义的类型 否则报错
    getInfo('wade') // 正确
    getInfo(123) // 正确
    getInfo(true) // 错误




*/

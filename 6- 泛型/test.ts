/*

泛型：支持传入任何数据类型，但是要求返回值和传入值类型必须一致

// 函数泛型

        //定义一个函数 可以传string类型 可以传number类型
        function getData(value:any):any {

            return '123'
        }

        //可以使用any,但是使用any表示放弃类类型检查
        //可以随便传入，但是返回值类型就不好控制了
        //我们要实现的是传入的类型和返回的类型要一致，那么就要使用到泛型了

        // <>表示使用泛型 里面字母可以随便写 一般写  T
        //  后面对传入值和函数返回值得约束都使用泛型约束
        function getData2<T>(value:T):T {

            return value
        }
        //执行函数，<number>表示传入值得泛型是number类型，传入其他类型报错
        getData2<number>(123)

// 类的泛型
       求最小值
        class MinNumber<T> {
            public list:T[]=[]
            add(value:T):void{
                this.list.push(value)
            }
            min():T{
                let min=this.list[0]
                for (let i = 0; i < this.list.length; i++) {
                     if(min>this.list[i]){
                         min=this.list[i]
                     }
                }
                return min
            }
        }

        var m=new MinNumber()
        m.add(1)
        m.add(4)
        m.add(0)
        m.add(-3)
        m.add(5)
        console.log(m.min());


//接口泛型
        写法1
                 interface ConfigFn {
                    <T>(value1:T):T
                }

                var setdata:ConfigFn=function<T> (value:T):T {
                                  return value
                }

                setdata<string>('wade')

         写法2
                 interface ConfigFn<T> {
                      (value1:T):T
                  }

                 function setdata <T> (value:T):T {
                                  return value
                      }

                var myData:ConfigFn<string>=setdata

                myData('wade')


//将类当做泛型传递给类做约束

            定义一个 User 类作为数据库中用户表的映射，
            定义一个数据库类 add方法添加用户 返回成功
            调用天剑用户方法时传入user ，此时这个User类的
            属性及类型当做类MyDb类的泛型作为约束

        不使用泛型的写法
                class  User {
                    name:string | undefined;
                    password:string | undefined;

                }

                class MyDb {
                    add(user:User):boolean{
                        console.log(user)
                        return true
                    }
                }

                var u=new User()
                u.name='wade'
                u.password='12345'

                var db=new MyDb()
                db.add(u)

           泛型的写法
           class  User {
                name:string | undefined;
                password:string | undefined;
            }
            class MyDb<T> {
                add(user:T):boolean{
                    console.log(user)
                    return true
                }
            }

            var u=new User()
            u.name='wade'
            u.password='12345'

            var db=new MyDb<User>()
            db.add(u)

}


*/











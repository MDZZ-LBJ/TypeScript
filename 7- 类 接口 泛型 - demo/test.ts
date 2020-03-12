/*

功能：定义一个惭怍数据库的类

思路：需要约束规范所以要定义接口 ，需要代码重用所以用到泛型




*/

//定义一个来约束类
interface DBI<T> {
    add(info:T):boolean;
    del(info:T,id:number):boolean;
}


//定义数据库的类来实现接口，规定数据库有增加和删除的方法
class DB<T> implements DBI<T>{
    add(info:T):boolean{
        console.log(info)
        console.log('添加成功')
        return true
    }
    del(info:T):boolean{
        console.log('添加成功')
        return true
    }
}

//创建User类
class User {
    name:string | undefined
    password:string | undefined
    
}

// 实例化User类
var u = new User()
u.name='wade'
u.password='123456'

//实例化数据类 调用其方法
var db=new DB<User>() // User类作为参数来约束调用add方法传入的参数
db.add(u)














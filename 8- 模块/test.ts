/*

模块：将公共的变量，方法抽离成一个文件，暴露出去供使用

      export 暴露  import 引入

      浏览器中无法查看运行结果 不支持export， 用node环境看结果 node test.js

*/

/* 方式一：直接引入*/
   import {dbUrl,getData} from './modules/db'

    console.log(dbUrl)
    getData()

/*

方式二：引入之后起别名 用as

import {dbUrl,getData as get} from './modules/db'

console.log(dbUrl)
get()

*/

/*

方式三：获取 export default 方式导出的模块 不用加 {}
import getData from './modules/db'

getData()

*/


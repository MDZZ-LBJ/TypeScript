/* 方式一：逐一暴露 */
   export var dbUrl='xxxx'

   export function getData():any[] {
      console.log('获取数据库数据')
      return [{'name':'lbj'}]
  }

/*

方式二：统一暴露

  var dbUrl='xxxx'

  function getData():any[] {
            console.log('获取数据库数据')
            return [{'name':'lbj'}]
        }

  export {
         dbUrl,getData
      }


*/

/*

方式三：默认导出 export default
        在一个模块中只能使用一次，导出一个方法或变量
        当模块中只有一个方法或变量需要导出时可以使用

        function getData():any[] {
            console.log('获取数据库数据')
            return [{'name':'lbj'}]
        }

        export default getData


*/
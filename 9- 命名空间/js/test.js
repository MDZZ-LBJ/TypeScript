"use strict";
/*

命名空间：在代码较多时，避免变量名产生冲突，可将相似功能的函数，接口，类放置到命名空间中,
          命名空间中的代码是私有的，通过export暴露出去使用
          不同命名空间中的变量名可以相同


定义： namespace XXX{
                var str='wade'
               export  str
            }

使用：XXX.str

命名孔空间 和 模块 区别：
  命名空间：内部模块，主要用于组织代码，避免命名冲突
  模块： 抽离公共方法，变量等，一个模块中可能有多个命名空间

*/
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + '吃骨头');
        };
        return Dog;
    }());
    A.Dog = Dog;
})(A || (A = {}));
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + '吃骨头');
        };
        return Dog;
    }());
    B.Dog = Dog;
})(B || (B = {}));
var d1 = new A.Dog('lbj');
d1.eat();
var d2 = new B.Dog('lbj');
d2.eat();

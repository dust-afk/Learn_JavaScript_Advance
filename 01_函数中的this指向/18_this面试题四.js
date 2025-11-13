var name = "window"

/*
1.创建一个空的对象
2.将这个空的对象赋值给this
3.执行函数体中的代码
4.将新的对象默认返回
*/
function Person(name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function() {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }

}
//person1/person都是对象(实例instance)
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()(); //默认绑定: window
person1.obj.foo1.call(person2)(); //默认绑定:window
person1.obj.foo1().call(person2); //显式绑定:person2

person1.obj.foo2()();//上层作用域:obj(隐式绑定)
person1.obj.foo2.call(person2)();//上层作用域:person2(显式绑定)
person1.obj.foo2().call(person2);//上层作用域:obj(隐式绑定)


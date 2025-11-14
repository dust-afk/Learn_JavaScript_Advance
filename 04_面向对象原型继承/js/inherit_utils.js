    //工具函数
    //创建对象的过程
    function createObject(o) {
      function F(){}
      F.prototype = o
      return new F()
    }
    //将subtype和supertype联系在一起
   function inherit(Subtype, Supertype) {
    // Subtype.prototype.__protp__ = Supertype.prototype    
   Subtype.prototype = createObject(Supertype.prototype)
   Object.defineProperty(Subtype.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Subtype
   })   
   }
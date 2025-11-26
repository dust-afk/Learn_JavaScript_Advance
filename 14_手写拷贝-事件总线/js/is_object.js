
    //需求: 判断一个标识符是否是对象类型
    function isObject(value) {
      const valueType = typeof value
      return (value !== null) && (valueType === "object" || valueType === "function")
    }
    const name = "why"
    const age = 18
    const bar = function() {}
    const arr = []
    const foo = {}
    // console.log(isObject(name))
    // console.log(isObject(bar))
    // console.log(isObject(arr))
    // console.log(isObject(foo))
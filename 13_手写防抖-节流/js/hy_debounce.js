    function hydebounce(fn, delay, immediate = false, resultCallback) {
      //1.用于记录上一次事件触发的timer
      let timer = null
      let isInvoke = false
      //2.触发事件时执行函数
      const _debounce = function(...args) {
        return new Promise((resolve, reject) => {
          try {
            
            //2.1如果有再次触发(更多触发事件), 那么取消上一次事件
            if (timer) clearTimeout(timer)
            //第一次操作不需要延迟
            let res = undefined
            if (immediate && !isInvoke) {
              fn.applay(this, args)
              if (resultCallback) resultCallback(res)
              isInvoke = true
              resolve(res)
              return
            }
              //2.2.延迟去执行对应fn函数(传入的回调函数)
              timer = setTimeout(() => {
                res = fn.apply(this, args)
                if (resultCallback) resultCallback(res)
                timer = null//执行过函数之后,将timer重新设置为null
                resolve(res)
                isInvoke = false
              }, delay);
          } catch (reeor) {
            reject(error)
          }
        })
      }
      //3.给_debounce绑定一个取消函数
      _debounce.cancel = function() {
        if (timer) clearTimeout(timer)
        timer = null
        isInvoke = false
      }
      //返回一个新的函数
      return _debounce
    }
document.body.style.display = 'block'

NProgress.start()

setTimeout(function () {
  NProgress.done()
  var els = [].slice.call(document.querySelectorAll('.out'))
  els.forEach(function (el) {
    el.className = el.className.replace(' out', '')
  })
}, 600)

on(id('b-0'), 'click', function () { NProgress.start() })
on(id('b-40'), 'click', function () { NProgress.set(0.4) })
on(id('b-inc'), 'click', function () { NProgress.inc() })
on(id('b-100'), 'click', function () { NProgress.done() })

function id(val) {
  return document.getElementById(val)
}

function on(el, event, handler) {
  if (el.addEventListener) {
    el.addEventListener(event, handler)
  } else {
    el.attachEvent('on' + event, function () {
      handler.call(el)
    })
  }
}
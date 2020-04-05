// https://observablehq.com/@alvaro-jmp/lib@1077
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Lib`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Library of varied functions`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `👉 <a href="#credits">Credits</a>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `---
# _range ( start = number , stop = number , step = number )

Similar to funciton range in Python 3.X

Return an number array between a range numbers defined by start and stop, and increment or decrement according to step.
`
)});
  main.variable(observer("_range")).define("_range", function(){return(
function _range(start = 0, stop = 0, step = 1) {

  if (typeof start === 'number' && typeof stop === 'number' && typeof step === 'number') {
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
    }

    const task = (index = 0, _stop, _step) => {
            
      const condition = _step > 0 ? index < stop : index > stop

      return condition ? [index,...task(index + step, _stop, _step)] : [] 

    }

    return task(start, stop, step)
  }

  else
    return []

}
)});
  main.variable(observer()).define(["md","no_char"], function(md,no_char){return(
md `---
# gen_chars ( n_times = number , char = string | "${no_char}" )

Return a string mutiplied by n_times.
`
)});
  main.variable(observer("gen_chars")).define("gen_chars", ["no_char"], function(no_char){return(
(n_times, char = no_char) => {
  if (typeof n_times === 'number' && typeof char === 'string') {
    const task = (_n, _char) => {           
      return _n <= 1 ? _char : _char + task(_n - 1, _char)
    }
    return task(n_times, char)
  } else
    return no_char
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md `---
# a_target_blank ( _link = string , _title = string )

Return an tag "a" HTML with attribute target="_blank".
`
)});
  main.variable(observer("a_target_blank")).define("a_target_blank", ["html"], function(html){return(
(_link, _title) => {
  return html `<a href="${_link}" target="_blank">${typeof _title === 'undefined' ? _link : _title}</a>`
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md `---
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `---
# tex_html ( data = string )

Return Katex formatted in html.
`
)});
  main.variable(observer("tex_html")).define("tex_html", ["tex"], function(tex){return(
(data) => { return `<span class="katex">${tex `${data}`.innerHTML}</span>` }
)});
  main.variable(observer()).define(["md"], function(md){return(
md `---
# random_color (  )

Return a "#" + hex string.
`
)});
  main.variable(observer("random_color")).define("random_color", function(){return(
(_hex) => {
  const acc = (_hex_ = '') => {
    return _hex_.length === 6 ? _hex_ : 
      acc(Math.random().toString(16).slice(2, 8) + _hex_)
  }
  const result = acc()
  return '#' + result
}
)});
  main.variable(observer()).define(["md","a_target_blank"], function(md,a_target_blank){return(
md `---
# custom_graphviz ( _dot_src = string,_options = Object Literal )

Return a rendered graphviz.
<br><br>
Options for d3-graphviz => ${a_target_blank('https://github.com/magjac/d3-graphviz#selection_graphviz','https://github.com/magjac/d3-graphviz#selection_graphviz')}
`
)});
  main.variable(observer("custom_graphviz")).define("custom_graphviz", ["d3__graph"], function(d3__graph){return(
(_dot_src = 'digraph{ x -> nothing }',
                    _options = {engine: 'neato', zoom: false, useWorker: false, duration: 0 }) => {
  
  const _div = d3__graph.create('div')
  
  _div.graphviz(_options)    
    //.transition(() => d3__graph.transition().duration(_duration))    
    .renderDot(_dot_src)
  
  return _div.node()
  
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md `---`
)});
  main.variable(observer("adot_iterator")).define("adot_iterator", ["random_color"], function(random_color){return(
async function* adot_iterator(_length = 0, is_infinite = false, _duration = [], _button = false, _pass = {enable: true}) {
  _button
 
  const _id = random_color()  // As an ID  
  let i = 0
  yield i
  //console.log('_pass: ', _pass)  
    if (!_pass.enable) {
      _pass.enable = true
      //console.log('_pass :', _pass)
      return
    }
      
  const fix_duration = () => {
    return _duration[i] ? (_duration[i]) + 100 : 1100
  }
  
  while (true) {
    //console.log('adot_iterator',_id, i)
    //console.log('_duration[i]:', _duration[i])
    if (i === _length) { 
      if (is_infinite)
        i = 0
      else
        return
    }
    yield i
    await new Promise((resolve, reject) => setTimeout(resolve, fix_duration()))    
    ++i
  }
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md `---`
)});
  main.variable(observer("matrix_is_symetric")).define("matrix_is_symetric", function(){return(
(matrix) => {
  if (matrix.length <= 1) return false
  const is_squared = ([head,...tail]) => {    
    if (typeof head === 'undefined' && tail.length === 0) return true
    return (head.length === matrix.length) ? is_squared(tail) : false
  }
  const verf_is_squared = is_squared(matrix)
  if (!verf_is_squared) return false
  
  const is_symetric = (x = 0, y = 1, len) => {    
    if (y === len) return true
    const verify = (k) => {      
      if (k === len) return true
      /*console.log(`matrix[x=${x}][y=${k}]:`, matrix[x][k])
      console.log(`matrix[y=${k}][x=${x}]:`, matrix[k][x])
      console.log('-------')*/
      return matrix[x][k] === matrix[k][x] ? verify(k + 1) : false
    }
    const test = verify(y)
    /*console.log('test:', test)
    console.log('***********')*/
    return test ? is_symetric(x + 1, y + 1, len) : false
  }
  const verf_is_symetric = is_symetric(0, 1, matrix.length)
  
  return verf_is_symetric
  //return false
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md `---
# c ( _numb )

Return a &#96; \${_numb} &#96; + ".-"
`
)});
  main.variable(observer("c")).define("c", ["tex"], function(tex){return(
(_numb) => tex `${_numb}.-`
)});
  main.variable(observer()).define(["md","a_target_blank"], function(md,a_target_blank){return(
md `---
### WARNING
<br>
Delete html nodes of obsevablehq, for when you want to remove all html nodes or a range ${a_target_blank('https://gist.github.com/alvaro-jmp/5c4375bbb045bf0839fe1f1b0f974a27')}.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `---`
)});
  main.variable(observer("get_len_html_nodes_observablehq")).define("get_len_html_nodes_observablehq", function(){return(
function get_len_html_nodes_observablehq() {  
  return document.body.children.length - 1
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md `---
# Dependencies`
)});
  main.variable(observer("dot")).define("dot", ["require"], function(require){return(
require("@observablehq/graphviz@0.2")
)});
  main.variable(observer("expect")).define("expect", ["require"], function(require){return(
require('expect@24.8.0/build-es5/index.js').catch(() => window["setImmediate"])
)});
  main.variable(observer("test")).define("test", ["html"], function(html){return(
(fun, description) => {
  fun();
  return html `<span style="color:green;" >✓ : ${description||'Test passing '}</span><br />`
}
)});
  main.variable(observer("d3__graph")).define("d3__graph", ["require"], function(require){return(
require("d3-graphviz@2.6.1", "d3-selection@1.4.1", "d3-transition@1.3.2", "d3-ease@1.0.6")
)});
  main.variable(observer("no_char")).define("no_char", function(){return(
'no char 😅! '
)});
  main.variable(observer()).define(["md"], function(md){return(
md`--- 
# Test`
)});
  main.variable(observer()).define(["test","expect","_range","gen_chars","html"], function(test,expect,_range,gen_chars,html)
{
  const do_test_with_ = (_test) => {return _test()}
  
  const unit_testing = [
    
    test(() => expect(_range(1,6)).toEqual([1,2,3,4,5]), '_range(1,6) === [1,2,3,4,5]'),
          
    test(() => 
      expect(_range(20,10,-1)).toEqual([20, 19, 18, 17, 16, 15, 14, 13, 12, 11]),
      '_range(20,10,-1) === [20, 19, 18, 17, 16, 15, 14, 13, 12, 11]'
     ),
    
    test(() =>  expect(_range(1,6,2)).toEqual([1, 3, 5]) , '_range(1,6,2) === [1, 3, 5]'),
    
    test(() => expect(gen_chars(10))
               .toEqual('no char 😅! no char 😅! no char 😅! no char 😅! no char 😅! ' +
                        'no char 😅! no char 😅! no char 😅! no char 😅! no char 😅! '),
         'gen_chars(10) === "no char 😅! no char 😅! no char 😅! no char 😅! no char 😅! ' +
         'no char 😅! no char 😅! no char 😅! no char 😅! no char 😅! "'
     ),
    
    test(() => expect(gen_chars(6,'_lmao_')).toEqual('_lmao__lmao__lmao__lmao__lmao__lmao_'),
      'gen_chars(6,\'_lmao_\') === "_lmao__lmao__lmao__lmao__lmao__lmao_"'),
    
    test(() => expect(gen_chars(-10)).toEqual('no char 😅! '), 'gen_chars(-10) === "no char 😅! "'),
    
    test(() => expect(gen_chars(-10,-10)).toEqual('no char 😅! '), 'gen_chars(-10,-10) === "no char 😅! "'),
    
    test(() => expect(gen_chars(-10,-10,-10)).toEqual('no char 😅! '),
         'gen_chars(-10,-10,-10) === "no char 😅! "')
    //,    
    //test(() => expect(div_1 `hello world`).toEqual('<div style="font-size:24px">hello world</div>'), 'div_1 \`hello world\` === \&#60;div style="font-size:24px"&#60;hello world&#60;/div&#62;')
  ]
  
  return html `${unit_testing}`
}
);
  main.variable(observer()).define(["md"], function(md){return(
md `---
# Debug`
)});
  main.variable(observer("main_path")).define("main_path", function(){return(
'#app > div > main > div.flex.w-100.mw8.center.mt4 > div > div.relative.mh0-ns.mb5.nl3 > div > div.dib.relative.w-100.code.f6.lh-copy.black.pen'
)});
  main.variable(observer()).define(function(){return(
document.body.querySelectorAll('div')
)});
  main.variable(observer()).define(function(){return(
document.querySelector('div.dib.relative.w-100.code.f6.lh-copy.black.pen')
)});
  main.variable(observer()).define(["get_len_html_nodes_observablehq"], function(get_len_html_nodes_observablehq){return(
get_len_html_nodes_observablehq()
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz()
)});
  main.variable(observer("credits")).define("credits", ["md"], function(md){return(
md `---
# Credits`
)});
  main.variable(observer()).define(["html","a_target_blank"], function(html,a_target_blank){return(
html `${a_target_blank('https://observablehq.com/@pernifloss/unit-testing-inside-a-notebook')}`
)});
  main.variable(observer()).define(["a_target_blank"], function(a_target_blank){return(
a_target_blank('https://stackoverflow.com/questions/8273047/javascript-function-similar-to-python-range')
)});
  main.variable(observer()).define(["a_target_blank"], function(a_target_blank){return(
a_target_blank('https://observablehq.com/@mbostock/graph-o-matic')
)});
  main.variable(observer()).define(["a_target_blank"], function(a_target_blank){return(
a_target_blank('https://observablehq.com/@magjac/placing-graphviz-nodes-in-fixed-positions')
)});
  main.variable(observer()).define(["a_target_blank"], function(a_target_blank){return(
a_target_blank('https://observablehq.com/@magjac/d3-graphviz', 'https://observablehq.com/@magjac/d3-graphviz')
)});
  return main;
}

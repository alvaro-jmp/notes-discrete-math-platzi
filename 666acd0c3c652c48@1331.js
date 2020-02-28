// https://observablehq.com/@magjac/d3-graphviz@1331
import define1 from "./e93997d5089d7165@2227.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# d3-graphviz`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Functions for rendering Graphviz graphs and performing animated transitions between them.`
)});
  main.variable(observer("logoAnimation")).define("logoAnimation", ["adot","logoDots","logoDotIndex","width","logoDuration"], function(adot,logoDots,logoDotIndex,width,logoDuration){return(
adot.bind(this)`${logoDots[logoDotIndex]}${{width: width, height: 200, scale: 1.25, duration: logoDuration}}`
)});
  main.variable(observer("viewof playLogo")).define("viewof playLogo", ["button"], function(button){return(
button({value: "Play animation"})
)});
  main.variable(observer("playLogo")).define("playLogo", ["Generators", "viewof playLogo"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`---
## adot

\`import {adot} from "@magjac/d3-graphviz"\``
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Animated DOT through the **adot** [template literal tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates)`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#### Basic form:
The basic form renders a static graph just like **dot** from [@mbostock/graphviz](https://beta.observablehq.com/@mbostock/graphviz):`
)});
  main.variable(observer()).define(["adot"], function(adot){return(
adot`digraph {a -> b}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#### Animation form:
The animation form utilizes a [tagged template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates) with embedded expressions that evaluates to the [DOT](https://www.graphviz.org/doc/info/lang.html) source. It performs an animated transition when the DOT source changes and needs the **this** context from the current cell to calculate the graph changes.`
)});
  main.variable(observer()).define(["adot","dotSrc1"], function(adot,dotSrc1){return(
adot.bind(this)`${dotSrc1}`
)});
  main.variable(observer("dotSrc1")).define("dotSrc1", function(){return(
`digraph {a -> b; c}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`If an embedded expression evaluates to an object, it's properties are taken to be options to adot.`
)});
  main.variable(observer()).define(["adot","dotSrc2"], function(adot,dotSrc2){return(
adot.bind(this)`${dotSrc2}${{duration: 2000}}`
)});
  main.variable(observer("dotSrc2")).define("dotSrc2", function(){return(
`digraph {rankdir=LR a -> b -> c; a -> c}`
)});
  main.variable(observer("logo")).define("logo", ["adot","logoDots","width"], function(adot,logoDots,width){return(
adot.bind(this)`${logoDots[logoDots.length - 1]}${{width: width, height: 300, fit: true, zoom: false}}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Definitions`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Internal data`
)});
  main.variable(observer("defaultOptions")).define("defaultOptions", function(){return(
{
  useWorker: false,
  width: null, // SVG width. Default: use original SVG width
  height: null, // SVG height. Default: use original SVG height
  scale: 1, // scale factor to scale up the graph with after possible fit to SVG size. Default: no scaling
  fit: false, // If true, scale the graph automatically to fit the svg size. Default: don't fit
  loadEvents: false,
  duration: 250,
  zoom: true,
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Exported functions`
)});
  main.variable(observer("adot")).define("adot", ["defaultOptions","html","d3"], function(defaultOptions,html,d3){return(
async function (strings) {
  let string = strings[0] + "";
  let i = 0;
  let n = arguments.length;
  var options = Object.assign({}, defaultOptions);
  while (++i < n) {
    if (arguments[i] instanceof Object) {
      for (var option of Object.keys(arguments[i])) { 
         options[option] = arguments[i][option];
      }
    } else {
      string += arguments[i] + "";
    }
    string += strings[i];
  }
  if (!this) {
    var div = html`<div>`;
  } else {
    var div = this;
  }
  var graphviz = d3.select(div).graphviz(options);
  var divSel = d3.select(div);
  graphviz
    .transition(function () {
      return d3.transition("adot")
        .duration(options.duration)
        // ResizeObserver is currently only supported in Chrome.
        // Make sure Observable notices cell hight changes during the transition by dispatching a load event.
        // See also https://talk.observablehq.com/t/left-side-and-code-does-not-move-when-cell-content-height-changes-in-a-transition/780.
        /*.tween("update", () => () => {
          if (options.loadEvents) {
            divSel.dispatch("load");
          }
        })*/;
  });
  await new Promise(function(resolve, reject) { 
      graphviz.renderDot(string, function () {
        resolve(this);
      });
  });
  return div;
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Dependencies`
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3-graphviz", "d3-selection", "d3-transition")
)});
  const child1 = runtime.module(define1);
  main.import("slider", child1);
  main.import("button", child1);
  main.variable(observer()).define(["md"], function(md){return(
md`### Notebook internals`
)});
  main.variable(observer("logoDots")).define("logoDots", function(){return(
[`
digraph  {
}
`, `
digraph  {
  node [style=filled]
  D3 [fillcolor="#1f77b4" shape=circle URL="https://d3js.org/"]
  Graphviz [fillcolor="#d62728" shape=circle URL="https://www.graphviz.org/"]
  "d3-graphviz" [fillcolor="#2ca02c" shape=circle URL="https://github.com/magjac/d3-graphviz"]
}`, `
digraph  {
  node [style=filled]
  D3 [fillcolor="#1f77b4" shape=hexagon URL="https://d3js.org/"]
  Graphviz [fillcolor="#d62728" shape=ellipse URL="https://www.graphviz.org/"]
  "d3-graphviz" [fillcolor="#2ca02c" shape="egg" URL="https://github.com/magjac/d3-graphviz"]
}
`, `
digraph  {
  node [style=filled]
  D3 [fillcolor="#1f77b4" shape=hexagon URL="https://d3js.org/"]
  Graphviz [fillcolor="#d62728" shape=ellipse URL="https://www.graphviz.org/"]
  "d3-graphviz" [fillcolor="#2ca02c" shape="egg" URL="https://github.com/magjac/d3-graphviz"]
  D3 -> "d3-graphviz"
  Graphviz -> "d3-graphviz"
}
`]
)});
  main.variable(observer("logoDot")).define("logoDot", ["logoDots"], function(logoDots){return(
logoDots[logoDots.length - 1]
)});
  main.variable(observer("logoDotIndex")).define("logoDotIndex", ["playLogo","logoDots","Promises","logoDuration"], function*(playLogo,logoDots,Promises,logoDuration)
{
  playLogo;
  let i = this ? (this +  1) % logoDots.length : logoDots.length - 1;
  yield i;
  while (++i < logoDots.length) {
    yield Promises.delay(logoDuration + 100, i);
  }
}
);
  main.variable(observer("logoDuration")).define("logoDuration", function(){return(
1000
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Revision history`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
2018-06-10 21:34

* Refactored to utilize new features in d3-graphviz v2.2.0:
 * Re-use existing renderer
 * Use new witdh, height, fit and scale options

2018-06-04 13:36

* Support setting only one of the **width** and **height** options

2018-05-29 12:10:

* Added **zoom** option

2018-05-28 16:51:

* Added options:
 * **width**: SVG width in pixels
 * **height**: SVG height in pixels
 * **fit**: Scale the graph to fit the specified SVG size if true. N/A if neither **width** nor **height** is specified
 * **scale**: Scale the graph within the specified SVG. N/A if **fit** is true or neither **width** nor **height** is specified
 * **loadEvents**: Issue load events (see below) only when true  

2018-05-28 00:06:
* Make sure Observable left pane and code moves when cell height changes by issuing load events during the transition
 * See also [Left side and code does not move when cell content height changes in a transition](https://talk.observablehq.com/t/left-side-and-code-does-not-move-when-cell-content-height-changes-in-a-transition/780)

2018-05-27 09:12:
* Added support for options object in adot:
 * Support transition **duration**

2018-05-26 18:16:
* Added d3-graphviz logo animated transition

2018-05-26 14:10:
* Changed duration to same as d3 default; 250 ms
* Streamlined examples

2018-05-25 20:36:
* Removed console logging
`
)});
  return main;
}

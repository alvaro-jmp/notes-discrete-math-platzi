// https://observablehq.com/d/b91a18309e2d6803@53
import define1 from "./1338841536b09034@1047.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# etc`
)});
  main.variable(observer("more_info_es")).define("more_info_es", ["html","a_target_blank"], function(html,a_target_blank){return(
(link) => {
  return html `<span style="border-style: solid;padding-left:4px;padding-right:4px;border-radius: 5px;
    border-width: 1px;border-style: dotted;">
    Más info. => ${a_target_blank(link)}</span>`
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md `---
# Depedencies
`
)});
  const child1 = runtime.module(define1);
  main.import("a_target_blank", child1);
  main.variable(observer()).define(["md"], function(md){return(
md `---
# Debug
`
)});
  main.variable(observer()).define(["more_info_es"], function(more_info_es){return(
more_info_es('https://observablehq.com/d/b91a18309e2d6803')
)});
  return main;
}

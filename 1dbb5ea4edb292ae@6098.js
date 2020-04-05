// https://observablehq.com/d/1dbb5ea4edb292ae@6098
import define1 from "./1338841536b09034@1077.js";
import define2 from "./b91a18309e2d6803@53.js";
import define3 from "./65db15c5f0ffd1a8@1332.js";
import define4 from "./e93997d5089d7165@2227.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Notas - Platzi - Matemáticas discretas [FULL]`
)});
  main.variable(observer()).define(["md","a_target_blank"], function(md,a_target_blank){return(
md `**Version orginal y con js => ${a_target_blank('https://observablehq.com/d/1dbb5ea4edb292ae')}**<br> *(Tarda un rato en cargar)*.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `---
# Índice:

<ol>
<li><a href="#conn_logic">Conectores lógicos.</a></li>
<li><a href="#truth_table">Tablas de verdad.</a></li>
<li><a href="#conjuntos">Conjuntos.</a></li>
<li><a href="#theory_graf">Teoría de gráficas.</a></li>
<li><a href="#tree">Árboles.</a></li>
<li><a href="#algorithms">Algoritmos</a></li>
<li><a href="#dependencies">Dependencias.</a></li>
<li><a href="#debug_test">Debug/Test.</a></li>
<li><a href="#readme">README</a></li>
</ol>
`
)});
  main.variable(observer("conn_logic")).define("conn_logic", ["md","tex"], function(md,tex){return(
md `---
# Conectores lógicos<br>
<div style="font-size:20px"><mark>Variables para conectores lógicos: ${tex `p,q,r,s,t`}</mark></div>
<table style="font-size:16px;">
  <tr>
    <th>Conector lógico</th>
    <th>Símbolo</th>
    <th>Nombre</th>
  </tr>
  <tr>
    <td>${tex `y`}</td>
    <td>${tex `\wedge`}</td>
    <td>Conjunción</td>
  </tr>
  <tr>
    <td>${tex `o`}</td>
    <td>${tex `\vee`}</td>
    <td>Disyución debil</td>
  </tr>
  <tr>
    <td>${tex `o...o`}</td>
    <td>${tex `\triangle`}</td>
    <td>Disyución fuerte</td>
  </tr>
  <tr>
    <td>${tex `Si...\;entonces..`}</td>
    <td>${tex `\rightarrow`}</td>
    <td>Implicación</td>
  </tr>
  <tr>
    <td>${tex `Si\;y\;solo\;si`}</td>
    <td>${tex `\harr`}</td>
    <td>Equivalencia</td>
  </tr>
  <tr>
    <td>${tex `No\;es\;verdad`}</td>
    <td>${tex `\sim`}</td>
    <td>Negación</td>
  </tr>
</table>
`
)});
  main.variable(observer()).define(["md","tex","_true_","_false_"], function(md,tex,_true_,_false_){return(
md `## Conjunción<br><br>
${tex `\begin{array}{cc}
   r \colorbox{#008DD5}{\color{white} Sergió es deportista} & \colorbox{#FAB3A9}{\color{black} y} & \colorbox{#89B6A5}{\color{white} javier es ingeniero} \\
   p &  & q
\end{array}`}<br>
<table style="font-size:16px;">
  <tr>
    <th>${tex `\bf p \bf`}</th>
    <th>${tex `\bf q \bf`}</th>
    <th>${tex `\bf p \wedge q \bf`}</th>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
</table>
`
)});
  main.variable(observer()).define(["md","tex","_true_","_false_"], function(md,tex,_true_,_false_){return(
md `## Disyunción debil<br><br>
${tex `\begin{array}{cc}
   \colorbox{#008DD5}{\color{white} Está lloviendo} & \colorbox{#FAB3A9}{\color{black} o} & \colorbox{#89B6A5}{\color{white} hace frío} \\
   p &  & q
\end{array}`}<br>
<table style="font-size:16px;">
  <tr>
    <th>${tex `\bf p \bf`}</th>
    <th>${tex `\bf q \bf`}</th>
    <th>${tex `\bf p \vee q \bf`}</th>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
</table>
`
)});
  main.variable(observer()).define(["md","tex","_true_","_false_"], function(md,tex,_true_,_false_){return(
md `## Disyunción fuerte<br><br>
${tex `\begin{array}{cc}
   \colorbox{#FAB3A9}{\color{black}o} & \colorbox{#008DD5}{\color{white} está lloviendo} & \colorbox{#FAB3A9}{\color{black} o} & \colorbox{#89B6A5}{\color{white} hace frío} \\
   & p &  & q
\end{array}`}<br>
<table style="font-size:16px;">
  <tr>
    <th>${tex `\bf p \bf`}</th>
    <th>${tex `\bf q \bf`}</th>
    <th>${tex `\bf p \triangle q \bf`}</th>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
</table>
`
)});
  main.variable(observer()).define(["md","tex","_true_","_false_"], function(md,tex,_true_,_false_){return(
md `## Condicional<br><br>
${tex `\begin{array}{cc}
   \colorbox{#FAB3A9}{\color{black}Si} & \colorbox{#008DD5}{\color{white} está lloviendo} & \colorbox{#FAB3A9}{\color{black} entonces} & \colorbox{#89B6A5}{\color{white} hace frío} \\
   & p &  & q \\
   & Antecedentes &  & Consecuente
\end{array}`}<br>
<table style="font-size:16px;">
  <tr>
    <th>${tex `\bf p \bf`}</th>
    <th>${tex `\bf q \bf`}</th>
    <th>${tex `\bf p \rightarrow q \bf`}</th>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
</table>
`
)});
  main.variable(observer()).define(["md","tex","_true_","_false_"], function(md,tex,_true_,_false_){return(
md `## Bicondicional<br><br>
${tex `\begin{array}{cc}
   \colorbox{#008DD5}{\color{white} Está lloviendo} & \colorbox{#FAB3A9}{\color{black} si y solo si} & \colorbox{#89B6A5}{\color{white} hace frío} \\
   p &  & q
\end{array}`}<br>
<table style="font-size:16px;">
  <tr>
    <th>${tex `\bf p \bf`}</th>
    <th>${tex `\bf q \bf`}</th>
    <th>${tex `\bf p \harr q \bf`}</th>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
</table>
`
)});
  main.variable(observer()).define(["md","tex","html","_true_","_false_"], function(md,tex,html,_true_,_false_){return(
md `## Negación<br><br>
${tex `\begin{array}{cc}
   \colorbox{#008DD5}{\color{white} Está lloviendo} & \colorbox{#008DD5}{\color{white} Está lloviendo y hace frío} \\
   & \\
   p & (p \wedge q)
\end{array}`}<br><br>
${tex `\begin{array}{cc}
   \colorbox{#FAB3A9}{\color{black} Está lloviendo} & \colorbox{#FAB3A9}{\color{black} Está lloviendo y hace frío} \\
   & \\
   \sim p & \sim (p \wedge q)
\end{array}`}<br><br>
${html `
<table style="font-size:16px;">
  <tr>
    <th>${tex `\bf p \bf`}</th>
    <th>${tex `\bf \sim p \bf`}</th>    
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>    
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>    
  </tr>  
</table>`}

`
)});
  main.variable(observer("truth_table")).define("truth_table", ["md","html","tex","_true_","_false_"], function(md,html,tex,_true_,_false_){return(
md `---
# Tablas de verdad
<br>
## Tautología
${html `
<table style="font-size:16px;">
  <tr>
    <th>${tex `\bf p \bf`}</th>
    <th>${tex `\bf q \bf`}</th>
    <th>${tex `\bf Fórmula \bf`}</th>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
</table>`}
<br>
## Contradicción.
${html `<table style="font-size:16px;">
  <tr>
    <th>${tex `\bf p \bf`}</th>
    <th>${tex `\bf q \bf`}</th>
    <th>${tex `\bf Fórmula`}</th>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
</table>`}
<br>
## Contigencia.
${html `<table style="font-size:16px;">
  <tr>
    <th>${tex `\bf p \bf`}</th>
    <th>${tex `\bf q \bf`}</th>
    <th>${tex `\bf Fórmula`}</th>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
</table>`}
`
)});
  main.variable(observer()).define(["md","tex","html","_false_","_true_"], function(md,tex,html,_false_,_true_){return(
md `## Construcción de tablas de verdad y ejercicios
<br>
Ejemplo 1:
<br>
## ${tex `p \rarr (p\wedge\sim p) = Contingencia`}
<br>
${html `<table style="font-size:16px;">
  <tr>
    <th>${tex `\bf p \bf`}</th>
    <th>${tex `\bf \sim p \bf`}</th>
    <th>${tex `\bf p\wedge\sim p \bf`}</th>
    <th>${tex `\bf p \rarr (p\wedge\sim p) \bf`}</th>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>  
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
  </tr>
</table>`}
`
)});
  main.variable(observer()).define(["md","tex","html","_false_","_true_"], function(md,tex,html,_false_,_true_){return(
md `<br>Ejemplo 2:
<br>
## ${tex `(p \vee q) \vee \sim q = Tautología`}
<br>
${html `<table style="font-size:16px;">
  <tr>
    <th>${tex `\bf p \bf`}</th>
    <th>${tex `\bf q \bf`}</th>
    <th>${tex `\bf \sim q \bf`}</th>
    <th>${tex `\bf p \vee q \bf`}</th>
    <th>${tex `\bf (p \vee q) \vee \sim q \bf`}</th>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
  <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
  <tr>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_false_}`}</td>
    <td>${tex `${_true_}`}</td>
    <td>${tex `${_true_}`}</td>
  </tr>
</table>`}
`
)});
  main.variable(observer()).define(["md","tex","_range","tex_html","_false_","_true_","html"], function(md,tex,_range,tex_html,_false_,_true_,html){return(
md `<br>Ejemplo 3:
<br>
## ${tex `\sim (r \wedge p) \vee \sim (q \wedge p)`}
<br>
${(() => {
  const [_r,_p,_q] = [0,1,2]
  const _data = _range(0,8).map((a) => {
    const _bin = (a).toString(2).padStart(3, '0')    
    return [parseInt(_bin[_r]), parseInt(_bin[_p]), parseInt(_bin[_q])]
  })
  
  const _op1 = (_r_,_p_) => !(_r_ & _p_)
  const _op2 = (_q_,_p_) => !(_q_ & _p_)
  const _op3 = (_op1_,_op2_) => _op1_ | _op2_
  const _false = `${tex_html(_false_)}`
  const _true = `${tex_html(_true_)}`
  
  const _cont_table = _data.map((a) => {
    const _op1_ = _op1(a[_r], a[_p])
    const _op2_ = _op2(a[_q], a[_p])
    const _op3_ = _op3(_op1_,_op2_)
    return `<tr>
              <td>${a[_r] ? _true : _false}</td>
              <td>${a[_p] ? _true : _false}</td>
              <td>${a[_q] ? _true : _false}</td>
              <td>${_op1_ ? _true : _false}</td>
              <td>${_op2_ ? _true : _false}</td>
              <td>${_op3_ ? _true : _false}</td>
            </tr>`
  })
  
  return html `<table style="font-size:16px;">
            <tr>
              <th>${tex_html(`\\bf r \\bf`)}</th>
              <th>${tex_html(`\\bf p \\bf`)}</th>
              <th>${tex_html(`\\bf q \\bf`)}</th>
              <th>${tex_html(`\\bf \\sim (r \\wedge p) \\bf`)}</th>
              <th>${tex_html(`\\bf \\sim (q \\wedge p) \\bf`)}</th>
              <th>${tex_html(`\\bf \\sim (r \\wedge p) \\vee \\sim (q \\wedge p) \\bf`)}</th>    
            </tr>
            ${_cont_table}
          </table>`
})()}
`
)});
  main.variable(observer()).define(["md","tex","html","_false_","_true_","cond_bool","tex_html"], function(md,tex,html,_false_,_true_,cond_bool,tex_html){return(
md `<br>Ejemplo 4:<br><br>
Si se conoce que ${tex `(q \vee \sim r) \vee p`} es falsa.<br><br>
Determinemos ${tex `(\sim r \vee \sim p) \rarr (p \rarr \sim p)`}:
<br><br>
${html `<div style="font-size:20px">a) ${tex `(q \vee \sim r) \vee p = ${_false_}`}</div>`}
## ${tex `q = ${_false_}`}
## ${tex `r = ${_true_}`}
## ${tex `p = ${_false_}`}
<br>

${(() => {
  const [_q,_r,_p] = [0,1,0]
  const result = cond_bool((!_r | !_p), (cond_bool(_p, !_p)))
  console.log('result:', result)
  const _html = `<div style="font-size:20px">b) ${tex_html(`(\\sim r \\vee \\sim p) \\rarr (p \\rarr \\sim p) = ${result ? _true_ : _false_}`)}`
  return _html
})()}
## ${tex `q = ${_false_}`}
## ${tex `r = ${_true_}`}
## ${tex `p = ${_false_}`}
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>Ejemplo 5:
<br><br>
Contruir la proposición de acuerdo al circuito lógico.`
)});
  main.variable(observer()).define(["html"], function(html){return(
html `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="750"
   height="300"
   viewBox="0 0 198.43749 79.375002"
   version="1.1"
   id="svg8"
   inkscape:version="0.92.4 (unknown)"
   sodipodi:docname="ej__1_1.svg">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="0.98994949"
     inkscape:cx="384.92064"
     inkscape:cy="222.80124"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="true"
     objecttolerance="10000"
     guidetolerance="10000"
     inkscape:window-width="1366"
     inkscape:window-height="739"
     inkscape:window-x="0"
     inkscape:window-y="256"
     inkscape:window-maximized="1"
     units="px">
    <inkscape:grid
       type="xygrid"
       id="grid815" />
  </sodipodi:namedview>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-217.62501)">
    <path
       style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.0385676;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 34.114817,220.61743 v 1.0204 7.14305 H 20.849078 19.828677 v 1.02041 26.53135 H 6.5630699 v 1.0204 H 19.828677 v 26.53134 1.0204 h 43.924604 v 8.47594 h 0.07591 v 0.0105 h 14.286146 v -1.0204 H 64.773684 v -15.629 H 89.903355 V 275.7214 H 64.773684 63.753281 v 1.02042 7.14306 H 20.849078 v -27.55169 -26.53135 h 13.265739 v 8.16348 0.51034 h 14.286008 v -1.02053 H 35.135217 v -15.8173 h 13.265608 v -1.0204 H 35.135217 Z"
       id="rect817"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 49.760703,238.15 a 1.2279776,1.4735733 0 0 1 -1.227979,1.47357 1.2279776,1.4735733 0 0 1 -1.22797,-1.47357 1.2279776,1.4735733 0 0 1 1.22797,-1.47357 1.2279776,1.4735733 0 0 1 1.227979,1.47357 z"
       id="path901"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 49.739994,221.18384 a 1.2279776,1.4735733 0 0 1 -1.227978,1.47358 1.2279776,1.4735733 0 0 1 -1.227979,-1.47358 1.2279776,1.4735733 0 0 1 1.227979,-1.47357 1.2279776,1.4735733 0 0 1 1.227978,1.47357 z"
       id="path901-5"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 79.467208,292.91323 a 1.2279776,1.4735733 0 0 1 -1.227962,1.47357 1.2279776,1.4735733 0 0 1 -1.227983,-1.47357 1.2279776,1.4735733 0 0 1 1.227983,-1.47357 1.2279776,1.4735733 0 0 1 1.227962,1.47357 z"
       id="path901-9"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 91.118362,276.14297 a 1.2279776,1.4735733 0 0 1 -1.227984,1.47357 1.2279776,1.4735733 0 0 1 -1.227961,-1.47357 1.2279776,1.4735733 0 0 1 1.227961,-1.47356 1.2279776,1.4735733 0 0 1 1.227984,1.47356 z"
       id="path901-5-4"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.0385676;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="M 88.197781,228.7809 H 73.911703 v 1.02045 h 14.286078 z"
       id="rect817-7-8"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.0385676;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 59.625631,220.61743 v 1.0204 h 13.2656 v 15.81674 h -13.2656 v 1.0204 h 14.286003 v -1.0204 -15.81674 -1.0204 h -1.020403 z m 30.613071,0 v 1.0204 7.14305 H 75.952566 v 1.02041 h 14.286136 v 8.16348 h 1.020414 v -16.32694 h 13.265594 v -1.0204 z m 21.939278,8.67367 v 1.02039 7.14308 H 97.891855 v 1.02054 h 14.286125 v 8.16346 0.51019 h 14.28613 v -1.02051 h -13.26572 v -15.81676 h 13.26572 v -1.02039 h -13.26572 z"
       id="rect817-7-4-47"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 58.265753,238.15 a 1.2279776,1.4735733 0 0 0 1.227979,1.47356 1.2279776,1.4735733 0 0 0 1.22797,-1.47356 1.2279776,1.4735733 0 0 0 -1.22797,-1.47357 1.2279776,1.4735733 0 0 0 -1.227979,1.47357 z"
       id="path901-0"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 58.286469,221.18384 a 1.2279776,1.4735733 0 0 0 1.227979,1.47358 1.2279776,1.4735733 0 0 0 1.227979,-1.47358 1.2279776,1.4735733 0 0 0 -1.227979,-1.47357 1.2279776,1.4735733 0 0 0 -1.227979,1.47357 z"
       id="path901-5-6"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.0385676;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 90.238656,237.4546 h 14.286064 v 1.02044 H 90.238656 Z"
       id="rect817-7-3-9"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 105.86388,221.18384 a 1.2279776,1.4735733 0 0 1 -1.22799,1.47358 1.2279776,1.4735733 0 0 1 -1.22798,-1.47358 1.2279776,1.4735733 0 0 1 1.22798,-1.47357 1.2279776,1.4735733 0 0 1 1.22799,1.47357 z"
       id="path901-5-1"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 127.82396,246.82368 a 1.2279776,1.4735733 0 0 1 -1.22799,1.47358 1.2279776,1.4735733 0 0 1 -1.22796,-1.47358 1.2279776,1.4735733 0 0 1 1.22796,-1.47357 1.2279776,1.4735733 0 0 1 1.22799,1.47357 z"
       id="path901-3"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 127.80323,229.85755 a 1.2279776,1.4735733 0 0 1 -1.22797,1.47356 1.2279776,1.4735733 0 0 1 -1.22799,-1.47356 1.2279776,1.4735733 0 0 1 1.22799,-1.47358 1.2279776,1.4735733 0 0 1 1.22797,1.47358 z"
       id="path901-5-9"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.04431457;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 116.50051,220.28493 h 18.86085 v 1.02042 h -18.86085 z"
       id="rect817-7-4-9-1"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 117.3151,220.89516 a 1.2279778,1.4735733 0 0 1 -1.22798,1.47358 1.2279778,1.4735733 0 0 1 -1.22798,-1.47358 1.2279778,1.4735733 0 0 1 1.22798,-1.47357 1.2279778,1.4735733 0 0 1 1.22798,1.47357 z"
       id="path901-5-1-9"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.0385676;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 149.36657,220.20472 v 1.02039 h 13.26561 v 15.81675 h -8.41003 v -8.08034 h -14.286 v 1.02041 h 13.2656 v 15.81674 h -13.2656 v 1.0204 h 14.286 v -1.0204 -7.73642 h 9.43042 v -1.02039 -7.65328 h 13.26573 v 26.53135 1.02039 26.53122 h -47.27247 v -7.25765 -0.18051 -0.83989 h -25.59686 v 1.0204 h 24.57634 v 16.16077 H 110.7763 v 1.0204 h 18.86086 v -0.0144 h 0.009 v -8.88864 h 47.27246 1.02041 v -27.55173 h 13.26561 v -1.02039 h -13.2656 V 228.36816 H 163.6529 v -8.16348 z"
       id="rect817-7-5"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 148.02738,220.77108 a 1.2279778,1.4735733 0 0 0 1.228,1.47357 1.2279778,1.4735733 0 0 0 1.22797,-1.47357 1.2279778,1.4735733 0 0 0 -1.22797,-1.47357 1.2279778,1.4735733 0 0 0 -1.228,1.47357 z"
       id="path901-5-62"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 138.57624,246.49404 a 1.2279778,1.4735733 0 0 0 1.22797,1.47358 1.2279778,1.4735733 0 0 0 1.22799,-1.47358 1.2279778,1.4735733 0 0 0 -1.22799,-1.47357 1.2279778,1.4735733 0 0 0 -1.22797,1.47357 z"
       id="path901-3-9"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 138.59697,229.52791 a 1.2279778,1.4735733 0 0 0 1.22797,1.47356 1.2279778,1.4735733 0 0 0 1.22798,-1.47356 1.2279778,1.4735733 0 0 0 -1.22798,-1.47359 1.2279778,1.4735733 0 0 0 -1.22797,1.47359 z"
       id="path901-5-9-8"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 134.3629,220.67485 a 1.2279778,1.4735733 0 0 0 1.22798,1.47357 1.2279778,1.4735733 0 0 0 1.22798,-1.47357 1.2279778,1.4735733 0 0 0 -1.22798,-1.47358 1.2279778,1.4735733 0 0 0 -1.22798,1.47358 z"
       id="path901-5-62-7"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.03474074;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 87.208888,292.37031 h 11.591673 v 1.02044 H 87.208888 Z"
       id="rect817-7-4-9-2"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 100.13971,292.93672 a 1.2279778,1.4735733 0 0 1 -1.227979,1.47358 1.2279778,1.4735733 0 0 1 -1.227969,-1.47358 1.2279778,1.4735733 0 0 1 1.227969,-1.47357 1.2279778,1.4735733 0 0 1 1.227979,1.47357 z"
       id="path901-5-1-8"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 111.59094,292.98485 a 1.2279778,1.4735733 0 0 1 -1.22798,1.47357 1.2279778,1.4735733 0 0 1 -1.22799,-1.47357 1.2279778,1.4735733 0 0 1 1.22799,-1.47358 1.2279778,1.4735733 0 0 1 1.22798,1.47358 z"
       id="path901-5-1-9-9"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 104.86351,275.80371 a 1.2279778,1.4735733 0 0 1 -1.22799,1.47357 1.2279778,1.4735733 0 0 1 -1.22797,-1.47357 1.2279778,1.4735733 0 0 1 1.22797,-1.47358 1.2279778,1.4735733 0 0 1 1.22799,1.47358 z"
       id="path901-5-1-9-9-0"
       inkscape:connector-curvature="0" />
    <path
       style="opacity:1;fill:#4e72be;fill-opacity:1;stroke:#000000;stroke-width:0.01856471;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="m 88.82959,292.91664 a 1.2279778,1.4735733 0 0 1 -1.227984,1.47358 1.2279778,1.4735733 0 0 1 -1.227972,-1.47358 1.2279778,1.4735733 0 0 1 1.227972,-1.47357 1.2279778,1.4735733 0 0 1 1.227984,1.47357 z"
       id="path901-9-6"
       inkscape:connector-curvature="0" />
    <text
       xml:space="preserve"
       style="font-style:italic;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.93888903px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="52.382126"
       y="221.80568"
       id="text1407"><tspan
         sodipodi:role="line"
         id="tspan1405"
         x="52.382126"
         y="221.80568"
         style="font-style:italic;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.93888903px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.26458332">p</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:italic;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.93888903px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="52.555721"
       y="238.85687"
       id="text1407-5"><tspan
         sodipodi:role="line"
         id="tspan1427"
         x="52.555721"
         y="238.85687">q</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:italic;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.93888903px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="131.463"
       y="230.69205"
       id="text1407-5-9"><tspan
         style="stroke-width:0.26458332"
         sodipodi:role="line"
         id="tspan1427-1"
         x="131.463"
         y="230.69205">q</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:italic;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.93888903px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="81.848885"
       y="294.18314"
       id="text1407-5-4"><tspan
         sodipodi:role="line"
         id="tspan1475"
         x="81.848885"
         y="294.18314">r</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:italic;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.93888903px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="93.660637"
       y="277.17422"
       id="text1407-5-4-1"><tspan
         sodipodi:role="line"
         id="tspan1495"
         x="93.660637"
         y="277.17422">~r</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:italic;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.93888903px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="129.68649"
       y="248.07005"
       id="text1407-5-4-1-7"><tspan
         style="stroke-width:0.26458332"
         sodipodi:role="line"
         id="tspan1495-5"
         x="129.68649"
         y="248.07005">~r</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:italic;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.93888903px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="109.34289"
       y="222.68536"
       id="text1407-5-4-8"><tspan
         style="stroke-width:0.26458332"
         sodipodi:role="line"
         id="tspan1475-7"
         x="109.34289"
         y="222.68536">r</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:italic;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.93888903px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="100.71582"
       y="294.04636"
       id="text1407-0"><tspan
         sodipodi:role="line"
         id="tspan1551"
         x="100.71582"
         y="294.04636">~p</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:italic;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.93888903px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Italic';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="138.26514"
       y="221.94716"
       id="text1407-5-8"><tspan
         sodipodi:role="line"
         id="tspan1571"
         x="138.26514"
         y="221.94716">~q</tspan></text>
  </g>
</svg>
`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## <mark>${tex `((p \vee q) \wedge ((r \wedge \sim q) \vee (q \vee \sim r))) \vee ( \sim r \vee (r \wedge \sim p))`}</mark>`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `<br>Ejemplo 6:
<br><br>
Si se conoce que...
<br>
## ${tex `((\sim p \vee q) \rarr (q \harr r)) \vee (q \wedge s)`}
<br>
es Falsa, siendo ${tex `p`} una proposición verdadera, determina los valores de verdad de ${tex `q,r,\;y\;s`}.
<br><br>

`
)});
  main.variable(observer("p__1_6")).define("p__1_6", function(){return(
true
)});
  main.variable(observer("q__1_6")).define("q__1_6", function(){return(
true
)});
  main.variable(observer("r__1_6")).define("r__1_6", function(){return(
false
)});
  main.variable(observer("s__1_6")).define("s__1_6", function(){return(
false
)});
  main.variable(observer("result__1_6")).define("result__1_6", ["p__1_6","q__1_6","r__1_6","s__1_6","cond_bool"], function(p__1_6,q__1_6,r__1_6,s__1_6,cond_bool){return(
(() => {
  const p = p__1_6
  const q = q__1_6
  const r = r__1_6
  const s = s__1_6
  const result = ((cond_bool((!p | q),(q === r))) | (q & s))
  return result
})()
)});
  main.variable(observer()).define(["md","tex","t_or_f","result__1_6","p__1_6","q__1_6","r__1_6","s__1_6"], function(md,tex,t_or_f,result__1_6,p__1_6,q__1_6,r__1_6,s__1_6){return(
md `## ${tex `Si\;((\sim p \vee q) \rarr (q \harr r)) \vee (q \wedge s) = ${t_or_f(result__1_6)}`}
<br><mark>Para que sea falsa debe cumplirse lo siguiente:</mark>
## ${tex `p = ${t_or_f(p__1_6)}`}
## ${tex `q = ${t_or_f(q__1_6)}`}
## ${tex `r = ${t_or_f(r__1_6)}`}
## ${tex `s = ${t_or_f(s__1_6)}`}
`
)});
  main.variable(observer("conjuntos")).define("conjuntos", ["md"], function(md){return(
md `---
# Conjuntos
`
)});
  main.variable(observer()).define(["md","tex","_range"], function(md,tex,_range){return(
md `Un <a href="https://es.wikipedia.org/wiki/Conjunto" target="_blank">conjunto</a> es una colección de elementos con características similares considerada en sí misma como un objeto. Los elementos de un conjunto, pueden ser las siguientes: **personas, números, colores, letras, figuras, etc**. Se dice que un elemento (o miembro) pertenece al conjunto si está definido como incluido de algún modo dentro de él.
<br><br>
Los siguientes conjuntos son iguales:
<br><br>
## ${tex `A = \{ ${_range(1,5).toString()} \}`}
## ${tex `A = \{ 1,3,4,2 \}`}
## ${tex `A = \{ 1,2,2,3,4 \}`}
`
)});
  main.variable(observer()).define(["md","tex","_range","html"], function(md,tex,_range,html){return(
md `## Releación de pertenencia
<br>
Con relación al conjunto ${tex `A = \{ ${_range(1,5).toString()} \}`}, podemos decir los siguiente:
<br><br>
${html `
  <table style="font-size:20px;">
  <tr>
    <th>${tex `\bf \isin = Pertenece \bf`}</th>
    <th>${tex `\bf \notin = No\;pertenece\bf`}</th>
  </tr>
  <tr>
    <td>${tex 
      `\begin{matrix}
         1 \isin A & 3 \isin A \\
         2\isin A & 4\isin A 
      \end{matrix}`
    }</td>
    <td>${tex 
      `\begin{matrix}
         7 \notin A & 4.5 \notin A 
      \end{matrix}`
    }</td>
  </tr>
  </table>
`}

`
)});
  main.variable(observer()).define(["md","html","tex","_range"], function(md,html,tex,_range){return(
md `## Determinación de un conjunto y cardinalidad
<br>
${html `
<table style="font-size:16px;">
  <tr>
    <th>Por extensión</th>
    <th>Por comprensión</th>
  <tr>
  <tr>
    <td>${tex `A = \{ ${_range(2,9)} \}`}</td>
    <td>${tex `A = \{ x|x\;\textit{es un entero par, positivo}\;\wedge 1 < x < 9 \}`}</td>    
  <tr>
  <tr>
    <td>${tex `A = \{ a,e,i,o,u \}`}</td>
    <td>${tex `A = \{ x|x\;\textit{es una vocal} \}`}</td>
  </tr>
  <tr>
    <td>${tex `A = \{ perro,gato,pajaro,pez \}`}</td>
    <td>${tex `A = \{ x|x\;\textit{es un animal doméstico} \}`}</td>
  </tr>
  <tr>
    <td>Finitos</br><br>Normalmente son nombrados por extensión, a excepción de que sean muy grandes.</td>
    <td>Infinitos</br><br>Siempre se va a nombrar por compresión. Ejemplo: El conjunto de los números naturales. </td>
  </tr>
</table>
`}
`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `La **cardinalidad**, es el número de elementos que hacen parte de un conjunto. Se representa con el símbolo ${tex `\# \; y \; ||`}<br>
<br>
Ejemplo: `
)});
  main.variable(observer()).define(["md","tex","conjunto_A__2_1"], function(md,tex,conjunto_A__2_1){return(
md `## ${tex `A = \{ ${conjunto_A__2_1} \}`}`
)});
  main.variable(observer("conjunto_A__2_1")).define("conjunto_A__2_1", ["_range"], function(_range){return(
_range(1,5)
)});
  main.variable(observer()).define(["md","tex","cardinalidad_conjunto_A__2_1"], function(md,tex,cardinalidad_conjunto_A__2_1){return(
md  `La cardinalidad del conjunto ${tex `A`} es ${tex `${cardinalidad_conjunto_A__2_1}`}.`
)});
  main.variable(observer("cardinalidad_conjunto_A__2_1")).define("cardinalidad_conjunto_A__2_1", ["conjunto_A__2_1"], function(conjunto_A__2_1){return(
conjunto_A__2_1.length
)});
  main.variable(observer()).define(["md","tex","_range"], function(md,tex,_range){return(
md `## Subconjuntos
<br>
Un **subconjunto** es un conjunto incluido dentro de otro.<br><br>
Suponga que ${tex `A`} y ${tex `B`} son conjuntos. Si todo elemento de B esta contenido en ${tex `A`} se dice que ${tex `B`} es un subconjunto de ${tex `A`} y se representa como ${tex `\sube`}.
<br><br>
## ${tex `C = \{ ${_range(1,6)}\} \; \; D = \{ 1,4 \}`}
## ${tex `D \sube C`}
`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## Conjuntos especiales
<br>
Un **conjunto nulo** o un conjunto que no existe, todo elemento x donde x es diferente x, es un conjunto donde no tenemos ningún elemento.
<br>
## <mark>${tex `A = \{  \}`}</mark>
## ${tex `A = \{ \textit{Números pares } 1 < x < 1.5  \}`}
## ${tex `A = \emptyset	`}
## ${tex `A = \{ x|x \not = x \} A`}
## ${tex `\emptyset	 \not = \{ \emptyset	\}`}
<br>
El **conjunto unitario** está compuesto de un solo elemento.
<br>
## ${tex `A = \{ 2 \}`}
## ${tex `A = \{ azul \}`}
## ${tex `A = \{ ballena \}`}
<br>
Un **conjunto universal** es aquel que contiene otros subconjuntos.`
)});
  main.variable(observer()).define(["html"], function(html){return(
Promise.resolve(html `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   id="svg8"
   version="1.1"
   viewBox="0 0 110.86042 135.46666"
   height="512"
   width="419"
   sodipodi:docname="set_u__04-02-202__19-42.svg"
   inkscape:version="0.92.4 (unknown)">
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10000"
     gridtolerance="10000"
     guidetolerance="10000"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1280"
     inkscape:window-height="995"
     id="namedview375"
     showgrid="false"
     inkscape:zoom="0.5"
     inkscape:cx="-31.448587"
     inkscape:cy="278.80282"
     inkscape:window-x="1366"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg8"
     units="px" />
  <defs
     id="defs2" />
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="matrix(2.0875679,0,0,2.1763948,-5.3260623,-506.08825)"
     style="display:inline;opacity:1"
     id="layer1">
    <rect
       y="235.08212"
       x="2.6458333"
       height="59.60714"
       width="52.916664"
       id="rect18"
       style="fill:none;stroke:#000000;stroke-width:0.18725033" />
    <circle
       r="11.90625"
       cy="280.23605"
       cx="17.412088"
       id="path28"
       style="fill:none;stroke:#000000;stroke-width:0.26458332" />
    <circle
       r="13.229166"
       cy="249.92902"
       cx="18.180672"
       id="path30"
       style="fill:none;stroke:#000000;stroke-width:0.26458332" />
    <circle
       r="11.90625"
       cy="267.08145"
       cx="40.525795"
       id="path32"
       style="fill:none;stroke:#000000;stroke-width:0.26458332" />
    <text
       id="text96"
       y="234.59273"
       x="40.160896"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222223px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       xml:space="preserve"><tspan
         id="tspan106">U</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222223px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="5.3889384"
       y="272.03873"
       id="text102"><tspan
         y="272.03873"
         x="5.3889384"
         id="tspan104">A</tspan></text>
    <text
       id="text110"
       y="239.42137"
       x="27.923916"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222223px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       xml:space="preserve"><tspan
         y="239.42137"
         x="27.923916"
         id="tspan116">B</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222223px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="47.106209"
       y="256.09012"
       id="text114"><tspan
         y="256.09012"
         x="47.106209"
         id="tspan118">C</tspan></text>
  </g>
  <text
     xml:space="preserve"
     style="font-style:normal;font-weight:normal;font-size:21.8013136px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.54502922;-inkscape-font-specification:'sans-serif, Normal';font-stretch:normal;font-variant:normal;text-anchor:start;text-align:start;writing-mode:lr;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;"
     x="14.356922"
     y="109.15977"
     id="text446"><tspan
       sodipodi:role="line"
       id="tspan1632">1 3</tspan></text>
  <text
     xml:space="preserve"
     style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:14.53409199px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.54502922;"
     x="13.505725"
     y="43.050228"
     id="text450"><tspan
       sodipodi:role="line"
       id="tspan1630">5 6 7</tspan></text>
  <text
     xml:space="preserve"
     style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.62720299px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.54502922"
     x="65.275467"
     y="72.426048"
     id="text454"><tspan
       sodipodi:role="line"
       id="tspan1640"
       x="65.275467"
       y="72.426048">1 3 5</tspan><tspan
       sodipodi:role="line"
       id="tspan1642"
       x="65.275467"
       y="86.960052">6 7 9</tspan></text>
</svg>
`).then(x => x)
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## ${tex `A = \{1,3\}\;\;B = \{5,6,7\}\;\;C = \{ 1,3,5,7,9 \}`}
## ${tex `U = \{x|x \textit{ es un número natural } < 10\}`}`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## Operaciones entre conjuntos
<br>
La **<a href="https://es.wikipedia.org/wiki/Uni%C3%B3n_de_conjuntos" target="_blank">unión</a>** ${tex `( \cup )`} de dos (o más) conjuntos es una operación que resulta en otro conjunto, cuyos elementos son los mismos de los conjuntos iniciales
`
)});
  main.variable(observer()).define(["md","tex","U__2_2"], function(md,tex,U__2_2){return(
md `## ${tex `U = \{ ${U__2_2.toString()} \}`}`
)});
  main.variable(observer("U__2_2")).define("U__2_2", ["_range"], function(_range){return(
_range(1,11)
)});
  main.variable(observer()).define(["md","tex","A__2_2"], function(md,tex,A__2_2){return(
md `## ${tex `A = \{ ${A__2_2.toString()} \}`}`
)});
  main.variable(observer("A__2_2")).define("A__2_2", function(){return(
[5,6,7,8,9,10]
)});
  main.variable(observer()).define(["md","tex","B__2_2"], function(md,tex,B__2_2){return(
md `## ${tex `B = \{ ${B__2_2.toString()} \}`}`
)});
  main.variable(observer("B__2_2")).define("B__2_2", function(){return(
[2,4,6,8,10]
)});
  main.variable(observer()).define(["md","tex","union_A_B__2_2"], function(md,tex,union_A_B__2_2){return(
md `## ${tex `A \cup B = \{ ${union_A_B__2_2.toString()} \}`}`
)});
  main.variable(observer("union_A_B__2_2")).define("union_A_B__2_2", ["union_two_arrays","A__2_2","B__2_2"], function(union_two_arrays,A__2_2,B__2_2){return(
union_two_arrays(A__2_2, B__2_2)
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `La **<a href="https://es.wikipedia.org/wiki/Intersecci%C3%B3n_de_conjuntos" target="_blank">intersección</a>** ${tex `( \cap )`} de dos conjuntos es una operación que resulta en otro conjunto que contiene los elementos comunes a los conjuntos de partida.`
)});
  main.variable(observer()).define(["md","tex","intsc_A_B__2_2"], function(md,tex,intsc_A_B__2_2){return(
md `## ${tex `A \cap B = \{ ${intsc_A_B__2_2.toString()} \}`}`
)});
  main.variable(observer("intsc_A_B__2_2")).define("intsc_A_B__2_2", ["intsc_two_arrays","A__2_2","B__2_2"], function(intsc_two_arrays,A__2_2,B__2_2){return(
intsc_two_arrays(A__2_2, B__2_2)
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `La **<a href="https://es.wikipedia.org/wiki/Diferencia_de_conjuntos" target="_blank">diferencia</a>** ${tex `( - )`} de dos conjuntos es una operación que da como resultado otro conjunto con los elementos del primer conjunto sin los elementos del segundo conjunto`
)});
  main.variable(observer()).define(["md","tex","substract_A_B__2_2"], function(md,tex,substract_A_B__2_2){return(
md `## ${tex `A - B = \{ ${substract_A_B__2_2.toString()} \}`}`
)});
  main.variable(observer("substract_A_B__2_2")).define("substract_A_B__2_2", ["substract_two_arrays","A__2_2","B__2_2"], function(substract_two_arrays,A__2_2,B__2_2){return(
substract_two_arrays(A__2_2, B__2_2)
)});
  main.variable(observer()).define(["md","tex","substract_B_A__2_2"], function(md,tex,substract_B_A__2_2){return(
md `## ${tex `B - A = \{ ${substract_B_A__2_2.toString()} \}`}`
)});
  main.variable(observer("substract_B_A__2_2")).define("substract_B_A__2_2", ["substract_two_arrays","B__2_2","A__2_2"], function(substract_two_arrays,B__2_2,A__2_2){return(
substract_two_arrays(B__2_2, A__2_2)
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `El **<a href="https://es.wikipedia.org/wiki/Complemento_de_un_conjunto" target="_blank">complemento de un conjunto</a>** o **conjunto complementario** ${tex `( N^C,N' )`} es otro conjunto que contiene todos los elementos que no están en el conjunto original.`
)});
  main.variable(observer()).define(["md","tex","a_c__2_2"], function(md,tex,a_c__2_2){return(
md `## ${tex `A^C = A' = \{ ${a_c__2_2.toString()} \}`}`
)});
  main.variable(observer("a_c__2_2")).define("a_c__2_2", ["substract_two_arrays","U__2_2","A__2_2"], function(substract_two_arrays,U__2_2,A__2_2){return(
substract_two_arrays(U__2_2, A__2_2)
)});
  main.variable(observer()).define(["md","tex","b_c__2_2"], function(md,tex,b_c__2_2){return(
md `## ${tex `B' = \{ ${b_c__2_2.toString()} \}`}`
)});
  main.variable(observer("b_c__2_2")).define("b_c__2_2", ["substract_two_arrays","U__2_2","B__2_2"], function(substract_two_arrays,U__2_2,B__2_2){return(
substract_two_arrays(U__2_2, B__2_2)
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Propiedades de los conjuntos`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### <a href="https://es.wikipedia.org/wiki/Leyes_de_De_Morgan" target="_blank">Ley de morgan</a>`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## <mark>${tex `(A \cup B)' = A' \cap B'`}</mark><br>
`
)});
  main.variable(observer()).define(["html"], function(html){return(
Promise.resolve(html `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="750"
   height="230"
   viewBox="0 0 198.43751 60.854168"
   version="1.1"
   id="svg8"
   inkscape:version="0.92.4 (unknown)"
   sodipodi:docname="set_morgan_law__05-02-202__11-50.svg">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="1"
     inkscape:cx="406.22509"
     inkscape:cy="134.40633"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="true"
     units="px"
     showguides="true"
     inkscape:guide-bbox="true"
     inkscape:window-width="1280"
     inkscape:window-height="995"
     inkscape:window-x="1366"
     inkscape:window-y="0"
     inkscape:window-maximized="1">
    <inkscape:grid
       type="xygrid"
       id="grid10" />
    <sodipodi:guide
       position="-34.395835,30.427084"
       orientation="0,1"
       id="guide14"
       inkscape:locked="false"
       inkscape:label=""
       inkscape:color="rgb(0,0,255)" />
    <sodipodi:guide
       position="99.218754,153.45834"
       orientation="1,0"
       id="guide16"
       inkscape:locked="false"
       inkscape:label=""
       inkscape:color="rgb(0,0,255)" />
    <sodipodi:guide
       position="29.104168,44.979168"
       orientation="0,1"
       id="guide134"
       inkscape:locked="false" />
  </sodipodi:namedview>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-236.14582)">
    <path
       style="opacity:1;fill:#ff0000;stroke:#000000;stroke-width:0.2652342"
       d="M 5.2916698,244.08331 H 95.249998 v 47.625 H 5.2916698 Z"
       id="rect12" />
    <path
       style="opacity:1;fill:none;stroke:#000000;stroke-width:0.26693115"
       d="M 55.919296,267.80652 A 18.084671,19.305628 0 0 1 37.834625,287.11215 18.084671,19.305628 0 0 1 19.749954,267.80652 18.084671,19.305628 0 0 1 37.834625,248.50089 18.084671,19.305628 0 0 1 55.919296,267.80652 Z"
       id="path35" />
    <path
       style="opacity:1;fill:none;stroke:#000000;stroke-width:0.26693115"
       d="M 81.939083,267.49088 A 18.084671,19.305628 0 0 1 63.854412,286.7965 18.084671,19.305628 0 0 1 45.769741,267.49088 18.084671,19.305628 0 0 1 63.854412,248.18525 18.084671,19.305628 0 0 1 81.939083,267.49088 Z"
       id="path35-6" />
    <g
       aria-label="A"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.29166698px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       id="text112">
      <path
         d="m 17.683675,248.67735 -0.707967,1.91978 h 1.418518 z m -0.294555,-0.51418 h 0.591695 l 1.470194,3.85764 h -0.542602 l -0.3514,-0.9896 h -1.738912 l -0.3514,0.9896 h -0.550354 z"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.29166698px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.26458335"
         id="path4827" />
    </g>
    <g
       aria-label="B"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.29166698px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       id="text112-2">
      <path
         d="m 82.144048,250.7036 v 1.41335 h 0.837158 q 0.421163,0 0.622701,-0.17311 0.204122,-0.1757 0.204122,-0.53485 0,-0.36174 -0.204122,-0.53227 -0.201538,-0.17312 -0.622701,-0.17312 z m 0,-1.58646 v 1.16272 h 0.772563 q 0.382405,0 0.568441,-0.14211 0.188619,-0.1447 0.188619,-0.43925 0,-0.29198 -0.188619,-0.43667 -0.186036,-0.14469 -0.568441,-0.14469 z m -0.521932,-0.42892 h 1.333252 q 0.596863,0 0.919841,0.24805 0.322977,0.24805 0.322977,0.70538 0,0.35399 -0.165364,0.56328 -0.165365,0.20928 -0.485759,0.26096 0.38499,0.0827 0.596863,0.34623 0.214457,0.26097 0.214457,0.65371 0,0.51676 -0.351399,0.7984 -0.3514,0.28164 -0.999939,0.28164 h -1.384929 z"
         style=""
         id="path4824" />
    </g>
    <g
       aria-label="U"
       transform="scale(1.1207614,0.89225059)"
       style="font-style:normal;font-weight:normal;font-size:9.44298649px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.23607466"
       id="text138">
      <path
         d="m 65.795244,266.49499 h 0.468 v 2.09102 q 0,0.5533 0.200571,0.79767 0.200571,0.24207 0.650128,0.24207 0.44725,0 0.647822,-0.24207 0.200571,-0.24437 0.200571,-0.79767 v -2.09102 h 0.467999 v 2.14865 q 0,0.67318 -0.334285,1.01669 -0.33198,0.34351 -0.982107,0.34351 -0.652433,0 -0.986719,-0.34351 -0.33198,-0.34351 -0.33198,-1.01669 z"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.72149324px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.23607466"
         id="path4821" />
    </g>
    <rect
       style="opacity:1;fill:#ff0000;stroke:#000000;stroke-width:0.26523417"
       id="rect12-1"
       width="89.958328"
       height="47.624992"
       x="105.83334"
       y="244.08333" />
    <ellipse
       style="opacity:1;fill:none;stroke:#000000;stroke-width:0.26693115"
       id="path35-2"
       cx="138.3763"
       cy="267.80655"
       rx="18.084671"
       ry="19.305628" />
    <ellipse
       style="opacity:1;fill:none;stroke:#000000;stroke-width:0.26693115"
       id="path35-6-8"
       cx="164.39609"
       cy="267.49091"
       rx="18.084671"
       ry="19.305628" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.29166698px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       x="116.41667"
       y="252.02083"
       id="text112-9"><tspan
         sodipodi:role="line"
         id="tspan110-3"
         x="116.41667"
         y="252.02083"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.29166698px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.26458335">A</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.29166698px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       x="181.64444"
       y="252.54588"
       id="text112-2-6"><tspan
         style="stroke-width:0.26458335"
         sodipodi:role="line"
         id="tspan132-8"
         x="181.64444"
         y="252.54588">B</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:9.44298649px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.23607467"
       x="155.09325"
       y="269.93701"
       id="text138-0"
       transform="scale(1.1207614,0.89225058)"><tspan
         sodipodi:role="line"
         id="tspan136-2"
         x="155.09325"
         y="269.93701"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.72149324px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.23607467">U</tspan></text>
    <path
       style="opacity:1;fill:#ff6600;fill-opacity:1;stroke:#000000;stroke-width:0.34722221"
       d="m 190.65818,166.34188 c -6.98424,-8.06201 -13.08379,-20.94973 -15.46703,-32.68026 -4.41181,-21.71534 1.16849,-45.357896 14.64858,-62.063019 l 1.7488,-2.167188 1.2652,1.400424 c 0.69586,0.770234 2.18473,2.64059 3.30859,4.156349 7.21663,9.733061 11.83521,21.14001 13.77471,34.020654 0.73483,4.88022 0.82891,15.3724 0.18057,20.13889 -1.86498,13.71117 -7.45305,27.14936 -15.4855,37.23959 -0.87415,1.09809 -1.72787,1.99652 -1.89715,1.99652 -0.16928,0 -1.10383,-0.91888 -2.07677,-2.04196 z"
       id="path5488"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.34722221"
       d="m 136.12721,191.59643 c -3.78557,-0.39533 -10.09831,-1.81583 -13.88035,-3.12337 -6.61067,-2.28548 -14.76668,-6.83839 -20.22806,-11.29189 -2.728054,-2.22459 -8.231747,-7.78157 -10.526303,-10.62821 -6.470783,-8.0277 -11.528184,-18.55007 -14.05637,-29.24551 -1.605493,-6.792 -1.919641,-9.78096 -1.897691,-18.05555 0.01666,-6.28079 0.157222,-8.41555 0.790609,-12.00736 3.961834,-22.466745 16.16831,-40.464821 34.765575,-51.260787 13.91623,-8.078557 30.75969,-10.558495 46.66267,-6.870349 10.74035,2.490854 21.58234,8.455036 30.42128,16.734754 l 2.567,2.404587 -2.49249,3.225055 c -8.03225,10.393023 -13.19244,22.73412 -15.18472,36.31577 -0.72075,4.91349 -0.81572,15.33159 -0.18358,20.13888 1.95357,14.85642 7.66535,28.21917 16.81543,39.33984 l 2.0852,2.53428 -2.40445,2.44279 c -14.01171,14.23509 -33.70259,21.38878 -53.25375,19.34707 z"
       id="path5490"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#00ff00;fill-opacity:1;stroke:#000000;stroke-width:0.34722221"
       d="m 231.81376,190.07849 c -9.18538,-1.48383 -18.23609,-5.00217 -25.91364,-10.0736 -3.36602,-2.22343 -8.95556,-6.74679 -11.07208,-8.96013 l -1.17624,-1.23005 2.45421,-3.23279 c 5.45883,-7.19061 9.16389,-14.20368 11.91846,-22.55976 8.23237,-24.97306 3.28784,-52.487872 -13.08311,-72.803659 l -2.33247,-2.89451 2.56575,-2.601085 c 13.84466,-14.035324 33.70897,-21.273603 52.66624,-19.190847 12.4811,1.371245 24.79424,6.520843 34.48354,14.421692 5.11254,4.168874 11.02585,10.791986 14.69405,16.45787 11.28094,17.424459 14.80723,39.500689 9.59314,60.057569 -6.74947,26.61025 -27.42014,46.93536 -53.0106,52.1244 -4.89214,0.99199 -16.98247,1.26108 -21.78725,0.4849 z"
       id="path5492"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.49104637"
       d="m 190.72665,165.79936 c -3.8554,-4.26747 -9.2088,-13.86084 -12.1417,-21.75807 -4.93281,-13.28233 -5.71709,-29.83636 -2.09695,-44.261342 2.37593,-9.467231 6.59512,-18.350033 12.60061,-26.528489 l 2.48001,-3.377348 1.65189,1.94019 c 8.34444,9.800781 14.5768,24.332409 16.40896,38.259819 0.74923,5.69539 0.3199,19.38514 -0.76285,24.3246 -1.22079,5.56914 -4.3438,14.59046 -6.64873,19.20594 -2.30314,4.61188 -6.7636,11.49708 -8.5127,13.14028 l -1.14903,1.07946 z"
       id="path5494"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.49104637"
       d="m 234.14963,189.88523 c -7.07378,-0.59165 -16.86834,-3.74251 -23.95752,-7.707 -3.86383,-2.16078 -9.72687,-6.47523 -13.36201,-9.83273 l -2.70075,-2.49449 1.22665,-1.64437 c 9.13942,-12.25176 14.08479,-23.7498 16.16545,-37.58483 0.68437,-4.55058 0.68437,-17.35839 0,-21.90897 -2.09942,-13.959763 -7.9588,-27.45175 -16.4475,-37.872523 l -2.16253,-2.654731 3.30972,-3.058663 c 9.7968,-9.053667 20.842,-14.813162 33.50907,-17.473232 5.72661,-1.202582 17.35499,-1.205079 23.01768,-0.0049 9.18815,1.947317 16.49429,4.881899 23.52428,9.448763 35.10009,22.801918 42.95275,73.715686 16.57886,107.491266 -9.95942,12.75448 -25.93868,22.55984 -40.28716,24.72144 -4.78012,0.72013 -13.44445,0.99068 -18.41424,0.57501 z"
       id="path5496"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.5"
       d="m 571.34829,167.06568 c -2.51905,-2.67676 -6.78888,-9.10608 -9.31993,-14.03352 -6.26851,-12.20349 -8.98469,-25.83265 -8.01405,-40.21265 0.95158,-14.097737 5.98459,-27.889127 14.26399,-39.086027 l 3.29287,-4.453205 1.68307,1.957117 c 6.99981,8.139526 12.71451,19.799626 15.53988,31.707115 1.862,7.84737 2.18212,20.89195 0.72235,29.43566 -1.26504,7.40404 -3.64955,14.77321 -6.83934,21.13648 -2.36774,4.72338 -7.46159,12.58815 -9.13246,14.10026 -0.84728,0.76678 -0.98965,0.73105 -2.19638,-0.55123 z"
       id="path5516"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35355338"
       d="m 135.43669,191.20458 c -3.44727,-0.45194 -10.32384,-2.08992 -13.58401,-3.23567 -7.14653,-2.51156 -16.43209,-8.06705 -21.80813,-13.04765 -12.649178,-11.71878 -19.668816,-24.36055 -23.200181,-41.78156 -0.723691,-3.57013 -0.803518,-4.94775 -0.793405,-13.69223 0.0107,-9.24954 0.05867,-9.94486 0.98576,-14.28704 2.554193,-11.963027 7.529398,-22.961046 14.322239,-31.660262 4.78372,-6.126245 11.520737,-12.106724 18.445107,-16.373808 11.03785,-6.801983 25.24414,-10.233061 37.94915,-9.165417 15.05275,1.264933 27.4928,6.77839 39.60107,17.551293 l 3.02591,2.692195 -2.75273,3.656434 c -17.44342,23.169953 -20.42433,54.561365 -7.66433,80.711645 2.32021,4.75503 6.68612,11.54933 9.72551,15.13499 l 1.79814,2.12132 -2.92276,2.78651 c -10.96191,10.4509 -23.45496,16.56884 -37.62813,18.42678 -4.23888,0.55567 -11.88841,0.63586 -15.49921,0.16247 z"
       id="path848"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35355338"
       d="m 191.02084,165.58901 c -4.06374,-4.75328 -9.8901,-15.40856 -12.39693,-22.67155 -2.71309,-7.86059 -3.90089,-15.49778 -3.8702,-24.88421 0.0416,-12.71078 2.71461,-23.651065 8.45099,-34.588193 1.93919,-3.697329 5.65711,-9.504007 7.49424,-11.704592 l 1.00333,-1.201827 1.96633,2.445715 c 7.14316,8.884648 12.17783,20.074765 15.01908,33.381637 0.90848,4.2548 0.9083,21.8725 -2.8e-4,26.8163 -0.85617,4.65872 -4.46744,15.33861 -6.75963,19.99083 -2.76668,5.61524 -8.39092,14.04063 -9.34045,13.99246 -0.12569,-0.006 -0.83061,-0.71583 -1.56648,-1.57657 z"
       id="path850"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35355338"
       d="m 233.61521,189.42453 c -7.6203,-0.73591 -18.97595,-4.73144 -25.58079,-9.0007 -3.1652,-2.04594 -8.59228,-6.21938 -11.35792,-8.73428 l -2.04625,-1.86073 2.16239,-3.0052 c 7.05019,-9.79809 11.56291,-19.55136 13.9047,-30.05204 1.45534,-6.52577 1.7416,-10.16858 1.53748,-19.56495 -0.21428,-9.86431 -0.85365,-13.73571 -3.65386,-22.1243 -2.76268,-8.27614 -6.55175,-15.548576 -11.60266,-22.269181 -1.37401,-1.828215 -2.7218,-3.626095 -2.99509,-3.995289 -0.45636,-0.616512 -0.28524,-0.864434 2.0981,-3.039658 1.42724,-1.302617 3.56003,-3.147012 4.73953,-4.098656 8.69705,-7.016942 21.02183,-12.528765 31.32945,-14.010995 4.18298,-0.60151 15.25416,-0.487046 19.31008,0.199645 7.21363,1.221309 15.86972,4.369528 22.09803,8.037048 35.73621,21.043167 45.55357,71.214726 20.75172,106.051546 -9.08228,12.75701 -24.64932,23.33011 -38.84476,26.38326 -5.74209,1.235 -15.35238,1.71199 -21.85015,1.08448 z"
       id="path852"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000"
       d="m 511.92522,190.68296 c -20.95688,-3.96937 -38.39951,-17.41227 -48.02158,-37.00987 -6.29006,-12.81116 -7.87739,-19.68023 -7.87739,-34.08889 0,-14.38941 1.58913,-21.2839 7.83674,-33.999996 8.83134,-17.974892 24.73671,-31.112538 43.59314,-36.007414 9.24171,-2.399025 27.06543,-1.698434 35.98291,1.414368 7.80782,2.725459 16.98165,8.132774 22.66263,13.358009 l 4.16263,3.828691 -4.9035,7.117986 c -5.43943,7.895943 -10.16801,19.175656 -11.83099,28.222016 -1.58006,8.59532 -1.33831,23.56187 0.51477,31.86894 1.98066,8.87897 8.13478,22.34723 13.39438,29.31352 l 3.94876,5.2301 -5.544,5.06691 c -14.30947,13.07804 -35.3575,19.2012 -53.9185,15.68563 z"
       id="path854"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000"
       d="m 605.43904,188.48458 c -3.025,-0.80739 -8.2,-2.73754 -11.5,-4.28921 -6.43662,-3.02652 -18.35133,-11.56017 -19.18932,-13.74393 -0.28032,-0.7305 0.86823,-3.06793 2.55233,-5.19429 4.53315,-5.72356 9.7411,-16.61194 12.27947,-25.67295 3.14039,-11.20996 3.15846,-28.75142 0.041,-39.791483 -2.5769,-9.125742 -7.57306,-19.445545 -12.60708,-26.040458 -1.96702,-2.576949 -3.57641,-5.079104 -3.57641,-5.560346 0,-1.352243 7.50612,-7.816624 13.61046,-11.721519 13.06083,-8.354912 29.66856,-11.72096 44.76416,-9.072782 16.09406,2.823335 31.553,12.16436 41.05853,24.809513 10.64793,14.164871 15.54757,28.796925 15.55984,46.467115 0.023,33.10854 -21.40774,62.21773 -51.45309,69.88834 -7.53119,1.92272 -24.19842,1.8815 -31.5399,-0.078 z"
       id="path856"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:10.58333397px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       x="96.134705"
       y="269.97925"
       id="text860"><tspan
         sodipodi:role="line"
         id="tspan858"
         x="96.134705"
         y="269.97925"
         style="stroke-width:0.26458335">=</tspan></text>
  </g>
</svg>
`).then(x => x)
)});
  main.variable(observer("a_u_b_comp__2_2")).define("a_u_b_comp__2_2", ["substract_two_arrays","U__2_2","union_two_arrays","A__2_2","B__2_2"], function(substract_two_arrays,U__2_2,union_two_arrays,A__2_2,B__2_2){return(
substract_two_arrays(U__2_2, union_two_arrays(A__2_2, B__2_2))
)});
  main.variable(observer("a_comp_intsc_b_comp__2_2")).define("a_comp_intsc_b_comp__2_2", ["intsc_two_arrays","a_c__2_2","b_c__2_2"], function(intsc_two_arrays,a_c__2_2,b_c__2_2){return(
intsc_two_arrays(a_c__2_2, b_c__2_2)
)});
  main.variable(observer()).define(["compare_two_arrays","a_u_b_comp__2_2","a_comp_intsc_b_comp__2_2"], function(compare_two_arrays,a_u_b_comp__2_2,a_comp_intsc_b_comp__2_2){return(
compare_two_arrays(a_u_b_comp__2_2, a_comp_intsc_b_comp__2_2)
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `<br>
## <mark>${tex `(A \cap B)' = A' \cup B'`}</mark><br>
`
)});
  main.variable(observer()).define(["html"], function(html){return(
Promise.resolve(html `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="750"
   height="230"
   viewBox="0 0 198.43751 60.854168"
   version="1.1"
   id="svg8"
   inkscape:version="0.92.4 (unknown)"
   sodipodi:docname="set_morgan_law__05-02-202__11-50__v2.svg">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="1"
     inkscape:cx="406.22509"
     inkscape:cy="134.40633"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="true"
     units="px"
     showguides="true"
     inkscape:guide-bbox="true"
     inkscape:window-width="1280"
     inkscape:window-height="995"
     inkscape:window-x="1366"
     inkscape:window-y="0"
     inkscape:window-maximized="1">
    <inkscape:grid
       type="xygrid"
       id="grid10" />
    <sodipodi:guide
       position="-34.395835,30.427084"
       orientation="0,1"
       id="guide14"
       inkscape:locked="false"
       inkscape:label=""
       inkscape:color="rgb(0,0,255)" />
    <sodipodi:guide
       position="99.218754,153.45834"
       orientation="1,0"
       id="guide16"
       inkscape:locked="false"
       inkscape:label=""
       inkscape:color="rgb(0,0,255)" />
    <sodipodi:guide
       position="29.104168,44.979168"
       orientation="0,1"
       id="guide134"
       inkscape:locked="false" />
  </sodipodi:namedview>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-236.14582)">
    <path
       style="opacity:1;fill:#ff0000;stroke:#000000;stroke-width:0.2652342"
       d="M 5.2916698,244.08331 H 95.249998 v 47.625 H 5.2916698 Z"
       id="rect12" />
    <path
       style="opacity:1;fill:none;stroke:#000000;stroke-width:0.26693115"
       d="M 55.919296,267.80652 A 18.084671,19.305628 0 0 1 37.834625,287.11215 18.084671,19.305628 0 0 1 19.749954,267.80652 18.084671,19.305628 0 0 1 37.834625,248.50089 18.084671,19.305628 0 0 1 55.919296,267.80652 Z"
       id="path35" />
    <path
       style="opacity:1;fill:none;stroke:#000000;stroke-width:0.26693115"
       d="M 81.939083,267.49088 A 18.084671,19.305628 0 0 1 63.854412,286.7965 18.084671,19.305628 0 0 1 45.769741,267.49088 18.084671,19.305628 0 0 1 63.854412,248.18525 18.084671,19.305628 0 0 1 81.939083,267.49088 Z"
       id="path35-6" />
    <g
       aria-label="A"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.29166698px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       id="text112">
      <path
         d="m 17.683675,248.67735 -0.707967,1.91978 h 1.418518 z m -0.294555,-0.51418 h 0.591695 l 1.470194,3.85764 h -0.542602 l -0.3514,-0.9896 h -1.738912 l -0.3514,0.9896 h -0.550354 z"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.29166698px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.26458335"
         id="path4827" />
    </g>
    <g
       aria-label="B"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.29166698px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       id="text112-2">
      <path
         d="m 82.144048,250.7036 v 1.41335 h 0.837158 q 0.421163,0 0.622701,-0.17311 0.204122,-0.1757 0.204122,-0.53485 0,-0.36174 -0.204122,-0.53227 -0.201538,-0.17312 -0.622701,-0.17312 z m 0,-1.58646 v 1.16272 h 0.772563 q 0.382405,0 0.568441,-0.14211 0.188619,-0.1447 0.188619,-0.43925 0,-0.29198 -0.188619,-0.43667 -0.186036,-0.14469 -0.568441,-0.14469 z m -0.521932,-0.42892 h 1.333252 q 0.596863,0 0.919841,0.24805 0.322977,0.24805 0.322977,0.70538 0,0.35399 -0.165364,0.56328 -0.165365,0.20928 -0.485759,0.26096 0.38499,0.0827 0.596863,0.34623 0.214457,0.26097 0.214457,0.65371 0,0.51676 -0.351399,0.7984 -0.3514,0.28164 -0.999939,0.28164 h -1.384929 z"
         style=""
         id="path4824" />
    </g>
    <g
       aria-label="U"
       transform="scale(1.1207614,0.89225059)"
       style="font-style:normal;font-weight:normal;font-size:9.44298649px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.23607466"
       id="text138">
      <path
         d="m 65.795244,266.49499 h 0.468 v 2.09102 q 0,0.5533 0.200571,0.79767 0.200571,0.24207 0.650128,0.24207 0.44725,0 0.647822,-0.24207 0.200571,-0.24437 0.200571,-0.79767 v -2.09102 h 0.467999 v 2.14865 q 0,0.67318 -0.334285,1.01669 -0.33198,0.34351 -0.982107,0.34351 -0.652433,0 -0.986719,-0.34351 -0.33198,-0.34351 -0.33198,-1.01669 z"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.72149324px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.23607466"
         id="path4821" />
    </g>
    <rect
       style="opacity:1;fill:#ff0000;stroke:#000000;stroke-width:0.26523417"
       id="rect12-1"
       width="89.958328"
       height="47.624992"
       x="105.83334"
       y="244.08333" />
    <ellipse
       style="opacity:1;fill:none;stroke:#000000;stroke-width:0.26693115"
       id="path35-2"
       cx="138.3763"
       cy="267.80655"
       rx="18.084671"
       ry="19.305628" />
    <ellipse
       style="opacity:1;fill:none;stroke:#000000;stroke-width:0.26693115"
       id="path35-6-8"
       cx="164.39609"
       cy="267.49091"
       rx="18.084671"
       ry="19.305628" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.29166698px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       x="116.41667"
       y="252.02083"
       id="text112-9"><tspan
         sodipodi:role="line"
         id="tspan110-3"
         x="116.41667"
         y="252.02083"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.29166698px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.26458335">A</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.29166698px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       x="181.64444"
       y="252.54588"
       id="text112-2-6"><tspan
         style="stroke-width:0.26458335"
         sodipodi:role="line"
         id="tspan132-8"
         x="181.64444"
         y="252.54588">B</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:9.44298649px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.23607467"
       x="155.09325"
       y="269.93701"
       id="text138-0"
       transform="scale(1.1207614,0.89225058)"><tspan
         sodipodi:role="line"
         id="tspan136-2"
         x="155.09325"
         y="269.93701"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.72149324px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.23607467">U</tspan></text>
    <path
       style="opacity:1;fill:#ff6600;fill-opacity:1;stroke:#000000;stroke-width:0.34722221"
       d="m 190.65818,166.34188 c -6.98424,-8.06201 -13.08379,-20.94973 -15.46703,-32.68026 -4.41181,-21.71534 1.16849,-45.357896 14.64858,-62.063019 l 1.7488,-2.167188 1.2652,1.400424 c 0.69586,0.770234 2.18473,2.64059 3.30859,4.156349 7.21663,9.733061 11.83521,21.14001 13.77471,34.020654 0.73483,4.88022 0.82891,15.3724 0.18057,20.13889 -1.86498,13.71117 -7.45305,27.14936 -15.4855,37.23959 -0.87415,1.09809 -1.72787,1.99652 -1.89715,1.99652 -0.16928,0 -1.10383,-0.91888 -2.07677,-2.04196 z"
       id="path5488"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.34722221"
       d="m 136.12721,191.59643 c -3.78557,-0.39533 -10.09831,-1.81583 -13.88035,-3.12337 -6.61067,-2.28548 -14.76668,-6.83839 -20.22806,-11.29189 -2.728054,-2.22459 -8.231747,-7.78157 -10.526303,-10.62821 -6.470783,-8.0277 -11.528184,-18.55007 -14.05637,-29.24551 -1.605493,-6.792 -1.919641,-9.78096 -1.897691,-18.05555 0.01666,-6.28079 0.157222,-8.41555 0.790609,-12.00736 3.961834,-22.466745 16.16831,-40.464821 34.765575,-51.260787 13.91623,-8.078557 30.75969,-10.558495 46.66267,-6.870349 10.74035,2.490854 21.58234,8.455036 30.42128,16.734754 l 2.567,2.404587 -2.49249,3.225055 c -8.03225,10.393023 -13.19244,22.73412 -15.18472,36.31577 -0.72075,4.91349 -0.81572,15.33159 -0.18358,20.13888 1.95357,14.85642 7.66535,28.21917 16.81543,39.33984 l 2.0852,2.53428 -2.40445,2.44279 c -14.01171,14.23509 -33.70259,21.38878 -53.25375,19.34707 z"
       id="path5490"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#00ff00;fill-opacity:1;stroke:#000000;stroke-width:0.34722221"
       d="m 231.81376,190.07849 c -9.18538,-1.48383 -18.23609,-5.00217 -25.91364,-10.0736 -3.36602,-2.22343 -8.95556,-6.74679 -11.07208,-8.96013 l -1.17624,-1.23005 2.45421,-3.23279 c 5.45883,-7.19061 9.16389,-14.20368 11.91846,-22.55976 8.23237,-24.97306 3.28784,-52.487872 -13.08311,-72.803659 l -2.33247,-2.89451 2.56575,-2.601085 c 13.84466,-14.035324 33.70897,-21.273603 52.66624,-19.190847 12.4811,1.371245 24.79424,6.520843 34.48354,14.421692 5.11254,4.168874 11.02585,10.791986 14.69405,16.45787 11.28094,17.424459 14.80723,39.500689 9.59314,60.057569 -6.74947,26.61025 -27.42014,46.93536 -53.0106,52.1244 -4.89214,0.99199 -16.98247,1.26108 -21.78725,0.4849 z"
       id="path5492"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.49104637"
       d="m 190.72665,165.79936 c -3.8554,-4.26747 -9.2088,-13.86084 -12.1417,-21.75807 -4.93281,-13.28233 -5.71709,-29.83636 -2.09695,-44.261342 2.37593,-9.467231 6.59512,-18.350033 12.60061,-26.528489 l 2.48001,-3.377348 1.65189,1.94019 c 8.34444,9.800781 14.5768,24.332409 16.40896,38.259819 0.74923,5.69539 0.3199,19.38514 -0.76285,24.3246 -1.22079,5.56914 -4.3438,14.59046 -6.64873,19.20594 -2.30314,4.61188 -6.7636,11.49708 -8.5127,13.14028 l -1.14903,1.07946 z"
       id="path5494"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.49104637"
       d="m 234.14963,189.88523 c -7.07378,-0.59165 -16.86834,-3.74251 -23.95752,-7.707 -3.86383,-2.16078 -9.72687,-6.47523 -13.36201,-9.83273 l -2.70075,-2.49449 1.22665,-1.64437 c 9.13942,-12.25176 14.08479,-23.7498 16.16545,-37.58483 0.68437,-4.55058 0.68437,-17.35839 0,-21.90897 -2.09942,-13.959763 -7.9588,-27.45175 -16.4475,-37.872523 l -2.16253,-2.654731 3.30972,-3.058663 c 9.7968,-9.053667 20.842,-14.813162 33.50907,-17.473232 5.72661,-1.202582 17.35499,-1.205079 23.01768,-0.0049 9.18815,1.947317 16.49429,4.881899 23.52428,9.448763 35.10009,22.801918 42.95275,73.715686 16.57886,107.491266 -9.95942,12.75448 -25.93868,22.55984 -40.28716,24.72144 -4.78012,0.72013 -13.44445,0.99068 -18.41424,0.57501 z"
       id="path5496"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.5"
       d="m 571.34829,167.06568 c -2.51905,-2.67676 -6.78888,-9.10608 -9.31993,-14.03352 -6.26851,-12.20349 -8.98469,-25.83265 -8.01405,-40.21265 0.95158,-14.097737 5.98459,-27.889127 14.26399,-39.086027 l 3.29287,-4.453205 1.68307,1.957117 c 6.99981,8.139526 12.71451,19.799626 15.53988,31.707115 1.862,7.84737 2.18212,20.89195 0.72235,29.43566 -1.26504,7.40404 -3.64955,14.77321 -6.83934,21.13648 -2.36774,4.72338 -7.46159,12.58815 -9.13246,14.10026 -0.84728,0.76678 -0.98965,0.73105 -2.19638,-0.55123 z"
       id="path5516"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35355338"
       d="m 135.43669,191.20458 c -3.44727,-0.45194 -10.32384,-2.08992 -13.58401,-3.23567 -7.14653,-2.51156 -16.43209,-8.06705 -21.80813,-13.04765 -12.649178,-11.71878 -19.668816,-24.36055 -23.200181,-41.78156 -0.723691,-3.57013 -0.803518,-4.94775 -0.793405,-13.69223 0.0107,-9.24954 0.05867,-9.94486 0.98576,-14.28704 2.554193,-11.963027 7.529398,-22.961046 14.322239,-31.660262 4.78372,-6.126245 11.520737,-12.106724 18.445107,-16.373808 11.03785,-6.801983 25.24414,-10.233061 37.94915,-9.165417 15.05275,1.264933 27.4928,6.77839 39.60107,17.551293 l 3.02591,2.692195 -2.75273,3.656434 c -17.44342,23.169953 -20.42433,54.561365 -7.66433,80.711645 2.32021,4.75503 6.68612,11.54933 9.72551,15.13499 l 1.79814,2.12132 -2.92276,2.78651 c -10.96191,10.4509 -23.45496,16.56884 -37.62813,18.42678 -4.23888,0.55567 -11.88841,0.63586 -15.49921,0.16247 z"
       id="path848"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35355338"
       d="m 191.02084,165.58901 c -4.06374,-4.75328 -9.8901,-15.40856 -12.39693,-22.67155 -2.71309,-7.86059 -3.90089,-15.49778 -3.8702,-24.88421 0.0416,-12.71078 2.71461,-23.651065 8.45099,-34.588193 1.93919,-3.697329 5.65711,-9.504007 7.49424,-11.704592 l 1.00333,-1.201827 1.96633,2.445715 c 7.14316,8.884648 12.17783,20.074765 15.01908,33.381637 0.90848,4.2548 0.9083,21.8725 -2.8e-4,26.8163 -0.85617,4.65872 -4.46744,15.33861 -6.75963,19.99083 -2.76668,5.61524 -8.39092,14.04063 -9.34045,13.99246 -0.12569,-0.006 -0.83061,-0.71583 -1.56648,-1.57657 z"
       id="path850"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.35355338"
       d="m 233.61521,189.42453 c -7.6203,-0.73591 -18.97595,-4.73144 -25.58079,-9.0007 -3.1652,-2.04594 -8.59228,-6.21938 -11.35792,-8.73428 l -2.04625,-1.86073 2.16239,-3.0052 c 7.05019,-9.79809 11.56291,-19.55136 13.9047,-30.05204 1.45534,-6.52577 1.7416,-10.16858 1.53748,-19.56495 -0.21428,-9.86431 -0.85365,-13.73571 -3.65386,-22.1243 -2.76268,-8.27614 -6.55175,-15.548576 -11.60266,-22.269181 -1.37401,-1.828215 -2.7218,-3.626095 -2.99509,-3.995289 -0.45636,-0.616512 -0.28524,-0.864434 2.0981,-3.039658 1.42724,-1.302617 3.56003,-3.147012 4.73953,-4.098656 8.69705,-7.016942 21.02183,-12.528765 31.32945,-14.010995 4.18298,-0.60151 15.25416,-0.487046 19.31008,0.199645 7.21363,1.221309 15.86972,4.369528 22.09803,8.037048 35.73621,21.043167 45.55357,71.214726 20.75172,106.051546 -9.08228,12.75701 -24.64932,23.33011 -38.84476,26.38326 -5.74209,1.235 -15.35238,1.71199 -21.85015,1.08448 z"
       id="path852"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000"
       d="m 511.92522,190.68296 c -20.95688,-3.96937 -38.39951,-17.41227 -48.02158,-37.00987 -6.29006,-12.81116 -7.87739,-19.68023 -7.87739,-34.08889 0,-14.38941 1.58913,-21.2839 7.83674,-33.999996 8.83134,-17.974892 24.73671,-31.112538 43.59314,-36.007414 9.24171,-2.399025 27.06543,-1.698434 35.98291,1.414368 7.80782,2.725459 16.98165,8.132774 22.66263,13.358009 l 4.16263,3.828691 -4.9035,7.117986 c -5.43943,7.895943 -10.16801,19.175656 -11.83099,28.222016 -1.58006,8.59532 -1.33831,23.56187 0.51477,31.86894 1.98066,8.87897 8.13478,22.34723 13.39438,29.31352 l 3.94876,5.2301 -5.544,5.06691 c -14.30947,13.07804 -35.3575,19.2012 -53.9185,15.68563 z"
       id="path854"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:#000000"
       d="m 605.43904,188.48458 c -3.025,-0.80739 -8.2,-2.73754 -11.5,-4.28921 -6.43662,-3.02652 -18.35133,-11.56017 -19.18932,-13.74393 -0.28032,-0.7305 0.86823,-3.06793 2.55233,-5.19429 4.53315,-5.72356 9.7411,-16.61194 12.27947,-25.67295 3.14039,-11.20996 3.15846,-28.75142 0.041,-39.791483 -2.5769,-9.125742 -7.57306,-19.445545 -12.60708,-26.040458 -1.96702,-2.576949 -3.57641,-5.079104 -3.57641,-5.560346 0,-1.352243 7.50612,-7.816624 13.61046,-11.721519 13.06083,-8.354912 29.66856,-11.72096 44.76416,-9.072782 16.09406,2.823335 31.553,12.16436 41.05853,24.809513 10.64793,14.164871 15.54757,28.796925 15.55984,46.467115 0.023,33.10854 -21.40774,62.21773 -51.45309,69.88834 -7.53119,1.92272 -24.19842,1.8815 -31.5399,-0.078 z"
       id="path856"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:10.58333397px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       x="96.134705"
       y="269.97925"
       id="text860"><tspan
         sodipodi:role="line"
         id="tspan858"
         x="96.134705"
         y="269.97925"
         style="stroke-width:0.26458335">=</tspan></text>
    <path
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:#000000"
       d="m 133.38848,190.16086 c -24.18601,-4.07252 -44.623672,-22.22494 -53.442936,-47.46719 -2.580326,-7.38533 -2.79508,-9.15249 -2.79508,-23 0,-13.8475 0.214754,-15.61466 2.79508,-22.999997 7.718275,-22.09103 23.735356,-38.524858 43.965036,-45.10897 6.66283,-2.168534 10.19792,-2.688858 18.71451,-2.75456 16.1613,-0.124676 28.35047,4.281609 41.51934,15.008898 l 5.52991,4.504636 -2.86974,3.674998 c -4.8154,6.166627 -7.91223,12.23703 -11.3126,22.174998 -3.04172,8.889757 -3.25426,10.399297 -3.30871,23.499997 -0.0486,11.69288 0.31477,15.28694 2.20501,21.80932 2.68251,9.2561 5.91369,15.93476 11.82194,24.43525 l 4.34028,6.24458 -6.21272,5.17096 c -14.29361,11.89686 -34.08076,17.64747 -50.94932,14.80708 z"
       id="path923"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:#000000"
       d="m 227.43354,187.71754 c -8.29337,-2.11424 -17.43593,-6.56539 -24.54607,-11.9505 -3.43069,-2.59836 -6.44771,-5.06423 -6.7045,-5.47973 -0.25679,-0.41549 1.15478,-3.16349 3.13682,-6.10665 4.84387,-7.19274 9.71671,-18.05397 11.68759,-26.05088 2.15919,-8.76095 2.1631,-28.08517 0.007,-36.87222 -2.00391,-8.168368 -7.86288,-20.941209 -12.67902,-27.64078 l -3.64965,-5.076893 3.71944,-3.570165 c 5.05784,-4.854848 13.30864,-9.90572 21.71944,-13.295943 5.89553,-2.376367 8.84191,-2.892527 18.67383,-3.271369 10.02723,-0.386367 12.70221,-0.137451 18.96476,1.764738 14.58354,4.429616 25.96256,12.102276 34.33274,23.149927 29.99446,39.589155 13.64118,97.163785 -32.07167,112.914055 -7.89488,2.72016 -24.73837,3.48836 -32.59121,1.48641 z"
       id="path925"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:#000000"
       d="m 504.07985,187.42237 c -10.25146,-3.47699 -18.23354,-8.27676 -25.33513,-15.23449 -35.04012,-34.33033 -26.6878,-94.688415 16.13093,-116.570162 9.20867,-4.705926 16.51909,-6.427216 27.20954,-6.406682 17.8063,0.0342 29.7313,4.478897 43.95829,16.384168 l 2.91838,2.442132 -4.11555,6.328169 c -5.6247,8.64868 -8.86754,16.048761 -11.37087,25.948105 -2.90919,11.50429 -2.2441,30.86216 1.42173,41.38006 3.07854,8.83287 6.97132,16.60783 11.49841,22.96545 l 3.53575,4.96544 -5.72057,5.19874 c -6.46248,5.87296 -17.11779,11.4804 -26.23001,13.80374 -3.57685,0.91199 -10.26267,1.55773 -16,1.54533 -8.06318,-0.0174 -11.31887,-0.51757 -17.9009,-2.75 z"
       id="path927"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
    <path
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:#000000"
       d="m 611.12509,188.56346 c -9.61707,-1.49768 -23.50069,-8.08835 -30.83341,-14.63688 l -4.73981,-4.23291 4.03906,-6 c 8.77745,-13.03889 12.98872,-27.4649 13.0168,-44.59003 0.027,-16.48714 -4.04174,-29.708828 -13.53845,-43.993912 -2.51864,-3.788586 -4.3043,-7.333389 -3.96811,-7.877342 1.52237,-2.463253 13.15244,-10.435775 19.89305,-13.63688 38.31614,-18.19625 83.30647,7.22459 91.21222,51.537544 1.75898,9.85935 1.74543,15.92473 -0.0587,26.27034 -2.79348,16.01899 -9.77314,29.02871 -21.65549,40.36466 -12.06349,11.50878 -23.57614,16.39567 -39.86716,16.92283 -5.775,0.18688 -11.85,0.12954 -13.5,-0.12742 z"
       id="path929"
       inkscape:connector-curvature="0"
       transform="matrix(0.26458334,0,0,0.26458334,0,236.14582)" />
  </g>
</svg>
`).then(x => x)
)});
  main.variable(observer("a_intsc_b_comp__2_2")).define("a_intsc_b_comp__2_2", ["substract_two_arrays","U__2_2","intsc_two_arrays","A__2_2","B__2_2"], function(substract_two_arrays,U__2_2,intsc_two_arrays,A__2_2,B__2_2){return(
substract_two_arrays(U__2_2,intsc_two_arrays(A__2_2, B__2_2))
)});
  main.variable(observer("a_comp_u_b_comp__2_2")).define("a_comp_u_b_comp__2_2", ["union_two_arrays","a_c__2_2","b_c__2_2"], function(union_two_arrays,a_c__2_2,b_c__2_2){return(
union_two_arrays(a_c__2_2, b_c__2_2)
)});
  main.variable(observer()).define(["compare_two_arrays","a_intsc_b_comp__2_2","a_comp_u_b_comp__2_2"], function(compare_two_arrays,a_intsc_b_comp__2_2,a_comp_u_b_comp__2_2){return(
compare_two_arrays(a_intsc_b_comp__2_2, a_comp_u_b_comp__2_2)
)});
  main.variable(observer()).define(["md","tex","u__2_3"], function(md,tex,u__2_3){return(
md `<br>
**Ejercicio 1.** Determinar ${tex `A,B\;y\;C`}, sabiendo que ${tex `U = \{ ${u__2_3.toString()} \}`}:
<ol>
<li>${tex `A,B,C`} no son vacíos</li>
<li>${tex `C \sube B`}</li>
<li>${tex `B - C = \{ 3,5,7,8 \}`}
<li>${tex `A \cap C = \emptyset	`}</li>
<li>${tex `(A \cap B) \cup C= \{ 3,4,8,9 \}`}</li>
<li>${tex `(A \cup B \cup C)' =  \{ 6 \}`}</li>
</ol>
`
)});
  main.variable(observer()).define(["html"], function(html){return(
Promise.resolve(html `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="500"
   height="500"
   viewBox="0 0 132.29167 132.29167"
   version="1.1"
   id="svg8"
   inkscape:version="0.92.4 (unknown)"
   sodipodi:docname="ej__4_6.svg">
  <defs
     id="defs2">
    <linearGradient
       inkscape:collect="always"
       id="linearGradient888">
      <stop
         style="stop-color:#ffff00;stop-opacity:1;"
         offset="0"
         id="stop884" />
      <stop
         style="stop-color:#ffff00;stop-opacity:0;"
         offset="1"
         id="stop886" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient888"
       id="linearGradient890"
       x1="46.207249"
       y1="276.03707"
       x2="51.679783"
       y2="276.03707"
       gradientUnits="userSpaceOnUse" />
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="0.98994949"
     inkscape:cx="264.89344"
     inkscape:cy="265.49054"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="false"
     units="px"
     inkscape:window-width="1280"
     inkscape:window-height="995"
     inkscape:window-x="1366"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     objecttolerance="10000"
     guidetolerance="20" />
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-164.70832)">
    <ellipse
       style="opacity:0.5;fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.29716241"
       id="path815"
       cx="39.154987"
       cy="217.22003"
       rx="35.396923"
       ry="33.793304" />
    <ellipse
       style="opacity:0.5;fill:#ffff00;fill-opacity:1;stroke:#000000;stroke-width:0.30661568"
       id="path817"
       cx="80.314499"
       cy="241.00702"
       rx="41.004856"
       ry="41.539394" />
    <ellipse
       style="opacity:0.5;fill:#2a7fff;fill-opacity:1;stroke:#000000;stroke-width:0.37243631"
       id="path819"
       cx="89.802551"
       cy="254.90506"
       rx="20.525827"
       ry="20.659462" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:14.20962429px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.35524061"
       x="156.23793"
       y="165.42079"
       id="text823"
       transform="rotate(29.332542)"><tspan
         sodipodi:role="line"
         id="tspan829"
         x="156.23793"
         y="165.42079"
         style="stroke-width:0.35524061">3</tspan><tspan
         sodipodi:role="line"
         id="tspan831"
         x="156.23793"
         y="183.18282"
         style="stroke-width:0.35524061">8</tspan></text>
    <flowRoot
       xml:space="preserve"
       id="flowRoot833"
       style="fill:black;fill-opacity:1;stroke:none;font-family:sans-serif;font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;letter-spacing:0px;word-spacing:0px"><flowRegion
         id="flowRegion835"><rect
           id="rect837"
           width="133.34013"
           height="57.578693"
           x="47.477169"
           y="151.49738" /></flowRegion><flowPara
         id="flowPara839" /></flowRoot>    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:16.93333435px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       x="14.967093"
       y="212.00827"
       id="text843"><tspan
         sodipodi:role="line"
         id="tspan841"
         x="14.967093"
         y="212.00827"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:16.93333435px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.26458335">1 2</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:16.93333435px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       x="81.249939"
       y="226.7081"
       id="text847"><tspan
         sodipodi:role="line"
         id="tspan845"
         x="81.249939"
         y="226.7081"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:16.93333435px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.26458335">5 7</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:16.93333435px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       x="76.706352"
       y="260.65134"
       id="text851"><tspan
         sodipodi:role="line"
         id="tspan849"
         x="76.706352"
         y="260.65134"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:16.93333435px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.26458335">4 9</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:10.58333397px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       x="6.6817389"
       y="190.62672"
       id="text855"><tspan
         sodipodi:role="line"
         id="tspan853"
         x="6.6817389"
         y="190.62672"
         style="stroke-width:0.2;fill:#ff0000;stroke-miterlimit:4;stroke-dasharray:none;stroke:#000000;stroke-opacity:1">A</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:10.58333397px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffff00;fill-opacity:1;stroke:#000000;stroke-width:0.2;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0"
       x="45.168552"
       y="279.89471"
       id="text859"><tspan
         sodipodi:role="line"
         id="tspan857"
         x="45.168552"
         y="279.89471"
         style="stroke-width:0.2;fill:#ffff00;fill-opacity:1;stroke:#000000;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0">B</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:10.58333397px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#0066ff;fill-opacity:1;stroke:#000000;stroke-width:0.2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       x="61.471992"
       y="266.53128"
       id="text863"><tspan
         sodipodi:role="line"
         id="tspan861"
         x="61.471992"
         y="266.53128"
         style="stroke-width:0.2;fill:#0066ff;stroke-miterlimit:4;stroke-dasharray:none;stroke:#000000;stroke-opacity:1">C</tspan></text>
    <rect
       style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.75732303;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       id="rect892"
       width="131.52646"
       height="122.69707"
       x="0.39320081"
       y="173.91693" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.58333397px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       x="104.6892"
       y="172.94374"
       id="text896"><tspan
         sodipodi:role="line"
         id="tspan898"
         x="104.6892"
         y="172.94374">U</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:16.93333435px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458335"
       x="86.751106"
       y="191.82399"
       id="text852"><tspan
         sodipodi:role="line"
         id="tspan850"
         x="86.751106"
         y="191.82399"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:16.93333435px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.26458335">6</tspan></text>
  </g>
</svg>
`).then(x => x)
)});
  main.variable(observer("u__2_3")).define("u__2_3", ["_range"], function(_range){return(
_range(1,10)
)});
  main.variable(observer("b__2_3")).define("b__2_3", function(){return(
[3,5,7,8]
)});
  main.variable(observer("a__2_3")).define("a__2_3", function(){return(
[...[3,8],...[1,2]].sort((a,b) => a - b)
)});
  main.variable(observer("c__2_3")).define("c__2_3", function(){return(
[4,9]
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `<br>
**Ejercicio 2**. Dado los conjuntos ${tex `A`} y ${tex `B`}:`
)});
  main.variable(observer()).define(["md","tex","a__2_4"], function(md,tex,a__2_4){return(
md `## ${tex `A = \{ ${a__2_4.toString()} \}`}`
)});
  main.variable(observer("a__2_4")).define("a__2_4", function(){return(
[2, 4, 6, 8, 10, 11, 12, 14, 16]
)});
  main.variable(observer()).define(["md","tex","b__2_4"], function(md,tex,b__2_4){return(
md `## ${tex `B = \{ ${b__2_4.toString()} \}`}`
)});
  main.variable(observer("b__2_4")).define("b__2_4", ["_range"], function(_range){return(
_range(1,18,2)
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `Encuentre:
<br><br>
a) ${tex `A \cap B`}.
`
)});
  main.variable(observer("a_intsc_b__2_4")).define("a_intsc_b__2_4", ["intsc_two_arrays","a__2_4","b__2_4"], function(intsc_two_arrays,a__2_4,b__2_4){return(
intsc_two_arrays(a__2_4,b__2_4)
)});
  main.variable(observer()).define(["md","tex","a_intsc_b__2_4"], function(md,tex,a_intsc_b__2_4){return(
md `## <mark>${tex `A \cap B = \{ ${a_intsc_b__2_4} \}`}</mark>`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `b) ${tex `A \cup B`}.`
)});
  main.variable(observer("a_u_b__5_6")).define("a_u_b__5_6", ["union_two_arrays","a__2_4","b__2_4"], function(union_two_arrays,a__2_4,b__2_4){return(
union_two_arrays(a__2_4,b__2_4)
)});
  main.variable(observer()).define(["md","tex","a_u_b__5_6"], function(md,tex,a_u_b__5_6){return(
md `### <mark>${tex `A \cup B = \{ ${a_u_b__5_6.toString()} \}`}</mark>`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `c) ${tex `A - B`}.`
)});
  main.variable(observer("a_minus_b__2_4")).define("a_minus_b__2_4", ["substract_two_arrays","a__2_4","b__2_4"], function(substract_two_arrays,a__2_4,b__2_4){return(
substract_two_arrays(a__2_4,b__2_4)
)});
  main.variable(observer()).define(["md","tex","a_minus_b__2_4"], function(md,tex,a_minus_b__2_4){return(
md `### <mark>${tex `A - B = \{ ${a_minus_b__2_4.toString()} \}`}</mark>`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `d) ${tex `B - A`}.`
)});
  main.variable(observer("b_minus_a__2_4")).define("b_minus_a__2_4", ["substract_two_arrays","b__2_4","a__2_4"], function(substract_two_arrays,b__2_4,a__2_4){return(
substract_two_arrays(b__2_4,a__2_4)
)});
  main.variable(observer()).define(["md","tex","b_minus_a__2_4"], function(md,tex,b_minus_a__2_4){return(
md `### <mark>${tex `B - A = \{ ${b_minus_a__2_4.toString()} \}`}</mark>`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `<br>
**Ejercicio 3**. Dados los conjuntos ${tex `A`} y ${tex `B`}.`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## ${tex `A = x|x \textit{es una letra del abedecedario, } a \leq x \leq m`}`
)});
  main.variable(observer("a__2_5")).define("a__2_5", function(){return(
(() => {
  const abcd = (code = 10) => {
    return code > 22 ? [] : [code.toString(36),...abcd(code + 1)]
  }
  const result = abcd()
  return result
})()
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## ${tex `B = x|x \textit{es una vocal}`}`
)});
  main.variable(observer("b__2_5")).define("b__2_5", function(){return(
['a','e','i','o','u']
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `Encuentre:
<br><br>
a) ${tex `A \cap B`}.
`
)});
  main.variable(observer("a_intsc_b__2_5")).define("a_intsc_b__2_5", ["intsc_two_arrays","a__2_5","b__2_5"], function(intsc_two_arrays,a__2_5,b__2_5){return(
intsc_two_arrays(a__2_5, b__2_5)
)});
  main.variable(observer()).define(["md","tex","a_intsc_b__2_5"], function(md,tex,a_intsc_b__2_5){return(
md `## <mark>${tex `A \cap B = \{ ${a_intsc_b__2_5} \}`}</mark>`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `b) ${tex `A \cup B `}.`
)});
  main.variable(observer("a_u_b__2_5")).define("a_u_b__2_5", ["union_two_arrays","a__2_5","b__2_5"], function(union_two_arrays,a__2_5,b__2_5){return(
union_two_arrays(a__2_5, b__2_5)
)});
  main.variable(observer()).define(["md","tex","a_u_b__2_5"], function(md,tex,a_u_b__2_5){return(
md `## <mark>${tex `A \cap B = \{ ${a_u_b__2_5} \}`}</mark>`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `c) ${tex `A - B`}.`
)});
  main.variable(observer("a_minus_b__2_5")).define("a_minus_b__2_5", ["substract_two_arrays","a__2_5","b__2_5"], function(substract_two_arrays,a__2_5,b__2_5){return(
substract_two_arrays(a__2_5, b__2_5)
)});
  main.variable(observer()).define(["md","tex","a_minus_b__2_5"], function(md,tex,a_minus_b__2_5){return(
md `## <mark>${tex `A - B = \{ ${a_minus_b__2_5} \}`}</mark>`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `d) ${tex `B - A`}.`
)});
  main.variable(observer("b_minus_a__2_5")).define("b_minus_a__2_5", ["substract_two_arrays","b__2_5","a__2_5"], function(substract_two_arrays,b__2_5,a__2_5){return(
substract_two_arrays(b__2_5, a__2_5 )
)});
  main.variable(observer()).define(["md","tex","b_minus_a__2_5"], function(md,tex,b_minus_a__2_5){return(
md `## <mark>${tex `B - A = \{ ${b_minus_a__2_5} \}`}</mark>`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `<br>
**Ejercicio 4**. Encuentre ${tex `(A \cap B)'`}.`
)});
  main.variable(observer()).define(["md","tex","a__2_6"], function(md,tex,a__2_6){return(
md `## ${tex `A = \{ ${a__2_6} \}`}`
)});
  main.variable(observer("a__2_6")).define("a__2_6", function(){return(
[2,4,6,8,10,11,12]
)});
  main.variable(observer()).define(["md","tex","b__2_6"], function(md,tex,b__2_6){return(
md `## ${ tex `B = \{ ${b__2_6} \}`}`
)});
  main.variable(observer("b__2_6")).define("b__2_6", function(){return(
[1,3,5,7,9,11,13]
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## ${tex `U = x|x \textit{ es un número natural, } 1 \leq x \leq 15`}`
)});
  main.variable(observer("u__2_6")).define("u__2_6", ["_range"], function(_range){return(
_range(1,16)
)});
  main.variable(observer("a_intsc_b__comp__2_6")).define("a_intsc_b__comp__2_6", ["substract_two_arrays","u__2_6","intsc_two_arrays","a__2_6","b__2_6"], function(substract_two_arrays,u__2_6,intsc_two_arrays,a__2_6,b__2_6){return(
substract_two_arrays(u__2_6, intsc_two_arrays(a__2_6, b__2_6))
)});
  main.variable(observer()).define(["md","tex","a_intsc_b__comp__2_6"], function(md,tex,a_intsc_b__comp__2_6){return(
md `## <mark>${tex `(A \cap B)' = \{ ${a_intsc_b__comp__2_6} \}`}</mark>`
)});
  main.variable(observer()).define(["md","html"], function(md,html){return(
md `<br>
**Ejercicio 5**. En una clase se presentó un examen de dos preguntas:<br>
${html `<ul>
<li>15 personas respondieron bien la primera pregunta</li>
<li>10 personas respondieron bien la segunda pregunta</li>
<li>8 personas respondieron bien las dos preguntas</li>
<li>5 personas no respondieron ninguna</li>
</ul>`
}
¿Cuántos estudiantes presentaron el examen? Represente gráficamente
`
)});
  main.variable(observer()).define(["html"], function(html){return(
Promise.resolve(html `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="500"
   height="500"
   viewBox="0 0 132.29166 132.29167"
   version="1.1"
   id="svg8"
   inkscape:version="0.92.4 (unknown)"
   sodipodi:docname="ej__8_6.svg">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="0.7"
     inkscape:cx="178.25278"
     inkscape:cy="311.80127"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="false"
     units="px"
     inkscape:window-width="1366"
     inkscape:window-height="739"
     inkscape:window-x="0"
     inkscape:window-y="256"
     inkscape:window-maximized="1"
     objecttolerance="10000"
     guidetolerance="10000" />
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-164.70831)">
    <rect
       style="opacity:0.5;fill:#0000ff;fill-opacity:1;stroke:#000000;stroke-width:0.94914097;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       id="rect909"
       width="131.30479"
       height="115.80931"
       x="0.48466277"
       y="180.71159" />
    <ellipse
       style="opacity:0.5;fill:#ffff00;fill-opacity:1;stroke:#000000;stroke-width:0.30727503;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       id="path834-1"
       cx="83.532738"
       cy="222.91664"
       rx="39.822845"
       ry="39.444874" />
    <ellipse
       style="opacity:0.506;fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.30727503;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       id="path834"
       cx="45.168152"
       cy="222.72766"
       rx="39.822849"
       ry="39.444874" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="106.66612"
       y="176.70255"
       id="text913"><tspan
         sodipodi:role="line"
         id="tspan911"
         x="106.66612"
         y="176.70255"
         style="stroke-width:0.26458332">U</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:6.13722992px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.05076753;"
       x="61.743847"
       y="196.27293"
       id="text853"><tspan
         sodipodi:role="line"
         id="tspan885"
         x="61.743847"
         y="196.27293"
         style="stroke-width:0.05076753;fill:#ffffff;">6</tspan><tspan
         sodipodi:role="line"
         id="tspan887"
         x="61.743847"
         y="203.94447"
         style="stroke-width:0.05076753;fill:#ffffff;">7</tspan><tspan
         sodipodi:role="line"
         id="tspan889"
         x="61.743847"
         y="211.61601"
         style="stroke-width:0.05076753;fill:#ffffff;">8</tspan><tspan
         sodipodi:role="line"
         id="tspan891"
         x="61.743847"
         y="219.28755"
         style="stroke-width:0.05076753;fill:#ffffff;">9</tspan><tspan
         sodipodi:role="line"
         id="tspan893"
         x="61.743847"
         y="226.95909"
         style="stroke-width:0.05076753;fill:#ffffff;">10</tspan><tspan
         sodipodi:role="line"
         id="tspan895"
         x="61.743847"
         y="234.63062"
         style="stroke-width:0.05076753;fill:#ffffff;">11</tspan><tspan
         sodipodi:role="line"
         id="tspan897"
         x="61.743847"
         y="242.30215"
         style="stroke-width:0.05076753;fill:#ffffff;">12</tspan><tspan
         sodipodi:role="line"
         id="tspan899"
         x="61.743847"
         y="249.97369"
         style="stroke-width:0.05076753;fill:#ffffff;">13</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:19.75555611px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.26458332;"
       x="87.95726"
       y="216.79298"
       id="text931"><tspan
         sodipodi:role="line"
         id="tspan933"
         x="87.95726"
         y="216.79298">21</tspan><tspan
         sodipodi:role="line"
         id="tspan935"
         x="87.95726"
         y="241.48743">22</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:7.43475151px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.09957255;"
       x="27.457836"
       y="198.48276"
       id="text903"><tspan
         sodipodi:role="line"
         id="tspan915"
         x="27.457836"
         y="198.48276"
         style="stroke-width:0.09957255;fill:#ffffff;">14</tspan><tspan
         sodipodi:role="line"
         id="tspan917"
         x="27.457836"
         y="207.7762"
         style="stroke-width:0.09957255;fill:#ffffff;">15</tspan><tspan
         sodipodi:role="line"
         id="tspan919"
         x="27.457836"
         y="217.06964"
         style="stroke-width:0.09957255;fill:#ffffff;">16</tspan><tspan
         sodipodi:role="line"
         id="tspan921"
         x="27.457836"
         y="226.36308"
         style="stroke-width:0.09957255;fill:#ffffff;">17</tspan><tspan
         sodipodi:role="line"
         id="tspan923"
         x="27.457836"
         y="235.65651"
         style="stroke-width:0.09957255;fill:#ffffff;">18</tspan><tspan
         sodipodi:role="line"
         id="tspan925"
         x="27.457836"
         y="244.94995"
         style="stroke-width:0.09957255;fill:#ffffff;">19</tspan><tspan
         sodipodi:role="line"
         id="tspan927"
         x="27.457836"
         y="254.24339"
         style="stroke-width:0.09957255;fill:#ffffff;">20</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:16.93333244px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.26458332;"
       x="28.33057"
       y="288.71463"
       id="text873"><tspan
         sodipodi:role="line"
         id="tspan871"
         x="28.33057"
         y="288.71463"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:16.93333244px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke-width:0.26458332;">1 2 3 4 5</tspan></text>
  </g>
</svg>
`).then(x => x)
)});
  main.variable(observer()).define(["html","tex"], function(html,tex){return(
html `
<div>
  <div style="width:25px;height:25px;background-color:#8080ff;float:left"></div>
  <div style="margin-left: 30px;">${tex `5`} personas no respondieron ninguna.</div>
</div>
<div>
  <div style="width:25px;height:25px;background-color:#c03f7d;float:left"></div>
  <div style="margin-left: 30px;">${tex `15`} personas respondieron bien la primera pregunta.</div>
</div>
<div>
  <div style="width:25px;height:25px;background-color:#bfbf7f;float:left"></div>
  <div style="margin-left: 30px;">${tex `10`} personas respondieron bien la segunda pregunta.</div>
</div>
<div>
  <div style="width:25px;height:25px;background-color:#e05e3f;float:left"></div>
  <div style="margin-left: 30px;">${tex `8`} personas respondieron bien las dos preguntas.</div>
</div>
`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `<br>
**Ejercicio 6**. En una población de ${tex `70`} personas ${tex `12`} son solo ingenieros,${tex `8`} son solo economistas, ${tex `4`} son ingenieros y economistas, ${tex `5`} son ingenieros y administradores, ninguno es economista y administrador al tiempo, ${tex `25`} no son ni ingenieros ni economistas ni administradores, ¿cuántos solo son administradores?
`
)});
  main.variable(observer()).define(["html"], function(html){return(
Promise.resolve(html `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="500"
   height="500"
   viewBox="0 0 132.29166 132.29167"
   version="1.1"
   id="svg8"
   inkscape:version="0.92.4 (unknown)"
   sodipodi:docname="ej__2_7.svg">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="0.98994949"
     inkscape:cx="203.47883"
     inkscape:cy="310.26055"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="true"
     units="px"
     inkscape:window-width="1280"
     inkscape:window-height="995"
     inkscape:window-x="1366"
     inkscape:window-y="0"
     inkscape:window-maximized="1">
    <inkscape:grid
       type="xygrid"
       id="grid815" />
  </sodipodi:namedview>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-164.70831)">
    <ellipse
       style="opacity:0.5;fill:#b380ff;fill-opacity:1;stroke:#000000;stroke-width:0.20662597;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       id="path817"
       cx="47.937313"
       cy="228.21556"
       rx="28.701639"
       ry="30.068378" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:12.1812706px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.30453175"
       x="38.606983"
       y="233.90962"
       id="text821"><tspan
         sodipodi:role="line"
         id="tspan819"
         x="38.606983"
         y="233.90962"
         style="stroke-width:0.30453175">12</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:12.1812706px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.30453175"
       x="44.480095"
       y="273.49878"
       id="text821-0"><tspan
         sodipodi:role="line"
         id="tspan844"
         x="44.480095"
         y="273.49878"
         style="stroke-width:0.30453175">8</tspan></text>
    <ellipse
       style="opacity:0.5;fill:#ff0000;fill-opacity:1;stroke:#000000;stroke-width:0.33300886;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       id="path846"
       cx="48.53175"
       cy="261.6438"
       rx="24.229862"
       ry="22.027147" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.71838856px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.54929936"
       x="42.571705"
       y="250.44136"
       id="text850"><tspan
         sodipodi:role="line"
         id="tspan848"
         x="42.571705"
         y="250.44136"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.71838856px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;stroke-width:0.54929936">4</tspan></text>
    <circle
       style="opacity:0.5;fill:#ffff00;fill-opacity:1;stroke:#000000;stroke-width:0.23019725;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       id="path852"
       cx="62.751999"
       cy="199.32353"
       r="21.317225" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:12.1812706px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.30453175"
       x="52.310909"
       y="212.80994"
       id="text856"><tspan
         sodipodi:role="line"
         id="tspan854"
         x="52.310909"
         y="212.80994"
         style="stroke-width:0.30453175">5</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:12.1812706px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.30453175"
       x="100.81848"
       y="202.80388"
       id="text879"><tspan
         sodipodi:role="line"
         id="tspan877"
         x="100.81848"
         y="202.80388"
         style="stroke-width:0.30453175">25</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:12.1812706px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.30453175"
       x="58.401546"
       y="194.97308"
       id="text836"><tspan
         sodipodi:role="line"
         id="tspan834"
         x="58.401546"
         y="194.97308"
         style="stroke-width:0.30453175">16</tspan></text>
    <rect
       style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       id="rect838"
       width="116.41666"
       height="116.41666"
       x="7.9375"
       y="175.29164" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
       x="101.41029"
       y="173.80856"
       id="text842"><tspan
         sodipodi:role="line"
         id="tspan840"
         x="101.41029"
         y="173.80856"
         style="stroke-width:0.26458332">U</tspan></text>
  </g>
</svg>
`).then(x => x)
)});
  main.variable(observer()).define(["html","tex","ing__2_7","ing_econm__2_7","econm__2_7","admin__2_7","ing_admin_2_7","resto__2_7"], function(html,tex,ing__2_7,ing_econm__2_7,econm__2_7,admin__2_7,ing_admin_2_7,resto__2_7){return(
html `
<div>
  <div style="width:25px;height:25px;background-color:#d9c0ff;float:left"></div>
  <div style="margin-left: 30px;">${tex `${ing__2_7}`} Ingenieros.</div>
</div>
<div>
  <div style="width:25px;height:25px;background-color:#ec607f;float:left"></div>
  <div style="margin-left: 30px;">${tex `${ing_econm__2_7}`} Ingenieros y economistas.</div>
</div>
<div>
  <div style="width:25px;height:25px;background-color:#ff8080;float:left"></div>
  <div style="margin-left: 30px;">${tex `${econm__2_7}`} Economistas.</div>
</div>
<div>
    <div style="border-style:solid;border-width:1px;width:23px;height:23px;background-color:#ffff80;float:left"></div>
  <div style="margin-left: 30px;">${tex `${admin__2_7}`} Administradores.</div>
</div>
<div>
  <div style="width:25px;height:25px;background-color:#ecdf7f;float:left"></div>
  <div style="margin-left: 30px;">${tex `${ing_admin_2_7}`} Ingenieros y administradores.</div>
</div>
<div>
    <div style="border-style:solid;border-width:1px;width:23px;height:23px;background-color:white;float:left"></div>
  <div style="margin-left: 30px;">${tex `${resto__2_7}`} Resto.</div>
</div>
`
)});
  main.variable(observer("total__2_7")).define("total__2_7", function(){return(
70
)});
  main.variable(observer("ing__2_7")).define("ing__2_7", function(){return(
12
)});
  main.variable(observer("ing_econm__2_7")).define("ing_econm__2_7", function(){return(
4
)});
  main.variable(observer("econm__2_7")).define("econm__2_7", function(){return(
8
)});
  main.variable(observer("ing_admin_2_7")).define("ing_admin_2_7", function(){return(
5
)});
  main.variable(observer("admin__2_7")).define("admin__2_7", ["total__2_7","resto__2_7","ing_admin_2_7","econm__2_7","ing_econm__2_7","ing__2_7"], function(total__2_7,resto__2_7,ing_admin_2_7,econm__2_7,ing_econm__2_7,ing__2_7){return(
total__2_7 - (resto__2_7 + ing_admin_2_7 + econm__2_7 + ing_econm__2_7 + ing__2_7)
)});
  main.variable(observer("resto__2_7")).define("resto__2_7", function(){return(
25
)});
  main.variable(observer()).define(["md","tex","admin__2_7"], function(md,tex,admin__2_7){return(
md `<mark>Los administradores son ${tex `${admin__2_7}`}.</mark>`
)});
  main.variable(observer("theory_graf")).define("theory_graf", ["md"], function(md){return(
md `---
# Teoría de gráficas
<br>
## Grafos
<br>
En matemáticas y ciencias de la computación, un **<a href="https://es.wikipedia.org/wiki/Grafo" target="_blank">grafo</a>** (del griego grafos: dibujo, imagen) es un conjunto de objetos llamados vértices o nodos unidos por enlaces llamados aristas o arcos, que permiten representar relaciones binarias entre elementos de un conjunto. Son objeto de estudio de la teoría de grafos.
`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## ${tex `Vertices,\;V`}
## ${tex `Aristas,\;E`}
<br>
## ${tex `e = (v,w)`}
`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `digraph {
  V -> W [label = "e", arrowhead=none];
}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Tipos de grafos`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### Simple`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `graph {
  a -- b;
  a -- d;
  a -- c -- d;
}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### Multigrafo`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `graph {
  a -- b;
  a -- c;
  a -- d;
  c -- d;
  c -- a;
  d -- a;
  d -- c;
}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### Pseudografo`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `graph {
  a -- a;
  a -- b;
  a -- c;
  a -- d;
  b -- b;
  c -- d;
  c -- a;
  c -- c;
  d -- a;
  d -- c;
  d -- d;
}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### Ponderado`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `graph {  
  a -- b [label="5"];
  a -- d [label="10"];
  a -- c [label="4"];
  c -- d [label="3"];
}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### Grafo Dirigido`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `digraph {  
  a -> b [dir=both];
  a -> c;  
  d -> a;
  c -> d;
}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### Multigrafo Dirigido`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `digraph {  
  a -> c;
  b -> a;
  c -> d;
  d -> c;
  d -> a;
  d -> a;
}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Grado
<br>
El **grado** de un vértice, es el número de aristas y conexiones que tiene un nodo con los otros nodos.`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `graph {  
  a -- b [label=3];
  a -- d [label=4];
  a -- c [label=2];
  c -- d [label=1];
  b -- d [label=5];
}`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## ${tex `\delta(v) = \textit{número de aristas que inciden}`}
## ${tex `\delta(a) = 3`}
## ${tex `\delta(b) = 2`}
## ${tex `\delta(c) = 2`}
## ${tex `\delta(d) = 3`}
`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `### ${tex `E = 5 `}*
## ${tex `\sum \delta(v) = 2|E|`}
## ${tex `\sum \delta(v) = 10`}
## ${tex `\sum \delta(v) = \delta(a) + \delta(b) + \delta(c) + \delta(d) = 2|E|`}
## ${tex `\sum \delta(v) = 3 + 2 + 2 + 3 = 2|5| = 10`}
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<mark>&#42; El número de total de aristas del grafo que pasa por todos los vertices, no el número de aristas que indicen en un vertice.</mark>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Nota**: Si el número de **aristas que inciden es par** es posible recorrer el grafo sin repetir vertices, de lo contrario no se puede.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
## Cadena
<br>
Es una sucesión de vertices y conexiones entre si, con las cuales puedo recorrer el gráfico.
`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `graph {  
  a -- b;
  a -- c [color=red,penwidth=3.0];
  a -- d [color=red,penwidth=3.0];
  b -- e;
  c -- d [color=red,penwidth=3.0];
  d -- b [color=red,penwidth=3.0];
  d -- e;
}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Camino
<br>
En Teoría de Grafos, se llama **<a href="https://es.wikipedia.org/wiki/Camino_(teor%C3%ADa_de_grafos)" target="_blank">camino</a>** a una secuencia de vértices dentro de un grafo tal que exista una arista entre cada vértice y el siguiente. Se dice que dos vértices están conectados si existe un camino que vaya de uno a otro, de lo contrario estarán desconectados. Dos vértices pueden estar conectados por varios caminos. El número de aristas dentro de un camino es su longitud. Así, los vértices adyacentes están conectados por un camino de longitud 1, y los segundos vecinos por un camino de longitud 2..
`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `graph {  
  a -- b [color=red,penwidth=3.0];
  a -- c [color=red,penwidth=3.0];
  a -- d ;
  b -- e [color=red,penwidth=3.0];
  c -- d [color=red,penwidth=3.0];
  d -- b ;
  d -- e;
}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Ciclo
<br>
En Teoría de grafos, un **<a href="https://es.wikipedia.org/wiki/Grafo_ciclo" target="_blank">Grafo ciclo</a>** o simplemente ciclo es un grafo que se asemeja a un polígono de n lados. Consiste en un camino cerrado en el que no se repite ningún vértice a excepción del primero que aparece dos veces como principio y fin del camino. 
`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `graph {  
  a -- b [color=red,penwidth=3.0];
  a -- c [color=red,penwidth=3.0];
  a -- d ;
  b -- e [color=red,penwidth=3.0];
  c -- d [color=red,penwidth=3.0];
  d -- b ;
  d -- e [color=red,penwidth=3.0];
}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Cadena Cerrada
<br>
Se inicia en un nodo y se termina en un nodo, pero se puede repetir los vertices por los que se han pasado.
`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `graph {  
  a -- b ;
  a -- c [color=red,penwidth=3.0];
  a -- d [color=red,penwidth=3.0];
  b -- e [color=red,penwidth=3.0];
  c -- d [color=red,penwidth=3.0];
  d -- b [color=red,penwidth=3.0];
  d -- e [color=red,penwidth=3.0];
}`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## Conexo<br><br>
En teoría de grafos, un grafo ${tex `G`} se dice **<a href="https://es.wikipedia.org/wiki/Grafo_conexo" target="_blank">conexo</a>** si, para cualquier par de vértices ${tex `u`} y ${tex `v`} en ${tex `G`}, existe al menos una trayectoria (una sucesión de vértices adyacentes que no repita vértices) de ${tex `u`} a ${tex `v`}. Un grafo es conexo si cada par de vértices está conectado por un camino; es decir, si para cualquier par de vértices ${tex `(a, b)`}, existe al menos un camino posible desde ${tex `a`} hacia ${tex `b`}. Un grafo es doblemente conexo si cada par de vértices está conectado por al menos dos caminos disjuntos; es decir, es conexo y no existe un vértice tal que al sacarlo el grafo resultante sea disconexo.`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `graph {  
  a -- b [color=red,penwidth=3.0];
  a -- c ;
  a -- d ; 
  b -- e ;
  c -- d ;  
}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## No conexo`
)});
  main.variable(observer()).define(["dot"], function(dot){return(
dot `graph {  
  a -- c ;
  a -- d ; 
  b -- e ;
  c -- d ;  
}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Caminos y ciclos eulerianos
<br>
En la teoría de grafos, un **<a href="https://es.wikipedia.org/wiki/Ciclo_euleriano" target="_blank">camino euleriano</a>** es un camino que pasa por cada arista una y solo una vez. Un ciclo o circuito euleriano es un camino cerrado que recorre cada arista exactamente una vez. El problema de encontrar dichos caminos fue discutido por primera vez por Leonhard Euler, en el famoso problema de los puentes de Königsberg.

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
### Camino euleriano`
)});
  main.variable(observer()).define(["adot","dots__3_1","iterator__3_1"], function(adot,dots__3_1,iterator__3_1){return(
adot.bind(this)`${dots__3_1[iterator__3_1]}${{engine: 'neato', zoom: false, useWorker: false }}`
)});
  main.variable(observer("viewof play__3_1")).define("viewof play__3_1", ["button"], function(button){return(
button({value: "Reproducir animación"})
)});
  main.variable(observer("play__3_1")).define("play__3_1", ["Generators", "viewof play__3_1"], (G, _) => G.input(_));
  main.variable(observer("iterator__3_1")).define("iterator__3_1", ["adot_iterator","dots__3_1","play__3_1","pass__3_1"], function(adot_iterator,dots__3_1,play__3_1,pass__3_1){return(
adot_iterator(dots__3_1.length, false, undefined, play__3_1, pass__3_1)
)});
  main.variable(observer("dots__3_1")).define("dots__3_1", function(){return(
[
  `graph {          
      c -- a;
      c -- d;
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e;
      b -- e;    
      f -- e;
      f -- b;      
    }`, `graph {    
      c -- a;
      c -- d;
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      }`, `graph {    
      c -- a;
      c -- d [color=red,penwidth=3.0];
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      }`, `graph {    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      }`, `graph {    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b;
      a -- d [color=red,penwidth=3.0];
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      }`, `graph {    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b;
      a -- d [color=red,penwidth=3.0];
      a -- f;
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      }`, `graph {    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d [color=red,penwidth=3.0];
      a -- f;
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      }`, `graph {    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d [color=red,penwidth=3.0];
      a -- f [color=red,penwidth=3.0];
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      }`, `graph {    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d [color=red,penwidth=3.0];
      a -- f [color=red,penwidth=3.0];
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b [color=red,penwidth=3.0];
      }`, `graph {    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d [color=red,penwidth=3.0];
      a -- f [color=red,penwidth=3.0];
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e [color=red,penwidth=3.0];    
      f -- e;
      f -- b [color=red,penwidth=3.0];
      }`, `graph {    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d [color=red,penwidth=3.0];
      a -- f [color=red,penwidth=3.0];
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e [color=red,penwidth=3.0];    
      f -- e [color=red,penwidth=3.0];
      f -- b [color=red,penwidth=3.0];
      }`, `graph {    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d [color=red,penwidth=3.0];
      a -- f [color=red,penwidth=3.0];
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e [color=red,penwidth=3.0];    
      f -- e [color=red,penwidth=3.0];
      f -- b [color=red,penwidth=3.0];    
      }`
]
)});
  main.variable(observer("pass__3_1")).define("pass__3_1", function(){return(
Object.create({enable: false})
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `Se observa que dos de sus vértices ${tex `f, e`} tienen grado impar.
## ${tex `\delta(a) = \delta(d) = \delta(b) = 4\;aristas`}
## ${tex `\delta(f) = \delta(e) = 3\;aristas`}
## ${tex `\delta(c) = 2\;aristas`}
## ${tex `V_{inicio} = V_e`}
## ${tex `V_{final} = V_f`}
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
### Ciclo euleriano`
)});
  main.variable(observer()).define(["adot","dots__3_2","iterator__3_2"], function(adot,dots__3_2,iterator__3_2){return(
adot.bind(this)`${dots__3_2[iterator__3_2]}${{engine: 'neato', zoom: false, useWorker: false }}`
)});
  main.variable(observer("viewof play__3_2")).define("viewof play__3_2", ["button"], function(button){return(
button({value: "Reproducir animación"})
)});
  main.variable(observer("play__3_2")).define("play__3_2", ["Generators", "viewof play__3_2"], (G, _) => G.input(_));
  main.variable(observer("iterator__3_2")).define("iterator__3_2", ["adot_iterator","dots__3_2","play__3_2","pass__3_2"], function(adot_iterator,dots__3_2,play__3_2,pass__3_2){return(
adot_iterator(dots__3_2.length, false, undefined, play__3_2, pass__3_2)
)});
  main.variable(observer("dots__3_2")).define("dots__3_2", function(){return(
[
  `graph {    
      g [pos="1,1"];    
      c -- a;
      c -- d;
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e;
      b -- e;    
      f -- e;
      f -- b;
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a;
      c -- d;
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a;
      c -- d [color=red,penwidth=3.0];
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b;
      a -- d [color=red,penwidth=3.0];
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b;
      a -- d [color=red,penwidth=3.0];
      a -- f;
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d [color=red,penwidth=3.0];
      a -- f;
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d [color=red,penwidth=3.0];
      a -- f [color=red,penwidth=3.0];
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d [color=red,penwidth=3.0];
      a -- f [color=red,penwidth=3.0];
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b [color=red,penwidth=3.0];
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d [color=red,penwidth=3.0];
      a -- f [color=red,penwidth=3.0];
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e [color=red,penwidth=3.0];    
      f -- e;
      f -- b [color=red,penwidth=3.0];
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d [color=red,penwidth=3.0];
      a -- f [color=red,penwidth=3.0];
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e [color=red,penwidth=3.0];    
      f -- e [color=red,penwidth=3.0];
      f -- b [color=red,penwidth=3.0];
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d [color=red,penwidth=3.0];
      a -- f [color=red,penwidth=3.0];
      b -- d [color=red,penwidth=3.0];
      d -- e [color=red,penwidth=3.0];
      b -- e [color=red,penwidth=3.0];    
      f -- e [color=red,penwidth=3.0];
      f -- b [color=red,penwidth=3.0];
      f -- g [color=red,penwidth=3.0];
      g -- e [color=red,penwidth=3.0];
    }`
]
)});
  main.variable(observer("pass__3_2")).define("pass__3_2", function(){return(
Object.create({ enable: false })
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `Se observa que todos los vértices tienen grado par.<br>
## ${tex `\delta(a) = \delta(d) = \delta(b) = \delta(f) = \delta(e) = 4\;aristas`}
## ${tex `\delta(c) = \delta(g) =  2\;aristas`}
## ${tex `V_{inicio} = V_g`}
## ${tex `V_{final} = V_g`}
## ${tex `V_{inicio} = V_{final}`}
`
)});
  main.variable(observer()).define(["md","a_target_blank"], function(md,a_target_blank){return(
md `<br>
## Camino hamiltoniano
<br>
Un **${a_target_blank("https://es.wikipedia.org/wiki/Camino_hamiltoniano", "camino hamiltoniano")}**, en el campo matemático de la teoría de grafos, es un camino de un grafo, una sucesión de aristas adyacentes, que visita todos los vértices del grafo una sola vez. Si además el último vértice visitado es adyacente al primero, el camino es un **ciclo hamiltoniano**.
`
)});
  main.variable(observer()).define(["adot","dots__3_3","iterator__3_3"], function(adot,dots__3_3,iterator__3_3){return(
adot.bind(this)`${dots__3_3[iterator__3_3]}${{engine: 'neato', zoom: false, useWorker: false }}`
)});
  main.variable(observer("viewof play__3_3")).define("viewof play__3_3", ["button"], function(button){return(
button({value: "Reproducir animación"})
)});
  main.variable(observer("play__3_3")).define("play__3_3", ["Generators", "viewof play__3_3"], (G, _) => G.input(_));
  main.variable(observer("iterator__3_3")).define("iterator__3_3", ["adot_iterator","dots__3_3","play__3_3","pass__3_3"], function(adot_iterator,dots__3_3,play__3_3,pass__3_3){return(
adot_iterator(dots__3_3.length, false, undefined, play__3_3, pass__3_3)
)});
  main.variable(observer("dots__3_3")).define("dots__3_3", function(){return(
[
  `graph {          
      c -- a;
      c -- d;
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e;
      b -- e;    
      f -- e;
      f -- b;      
    }`, `graph {    
      c -- a;
      c -- d;
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      }`, `graph {    
      c -- a;
      c -- d [color=red,penwidth=3.0];
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      }`, `graph {    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      }`, `graph {    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d ;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      }`, `graph {    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d ;
      a -- f ;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b [color=red,penwidth=3.0];
      }`
]
)});
  main.variable(observer("pass__3_3")).define("pass__3_3", function(){return(
Object.create({enable: false})
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `Se observa que dos de sus vértices ${tex `f, e`} tienen grado impar.
## ${tex `\delta(a) = \delta(d) = \delta(b) = 4\;aristas`}
## ${tex `\delta(f) = \delta(e) = 3\;aristas`}
## ${tex `\delta(c) = 2\;aristas`}
## ${tex `V_{inicio} = V_e`}
## ${tex `V_{final} = V_f`}
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
## Ciclo hamiltoniano`
)});
  main.variable(observer()).define(["adot","dots__3_4","iterator__3_4"], function(adot,dots__3_4,iterator__3_4){return(
adot.bind(this)`${dots__3_4[iterator__3_4]}${{engine: 'neato', zoom: false, useWorker: false }}`
)});
  main.variable(observer("viewof play__3_4")).define("viewof play__3_4", ["button"], function(button){return(
button({value: "Reproducir animación"})
)});
  main.variable(observer("play__3_4")).define("play__3_4", ["Generators", "viewof play__3_4"], (G, _) => G.input(_));
  main.variable(observer("iterator__3_4")).define("iterator__3_4", ["adot_iterator","dots__3_4","play__3_4","pass__3_4"], function(adot_iterator,dots__3_4,play__3_4,pass__3_4){return(
adot_iterator(dots__3_4.length, false, undefined, play__3_4, pass__3_4)
)});
  main.variable(observer("dots__3_4")).define("dots__3_4", function(){return(
[
  `graph {    
      g [pos="1,1"];    
      c -- a;
      c -- d;
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e;
      b -- e;    
      f -- e;
      f -- b;
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a;
      c -- d;
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a ;
      c -- d [color=red,penwidth=3.0];
      a -- b;
      a -- d;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b ;
      a -- d;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b;
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d ;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b ;
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`, `graph {    
      g [pos="1,1"];    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d ;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b [color=red,penwidth=3.0];
      f -- g;
      g -- e [color=red,penwidth=3.0];
    }`,  `graph {    
      g [pos="1,1"];    
      c -- a [color=red,penwidth=3.0];
      c -- d [color=red,penwidth=3.0];
      a -- b [color=red,penwidth=3.0];
      a -- d ;
      a -- f;
      b -- d;
      d -- e [color=red,penwidth=3.0];
      b -- e;    
      f -- e;
      f -- b [color=red,penwidth=3.0];
      f -- g [color=red,penwidth=3.0];
      g -- e [color=red,penwidth=3.0];
    }`
]
)});
  main.variable(observer("pass__3_4")).define("pass__3_4", function(){return(
Object.create({enable: false})
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `Se observa que todos los vértices tienen grado par.<br>
## ${tex `\delta(a) = \delta(d) = \delta(b) = \delta(f) = \delta(e) = 4\;aristas`}
## ${tex `\delta(c) = \delta(g) =  2\;aristas`}
## ${tex `V_{inicio} = V_g`}
## ${tex `V_{final} = V_g`}
## ${tex `V_{inicio} = V_{final}`}
`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `La siguiente formula indica, que requirimientos de haber para que haya un camino hamiltoniano con ${tex `100\%`} de probabilidades, no necesariamente se debe cumplir.
## ${tex `Grado(u) + Grado(v) \ge n - 1`}
## ${tex `\textit{n número de vértices}`}
## ${tex `\textit{n número de vértices}`}
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
## Ejemplos de grafos no hamiltonianos
<br>

`
)});
  main.variable(observer()).define(["md","dot"], function(md,dot){return(
md `
${dot `graph {
a -- b -- c
}`}
Camino hamiltoniano.
`
)});
  main.variable(observer()).define(["md","custom_graphviz"], function(md,custom_graphviz){return(
md `
${custom_graphviz(`
graph {
b [pos="0,1!"];
a [pos="1,2!"];
e [pos="2,1!"];
c [pos="1,0!"];
d [pos="1,1!"];
a -- e -- c -- b;
b -- a;
a -- d;
d -- c;
}
`)}
No hay ciclo hamiltoniano.
`
)});
  main.variable(observer()).define(["md","custom_graphviz"], function(md,custom_graphviz){return(
md `
${custom_graphviz( `graph {
  e [pos="2,0!"]  
  f [pos="2,2!"]  
  b [pos="1,1!"]
  a [pos="0,1!"];
  a -- b -- f -- e;
  e -- b;
}`)
}
No es un grafo hamiltoniano.
`
)});
  main.variable(observer()).define(["md","a_target_blank"], function(md,a_target_blank){return(
md `<br>
## Matriz de Adyacencia
<br>
**${a_target_blank('https://es.wikipedia.org/wiki/Matriz_de_adyacencia','La matriz de adyacencia')}** es una matriz cuadrada que se utiliza como una forma de representar relaciones binarias.

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejercicio 1**.`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(`
graph  {
  graph [nodesep=0.2];
  a [pos="0,1!"];
  b [pos="1,1!"];
  c [pos="0,0!"];
  d [pos="1,0!"];
  a -- a;
  a -- b -- d -- c -- b;
  c -- a;
  d -- b;
}
`)
)});
  main.variable(observer()).define(["md","html","tex"], function(md,html,tex){return(
md `Matriz de adyacencia.
${html `
<table style="font-size:20px">
<tr>
  <th></th>
  <th>${tex `\bf a \bf`}</th>
  <th>${tex `\bf b \bf`}</th>
  <th>${tex `\bf c \bf`}</th>
  <th>${tex `\bf d \bf`}</th>
  <th>${tex `\bf Grado \bf`}</th>
<tr>
<tr>
  <td>${tex `\bf a \bf`}</td>
  <td>${tex `1`}</td> <!-- a -->
  <td>${tex `1`}</td> <!-- b --> 
  <td>${tex `1`}</td> <!-- c -->
  <td>${tex `0`}</td> <!-- d -->
  <td>${tex `3`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf b \bf`}</td>
  <td>${tex `1`}</td> <!-- a -->
  <td>${tex `0`}</td> <!-- b -->
  <td>${tex `1`}</td> <!-- c -->
  <td>${tex `2`}</td> <!-- d -->
  <td>${tex `4`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf c \bf`}</td>
  <td>${tex `1`}</td> <!-- a -->
  <td>${tex `1`}</td> <!-- b -->
  <td>${tex `0`}</td> <!-- c -->
  <td>${tex `1`}</td> <!-- d -->
  <td>${tex `3`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf d \bf`}</td>
  <td>${tex `0`}</td> <!-- a -->
  <td>${tex `2`}</td> <!-- b -->
  <td>${tex `1`}</td> <!-- c -->
  <td>${tex `0`}</td> <!-- d -->
  <td>${tex `3`}</td> <!-- Grado -->
<tr>
</table>

`}`
)});
  main.variable(observer()).define(["md","a_target_blank"], function(md,a_target_blank){return(
md `<br>
## Matriz de incidencia
<br>
La **${a_target_blank('https://es.wikipedia.org/wiki/Matriz_de_incidencia','matriz de incidencia')}** es una matriz binaria (sus elementos sólo pueden ser unos o ceros) que se utiliza como una forma de representar relaciones binarias.<br><br>
Construcción de la matriz a partir de un grafo:<br>
<ol>
<li>Las columnas de la matriz representan las aristas del grafo.</li>
<li>Las filas representan a los distintos nodos.</li>
<li>Por cada nodo unido por una arista, ponemos un uno (1) en el lugar correspondiente, y llenamos el resto de las ubicaciones con ceros (0).</li>
</ol>
  



`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejercicio 2.**`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(`
graph  {
  graph [nodesep=0.2];
  a [pos="0,2!"];
  b [pos="2,2!"];
  c [pos="0,0!"];
  d [pos="2,0!"];
  e [pos="1,1!"];
  a -- c [label="e1"];
  a -- b [label="e2"];
  c -- e [label="e3"];
  c -- d [label="e6"];
  d -- b [label="e5"];
  e -- d [label="e4"];
}
`)
)});
  main.variable(observer()).define(["md","html","tex"], function(md,html,tex){return(
md `Matriz de incidencia.

${html `
<table style="font-size:20px">
<tr>
  <th></th>
  <th>${tex `\bf e1 \bf`}</th>
  <th>${tex `\bf e2 \bf`}</th>
  <th>${tex `\bf e3 \bf`}</th>
  <th>${tex `\bf e4 \bf`}</th>
  <th>${tex `\bf e5 \bf`}</th>
  <th>${tex `\bf e6 \bf`}</th>
  <th>${tex `\bf Grado \bf`}</th>
<tr>
<tr>
  <td>${tex `\bf a \bf`}</td>
  <td>${tex `1`}</td> <!-- e1 -->
  <td>${tex `1`}</td> <!-- e2 --> 
  <td>${tex `0`}</td> <!-- e3 -->
  <td>${tex `0`}</td> <!-- e4 -->
  <td>${tex `0`}</td> <!-- e5 -->
  <td>${tex `0`}</td> <!-- e6 -->
  <td>${tex `2`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf b \bf`}</td>
  <td>${tex `0`}</td> <!-- e1 -->
  <td>${tex `1`}</td> <!-- e2 -->
  <td>${tex `0`}</td> <!-- e3 -->
  <td>${tex `0`}</td> <!-- e4 -->
  <td>${tex `1`}</td> <!-- e5 -->
  <td>${tex `0`}</td> <!-- e6 -->
  <td>${tex `2`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf c \bf`}</td>
  <td>${tex `1`}</td> <!-- e1 -->
  <td>${tex `0`}</td> <!-- e2 -->
  <td>${tex `1`}</td> <!-- e3 -->
  <td>${tex `0`}</td> <!-- e4 -->
  <td>${tex `0`}</td> <!-- e5 -->  
  <td>${tex `1`}</td> <!-- e6 -->
  <td>${tex `3`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf d \bf`}</td>
  <td>${tex `0`}</td> <!-- e1 -->
  <td>${tex `0`}</td> <!-- e2 -->
  <td>${tex `0`}</td> <!-- e3 -->
  <td>${tex `1`}</td> <!-- e4 -->
  <td>${tex `1`}</td> <!-- e5 -->
  <td>${tex `1`}</td> <!-- e6 -->
  <td>${tex `3`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf e \bf`}</td>
  <td>${tex `0`}</td> <!-- e1 -->
  <td>${tex `0`}</td> <!-- e2 -->
  <td>${tex `1`}</td> <!-- e3 -->
  <td>${tex `1`}</td> <!-- e4 -->
  <td>${tex `0`}</td> <!-- e5 -->
  <td>${tex `0`}</td> <!-- e6 -->
  <td>${tex `2`}</td> <!-- Grado -->
<tr>
</table>

`}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejercicio 3**.`
)});
  main.variable(observer()).define(["md","html","tex"], function(md,html,tex){return(
md `Matriz de incidencia. CORREGIR
<br>
${html `
<table style="font-size:20px">
<tr>
  <th></th>
  <th>${tex `\bf e1 \bf`}</th>
  <th>${tex `\bf e2 \bf`}</th>
  <th>${tex `\bf e3 \bf`}</th>
  <th>${tex `\bf e4 \bf`}</th>
  <th>${tex `\bf e5 \bf`}</th>
  <th>${tex `\bf e6 \bf`}</th>
  <th>${tex `\bf Grado \bf`}</th>
<tr>
<tr>
  <td>${tex `\bf a \bf`}</td>
  <td>${tex `1`}</td> <!-- e1 -->
  <td>${tex `0`}</td> <!-- e2 --> 
  <td>${tex `1`}</td> <!-- e3 -->
  <td>${tex `0`}</td> <!-- e4 -->
  <td>${tex `0`}</td> <!-- e5 -->
  <td>${tex `0`}</td> <!-- e6 -->
  <td>${tex `2`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf b \bf`}</td>
  <td>${tex `1`}</td> <!-- e1 -->
  <td>${tex `1`}</td> <!-- e2 -->
  <td>${tex `1`}</td> <!-- e3 -->
  <td>${tex `1`}</td> <!-- e4 -->
  <td>${tex `0`}</td> <!-- e5 -->
  <td>${tex `0`}</td> <!-- e6 -->
  <td>${tex `4`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf c \bf`}</td>
  <td>${tex `0`}</td> <!-- e1 -->
  <td>${tex `0`}</td> <!-- e2 -->
  <td>${tex `0`}</td> <!-- e3 -->
  <td>${tex `0`}</td> <!-- e4 -->
  <td>${tex `1`}</td> <!-- e5 -->  
  <td>${tex `0`}</td> <!-- e6 -->
  <td>${tex `1`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf d \bf`}</td>
  <td>${tex `0`}</td> <!-- e1 -->
  <td>${tex `1`}</td> <!-- e2 -->
  <td>${tex `0`}</td> <!-- e3 -->
  <td>${tex `0`}</td> <!-- e4 -->
  <td>${tex `1`}</td> <!-- e5 -->
  <td>${tex `1`}</td> <!-- e6 -->
  <td>${tex `3`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf e \bf`}</td>
  <td>${tex `0`}</td> <!-- e1 -->
  <td>${tex `0`}</td> <!-- e2 -->
  <td>${tex `0`}</td> <!-- e3 -->
  <td>${tex `1`}</td> <!-- e4 -->
  <td>${tex `0`}</td> <!-- e5 -->
  <td>${tex `1`}</td> <!-- e6 -->
  <td>${tex `2`}</td> <!-- Grado -->
<tr>
</table>

`}`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(`
graph  {
  a -- b [label="e1"];
  b -- d [label="e2"];
  a -- b [label="e3"];
  b -- e [label="e4"];
  c -- d [label="e5"];
  d -- e [label="e6"];
}
`)
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<mark>La **matriz de adyacencia no simétrica** corresponde a un **grafo dirigido**.</mark>`
)});
  main.variable(observer("matrix_ady_no_simetrica__3__6")).define("matrix_ady_no_simetrica__3__6", function(){return(
[[0,1,0,0,0],
                [0,0,1,0,0],
                [1,0,0,1,0],
                [0,0,1,1,1],
                [1,0,1,0,0]]
)});
  main.variable(observer()).define(["md","print_matrix_html","matrix_ady_no_simetrica__3__6"], function(md,print_matrix_html,matrix_ady_no_simetrica__3__6){return(
md `**Matriz de adyacencia no simétrica**
${print_matrix_html(matrix_ady_no_simetrica__3__6)}`
)});
  main.variable(observer("matrix_ady_simetrica__3__7")).define("matrix_ady_simetrica__3__7", function(){return(
[[0,0,1,0,0],
                [0,1,0,0,0],
                [1,0,0,1,1],
                [0,0,1,1,0],
                [0,0,1,0,0]]
)});
  main.variable(observer()).define(["md","html","tex","matrix_ady_simetrica__3__7"], function(md,html,tex,matrix_ady_simetrica__3__7){return(
md `**Matriz de adyacencia simétrica**
${html `
<table style="font-size:20px">
<tr>
  <th></th>
  <th>${tex `\bf a \bf`}</th>
  <th>${tex `\bf b \bf`}</th>
  <th>${tex `\bf c \bf`}</th>
  <th>${tex `\bf d \bf`}</th>
  <th>${tex `\bf e \bf`}</th>
  <th>${tex `\bf Grado \bf`}</th>
<tr>
<tr>
  <td>${tex `\bf a \bf`}</td>
  <td>${tex `\colorbox{white}{0}`}</td> <!-- a -->
  <td>${tex `\colorbox{yellow}{0}`}</td> <!-- b --> 
  <td>${tex `\colorbox{yellow}{1}`}</td> <!-- c -->
  <td>${tex `\colorbox{yellow}{0}`}</td> <!-- d -->
  <td>${tex `\colorbox{yellow}{0}`}</td> <!-- e -->
  <td>${tex `${matrix_ady_simetrica__3__7[0].reduce((acc,cv) => acc+cv)}`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf b \bf`}</td>
  <td>${tex `\colorbox{yellow}{0}`}</td> <!-- a -->
  <td>${tex `\colorbox{white}{1}`}</td> <!-- b -->
  <td>${tex `\colorbox{#CCF9DF}{0}`}</td> <!-- c -->
  <td>${tex `\colorbox{#CCF9DF}{0}`}</td> <!-- d -->
  <td>${tex `\colorbox{#CCF9DF}{0}`}</td> <!-- e -->
  <td>${tex `${matrix_ady_simetrica__3__7[1].reduce((acc,cv) => acc+cv)}`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf c \bf`}</td>
  <td>${tex `\colorbox{yellow}{1}`}</td> <!-- a -->
  <td>${tex `\colorbox{#CCF9DF}{0}`}</td> <!-- b -->
  <td>${tex `\colorbox{white}{0}`}</td> <!-- c -->
  <td>${tex `\colorbox{#D67EA1}{1}`}</td> <!-- d -->
  <td>${tex `\colorbox{#D67EA1}{1}`}</td> <!-- e -->
  <td>${tex `${matrix_ady_simetrica__3__7[2].reduce((acc,cv) => acc+cv)}`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf d \bf`}</td>
  <td>${tex `\colorbox{yellow}{0}`}</td> <!-- a -->
  <td>${tex `\colorbox{#CCF9DF}{0}`}</td> <!-- b -->
  <td>${tex `\colorbox{#D67EA1}{1}`}</td> <!-- c -->
  <td>${tex `\colorbox{white}{1}`}</td> <!-- d -->
  <td>${tex `\colorbox{#66D6FF}{0}`}</td> <!-- e -->
  <td>${tex `${matrix_ady_simetrica__3__7[3].reduce((acc,cv) => acc+cv)}`}</td> <!-- Grado -->
<tr>
<tr>
  <td>${tex `\bf e \bf`}</td>
  <td>${tex `\colorbox{yellow}{0}`}</td> <!-- a -->
  <td>${tex `\colorbox{#CCF9DF}{0}`}</td> <!-- b -->
  <td>${tex `\colorbox{#D67EA1}{1}`}</td> <!-- c -->
  <td>${tex `\colorbox{#66D6FF}{0}`}</td> <!-- d -->
  <td>${tex `\colorbox{white}{0}`}</td> <!-- e -->
  <td>${tex `${matrix_ady_simetrica__3__7[4].reduce((acc,cv) => acc+cv)}`}</td> <!-- Grado -->
<tr>
</table>

`}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
## Ejercicios<br>
<br>
**Ejercicio 4.** Determine el grado de cada uno de los vértices y concluya si hay un camino euleriano o no y por qué:`
)});
  main.variable(observer("matrix_adj__3__8")).define("matrix_adj__3__8", function(){return(
(() => {
  const [a,b,c,d,e,f,g] = Array(7).fill(1)
  console.log('g:',g)
  return [
    [0,b,0,0,0,0,g], //a
    [a,0,c,0,0,0,g], //b
    [0,b,0,d,e,f,0], //c
    [0,0,c,0,e,0,0], //d
    [0,0,c,d,0,f,0], //e
    [0,0,c,0,e,0,g], //f
    [a,b,0,0,0,f,0], //f
  ]
})()
)});
  main.variable(observer()).define(["custom_graphviz","get_graph_adj","matrix_adj__3__8"], function(custom_graphviz,get_graph_adj,matrix_adj__3__8){return(
custom_graphviz(get_graph_adj(matrix_adj__3__8,false,true))
)});
  main.variable(observer("vertices_matrix__3__8")).define("vertices_matrix__3__8", ["vertices_matrix","matrix_adj__3__8"], function(vertices_matrix,matrix_adj__3__8){return(
vertices_matrix(matrix_adj__3__8)
)});
  main.variable(observer()).define(["md","vertices_matrix__3__8","tex_html"], function(md,vertices_matrix__3__8,tex_html){return(
md `## ${
  vertices_matrix__3__8.map((a, idx) => 
    tex_html(`\\delta ${String.fromCharCode(97 + idx)}:\\;${a}`) + '<br>')
}
<mark>Observamos que hay más de dos vértices con grado impar por lo tanto **no existe un caminio ni un ciclo euleriano**.</mark>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
**Ejercicio 5.** Determine el grado de cada uno de los vértices y concluya si hay un camino euleriano o no, concluya si hay un ciclo euleriano o no y por qué:
`
)});
  main.variable(observer("matrix_adj__3__9")).define("matrix_adj__3__9", function(){return(
[
    // a, b, c, d, e, f, g, h
/*a*/ [0, 1, 0, 0, 0, 0, 1, 0],
/*b*/ [1, 0, 1, 0, 0, 0, 1, 1],
/*c*/ [0, 1, 0, 1, 0, 0, 0, 1],
/*d*/ [0, 0, 1, 0, 1, 0, 0, 0],
/*e*/ [0, 0, 0, 1, 0, 1, 0, 1],
/*f*/ [0, 0, 0, 0, 1, 0, 1, 0],
/*g*/ [1, 1, 0, 0, 0, 1, 0, 1],
/*h*/ [0, 1, 1, 0, 1, 0, 1, 0]
]
)});
  main.variable(observer()).define(["adot","dots_graph_path_hamilton__3__9","iterator__3_9"], function(adot,dots_graph_path_hamilton__3__9,iterator__3_9){return(
adot.bind(this)`${dots_graph_path_hamilton__3__9[iterator__3_9]}${{engine: 'neato', zoom: false, useWorker: false }}`
)});
  main.variable(observer("viewof play__3_9")).define("viewof play__3_9", ["button"], function(button){return(
button({value: "Reproducir animación"})
)});
  main.variable(observer("play__3_9")).define("play__3_9", ["Generators", "viewof play__3_9"], (G, _) => G.input(_));
  main.variable(observer("iterator__3_9")).define("iterator__3_9", ["adot_iterator","dots_graph_path_hamilton__3__9","play__3_9","pass__3_9"], function(adot_iterator,dots_graph_path_hamilton__3__9,play__3_9,pass__3_9){return(
adot_iterator(dots_graph_path_hamilton__3__9.length, false, undefined, play__3_9, pass__3_9)
)});
  main.variable(observer("dots_graph_path_hamilton__3__9")).define("dots_graph_path_hamilton__3__9", function(){return(
[
`graph {
a -- b  [len=1.5] [color=red,penwidth=3.0];
a -- g  [len=1.5];
b -- c  [len=1.5];
b -- g  [len=1.5];
b -- h  [len=1.5];
c -- d  [len=1.5];
c -- h  [len=1.5];
d -- e  [len=1.5];
e -- f  [len=1.5];
e -- h  [len=1.5];
f -- g  [len=1.5];
g -- h  [len=1.5];
}`,
`graph {
a -- b  [len=1.5] [color=red,penwidth=3.0];
a -- g  [len=1.5];
b -- c  [len=1.5] [color=red,penwidth=3.0];
b -- g  [len=1.5];
b -- h  [len=1.5];
c -- d  [len=1.5];
c -- h  [len=1.5];
d -- e  [len=1.5];
e -- f  [len=1.5];
e -- h  [len=1.5];
f -- g  [len=1.5];
g -- h  [len=1.5];
}`,
`graph {
a -- b  [len=1.5] [color=red,penwidth=3.0];
a -- g  [len=1.5];
b -- c  [len=1.5] [color=red,penwidth=3.0];
b -- g  [len=1.5];
b -- h  [len=1.5];
c -- d  [len=1.5][color=red,penwidth=3.0];
c -- h  [len=1.5];
d -- e  [len=1.5];
e -- f  [len=1.5];
e -- h  [len=1.5];
f -- g  [len=1.5];
g -- h  [len=1.5];
}`,
`graph {
a -- b  [len=1.5] [color=red,penwidth=3.0];
a -- g  [len=1.5];
b -- c  [len=1.5] [color=red,penwidth=3.0];
b -- g  [len=1.5];
b -- h  [len=1.5];
c -- d  [len=1.5][color=red,penwidth=3.0];
c -- h  [len=1.5];
d -- e  [len=1.5][color=red,penwidth=3.0];
e -- f  [len=1.5];
e -- h  [len=1.5];
f -- g  [len=1.5];
g -- h  [len=1.5];
}`,
`graph {
a -- b  [len=1.5] [color=red,penwidth=3.0];
a -- g  [len=1.5];
b -- c  [len=1.5] [color=red,penwidth=3.0];
b -- g  [len=1.5];
b -- h  [len=1.5];
c -- d  [len=1.5][color=red,penwidth=3.0];
c -- h  [len=1.5];
d -- e  [len=1.5][color=red,penwidth=3.0];
e -- f  [len=1.5][color=red,penwidth=3.0];
e -- h  [len=1.5];
f -- g  [len=1.5];
g -- h  [len=1.5];
}`,
`graph {
a -- b  [len=1.5] [color=red,penwidth=3.0];
a -- g  [len=1.5];
b -- c  [len=1.5] [color=red,penwidth=3.0];
b -- g  [len=1.5];
b -- h  [len=1.5];
c -- d  [len=1.5][color=red,penwidth=3.0];
c -- h  [len=1.5];
d -- e  [len=1.5][color=red,penwidth=3.0];
e -- f  [len=1.5][color=red,penwidth=3.0];
e -- h  [len=1.5];
f -- g  [len=1.5][color=red,penwidth=3.0];
g -- h  [len=1.5];
}`,
`graph {
a -- b  [len=1.5] [color=red,penwidth=3.0];
a -- g  [len=1.5];
b -- c  [len=1.5] [color=red,penwidth=3.0];
b -- g  [len=1.5];
b -- h  [len=1.5];
c -- d  [len=1.5][color=red,penwidth=3.0];
c -- h  [len=1.5];
d -- e  [len=1.5][color=red,penwidth=3.0];
e -- f  [len=1.5][color=red,penwidth=3.0];
e -- h  [len=1.5];
f -- g  [len=1.5][color=red,penwidth=3.0];
g -- h  [len=1.5][color=red,penwidth=3.0];
}`
]
)});
  main.variable(observer("pass__3_9")).define("pass__3_9", function(){return(
Object.create({enable: false})
)});
  main.variable(observer("vertices_matrix__3__9")).define("vertices_matrix__3__9", ["vertices_matrix","matrix_adj__3__9"], function(vertices_matrix,matrix_adj__3__9){return(
vertices_matrix(matrix_adj__3__9)
)});
  main.variable(observer()).define(["md","vertices_matrix__3__9","tex_html"], function(md,vertices_matrix__3__9,tex_html){return(
md `## ${
  vertices_matrix__3__9.map((a, idx) => 
    tex_html(`\\delta ${String.fromCharCode(97 + idx)}:\\;${a}`) + '<br>')
}
<mark>Observamos que hay dos vértices con grado impar y hay **un camino hamiltoniano**.</mark>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
**Ejercicio 6.** Analice la gráfica y determine si hay un camino hamiltoniano y si hay un ciclo hamiltoniano:
`
)});
  main.variable(observer("matrix_adj__3__10")).define("matrix_adj__3__10", function(){return(
[
    // a, b, c, d, e, f
/*a*/ [0, 1, 0, 0, 1, 0],
/*b*/ [1, 0, 1, 0, 1, 1],
/*c*/ [0, 1, 0, 0, 0, 1],
/*d*/ [0, 0, 0, 0, 0, 1],
/*e*/ [1, 1, 0, 0, 0, 1],
/*f*/ [0, 1, 1, 0, 1, 0]
]
)});
  main.variable(observer()).define(["adot","dots_graph_path_hamilton__3__10","iterator__3_10"], function(adot,dots_graph_path_hamilton__3__10,iterator__3_10){return(
adot.bind(this)`${dots_graph_path_hamilton__3__10[iterator__3_10]}${{engine: 'neato', zoom: false, useWorker: false }}`
)});
  main.variable(observer("viewof play__3_10")).define("viewof play__3_10", ["button"], function(button){return(
button({value: "Reproducir animación"})
)});
  main.variable(observer("play__3_10")).define("play__3_10", ["Generators", "viewof play__3_10"], (G, _) => G.input(_));
  main.variable(observer("iterator__3_10")).define("iterator__3_10", ["adot_iterator","dots_graph_path_hamilton__3__10","play__3_10","pass__3_10"], function(adot_iterator,dots_graph_path_hamilton__3__10,play__3_10,pass__3_10){return(
adot_iterator(dots_graph_path_hamilton__3__10.length, false, undefined, play__3_10, pass__3_10)
)});
  main.variable(observer("pass__3_10")).define("pass__3_10", function(){return(
Object.create({enable: false})
)});
  main.variable(observer("dots_graph_path_hamilton__3__10")).define("dots_graph_path_hamilton__3__10", function(){return(
[
`graph {
a -- b  [len=1.5];
a -- e  [len=1.5];
b -- c  [len=1.5];
b -- e  [len=1.5];
b -- f  [len=1.5];
c -- f  [len=1.5];
d -- f  [len=1.5] [color=red,penwidth=3.0];
e -- f  [len=1.5];
}`,
`graph {
a -- b  [len=1.5];
a -- e  [len=1.5];
b -- c  [len=1.5];
b -- e  [len=1.5];
b -- f  [len=1.5];
c -- f  [len=1.5];
d -- f  [len=1.5] [color=red,penwidth=3.0];
e -- f  [len=1.5] [color=red,penwidth=3.0];
}`,
`graph {
a -- b  [len=1.5];
a -- e  [len=1.5] [color=red,penwidth=3.0];
b -- c  [len=1.5];
b -- e  [len=1.5];
b -- f  [len=1.5];
c -- f  [len=1.5];
d -- f  [len=1.5] [color=red,penwidth=3.0];
e -- f  [len=1.5] [color=red,penwidth=3.0];
}`,
`graph {
a -- b  [len=1.5] [color=red,penwidth=3.0];
a -- e  [len=1.5] [color=red,penwidth=3.0];
b -- c  [len=1.5];
b -- e  [len=1.5];
b -- f  [len=1.5];
c -- f  [len=1.5];
d -- f  [len=1.5] [color=red,penwidth=3.0];
e -- f  [len=1.5] [color=red,penwidth=3.0];
}`,
`graph {
a -- b  [len=1.5] [color=red,penwidth=3.0];
a -- e  [len=1.5] [color=red,penwidth=3.0];
b -- c  [len=1.5] [color=red,penwidth=3.0];
b -- e  [len=1.5];
b -- f  [len=1.5];
c -- f  [len=1.5];
d -- f  [len=1.5] [color=red,penwidth=3.0];
e -- f  [len=1.5] [color=red,penwidth=3.0];
}`
]
)});
  main.variable(observer("vertices_matrix__3__10")).define("vertices_matrix__3__10", ["vertices_matrix","matrix_adj__3__10"], function(vertices_matrix,matrix_adj__3__10){return(
vertices_matrix(matrix_adj__3__10)
)});
  main.variable(observer()).define(["md","vertices_matrix__3__10","tex_html"], function(md,vertices_matrix__3__10,tex_html){return(
md `## ${
  vertices_matrix__3__10.map((a, idx) => 
    tex_html(`\\delta ${String.fromCharCode(97 + idx)}:\\;${a}`) + '<br>')
}
<mark>Observamos que hay tres vértices con grado impar y hay **un camino hamiltoniano**.</mark>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
**Ejercicio 7.** Determine la matriz de adyacencia del siguiente grafo no dirigido:
`
)});
  main.variable(observer("matrix_adj__3__11")).define("matrix_adj__3__11", function(){return(
[
     //0,1,2,3,4,5,6
/*0*/ [1,1,0,0,0,0,1],
/*1*/ [1,0,1,0,0,0,1],
/*2*/ [0,1,0,1,1,1,0],
/*3*/ [0,0,1,0,1,0,0],
/*4*/ [0,0,1,1,0,1,0],
/*5*/ [0,0,1,0,1,0,1],
/*6*/ [1,1,0,0,0,1,0]
]
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
**Ejercicio 8.** Determine la matriz de adyacencia del siguiente grafo dirigido:
`
)});
  main.variable(observer()).define(["custom_graphviz","get_graph_adj","matrix_adj__3__12"], function(custom_graphviz,get_graph_adj,matrix_adj__3__12){return(
custom_graphviz(get_graph_adj(matrix_adj__3__12, true,true,undefined,true))
)});
  main.variable(observer("matrix_adj__3__12")).define("matrix_adj__3__12", function(){return(
[
     //a,b,c,d,e,f,g
/*a*/ [0,1,0,0,0,0,1],
/*b*/ [0,0,1,0,0,0,0],
/*c*/ [0,1,0,0,1,1,1],
/*d*/ [0,0,1,0,1,0,0],
/*e*/ [0,0,0,0,0,0,0],
/*f*/ [0,0,0,0,1,0,0],
/*g*/ [0,1,0,0,0,1,0]
]
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
**Ejercicio 9.** Identifique el gráfico a partir de la matriz de adyacencia:
`
)});
  main.variable(observer("matrix_adj__3__13")).define("matrix_adj__3__13", function(){return(
[
     //a,b,c,d,e,f
/*a*/ [0,1,1,0,1,1],
/*b*/ [1,0,0,1,0,0],
/*c*/ [0,0,0,1,0,1],
/*d*/ [0,0,1,0,0,0],
/*e*/ [0,0,1,0,0,1],
/*f*/ [0,1,0,1,0,0]
]
)});
  main.variable(observer()).define(["custom_graphviz","get_graph_adj","matrix_adj__3__13"], function(custom_graphviz,get_graph_adj,matrix_adj__3__13){return(
custom_graphviz(get_graph_adj(matrix_adj__3__13,undefined,true))
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
**Ejercicio 10.** Identifique el gráfico a partir de la matriz de ~~adyacencia~~ **incidencia**:
`
)});
  main.variable(observer("matrix_incd__3__14")).define("matrix_incd__3__14", function(){return(
[
     //1,2,3,4,5,6,7
/*a*/ [0,0,0,1,0,0,1],
/*b*/ [1,1,0,1,1,0,1],
/*c*/ [1,0,0,0,0,1,0],
/*d*/ [0,0,1,0,1,1,0],
/*e*/ [0,1,1,0,0,0,0]
]
)});
  main.variable(observer()).define(["custom_graphviz","get_graph_incd","matrix_incd__3__14"], function(custom_graphviz,get_graph_incd,matrix_incd__3__14){return(
custom_graphviz(get_graph_incd(matrix_incd__3__14,false,true))
)});
  main.variable(observer("vertices_matrix__3__14")).define("vertices_matrix__3__14", ["vertices_matrix","matrix_incd__3__14"], function(vertices_matrix,matrix_incd__3__14){return(
vertices_matrix(matrix_incd__3__14)
)});
  main.variable(observer()).define(["md","vertices_matrix__3__10","tex_html"], function(md,vertices_matrix__3__10,tex_html){return(
md `## ${
  vertices_matrix__3__10.map((a, idx) => 
    tex_html(`\\delta ${String.fromCharCode(97 + idx)}:\\;${a}`) + '<br>')
}
<mark>Observamos que hay tres vértices con grado impar y no hay **camino/ciclo euleriano/hamiltoniano**.</mark>
`
)});
  main.variable(observer("tree")).define("tree", ["md"], function(md){return(
md `---
# Árboles
`
)});
  main.variable(observer()).define(["md","a_target_blank","more_info_es"], function(md,a_target_blank,more_info_es){return(
md `En teoría de grafos, un **${a_target_blank('https://es.wikipedia.org/wiki/%C3%81rbol_(teor%C3%ADa_de_grafos)','árbol')}** es un grafo en el que cualesquier dos vértices están conectados por exactamente un camino. Un **bosque** es una unión disjunta de árboles. Un árbol a veces recibe el nombre de árbol libre.
<br><br>
${more_info_es('https://es.wikipedia.org/wiki/%C3%81rbol_(teor%C3%ADa_de_grafos)')}
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
## Tipos de árboles
<br>

`
)});
  main.variable(observer()).define(["md","custom_graphviz"], function(md,custom_graphviz){return(
md `### Libres
<br>
No tiene una jerarquía en específico.
${custom_graphviz(
`graph {
  b -- a;
  b -- c;
  b -- d;
  d -- e;
  d -- g;
  e -- f -- h;
}`)}
`
)});
  main.variable(observer()).define(["md","a_target_blank","more_info_es","custom_graphviz"], function(md,a_target_blank,more_info_es,custom_graphviz){return(
md `### Raíz
<br>
Un **${a_target_blank('http://www.kramirez.net/Discretas/Material/Presentaciones/Grafos.pdf','árbol raíz')}** es un árbol n-ario si cada vértice interno no tiene más de n hijos.
<br><br>
${more_info_es('http://www.kramirez.net/Discretas/Material/Presentaciones/Grafos.pdf')}

${custom_graphviz(
`graph {
  c -- b;
  c -- e -- f;
  c -- a -- h;
  b -- d;
  b -- g;
  
}`, {engine: 'dot', zoom: false, useWorker: false})}
`
)});
  main.variable(observer()).define(["md","a_target_blank","tex","more_info_es"], function(md,a_target_blank,tex,more_info_es){return(
md `
En matemáticas y lógica, una **${a_target_blank('https://es.wikipedia.org/wiki/Relaci%C3%B3n_n-aria','relación n-aria')}** ${tex `R`} (o a menudo simplemente relación) es una generalización de la relación binaria, donde R está formada por una tupla de ${tex `n`} términos:
### ${tex `R = \{(x_1,x_2,...,x_n):x_1 \in X_1 \wedge x_2 \in X_2 \wedge ... \wedge x_n \in X_n \wedge R(x_1,x_2,...,x_n) = verdadero \}`}<br><br>
${more_info_es('https://es.wikipedia.org/wiki/Relaci%C3%B3n_n-aria')}`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `Los arboles n-arios son aquellos arboles donde el número máximo de hijos por nodo es de ${tex `N`}, en la figura ${tex `7`} podemos apreciar dos árboles con grado ${tex `2`} y grado ${tex `3`}, estos dos arboles también los podemos definir como Árbol n-ario con n = ${tex `2`} y n=${tex `3`} respectivamente.`
)});
  main.variable(observer()).define(["html"], function(html){return(
html `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="536px" height="329px" viewBox="0 0 536 329" enable-background="new 0 0 536 329" xml:space="preserve">  <image id="image0" width="536" height="329" x="0" y="0"
    xlink:href="data:image/png;base64,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
RU5ErkJggg==" />
</svg>
`
)});
  main.variable(observer()).define(["md","more_info_es"], function(md,more_info_es){return(
md `${more_info_es('https://www.oscarblancarteblog.com/2014/08/22/estructura-de-datos-arboles/')}`
)});
  main.variable(observer()).define(["md","tex","a_target_blank","custom_graphviz"], function(md,tex,a_target_blank,custom_graphviz){return(
md `<br>
### Expansión
<br>
Dado un grafo ${tex `G`}, el **${a_target_blank('http://www.kramirez.net/Discretas/Material/Presentaciones/Grafos.pdf','árbol de expansión')}** es un subgrafo de ${tex `G`} que conecta todos los nodos de este mismo sin formar un ciclo.
<br><br>
${custom_graphviz(
`graph {
f [pos="4,4!"];
a [pos="0,4!"];
e [pos="3,3!"];
c [pos="1,3!"];
d [pos="3,2!"];
h [pos="4,2!"];
b [pos="1,2!"];
g [pos="4,1!"];
f -- a [label="2"];
f -- e [label="4"];
f -- h [label="1"];
e -- c;
e -- d [label="2"];
d -- b [label="1"];
d -- g [label="4"];
}`
)}
`
)});
  main.variable(observer()).define(["md","a_target_blank","custom_graphviz"], function(md,a_target_blank,custom_graphviz){return(
md `<br>
### Binarios
<br>
En ciencias de la computación, un **${a_target_blank('https://es.wikipedia.org/wiki/%C3%81rbol_binario','árbol binario')}** es una estructura de datos en la cual cada nodo puede tener un hijo izquierdo y un hijo derecho. No pueden tener más de dos hijos (de ahí el nombre "binario"). Si algún hijo tiene como referencia a **null**, es decir que no almacena ningún dato, entonces este es llamado un nodo externo. En el caso contrario el hijo es llamado un nodo interno. Usos comunes de los árboles binarios son los árboles binarios de búsqueda, los montículos binarios y Codificación de Huffman.
<br><br>
${custom_graphviz(
` graph {
  c -- b;
  c -- a;
  b -- d;
  b -- g;
  a -- h;
}
`, {engine: 'dot', zoom: false, useWorker : false})}
`
)});
  main.variable(observer()).define(["md","more_info_es","custom_graphviz"], function(md,more_info_es,custom_graphviz){return(
md `**Árbol binario lleno**: Se dice que un árbol binario está lleno si es un árbol binario de altura k que tiene 2k-1 nodos. 
<br><br>
**Árbol binario completo**: Se dice que un árbol binario de altura k está completo si está lleno hasta altura k-1 y el último nivel esta ocupado de izquierda a derecha.
<br><br>
${more_info_es('http://informatica.uv.es/iiguia/AED/teoria/apuntes/cuatr2/tema14.pdf')}
<br><br>
Binario completo-
${custom_graphviz(
`graph {
  a --b;
  a -- c;
  b -- d;
  b -- e;
  e -- h;
  e -- i;
  c -- f;
  c -- g;
}
`, {engine: 'dot', zoom: false, useWorker: false})}
<br><br>
Binario lleno.
${custom_graphviz(
`graph {
  a --b;
  a -- c;
  b -- d;
  b -- e;  
  c -- f;
  c -- g;
}
`, {engine: 'dot', zoom: false, useWorker: false})}
`
)});
  main.variable(observer()).define(["md","more_info_es","custom_graphviz"], function(md,more_info_es,custom_graphviz){return(
md `**Árbol degenerado**: Un árbol binario degenerado es un árbol en el que todos los nodos tienen solamente un subárbol excepto el ultimo.
<br><br>
${more_info_es('https://tutorias.co/preguntas-respuestas/que-es-un-arbol-degenerado.html')}
${custom_graphviz(
`graph {
  c -- b -- d -- a;
}
`,{engine: 'dot', zoom: false, useWorker: false})}
`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `<br>
## Determinar el nivel y la altura del siguiente árbol considerando como raíz el vértice ${tex `d`}`
)});
  main.variable(observer()).define(["md","custom_graphviz"], function(md,custom_graphviz){return(
md `Árbol libre.
${custom_graphviz(`
graph {
d -- b;
d -- h;
d -- e;
e -- f -- g;
b -- c;
b -- a;
}
`)}
`
)});
  main.variable(observer()).define(["md","custom_graphviz"], function(md,custom_graphviz){return(
md `Árbol raíz.
${custom_graphviz(`
graph {
d [xlabel="Nivel 0"];
e [xlabel="Nivel 1"];
f [xlabel="Nivel 2"];
g [xlabel="Nivel 3"];
d -- b;
d -- h;
d -- e;
e -- f -- g;
b -- c;
b -- a;
}
`, {engine: 'dot', useWorker: false, zoom: false})}`
)});
  main.variable(observer()).define(["md","custom_graphviz"], function(md,custom_graphviz){return(
md `<br>
Árbol raíz.
${custom_graphviz(`
graph {
a [xlabel="Nivel 0"];
b [xlabel="Nivel 1"];
d [xlabel="Nivel 2"];
e [xlabel="Nivel 3"];
f [xlabel="Nivel 4"];
g [xlabel="Nivel 5"];
a -- b;
b -- c;
b -- d;
d -- e -- f -- g;
d -- h;
}
`, {engine: 'dot', useWorker: false, zoom: false})}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Sub árboles, vértices terminales e internos`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
c [xlabel="Ancestro"]
a [xlabel="Padre"]
c1 [label="c",xlabel="Hijos"]
c -- a;
a -- b;
a -- c1;
}
`
, {engine:'dot',zoom:false,useWorker:false})
)});
  main.variable(observer()).define(["md","custom_graphviz","tex"], function(md,custom_graphviz,tex){return(
md `${custom_graphviz(
`graph {
  c [xlabel="Nivel 0"];
  e [xlabel="Nivel 1"];
  f [xlabel="Nivel 2"];
  j [xlabel="Nivel 3"];
  i [xlabel="Nivel 4"];
  c -- b;
  c -- a;
  b -- d;
  b -- g;
  c -- e;
  e -- f;
  a -- h;
  f -- j;
  j -- i;
  j -- k;
}
`, {engine: 'dot', useWorker: false, zoom: false})}
Los vértices terminales equivalen a las **hojas**.
## ${tex `Vértices\;terminales = d,g,i,k,h`}
## ${tex `Vértices\;internos = b,e,f,j,a`}
`
)});
  main.variable(observer()).define(["md","tex","more_info_es"], function(md,tex,more_info_es){return(
md `Un **sub-árbol**: Conocemos como Sub-Árbol a todo Árbol generado a partir de una sección determinada del Árbol, Por lo que podemos decir que un Árbol es un nodo Raíz con ${tex `N`} Sub-Árboles.
<br><br>
${more_info_es('https://www.oscarblancarteblog.com/2014/08/22/estructura-de-datos-arboles/')}
`
)});
  main.variable(observer()).define(["md","custom_graphviz"], function(md,custom_graphviz){return(
md `### Sub árbol raíz b
${custom_graphviz(
  `graph {
  b -- d;
  b -- g;
  }`, {engine: 'dot', zoom: false, useWorker: false})}
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### Sub árbol raíz e`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
e -- f -- j;
j -- i;
j -- k;
}
`, {engine: 'dot', userWorker: false, zoom: false})
)});
  main.variable(observer()).define(["md","more_info_es"], function(md,more_info_es){return(
md `## Árbol de expansión mínimo
<br>
Dado un grafo conexo, no dirigido y con pesos en las aristas, un árbol de expansión mínima es un árbol compuesto por todos los vértices y cuya suma de sus aristas es la de menor peso.
<br><br>
${more_info_es('https://jariasf.wordpress.com/2012/04/19/arbol-de-expansion-minima-algoritmo-de-kruskal/')}
`
)});
  main.variable(observer()).define(["adot","dots_graph__4__1","iterator__4_1"], function(adot,dots_graph__4__1,iterator__4_1){return(
adot.bind(this)`${dots_graph__4__1[iterator__4_1]}${{engine: 'neato', zoom: false, useWorker: false }}`
)});
  main.variable(observer("viewof play__4_1")).define("viewof play__4_1", ["button"], function(button){return(
button({value: "Reproducir animación"})
)});
  main.variable(observer("play__4_1")).define("play__4_1", ["Generators", "viewof play__4_1"], (G, _) => G.input(_));
  main.variable(observer("iterator__4_1")).define("iterator__4_1", ["adot_iterator","dots_graph__4__1","play__4_1","pass__4_1"], function(adot_iterator,dots_graph__4__1,play__4_1,pass__4_1){return(
adot_iterator(dots_graph__4__1.length, false, undefined, play__4_1, pass__4_1)
)});
  main.variable(observer("pass__4_1")).define("pass__4_1", function(){return(
Object.create({enable: false})
)});
  main.variable(observer("dots_graph__4__1")).define("dots_graph__4__1", function(){return(
[
`graph {
  c -- a [label=3, len=1.8];
  a -- b [label=2, len=1.8];
  g -- b [label=5, len=1.8];
  g -- d [label=4, len=1.8];  
  g -- f [label=3, len=1.8];
  d -- e [label=5, len=1.8];
  d -- c [label=6, len=1.8];
  f -- e [label=2, len=1.8];
  f -- i [label=6, len=1.8];
  f -- h [label=3, len=1.8];
  f -- b [label=3, len=1.8];
  i -- e [label=7, len=1.8];
  i -- h [label=2, len=1.8];  
}`,`graph {  
  c -- a [label=3, len=1.8];
  a -- b [label=2, len=1.8];
  g -- b [label=5, len=1.8];
  g -- d [label=4, len=1.8];  
  g -- f [label=3, len=1.8] [color=red,penwidth=3.0];
  d -- e [label=5, len=1.8];
  d -- c [label=6, len=1.8];
  f -- e [label=2, len=1.8];
  f -- i [label=6, len=1.8];
  f -- h [label=3, len=1.8];
  f -- b [label=3, len=1.8];
  i -- e [label=7, len=1.8];
  i -- h [label=2, len=1.8];  
}`,`graph {  
  c -- a [label=3, len=1.8];
  a -- b [label=2, len=1.8];
  g -- b [label=5, len=1.8];
  g -- d [label=4, len=1.8];  
  g -- f [label=3, len=1.8] [color=red,penwidth=3.0];
  d -- e [label=5, len=1.8];
  d -- c [label=6, len=1.8];
  f -- e [label=2, len=1.8] [color=red,penwidth=3.0];
  f -- i [label=6, len=1.8];
  f -- h [label=3, len=1.8];
  f -- b [label=3, len=1.8];
  i -- e [label=7, len=1.8];
  i -- h [label=2, len=1.8];  
}`,`graph {  
  c -- a [label=3, len=1.8];
  a -- b [label=2, len=1.8];
  g -- b [label=5, len=1.8];
  g -- d [label=4, len=1.8];  
  g -- f [label=3, len=1.8] [color=red,penwidth=3.0];
  d -- e [label=5, len=1.8];
  d -- c [label=6, len=1.8];
  f -- e [label=2, len=1.8] [color=red,penwidth=3.0];
  f -- i [label=6, len=1.8];
  f -- h [label=3, len=1.8] [color=red,penwidth=3.0];
  f -- b [label=3, len=1.8];
  i -- e [label=7, len=1.8];
  i -- h [label=2, len=1.8];  
}`,`graph {  
  c -- a [label=3, len=1.8];
  a -- b [label=2, len=1.8];
  g -- b [label=5, len=1.8];
  g -- d [label=4, len=1.8];  
  g -- f [label=3, len=1.8] [color=red,penwidth=3.0];
  d -- e [label=5, len=1.8];
  d -- c [label=6, len=1.8];
  f -- e [label=2, len=1.8] [color=red,penwidth=3.0];
  f -- i [label=6, len=1.8];
  f -- h [label=3, len=1.8] [color=red,penwidth=3.0];
  f -- b [label=3, len=1.8];
  i -- e [label=7, len=1.8];
  i -- h [label=2, len=1.8] [color=red,penwidth=3.0];  
}`,`graph {  
  c -- a [label=3, len=1.8];
  a -- b [label=2, len=1.8];
  g -- b [label=5, len=1.8];
  g -- d [label=4, len=1.8];  
  g -- f [label=3, len=1.8] [color=red,penwidth=3.0];
  d -- e [label=5, len=1.8];
  d -- c [label=6, len=1.8];
  f -- e [label=2, len=1.8] [color=red,penwidth=3.0];
  f -- i [label=6, len=1.8];
  f -- h [label=3, len=1.8] [color=red,penwidth=3.0];
  f -- b [label=3, len=1.8];
  i -- e [label=7, len=1.8];
  i -- h [label=2, len=1.8] [color=red,penwidth=3.0];  
}`,`graph {  
  c -- a [label=3, len=1.8];
  a -- b [label=2, len=1.8];
  g -- b [label=5, len=1.8];
  g -- d [label=4, len=1.8];  
  g -- f [label=3, len=1.8] [color=red,penwidth=3.0];
  d -- e [label=5, len=1.8];
  d -- c [label=6, len=1.8];
  f -- e [label=2, len=1.8] [color=red,penwidth=3.0];
  f -- i [label=6, len=1.8];
  f -- h [label=3, len=1.8] [color=red,penwidth=3.0];
  f -- b [label=3, len=1.8] [color=red,penwidth=3.0];
  i -- e [label=7, len=1.8];
  i -- h [label=2, len=1.8] [color=red,penwidth=3.0];  
}`,`graph {  
  c -- a [label=3, len=1.8];
  a -- b [label=2, len=1.8] [color=red,penwidth=3.0];
  g -- b [label=5, len=1.8];
  g -- d [label=4, len=1.8];  
  g -- f [label=3, len=1.8] [color=red,penwidth=3.0];
  d -- e [label=5, len=1.8];
  d -- c [label=6, len=1.8];
  f -- e [label=2, len=1.8] [color=red,penwidth=3.0];
  f -- i [label=6, len=1.8];
  f -- h [label=3, len=1.8] [color=red,penwidth=3.0];
  f -- b [label=3, len=1.8] [color=red,penwidth=3.0];
  i -- e [label=7, len=1.8];
  i -- h [label=2, len=1.8] [color=red,penwidth=3.0];  
}`,`graph {  
  c -- a [label=3, len=1.8] [color=red,penwidth=3.0];
  a -- b [label=2, len=1.8] [color=red,penwidth=3.0];
  g -- b [label=5, len=1.8];
  g -- d [label=4, len=1.8];  
  g -- f [label=3, len=1.8] [color=red,penwidth=3.0];
  d -- e [label=5, len=1.8];
  d -- c [label=6, len=1.8];
  f -- e [label=2, len=1.8] [color=red,penwidth=3.0];
  f -- i [label=6, len=1.8];
  f -- h [label=3, len=1.8] [color=red,penwidth=3.0];
  f -- b [label=3, len=1.8] [color=red,penwidth=3.0];
  i -- e [label=7, len=1.8];
  i -- h [label=2, len=1.8] [color=red,penwidth=3.0];  
}`,`graph {  
  c -- a [label=3, len=1.8] [color=red,penwidth=3.0];
  a -- b [label=2, len=1.8] [color=red,penwidth=3.0];
  g -- b [label=5, len=1.8];
  g -- d [label=4, len=1.8] [color=red,penwidth=3.0];
  g -- f [label=3, len=1.8] [color=red,penwidth=3.0];
  d -- e [label=5, len=1.8];
  d -- c [label=6, len=1.8];
  f -- e [label=2, len=1.8] [color=red,penwidth=3.0];
  f -- i [label=6, len=1.8];
  f -- h [label=3, len=1.8] [color=red,penwidth=3.0];
  f -- b [label=3, len=1.8] [color=red,penwidth=3.0];
  i -- e [label=7, len=1.8];
  i -- h [label=2, len=1.8] [color=red,penwidth=3.0];  
}`
]
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
` graph {  
  g -- d [label=4];
  g -- f [label=3];
  f -- b [label=3];  
  f -- e [label=2];
  f -- h [label=3];  
  h -- i [label=2];    
  b -- a [label=2];
  a -- c [label=3];
}
`, {engine: 'dot', zoom: false, useWorker: false}
)
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## ${tex `3 + 4 = 7`}
## ${tex `3 + 2 + 3 = 8`}
## ${tex `2 + 2 = 4`}
## ${tex `3`}
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
# Árbol binario, estructura recursiva.

`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
a -- b;
a -- c;
b -- d;
b -- e;
e -- h;
e -- i;
c -- f;
c -- g;
}
`, {engine: 'dot', zoom: false, useWorker: false})
)});
  main.variable(observer()).define(["md","custom_graphviz"], function(md,custom_graphviz){return(
md `### Raíz
${custom_graphviz(`graph { a }`)}
`
)});
  main.variable(observer()).define(["md","custom_graphviz"], function(md,custom_graphviz){return(
md `### Sub árbol izquierdo
${custom_graphviz(
`graph {
b -- d;
b -- e;
e -- h;
e -- i;
}
`, {engine: 'dot', zoom: false, useWorker: false})}
`
)});
  main.variable(observer()).define(["md","custom_graphviz"], function(md,custom_graphviz){return(
md `### Sub árbol derecho
${custom_graphviz(
`graph {
c -- f;
c -- g;
}
`, {engine: 'dot', zoom: false, useWorker: false})}
`
)});
  main.variable(observer()).define(["md","custom_graphviz"], function(md,custom_graphviz){return(
md `Sub árbo derecho se puede descomponer en: 
<br><br>
Raíz.
${custom_graphviz('graph {c}')}
<br><br>
Sub árbol izq.
${custom_graphviz('graph {f}')}
<br><br>
Sub árbol der.
${custom_graphviz('graph {g}')}
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
## Recorrido de árboles

`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  a [pos="3,5!",xlabel="Raíz"];
  b [pos="1,4!",xlabel="Hijo izquierdo"];
  c [pos="5,4!",xlabel="Hijo derecho"];
  d [pos="0,3!"];
  e [pos="2,3!"];
  g [pos="1,2!"];
  h [pos="3,2!"];
  f [pos="6,3!"];
  i [pos="5,2!"];
  a -- b;
  a -- c;
  b -- d;
  b -- e;
  e -- g;
  e -- h;
  c -- f -- i;
}
`, {engine: 'neato', zoom: false, useWorker: false})
)});
  main.variable(observer()).define(["html","tex"], function(html,tex){return(
html `
<table style="font-size:20px;">
<tr>
  <th>Orden</th>
  <th>Posiciones</th>
  <th>Resultado</th>
<tr>
  <td>Pre orden</td>
  <td>${tex `raíz - izq. - der.`}</td>
  <td>${tex `\overbrace{A}^{raíz} \; \overbrace{BDEGH}^{izq} \; \overbrace{CFI}^{der}`}</td>
</tr>
<tr>
  <td>In orden</td>
  <td>${tex `izq. - raíz - der.`}</td>
  <td>${tex `\overbrace{DBGEH}^{izq} \; \overbrace{A}^{raíz} \; \overbrace{CIF}^{der}`}</td>
</tr>
<tr>
  <td>Pos orden</td>
  <td>${tex `izq. - der. - raíz`}</td>
<td>${tex `\overbrace{DGHEB}^{izq} \; \overbrace{IFC}^{der} \; \overbrace{A}^{raíz}`}</td>
</tr>
</table>`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `<br>
## Expresiones aritméticas
<br>
<ul>
<li>Los vértices terminales son operandos (números).</li>
<li>Los vértices internos son operandos.</li>
<li>La raíz siempre debe ser un operador.</li>
<li>Prioridad de operadores<br>
${tex `(x)[x]|x|`}<br>
${tex `\sqrt[]x \; x^y`}<br>
${tex `\cdot /`}<br>
${tex `\plusmn`}<br>
</li>
</ul>
<br>

<h3>Recorrido de expresiones aritméticas.</h3>

<br>
<ul>
<li>
Pre fijo: ${tex `\;\;raíz - izq. - der.`}
</li>
<li>
Entre fijo: ${tex `\;\;izq. - raíz - der.`}
</li>
<li>
Pos fijo: ${tex `\;\;izq - der. - raíz`}
</li>
</ul>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
**Ejemplo**. Convertir la siguiente expresión aritmética a un recorrido de árbol en pre fijo, entre fijo y pos fijo.
`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## ${tex `[a + b] / [c \cdot (d - e)]`}`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  {rank = "."; "+";}
  "." [label="⋅"]
  "/" -- "+";
  "/" -- ".";
  "+" -- a;
  "+" -- b;
  "." -- c;
  "." -- "-";
  "-" -- "d";
  "-" -- "e";
}`
, {engine: 'dot', useWorker: false, zoom: false})
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `<ul>
<li>
Pre fijo:<br><br>
<h2>${tex `\;\; \overbrace{/}^{raiz} \; \overbrace{\underbrace{+}_{raíz} \; \underbrace{a}_{izq} \; \underbrace{b}_{der}}^{izq} \; \overbrace{\underbrace{\cdot}_{raiz} \; \underbrace{c}_{izq} \; \underbrace{ \underbrace{-}_{raíz} \; \underbrace{d}_{izq} \; \underbrace{e}_{der}}_{der}}^{der}`}</h2><br><br>
</li>
<li>
Entre fijo: <br><br>
<h2>${tex `\;\; \overbrace{\underbrace{a}_{izq} \; \underbrace{+}_{raíz} \; \underbrace{b}_{der}}^{izq} \; \overbrace{/}^{raíz} \; \overbrace{ \underbrace{c}_{izq} \; \underbrace{\cdot}_{raíz} \; \underbrace{\underbrace{d}_{izq} \; \underbrace{-}_{raíz} \; \underbrace{e}_{der}}_{der}}^{der}`}</h2><br><br>
</li>
<li>
Pos fijo: <br><br>
<h2>${tex `\;\; \overbrace{\underbrace{a}_{izq} \; \underbrace{b}_{der} \; \underbrace{+}_{raíz}}^{izq} \; \overbrace{ \underbrace{c}_{izq} \; \underbrace{\underbrace{d}_{izq} \underbrace{e}_{der} \underbrace{-}_{raíz}}_{der} \; \underbrace{\cdot}_{raíz}}^{der} \; \overbrace{/}^{raíz}`}</h2>
</li>
</ul>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejemplo.** Si se tiene la expresión pos fija encuentra la gráfica.`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## ${tex `\overbrace{a \; b \; c \; + \; /}^{izq} \; \overbrace{\; b \; c \; / \;}^{der} \; \overbrace{-}^{raíz}`}`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
` graph {
{rank = "/1"; "/";}
"/1" [label="/"];
b1 [label="b"];
c1 [label="c"];
"-" -- "/";
"-" -- "/1";
"/" -- "a";
"/" -- "+";
"+" -- b;
"+" -- c;
"/1" -- b1;
"/1" -- c1;
}`, {engine: 'dot', zoom: false, useWorker: false})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejemplo**. Usando la gráfica anterior generada, obtener la expresión prefija del recorrido del árbol.`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## ${tex `\overbrace{-}^{raíz} \; \overbrace{ \; / \; a \; \; + \; \; b \; c}^{izq} \; \overbrace{\; / \; b \; c}^{der}`}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejemplo**. Usando la gráfica anterior generada, obtener la expresión entre fija del recorrido del árbol.`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## ${tex `\overbrace{a \; / \; b \; + \; c}^{izq} \; \overbrace{ - }^{raíz} \; \overbrace{ \; b \; / \; c}^{der}`}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
## Ejercicios`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
**Ejercicio 1**. Determine la altura y el nivel del árbol considerando como raíz el vértice c, grafique este nuevo árbol obtenido:`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
` graph {
  c -- b;
  b -- a;
  b -- d;
  d -- h;
  d -- e;
  d -- g;
  h -- f;
  h -- i;
  i -- j;
  j -- k;
  j -- l;
}
`, {engine: 'neato', zoom: false, useWorker: false})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Rehaciendo árbol.`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
` graph {
  c [xlabel="Nivel 0"];
  b [xlabel="Nivel 1"];
  d [xlabel="Nivel 2"];
  h [xlabel="Nivel 3"];
  i [xlabel="Nivel 4"];
  j [xlabel="Nivel 5"];
  k [xlabel="Nivel 6"];
  c -- b;
  b -- a;
  b -- d;
  d -- h;
  d -- e;
  d -- g;
  h -- f;
  h -- i;
  i -- j;
  j -- k;
  j -- l;
}
`, {engine: 'dot', zoom: false, useWorker: false})
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `<mark>El arból con raíz en el nodo ${tex `C`}, tiene **${tex `\bf 6 \bf`} níveles** y su **altura** es de ${tex `\bf 7 \bf`}.</mark>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>**Ejercicio 2**. Determine la altura del árbol considerando como raíz el vértice d.`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  d -- b;
  d -- h:
  d -- e;
  d -- g;
  b -- c;
  b -- a;
  h -- f;
  h -- i;
  i -- j;
  j -- k;
  j -- l;
}
`, {engine: 'neato', zoom: false, useWorker: false})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Rehaciendo árbol.`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  d [xlabel="Nivel 0"];
  h [xlabel="Nivel 1"];
  i [xlabel="Nivel 2"];
  j [xlabel="Nivel 3"];
  k [xlabel="Nivel 4"];
  d -- b;
  d -- h:
  d -- e;
  d -- g;
  b -- c;
  b -- a;
  h -- f;
  h -- i;
  i -- j;
  j -- k;
  j -- l;
}
`, {engine: 'dot', zoom: false, useWorker: false})
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `<mark>El arból con raíz en el nodo ${tex `C`}, tiene **${tex `\bf 4 \bf`} níveles** y su **altura** es de ${tex `\bf 5 \bf`}.</mark>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br> **Ejercicio 3.** ¿Cuál es el árbol de expansión mínima del siguiente árbol y cuál es el coste total?`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  h -- a [label="4"] [len=1.5] [color=red,penwidth=3.0];
  h -- g [label="8"] [len=1.5];
  h -- e [label="7"] [len=1.5];
  h -- d [label="2"] [len=1.5] [color=red,penwidth=3.0];
  h -- c [label="3"] [len=1.5];
  a -- b [label="4"] [len=1.5] [color=red,penwidth=3.0];
  b -- c [label="7"] [len=1.5];
  c -- d [label="2"] [len=1.5] [color=red,penwidth=3.0];  
  d -- e [label="5"] [len=1.5] [color=red,penwidth=3.0];
  e -- f [label="6"] [len=1.5];  
  f -- g [label="5"] [len=1.5] [color=red,penwidth=3.0];
  g -- a [label="6"] [len=1.5] [color=red,penwidth=3.0];  
}
`
, {engine: 'neato', zoom: false, useWorker: false})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>**Ejercicio 4.** Cuál es el recorrido del siguiente árbol en pre orden, in orden y pos orden:`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  b -- d;
  b -- e;
  e -- h;
  e -- i;
}
`, {engine: 'dot', useWorker: false, zoom: false}  )
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `
<ul>
<li>
Pre orden: <br><br>
<h2>${tex `\overbrace{b}^{raíz} \; \overbrace{d}^{izq} \; \overbrace{\underbrace{e}_{raíz} \; \underbrace{h}_{izq} \; \underbrace{i}_{der}}^{der}`}</h2>
</li>
<li>
In orden: <br><br>
<h2>${tex `\overbrace{d}^{izq} \; \overbrace{b}^{raíz} \; \overbrace{\underbrace{h}_{izq} \; \underbrace{e}_{raíz} \; \underbrace{i}_{der}}^{der}`}</h2>
</li>
<li>
Pos orden: <br><br>
<h2>${tex `\overbrace{d}^{izq} \; \overbrace{\underbrace{h}_{izq} \; \underbrace{i}_{der} \; \underbrace{e}_{raíz}}^{der} \; \overbrace{b}^{raíz}`}</h2>
</li>
</ul>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>**Ejercicio 5.** Cuál es el recorrido del siguiente árbol en preorden, inorden y pos orden:`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  a -- b;
  b -- d;
  b -- e;
  e -- h;
  e -- i;
  a -- c;
  c -- f;
  c -- g;
}
`, {engine: 'dot', useWorker: false, zoom: false})
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `
<ul>
<li>
Pre orden: <br><br>
<h2>${tex `\overbrace{a}^{raiz} \; \overbrace{b \; d \; e \; h \; i}^{izq} \; \overbrace{c \; f \; g}^{der}`}</h2>
</li>
<li>
In orden: <br><br>
<h2>${tex `\overbrace{d \; b \; h \; e \; i}^{izq} \; \overbrace{a}^{raíz} \; \overbrace{f \; c \; g}^{der}`}</h2>
</li>
<li>
Pos orden: <br><br>
<h2>${tex `\overbrace{d \; h \; i \; e \; b}^{izq} \; \overbrace{f \; g \; c}^{der} \; \overbrace{a}^{raíz}`}</h2>
</li>
</ul>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>**Ejercicio 6.** Grafique el árbol obtenido de la siguiente expresión teniendo en cuenta que fue escrita en POSFIJA Y su forma prefija y entre fija:`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## ${tex `Posfija: \; a \; b \; c \; \cdot \; /`}`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  {rank= "."; "a";}
  "." [label="⋅"]
  "." -- b;
  "." -- c;
  "/" -- a;
  "/" -- ".";
}`, {engine: 'dot', useWorker: false, zoom: false})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejercicio 7**. Grafique la siguiente expresión aritmética a través de un árbol:`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## ${tex `(x \cdot y 	\text{\textasciicircum} 2) + (b \cdot (x + c)) \; x`}`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  {rank= "."; "+"; }
  
  "." [label="⋅"];
  ".1" [label="⋅"];
  ".2" [label="⋅"];
  "x1" [label="x"];
  "x2" [label="x"];
  "+1" [label="+"];  
  
  "+" -- ".2";
  "+" -- ".";
  "." -- x;
  "." -- "^";
  "^" -- "y";
  "^" -- "2";
  ".2" -- ".1";
  ".2" -- x2;  
  ".1" -- b;
  ".1" -- "+1";
  "+1" -- c;
  "+1" -- x1;
  
}`, {engine: 'dot', useWorker: false, zoom: false})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejercicio 8.** ¿Cuál es la expresión matemática del siguiente árbol?`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {  
  "-" -- "/";
  "-" -- "/2";
  "/" -- x;
  "/" -- "+";
  "+" -- a;
  "+" -- b;
  "/2" -- b2;
  "/2" -- c;  
  b2 [label="b"];
  "/2" [label="/"];  
}`, {engine: 'dot', zoom: false, useWorker: false})
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `# <mark>${tex `(x/(a+b))-(b/c) = \frac{x}{(a + b)} - \frac{b}{c}`} </mark>`
)});
  main.variable(observer("algorithms")).define("algorithms", ["md"], function(md){return(
md `---
# Algoritmos`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
## Algoritmo de prim`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`digraph {
  node [shape="box"];
  a [label="Inicio"] [shape="ellipse"];
  b [label=<Selecciona un <b>vértice</b>>];
  c [label=<Selecciona la <b>arista</b>&nbsp; de menor peso conectada al vértice seleccionado>];
  d [label=<En cada iteración selecciona la <b>arista</b>&nbsp;&nbsp;de <b>menor peso</b>&nbsp; relacionada con los vértices conectados>];
  e [label=<El algoritmo finaliza cuando todos los vertices están conectados n-1 aristas>];
  f [label=<Fin>] [shape="ellipse"];
  a -> b -> c -> d -> e -> f;
}`
, {engine: 'dot', zoom: false, useWorker: false})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejemplo.**`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  a -- b [label=4] [len=1.8] [color=red,penwidth=3.0];
  b -- c [label=3] [len=1.8] [color=red,penwidth=3.0];
  c -- f [label=5] [len=1.8];
  f -- i [label=1] [len=1.8] [color=red,penwidth=3.0];
  i -- h [label=5] [len=1.8];
  h -- g [label=6] [len=1.8] [color=red,penwidth=3.0];
  g -- d [label=8] [len=1.8];
  d -- a [label=6] [len=1.8];
  e -- a [label=4] [len=1.8] [color=red,penwidth=3.0];
  e -- i [label=4] [len=1.8];
  e -- f [label=2] [len=1.8] [color=red,penwidth=3.0];
  e -- b [label=7] [len=1.8];
  e -- h [label=2] [len=1.8] [color=red,penwidth=3.0];
  e -- d [label=5] [len=1.8] [color=red,penwidth=3.0];
  
}`, {engine: 'neato', zoom: false, useWorker: false})
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `Coste total de ${tex `${2 + 2 + 5 + 4 + 4 + 3 + 1 + 6}`} vértices.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
## Algoritmo de Dijkstra
`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`digraph {
  node [shape="box"];
  a [label="Inicio"] [shape="ellipse"];
  b [label=<Asignar para cada nodo no visitado <b>infinito</b>>];
  c [label="Mantener un registro de los nodos visitados"];
  d [label="Calcular distancias a cada nuevo nodo sumando la distancia anterior"];
  e [label="Si la distancia nueva calculada es menor que la anterior, reemplazarla, sino ignorarlo"];
  f [label="El algoritmo finaliza cuando se llega al nodo final"];
  g [label="Fin"] [shape="ellipse"];
  a -> b -> c -> d -> e -> f -> g;
}
`
, {engine: 'dot', useWorker: false, zoom: false})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejemplo.**`
)});
  main.variable(observer()).define(["adot","dots_graph__6__1","iterator__6_1"], function(adot,dots_graph__6__1,iterator__6_1){return(
adot.bind(this)`${dots_graph__6__1[iterator__6_1]}${{engine: 'neato', zoom: false, useWorker: false }}`
)});
  main.variable(observer("viewof play__6_1")).define("viewof play__6_1", ["button"], function(button){return(
button({value: "Reproducir animación"})
)});
  main.variable(observer("play__6_1")).define("play__6_1", ["Generators", "viewof play__6_1"], (G, _) => G.input(_));
  main.variable(observer("iterator__6_1")).define("iterator__6_1", ["adot_iterator","dots_graph__6__1","durations","play__6_1","pass__6_1"], function(adot_iterator,dots_graph__6__1,durations,play__6_1,pass__6_1){return(
adot_iterator(dots_graph__6__1.length, false, durations, play__6_1, pass__6_1)
)});
  main.variable(observer()).define(["dots_graph__6__1"], function(dots_graph__6__1){return(
dots_graph__6__1.length
)});
  main.variable(observer("durations")).define("durations", function(){return(
[1000,1000,1000,1000,1000,1000,10000,10000,5000,10000,10000,10000,10000,10000,10000]
)});
  main.variable(observer("pass__6_1")).define("pass__6_1", function(){return(
Object.create({enable: false})
)});
  main.variable(observer("dots_graph__6__1")).define("dots_graph__6__1", ["colors"], function(colors){return(
[
  `graph {  
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  c [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  d [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  e [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  f [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  g [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  a -- b [label=4] [len=1.8];
  b -- d [label=5] [len=1.8];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8];
  e -- a [label=7] [len=1.8];
  a -- c [label=3] [len=1.8];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8];  
}`,   `graph {
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  d [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  e [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  f [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  g [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  a -- b [label=4] [len=1.8] [color="${colors.blue_light}" , penwidth=3.0];
  b -- d [label=5] [len=1.8];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8];
  e -- a [label=7] [len=1.8];
  a -- c [label=3] [len=1.8];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8];  
}`,  `graph {
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td><b>3</b></td></tr></table>>];
  d [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  e [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  f [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  g [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  a -- b [label=4] [len=1.8];
  b -- d [label=5] [len=1.8];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8];
  e -- a [label=7] [len=1.8];
  a -- c [label=3] [len=1.8] [color="${colors.blue_light}",penwidth=3.0];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8];  
}`,`graph {
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td><b>3</b></td></tr></table>>];
  d [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  e [xlabel=<<table><tr><td><b>7</b></td></tr></table>>];
  f [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  g [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  a -- b [label=4] [len=1.8];
  b -- d [label=5] [len=1.8];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8];
  e -- a [label=7] [len=1.8] [color="${colors.blue_light}",penwidth=3.0];
  a -- c [label=3] [len=1.8];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8];  
}`,`graph {
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td><b>3</b></td></tr></table>>];
  d [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  e [xlabel=<<table><tr><td><b>7</b></td></tr></table>>];
  f [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  g [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  a -- b [label=4] [len=1.8];
  b -- d [label=5] [len=1.8];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8];
  e -- a [label=7] [len=1.8];
  a -- c [label=3] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8];  
}`,`graph {
  label="(3 + 6 = 9) > 4. Elegir otro ruta";
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td><b>3</b></td></tr></table>>];
  d [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  e [xlabel=<<table><tr><td><b>7</b></td></tr></table>>];
  f [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  g [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  a -- b [label=4] [len=1.8];
  b -- d [label=5] [len=1.8];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8];
  e -- a [label=7] [len=1.8];
  a -- c [label=3] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8];  
}`,`graph {
  label="3 + 11 = 14 < ∞. Ruta momentaria";
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td><b>3</b></td></tr></table>>];
  d [xlabel=<<table><tr><td><b>14</b></td></tr></table>>];
  e [xlabel=<<table><tr><td><b>7</b></td></tr></table>>];
  f [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  g [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  a -- b [label=4] [len=1.8];
  b -- d [label=5] [len=1.8];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8];
  e -- a [label=7] [len=1.8];
  a -- c [label=3] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  c -- d [label=11] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8];  
}` ,`graph {
  label="(3 + 8 = 11) > 7. Ruta descartada";
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td><b>3</b></td></tr></table>>];
  d [xlabel=<<table><tr><td><b>14</b></td></tr></table>>];
  e [xlabel=<<table><tr><td><b>7</b></td></tr></table>>];
  f [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  g [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  a -- b [label=4] [len=1.8];
  b -- d [label=5] [len=1.8];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8];
  e -- a [label=7] [len=1.8];
  a -- c [label=3] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8];  
}`,`graph {
  label="(4 + 5 = 9) < 14. Ruta favorable";
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td><b>3</b></td></tr></table>>];
  d [xlabel=<<table><tr><td><b>14</b></td></tr></table>>];
  e [xlabel=<<table><tr><td><b>7</b></td></tr></table>>];
  f [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  g [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  a -- b [label=4] [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- d [label=5] [len=1.8] [color="${colors.red}",penwidth=3.0];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8];
  e -- a [label=7] [len=1.8];
  a -- c [label=3] [len=1.8];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8];  
}`,`graph {
  label="d = 9. Actualizando ruta";
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td><b>3</b></td></tr></table>>];
  d [xlabel=<<table><tr><td><b>9</b></td></tr></table>>];
  e [xlabel=<<table><tr><td><b>7</b></td></tr></table>>];
  f [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  g [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  a -- b [label=4] [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- d [label=5] [len=1.8] [color="${colors.red}",penwidth=3.0];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8];
  e -- a [label=7] [len=1.8];
  a -- c [label=3] [len=1.8];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8];  
}`,`graph {
  label="(7 + 2 = 9) = (4 + 5 = 9) ";
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td><b>3</b></td></tr></table>>];
  d [xlabel=<<table><tr><td><b>9</b></td></tr></table>>];
  e [xlabel=<<table><tr><td><b>7</b></td></tr></table>>];
  f [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  g [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  a -- b [label=4] [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- d [label=5] [len=1.8] [color="${colors.red}",penwidth=3.0];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8];
  e -- a [label=7] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  a -- c [label=3] [len=1.8];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  d -- g [label=10] [len=1.8];  
}`,`graph {
  label="(7 + 5 = 12) <  ∞. Ruta momentarea";
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td><b>3</b></td></tr></table>>];
  d [xlabel=<<table><tr><td><b>9</b></td></tr></table>>];
  e [xlabel=<<table><tr><td><b>7</b></td></tr></table>>];
  f [xlabel=<<table><tr><td>&#8734;</td></tr></table>>];
  g [xlabel=<<table><tr><td><b>12</b></td></tr></table>>];
  a -- b [label=4] [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- d [label=5] [len=1.8] [color="${colors.red}",penwidth=3.0];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  e -- a [label=7] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  a -- c [label=3] [len=1.8];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8];  
}`,`graph {
  label="(7 + 5 + 3 = 15) <  ∞. Ruta momentarea";
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td><b>3</b></td></tr></table>>];
  d [xlabel=<<table><tr><td><b>9</b></td></tr></table>>];
  e [xlabel=<<table><tr><td><b>7</b></td></tr></table>>];
  f [xlabel=<<table><tr><td><b>15</b></td></tr></table>>];
  g [xlabel=<<table><tr><td><b>12</b></td></tr></table>>];
  a -- b [label=4] [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- d [label=5] [len=1.8] [color="${colors.red}",penwidth=3.0];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  g -- e [label=5] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  e -- a [label=7] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  a -- c [label=3] [len=1.8];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8];  
}`,`graph {
  label="(7 + 5 + 10 = 22) >  9. Ruta descartada";
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td><b>3</b></td></tr></table>>];
  d [xlabel=<<table><tr><td><b>9</b></td></tr></table>>];
  e [xlabel=<<table><tr><td><b>7</b></td></tr></table>>];
  f [xlabel=<<table><tr><td><b>15</b></td></tr></table>>];
  g [xlabel=<<table><tr><td><b>12</b></td></tr></table>>];
  a -- b [label=4] [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- d [label=5] [len=1.8] [color="${colors.red}",penwidth=3.0];
  d -- f [label=2] [len=1.8];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  e -- a [label=7] [len=1.8] [color="${colors.skin}",penwidth=3.0];
  a -- c [label=3] [len=1.8];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8][color="${colors.skin}",penwidth=3.0];
}`,`graph {
  label="(4 + 5 + 2 = 11) <  15. Ruta optima";
  a [xlabel=<<table><tr><td><b>0</b></td></tr></table>>];
  b [xlabel=<<table><tr><td><b>4</b></td></tr></table>>];
  c [xlabel=<<table><tr><td><b>3</b></td></tr></table>>];
  d [xlabel=<<table><tr><td><b>9</b></td></tr></table>>];
  e [xlabel=<<table><tr><td><b>7</b></td></tr></table>>];
  f [xlabel=<<table><tr><td><b>11</b></td></tr></table>>];
  g [xlabel=<<table><tr><td><b>12</b></td></tr></table>>];
  a -- b [label=4] [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- d [label=5] [len=1.8] [color="${colors.red}",penwidth=3.0];
  d -- f [label=2] [len=1.8] [color="${colors.red}",penwidth=3.0];
  f -- g [label=3] [len=1.8];
  g -- e [label=5] [len=1.8] ;
  e -- a [label=7] [len=1.8] ;
  a -- c [label=3] [len=1.8];
  c -- d [label=11] [len=1.8];
  b -- c [label=6] [len=1.8];
  c -- e [label=8] [len=1.8];
  d -- e [label=2] [len=1.8];
  d -- g [label=10] [len=1.8];
}`
  
]
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
## Algoritmo de Kruskal
`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`digraph {
  node [shape="box"];
  a [label="Inicio"] [shape="ellipse"];
  b [label="Selecciona arista menor"];
  c [label="En cada iteración agregue la arista de menor longitud del conjunto de arcos disponibles"];
  d [label="El algoritmo finaliza cuando todos los vertices están conectados n-1 arcos"];
  e [label="Si la distancia nueva calculada es menor que la anterior, reemplazarla, sino ignorarlo"];  
  f [label="Fin"] [shape="ellipse"];
  a -> b -> c -> d -> e -> f;
}
`
, {engine: 'dot', useWorker: false, zoom: false})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejemplo.**`
)});
  main.variable(observer()).define(["adot","dots_graph__6_2","iterator__6_2"], function(adot,dots_graph__6_2,iterator__6_2){return(
adot.bind(this)`${dots_graph__6_2[iterator__6_2]}${{engine: 'neato', zoom: false, useWorker: false }}`
)});
  main.variable(observer("viewof play__6_2")).define("viewof play__6_2", ["button"], function(button){return(
button({value: "Reproducir animación"})
)});
  main.variable(observer("play__6_2")).define("play__6_2", ["Generators", "viewof play__6_2"], (G, _) => G.input(_));
  main.variable(observer("iterator__6_2")).define("iterator__6_2", ["adot_iterator","dots_graph__6_2","play__6_2","pass__6_2"], function(adot_iterator,dots_graph__6_2,play__6_2,pass__6_2){return(
adot_iterator(dots_graph__6_2.length, false, undefined, play__6_2, pass__6_2)
)});
  main.variable(observer("pass__6_2")).define("pass__6_2", function(){return(
Object.create({enable: false})
)});
  main.variable(observer("dots_graph__6_2")).define("dots_graph__6_2", ["colors"], function(colors){return(
[
`graph {
  a -- b [label=4] [len=1.8];
  b -- c [label=3] [len=1.8];
  c -- f [label=5] [len=1.8];
  f -- i [label=1] [len=1.8] [color="${colors.red}",penwidth=3.0];
  i -- h [label=5] [len=1.8];
  h -- g [label=6] [len=1.8];
  g -- d [label=8] [len=1.8];
  d -- a [label=6] [len=1.8];
  e -- a [label=4] [len=1.8];
  e -- b [label=7] [len=1.8];
  e -- f [label=2] [len=1.8];
  e -- i [label=4] [len=1.8];
  e -- h [label=2] [len=1.8];
  e -- d [label=5] [len=1.8];
}`,`graph {
  a -- b [label=4] [len=1.8];
  b -- c [label=3] [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- f [label=5] [len=1.8];
  f -- i [label=1] [len=1.8] [color="${colors.red}",penwidth=3.0];
  i -- h [label=5] [len=1.8];
  h -- g [label=6] [len=1.8];
  g -- d [label=8] [len=1.8];
  d -- a [label=6] [len=1.8];
  e -- a [label=4] [len=1.8];
  e -- b [label=7] [len=1.8];
  e -- f [label=2] [len=1.8];
  e -- i [label=4] [len=1.8];
  e -- h [label=2] [len=1.8];
  e -- d [label=5] [len=1.8];
}`,`graph {
  a -- b [label=4] [len=1.8];
  b -- c [label=3] [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- f [label=5] [len=1.8];
  f -- i [label=1] [len=1.8] [color="${colors.red}",penwidth=3.0];
  i -- h [label=5] [len=1.8];
  h -- g [label=6] [len=1.8];
  g -- d [label=8] [len=1.8];
  d -- a [label=6] [len=1.8];
  e -- a [label=4] [len=1.8];
  e -- b [label=7] [len=1.8];
  e -- f [label=2] [len=1.8] [color="${colors.red}",penwidth=3.0];
  e -- i [label=4] [len=1.8];
  e -- h [label=2] [len=1.8];
  e -- d [label=5] [len=1.8];
}`,`graph {
  a -- b [label=4] [len=1.8];
  b -- c [label=3] [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- f [label=5] [len=1.8];
  f -- i [label=1] [len=1.8] [color="${colors.red}",penwidth=3.0];
  i -- h [label=5] [len=1.8];
  h -- g [label=6] [len=1.8];
  g -- d [label=8] [len=1.8];
  d -- a [label=6] [len=1.8];
  e -- a [label=4] [len=1.8];
  e -- b [label=7] [len=1.8];
  e -- f [label=2] [len=1.8] [color="${colors.red}",penwidth=3.0];
  e -- i [label=4] [len=1.8];
  e -- h [label=2] [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- d [label=5] [len=1.8];
}`,`graph {
  a -- b [label=4] [len=1.8];
  b -- c [label=3] [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- f [label=5] [len=1.8];
  f -- i [label=1] [len=1.8] [color="${colors.red}",penwidth=3.0];
  i -- h [label=5] [len=1.8];
  h -- g [label=6] [len=1.8];
  g -- d [label=8] [len=1.8];
  d -- a [label=6] [len=1.8];
  e -- a [label=4] [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- b [label=7] [len=1.8];
  e -- f [label=2] [len=1.8] [color="${colors.red}",penwidth=3.0];
  e -- i [label=4] [len=1.8];
  e -- h [label=2] [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- d [label=5] [len=1.8];
}`,`graph {
  a -- b [label=4] [len=1.8][color="${colors.red}",penwidth=3.0];
  b -- c [label=3] [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- f [label=5] [len=1.8];
  f -- i [label=1] [len=1.8] [color="${colors.red}",penwidth=3.0];
  i -- h [label=5] [len=1.8];
  h -- g [label=6] [len=1.8];
  g -- d [label=8] [len=1.8];
  d -- a [label=6] [len=1.8];
  e -- a [label=4] [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- b [label=7] [len=1.8];
  e -- f [label=2] [len=1.8] [color="${colors.red}",penwidth=3.0];
  e -- i [label=4] [len=1.8];
  e -- h [label=2] [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- d [label=5] [len=1.8];
}`,`graph {
  a -- b [label=4] [len=1.8][color="${colors.red}",penwidth=3.0];
  b -- c [label=3] [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- f [label=5] [len=1.8];
  f -- i [label=1] [len=1.8] [color="${colors.red}",penwidth=3.0];
  i -- h [label=5] [len=1.8];
  h -- g [label=6] [len=1.8];
  g -- d [label=8] [len=1.8];
  d -- a [label=6] [len=1.8];
  e -- a [label=4] [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- b [label=7] [len=1.8];
  e -- f [label=2] [len=1.8] [color="${colors.red}",penwidth=3.0];
  e -- i [label=4] [len=1.8];
  e -- h [label=2] [len=1.8] [color="${colors.red}",penwidth=3.0];
  e -- d [label=5] [len=1.8] [color="${colors.red}",penwidth=3.0];
}`,`graph {
  a -- b [label=4] [len=1.8][color="${colors.red}",penwidth=3.0];
  b -- c [label=3] [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- f [label=5] [len=1.8];
  f -- i [label=1] [len=1.8] [color="${colors.red}",penwidth=3.0];
  i -- h [label=5] [len=1.8];
  h -- g [label=6] [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- d [label=8] [len=1.8];
  d -- a [label=6] [len=1.8];
  e -- a [label=4] [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- b [label=7] [len=1.8];
  e -- f [label=2] [len=1.8] [color="${colors.red}",penwidth=3.0];
  e -- i [label=4] [len=1.8];
  e -- h [label=2] [len=1.8] [color="${colors.red}",penwidth=3.0];
  e -- d [label=5] [len=1.8] [color="${colors.red}",penwidth=3.0];
}`
]
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
## Algoritmo de Fleury
`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`digraph {
  node [shape="box"];
  a [label="Inicio"] [shape="ellipse"];
  b [label="Verificar Grado de mi gráfico"];
  c [label="Realizar un circuito cerrado"];
  d [label="En cada iteración construye un nuevo camino cerrado visitando aristas incidentes que no han sido visitados"];
  e [label="Reemplaza cada nuevo circuito en el inicial hasta visitar todas las aristas"];  
  f [label="Fin"] [shape="ellipse"];
  a -> b -> c -> d -> e -> f;
}
`
, {engine: 'dot', useWorker: false, zoom: false})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejemplo.**`
)});
  main.variable(observer()).define(["adot","dots_graph__6_3","iterator__6_3"], function(adot,dots_graph__6_3,iterator__6_3){return(
adot.bind(this)`${dots_graph__6_3[iterator__6_3]}${{engine: 'neato', zoom: false, useWorker: false }}`
)});
  main.variable(observer("viewof play__6_3")).define("viewof play__6_3", ["button"], function(button){return(
button({value: "Reproducir animación"})
)});
  main.variable(observer("play__6_3")).define("play__6_3", ["Generators", "viewof play__6_3"], (G, _) => G.input(_));
  main.variable(observer("iterator__6_3")).define("iterator__6_3", ["adot_iterator","dots_graph__6_3","durations__6_3","play__6_3","pass__6_3"], function(adot_iterator,dots_graph__6_3,durations__6_3,play__6_3,pass__6_3){return(
adot_iterator(dots_graph__6_3.length, false, durations__6_3, play__6_3, pass__6_3)
)});
  main.variable(observer()).define(["md","tex"], function(md,tex)
{
  const ciclo1 = "\\textit{\\colorbox{red}{\\textcolor{white}{afgba}}}"
  const ciclo2 = "\\textit{\\colorbox{green}{\\textcolor{white}{gecg}}}"
  const ciclo3 = "\\textit{\\colorbox{blue}{\\textcolor{white}{fedcbf}}}"
  const ciclo1_2 = `\\textit{\\colorbox{red}{\\textcolor{white}{af}}${ciclo2}\\colorbox{red}{\\textcolor{white}{ba}}}`
  const ciclo1_2_3 = `\\textit{\\colorbox{red}{\\textcolor{white}{a}}${ciclo3}${ciclo2}\\colorbox{red}{\\textcolor{white}{ba}}}`
  return  md `
## ${tex `Ciclo\;1 = ${ciclo1}`}
## ${tex `Ciclo\;2 = ${ciclo2}`}
## ${tex `Ciclo\;3 = ${ciclo3}`}
<br>
Se sustituye en ${tex `\bf g \bf`} del **ciclo 1**, con el **ciclo 2** y se deja lo demás igual.
# ${tex `\underbrace{${ciclo1} + ${ciclo2}}_{${ciclo1_2}}`}
<br>
Se sustituye en ${tex `\bf f \bf`} la combinación del **ciclo 1** + **ciclo 2**, con el **ciclo 3** y se deja lo demás igual.
# ${tex `\underbrace{${ciclo1_2}+${ciclo3}}_{${ciclo1_2_3}}`}
<br>
# ${tex `${ciclo1_2_3} = Ciclo\;Euleriano`}
`
}
);
  main.variable(observer()).define(["md"], function(md){return(
md `<mark>El grado de todos los vértices son **pares**, por ende puede haber un **ciclo euleriano**.</mark>`
)});
  main.variable(observer()).define(["dots_graph__6_3"], function(dots_graph__6_3){return(
dots_graph__6_3.length
)});
  main.variable(observer("durations__6_3")).define("durations__6_3", function(){return(
[1000,5000,5000,5000]
)});
  main.variable(observer("pass__6_3")).define("pass__6_3", function(){return(
Object.create({enable: false})
)});
  main.variable(observer("dots_graph__6_3")).define("dots_graph__6_3", ["colors"], function(colors){return(
[
`graph {
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8];
  c -- d [len=1.8];
  d -- e [len=1.8];
  e -- f [len=1.8];
  f -- a [len=1.8];
  b -- f [len=1.8];
  c -- e [len=1.8];
  g -- f [len=1.8];
  g -- b [len=1.8];
  g -- e [len=1.8];
  g -- c [len=1.8];
}`,`graph {
  label="Ciclo 1 afgba"
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- c [len=1.8];
  c -- d [len=1.8];
  d -- e [len=1.8];
  e -- f [len=1.8];
  f -- a [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- f [len=1.8];
  c -- e [len=1.8];
  g -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- b [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- e [len=1.8];
  g -- c [len=1.8];
}`,`graph {
  label="Ciclo 2 gecg"
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8];
  c -- d [len=1.8];
  d -- e [len=1.8];
  e -- f [len=1.8];
  f -- a [len=1.8];
  b -- f [len=1.8];
  c -- e [len=1.8][color="${colors.green}",penwidth=3.0];
  g -- f [len=1.8];
  g -- b [len=1.8];
  g -- e [len=1.8] [color="${colors.green}",penwidth=3.0];
  g -- c [len=1.8][color="${colors.green}",penwidth=3.0];
}`,`graph {
  label="Ciclo 3 fedcbf"
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8][color="${colors.blue}",penwidth=3.0];
  c -- d [len=1.8][color="${colors.blue}",penwidth=3.0];
  d -- e [len=1.8][color="${colors.blue}",penwidth=3.0];
  e -- f [len=1.8][color="${colors.blue}",penwidth=3.0];
  f -- a [len=1.8];
  b -- f [len=1.8][color="${colors.blue}",penwidth=3.0];
  c -- e [len=1.8];
  g -- f [len=1.8];
  g -- b [len=1.8];
  g -- e [len=1.8];
  g -- c [len=1.8];
}`,  // afedcbfgecgba
`graph { label="";
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8];
  c -- d [len=1.8];
  d -- e [len=1.8];
  e -- f [len=1.8];
  f -- a [len=1.8];
  b -- f [len=1.8];
  c -- e [len=1.8];
  g -- f [len=1.8];
  g -- b [len=1.8];
  g -- e [len=1.8];
  g -- c [len=1.8];
}`,`graph { label="a -> f";
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8];
  c -- d [len=1.8];
  d -- e [len=1.8];
  e -- f [len=1.8];
  f -- a [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- f [len=1.8];
  c -- e [len=1.8];
  g -- f [len=1.8];
  g -- b [len=1.8];
  g -- e [len=1.8];
  g -- c [len=1.8];
}`,`graph { label="a -> f -> e";
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8];
  c -- d [len=1.8];
  d -- e [len=1.8];
  e -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  f -- a [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- f [len=1.8];
  c -- e [len=1.8];
  g -- f [len=1.8];
  g -- b [len=1.8];
  g -- e [len=1.8];
  g -- c [len=1.8];
}`,`graph { label="a -> f -> e -> d";
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8];
  c -- d [len=1.8];
  d -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  f -- a [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- f [len=1.8];
  c -- e [len=1.8];
  g -- f [len=1.8];
  g -- b [len=1.8];
  g -- e [len=1.8];
  g -- c [len=1.8];
}`,`graph { label="a -> f -> e -> d -> c";
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8];
  c -- d [len=1.8][color="${colors.red}",penwidth=3.0];
  d -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  f -- a [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- f [len=1.8];
  c -- e [len=1.8];
  g -- f [len=1.8];
  g -- b [len=1.8];
  g -- e [len=1.8];
  g -- c [len=1.8];
}`,`graph { label="a -> f -> e -> d -> c -> b";
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- d [len=1.8][color="${colors.red}",penwidth=3.0];
  d -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  f -- a [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- f [len=1.8];
  c -- e [len=1.8];
  g -- f [len=1.8];
  g -- b [len=1.8];
  g -- e [len=1.8];
  g -- c [len=1.8];
}`,`graph { label="a -> f -> e -> d -> c -> b -> f";
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- d [len=1.8][color="${colors.red}",penwidth=3.0];
  d -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  f -- a [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  c -- e [len=1.8];
  g -- f [len=1.8];
  g -- b [len=1.8];
  g -- e [len=1.8];
  g -- c [len=1.8];
}`,`graph { label="a -> f -> e -> d -> c -> b -> f -> g";
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- d [len=1.8][color="${colors.red}",penwidth=3.0];
  d -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  f -- a [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  c -- e [len=1.8];
  g -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- b [len=1.8];
  g -- e [len=1.8];
  g -- c [len=1.8];
}`,`graph { label="a -> f -> e -> d -> c -> b -> f -> g -> e";
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- d [len=1.8][color="${colors.red}",penwidth=3.0];
  d -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  f -- a [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  c -- e [len=1.8];
  g -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- b [len=1.8];
  g -- e [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- c [len=1.8];
}`,`graph { label="a -> f -> e -> d -> c -> b -> f -> g -> e -> c";
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- d [len=1.8][color="${colors.red}",penwidth=3.0];
  d -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  f -- a [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  c -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  g -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- b [len=1.8];
  g -- e [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- c [len=1.8];
}`,`graph { label="a -> f -> e -> d -> c -> b -> f -> g -> e -> c -> g";
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- d [len=1.8][color="${colors.red}",penwidth=3.0];
  d -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  f -- a [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  c -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  g -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- b [len=1.8];
  g -- e [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- c [len=1.8] [color="${colors.red}",penwidth=3.0];
}`,`graph { label="a -> f -> e -> d -> c -> b -> f -> g -> e -> c -> g -> b";
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8];
  b -- c [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- d [len=1.8][color="${colors.red}",penwidth=3.0];
  d -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  f -- a [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  c -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  g -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- b [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- e [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- c [len=1.8] [color="${colors.red}",penwidth=3.0];
}`,`graph { label="a -> f -> e -> d -> c -> b -> f -> g -> e -> c -> g -> b -> a";
  a [xlabel=2];
  b [xlabel=4];
  f [xlabel=4];
  g [xlabel=4];
  e [xlabel=4];
  c [xlabel=4];
  d [xlabel=2];
  a -- b [len=1.8][color="${colors.red}",penwidth=3.0];
  b -- c [len=1.8][color="${colors.red}",penwidth=3.0];
  c -- d [len=1.8][color="${colors.red}",penwidth=3.0];
  d -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  e -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  f -- a [len=1.8] [color="${colors.red}",penwidth=3.0];
  b -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  c -- e [len=1.8][color="${colors.red}",penwidth=3.0];
  g -- f [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- b [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- e [len=1.8] [color="${colors.red}",penwidth=3.0];
  g -- c [len=1.8] [color="${colors.red}",penwidth=3.0];
}`]
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
## Algoritmo de flujo máximo`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`digraph {
  node [shape="box"];
  a [label="Inicio"] [shape="ellipse"];
  b [label="Direccionar flujos e iniciar en ceros"];
  c [label="Obtener trayectorias buscando siempre el mayor flujo"];
  d [label="Escoger el menor flujo de la trayectoria"];
  e [label="Actualizar el gráfico con las capacidades mínimas"];  
  f [label="Buscar nueva trayectoria en aumento y repetir hasta que no existan más"];
  g [label="Fin"] [shape="ellipse"];
  a -> b -> c -> d -> e -> f -> g;
}
`
, {engine: 'dot', useWorker: false, zoom: false})
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejemplo.**`
)});
  main.variable(observer()).define(["adot","dots_graph__6_4","iterator__6_4"], function(adot,dots_graph__6_4,iterator__6_4){return(
adot.bind(this)`${dots_graph__6_4[iterator__6_4]}${{engine: 'neato', zoom: false, useWorker: false }}`
)});
  main.variable(observer("viewof play__6_4")).define("viewof play__6_4", ["button"], function(button){return(
button({value: "Reproducir animación"})
)});
  main.variable(observer("play__6_4")).define("play__6_4", ["Generators", "viewof play__6_4"], (G, _) => G.input(_));
  main.variable(observer("iterator__6_4")).define("iterator__6_4", ["adot_iterator","dots_graph__6_4","durations__6_4","play__6_4","pass__6_4"], function(adot_iterator,dots_graph__6_4,durations__6_4,play__6_4,pass__6_4){return(
adot_iterator(dots_graph__6_4.length, false, durations__6_4, play__6_4, pass__6_4)
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<mark>Se requiere de los nodos **f** y **e**, ya que son las **únicas maneras** para llegar a **e**.</mark>`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `
## <mark>${tex `Camino \; 1 \; \bold{acfg} , \; puede \; enviar \; \bold{4 \; unidades}.`}</mark>
## <mark>${tex `Camino \; 2 \; \bold{abfg} , \; puede \; enviar \; \bold{3 \; unidades}.`}</mark>
## <mark>${tex `Camino \; 3 \; \bold{adeg} , \; puede \; enviar \; \bold{4 \; unidades}.`}</mark>
## <mark>${tex `Camino \; 4 \; \bold{aceg} , \; puede \; enviar \; \bold{2 \; unidades}.`}</mark>
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html `<br><iframe width="560" height="315" src="https://www.youtube.com/embed/qnpJmwLURYI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
)});
  main.variable(observer("durations__6_4")).define("durations__6_4", function(){return(
[2500,5000,5000,10000,5000,5000,10000,5000,5000,10000,5000,5000,10000,5000]
)});
  main.variable(observer("pass__6_4")).define("pass__6_4", function(){return(
Object.create({enable: false})
)});
  main.variable(observer("dots_graph__6_4")).define("dots_graph__6_4", ["colors"], function(colors)
{
const label = (_str,_bgcolor = colors.white,_font_color = colors.black) => 
  `<<table><tr><td><font color="${_font_color}"><b>${_str}</b></font></td></tr></table>>`
const red_select = `[color="${colors.red}",penwidth=3.0]`
const blue_light_select = `[color="${colors.blue_light}",penwidth=3.0]`
const skin_select = `[color="${colors.skin}",penwidth=3.0]`
const green_select = `[color="${colors.green}",penwidth=3.0]`
const black = colors.black
const white = colors.white
return [
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  g [xlabel=${label('0')}]
  a -> b [taillabel=6] ;
  a -> c [taillabel=7] ;
  a -> d [taillabel=4] ;
  b -> c [taillabel=1] ;
  b -> f [taillabel=3] ;
  c -> d [taillabel=2] ;
  c -> f [taillabel=4] ;
  c -> e [taillabel=6] ;
  d -> e [taillabel=7] ;
  e -> g [taillabel=6] ;
  f -> g [taillabel=9] ;
}`,
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  label="Agregando ceros al final";
  g [xlabel=${label('0')}];
  a -> b [taillabel=6] [headlabel=0] ;
  a -> c [taillabel=7] [headlabel=0] ;
  a -> d [taillabel=4] [headlabel=0] ;
  b -> c [taillabel=1] [headlabel=0] ;
  b -> f [taillabel=3] [headlabel=0] ;
  c -> d [taillabel=2] [headlabel=0] ;
  c -> f [taillabel=4] [headlabel=0] ;
  c -> e [taillabel=6] [headlabel=0] ;
  d -> e [taillabel=7] [headlabel=0] ;
  e -> g [taillabel=6] [headlabel=0] ;
  f -> g [taillabel=9] [headlabel=0] ;
}`,
// La unidad mínima es 4, en el camino 1 (a -> c -> f -> g)
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  label="La unidad mínima es 4, en el camino 1 (a -> c -> f -> g)";
  g [xlabel=${label('0')}];
  a -> b [taillabel=6] [headlabel=0];
  a -> c [taillabel=7] [headlabel=0] ${blue_light_select};
  a -> d [taillabel=4] [headlabel=0] ;
  b -> c [taillabel=1] [headlabel=0] ;
  b -> f [taillabel=3] [headlabel=0] ;
  c -> d [taillabel=2] [headlabel=0] ;
  c -> f [label=" "] [taillabel=${label("4")}] [headlabel=0] ${green_select};
  c -> e [taillabel=6] [headlabel=0] ;
  d -> e [taillabel=7] [headlabel=0] ;
  e -> g [taillabel=6] [headlabel=0] ;
  f -> g [taillabel=9] [headlabel=0] ${blue_light_select};
}`,
// Camino 1 (a -> c -> f -> g) se puede enviar 4 unidades
`digraph {
  edge [len=2.6] [labeldistance=3.4];
  label="Camino 1 (a -> c -> f -> g) se puede enviar 4 unidades";
  g [xlabel=${label('0+4=4')}];
  a -> b [taillabel=6] [headlabel=0];
  a -> c [label=" "] [taillabel=${label("7-3=4")}] [headlabel=${label("0+4=4")}] ${red_select};
  a -> d [taillabel=4] [headlabel=0] ;
  b -> c [taillabel=1] [headlabel=0] ;
  b -> f [taillabel=3] [headlabel=0] ;
  c -> d [taillabel=2] [headlabel=0] ;
  c -> f [label=" "] [taillabel=${label("4-4=0")}] [headlabel=${label("0+4=4")}] ${red_select};
  c -> e [taillabel=6] [headlabel=0] ;
  d -> e [taillabel=7] [headlabel=0] ;
  e -> g [taillabel=6] [headlabel=0] ;
  f -> g [label=" "] [taillabel=${label("9-4=5")}] [headlabel=${label("0+4=4")}] ${red_select} ;
}`,
// Actualizando datos
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  label="Actualizando datos";
  g [xlabel=${label('4')}];
  a -> b [taillabel=6] [headlabel=0] ;
  a -> c [label=" "] [taillabel=${label('4')}] [headlabel=${label('4')}] ${skin_select};
  a -> d [taillabel=4] [headlabel=0] ;
  b -> c [taillabel=1] [headlabel=0] ;
  b -> f [taillabel=3] [headlabel=0] ;
  c -> d [taillabel=2] [headlabel=0] ;
  c -> f [label=" "] [taillabel=${label('0')}] [headlabel=${label(4)}] ${skin_select};
  c -> e [taillabel=6] [headlabel=0] ;
  d -> e [taillabel=7] [headlabel=0] ;
  e -> g [taillabel=6] [headlabel=0] ;
  f -> g [label=" "] [taillabel=${label('5')}] [headlabel=${label('4')}] ${skin_select};
}`,
// La unidad mínima es 3, en el camino 2 (a -> b -> f -> g)
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  label="La unidad mínima es 3, en el camino 2 (a -> b -> f -> g)";
  g [xlabel=${label('4')}];
  a -> b [taillabel=6] [headlabel=0] ${blue_light_select};
  a -> c [taillabel=4] [headlabel=4];
  a -> d [taillabel=4] [headlabel=0] ;
  b -> c [taillabel=1] [headlabel=0] ;
  b -> f [label=" "][taillabel=${label('3')}] [headlabel=0] ${green_select};
  c -> d [taillabel=2] [headlabel=0] ;
  c -> f [taillabel=0] [headlabel=4] ;
  c -> e [taillabel=6] [headlabel=0] ;
  d -> e [taillabel=7] [headlabel=0] ;
  e -> g [taillabel=6] [headlabel=0] ;
  f -> g [taillabel=5] [headlabel=4] ${blue_light_select};
}`,
// Camino 2 (a -> b -> f -> g) se puede enviar 3 unidades
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  label="Camino 2 (a -> b -> f -> g) se puede enviar 3 unidades";
  g [xlabel=${label('3+4=7')}];
  a -> b [label=" "] [taillabel=${label('6-3=3')}] [headlabel=${label('3+0=3')}] ${red_select};
  a -> c [taillabel=4] [headlabel=4];
  a -> d [taillabel=4] [headlabel=0] ;
  b -> c [taillabel=1] [headlabel=0] ;
  b -> f [label=" "] [taillabel=${label('3-3=0')}] [headlabel=${label('0+3=3')}] ${red_select};
  c -> d [taillabel=2] [headlabel=0] ;
  c -> f [taillabel=0] [headlabel=4] ;
  c -> e [taillabel=6] [headlabel=0] ;
  d -> e [taillabel=7] [headlabel=0] ;
  e -> g [taillabel=6] [headlabel=0] ;
  f -> g [label=" "] [taillabel=${label('5-3=2')}] [headlabel=${label('4+3=7')}] ${red_select};
}`,
// Actualizando datos
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  label="Actualizando datos";
  g [xlabel=${label('7')}];
  a -> b [label=" "] [taillabel=${label('3')}] [headlabel=${label('3')}] ${skin_select};
  a -> c [taillabel=4] [headlabel=4];
  a -> d [taillabel=4] [headlabel=0] ;
  b -> c [taillabel=1] [headlabel=0] ;
  b -> f [label=" "] [taillabel=${label('0')}] [headlabel=${label('3')}] ${skin_select};
  c -> d [taillabel=2] [headlabel=0] ;
  c -> f [taillabel=0] [headlabel=4] ;
  c -> e [taillabel=6] [headlabel=0] ;
  d -> e [taillabel=7] [headlabel=0] ;
  e -> g [taillabel=6] [headlabel=0] ;
  f -> g [label=" "] [taillabel=${label('2')}] [headlabel=${label('7')}] ${skin_select};
}`,
// La unidad mínima es 4, en el camino 3 (a -> d -> e -> g)
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  label="La unidad mínima es 4, en el camino 3 (a -> d -> e -> g)";
  g [xlabel=${label('7')}];
  a -> b [taillabel=3] [headlabel=3];
  a -> c [taillabel=4] [headlabel=4];
  a -> d [label=" "] [taillabel=${label('4')}] [headlabel=0] ${green_select};
  b -> c [taillabel=1] [headlabel=0] ;
  b -> f [taillabel=0] [headlabel=3];
  c -> d [taillabel=2] [headlabel=0] ;
  c -> f [taillabel=0] [headlabel=4] ;
  c -> e [taillabel=6] [headlabel=0] ;
  d -> e [taillabel=7] [headlabel=0] ${blue_light_select};
  e -> g [taillabel=6] [headlabel=0] ${blue_light_select};
  f -> g [taillabel=2] [headlabel=7];
}`
,
// Camino 3 (a -> d -> e -> g) se puede enviar 4 unidades
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  label="Camino 3 (a -> d -> e -> g) se puede enviar 4 unidades";
  g [xlabel=${label('4+7=11')}];
  a -> b [taillabel=3] [headlabel=3];
  a -> c [taillabel=4] [headlabel=4];
  a -> d [label=" "] [taillabel=${label('4-4=0')}] [headlabel=${label('0+4=4')}] ${red_select};
  b -> c [taillabel=1] [headlabel=0] ;
  b -> f [taillabel=0] [headlabel=3];
  c -> d [taillabel=2] [headlabel=0] ;
  c -> f [taillabel=0] [headlabel=4] ;
  c -> e [taillabel=6] [headlabel=0] ;
  d -> e [label=" "] [taillabel=${label('7-4=0')}] [headlabel=${label('0+4=4')}] ${red_select};
  e -> g [label=" "] [taillabel=${label('6-4=2')}] [headlabel=${label('0+4=4')}] ${red_select};
  f -> g [taillabel=2] [headlabel=7];
}`,
// Actualizando datos
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  label="Actualizando datos";
  g [xlabel=${label('11')}];
  a -> b [taillabel=3] [headlabel=3];
  a -> c [taillabel=4] [headlabel=4];
  a -> d [label=" "] [taillabel=${label('0')}] [headlabel=${label('4')}] ${skin_select};
  b -> c [taillabel=1] [headlabel=0] ;
  b -> f [taillabel=0] [headlabel=3];
  c -> d [taillabel=2] [headlabel=0] ;
  c -> f [taillabel=0] [headlabel=4] ;
  c -> e [taillabel=6] [headlabel=0] ;
  d -> e [label=" "] [taillabel=${label('0')}] [headlabel=${label('4')}] ${skin_select};
  e -> g [label=" "] [taillabel=${label('2')}] [headlabel=${label('4')}] ${skin_select};
  f -> g [taillabel=2] [headlabel=7];
}`,
// La unidad mínima es 2, en el camino 4 (a -> c -> e -> g)
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  label="La unidad mínima es 2, en el camino 4 (a -> c -> e -> g)";
  g [xlabel=${label('11')}];
  a -> b [taillabel=3] [headlabel=3];
  a -> c [taillabel=4] [headlabel=4] ${blue_light_select};
  a -> d [taillabel=0] [headlabel=4];
  b -> c [taillabel=1] [headlabel=0] ;
  b -> f [taillabel=0] [headlabel=3];
  c -> d [taillabel=2] [headlabel=0] ;
  c -> f [taillabel=0] [headlabel=4] ;
  c -> e [taillabel=6] [headlabel=0] ${blue_light_select};
  d -> e [taillabel=0] [headlabel=4];
  e -> g [label=" "] [taillabel=${label('2')}] [headlabel=4] ${green_select};
  f -> g [taillabel=2] [headlabel=7];
}`,
// Camino 4 (a -> c -> e -> g) se puede enviar 2 unidades
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  label="Camino 4 (a -> c -> e -> g) se puede enviar 2 unidades";
  g [xlabel=${label('2+11=13')}];
  a -> b [taillabel=3] [headlabel=3];
  a -> c [label=" "] [taillabel=${label('4-2=2')}] [headlabel=${label('2+4=6')}] ${red_select};
  a -> d [taillabel=0] [headlabel=4];
  b -> c [taillabel=1] [headlabel=0] ;
  b -> f [taillabel=0] [headlabel=3];
  c -> d [taillabel=2] [headlabel=0] ;
  c -> f [taillabel=0] [headlabel=4] ;
  c -> e [label=" "] [taillabel=${label('6-2=4')}] [headlabel=${label('2+0=2')}] ${red_select};
  d -> e [taillabel=0] [headlabel=4];
  e -> g [label=" "] [taillabel=${label('2-2=0')}] [headlabel=${label('2+4=6')}] ${red_select};
  f -> g [taillabel=2] [headlabel=7];
}`,
// Actualizando datos 
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  label="Actualizando datos";
  g [xlabel=${label('13')}];
  a -> b [taillabel=3] [headlabel=3];
  a -> c [label=" "] [taillabel=${label('2')}] [headlabel=${label('6')}] ${skin_select};
  a -> d [taillabel=0] [headlabel=4];
  b -> c [taillabel=1] [headlabel=0] ;
  b -> f [taillabel=0] [headlabel=3];
  c -> d [taillabel=2] [headlabel=0] ;
  c -> f [taillabel=0] [headlabel=4] ;
  c -> e [label=" "] [taillabel=${label('4')}] [headlabel=${label('2')}] ${skin_select};
  d -> e [taillabel=0] [headlabel=4];
  e -> g [label=" "] [taillabel=${label('0')}] [headlabel=${label('6')}] ${skin_select};
  f -> g [taillabel=2] [headlabel=7];
}`,
// Final
`digraph {  
  edge [len=2.6] [labeldistance=3.4];
  label="Final";
  g [xlabel=${label('13')}];
  a -> b [label=" "] [headlabel=${label('3')}];
  a -> c [label=" "] [headlabel=${label('6')}];
  a -> d [label=" "] [headlabel=${label('4')}];
  b -> c [label=" "] [headlabel=${label('0')}];
  b -> f [label=" "] [headlabel=${label('3')}];
  c -> d [label=" "] [headlabel=${label('0')}];
  c -> f [label=" "] [headlabel=${label('4')}];
  c -> e [label=" "] [headlabel=${label('2')}];
  d -> e [label=" "] [headlabel=${label('4')}];
  e -> g [label=" "] [headlabel=${label('6')}];
  f -> g [label=" "] [headlabel=${label('7')}];
}`
]
}
);
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
## Ejercicios
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejercicio 1.** Encuentre el árbol de expansión mínima y su coste total utilizando el algoritmo de Prim:`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  edge [len=1.8]
  a -- b [label=3] [color=red penwidth=3.0];
  b -- c [label=8];  
  c -- d [label=2] [color=red penwidth=3.0];
  d -- e [label=5];
  e -- f [label=2] [color=red penwidth=3.0];
  f -- g [label=4] [color=red penwidth=3.0];
  g -- a [label=6];
  b -- g [label=5];
  b -- d [label=3] [color=red penwidth=3.0];
  g -- d [label=7];
  d -- f [label=4] [color=red penwidth=3.0];
}
`, undefined)
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {  
  a -- b [label=3];  
  c -- d [label=2];  
  e -- f [label=2];
  f -- g [label=4];  
  b -- d [label=3];  
  d -- f [label=4];
}`, undefined)
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `<mark>Coste total ${tex `${3+3+2+4+4+2}`}.</mark>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
**Ejercicio 2.** Encuentre el camino de menor coste para ir desde **a** hasta **e** utilizando el algoritmo de Dijkstra. ¿Cuál es el coste?.
`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  edge [len=1.8];
  a -- b [label=3];
  b -- c [label=8];
  c -- d [label=2];
  d -- e [label=5];
  e -- f [label=2];
  f -- g [label=4];
  g -- a [label=6];
  b -- g [label=5];
  b -- d [label=3];
  g -- d [label=7];
  d -- f [label=4];
}
` 
,undefined)
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  edge [len=1.8];
  a -- b [label=3];
  b -- c [label=8];
  c -- d [label=2];
  d -- e [label=5];
  e -- f [label=2] [color=red penwidth=3.0];
  f -- g [label=4] [color=red penwidth=3.0];
  g -- a [label=6] [color=red penwidth=3.0];
  b -- g [label=5];
  b -- d [label=3];
  g -- d [label=7];
  d -- f [label=4];
}
` 
,undefined)
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejercicio 3**. Encuentre el árbol de expansión mínima utilizando el algoritmo de kruskal:`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  edge [len=1.8];
  a -- b [label=6];
  b -- c [label=8];
  c -- d [label=5];
  d -- f [label=7];
  f -- e [label=8];
  e -- a [label=7];
  b -- e [label=9];
  b -- d [label=5];
  e -- d [label=4];
}
`,undefined)
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  edge [len=1.8];
  a -- b [label=6] [color=red penwidth=3.0];
  b -- c [label=8];
  c -- d [label=5] [color=red penwidth=3.0];
  d -- f [label=7] [color=red penwidth=3.0];
  f -- e [label=8];
  e -- a [label=7];
  b -- e [label=9];
  b -- d [label=5] [color=red penwidth=3.0];
  e -- d [label=4] [color=red penwidth=3.0];
}
`,undefined)
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Ejercicio 4**. Encuentre un camino de Euler utilizando el algoritmo de Fleury:`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`graph {
  edge [len=1.5];
  a -- b;
  b -- c;
  c -- d;
  d -- f;
  f -- a;
  a -- e;
  c -- f;
  e -- f;
  c -- a;
}
`
, undefined)
)});
  main.variable(observer()).define(["adot","dots_graph__7_1","iterator__7_1"], function(adot,dots_graph__7_1,iterator__7_1){return(
adot.bind(this)`${dots_graph__7_1[iterator__7_1]}${{engine: 'neato', zoom: false, useWorker: false }}`
)});
  main.variable(observer("viewof play__7_1")).define("viewof play__7_1", ["button"], function(button){return(
button({value: "Reproducir animación"})
)});
  main.variable(observer("play__7_1")).define("play__7_1", ["Generators", "viewof play__7_1"], (G, _) => G.input(_));
  main.variable(observer("iterator__7_1")).define("iterator__7_1", ["adot_iterator","dots_graph__7_1","play__7_1","pass__7_1"], function(adot_iterator,dots_graph__7_1,play__7_1,pass__7_1){return(
adot_iterator(dots_graph__7_1.length, false, undefined, play__7_1, pass__7_1)
)});
  main.variable(observer()).define(["md","tex"], function(md,tex)
{
  const c1 = 'eabcdfe'
  const c2 = 'acfa'
  const ciclo1 = `\\textit{\\colorbox{red}{\\textcolor{white}{${c1}}}}`
  const ciclo2 = `\\textit{\\colorbox{green}{\\textcolor{white}{${c2}}}}`
  const ciclo1_2 = `\\textit{\\colorbox{red}{\\textcolor{white}{e}}${ciclo2}\\colorbox{red}{\\textcolor{white}{${c1.substring(2)}}}}`  
  return  md `
## ${tex `Ciclo\;1 = ${ciclo1}`}
## ${tex `Ciclo\;2 = ${ciclo2}`}
## ${tex `Ciclo\;1 + Ciclo\;2 = ${ciclo1_2}`}
`
}
);
  main.variable(observer("pass__7_1")).define("pass__7_1", function(){return(
Object.create({enable: false})
)});
  main.variable(observer("dots_graph__7_1")).define("dots_graph__7_1", function()
{
const red_selector = `[color=red penwidth=3.0]`;
return [
`graph {
  edge [len=1.5];
  a -- b;
  b -- c;
  c -- d;
  d -- f;
  f -- a;
  a -- e;
  c -- f;
  e -- f;
  c -- a;
}`,`graph {
  edge [len=1.5];
  a -- b;
  b -- c;
  c -- d;
  d -- f;
  f -- a;
  a -- e ${red_selector};
  c -- f;
  e -- f;
  c -- a;
}`,`graph {
  edge [len=1.5];
  a -- b;
  b -- c;
  c -- d;
  d -- f;
  f -- a;
  a -- e ${red_selector};
  c -- f;
  e -- f;
  c -- a ${red_selector};
}`,`graph {
  edge [len=1.5];
  a -- b;
  b -- c;
  c -- d;
  d -- f;
  f -- a;
  a -- e ${red_selector};
  c -- f ${red_selector};
  e -- f;
  c -- a ${red_selector};
}`,`graph {
  edge [len=1.5];
  a -- b;
  b -- c;
  c -- d;
  d -- f;
  f -- a ${red_selector};
  a -- e ${red_selector};
  c -- f ${red_selector};
  e -- f;
  c -- a ${red_selector};
}`,`graph {
  edge [len=1.5];
  a -- b ${red_selector};
  b -- c;
  c -- d;
  d -- f;
  f -- a ${red_selector};
  a -- e ${red_selector};
  c -- f ${red_selector};
  e -- f;
  c -- a ${red_selector};
}`,`graph {
  edge [len=1.5];
  a -- b ${red_selector};
  b -- c ${red_selector};
  c -- d;
  d -- f;
  f -- a ${red_selector};
  a -- e ${red_selector};
  c -- f ${red_selector};
  e -- f;
  c -- a ${red_selector};
}`,`graph {
  edge [len=1.5];
  a -- b ${red_selector};
  b -- c ${red_selector};
  c -- d ${red_selector};
  d -- f 
  f -- a ${red_selector};
  a -- e ${red_selector};
  c -- f ${red_selector};
  e -- f;
  c -- a ${red_selector};
}`,`graph {
  edge [len=1.5];
  a -- b ${red_selector};
  b -- c ${red_selector};
  c -- d ${red_selector};
  d -- f ${red_selector};
  f -- a ${red_selector};
  a -- e ${red_selector};
  c -- f ${red_selector};
  e -- f;
  c -- a ${red_selector};
}`,`graph {
  edge [len=1.5];
  a -- b ${red_selector};
  b -- c ${red_selector};
  c -- d ${red_selector};
  d -- f ${red_selector};
  f -- a ${red_selector};
  a -- e ${red_selector};
  c -- f ${red_selector};
  e -- f ${red_selector};
  c -- a ${red_selector};
}`
]
}
);
  main.variable(observer()).define(["md"], function(md){return(
md `<br>
**Ejercicio 5**. Encuentre el flujo Máximo desde **a** hasta **b**:`
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(
`digraph {
  edge [len=1.8] [labeldistance=3.4] ;
  a -> b [label=" "] [taillabel="8"];
  a -> f [label=" "] [taillabel="5"];
  b -> c [label=" "] [taillabel="5"];  
  b -> g [label=" "] [taillabel="4"];  
  g -> f [label=" "] [taillabel="3"];    
  g -> h [label=" "] [taillabel="2"];
  g -> e [label=" "] [taillabel="2"];
  f -> e [label=" "] [taillabel="4"];
  e -> h [label=" "] [taillabel="0"];
  e -> d [label=" "] [taillabel="6"];
  h -> d [label=" "] [taillabel="4"];
  c -> d [label=" "] [taillabel="6"];
}
`, undefined)
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<mark>El flujo máximo de **a** hasta **b** es **8**.</mark>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<br>**Ejercicio 6**. Encuentre el flujo Máximo desde **a** hasta **d** del ejercicio anterior:`
)});
  main.variable(observer()).define(["adot","dots_graph__7_2","iterator__7_2"], function(adot,dots_graph__7_2,iterator__7_2){return(
adot.bind(this)`${dots_graph__7_2[iterator__7_2]}${{engine: 'neato', zoom: false, useWorker: false }}`
)});
  main.variable(observer("viewof play__7_2")).define("viewof play__7_2", ["button"], function(button){return(
button({value: "Reproducir animación"})
)});
  main.variable(observer("play__7_2")).define("play__7_2", ["Generators", "viewof play__7_2"], (G, _) => G.input(_));
  main.variable(observer("iterator__7_2")).define("iterator__7_2", ["adot_iterator","dots_graph__7_2","delays__7_2","play__7_2","pass__7_2"], function(adot_iterator,dots_graph__7_2,delays__7_2,play__7_2,pass__7_2){return(
adot_iterator(dots_graph__7_2.length, false, delays__7_2, play__7_2, pass__7_2)
)});
  main.variable(observer()).define(["md"], function(md){return(
md `<mark>Camino 1 **(a -> b -> c -> d)** se puede enviar 4 unidades. **d = 5**.<br>
Camino 2 **(a -> f -> e -> d)** se puede enviar 4 unidades. **d = 9**.<br>
Camino 3 **(a -> b -> g -> h -> d)** se puede enviar 2 unidades. **d = 11**.<br>
Camino 3 **(a -> b -> g -> e -> d)** se puede enviar 1 unidad. **d = 12**.
</mark>
`
)});
  main.variable(observer("pass__7_2")).define("pass__7_2", function(){return(
Object.create({enable: false})
)});
  main.variable(observer("delays__7_2")).define("delays__7_2", ["gen_chars"], function(gen_chars){return(
[1000,...gen_chars(7, '5000 ').split(' ').map(a => parseInt(a))]
)});
  main.variable(observer("dots_graph__7_2")).define("dots_graph__7_2", ["colors"], function(colors)
{
const label = (_str,_bgcolor = colors.white,_font_color = colors.black) => 
  `<<table><tr><td><font color="${_font_color}"><b>${_str}</b></font></td></tr></table>>`
const red_selector = `[color="${colors.red}",penwidth=3.0]`
const blue_light_selector = `[color="${colors.blue_light}",penwidth=3.0]`
const skin_selector = `[color="${colors.skin}",penwidth=3.0]`
const green_selector = `[color="${colors.green}",penwidth=3.0]`
const black = colors.black
const white = colors.white
const taillabel = (_str, with_label_mod = false) => 
  with_label_mod ? `[taillabel=${label(_str)}]` : `[taillabel=${_str}]`
const headlabel = (_str, with_label_mod = false) => 
  with_label_mod ? `[headlabel=${label(_str)}]` : `[headlabel=${_str}]`
return [
`digraph {
  edge [len=2.3] [labeldistance=3.4] ;
  a -> b [label=" "] ${taillabel('8')};
  a -> f [label=" "] ${taillabel('5')};
  b -> c [label=" "] ${taillabel('5')};  
  b -> g [label=" "] ${taillabel('4')};  
  g -> f [label=" "] ${taillabel('3')};    
  g -> h [label=" "] ${taillabel('2')};
  g -> e [label=" "] ${taillabel('2')};
  f -> e [label=" "] ${taillabel('4')};
  e -> h [label=" "] ${taillabel('0')};
  e -> d [label=" "] ${taillabel('6')};
  h -> d [label=" "] ${taillabel('4')};
  c -> d [label=" "] ${taillabel('6')};
}`,
// Camino 1 (a -> b -> c -> d) se puede enviar 4 unidades
`digraph {
  label="Camino 1 (a -> b -> c -> d) se puede enviar 5 unidades";
  edge [len=2.3] [labeldistance=3.4] ;
  d [xlabel=${label('0+5=5')}];
  a -> b [label=" "] ${taillabel('8-5=3',true)} ${headlabel('0+5=5',true)} ${red_selector};
  a -> f [label=" "] ${taillabel('5')};
  b -> c [label=" "] ${taillabel('5-5=0',true)} ${headlabel('0+5=5',true)} ${red_selector};  
  b -> g [label=" "] ${taillabel('4')};  
  g -> f [label=" "] ${taillabel('3')};    
  g -> h [label=" "] ${taillabel('2')};
  g -> e [label=" "] ${taillabel('2')};
  f -> e [label=" "] ${taillabel('4')};
  e -> h [label=" "] ${taillabel('0')};
  e -> d [label=" "] ${taillabel('6')};
  h -> d [label=" "] ${taillabel('4')};
  c -> d [label=" "] ${taillabel('6-5=1',true)} ${headlabel('0-5=5',true)} ${red_selector};
}`,
// Actualizando datos
`digraph {
  label="Actualizando datos";
  edge [len=2.3] [labeldistance=3.4] ;
  d [xlabel=${label('5')}];
  a -> b [label=" "] ${taillabel('3')} ${headlabel('5')} ${skin_selector};
  a -> f [label=" "] ${taillabel('5')};
  b -> c [label=" "] ${taillabel('0')} ${headlabel('5')} ${skin_selector};  
  b -> g [label=" "] ${taillabel('4')};  
  g -> f [label=" "] ${taillabel('3')};    
  g -> h [label=" "] ${taillabel('2')};
  g -> e [label=" "] ${taillabel('2')};
  f -> e [label=" "] ${taillabel('4')};
  e -> h [label=" "] ${taillabel('0')};
  e -> d [label=" "] ${taillabel('6')};
  h -> d [label=" "] ${taillabel('4')};
  c -> d [label=" "] ${taillabel('1')} ${headlabel('5')} ${skin_selector};
}`,
// Camino 2 (a -> f -> e -> d) se puede enviar 4 unidades
`digraph {
  label="Camino 2 (a -> f -> e -> d) se puede enviar 4 unidades";
  edge [len=2.3] [labeldistance=3.4] ;
  d [xlabel=${label('4+5=9')}];
  a -> b [label=" "] ${taillabel('3')} ${headlabel('5')};
  a -> f [label=" "] ${taillabel('5-4=1',true)} ${headlabel('0+4=4',true)} ${red_selector};
  b -> c [label=" "] ${taillabel('0')} ${headlabel('5')};  
  b -> g [label=" "] ${taillabel('4')};  
  g -> f [label=" "] ${taillabel('3')};    
  g -> h [label=" "] ${taillabel('2')};
  g -> e [label=" "] ${taillabel('2')};
  f -> e [label=" "] ${taillabel('4-4=0',true)} ${headlabel('0+4=4',true)} ${red_selector};
  e -> h [label=" "] ${taillabel('0')};
  e -> d [label=" "] ${taillabel('6-4=2',true)} ${headlabel('0+4=4',true)} ${red_selector};
  h -> d [label=" "] ${taillabel('4')};
  c -> d [label=" "] ${taillabel('1')} ${headlabel('5')};
}`,
// Actualizando datos
`digraph {
  label="Actualizando datos";
  edge [len=2.3] [labeldistance=3.4] ;
  d [xlabel=${label('9')}];
  a -> b [label=" "] ${taillabel('3')} ${headlabel('5')};
  a -> f [label=" "] ${taillabel('1')} ${headlabel('4')} ${skin_selector};
  b -> c [label=" "] ${taillabel('0')} ${headlabel('5')};  
  b -> g [label=" "] ${taillabel('4')};  
  g -> f [label=" "] ${taillabel('3')};    
  g -> h [label=" "] ${taillabel('2')};
  g -> e [label=" "] ${taillabel('2')};
  f -> e [label=" "] ${taillabel('0')} ${headlabel('4')} ${skin_selector};
  e -> h [label=" "] ${taillabel('0')};
  e -> d [label=" "] ${taillabel('2')} ${headlabel('4')} ${skin_selector};
  h -> d [label=" "] ${taillabel('4')};
  c -> d [label=" "] ${taillabel('1')} ${headlabel('5')};
}`,
// Camino 3 (a -> b -> g -> h -> d) se puede enviar 2 unidades
`digraph {
  label="Camino 3 (a -> b -> g -> h -> d) se puede enviar 2 unidades";
  edge [len=2.3] [labeldistance=3.4] ;
  d [xlabel=${label('2+9=11')}];
  a -> b [label=" "] ${taillabel('3-2=1',true)} ${headlabel('2+5=7',true)}  ${red_selector};
  a -> f [label=" "] ${taillabel('1')} ${headlabel('4')};
  b -> c [label=" "] ${taillabel('0')} ${headlabel('5')};  
  b -> g [label=" "] ${taillabel('4-2=2',true)} ${headlabel('0+2=2',true)} ${red_selector};  
  g -> f [label=" "] ${taillabel('3')};    
  g -> h [label=" "] ${taillabel('2-2=0',true)} ${headlabel('0+2=2',true)} ${red_selector};
  g -> e [label=" "] ${taillabel('2')};
  f -> e [label=" "] ${taillabel('0')} ${headlabel('4')};
  e -> h [label=" "] ${taillabel('0')};
  e -> d [label=" "] ${taillabel('2')} ${headlabel('4')};
  h -> d [label=" "] ${taillabel('4-2=2',true)} ${headlabel('0+2=2',true)} ${red_selector};
  c -> d [label=" "] ${taillabel('1')} ${headlabel('5')};
}`,
// Actualizando datos
`digraph {
  label="Actualizando datos";
  edge [len=2.3] [labeldistance=3.4] ;
  d [xlabel=${label('11')}];
  a -> b [label=" "] ${taillabel('1')} ${headlabel('7')}  ${skin_selector};
  a -> f [label=" "] ${taillabel('1')} ${headlabel('4')};
  b -> c [label=" "] ${taillabel('0')} ${headlabel('5')};  
  b -> g [label=" "] ${taillabel('2')} ${headlabel('2')} ${skin_selector};  
  g -> f [label=" "] ${taillabel('3')};    
  g -> h [label=" "] ${taillabel('0')} ${headlabel('2')} ${skin_selector};
  g -> e [label=" "] ${taillabel('2')};
  f -> e [label=" "] ${taillabel('0')} ${headlabel('4')};
  e -> h [label=" "] ${taillabel('0')};
  e -> d [label=" "] ${taillabel('2')} ${headlabel('4')};
  h -> d [label=" "] ${taillabel('2')} ${headlabel('2')} ${skin_selector};
  c -> d [label=" "] ${taillabel('1')} ${headlabel('5')};
}`,
// Camino 4 (a -> b -> g -> e -> d) se puede enviar 1 unidad
`digraph {
  label="Camino 4 (a -> b -> g -> e -> d) se puede enviar 1 unidad";
  edge [len=2.3] [labeldistance=3.4] ;
  d [xlabel=${label('1+11=12')}];
  a -> b [label=" "] ${taillabel('1-1=0',true)} ${headlabel('7+1=8',true)}  ${red_selector};
  a -> f [label=" "] ${taillabel('1')} ${headlabel('4')};
  b -> c [label=" "] ${taillabel('0')} ${headlabel('5')};  
  b -> g [label=" "] ${taillabel('2-1=1',true)} ${headlabel('2+1=3',true)} ${red_selector};  
  g -> f [label=" "] ${taillabel('3')};    
  g -> h [label=" "] ${taillabel('0')} ${headlabel('2')};
  g -> e [label=" "] ${taillabel('2-1=1',true)} ${headlabel('0+1=1',true)} ${red_selector};
  f -> e [label=" "] ${taillabel('0')} ${headlabel('4')};
  e -> h [label=" "] ${taillabel('0')};
  e -> d [label=" "] ${taillabel('2-1=1',true)} ${headlabel('4+1=5',true)} ${red_selector};
  h -> d [label=" "] ${taillabel('2')} ${headlabel('2')};
  c -> d [label=" "] ${taillabel('1')} ${headlabel('5')};
}`,
// Actualizando datos
`digraph {
  label="Camino 4 (a -> b -> g -> e -> d) se puede enviar 1 unidad";
  edge [len=2.3] [labeldistance=3.4] ;
  d [xlabel=${label('12')}];
  a -> b [label=" "] ${taillabel('0')} ${headlabel('8')}  ${skin_selector};
  a -> f [label=" "] ${taillabel('1')} ${headlabel('4')};
  b -> c [label=" "] ${taillabel('0')} ${headlabel('5')};  
  b -> g [label=" "] ${taillabel('1')} ${headlabel('3')} ${skin_selector};  
  g -> f [label=" "] ${taillabel('3')};    
  g -> h [label=" "] ${taillabel('0')} ${headlabel('2')};
  g -> e [label=" "] ${taillabel('1')} ${headlabel('1')} ${skin_selector};
  f -> e [label=" "] ${taillabel('0')} ${headlabel('4')};
  e -> h [label=" "] ${taillabel('0')};
  e -> d [label=" "] ${taillabel('1')} ${headlabel('5')} ${skin_selector};
  h -> d [label=" "] ${taillabel('2')} ${headlabel('2')};
  c -> d [label=" "] ${taillabel('1')} ${headlabel('5')};
}`
]}
);
  main.variable(observer("dependencies")).define("dependencies", ["md"], function(md){return(
md `---
# Depedencias
`
)});
  const child1 = runtime.module(define1);
  main.import("c", child1);
  main.import("_range", child1);
  main.import("tex_html", child1);
  main.import("custom_graphviz", child1);
  main.import("adot_iterator", child1);
  main.import("a_target_blank", child1);
  main.import("gen_chars", child1);
  const child2 = runtime.module(define2);
  main.import("more_info_es", child2);
  const child3 = runtime.module(define3);
  main.import("adot", child3);
  const child4 = runtime.module(define4);
  main.import("button", child4);
  main.variable(observer("dot")).define("dot", ["require"], function(require){return(
require("@observablehq/graphviz@0.2")
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  main.variable(observer("cond_bool")).define("cond_bool", function(){return(
(_p, _q) => !_q ? false : true
)});
  main.variable(observer("_false_")).define("_false_", function(){return(
"\\colorbox{white}{\\boxed{\\color{black}F}}"
)});
  main.variable(observer("_true_")).define("_true_", function(){return(
"\\colorbox{#36B374}{\\color{white}\\boxed{V}}"
)});
  main.variable(observer("t_or_f")).define("t_or_f", ["_true_","_false_"], function(_true_,_false_){return(
(_bool) => _bool ? _true_ : _false_
)});
  main.variable(observer("union_two_arrays")).define("union_two_arrays", function(){return(
(_array1, _array2) => {
  return Array.from(new Set([..._array1,..._array2].sort((a,b) => a - b)))
}
)});
  main.variable(observer("intsc_two_arrays")).define("intsc_two_arrays", function(){return(
(_array1, _array2) => {
  const a = new Set(_array1)
  const b = new Set(_array2)
  return Array.from(new Set([...a].filter(x => b.has(x))))
}
)});
  main.variable(observer("substract_two_arrays")).define("substract_two_arrays", function(){return(
(_array1, _array2) => {
  const a = Array.from(new Set(_array1))
  const b = Array.from(new Set(_array2))
  const result = a.map((x) => b.find((y) => y === x) ? [] : x).flat()
  return result
}
)});
  main.variable(observer("compare_two_arrays")).define("compare_two_arrays", function(){return(
(_array1, _array2) => {
  if( _array1.length !== _array2.length) return []
  return _array1.every((cv, idx) => cv === _array2[idx])
}
)});
  main.variable(observer("print_matrix_html")).define("print_matrix_html", ["html","tex","tex_html"], function(html,tex,tex_html){return(
(_matrix) => { 
  return html `
    <table style="font-size:20px">
    <tr>
      <th></th>
      ${_matrix.map((a, idx) => 
        `<th>${String.fromCharCode(0x0061 + idx)}</th>`).join('')}
      <th>${tex `\bf Grado \bf`}</th>
    <tr>
    ${_matrix.map((a, idx) => 
      `<tr><td>${tex_html('\\bf ' + String.fromCharCode(0x0061 + idx) + '\\bf')}</td>
        ${a.map((b) => `<td>${tex_html(b)}</td>` ).join('')}
        <td>${tex_html(a.reduce((acc, cv) => acc + cv))}</td>
      </tr>`).join('')
    }
    </table>`
}
)});
  main.variable(observer("change_columns_to_row")).define("change_columns_to_row", function(){return(
(matrix) => {
  const len_vert_matrix = matrix.length
  const len_horz_matrix = matrix[0].length
    
  const matrix_mod = (idx_horz = 0) => {
    
    const column_to_row = (idx_vert = 0) => {
      if (idx_vert === len_vert_matrix)
        return []
      return [matrix[idx_vert][idx_horz], ...column_to_row(idx_vert + 1)]  
    }
    
    if (idx_horz === len_horz_matrix)      
      return []    
    return [column_to_row(),...matrix_mod(idx_horz + 1)]
    
  }
  return matrix_mod()
}
)});
  main.variable(observer("is_matrix_squared")).define("is_matrix_squared", function(){return(
(matrix) => {  
  const task = ([head, ...tail]) => {
    if (typeof head === 'undefined' && tail.length === 0) return true
    return (head.length === matrix.length) ? task(tail) : false  
  }
  return task(matrix)
}
)});
  main.variable(observer("matrix_is_symetric")).define("matrix_is_symetric", ["is_matrix_squared"], function(is_matrix_squared){return(
(matrix) => {
  if (matrix.length <= 1) return false

  const verf_is_squared = is_matrix_squared(matrix)
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
  main.variable(observer("get_abc_edge")).define("get_abc_edge", function(){return(
(idx) => {
  const _acc = 25
  const _a = 97
  const _z = _a + _acc 
  const _id = idx > _acc ? parseInt((_a + idx)/_z).toString() : ''
  const fix_letter_code_utf8 = () => {
    const mod_idx_acc = (idx % _acc) + _a
    if ((idx >= _acc) && !(mod_idx_acc)) return _acc // 'z'
    if (idx > _acc) return ((idx - 1) % _acc) + _a
    return mod_idx_acc
  }
  const letter = String.fromCharCode(fix_letter_code_utf8())
  return letter + _id
}
)});
  main.variable(observer("print_conn")).define("print_conn", ["get_abc_edge"], function(get_abc_edge){return(
(idx, idx2, times, enable_digraph, enable_abc, len_edge) => {
  const _len =  ` [len=${len_edge}];\n`
  if (enable_abc) {
    return enable_digraph ? 
      `${get_abc_edge(idx)} -> ${get_abc_edge(idx2)} ${_len}`.repeat(times)
    : `${get_abc_edge(idx)} -- ${get_abc_edge(idx2)} ${_len}`.repeat(times)
  }
  return enable_digraph ? 
    `${idx} -> ${idx2} ${_len}`.repeat(times)
  : `${idx} -- ${idx2} ${_len}`.repeat(times)
}
)});
  main.variable(observer("get_graph_adj")).define("get_graph_adj", ["print_conn"], function(print_conn){return(
(matrix = [], enable_digraph = false, enable_abc = false,
                 len_edge = 1.5, enable_repeat = false ) => { 
  
  if (matrix.length <= 1) return 'length <= 1'
  
  const matrix_mod = [...matrix.map(a => [...a])] // matrix clone
  
  const _acc = 25
  const _a = 97
  const _z = _a + _acc  
  
  const get_conn = matrix_mod.map((a,idx) => 
    a.map((b,idx2) => { 
      //console.log(`matrix[${idx}][${idx2}] = ${matrix[idx][idx2]}`)
      if (b >= 1) {
        //console.log('here', b)        
        if (matrix_mod[idx][idx2] === matrix_mod[idx2][idx]) {
          //console.log(`match matrix[${idx2}][${idx}] = ${matrix[idx2][idx]}`)
          if (!enable_repeat)
            matrix_mod[idx2][idx] = 0
          return print_conn(idx, idx2, b, enable_digraph, enable_abc, len_edge)
        } else {          
          return print_conn(idx, idx2, b, enable_digraph, enable_abc, len_edge)
        }
      } else {
        return ''
      }
    }).join('')
  ).join('')
  //console.log('conn:', conn)
  const result = `${enable_digraph ? `digraph` : `graph`} {
    ${get_conn}
  }`
  //console.log('matrix_mod', matrix_mod)
  //console.log('matrix', matrix)
  return result
}
)});
  main.variable(observer("get_graph_incd")).define("get_graph_incd", ["change_columns_to_row","print_conn"], function(change_columns_to_row,print_conn){return(
(matrix, enable_digraph = false, enable_abc = false, len_edge = 1.5) => {
  
  if (matrix.length <= 1) return 'length <= 1'
  
  const matrix_mod = change_columns_to_row(matrix)
  
  const get_idxs = (idx, idx2 = 0, len2) => {      
      if (idx2 > 5) return []
      if (idx2 === len2) return []
      return matrix_mod[idx][idx2] === 1 ? 
        [idx2,...get_idxs(idx, idx2 + 1, len2)]
        : get_idxs(idx, idx2 + 1, len2)
  }
  
  const conn = (idx = 0, len) => {    
    
    if (idx === len) return []
    const edges = get_idxs(idx, 0, matrix_mod[idx].length)
    const fix_edges = print_conn(edges[0], edges[1], 1, enable_digraph, enable_abc, len_edge)
    return [fix_edges, ...conn(idx + 1, len)]    
  }
  
  const get_conn = conn(0, matrix_mod.length)
  
  const result = `${enable_digraph ? `digraph` : `graph`} {
    ${get_conn.join('')}
  }`
  return result
  
}
)});
  main.variable(observer("vertices_matrix")).define("vertices_matrix", function(){return(
(matrix) => {
  return matrix.map((a) => a.reduce((acc, cv) => acc + cv))
}
)});
  main.variable(observer("colors")).define("colors", function(){return(
Object.create({blue_light: '#7CFAFF', skin: '#FACFAD', red: 'red', green: 'green', blue: 'blue',
                       black: 'black', white: 'white'})
)});
  main.variable(observer("debug_test")).define("debug_test", ["md"], function(md){return(
md `---
# Debug/Test`
)});
  main.variable(observer("blabla")).define("blabla", ["tex"], function(tex){return(
tex ` 2 + 2`
)});
  main.variable(observer()).define(["tex","_false_"], function(tex,_false_)
{
  const a = tex `${_false_}`
  return a
}
);
  main.variable(observer()).define(["tex","_true_"], function(tex,_true_){return(
tex `${_true_}`
)});
  main.variable(observer()).define(function()
{
  return Promise.resolve('hola mundo').then((x) => x)
}
);
  main.variable(observer()).define(["require"], function(require){return(
Promise.resolve(require('https://unpkg.com/d3-graphviz@1.3.1/build/d3-graphviz.min.js'))
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
Promise.resolve(custom_graphviz(`
  graph {    
    g [pos="1,1"];    
    c -- a;
    c -- d;
    a -- b;
    a -- d;
    a -- f;
    b -- d;
    d -- e;
    b -- e;    
    f -- e;
    f -- b;
    f -- g;
    g -- e;
  }
`, 'neato')).then(x => x)
)});
  main.variable(observer()).define(["d3"], function(d3){return(
console.log('d3.graphviz:', d3.graphviz)
)});
  main.variable(observer("d3__graph")).define("d3__graph", ["require"], function(require){return(
require("d3-graphviz", "d3-selection", "d3-transition", "d3-ease")
)});
  main.variable(observer()).define(["matrix_is_symetric","matrix_ady_no_simetrica__3__6"], function(matrix_is_symetric,matrix_ady_no_simetrica__3__6){return(
matrix_is_symetric(matrix_ady_no_simetrica__3__6)
)});
  main.variable(observer()).define(["matrix_ady_no_simetrica__3__6"], function(matrix_ady_no_simetrica__3__6){return(
matrix_ady_no_simetrica__3__6
)});
  main.variable(observer()).define(["custom_graphviz","get_graph_adj"], function(custom_graphviz,get_graph_adj){return(
custom_graphviz(get_graph_adj([
  [1,1,1,0],
  [1,0,1,2],
  [1,1,0,1],
  [0,2,1,0],
  [0,2,1,0]
], false))
)});
  main.variable(observer()).define(["custom_graphviz","get_graph_adj","matrix_ady_no_simetrica__3__6"], function(custom_graphviz,get_graph_adj,matrix_ady_no_simetrica__3__6){return(
custom_graphviz(get_graph_adj(matrix_ady_no_simetrica__3__6, false))
)});
  main.variable(observer()).define(["matrix_ady_no_simetrica__3__6"], function(matrix_ady_no_simetrica__3__6){return(
matrix_ady_no_simetrica__3__6
)});
  main.variable(observer()).define(["custom_graphviz","get_graph_adj","matrix_adj__3__12"], function(custom_graphviz,get_graph_adj,matrix_adj__3__12){return(
custom_graphviz(get_graph_adj(matrix_adj__3__12, true, true, 1.5))
)});
  main.variable(observer()).define(["custom_graphviz"], function(custom_graphviz){return(
custom_graphviz(`
digraph {
edge [len=1.8]
a -> b [taillabel=<<table bgcolor="black"><tr><td><font color="white"><b>A</b></font></td></tr></table>>];
}
`)
)});
  return main;
}

// https://observablehq.com/d/1dbb5ea4edb292ae@4144
import define1 from "./1338841536b09034@1047.js";
import define2 from "./b91a18309e2d6803@53.js";
import define3 from "./666acd0c3c652c48@1331.js";
import define4 from "./e93997d5089d7165@2227.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Notas - Platzi - Matemáticas discretas [FULL]`
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
md `<mark>Los administradores son ${tex `${admin__2_7}`}</mark>`
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
  main.variable(observer("iterator__3_1")).define("iterator__3_1", ["adot_iterator","dots__3_1","play__3_1"], function(adot_iterator,dots__3_1,play__3_1){return(
adot_iterator(dots__3_1.length, false, undefined, play__3_1)
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
  main.variable(observer("iterator__3_2")).define("iterator__3_2", ["adot_iterator","dots__3_2","play__3_2"], function(adot_iterator,dots__3_2,play__3_2){return(
adot_iterator(dots__3_2.length, false, undefined, play__3_2)
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
  main.variable(observer("iterator__3_3")).define("iterator__3_3", ["adot_iterator","dots__3_3","play__3_3"], function(adot_iterator,dots__3_3,play__3_3){return(
adot_iterator(dots__3_3.length, false, undefined, play__3_3)
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
  main.variable(observer("iterator__3_4")).define("iterator__3_4", ["adot_iterator","dots__3_4","play__3_4"], function(adot_iterator,dots__3_4,play__3_4){return(
adot_iterator(dots__3_4.length, false, undefined, play__3_4)
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
  main.variable(observer("iterator__3_9")).define("iterator__3_9", ["adot_iterator","dots_graph_path_hamilton__3__9","play__3_9"], function(adot_iterator,dots_graph_path_hamilton__3__9,play__3_9){return(
adot_iterator(dots_graph_path_hamilton__3__9.length, false, undefined, play__3_9)
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
  main.variable(observer("iterator__3_10")).define("iterator__3_10", ["adot_iterator","dots_graph_path_hamilton__3__10","play__3_10"], function(adot_iterator,dots_graph_path_hamilton__3__10,play__3_10){return(
adot_iterator(dots_graph_path_hamilton__3__10.length, false, undefined, play__3_10)
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
  main.variable(observer()).define(["md","tex","more_info_es"], function(md,tex,more_info_es){return(
md `Los arboles n-arios son aquellos arboles donde el número máximo de hijos por nodo es de ${tex `N`}, en la figura ${tex `7`} podemos apreciar dos árboles con grado ${tex `2`} y grado ${tex `3`}, estos dos arboles también los podemos definir como Árbol n-ario con n = ${tex `2`} y n=${tex `3`} respectivamente.
<img src="http://www.oscarblancarteblog.com/wp-content/uploads/2014/08/grado.png" />
<br><br>
${more_info_es('https://www.oscarblancarteblog.com/2014/08/22/estructura-de-datos-arboles/')}`
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
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md `## Determinar el nivel y la altura del siguiente árbol considerando como raíz el vértice ${tex `d`}`
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
  main.variable(observer()).define(["matrix_incd__3__14"], function(matrix_incd__3__14){return(
matrix_incd__3__14
)});
  main.variable(observer("vertices_matrix")).define("vertices_matrix", function(){return(
(matrix) => {
  return matrix.map((a) => a.reduce((acc, cv) => acc + cv))
}
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
  return main;
}

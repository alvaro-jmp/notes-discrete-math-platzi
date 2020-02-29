# Notas - Platzi - Matemáticas discretas - Light Version - [SPANISH]

[FULL Version] with js modifiable:

https://observablehq.com/d/1dbb5ea4edb292ae 

<br />

Light version:

https://notes-discrete-math-platzi.alvarojmp.repl.co

https://observablehq.com/d/ae848018b11d54bc

<br />

If you want to play, test, etc with [repl.it](https://repl.it/):

https://repl.it/@alvarojmp/notes-discrete-math-platzi

<br />

View this notebook in your browser by running a web server in this folder. For
example:

~~~sh
python -m SimpleHTTPServer
~~~

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to
import this module directly into your application. To npm install:

~~~sh
npm install @observablehq/runtime@4
npm install https://api.observablehq.com/d/1dbb5ea4edb292ae.tgz?v=3
~~~

Then, import your notebook and the runtime as:

~~~js
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "1dbb5ea4edb292ae";
~~~

To log the value of the cell named “foo”:

~~~js
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
~~~

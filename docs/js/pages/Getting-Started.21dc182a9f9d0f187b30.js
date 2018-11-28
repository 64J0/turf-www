webpackJsonp([3],{"3/if":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("pJHg"),i=r("jguF"),s=!1;var a=function(t){s||r("SX25")},n=r("VU/8")(o.a,i.a,!1,a,"data-v-364e79e4",null);n.options.__file="src/pages/Getting-Started.vue",e.default=n.exports},SX25:function(t,e,r){var o=r("zozR");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("rjj0")("6eb5b7ae",o,!1,{sourceMap:!1})},jguF:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Row",{staticClass:"mainContentArea"},[r("Col",{attrs:{span:"17"}},[r("h3",[t._v("Getting started with Turf.js")]),r("p",[t._v("There are a few different ways to get started using Turf, the documentation below will provide a couple of the common scenarios.")]),r("h4",[t._v("Using directly in the browser")]),r("p",[t._v("Load the minified file via a script tag, this will expose a global variable named turf.")]),r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[r("code",{staticClass:"js"},[t._v("<script src='https://npmcdn.com/@turf/turf/turf.min.js'><\/script>\n<script>\n    var bbox = turf.bbox(features);\n<\/script>")])]),r("p",[r("strong",[t._v("Note:")]),t._v(" The full build of Turf weighs around 500kb which is a fair bit of javascript to load so you probably only want to pull in the bits you need, see the instructions below on how to create a custom build.")]),r("h4",[t._v("Using in Node or with a build tool")]),r("p",[t._v("If you're working in Node or with build tool (such as webpack, browserify or rollup) you can include individual turf modules in your project.")]),r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[r("code",{staticClass:"js"},[t._v("// Import your module of interest\nvar collect = require('@turf/collect');\n// or in ES6\nimport collect from '@turf/collect';\n// And then use it\ncollect(points, polys, 'population', 'populationValues');\n// Alternatively you can import the whole lot using\nimport * as turf from '@turf/turf'\n")])]),r("h4",[t._v("Creating custom builds for use in the browser")]),r("p",[r("strong",[t._v("Step 1")]),t._v(" Create a folder and install whatever modules you are interested in via npm")]),r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[r("code",{staticClass:"js"},[t._v("$ npm install @turf/collect @turf/buffer")])]),r("p",[r("strong",[t._v("Step 2")]),t._v(" Create a file called main.js in the root directory, in this include your required modules within a modules.exports statement")]),r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[r("code",{staticClass:"js"},[t._v("module.exports = {\n    collect: require('@turf/collect'),\n    buffer: require('@turf/buffer')\n};")])]),r("p",[r("strong",[t._v("Step 3")]),t._v(" Run the following browserify command")]),r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[r("code",{staticClass:"bash"},[t._v("$ browserify main.js -s turf > outTurf.js ")])]),r("p",[r("strong",[t._v("Done")]),t._v(" You can now use your outTurf.js file where you want just like you would normally use Turf, eg load it via a script tag and call turf using the turf global variable.")]),r("h4",[t._v("Working with data")]),r("p",[t._v("Turf uses "),r("a",{attrs:{href:"http://geojson.org"}}),t._v("GeoJSON"),t._v(" as its data exchange format wherever possible. It is recommended to read the GeoJSON specification before using Turf, however, a common issue to be aware of when starting out is that GeoJSON requires data to be formatted in "),r("i",[t._v("longitude,latitude")]),t._v(" order.")])]),r("Col",{staticClass:"highlight",attrs:{span:"6"}},[r("h4",[t._v("Examples")]),r("p",[t._v("Below are some helpful resources for getting started with Turf.")]),r("h5",[t._v("Code Repositories")]),r("p",[r("a",{attrs:{href:"https://github.com/turfjs/turf-node-example"}},[t._v("Turf & Node.js for geoprocessing tasks")])]),r("br"),r("p",[r("a",{attrs:{href:"https://github.com/mapbox/turf-server-example"}},[t._v("Turf & Express.js to create a spatial server")])]),r("h5",[t._v("Guides")]),r("p",[r("a",{attrs:{href:"https://www.mapbox.com/guides/intro-to-turf"}},[t._v("Intro To Turf")])]),r("br"),r("p",[r("a",{attrs:{href:"https://www.mapbox.com/guides/analysis-with-turf"}},[t._v("Analysis with Turf.js")])])])],1)};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i},pJHg:function(t,e,r){"use strict";e.a={name:"GettingStarted"}},zozR:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".highlight[data-v-364e79e4]{background-color:#0c3952;padding:30px 30px 50px;color:#fff;margin-left:4%}.highlight h4[data-v-364e79e4]{color:#fff;border-bottom:2px solid #fff;margin:10px 0}.highlight h5[data-v-364e79e4]{margin-top:30px;margin-bottom:5px;text-transform:uppercase}.highlight a[data-v-364e79e4]{color:#fff;text-decoration:underline}",""])}});
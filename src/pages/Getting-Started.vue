<template>
  <article>
    <section>
      <h3>Getting started with Turf.js</h3>
      <p>There are a few different ways to get started using Turf, the documentation below will provide a couple of the common scenarios.</p>
      <h4>Using directly in the browser</h4>
      <p>Load the minified file via a script tag, this will expose a global variable named turf.</p>
      <pre v-highlightjs><code class="js">
&lt;script src='https://unpkg.com/@turf/turf/turf.min.js'&gt;&lt;/script&gt;
&lt;script&gt;
    var bbox = turf.bbox(features);
&lt;/script&gt;
      </code></pre>
      <p><strong>Note:</strong> The full build of Turf weighs around 500kb which is a fair bit of javascript to load so you probably only want to pull in the bits you need, see the instructions below on how to create a custom build.</p>
      <h4>Using in Node or with a build tool</h4>
      <p>If you're working in Node or with build tool (such as webpack, browserify or rollup) you can include individual turf modules in your project.</p>
      <pre v-highlightjs><code class="js">
// Import your module of interest
var collect = require('@turf/collect');
// or in ES6
import collect from '@turf/collect';
// And then use it
collect(points, polys, 'population', 'populationValues');
// Alternatively you can import the whole lot using
import * as turf from '@turf/turf'
      </code></pre>
      <h4>Creating custom builds for use in the browser</h4>
      <p><strong>Step 1</strong> Create a folder and install whatever modules you are interested in via npm</p>
      <pre v-highlightjs><code class="js">$ npm install @turf/collect @turf/buffer</code></pre>
      <p><strong>Step 2</strong> Create a file called main.js in the root directory, in this include your required modules within a modules.exports statement</p>
      <pre v-highlightjs><code class="js">
module.exports = {
  collect: require('@turf/collect'),
  buffer: require('@turf/buffer')
};
      </code></pre>
      <p><strong>Step 3</strong> Run the following browserify command</p>
      <pre v-highlightjs><code class="bash">$ browserify main.js -s turf > outTurf.js </code></pre>
      <p><strong>Done</strong> You can now use your outTurf.js file where you want just like you would normally use Turf, eg load it via a script tag and call turf using the turf global variable.</p>
    </section>
    <section class="highlight">
      <h4>Examples</h4>
      <p>Below are some helpful resources for getting started with Turf.</p>

      <h5>Code Repositories</h5>
      <p><a href="https://github.com/turfjs/turf-node-example">Turf & Node.js for geoprocessing tasks</a></p><br>
      <p><a href="https://github.com/mapbox/turf-server-example">Turf & Express.js to create a spatial server</a></p>
      <h5>Guides</h5>
      <p><a href="https://docs.mapbox.com/help/how-mapbox-works/geospatial-analysis/">Intro To Turf</a></p><br>
      <p><a href="https://docs.mapbox.com/help/tutorials/analysis-with-turf/">Analysis with Turf.js</a></p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'GettingStarted'
}
</script>

<style lang="scss" scoped>
  @import "../styles/variables.scss";

  article {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #f6f6f6;
    padding: 40px;
    margin-top: 20px;
    margin-bottom: 40px;
    border: 2px solid transparentize($blue, 0.9);
    font-size: 1rem;
  }

  // first section
  section:nth-child(2n + 1) {
    width: 65%;
  }

  // second section
  section:nth-child(2n) {
    background-color: $blue;
    padding: 30px 30px 50px;
    color: white;
    margin-left: 4%;
    width: 30%;
    min-width: 250px;

    h4 {
      color: white;
      border-bottom: 2px solid white;
      margin: 10px 0px;
    }

    h5 {
      margin-top: 30px;
      margin-bottom: 5px;
      text-transform: uppercase;
    }

    a {
      color: white;
      text-decoration: underline;
    }
  }

  @media (max-width: 900px) {
    article {
      flex-direction: column;
    }

    section {
      width: 100% !important;
    }

    // second section
    section:nth-child(2n) {
      margin-top: 20px;
      margin-left: 0px;
    }
  }

  @media (max-width: 650px) {
    article {
      font-size: 0.85rem;
      padding: 40px 30px;

      h3 {
        font-size: 1.9rem;
      }
    }
  }
</style>

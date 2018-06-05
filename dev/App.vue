<template>
  <div>
    <div class="header">
      <a href="https://github.com/xaksis/vue-good-links" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#ff7100; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="#fff" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="#fff" class="octo-body"></path></svg></a>
      <h1 class="title">Vue Good Links</h1>
      <h5 class="center font-regular text-muted">Hover on text to see the effect</h5>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-6 effect-card">
          <h2><a href=""><vgl-wave text="Wave Text"></vgl-wave></a></h2>
          <div>code</div>
          <pre><code class="language-markup">&lt;vgl-wave text=&quot;Wave Text&quot;&gt;&lt;/vgl-wave&gt;</code></pre>
        </div>
        <div class="col-6">
          <h2><a href=""><vgl-swing text="Swing Text"></vgl-swing></a></h2>
          <div>code</div>
          <pre><code class="language-markup">&lt;vgl-swing text=&quot;Swing Text&quot;&gt;&lt;/vgl-swing&gt;</code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-6 effect-card">
          <h2><a href="">
            <vgl-rotate
              :originalSpanStyle="{color: 'white'}"
              text="Rotate Text"></vgl-rotate></a></h2>
          <div>code</div>
          <pre><code class="language-markup">&lt;vgl-rotate text=&quot;Rotate Text&quot;&gt;&lt;/vgl-rotate&gt;</code></pre>
        </div>
        <div class="col-6">
          <h2><a href=""><vgl-ghost text="Ghost Text"></vgl-ghost></a></h2>
          <div>code</div>
          <pre><code class="language-markup">&lt;vgl-ghost text=&quot;Ghost Text&quot;&gt;&lt;/vgl-ghost&gt;</code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-6 effect-card">
          <h2>
            <a href="">
              <vgl-rollup text="Rollup Text"></vgl-rollup>
            </a>
          </h2>
          <div>code</div>
          <pre><code class="language-markup">&lt;vgl-rollup text=&quot;Rollup Text&quot;&gt;&lt;/vgl-rollup&gt;</code></pre>
        </div>
        <div class="col-6">
          <h2><a href=""><vgl-slidein text="Slidein Text"></vgl-slidein></a></h2>
          <div>code</div>
          <pre><code class="language-markup">&lt;vgl-slidein text=&quot;Slidein Text&quot;&gt;&lt;/vgl-slidein&gt;</code></pre>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Each variant can also be used in a paragraph</h3>
          <p>Lorem <a href=""><vgl-wave text="ipsum dolor sit"></vgl-wave></a> amet consectetur <a href=""><vgl-swing text="adipisicing elit"></vgl-swing></a>. Tempora <a href="">
            <vgl-rotate
              :originalSpanStyle="{
                backgroundColor: '#3fa46a',
                color: 'white',
              }" text="voluptatum">
            </vgl-rotate>
          </a> cumque vel magni quasi <a href=""><vgl-ghost text="quidem atque"></vgl-ghost></a>, sequi nisi expedita <a href=""><vgl-rollup text="odio fugit amet"></vgl-rollup></a> alias in maiores dignissimos ducimus <a href=""><vgl-slidein text="quisquam ab iusto"></vgl-slidein></a>?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  VglWave,
  VglRollup,
  VglSlidein,
  VglGhost,
  VglSwing,
  VglRotate,
} from '../src';

require('prismjs');
require('prismjs/components/prism-markup');

export default {
  name: 'test',
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  },
  components: {
    'vgl-wave': VglWave,
    'vgl-rollup': VglRollup,
    'vgl-slidein': VglSlidein,
    'vgl-ghost': VglGhost,
    'vgl-swing': VglSwing,
    'vgl-rotate': VglRotate,
  },
};
</script>

<style src="prismjs/themes/prism.css"></style>
<style lang="scss">
@import './styles/simplegrid';

* {
  color: #636366
}

a{
  line-height: inherit;
  *{
    color: #3fa46a;
  }
}

section{
  margin-bottom: 30px;
}
.title{
  text-align: center;
  text-transform: uppercase;
}

.text-muted{
  opacity: 0.7;
}
.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
</style>


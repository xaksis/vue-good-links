<template>
  <div>
    <h1> <vgl-wave></vgl-wave></h1>
    <a href=""> <vgl-wave text="This is my link"></vgl-wave></a>
    <section>
      <p style="">This is <a href=""><vgl-rollup text="This is rollup"></vgl-rollup></a> After text</p>
    </section>
    <section>
      <p>
        My name is <a href=""><vgl-slidein text="VGL slidein"></vgl-slidein></a> yep yep
      </p>
    </section>
    <section>
      <p>
        my name is <vgl-ghost text="VGL Ghost"></vgl-ghost> yep yep
      </p>
    </section>
    <section>
      <p>
        my name is <a href=""><vgl-swing text="VGL Swing"></vgl-swing></a> yep yep
      </p>
    </section>
    <section>
      <h2>
        my name is <a href=""><vgl-rotate text="VGL Rotate"></vgl-rotate></a> yep yep
      </h2>
    </section>
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

<style lang="css">
section{
  margin-bottom: 30px;
}
</style>


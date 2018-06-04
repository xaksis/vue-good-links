<template>
<span :style="{height: spanHeight}" class="vgl-rollup-wrap"
  @mouseover="startAnimating"
  @mouseleave="stopAnimating">
  <span
    :style="originalSpanStyle"
    class="vgl-rollup-original">{{text}}</span>
  <span
    :style="boldSpanStyle"
    class="vgl-rollup-bold">{{text}}</span>
  <span
    ref="originalText"
    style="opacity: 0; font-weight: bold;">{{text}}</span>
</span>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  name: 'vgl-rollup',
  props: {
    text: {
      type: String,
      default: 'Sample Text',
    },
  },
  data() {
    return {
      active: false,
      spanHeight: 0,
    };
  },
  computed: {
    originalSpanStyle() {
      return {
        top: this.active ? `-${this.spanHeight}` : 0,

      };
    },
    boldSpanStyle() {
      return {
        top: this.active ? 0 : `${this.spanHeight}`,
      };
    },
  },
  methods: {
    startAnimating: debounce(function () {
      this.active = true;
    }, 150),

    stopAnimating: debounce(function () {
      this.active = false;
    }, 150),

    init() {
      const originalSpan = this.$refs.originalText;
      const spanStyle = window.getComputedStyle(originalSpan, null);
      const spanHeight = spanStyle.fontSize;
      const num = parseInt(spanHeight.substring(0, spanHeight.length - 2), 10) * 1.2;
      this.spanHeight = `${num}px`;
    },
  },
  mounted() {
    this.init();
  },
  components: {
  },
};
</script>

<style lang="scss">
.vgl-rollup-wrap{
  position: relative;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  // border: 1px solid blue;
  .vgl-rollup-original, .vgl-rollup-bold{
    transition: all 0.3s;
    display: inline-block;
    position: absolute;
  }
  .vgl-rollup-bold{
    font-weight: bold;
  }
}
</style>

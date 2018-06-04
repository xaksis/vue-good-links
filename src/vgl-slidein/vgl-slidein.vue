<template>
<span :style="{width: spanWidth}" class="vgl-slidein-wrap"
  @mouseover="startAnimating"
  @mouseleave="stopAnimating">
  <span
    :style="internalOriginalSpanStyle"
    class="vgl-slidein-original">{{text}}</span>
  <span
    :style="internalBoldSpanStyle"
    class="vgl-slidein-bold">{{text}}</span>
  <span
    ref="originalText"
    style="opacity: 0;">{{text}}</span>
</span>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  name: 'vgl-slidein',
  props: {
    text: {
      type: String,
      default: 'Sample Text',
    },
    replaceSpanStyle: {
      type: Object,
      // eslint-disable-next-line
      default: () => {
        return {
          backgroundColor: 'black',
          color: 'white',
          padding: '0px 5px',
        };
      },
    },
    originalSpanStyle: {
      type: Object,
      // eslint-disable-next-line
      default: () => {
        return {
          padding: '0px 5px',
        };
      },
    },
  },
  data() {
    return {
      active: false,
      spanWidth: 0,
    };
  },
  computed: {
    internalOriginalSpanStyle() {
      return {
        ...this.originalSpanStyle,
        left: this.active ? `${this.spanWidth}` : 0,
      };
    },
    internalBoldSpanStyle() {
      return {
        ...this.replaceSpanStyle,
        left: this.active ? 0 : `-${this.spanWidth}`,
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
      const horizontalPadding = 5;
      const originalSpan = this.$refs.originalText;
      console.log(originalSpan.offsetWidth);
      this.spanWidth = `${originalSpan.offsetWidth + (horizontalPadding * 2)}px`;
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
.vgl-slidein-wrap{
  position: relative;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  white-space: nowrap;
  // border: 1px solid blue;
  .vgl-slidein-original, .vgl-slidein-bold{
    transition: all 0.3s;
    display: inline-block;
    position: absolute;
  }
  .vgl-slidein-bold{
    // text-transform: uppercase;
  }
}
</style>

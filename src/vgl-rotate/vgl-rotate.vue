<template>
<span class="vgl-rotate-wrap"
  :class="{'vgl-active': active}"
  @mouseover="startAnimating"
  @mouseleave="stopAnimating">
  <span
    :style="internalBoldSpanStyle"
    class="vgl-rotate-bold">{{text}}</span>
  <span
    :style="internalOriginalSpanStyle"
    class="vgl-rotate-original">{{text}}</span>
  <span
    ref="originalText"
    :style="internalBoldSpanStyle"
    style="opacity: 0;">{{text}}</span>
</span>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  name: 'vgl-rotate',
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
        transformOrigin: `50% 50% -${this.spanWidth}`,
      };
    },
    internalBoldSpanStyle() {
      return {
        ...this.replaceSpanStyle,
        transformOrigin: `50% 50% ${this.spanWidth}`,
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
      // console.log(originalSpan.offsetWidth);
      this.spanWidth = `${(originalSpan.offsetWidth) / 2}px`;
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
.vgl-rotate-wrap{
  position: relative;
  display: inline-block;
  vertical-align: top;
  // overflow: hidden;
  white-space: nowrap;
  .vgl-rotate-original, .vgl-rotate-bold{
    display: inline-block;
    position: absolute;
  }
  .vgl-rotate-original{
    background: grey;
    transition: all 0.4s;
  }
  .vgl-rotate-bold{
    transform: rotateY(-90deg);
    transition: all 0.4s;
    background-color: black;
    color: white;
  }
  &.vgl-active{
    perspective: 800px;
    transform-style: preserve-3d;
    .vgl-rotate-original{
      transform: rotateY(-90deg);
    }
    .vgl-rotate-bold{
      transform: rotateY(0deg);
    }
  }
}
</style>

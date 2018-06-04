<template>
<span class="vgl-swing-wrap"
  :class="{'vgl-active': active}"
  @mouseover="startAnimating"
  @mouseleave="stopAnimating">
  <span
    :style="internalOriginalSpanStyle"
    class="vgl-swing-original">{{text}}</span>
  <span
    :style="internalBoldSpanStyle"
    class="vgl-swing-bold">{{text}}</span>
  <!-- <span
    ref="originalText"
    style="opacity: 0;">{{text}}</span> -->
</span>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  name: 'vgl-swing',
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
      // console.log(originalSpan.offsetWidth);
      this.spanWidth = `${originalSpan.offsetWidth + (horizontalPadding * 2)}px`;
    },
  },
  mounted() {
  },
  components: {
  },
};
</script>

<style lang="scss">
.vgl-swing-wrap{
  position: relative;
  display: inline-block;
  vertical-align: top;
  // overflow: hidden;
  white-space: nowrap;
  .vgl-swing-original, .vgl-swing-bold{
    display: inline-block;
  }
  .vgl-swing-original{
    opacity: 0.6;
    transform-origin: 0% 50%;
    transform-style: preserve-3d;
  }
  .vgl-swing-bold{
    position: absolute;
    transform: rotateX(270deg);
    transition: transform 0.6s;
    transform-origin: 0 0;
    pointer-events: none;
    background-color: black;
    color: white;
  }
  &.vgl-active{
    perspective: 800px;
    .vgl-swing-bold{
      transform: rotateX(0deg);
    }
  }
}
</style>

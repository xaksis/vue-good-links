<template>
<span class="vgl-swing-wrap"
  :class="{'vgl-active': active}"
  @mouseover="startAnimating"
  @mouseleave="stopAnimating"
  v-on="$listeners">
  <span
    :style="internalOriginalSpanStyle"
    class="vgl-swing-original">{{text}}</span>
  <span
    :style="internalBoldSpanStyle"
    class="vgl-swing-bold">{{text}}</span>
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
    hoverSpanStyle: {
      type: Object,
      // eslint-disable-next-line
      default: () => {
        return {
        };
      },
    },
    originalSpanStyle: {
      type: Object,
      // eslint-disable-next-line
      default: () => {
        return {
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
        padding: '0px 5px',
        ...this.originalSpanStyle,
        left: this.active ? `${this.spanWidth}` : 0,
      };
    },
    internalBoldSpanStyle() {
      return {
        padding: '0px 5px',
        ...this.hoverSpanStyle,
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

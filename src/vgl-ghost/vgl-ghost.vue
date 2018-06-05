<template>
<span class="vgl-ghost-wrap"
  @mouseover="startAnimating"
  @mouseleave="stopAnimating">
  <span
    style="originalSpanStyle"
    class="vgl-ghost-original">{{text}}</span>
  <span
    style="hoverSpanStyle"
    class="vgl-ghost-bold" :class="{'vgl-active': active}">{{text}}</span>
  <span
    ref="originalText"
    style="opacity: 0;">{{text}}</span>
</span>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  name: 'vgl-ghost',
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
.vgl-ghost-wrap{
  position: relative;
  display: inline-block;
  vertical-align: top;
  // overflow: hidden;
  white-space: nowrap;
  .vgl-ghost-original, .vgl-ghost-bold{
    transition: all 0.3s;
    display: inline-block;
    position: absolute;
  }
  .vgl-ghost-original{
    opacity: 0.6;
  }
  .vgl-ghost-bold{
    transform: scale(1.1) translateX(10px) translateY(-10px) rotate(4deg);
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0;
    &.vgl-active{
      opacity: 1;
      transform: scale(1) translateX(0px) translateY(0px) rotate(0deg);
    }
  }
}
</style>

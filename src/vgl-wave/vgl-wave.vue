<template>
<span
    class="vgl-wave-wrap"
    @mouseover="startAnimating"
    @mouseleave="stopAnimating"
    v-on="$listeners">
  <span
    class="vgl-lettr"
    :class="{'vgl-active': activeIndex === idx}"
    v-for="(l, idx) in letters"
    :key="idx"><span class="vgl-lettr-inner">{{l}}</span><span style="opacity: 0;">{{l}}</span></span>
</span>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  name: 'vgl-wave',
  props: {
    text: {
      type: String,
      default: 'Sample Text',
    },
  },
  data() {
    return {
      activeIndex: -1,
      timeouts: [],
      intervals: [],
    };
  },
  computed: {
    letters() {
      return this.text ? this.text.split('') : '';
    },
  },
  methods: {
    startAnimating: debounce(function () {
      const delay = 150;
      // if animation is already going, we don't need to do anything
      if (this.activeIndex > -1) return;

      for (let i = 0; i < this.letters.length; i++) {
        this.timeouts.push(setTimeout(() => {
          // start animating right away
          this.activeIndex = i;

          // repeat animation for as long as I'm hovering
          this.intervals.push(setInterval(() => {
            this.activeIndex = i;
          }, this.letters.length * delay));
        }, i * delay));
      }
    }, 150),

    stopAnimating: debounce(function () {
      for (let i = 0; i < this.timeouts.length; i++) {
        clearTimeout(this.timeouts[i]);
        clearInterval(this.intervals[i]);
      }
      this.timeouts = [];
      this.intervals = [];
      this.activeIndex = -1;
    }, 150),
  },
  mounted() {
  },
  components: {
  },
};
</script>

<style lang="scss">
.vgl-wave-wrap{
  position: relative;
  .vgl-lettr{
    position: relative;
    .vgl-lettr-inner{
      position: absolute;
      transition: all 0.15s ease-out;
      bottom: 0;
    }
    &.vgl-active{
      .vgl-lettr-inner{
        // color: red;
        bottom: 20%;
      }
    }
  }
}
</style>

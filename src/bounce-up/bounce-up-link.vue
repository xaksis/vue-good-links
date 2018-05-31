<template>
<span
    class="vgl-wrap"
    @mouseover="startAnimating"
    @mouseleave="stopAnimating">
  <span
    class="vgl-lettr"
    :class="{'vgl-active': activeIndex === idx}"
    v-for="(l, idx) in letters" :key="idx"><span class="vgl-lettr-inner">{{l}}</span><span style="opacity: 0;">{{l}}</span></span>
</span>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  name: 'bounce-up-link',
  props: [
    'text',
  ],
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
          this.activeIndex = i;
          this.intervals.push(setInterval(() => {
            this.activeIndex = i;
          }, this.letters.length * delay));
        }, i * delay));
      }
    }, 350),

    stopAnimating: debounce(function () {
      for (let i = 0; i < this.timeouts.length; i++) {
        clearTimeout(this.timeouts[i]);
        clearInterval(this.intervals[i]);
      }
      this.timeouts = [];
      this.intervals = [];
      this.activeIndex = -1;
    }, 350),
  },
  mounted() {
  },
  components: {
  },
};
</script>

<style lang="scss">
.vgl-wrap{
  position: relative;
  .vgl-lettr{
    position: relative;
    .vgl-lettr-inner{
      position: absolute;
      transition: all 0.1s ease-in;
      bottom: 0;
    }
    &.vgl-active{
      .vgl-lettr-inner{
        // color: red;
        bottom: 15%;
      }
    }
  }
}
</style>

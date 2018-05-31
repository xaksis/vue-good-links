<template>
  <div>
    <h1> <bounce-up-link text="This is my text"></bounce-up-link></h1>
  </div>
</template>

<script>

import { BounceUpLink } from '../src';

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
    'bounce-up-link': BounceUpLink,
  },
};
</script>

<style lang="css">

</style>


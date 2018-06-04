import VglWave from './vgl-wave/vgl-wave.vue';
import VglRollup from './vgl-rollup/vgl-rollup.vue';
import VglSlidein from './vgl-slidein/vgl-slidein.vue';
import VglGhost from './vgl-ghost/vgl-ghost.vue';
import VglSwing from './vgl-swing/vgl-swing.vue';
import VglRotate from './vgl-rotate/vgl-rotate.vue';

const components = {
  [VglWave.name]: VglWave,
  [VglRollup.name]: VglRollup,
  [VglSlidein.name]: VglSlidein,
  [VglGhost.name]: VglGhost,
  [VglSwing.name]: VglSwing,
  [VglRotate.name]: VglRotate,
};

function install(Vue, options) {
  if (options && options.components) {
    options.components.forEach(c => Vue.component(c.name, components[c.name]));
  } else {
    Object.keys(components).forEach((key) => {
      Vue.component(key, components[key]);
    });
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install });
}

export default { install };

export {
  VglWave,
  VglRollup,
  VglSlidein,
  VglGhost,
  VglSwing,
  VglRotate,
};


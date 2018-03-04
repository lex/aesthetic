import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from '@/App';
import aestheticize from '@/utils/aestheticizer';

Vue.use(BootstrapVue);

describe('App.vue', () => {
  it('should set title correctly', done => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    const expected = aestheticize('aesthetic');

    Vue.nextTick(() => {
      expect(document.title).toEqual(expected);
      done();
    });
  });
});

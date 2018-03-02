import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Aesthetic from '@/components/Aesthetic';

Vue.use(BootstrapVue);

describe('Aesthetic.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Aesthetic);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('#textarea-input').placeholder).toEqual(
      'text here'
    );
    expect(vm.$el.querySelector('#textarea-aesthetic').placeholder).toEqual(
      'ｔｅｘｔ　ｗｉｌｌ　ａｐｐｅａｒ　ｈｅｒｅ'
    );
  });
});

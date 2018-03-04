import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Aesthetic from '@/components/Aesthetic';
import aestheticize from '@/utils/aestheticizer';

Vue.use(BootstrapVue);

Object.defineProperty(document, 'execCommand', {
  value: jest.fn()
});

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

  it('should aestheticize text', done => {
    const Constructor = Vue.extend(Aesthetic);
    const vm = new Constructor().$mount();
    const textAreaInput = vm.$el.querySelector('#textarea-input');

    const input = 'hello';
    vm.text = input;
    const expected = aestheticize(input);

    Vue.nextTick(() => {
      expect(vm.aesthetic).toEqual(expected);
      done();
    });
  });

  it('should copy text to clipboard', done => {
    const Constructor = Vue.extend(Aesthetic);
    const vm = new Constructor().$mount();
    const textAreaInput = vm.$el.querySelector('#textarea-input');

    const spy = jest.spyOn(document, 'execCommand');

    Vue.nextTick(() => {
      vm.copyToClipboard();
      expect(spy).toBeCalledWith('copy');
      done();
    });
  });

  it('should keep the scrolling of input and output in sync', done => {
    const Constructor = Vue.extend(Aesthetic);
    const vm = new Constructor().$mount();
    const textAreaInput = vm.$el.querySelector('#textarea-input');
    const textAreaOutput = vm.$el.querySelector('#textarea-aesthetic');

    textAreaInput.scrollTop = 15;
    vm.text = 'yes';

    Vue.nextTick(() => {
      expect(textAreaOutput.scrollTop).toEqual(textAreaInput.scrollTop);
      done();
    });
  });
});

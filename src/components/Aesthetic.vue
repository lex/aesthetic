<template>
  <div class="aesthetic">
    <div>
      <textarea id="textarea-input" v-model="text" placeholder="text here" cols="50" rows="5" autofocus></textarea>
    </div>
    <div>
      <textarea id="textarea-aesthetic" ref="aestheticText" v-bind:value="aesthetic" v-bind:placeholder="aestheticPlaceholder" cols="50" rows="5" readonly></textarea>
    </div>
    <div>
      <button id="button-copy" v-on:click="copyToClipboard">Ｃｏｐｙ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aesthetic',
  data() {
    return {
      text: '',
      aestheticPlaceholder: 'ｔｅｘｔ　ｗｉｌｌ　ａｐｐｅａｒ　ｈｅｒｅ',
    };
  },
  methods: {
    unUmlautize(s) {
      return s
        .replace(/å/g, 'a')
        .replace(/Å/g, 'A')
        .replace(/ä/g, 'a')
        .replace(/Ä/g, 'a')
        .replace(/ö/g, 'o')
        .replace(/Ö/g, 'O')
        .replace(/ü/g, 'u')
        .replace(/Ü/g, 'U');
    },
    aestheticize(c) {
      const aestheticBaseCharCode = 65248;
      const spaceCharCode = ' '.charCodeAt(0);
      const newLineCharCode = '\n'.charCodeAt(0);
      const aestheticSpace = 12288;

      const charCode = c.charCodeAt(0);

      let aestheticCharCode = 0;

      switch (charCode) {
        case spaceCharCode:
          aestheticCharCode = aestheticSpace;
          break;
        case newLineCharCode:
          aestheticCharCode = newLineCharCode;
          break;
        default:
          aestheticCharCode = charCode + aestheticBaseCharCode;
          break;
      }

      const aestheticCharacter =
        charCode >= 32 && charCode <= 126
          ? String.fromCharCode(aestheticCharCode)
          : '';

      return aestheticCharacter;
    },
    copyToClipboard() {
      this.$refs.aestheticText.select();
      document.execCommand('copy');
    },
  },
  computed: {
    aesthetic() {
      return this.unUmlautize(this.text)
        .split('')
        .map(c => this.aestheticize(c))
        .join('');
    },
  },
};
</script>

<style scoped>
#button-copy {
  background-color: rgb(197, 68, 103);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
}
textarea {
  font-size: 18px;
  background-color: rgb(72, 203, 166);
  color: white;
}
textarea::placeholder {
  color: lightgray;
}
</style>

<template>
  <div class="aesthetic">
    <div>
      <textarea id="textarea-input" v-model="text" v-bind:placeholder="placeholder" cols="40" rows="5" autofocus></textarea>
    </div>
    <div>
      <textarea id="textarea-aesthetic" ref="aestheticText" v-bind:value="aesthetic" cols="40" rows="5" readonly></textarea>
    </div>
    <div>
      <button id="button-copy" v-on:click="copyToClipboard">Copy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aesthetic',
  data() {
    return {
      placeholder: 'text here',
      text: '',
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
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

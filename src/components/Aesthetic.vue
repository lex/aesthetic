<template>
  <b-container>

    <b-row>
      <b-col>
        <canvas id="title" ref="title" width="400" height="100">please update browser to see title</canvas>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <textarea id="textarea-input" ref="text" v-model="text" placeholder="text here" cols="50" rows="5" autofocus></textarea>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <textarea id="textarea-aesthetic" ref="aestheticText" v-bind:value="aesthetic" v-bind:placeholder="aestheticPlaceholder" cols="50" rows="5" readonly></textarea>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <button id="button-copy" v-on:click="copyToClipboard">Ｃｏｐｙ</button>
      </b-col>
    </b-row>

  </b-container>
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
        charCode === newLineCharCode || (charCode >= 32 && charCode <= 126)
          ? String.fromCharCode(aestheticCharCode)
          : '';

      return aestheticCharacter;
    },
    copyToClipboard() {
      this.$refs.aestheticText.select();
      document.execCommand('copy');
      this.$refs.text.focus();
    },
  },
  computed: {
    aesthetic() {
      return this.unUmlautize(this.text)
        .split('')
        .map(c => this.aestheticize(c))
        .join('');
    },
    title() {
      return this.text
        .split('')
        .map(c => this.aestheticize(c))
        .join('');
    },
  },
  watch: {
    text: function() {
       const input = this.$refs.text
       const output = this.$refs.aestheticText
       output.scrollTop = input.scrollTop
    }
  },
  mounted() {
    // css is too hard
    const text = 'ａｅｓｔｈｅｔｉｃｃ';

    const canvas = this.$refs.title;
    const context = canvas.getContext('2d');
    context.fillStyle = 'rgb(30, 30, 30)';
    context.textAlign = 'center';

    for (let i = 28; i >= 0; i -= 2) {
      context.font = `${38 - i}px Helvetica Neue`;
      const stroke = Math.max(255 - i ** 2 / 0.9, 0);
      context.strokeStyle = `rgba(${[stroke, stroke, stroke, stroke].join(
        ', ',
      )})`;
      context.fillText(text, canvas.width / 2, canvas.height / 2 - i);
      context.strokeText(text, canvas.width / 2, canvas.height / 2 - i);
    }
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
  color: rgb(58, 131, 252);
}
#title {
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>

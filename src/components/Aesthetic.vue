<template>
  <b-container>

    <b-row>
      <b-col>
        <canvas id="title" ref="title" width="400" height="100">please update browser to see title</canvas>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <textarea class="form-control" id="textarea-input" ref="text" v-model="text" placeholder="text here" rows="5" autofocus></textarea>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <textarea class="form-control" id="textarea-aesthetic" ref="aestheticText" v-bind:value="aesthetic" v-bind:placeholder="aestheticPlaceholder" rows="5" readonly></textarea>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <button id="button-copy" v-on:click="copyToClipboard">{{ copy }}</button>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import aestheticize from '../utils/aestheticizer';

export default {
  name: 'Aesthetic',
  data() {
    return {
      title: 'aestheticc',
      text: '',
      aestheticPlaceholder: aestheticize('text will appear here'),
      copy: aestheticize('Copy'),
    };
  },
  methods: {
    copyToClipboard() {
      this.$refs.aestheticText.select();
      document.execCommand('copy');
      this.$refs.text.focus();
    },
    drawTitle() {
      // css is too hard
      const text = aestheticize(this.title);

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
  },
  computed: {
    aesthetic() {
      return aestheticize(this.text);
    },
  },
  watch: {
    text() {
      const input = this.$refs.text;
      const output = this.$refs.aestheticText;
      output.scrollTop = input.scrollTop;
    },
  },
  mounted() {
    this.drawTitle();
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
  font-size: 18px !important;
  background-color: rgb(72, 203, 166) !important;
  color: white !important;
}
textarea::placeholder {
  color: rgb(222, 222, 222);
}
#title {
  margin-top: 30px;
  margin-bottom: 10px;
}
.row {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

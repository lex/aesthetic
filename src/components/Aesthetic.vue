<template>
  <div class="aesthetic">
    <input v-model="text" v-bind:placeholder="placeholder" autofocus>
    <h2>{{ aesthetic }}</h2>
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
    aestheticize(c) {
      const aestheticBaseCharCode = 65248;
      const spaceCharCode = ' '.charCodeAt(0);
      const aestheticSpace = 12288;

      const charCode = c.charCodeAt(0);

      const aestheticCharCode =
        charCode === spaceCharCode
          ? aestheticSpace
          : charCode + aestheticBaseCharCode;

      const aestheticCharacter = String.fromCharCode(aestheticCharCode);

      return aestheticCharacter;
    },
  },
  computed: {
    aesthetic() {
      return this.text
        .split('')
        .map(c => this.aestheticize(c))
        .join('');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

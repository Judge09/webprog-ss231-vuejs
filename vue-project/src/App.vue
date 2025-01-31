<template>
  <div  class = 'Watermelon'>
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Watermelon',
      message: 'I like Watermelon'
    }
  }
};
</script>

<style>
 .Watermelon {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: red;
 }
</style>
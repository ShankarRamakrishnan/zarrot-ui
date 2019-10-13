<template>
    <div>
        <input type="text" class="search" placeholder="Search for restaurants or dishes" v-model="searchString">
        <button class="" v-on:click="clear"><span class="">ESC</span></button>
    </div>
</template>

<script>
var searchString = ''
export default {
  data: function () {
    return {
      searchString
    }
  },
  methods: {
    clear: function () {
      this.searchString = ''
    }
  }
}
</script>

<style>
    .search {
        width: 500px;
        height: 50px;
        border-radius: 15px;
    }
</style>

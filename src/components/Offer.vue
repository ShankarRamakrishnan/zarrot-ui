<template>
  <div >
      <ul>
        <li v-for="offer in offers" v-bind:key="offer.id">
            <img v-bind:src="offer.imageUrl"/>
        </li>
      </ul>
  </div>
</template>

<script>
import offerService from '../services/offerService'

var off = {}
offerService.then((offerData) => {
  off = offerData
})

export default {
  data () {
    return {
      offers: off
    }
  }
}
</script>

<style>

</style>

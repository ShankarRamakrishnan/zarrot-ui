<template>
  <div class="content-area">
    <div class="wrapper">
      <div class="filter-section"></div>
      <div class="lists">
        <ul>
          <li v-for="offer in offers" v-bind:key="offer.id">
            <div class="card-item">
              <div class="card-item-wrapper">
                <div class="header">
                  <img v-bind:src="offer.imageUrl" class="thumbnail-img">
                  <div class="restaurant">
                    <div class="name">{{offer.name}}</div>
                    <div class="location">Kandanchavadi Perungudi, OMR Chennai</div>
                  </div>
                </div>
                <div class="details">
                  <div class="label">Cuisine:</div>
                  <div class="description">{{offer.cuisines.join(',')}}</div>
                  <div class="label">Cost for one person:</div>
                  <div class="description">1000</div>
                  <div class="label">Hours:</div>
                  <div class="description">12pm - 10pm</div>
                </div>
                <div class="action-bar">
                  <div class="action-item">Call</div>
                  <div class="action-item active" v-on:click="addToCart($event, offer.id)">Order Now</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="suggestions"></div>
    </div>
  </div>
</template>

<script>
import offerService from '../services/offerService'

var off = {}
offerService.then(offerData => {
  off = offerData.restaurants
})

export default {
  data () {
    return {
      offers: off
    }
  },
  methods: {
    addToCart (event, offerId) {
      console.log('sdfasdf', offerId)
    }
  }
}
</script>

<style>
.wrapper {
  padding-left: 10px;
  padding-right: 10px;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  max-width: 1160px;
}

.filter-section,
.suggestions {
  position: relative;
  background: #fff;
  -webkit-box-shadow: none;
  box-shadow: none;
  margin: 1rem 0.5em;
  border-radius: 0.28571429rem;
  border: 1px solid #e7e7e7;
  float: left;
  width: 21%;
  min-height: 800px;
}
.lists {
  position: relative;
  background: #f3f3f3;
  -webkit-box-shadow: none;
  box-shadow: none;
  margin: 1rem 0;

  border-radius: 0.28571429rem;
  border: 1px solid #e7e7e7;
  float: left;
  width: 51%;
  min-height: 800px;
}
.lists li {
  padding: 1em;
  background: #fff;
  margin-bottom: 20px;
  border: solid thin #dedede;
}
.lists ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.card-item {
  display: inline-block;
  width: 100%;
}
.thumbnail-img {
  width: 200px;
  height: 150px;
  float: left;
}
.restaurant {
  float: left;
  width: calc(100% - 200px);
  box-sizing: border-box;
}
.header {
  display: inline-block;
  width: 100%;
  padding-bottom: 15px;
  border-bottom: solid thin #dcdcdc;
}
.thumbnail-img {
  width: 200px;
  height: 150px;
  float: left;
}
.restaurant {
  float: left;
  width: calc(100% - 200px);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* margin: 0 2px; */
}
.restaurant .name {
  font-weight: bold;
}
.details {
  display: inline-block;
  width: 100%;
  text-align: left;
  padding: 20px 0;
  /* border-top: solid thin #dcdcdc; */
}
.label {
  float: left;
  width: 42%;
}
.description {
  float: left;
  width: 58%;
  font-weight: bold;
}
.action-bar {
  width: 100%;
  float: left;
  overflow: auto;
  margin-bottom: 20px;
}
.action-item {
  width: calc(50% - 2px);
  float: left;
  padding: 17px 0;
  border: solid thin #dcdcdc;
}
.action-item.active {
  background: green;
  color: #fff;
}
.action-item:hover {
  background: #e6e6e6;
  color: black;
  cursor: pointer;
  border: solid thin #dcdcdc;
}
.action-item.active:hover {
  background: green;
  color: #fff;
}
</style>

<template>
  <div>
  <div class="message">{{ message }}</div>
    <button class="add" v-on:click="add" > ADD NEW </button>

    <div class="list-item">
      <div class="item" :id="index" v-for="(item,index) in list" :data-id="index" v-bind:class="{ activate: index == 0 }" :key="index" focusable v-bind:data-focusable-name="itemName(index)" v-bind:data-focusable-next-focus-left="leftTarget(index)"  v-bind:data-focusable-next-focus-up="upTarget(index)">
        <img src="http://otttv.viettel.com.vn/api1/contents/pictures/57bbce48718c8a23a4a8d7fb">{{index}}

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [
        'PHIM BỘ', 'PHIM BỘ MIỄN PHÍ', 'KHU VƯỜN PHIM BỘ', 'Tiếng Anh lớp 6', 'Luyện Thi Toeic', 'YanTV'
      ],
      message: 'Hello Vue!',
      currentFocused: 0
    }
  },
  methods: {
    initializeFocus: function () {
      console.log($.caph)
      var controller = $.caph.focus.controllerProvider.getInstance()
      var nearestFocusableFinder = $.caph.focus.nearestFocusableFinderProvider.getInstance()
      controller.focus(nearestFocusableFinder.getInitial())
    },
    add: function () {
      let obj = 'test'
      this.list.push(obj)
    },
    get: function () {
      console.log($.caph.focus.controllerProvider.getInstance().getCurrentFocusItem())
    },
    itemName: function (index) {
      return `item-${index}`
    },
    leftTarget: function (index) {
      let target = `item-${index - 1}`
      return target
    },
    upTarget: function (index) {
      if (index < 8) return 'addname'
    }
  },
  mounted: function () {
    console.log('vueeeeee', $.caph)
    this.initializeFocus()
    jQuery.caph.focus.activate()
    let controller = $.caph.focus.controllerProvider.getInstance()
    controller.focus($('.item.activate'))
    $('.add').caphButton({
      onFocused: function (event, originalEvent) {
        // add the action you want in Focused
      },
      onBlurred: function (event, originalEvent) {
      // add the action you want in Blurred
      },
      focusOption: {
        name: 'addname'
      },
      toggle: true,
      onSelected: (event, originalEvent, selected) => {
        let obj = 'test'
        this.list.push(obj)
      }
    })
  }
}
</script>

<style scoped>
h1, h2 {
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
button {
  position: absolute;
  z-index: 10
}
.add.focused {
  background: red;
}
.message {
  color: white;
  font-size: 40px;
  position: relative;
}
.list-item {
  position: relative;
  margin: 20px;
}
.item {
  height: 200px;
  width: 200px;
  display: inline-block;
  margin: 10px;
}
.item.focused {
  border: 10px solid white;
}
.item img {
  width: 100%;
  height: 100%;
}
</style>

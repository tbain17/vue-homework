import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      todoItems: [
        {name: "dance", priority: "highPrio"},
        {name: "play", priority: "lowPrio"},
        {name: "eat", priority: "medPrio"}],
      newItem: ""
    },
    methods: {
      addItem: function() {
        this.todoItems.push({
          name: this.newItem,
          priority: this.priority
        });
        this.newItem = "";
        this.priority = "medPrio"
      }
    }
  })
});

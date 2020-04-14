import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      todoItems: [
        {name: "dance", priority: "highPrio", status: "incomplete"},
        {name: "play", priority: "lowPrio", status: "incomplete"},
        {name: "eat", priority: "medPrio", status: "incomplete"}],
      newItem: "",
      priority: "medPrio",
    },
    methods: {
      addItem: function() {
        this.todoItems.push({
          name: this.newItem,
          priority: this.priority,
          status: "incomplete"
        });
        this.newItem = "";
        this.priority = "medPrio";
      },
      completeItem: function(index){
        this.todoItems[index].status = 'complete';
      }
    }
  })
});

<template>
  <v-content>
    
  </v-content>
</template>

<script>


export default {
  name:'contact',
  data: () => ({
     title:"Contact Us",
  }),
    head: {
        title: function () {
            return {
                inner: 'Firefly Edtech Solutions',
                complement: this.title
            }
        }
    },
    
  components: {
    //
  },
};
</script>

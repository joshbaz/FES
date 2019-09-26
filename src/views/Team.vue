<template>
  <v-content>
    
  </v-content>
</template>

<script>
export default {
  name:'team',
  data: () => ({
     title:"OurTeam",
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

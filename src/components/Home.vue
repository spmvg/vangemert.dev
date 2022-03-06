<template>
  <div class="md my-3">
    <b-row class="my-2 py-2 mx-2" align-h="center">
        <b-col cols="12" lg="7">
            <p>{{short_description}}</p>
        </b-col>
        <b-col cols="5" lg="3">
            <img src="images/aws-certified-solutions-architect-associate.png">
        </b-col>
        <b-col cols="5">
            <img src="images/steven_van_gemert.png">
        </b-col>
    </b-row>
  </div>
</template>

<script>
import short_description from '@/components/description.js'

export default {
  data() {
    return {
      short_description: short_description
    }
  }
}
</script>

<style scoped>
.md {
  text-align: left;
  background-color: rgb(43, 43, 43);
}
img {
  width: 100%;
}
</style>
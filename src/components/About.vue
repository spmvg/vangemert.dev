<template>
  <div class="md">
    <b-row class="px-3 pt-2 mt-3">
      <b-col cols="12"><p>{{short_description}}</p></b-col>
    </b-row>

    <b-row class="px-3">
      <b-col cols="12"><h2>
      Work
      </h2></b-col>
    </b-row>

    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>Data Scientist - NWWI</strong>
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>Feb. 2021 -<br> now</i></p></b-col>
    </b-row>
    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>Customer Engineer - Energyworx B.V.</strong><br>
          <ul>
            <li>Became a key player in the integration of a big customer</li>
            <li>Developed features and bugfixes in Python</li>
            <li>Became a sparring partner for other developers, for example in code reviews</li>
            <li>Designed and implemented platform monitoring using several cloud components</li>
            <li>Owned the release process (git workflows)</li>
          </ul>
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>Apr. 2019 -<br> Jan. 2021</i></p></b-col>
    </b-row>
    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>Intern (MSc) - Merck KGaA</strong><br>
          Machine learning research project
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>Dec. 2018 -<br> Mar. 2019</i></p></b-col>
    </b-row>
    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>Business Intelligence (part-time) - Delft Circuits B.V.</strong><br>
          Developed a tool for market research in cryogenic circuit technology
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>Jun. 2017 -<br> Feb. 2018</i></p></b-col>
    </b-row>
    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>Research assistant (part-time) - Disdrometrics B.V.</strong><br>
          Rainfall sensor data analysis in Python and MATLAB
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>Feb. 2015 -<br> Jul. 2017</i></p></b-col>
    </b-row>

    <b-row class="px-3">
      <b-col cols="12"><h2>
      Education
      </h2></b-col>
    </b-row>

    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>MSc Engineering Physics - Delft University of Technology</strong><br>
          Thesis: Towards adiabatic spin transfer - analog simulation in gate defined quantum dots
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>2017 - 2019</i></p></b-col>
    </b-row>
    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>BSc Engineering Physics - Delft University of Technology</strong><br>
          Minor: mathematical finance<br>
          Extracurricular: Honours programme
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>2013 - 2017</i></p></b-col>
    </b-row>
    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>Stedelijk Gymnasium Johan van Oldenbarnevelt</strong><br>
          Extracurricular: Junior College Utrecht 2011 - 2013
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>2007 - 2013</i></p></b-col>
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

.blogpost-date {
  text-align: right;
  white-space: nowrap;
  font-family: "Lora", serif;
}

</style>
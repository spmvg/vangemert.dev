<template>
  <div class="md">
    <b-row class="px-3 pt-2 mt-3">
      <b-col cols="7" lg="8"><p>{{short_description}}</p></b-col>
      <b-col cols="5" lg="4">
        <img src="images/aws-certified-solutions-architect.png">
      </b-col>
    </b-row>

    <b-row class="px-3">
      <b-col cols="12"><h2>
      Work
      </h2></b-col>
    </b-row>

    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>Chapter Lead Python - ABN AMRO Clearing Bank N.V.</strong>
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>Feb. 2023 -<br> now</i></p></b-col>
    </b-row>
    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>Python Developer - ABN AMRO Clearing Bank N.V.</strong><br>
          ABN AMRO Clearing Bank N.V. is a global clearing bank.<br>
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>Feb. 2022 -<br> Jan. 2023</i></p></b-col>
    </b-row>
    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>Data Scientist - NWWI</strong><br>
          NWWI is a validation institute for property valuation.<br>
          <ul>
            <li>Increased efficiency across the organisation by developing machine learning pipelines in Python</li>
            <li>Performed analyses and built dashboards for management</li>
            <li>Integrated CI/CD best practices</li>
          </ul>
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>Feb. 2021 -<br> Jan. 2022</i></p></b-col>
    </b-row>
    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>Customer Engineer - Energyworx B.V.</strong><br>
          Energyworx is a cloud-based energy data platform.<br>
          <ul>
            <li>Solved critical issues before and after the go-live of a major electric utility in Python</li>
            <li>Reduced incident response time by implementing monitoring on Google Cloud Platform</li>
            <li>Reduced number of issues after releases by improving git workflows</li>
            <li>Became a sparring partner for other developers, for example in code reviews</li>
          </ul>
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>Apr. 2019 -<br> Jan. 2021</i></p></b-col>
    </b-row>
    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>Intern (MSc) - Merck KGaA</strong><br>
          Merck KGaA is a multinational science and technology company.<br>
          <ul><li>Internship: developed reinforcement learning method in Python.</li></ul>
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>Dec. 2018 -<br> Mar. 2019</i></p></b-col>
    </b-row>
    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>Business Intelligence (part-time) - Delft Circuits B.V.</strong><br>
          Delft Circuits produces quantum computing hardware.<br>
          <ul><li>Made a tool that mines scientific publications for market research in cryogenic circuit technology using Python.</li></ul>
        </p></li></ul>
      </b-col>
      <b-col class="blogpost-date mr-auto"><p><i>Jun. 2017 -<br> Feb. 2018</i></p></b-col>
    </b-row>
    <b-row class="px-3">
      <b-col cols="9">
        <ul><li><p>
          <strong>Research assistant (part-time) - Disdrometrics B.V.</strong><br>
          Disdrometrics produces acoustical rain sensors.<br>
          <ul>
            <li>Rainfall sensor data analysis in Python and MATLAB.</li>
            <li>Designing and maintaining calibration setup prototypes for acoustical rain sensors.</li>
          </ul>
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

img {
  width: 100%;
}
</style>
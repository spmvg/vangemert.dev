<template>
  <div class="md">
    <b-row class="px-3 py-2 my-3">
      <b-col class="blogpost-name ml-auto"><p><i>{{this.authors}}</i></p></b-col>
      <b-col class="blogpost-date mr-auto"><p>{{this.date}}</p></b-col>
      <b-col cols="12">
        <span v-html="post"></span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

function display_post() {
  const filename = this.$route.params.filename
  const filename_regex = /^[a-zA-Z0-9-]+$/
  const matches = filename_regex.exec(filename)
  if (!matches) { this.$router.replace('/404') }

  var md = new MarkdownIt()
  fetch('./md/'+filename+'.txt')
    .then(response => response.text())
    .then(text => {
      var date_line = text.substring(0, text.indexOf("\n") + 1);
      if (!date_line.startsWith("Date: ")) {
        this.$router.replace('/404');
      }
      this.date = date_line.substring(6, date_line.indexOf(","));
      this.authors = date_line.substring(date_line.indexOf(",") + 1);
      this.post = md.render(text.substring(text.indexOf("\n") + 1));
    })
}

export default {
  data() {
    return {
      post: 'Loading...',
      date: '',
      authors: ''
    }
  },
  updated: display_post,
  mounted: display_post  // TODO updating does not seem to work
}
</script>

<style scoped>
.md {
  text-align: left;
  background-color: rgb(43, 43, 43);
}

.blogpost-name {
  text-align: left;
  white-space: nowrap;
  font-family: "Lora", serif;
}

.blogpost-date {
  text-align: right;
  white-space: nowrap;
  font-family: "Lora", serif;
}

span >>> img {
  margin: auto;
  display: block;
  max-width: 100%;
}

span >>> p {
  font-family: "Lora", serif;
}
span >>> li {
  font-family: "Lora", serif;
}
span >>> h1 {
  font-family: "Open Sans", sans-serif;
}
span >>> h2 {
  font-family: "Open Sans", sans-serif;
}
span >>> h3 {
  font-family: "Open Sans", sans-serif;
}
span >>> h4 {
  font-family: "Open Sans", sans-serif;
}
span >>> h5 {
  font-family: "Open Sans", sans-serif;
}
span >>> h6 {
  font-family: "Open Sans", sans-serif;
}
span >>> em {
  font-family: "Lora", serif;
}
span >>> code {
  color: #fff;
  background-color: rgb(56, 58, 60);
}
span >>> pre {
  background-color: rgb(56, 58, 60);
}

span >>> th {
  font-family: "Open Sans", sans-serif;
  padding: 5px;
}
span >>> td {
  color: #fff;
  padding: 5px;
}
span >>> table {
  background-color: rgb(56, 58, 60);
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
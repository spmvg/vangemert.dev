<template>
  <div class="blogposts my-3">
    <router-link :to="'/blog/' + post.link" tag="div" v-for="post in posts" :key="post.link">
      <b-row class="blogpost my-2 py-2">
        <b-col cols="10"><h3>{{post.name}}</h3></b-col>
        <b-col class="blogpost-date mr-auto">{{post.date}}</b-col>
        <b-col cols="12"><p><i>{{post.description}}</i></p></b-col>
      </b-row>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          name: 'The big list of unelaborate statements',
          description: 'A list of unelaborate statements about building software.',
          link: 'the-big-list-of-unelaborate-statements',
          date: '17 Mar. 2024'
        },
        {
          name: 'When cheap energy turns green',
          description: 'Does cheap power mean green power?',
          link: 'when-cheap-energy-turns-green',
          date: '2 Dec. 2023'
        },
        {
          name: 'Robotaxis and AI-hardness',
          description: 'In AI, some problems are harder than others.',
          link: 'robotaxis-and-AI-hardness',
          date: '16 Jan. 2022'
        },
        {
          name: 'Adding confidence intervals to maximum likelihood estimates using sympy',
          description: 'Not pretty, but interesting.',
          link: 'mle-ci',
          date: '2 Jun. 2021'
        },
        {
          name: 'Thinking in orders of magnitude',
          description: 'Where physicists have an edge over computer scientists.',
          link: 'orders-of-magnitude',
          date: '23 Jan. 2021'
        },
        {
          name: 'How, why and the smelly washing machine',
          description: 'Why self-documenting code does not exist.',
          link: 'how-why-and-the-smelly-washing-machine',
          date: '2 Nov. 2020'
        },
        {
          name: 'Datetimes and DST',
          description: 'Not as simple as it looks, but not rocket science either.',
          link: 'datetimes-and-dst',
          date: '17 Oct. 2020'
        },
        {
          name: 'The number of bugs grows exponentially',
          description: 'How the number of bugs can grow exponentially and what can be done about it.',
          link: 'number-of-bugs-grows-exponentially',
          date: '8 Sep. 2020'
        },
        {
          name: 'Strings, bytes and unicode',
          description: 'There tends to be confusion about strings, bytes and unicode in Python 2 vs. 3. This article explains that it is not as confusing as it might seem.',
          link: 'strings-bytes-unicode',
          date: '22 Apr. 2020'
        },
        {
          name: 'Intro to git',
          description: 'Introduction to git, concluding with intermediate examples.',
          link: 'intro-to-git',
          date: '13 Mar. 2019'
        }
      ]
    }
  }
}
</script>

<style scoped>
.blogposts {
  text-align: left;
}
.blogpost {
  background-color: rgb(43, 43, 43);
}
.blogpost:hover {
  background-color: rgb(30, 30, 30);
  cursor: pointer;
}
.blogpost-date {
  text-align: right;
  white-space: nowrap;
}
</style>
<template>
  <div class="projects my-3">
    <div v-for="project in projects" @click="go_to_link(project.link)">
      <b-row class="project my-2 py-2">
        <b-col cols="10"><h3>{{project.name}}</h3></b-col>
        <b-col cols="12"><p><i>{{project.description}}</i></p></b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          {
            name: 'nfoursid',
            description: 'Python implementation of N4SID, Kalman filtering and state-space models',
            link: 'https://github.com/spmvg/nfoursid',
          },
          {
            name: 'evt',
            description: 'Estimators and analysis for extreme value theory (EVT) in Python',
            link: 'https://github.com/spmvg/evt',
          },
          {
            name: 'csvkanban.com',
            description: 'Turn CSV files into a simple kanban board',
            link: 'https://www.csvkanban.com/',
          },
          {
            name: 'backlooper.app',
            description: 'Looper that allows you to decide to loop a few bars after you played them',
            link: 'https://www.backlooper.app/',
          },
          {
            name: 'asdfuzz',
            description: 'Web application fuzzer that automatically detects and fuzzes data in HTTP requests',
            link: 'https://github.com/spmvg/asdfuzz',
          },
        ]
      }
    },
    methods: {
      go_to_link(link) {
        window.open(link, '_blank')
      }
    }
  }
</script>

<style scoped>
.projects {
  text-align: left;
}
.project {
  background-color: rgb(43, 43, 43);
}
.project:hover {
  background-color: rgb(30, 30, 30);
  cursor: pointer;
}
.project-date {
  text-align: right;
  white-space: nowrap;
}
</style>
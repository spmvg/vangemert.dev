<template>
    <div>
      <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-navbar-brand to="/" class="ml-5">vangemert.dev</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav class="mr-5">
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" class="mx-1">HOME</b-nav-item>
            <b-nav-item to="/blog" class="mx-1">BLOG</b-nav-item>
            <b-nav-item href="https://pypi.org/project/evt/" class="mx-1" target="_blank">EVT</b-nav-item>
            <b-nav-item href="https://pypi.org/project/nfoursid/" class="mx-1" target="_blank">NFOURSID</b-nav-item>
            <b-nav-item to="/about" class="mx-1">ABOUT</b-nav-item>
            <b-nav-item href="https://github.com/spmvg" class="mx-1" target="_blank">GITHUB</b-nav-item>
            <b-nav-item href="https://www.linkedin.com/in/spmvangemert/" class="mx-1" target="_blank">LINKEDIN</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>
<style scoped>

.navbar-brand {
  font-family: "Courier New", Courier, monospace;
}

.navbar.navbar-dark.bg-dark {
  background-color: rgb(43, 43, 43)!important;
  font-family: "Open Sans", sans-serif;
}

.router-link-exact-active {
  color: #eee!important
}
</style>


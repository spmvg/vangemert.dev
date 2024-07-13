import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/blog/Blog'
import BlogPost from '@/blog/BlogPost'
import ProjectsPage from '@/components/ProjectsPage'
import About from '@/components/About'
import NotFound from '@/components/NotFound'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:filename',
      name: 'Blogpost',
      component: BlogPost
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsPage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})

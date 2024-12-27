<template>
  <nav class="navbar is-spaced is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- <a class="navbar-item" href="#">
        <img src="../../assets/KS-skillet-black-128x128.png"
             alt="Faiq Allam | A Code Junkie, and Full Stack Web Developer">
      </a> -->

      <div id="navbarBurger" class="navbar-burger burger"
           data-target="navbarMenu"
           @click="navToggle = !navToggle"
           :class="{'is-active' : navToggle}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarMenu" class="navbar-menu" :class="{'is-active' : navToggle}">
      <div class="navbar-end">
        <a href="#about" class="navbar-link is-arrowless">
          About
        </a>
        <a href="#projects" class="navbar-link is-arrowless">
          Projects
        </a>
        <a href="./resume-en.pdf" target="_blank" class="navbar-link is-arrowless">
          Résumé 
          <font-awesome-icon :icon="['fas', 'external-link-alt']" class="ml-sm" />
        </a>
        <div class="navbar-item has-text-centered">
          <router-link class="button is-rounded is-black is-outlined" to="/contact">
            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-sm fa-lg"></font-awesome-icon>
            <b>Get in touch</b>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

  export default {
    name: 'Header',
    data() {
      return {
        navToggle: false,
      }
    }
  }
</script>

<style scoped>
  .navbar {
    height: 10rem;
  }

  .navbar-burger {
    margin-top: 2.5rem;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -ms-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }

  .navbar-item img {
    max-height: 8rem;
  }

  .navbar-menu a.navbar-item:hover,
  .navbar-menu a.navbar-link:hover {
    background-color: initial;
    color: #0A0A0A;
  }

  @media (max-width: 1024px) {
    .navbar-menu.is-active {
      background-color: #f6f6f6 !important;
      border-top: 0;
      border-bottom: 1px;
      border-left: 0px;
      border-right: 0px;
      border-style: solid;
      border-bottom-right-radius: 2rem;
      border-bottom-left-radius: 2rem;
      border-color: #ddd;
      padding-left: .5rem !important;
      padding-right: .5rem !important;
      padding-bottom: 1rem !important;
    }

    .navbar-burger.is-active {
      background-color: #f6f6f6 !important;
    }

    .navbar-menu.is-active a.navbar-item:hover,
    .navbar-menu.is-active a.navbar-link:hover {
      background-color: initial;
      color: #0A0A0A;
    }
  }
</style>

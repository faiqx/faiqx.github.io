<template>
  <section id="greetings" class="hero">
    <div class="hero-body pl-lg pr-lg" style="padding-top: 0">
      <div class="container has-text-centered">
        <b-tooltip label="Faiq Allam" position="is-right" type="is-dark" always>
          <figure class="image" style="margin: auto">
            <img class="is-rounded" src="../assets/4x4.png" alt="Faiq Allam"/>
          </figure>
        </b-tooltip>
        <h1 class="title is-2 has-text-centered has-text-black mb-lg mt-lg">
          A Seasoned Software Engineer
        </h1>
        <h2 class="subtitle is-4 has-text-centered titillium">
          I innovate and solve problems through
          <b-tooltip
                label="Codes"
                type="is-dark"
                position="is-bottom"
                always>
            <font-awesome-icon
                  :icon="['fas', 'code']"
                  class="has-text-primary"
                  data-tooltip="Codes">
            </font-awesome-icon>
            ,
          </b-tooltip>
          on the
          <b-tooltip
                label="Web"
                type="is-dark"
                position="is-bottom"
                always>
            <font-awesome-icon
                  :icon="['fas', 'globe']"
                  class="has-text-grey">
            </font-awesome-icon>
            ,
          </b-tooltip>
          and I
          <b-tooltip
                label="Love"
                type="is-dark"
                position="is-bottom"
                always>
            <font-awesome-icon
                  :icon="['fas', 'heart']"
                  class="has-text-danger">
            </font-awesome-icon>
          </b-tooltip>
          it!
        </h2>
      </div>
    </div>
    <div class="has-text-centered mt-xl">
      <img src="../assets/programmer.png" style="margin-bottom: -.5rem;" alt="Workstation"/>
    </div>
  </section>
</template>

<script>
  import BTooltip from "buefy/src/components/tooltip/Tooltip";

  export default {
    name: 'greetings',
    components: {
      BTooltip
    }
  }
</script>

<style scoped>
  figure {
    width: 175px;
  }

  figure img.is-rounded {
    border: 5px solid #0A0A0A !important;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 22px !important;
    }

    h2 {
      font-size: 18px !important;
    }
  }
</style>

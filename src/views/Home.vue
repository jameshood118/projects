<template>
  <div class="container is-fluid">
    <section class="hero is-hidden-touch">
      <div class="hero-body">
        <img src="@/assets/gallerybanner.png" />
      </div>
    </section>
    <section class="section">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title title is-6">{{ title }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <p>
              This site will serve as a thing. to show off some stuff here and
              there. Why am I doing this? because lets be honest, i started
              setting this site up at 4:15 pm , saturday july 4th 2020. by 4:58
              pm after watching the Back to the Future Trilogy i had a skeleton
              up and running. very minimal yes, but i am a front end developer.
              I work best with a UX/UI developer. I make their awesome designs
              work, they make me look good, i make them look good.
            </p>
            <p>
              I am an outside the box kind of thinker. I am not set in my ways,
              nor have I had 'the rules of the internet' engraved in my head. If
              something doesn't work, I find another solution, learn it, and
              apply it. My methods have always been 'work on it until it works
              without issues'. I love getting down deep into code and figuring
              out the logic.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns is-multiline">
        <div
          class="column is-12"
          v-for="items in $store.state.home.blog"
          :key="items.id"
        >
          <div class="card">
            <header class="card-header">
              <p class="card-header-title title is-6">
                {{ items.title }} -
                <time :datetime="items.date">{{ items.date }}</time>
              </p>
            </header>
            <div class="card-content">
              <div class="content" v-html="items.message"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Welcome to my Portfolio'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  .hero-body {
    text-align: center;
  }
}
</style>

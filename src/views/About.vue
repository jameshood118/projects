<template>
  <div class="container is-fluid">
    <breadcrumb />
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="card">
          <div class="card-content">
            <p class="title is-6">About</p>
          </div>
          <div class="card-content">
            <p>
              My name is James Hood, I am a Front end Web Developer. I work with
              a wide array of tools. My languages include: VueJS, Javascript
              (ECMAScript 5/6), Jquery, HTML(5), CSS(3). I have worked as a
              graphic designer and as a web developer, and in my own personal
              freelance work I have often been both at the same time. In 2015 I
              acquired new skills in my briefcase, these include: Shipping and
              Logistics, Ecommerce data entry, Amazon Vendor Central compliance,
              EDI data exchange as well as Quickbooks online. I have become more
              than just a Web Developer, and much more than just a face in the
              crowd.
            </p>
            <p>
              These days its refreshing to find someone who can do multiple
              things, who can learn multiple skills, and run with that. The days
              of 1 skill per 1 employee are over. That just doesnt work these
              days.
            </p>
            <p>Here are some facts about me:</p>
          </div>
        </div>
      </div>
      <div
        class="column is-4"
        v-for="(bio, index) in $store.state.about"
        :key="index"
      >
        <div class="card">
          <div class="card-content">
            <p class="title is-6 is-capitalized">{{ index }}</p>
          </div>
          <div class="card-content">
            <ul v-for="list in bio" :key="list.item">
              <li v-if="index != 'writings'">{{ list.item }}</li>
              <li v-else v-html="list.item"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped></style>

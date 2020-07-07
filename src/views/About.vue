<template>
  <div>
    <breadcrumb />
    <div class="columns is-multiline is-mobile">
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
      <div class="column is-4">
        <div class="card">
          <div class="card-content">
            <p class="title is-6">Favorite things</p>
          </div>
          <div class="card-content">
            <ul v-for="list in generalList" :key="list.item">
              <li>{{ list.item }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card">
          <div class="card-content">
            <p class="title is-6">Favorite games</p>
          </div>
          <div class="card-content">
            <ul v-for="list in gamesList" :key="list.item">
              <li>{{ list.item }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card">
          <div class="card-content">
            <p class="title is-6">Favorite Comic Book Characters</p>
          </div>
          <div class="card-content">
            <ul v-for="list in heroList" :key="list.item">
              <li>{{ list.item }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card">
          <div class="card-content">
            <p class="title is-6">Favorite TV Shows</p>
          </div>
          <div class="card-content">
            <ul v-for="list in tvList" :key="list.item">
              <li>{{ list.item }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card">
          <div class="card-content">
            <p class="title is-6">Various Writings</p>
          </div>
          <div class="card-content">
            <ul v-for="list in writingList" :key="list.item">
              <li v-html="list.item"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      generalList: [
        { item: "Tabletop RPG's" },
        { item: "MMORPG's" },
        { item: 'Reading various books' },
        { item: 'Reading random wikipedia entries' },
        { item: 'Listening to music (all sorts)' },
        { item: 'Playing Guitar' },
        { item: 'Video Games' },
        { item: 'Movies with my wife!' },
        { item: 'Card games with friends' }
      ],
      gamesList: [
        { item: 'Animal Crossing: New Horizon' },
        { item: 'Dauntless' },
        { item: 'Ticket to Ride (boardgame)' },
        { item: 'Munchkin' },
        { item: 'Settlers of Catan (boardgame)' },
        { item: '101 Ways to Die (PS4)' }
      ],
      tvList: [
        { item: 'Archer' },
        { item: 'Rick & Morty' },
        { item: 'The IT Crowd' },
        { item: 'Big Bang Theory' },
        { item: 'Heroes' },
        { item: 'Arrested Development' },
        { item: 'Community' },
        { item: 'Good Eats' },
        { item: 'Modern Marvels' },
        { item: 'How its Made' },
        { item: 'Lost' },
        { item: 'Iron Chef (both Original and American)' },
        { item: 'House, MD' },
        { item: 'Scrubs' }
      ],
      heroList: [
        { item: 'Deadpool' },
        { item: 'Wolverine' },
        { item: 'Nightcrawler' },
        { item: 'Batman' },
        { item: 'Gambit' }
      ],
      writingList: [
        {
          item:
            "<a href='https://drive.google.com/file/d/0B2lCjTRAVBHYa1loamZHc29XQ1E/edit?usp=sharing' target='_blank'>Poems/Songs</a>"
        },
        {
          item:
            "<a href='https://drive.google.com/file/d/0B2lCjTRAVBHYd2JKb2VBWkNYLWc/edit?usp=sharing' target='_blank'>Heroes Unlimited: Invasion Denied</a>"
        },
        {
          item:
            "<a href='https://drive.google.com/file/d/0B2lCjTRAVBHYa1RmM2VwZ0V5UDQ/edit?usp=sharing' target='_blank'>Adventure</a>"
        },
        {
          item:
            "<a href='https://drive.google.com/file/d/0B2lCjTRAVBHYcG51MXUwdFFUM3M/edit?usp=sharing' target='_blank'>Vigiliance</a>"
        },
        {
          item:
            "<a href='https://drive.google.com/file/d/0B2lCjTRAVBHYSjZTaHc1aHdnaVU/edit?usp=sharing' target='_blank'>Battle of the Wyrm</a>"
        },
        {
          item:
            "<a href='https://drive.google.com/file/d/0B2lCjTRAVBHYRmdlYXdaQ0pIUDA/edit?usp=sharing' target='_blank'>Battle of the Wyrm History</a>"
        },
        {
          item:
            "<a href='https://drive.google.com/file/d/0B2lCjTRAVBHYcENmT3lueTNLdVk/edit?usp=sharing' target='_blank'>Heroes Unlimited: 2nd Game</a>"
        },
        {
          item:
            "<a href='https://drive.google.com/file/d/0B2lCjTRAVBHYeGRuV3FnZ01mN2c/edit?usp=sharing' target='_blank'>Mage The Acension Chronicle</a>"
        },
        {
          item:
            "<a href='https://drive.google.com/file/d/0B2lCjTRAVBHYUFVobUNBRTVJaEE/edit?usp=sharing' target='_blank'>Feng Shui Game</a>"
        },
        {
          item:
            "<a href='https://drive.google.com/file/d/0B2lCjTRAVBHYZzUtb0FWaGtyMXM/edit?usp=sharing' target='_blank'>Waterlogged</a>"
        },
        {
          item:
            "<a href='https://drive.google.com/file/d/0B2lCjTRAVBHYZzUtb0FWaGtyMXM/edit?usp=sharing' target='_blank'>Nuked</a>"
        }
      ]
    }
  }
}
</script>

<style scoped></style>

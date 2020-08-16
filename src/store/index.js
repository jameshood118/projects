import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    about: {
      things: [
        { item: 'Tabletop RPGs' },
        { item: 'MMORPGs' },
        { item: 'Reading various books' },
        { item: 'Reading random wikipedia entries' },
        { item: 'Listening to music (all sorts)' },
        { item: 'Playing Guitar' },
        { item: 'Video Games' },
        { item: 'Movies with my wife!' },
        { item: 'Card games with friends' }
      ],
      games: [
        { item: 'Animal Crossing: New Horizon' },
        { item: 'Dauntless' },
        { item: 'Ticket to Ride (boardgame)' },
        { item: 'Munchkin' },
        { item: 'Settlers of Catan (boardgame)' },
        { item: '101 Ways to Die (PS4)' }
      ],
      tv: [
        { item: 'Doctor Who' },
        { item: 'Archer' },
        { item: 'Rick & Morty' },
        { item: 'The IT Crowd' },
        { item: 'Arrested Development' },
        { item: 'Good Eats' },
        { item: 'Modern Marvels' },
        { item: 'How its Made' },
        { item: 'Lost' },
        { item: 'Iron Chef (both Original and American)' },
        { item: 'House, MD' },
        { item: 'Scrubs' }
      ],
      heroes: [
        { item: 'Deadpool' },
        { item: 'Wolverine' },
        { item: 'Nightcrawler' },
        { item: 'Batman' },
        { item: 'Gambit' }
      ],
      writings: [
        {
          item:
            '<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYa1loamZHc29XQ1E/edit?usp=sharing" target="_blank">Poems/Songs</a>'
        },
        {
          item:
            '<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYd2JKb2VBWkNYLWc/edit?usp=sharing" target="_blank">Heroes Unlimited: Invasion Denied</a>'
        },
        {
          item:
            '<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYa1RmM2VwZ0V5UDQ/edit?usp=sharing" target="_blank">Adventure</a>'
        },
        {
          item:
            '<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYcG51MXUwdFFUM3M/edit?usp=sharing" target="_blank">Vigiliance</a>'
        },
        {
          item:
            '<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYSjZTaHc1aHdnaVU/edit?usp=sharing" target="_blank">Battle of the Wyrm</a>'
        },
        {
          item:
            '<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYRmdlYXdaQ0pIUDA/edit?usp=sharing" target="_blank">Battle of the Wyrm History</a>'
        },
        {
          item:
            '<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYcENmT3lueTNLdVk/edit?usp=sharing" target="_blank">Heroes Unlimited: 2nd Game</a>'
        },
        {
          item:
            '<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYeGRuV3FnZ01mN2c/edit?usp=sharing" target="_blank">Mage The Acension Chronicle</a>'
        },
        {
          item:
            '<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYUFVobUNBRTVJaEE/edit?usp=sharing" target="_blank">Feng Shui Game</a>'
        },
        {
          item:
            '<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYZzUtb0FWaGtyMXM/edit?usp=sharing" target="_blank">Waterlogged</a>'
        },
        {
          item:
            '<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYZzUtb0FWaGtyMXM/edit?usp=sharing" target="_blank">Nuked</a>'
        }
      ]
    },
    home: {
      blog: [
        {
          id: 0,
          title: 'Updates',
          date: '7/12/2020',
          message:
            'I set up a new repo on github so i can tinker with gatsbyjs. Gotta say, im very impressed, it seems to solve some of the problems i see with VueJS. I am impressed with its builtin graphql capabilities, and i cant wait to see how it would fair hooked up to some real data!'
        },
        {
          id: 1,
          title: 'Updates',
          date: '7/04/2020',
          message:
            'Might use this to show off some components ive written, might delete! hah! This project uses vue 2.6.11 (@vue/cli), vue router 3.2.0, and my current favorite css framework Bulma 0.9.0. Linting with eslint, with vs code as my editor.'
        }
      ]
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})

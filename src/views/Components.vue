<template>
  <div class="container is-fluid">
    <breadcrumb />
    <section class="section">
      <div class="columns is-multiline">
        <div class="column is-full">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Dynamic Modal (Bulma)</p>
            </header>
            <div class="card-content">
              <p>
                How many times in your project have you written modal dialog? In
                my experience, way too many times, and thats what components are
                meant to replace. to give you reusable thing. In this case, all
                modals are probably going to have a similar structure in a
                project. Therefore it makes absolute sense to make a reusable
                modal that will allow other developers to focus on writing new
                areas and not re-writing the same modal over and over again.
              </p>
              <div class="buttons">
                <button
                  class="button is-primary"
                  @click="
                    handleModalClick('Primary', 'Primary message', 'is-primary')
                  "
                >
                  Open Main Modal
                </button>

                <button
                  class="button is-danger"
                  @click="
                    handleModalClick(
                      'Danger',
                      'DANGER WILL ROBINSON',
                      'is-danger'
                    )
                  "
                >
                  Open Danger Modal
                </button>
                <button
                  class="button is-warning"
                  @click="
                    handleModalClick('Warning', 'Warning Message', 'is-warning')
                  "
                >
                  Open Warning Modal
                </button>
                <button
                  class="button is-info"
                  @click="handleModalClick('Info', 'Info Message', 'is-info')"
                >
                  Open Info Modal
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-full">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Loading State (Bulma, buefy and fontawesome)
              </p>
            </header>
            <div class="card-content">
              <button
                v-if="isLoading == true"
                class="button is-primary mb-3"
                @click="simulateLoading('loading', false)"
              >
                Simulate Loading Done
              </button>
              <button
                v-else
                class="button is-primary mb-3"
                @click="simulateLoading('loading', true)"
              >
                Simulate Loading Start
              </button>
              <div class="is-relative" style="height: 250px">
                <p>
                  This is a reuseable wrapper for buefy's b-loading component
                  that gives you more uniform control over it. This uses bulma,
                  fontawesome and buefy.
                </p>
                <loading-state :isLoading="isLoading" :isFullPage="false" />
              </div>
            </div>
          </div>
        </div>
        <div class="column is-full">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Empty State + Loading State component (bulma and buefy with
                fontawesome)
              </p>
            </header>
            <div class="card-content">
              <p>
                This component takes in data and a searchQuery. data can come
                from whatever, searchQuery variable is up to you. This does use
                font awesome for icons. But you should too.
              </p>
              <div class="content">
                <p>Empty State Default with no data</p>
                <button
                  v-if="emptyStateLoading == true"
                  class="button is-primary mb-3"
                  @click="simulateLoading('empty', false)"
                >
                  Simulate Loading Done
                </button>
                <button
                  v-else
                  class="button is-primary mb-3"
                  @click="simulateLoading('empty', true)"
                >
                  Simulate Loading Start
                </button>
                <empty-state
                  :data="emptyStateData"
                  :isLoading="emptyStateLoading"
                  key="emptyStateWithoutData"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="column is-full">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Breadcrumb (Bulma and fontawesome)
              </p>
            </header>
            <div class="card-content">
              <p>
                I created a breadcrumb component that would use values off
                vue-router to show information (and fontawesome icons, with a
                back button using router history). The idea being uniformity and
                clarity, additionally this method lets you focus on the values
                from the router. This component is currently used on this site.
                This can take in a :currentPage property as well, in case you
                want to use your breadcrumbs as a unifom path and have the page
                they are on be the current page (perhaps you have a complex tree
                structure on your site
              </p>
              <breadcrumb
                :currentPage="
                  'Blog #1345 Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb'
                "
              />
            </div>
          </div>
        </div>
        <div class="column is-full">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Accordion (fontawesome)</p>
            </header>
            <div class="card-content">
              <p>
                I've created some accordions, because of course i did lol.
              </p>
              <section class="hero">
                <div class="hero-body">
                  <div class="container">
                    <div class="columns">
                      <div class="column is-full">
                        <p class="title is-size-6 has-text-black">
                          Frequently Asked Questions
                        </p>
                        <accordion v-for="faq in faq" v-bind:key="faq.question">
                          <div slot="header">{{ faq.question }}</div>
                          {{ faq.answer }}
                        </accordion>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>

    <dynamic-modal :open="modalOpen" @close="handleModalClose" v-if="modalOpen">
      <template slot="modal-title">{{ modalTitle }} Modal</template>
      <template slot="modal-body">
        <span :class="'tag is-round ' + modalTagClass">
          {{ modalMessage }}
        </span>
      </template>
      <template slot="modal-footer-buttons">
        <p class="control">
          <button
            class="button"
            :class="modalButtonClass"
            @click="handleModalClose"
          >
            Call to action
          </button>
        </p>
      </template>
    </dynamic-modal>
  </div>
</template>

<script>
export default {
  name: 'components',
  data() {
    return {
      modalOpen: false,
      modalMessage: '',
      modalTagClass: 'is-primary',
      modalButtonClass: 'is-primary',
      modalTitle: '',
      emptyStateData: [],
      emptyStateLoading: true,
      isLoading: true,
      faq: [
        {
          question: 'What is the airspeed velocity of an unladen swallow?',
          answer: 'what do you mean, african or european?'
        }
      ]
    }
  },
  methods: {
    simulateLoading(component, action) {
      if (component == 'empty') {
        this.emptyStateLoading = action
      } else {
        this.isLoading = action
      }
    },
    handleModalClick(title, msg, tagClass) {
      this.modalOpen = true
      this.modalTitle = title
      this.modalMessage = msg
      this.modalTagClass = tagClass
      this.modalButtonClass = tagClass
    },
    handleModalClose() {
      this.modalOpen = false
      this.modalTitle = ''
      this.modalMessage = ''
      this.modalTagClass = 'is-primary'
      this.modalButtonClass = 'is-primary'
    }
  }
}
</script>

<style lang="scss" scoped></style>

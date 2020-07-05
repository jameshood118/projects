<template>
  <div>
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
                  @click="handleModalClick('Primary message', 'is-primary')"
                >
                  Open Main Modal
                </button>

                <button
                  class="button is-danger"
                  @click="handleModalClick('DANGER WILL ROBINSON', 'is-danger')"
                >
                  Open Danger Modal
                </button>
                <button
                  class="button is-warning"
                  @click="handleModalClick('Warning Message', 'is-warning')"
                >
                  Open Warning Modal
                </button>
                <button
                  class="button is-info"
                  @click="handleModalClick('Info Message', 'is-info')"
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
                Empty State + Loading State component togther
              </p>
            </header>
            <div class="card-content">
              <p>
                This component takes in data and a searchQuery. data can come
                from whatever, searchQuery variable is up to you. This does use
                font awesome for icons. But you should too.
              </p>

              <div class="tile is-ancestor">
                <div class="tile is-parent">
                  <article class="tile is-child notification is-success">
                    <div class="content">
                      <div class="content">
                        <p>Emmpty State Default with no data</p>
                        <button
                          class="button is-primary mb-3"
                          @click="simulateLoadingDone"
                        >
                          Simulate Loading Done
                        </button>
                        <empty-state
                          :data="emptyStateData"
                          :isLoading="emptyStateLoading"
                          key="emptyStateWithoutData"
                        />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <dynamic-modal :open="modalOpen" @close="handleModalClose" v-if="modalOpen">
      <template slot="modal-title">Dyanmic Modal</template>
      <template slot="modal-body">
        <span :class="'tag is-round ' + modalTagClass">
          {{ modalMessage }}
        </span>
      </template>
      <template slot="modal-footer-buttons">
        <p class="control">
          <button class="button is-primary" @click="handleModalClose">
            Save
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
      emptyStateData: [],
      emptyStateLoading: true
    }
  },
  methods: {
    simulateLoadingDone() {
      this.emptyStateLoading = false
    },
    handleModalClick(msg, tagClass) {
      this.modalOpen = true
      this.modalMessage = msg
      this.modalTagClass = tagClass
    },
    handleModalClose() {
      this.modalOpen = false
      this.modalMessage = ''
      this.modalTagClass = ''
    }
  }
}
</script>

<style lang="scss" scoped></style>

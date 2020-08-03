<template>
  <div class="container is-fluid">
    <div class="modal" :class="{ 'is-active': open }">
      <div class="modal-background" @click="close()"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name="modal-title"> </slot>
          </p>
          <button class="delete" aria-label="close" @click="close()"></button>
        </header>
        <section class="modal-card-body">
          <slot name="modal-body"></slot>
        </section>
        <footer class="modal-card-foot">
          <div class="field is-grouped">
            <slot name="modal-footer-buttons"></slot>
            <p class="control">
              <a class="button" @click="close()">Cancel</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'dynamic-modal',
	props: {
		open: {
			default: false
		}
	},
	data() {
		return {}
	},
	methods: {
		close() {
			this.$emit('close')
		}
	}
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <mod-header />
    <div>
      <mod-left-nav />
      <div>
        <slot></slot>
      </div>
    </div>
    <mod-footer />
  </div>
</template>

<script>
import modHeader from './mod-header.vue'
import modLeftNav from './mod-left-nav.vue'
import modFooter from './mod-footer.vue'

export default {
  components: { modHeader, modLeftNav, modFooter }
}
</script>

<style></style>

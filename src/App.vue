<template>
  <div id="app">
    <mod-layout v-if="is_use_mod_layout">
      <router-view />
    </mod-layout>
    <router-view v-else />
  </div>
</template>

<script>
import modLayout from '@/components/mod/mod-layout.vue'

export default {
  components: {
    modLayout
  },
  data() {
    return {
      current_path: '',
      not_use_path_list: ['/login']
    }
  },
  computed: {
    is_use_mod_layout() {
      let result = true
      this.not_use_path_list.forEach((item) => {
        if (item === this.current_path) result = false
      })
      return result
    }
  },
  watch: {
    $route(val) {
      this.current_path = val.path
    }
  }
}
</script>

<template>
  <div>
    <router-view />
    <nuxt-child name="left"/>
  </div>
</template>

<script>
export default {
  layout: 'blog'
}
</script>

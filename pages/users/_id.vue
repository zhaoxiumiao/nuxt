<template>
<div>
  <div>动态路由id</div>
</div>
</template>

<script>
export default {
  validate({params}){
    return /\d+/.test(params.id)
  }
}
</script>
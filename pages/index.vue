<template>
<div>
  <!-- <Tutorial/> -->
  中间内容
  {{test.total}}
</div>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({$api}){
    const {data} = await $api.$get('/api/mickey/product/info/count')
    console.log(data);
    return {test: data}
  },
  fetch(){

  },
  head(){

  }
}
</script>

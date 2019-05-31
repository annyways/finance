<template lang="html">
  <div :class="$style.notFound" ref="bg"></div>
</template>

<script>
export default {
}

</script>

<style lang="scss" module>
.notFound{
  width: 100%;
  height: 100%;
  background: url(../../assets/notfound.jpg) center center no-repeat;
}
</style>

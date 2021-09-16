<template>
<div class="notification__wrapper">
  <small>Этот товар добавлен в избранное</small>
</div>
</template>

<script>
export default {
  name: "Notification"
}
</script>

<style lang="scss">
.notification__wrapper {
  display: inline-block;
  opacity: 0;
  position: absolute;
  top: 3rem;
  right: 2rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px -2px 14px 1px rgba(34, 60, 80, 0.2);
  transition: .3s;
  background-color: white;
  &.active {
    opacity: 1;
  }
}
</style>
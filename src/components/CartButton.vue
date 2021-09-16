<template>
  <div class="cart-button__wrapper">
    <button class="cart-button__minus" @click="$emit('removeProduct')"></button>
    <p>{{counter}} шт</p>
    <button class="cart-button__plus" @click="$emit('addProduct')"></button>
  </div>
</template>

<script>
export default {
  name: "CartButton",
  props: ['counter']
}
</script>
<style lang="scss">
.cart-button__wrapper {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  span {
    padding: 0 1.1rem;
  }
}
.cart-button__minus, .cart-button__plus {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border: none;
  border-radius: 3px;
  width: 44px;
  height: 44px;
  background-color: $cart-bg-button;
  &:hover {
    background-color: $cart-bg-button-hover;
  }
  &:active {
    background-color: $cart-bg-button-active;
  }
  &:before {
    content: "";
    width: 20px;
    height: 2.5px;
    background-color: $button-bg;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover:before, &:hover:after {
    background-color: $button-bg-hover;
  }
  &:active:before, &:active:after {
    background-color: $button-bg-active;
  }
}
.cart-button__plus {
  &:after {
    content: "";
    width: 20px;
    height: 2.5px;
    background-color: $button-bg;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
  }
}
</style>
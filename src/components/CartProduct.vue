<template>
  <div class="cart-product__wrapper">
    <notification ref="notification"></notification>
    <input type="checkbox" :id="id" value="favourite">
    <label :for="id" @click="favourite = !favourite">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
        <path
            d="M1 6.4C1 2 4.5 1 6.5 1C9 1 11 3 12 4.5C13 3 15 1 17.5 1C19.5 1 23 2 23 6.4C23 13 12 19 12 19C12 19 1 13 1 6.4Z"
            stroke="#525252" stroke-width="2"/>
      </svg>
    </label>
    <picture>
      <img :src="require(`@/images/${img}`)" alt="oral-b">
    </picture>
    <article class="cart-product__description">
      <strong v-if="!discountPrice">{{ priceOfProduct(price) }} &#8381;</strong>
      <strong v-else class="cart-product__discount">{{ priceOfProduct(discountPrice) }} &#8381; <small>{{ priceOfProduct(price) }}
        &#8381;</small></strong>
      <p>{{ description }}</p>
    </article>
    <button class="btn" v-if="!counter" @click="counter++">В корзину</button>
    <cart-button v-else @removeProduct="removeProduct" @addProduct="addProduct" :counter="counter"></cart-button>
  </div>
</template>

<script>
import CartButton from "@/components/CartButton";
import Notification from "@/components/Notification";

export default {
  name: "CartProduct",
  components: {Notification, CartButton},
  props: ['price', 'discountPrice', 'description', 'img', 'id'],
  data() {
    return {
      counter: 0,
      favourite: false
    }
  },
  methods: {
    removeProduct() {
      if (this.counter) {
        this.counter--
      }
    },
    addProduct() {
      this.counter++
    },
  },
  computed: {
    priceOfProduct() {
      return (price) => {
        const goodPrice = price.toString()
        const res = []
        let j = 0
        for (let i = goodPrice.length - 1; i >= 0; i--) {
          if (j % 3 !== 0) {
            res.push(goodPrice[i])
          } else {
            res.push(' ', goodPrice[i])
          }
          j++
        }
        return res.reverse().join('')
      }
    }
  },
  watch: {
    favourite(value) {
      if (value) {
        this.$refs.notification.$el.classList.add('active')
        setTimeout(() => {
          this.$refs.notification.$el.classList.remove('active')
        }, 3000)
      }
    },
  }
}
</script>

<style lang="scss">
.cart-product__wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 305px;
  height: 416px;
  text-align: center;
  align-items: center;
  transition: .5s;
  &:hover {
    box-shadow: -1px -3px 34px 8px rgba(34, 60, 80, 0.2);
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
  svg {
    position: absolute;
    top: 21px;
    right: 17px;
    cursor: pointer;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked + label {
    svg {
      path {
        stroke: $main-red;
      }
    }
  }
  picture {
    display: flex;
    justify-content: center;
    width: 305px;
    height: 240px;
    margin-bottom: 20px;
    img {
      object-fit: scale-down;
    }
  }
  .cart-product__description {
    text-align: left;
    strong {
      font-size: 20px;
    }
    .cart-product__discount {
      color: $main-red;
      small {
        color: $price-sale;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: $main-red;
          transform: rotate(-25deg);
          top: 9px;
          left: 0;
        }
      }
    }
    p {
      margin-top: 10px;
      line-height: 20px;
    }
  }
  .btn {
    position: absolute;
    bottom: 0;
  }
}
</style>
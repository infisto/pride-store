<template>
  <div id="app">
    <div class="app__wrapper">
      <h2>С этим товаром покупают</h2>
      <div class="app__products">
        <cart-product v-for="product in products"
                      :key="product.id"
                      :price="product.price"
                      :discount-price="product.discountPrice"
                      :description="product.description"
                      :img="product.img"
                      :id="product.id"
        ></cart-product>
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct";

export default {
  name: "App",
  components: {
    CartProduct,
  },
  data() {
    return {
      products: [
        {
          id: 'd56f467212ce40c5a97d3019a8c8cd89',
          price: 189,
          discountPrice: null,
          description: 'Oral-B ополаскиватель для полости рта Комплекс LASTING FRESHNESS Arctic Mint 250 мл',
          img: 'image1.jpg',
        },
        {
          id: '0d426572976c46648920a83cfe254c78',
          price: 801,
          discountPrice: null,
          description: 'Сменные насадки для электрических зубных щеток Oral-B Sensi Ultrathin для бережной чистки, 2 шт.',
          img: 'image4.jpg',
        },
        {
          id: 'c09057286ec4483083281dcbb12cab9c',
          price: 2289,
          discountPrice: null,
          description: 'Электрическая зубная щетка Philips Sonicare 2 Series Gum Health HX6232/20 с двумя насадками, черный',
          img: 'image3.jpg',
        },
        {
          id: 'c53a05c9c6564477ba2701df72f73bcf',
          price: 540,
          discountPrice: 385,
          description: 'Oral-B Зубная нить Essential Floss вощеная, мята, 2шт',
          img: 'image2.jpg',
        },
      ]
    }
  }
};
</script>

<style lang="scss">
.app__wrapper {
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
  h2 {
    margin-top: 72px;
    margin-bottom: 30px;
    font-size: 24px;
    line-height: 28px;
  }
}
.app__products {
  display: flex;
  flex-wrap: wrap;
}
</style>

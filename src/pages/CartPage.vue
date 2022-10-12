<template>
  <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
    <q-scroll-area
      style="
        height: calc(100% - 150px);
        margin-top: 150px;
        border-right: 1px solid #ddd;
      "
    >
      <q-list padding>
        <q-item clickable v-ripple active>
          <q-item-section avatar>
            <q-icon name="shopping_cart" />
          </q-item-section>

          <q-item-section> Your Cart </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-img
      class="absolute-top"
      src="https://cdn.quasar.dev/img/material.png"
      style="height: 150px"
    >
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
        <div class="text-weight-bold">{{ userName }}</div>
      </div> 
    </q-img>
  </q-drawer>
  <q-page padding>

    <body>
    <div class="Cart-Container">

        <div class="Header">
            <h3 class="Heading">Shopping Cart</h3>
            <h5 class="Action">Remove all</h5>
        </div>

        <div class="Cart-Items">
            <div class="image-box">
                <img src="images/apple.png" style="height:120px"/>
            </div>

            <div class="about">
                <h1 class="title">Apple Juice</h1>
                <h3 class="subtitle">250ml</h3>
                <img src="images/veg.png" style ="height:30px" />
            </div>

            <div class="counter">
                <div class="btn">+</div>
                <div class="count">2</div>
                <div class="btn">-</div>
            </div>

            <div class="prices">
                <div class="amount">$2.99</div>
                <div class="save"><u>Save for later</u></div>
                <div class="remove"><u>Remove</u></div>
            </div>
        </div>

        <hr> 
            <div class="checkout">
            <div class="total">
                <div>
                    <div class="Subtotal">Sub-Total</div>
                    <div class="items">2 items</div>
                </div>
                <div class="total-amount">$6.18</div>
            </div>
            <button class="button">Checkout</button>
        </div>
    </div>
</body>
  </q-page>


</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  // name: 'PageName'
});
</script>

<style>
@import 'src/css/style.css'
</style>
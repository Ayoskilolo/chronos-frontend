<template>
  <q-page padding>
    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-btn to="/home" flat no-caps>Home Page</q-btn>
          </q-item>

          <q-item clickable v-ripple active>
            <q-item-section avatar>
              <q-icon name="shopping_cart" />
            </q-item-section>

            <q-btn to="/home/cart" flat no-caps>Your Cart</q-btn>
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

    <body>
      <div class="Cart-Container"> 
        <div class="Header">
          <h3 class="Heading">Shopping Cart</h3>
        </div>

        <ul>
          <li v-for="item in order" :key="item.id">
        <div class="Cart-Items">
          <div class="image-box">
            <img :src=path style="height: 120px" />
          </div>

          <div class="about">
            <h1 class="title">{{item.item}}</h1>
            <h3 class="subtitle">250ml</h3>
            <!-- <img src="images/veg.png" style="height: 30px" /> -->
          </div>

          <div class="counter">
            <div class="count">{{item.quantity}}</div>
          </div>

          <div class="prices">
            <div class="amount">${{ item.price }}</div>
          </div>
        </div>
      </li>
      </ul>

        <hr />
        <div class="checkout">
          <div class="total">
            <div>
              <div class="Subtotal">Sub-Total</div>
              <div class="items">{{order.length}} items</div>
            </div>
            <div class="total-amount">$6.18</div>
          </div>
          <button class="button">Checkout</button>
        </div>
      </div>
    </body>
  </q-page>
</template>

<script setup>

import { useOrderStore } from 'src/stores/order';

const OrderStore = useOrderStore();
const order = OrderStore.order;
const userName = localStorage.userName;

const path = `@/assets/img/${item.item}.png`


</script>

<style>
@import 'src/css/style.css';
</style>

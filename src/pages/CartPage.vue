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
                <img :src="`/img/${item.item}.png`" style="height: 120px" />
              </div>

              <div class="about">
                <h1 class="title">{{ item.item }}</h1>
                <!-- <h3 class="subtitle">250ml</h3> -->
                <!-- <img src="images/veg.png" style="height: 30px" /> -->
              </div>

              <div class="counter">
                <div class="count">{{ item.quantity }}</div>
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
              <div class="items">{{ order.length }} items</div>
            </div>
            <div class="total-amount">${{ subTotal }}</div>
          </div>
          <q-btn class="button" @click="sendOrder">Checkout</q-btn>
        </div>
      </div>
    </body>
  </q-page>
</template>

<script lang="ts" setup>
import { useOrderStore } from 'src/stores/order';
import { useAuthStore  } from 'src/stores/auth';
import { computed } from 'vue';
import { api } from 'boot/axios';

const OrderStore = useOrderStore();
const order = OrderStore.order;
const userName = localStorage.userName;

const store = useAuthStore();
const user = Object.assign({}, store.user);

const subTotal = computed(function () {
  const total = order.reduce((p, i) => p + i.price, 0);
  return total ? total : 0.0;
});

// const path = `@/assets/img/${item.item}.png`;
// console.log(order)
// console.log(user)
const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${store.token}`,
      };  
const response =[{ items: order, email: user.email },
      { headers }]
      console.log(response)


async function sendOrder() {
      if (order.length === 0) {
        return alert('Please place an order');
      }
      order.forEach((v) => {
        delete v.id;
      });

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${store.token}`,
      };

      const response = 
       await api.post(
        'orders',
        { items: order, email: user.email },
        { headers }
      );
      console.log(response)
      localStorage.total = subTotal;

      this.$router.push({ path: 'home/success' });
    }
</script>

<style>
@import 'src/css/style.css';
</style>

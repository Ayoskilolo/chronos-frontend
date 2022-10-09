<template>
    <q-layout view="hHh Lpr fFf">
        <q-header elevated  height-hint="98">
        <q-toolbar class="bg-black text-white">

        <q-toolbar-title>
        <q-btn
            to="/home"
            flat
            label="Le Magasin"
            ></q-btn>
        </q-toolbar-title>

        <div>CRUD App by Ayomide Afolabi</div>
        <q-btn flat round dense icon="gamepad" />
        </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
    >
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">

    <!-- <q-list padding>
    <q-item clickable v-ripple>
        <q-item-section avatar>
        <q-icon name="shopping_cart" />
            </q-item-section>

            <q-item-section>
                Your Cart
            </q-item-section>
    </q-item>

    </q-list> -->
    </q-scroll-area>

    <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <div class="text-weight-bold">{{ userName }}</div>
        </div>
    </q-img>
    </q-drawer>

    <q-page-container>
        <router-view />
    </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
    const leftDrawerOpen = ref(false);
    const userName = localStorage.userName;

    return {
        userName,
        leftDrawerOpen,
        toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
        },
    };
    },
};
</script>

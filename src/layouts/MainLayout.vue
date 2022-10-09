<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-black text-white">
        <q-toolbar-title>
          Le Magasin
        </q-toolbar-title>

        <div>CRUD App by Ayomide Afolabi</div>
        <q-btn flat round dense icon="gamepad" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue';
// import EssentialLink from 'components/EssentialLink.vue';


export default{

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
};
</script>

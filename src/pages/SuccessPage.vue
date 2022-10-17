<template>
  <q-page padding>
    <div side>
      <h3>Success!</h3>
      <p>Your total is: ${{ total }}</p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useOrderStore } from 'src/stores/order';
const store = useOrderStore();
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SuccessPage',
  data() {
    return {
      total: store.total,
    };
  },
});
</script>

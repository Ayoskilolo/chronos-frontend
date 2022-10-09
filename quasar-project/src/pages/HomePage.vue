<template>
  <q-page padding>
    <div class="row items-center justify-between" side style="background-color:grey; width: 100%;">
        <h3>Welcome</h3>
      </div>
    <HomeContainer>     
      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-md">
          <q-select v-model="item" :options="options" label="Items" />
        </div>
      </div>


      <div class="q-pa-md" style="max-width: 400px">
        <q-form @submit="addOrder" @reset="onReset" class="q-gutter-md">
          <div class="row items-center justify-between">
            <q-input
              filled
              type="number"
              v-model="ShoppingList.quantity"
              label="quantity *"
              hint="Quantity to Get"
              lazy-rules
              :rules="[
                (val) => val > 0 || 'Please enter an amount',
                (val) => val < item?.quantity || 'Not enough in stock',
              ]"
            />

            <q-card flat>
              <q-card-section
                >Price:
                {{ item?.price * ShoppingList?.quantity || 0 }}
              </q-card-section>
            </q-card>
          </div>

          <q-dialog v-model="alertDialog">
            <q-card>
              <q-card-section>
                <div class="text-h6">Alert</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Item has been added to order
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <q-dialog v-model="confirmDialog" persistent>
            <q-card>
              <q-card-section class="row items-center">
                <div class="q-ml-sm">
                  <ul>
                    <li v-for="order in myOrders" v-bind:key="order.id">
                      <p>
                        <span>Name: {{ order.name }} </span>
                        <span> Quantity: {{ order.quantity }} </span>
                        <span> Price: {{ order.price }} </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="primary" v-close-popup />
                <q-btn
                  flat
                  @click="sendOrder"
                  label="confirm"
                  color="primary"
                  v-close-popup
                />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <div>
            <q-btn label="Add" type="submit" color="primary" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>
    </HomeContainer>
  </q-page>
</template>

<script>
  import { useAuthStore } from 'src/stores/auth';
  
  import { defineComponent } from 'vue';
  import { api } from 'boot/axios';
  import HomeContainer from '../components/HomeContainer.vue';
  // const order: { id?: number; name: string; quantity: number; price: number }[] =
    // [];
  const order = [];
  const store = useAuthStore();
  
  const user = Object.assign({}, store.user);
  
  export default defineComponent({
    components: { HomeContainer },
    data() {
      return {
        userName : localStorage.userName,
        myOrders: order,
        alertDialog: false,
        confirmDialog: false,
        item: null,
        options: [
          { id: 1001, label: 'Avocado', price: 230, quantity: 10 },
          { id: 1002, label: 'Lotion', price: 250, quantity: 10 },
          { id: 1003, label: 'Pain reliever', price: 500, quantity: 200 },
          { id: 1004, label: 'Dry pasta', price: 20, quantity: 50 },
          { id: 1005, label: 'Toothbrush', price: 700, quantity: 10 },
          { id: 1006, label: 'Halloween candy', price: 33, quantity: 56 },
          { id: 1007, label: 'Mascara', price: 765, quantity: 7 },
          { id: 1008, label: 'Capsicum', price: 764, quantity: 90 },
          { id: 1009, label: 'Blush', price: 87, quantity: 50 },
          { id: 1010, label: 'Granola bars', price: 24, quantity: 6 },
        ],
        ShoppingList: {
          quantity: null,
        },
      };
    },
    methods: {
      addOrder() {
        const id = Math.floor(Math.random() * 100);
        order.push({
          id,
          name: this.item?.label,
          quantity: this.ShoppingList.quantity,
          price: this.item?.price * this.ShoppingList.quantity,
        });
        this.alertDialog = true;
        this.onReset();
      },
      onReset() {
        this.item = null;
        this.ShoppingList.quantity = null;
      },
      async sendOrder() {
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
  
        const response = await api.post(
          'orders',
          { items: order, email: user.email },
          { headers }
        );
        localStorage.total = response.data.total;
        this.$router.push({ path: 'home/success' });
      },
    },
  });
</script>
  
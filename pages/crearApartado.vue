<script setup>
import { menuOutline, notificationsOutline } from 'ionicons/icons';
const router = useIonRouter();
const toast = useToast();

const modalOpen = ref(false);

onMounted(() => {
  const apartados = JSON.parse(localStorage.getItem('apartados')) || [];
  if (apartados.length == 0) {
    modalOpen.value = true;
  }
});

const apartado = ref({
  name: '',
  amount: null,
  actual: 0,
  limit: false,
  limitDate: '',
  createdAt: Date.now(),
});

const createApart = () => {
  if (apartado.value.name && apartado.value.amount) {
    const apartados = JSON.parse(localStorage.getItem('apartados')) || [];
    apartados.unshift(apartado.value);
    localStorage.setItem('apartados', JSON.stringify(apartados));
    toast.info('Apartado creado exitosamente');
    router.push('/apartados');
  } else {
    toast.error('Faltan campos por llenar!');
  }
};
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <section
        class="flex items-center justify-between text-green-700 text-md px-4 py-3 mb-0"
        style="background-color: #e4ebe9"
      >
        <ion-icon :icon="menuOutline"></ion-icon>
        <p class="font-bold m-0">MIS APARTADOS</p>
        <ion-icon :icon="notificationsOutline"></ion-icon>
      </section>
      <section class="mx-4 mt-6">
        <h2 class="font-bold text-green-600 mb-0">Crear Apartado</h2>
        <p class="text-gray-600 mb-8">
          <small
            >Crea apartados y para facilitar la organización de tus
            ahorros</small
          >
        </p>
        <MazInput
          v-model="apartado.name"
          label="Nombre del Aparatdo"
          placeholder="Ahorro para bicicleta"
          success
        />
        <MazInputNumber
          label="Meta de ahorro"
          class="mt-5"
          v-model="apartado.amount"
          placeholder="$250"
          :min="1"
          :step="1"
          color="success"
          style="min-width: 100%"
          success
        />
        <MazSwitch
          class="text-gray-700 mt-8 mb-3"
          v-model="apartado.limit"
          name="Establecer fecha limite"
          color="success"
        >
          Establecer fecha limite
        </MazSwitch>
        <MazPicker
          v-if="apartado.limit"
          color="success"
          class="mb-5"
          v-model="apartado.limitDate"
          format="DD-MM-YYYY"
          label="Fecha limite"
          locale="es-MX"
          success
        />

        <div>
          <MazBtn
            class="mt-6"
            color="success"
            @click="createApart"
            to="/crearApartado"
          >
            Crear apartado
          </MazBtn>
        </div>
      </section>
      <Foot />
    </ion-content>
  </ion-page>
</template>

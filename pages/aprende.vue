<script setup>
import {
  menuOutline,
  notificationsOutline,
  addOutline,
  personCircleOutline,
  swapHorizontalOutline,
  home,
  library,
  albums,
} from 'ionicons/icons';
const router = useIonRouter();
const toast = useToast();

const restart = () => router.push('/');

const total = ref(0);
const modalOpen = ref(false);

onMounted(() => {
  const apartados = localStorage.getItem('apartados') || [];
  if (apartados.length == 0) {
    modalOpen.value = true;
  }
});

const apartado = ref({
  name: '',
  amount: null,
  limit: false,
  limitDate: '',
});

const createApart = () => {
  if (apartado.value.name && apartado.value.amount) {
    const apartados = JSON.parse(localStorage.getItem('apartados')) || [];
    apartados.push(apartado.value);
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
        <p class="font-bold m-0">APRENDE</p>
        <ion-icon :icon="notificationsOutline"></ion-icon>
      </section>
      <section class="mx-4 mt-6">
        <h2 class="font-bold text-green-600 mb-0">Proximamente</h2>
      </section>
      <Foot />
    </ion-content>
  </ion-page>
</template>

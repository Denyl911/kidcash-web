<script setup>
import { play, checkmarkOutline } from 'ionicons/icons';
import { useRoute } from 'vue-router';
const router = useIonRouter();
const route = useRoute();
const toast = useToast();

const total = ref(0);
const modalOpen = ref(false);

onMounted(() => {
  const apartados = localStorage.getItem('apartados') || [];
  if (apartados.length == 0) {
    modalOpen.value = true;
  }
});

const cuentos = ref([
  {
    id: 1,
    name: 'La importancia del ahorro',
    img: '/img/ahorro.jpg',
    h1: '¿Por qué es importante ahorrar?:',
    h2: 'Cómo empezar a ahorrar:',
    p1: 'Ahorrar es importante porque nos permite conseguir cosas que queremos en el futuro, como juguetes, ropa o incluso un viaje. También nos ayuda a ser independientes y a tener seguridad en caso de emergencias.',
    p2: 'Puedes empezar a ahorrar guardando una parte de tu paga semanal en una alcancía o en una cuenta de ahorros. Es importante ser constante y tener metas claras para motivarte a ahorrar.',
  },
  {
    id: 2,
    name: 'Gastos y presupuesto',
    img: '/img/presu.jpg',
    h1: '¿Por qué es importante ahorrar?:',
    h2: 'Cómo empezar a ahorrar:',
    p1: 'Ahorrar es importante porque nos permite conseguir cosas que queremos en el futuro, como juguetes, ropa o incluso un viaje. También nos ayuda a ser independientes y a tener seguridad en caso de emergencias.',
    p2: 'Puedes empezar a ahorrar guardando una parte de tu paga semanal en una alcancía o en una cuenta de ahorros. Es importante ser constante y tener metas claras para motivarte a ahorrar.',
  },
  {
    id: 3,
    name: 'Compras inteligentes',
    img: '/img/inteli.jpg',
    h1: '¿Por qué es importante ahorrar?:',
    h2: 'Cómo empezar a ahorrar:',
    p1: 'Ahorrar es importante porque nos permite conseguir cosas que queremos en el futuro, como juguetes, ropa o incluso un viaje. También nos ayuda a ser independientes y a tener seguridad en caso de emergencias.',
    p2: 'Puedes empezar a ahorrar guardando una parte de tu paga semanal en una alcancía o en una cuenta de ahorros. Es importante ser constante y tener metas claras para motivarte a ahorrar.',
  },
  {
    id: 4,
    name: 'Dar y compartir',
    img: '/img/compart.png',
    h1: '¿Por qué es importante ahorrar?:',
    h2: 'Cómo empezar a ahorrar:',
    p1: 'Ahorrar es importante porque nos permite conseguir cosas que queremos en el futuro, como juguetes, ropa o incluso un viaje. También nos ayuda a ser independientes y a tener seguridad en caso de emergencias.',
    p2: 'Puedes empezar a ahorrar guardando una parte de tu paga semanal en una alcancía o en una cuenta de ahorros. Es importante ser constante y tener metas claras para motivarte a ahorrar.',
  },
]);

const cuento = cuentos.value.find((el) => el.id == route.params.id) || {
  id: '',
  name: '',
  img: '',
  h1: '',
  h2: '',
  p1: '',
  p2: '',
};

const complete = ()=> {
    const lec = JSON.parse(localStorage.getItem('lecciones')) || []
    lec.push(cuento.id)
    localStorage.setItem('lecciones', JSON.stringify(lec))
    router.push('/aprende')
}
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <Navigation title="LECCIONES" />
      <section class="mx-4 mt-6">
        <h1 class="font-bold text-rose-400 mb-4">{{ cuento.name }}</h1>
        <section class="text-left" style="">
          <h3>{{ cuento.h1 }}</h3>
          <p class="mb-3">
            {{ cuento.p1 }}
          </p>
          <h3>{{ cuento.h2 }}</h3>
          <p class="mb-3">
            {{ cuento.p2 }}
          </p>
          <img class="rounded mx-auto w-60 h-auto" :src="cuento.img" alt="" />
          <MazBtn
            class="mt-7 bg-rose-400 mb-32"
            color="danger"
            block
            @click="complete"
          >
            Completar Lección
            <ion-icon class="text-lg ml-4" :icon="checkmarkOutline"></ion-icon>
          </MazBtn>
        </section>
      </section>
      <Foot />
    </ion-content>
  </ion-page>
</template>

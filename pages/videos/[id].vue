<script setup>
import { play, checkmarkOutline } from 'ionicons/icons';
import { useRoute } from 'vue-router';
const router = useIonRouter();
const route = useRoute()
const toast = useToast();




const total = ref(0);
const modalOpen = ref(false);

onMounted(() => {
  const apartados = localStorage.getItem('apartados') || [];
  if (apartados.length == 0) {
    modalOpen.value = true;
  }
});

const videos = ref([
  {
    id: 1,
    name: 'Ahorro para niños, como ahorrar',
    url: 'O-GYvpCKJdk',
  },
  {
    id: 2,
    name: 'A Juanita le aprietan sus zapatos',
    url: 'oLIVRI7YtjI',
  },
  {
    id: 3,
    name: 'El hábito que beneficia a la familia',
    url: '4M5Dw2-cEgE',
  },
  {
    id: 4,
    name: 'Qué es el banco?',
    url: 'USte3QP3UwQ',
  },
  {
    id: 5,
    name: 'Que es el dinero? - Cuento',
    url: 'A6913Y9bUBg',
  },
  {
    id: 6,
    name: 'Cómo se gana el dinero?',
    url: '33Ld059BiS0',
  },
  {
    id: 7,
    name: 'Qué es el dinero?',
    url: '9ujlPHPgugc',
  }
]);

const video = videos.value.find((el) => el.id == route.params.id) || {
  id: '',
  name: '',
  url: '',
};
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding ">
      <Navigation title="VIDEOS" />
      <section class="mt-6">
        <h1 class="font-bold text-rose-400 mb-4 mx-4">{{ video.name }}</h1>
        <section class="text-left" style="">
            <iframe style="width: 98%; height: 15rem; border-radius: 10px; margin-left: auto; margin-right: auto;" :src="`https://www.youtube.com/embed/${video.url}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div class="mx-3">
            <MazBtn class="mt-20 bg-rose-400" color="danger" block @click="router.push('/aprende')">
            Volver 
          </MazBtn>
          </div>
        </section>
      </section>
      <Foot />
    </ion-content>
  </ion-page>
</template>

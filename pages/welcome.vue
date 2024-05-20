<script setup>
import { arrowForward } from 'ionicons/icons';
const router = useIonRouter();
const slides = ref([
  {
    img: '/img/cochinito-1.png',
    title: '¡Bienvenido a "KidCash"',
    text: 'Registra tus ingresos y gastos diarios de forma divertida y aprende a administrar tu dinero como un experto.',
  },
  {
    img: '/img/bills.png',
    title: '¡Te ayudaremos a alcanzar tus objetivos!',
    text: 'Establece metas de ahorro para tus sueños y asigna categorías a tus gastos.',
  },
  {
    img: '/img/coins.png',
    title: 'Gana recompensas virtuales por tus logros financieros',
    text: '¡Colecciona medallas y puntos mientras te diviertes!',
  },
]);
const actual = ref(0);
const btnText = ref('Siguiente');

const nextSlide = (n) => {
  if (Number.isInteger(n)) {
    actual.value = n;
  } else {
    if (actual.value < 2) {
      actual.value += 1;
    } else {
      router.push('/register');
    }
  }
  if (actual.value == 2) {
    btnText.value = 'Comenzar';
  } else {
    btnText.value = 'Siguiente';
  }
};
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="text-rose-400 min-h-screen" style="background-color: #f8fcfc">
        <div class="text-center">
          <img
            :src="`${slides[actual].img}`"
            alt="Cochinito"
            class="pt-20 mx-auto"
            style="width: auto; height: 46vh"
          />
        </div>
        <div class="container px-8 mt-10">
          <h1 class="text-3xl">{{ slides[actual].title }}</h1>
          <p class="mb-24">
            {{ slides[actual].text }}
          </p>
        </div>
        <div
          class="mt-10 flex justify-center"
          style="position: absolute; left: 49vw; bottom: 140px"
        >
          <img
            class="mr-1"
            :src="actual == 0 ? '/img/circleC.png' : '/img/circleG.png'"
            alt="Step 1"
            @click="nextSlide(0)"
          />
          <img
            class="mr-1"
            :src="actual == 1 ? '/img/circleC.png' : '/img/circleG.png'"
            alt="Step 2"
            @click="nextSlide(1)"
          />
          <img
            :src="actual == 2 ? '/img/circleC.png' : '/img/circleG.png'"
            alt="Step 3"
            @click="nextSlide(2)"
          />
        </div>
        <div style="position: absolute; bottom: 50px; right: 0px">
          <div class="text-right me-10 mt-10">
            <MazBtn color="danger" @click="nextSlide"
              >{{ btnText
              }}<ion-icon
                style="position: relative; top: 2px"
                class="ms-2"
                :icon="arrowForward"
              ></ion-icon
            ></MazBtn>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

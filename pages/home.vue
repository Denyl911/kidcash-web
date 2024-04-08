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

const restart = () => router.push('/');
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <section
        class="flex items-center justify-between text-green-700 text-md px-4 py-3 mb-0"
        style="background-color: #e4ebe9"
      >
        <ion-icon :icon="menuOutline"></ion-icon>
        <p class="font-bold m-0">RESUMEN</p>
        <ion-icon :icon="notificationsOutline"></ion-icon>
      </section>
      <section
        class="text-green-700 text-center mt-0 py-10"
        style="background-color: #e4ebe9; border-radius: 0px 0px 50px 50px"
      >
        <h2 class="text-2xl mt-0 mb-4">AHORROS TOTALES</h2>
        <p class="text-3xl font-bold m-0">$1,434.50</p>
      </section>
      <section
        class="flex items-center justify-between text-white bg-green-600 text-md px-4 py-3 mt-6"
      >
        <ion-icon :icon="swapHorizontalOutline" size="large"></ion-icon>
        <ion-icon :icon="addOutline" size="large"></ion-icon>
        <ion-icon :icon="personCircleOutline" size="large"></ion-icon>
      </section>
      <section class="mt-5">
        <p class="mx-3 text-green-700 font-bold">MOVIMIENTOS</p>
        <div class="grid grid-cols-12 mx-5 mt-3" style="font-size: 1rem">
          <div class="col-span-2">
            <img class="" src="/img/happy.png" alt="" />
          </div>
          <div class="col-span-8">
            <p class="m-0">Ahorro para videojuegos</p>
            <p class="text-gray-400"><small>Mayo 26,2024</small></p>
          </div>
          <div class="col-span-2">
            <p class="m-0">+$10.00</p>
            <p class="text-gray-400"><small>1:34 PM</small></p>
          </div>
        </div>
        <div class="grid grid-cols-12 mx-5 mt-3" style="font-size: 1rem">
          <div class="col-span-2">
            <img class="" src="/img/angry.png" alt="" />
          </div>
          <div class="col-span-8">
            <p class="m-0">Retiraste dinero</p>
            <p class="text-gray-400"><small>Mayo 26,2024</small></p>
          </div>
          <div class="col-span-2">
            <p class="m-0">-$20.00</p>
            <p class="text-gray-400"><small>1:34 PM</small></p>
          </div>
        </div>
        <div class="grid grid-cols-12 mx-5 mt-3" style="font-size: 1rem">
          <div class="col-span-2">
            <img class="" src="/img/happy.png" alt="" />
          </div>
          <div class="col-span-8">
            <p class="m-0">Ahorro para bicicleta</p>
            <p class="text-gray-400"><small>Mayo 26,2024</small></p>
          </div>
          <div class="col-span-2">
            <p class="m-0">+$40.00</p>
            <p class="text-gray-400"><small>1:34 PM</small></p>
          </div>
        </div>
        <div class="grid grid-cols-12 mx-5 mt-3" style="font-size: 1rem">
          <div class="col-span-2">
            <img class="" src="/img/angry.png" alt="" />
          </div>
          <div class="col-span-8">
            <p class="m-0">Retiraste dinero</p>
            <p class="text-gray-400"><small>Mayo 26,2024</small></p>
          </div>
          <div class="col-span-2">
            <p class="m-0">-$10.00</p>
            <p class="text-gray-400"><small>1:34 PM</small></p>
          </div>
        </div>
        <div class="grid grid-cols-12 mx-5 mt-3" style="font-size: 1rem">
          <div class="col-span-2">
            <img class="" src="/img/happy.png" alt="" />
          </div>
          <div class="col-span-8">
            <p class="m-0">Ahorro para videojuegos</p>
            <p class="text-gray-400"><small>Mayo 26,2024</small></p>
          </div>
          <div class="col-span-2">
            <p class="m-0">+$25.00</p>
            <p class="text-gray-400"><small>1:34 PM</small></p>
          </div>
        </div>
      </section>
      <section
        style="
          background-color: #e4ebe9;
          position: absolute;
          bottom: 0px;
          width: 100vw;
          border-radius: 20px 20px 0px 0px;
        "
        class="flex items-center justify-between text-green-700 text-md px-4 py-3 mt-6"
      >
        <div class="text-center">
          <ion-icon :icon="library" size="large"></ion-icon>
          <p style="margin-top: -10px">Aprende</p>
        </div>
        <div
          @click="restart"
          class="bg-green-700 text-center"
          style="color: #e4ebe9; width: 4rem; height: 4rem; border-radius: 100%"
        >
          <ion-icon
            :icon="home"
            style="font-size: 2rem; margin-top: 5px"
          ></ion-icon>
          <p style="margin-top: -10px">Inicio</p>
        </div>
        <div class="text-center">
          <ion-icon :icon="albums" size="large"></ion-icon>
          <p style="margin-top: -10px">Apartados</p>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

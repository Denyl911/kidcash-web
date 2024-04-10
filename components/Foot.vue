<script setup>
import { home, library, albums } from 'ionicons/icons';
const router = useIonRouter();
</script>

<template>
  <section
    style="
      background-color: #e4ebe9;
      position: fixed;
      bottom: 0px;
      width: 100vw;
      border-radius: 20px 20px 0px 0px;
    "
    class="flex items-center justify-between text-green-700 text-md px-4 py-3 mt-6"
  >
    <div
      class="text-center hover:text-green-500"
      @click="router.push('/aprende')"
    >
      <ion-icon :icon="library" size="large"></ion-icon>
      <p style="margin-top: -10px">Aprende</p>
    </div>
    <div
      @click="router.push('/home')"
      class="bg-green-700 text-center hover:text-green-500 hover:bg-green-600"
      style="color: #e4ebe9; width: 4rem; height: 4rem; border-radius: 100%"
    >
      <ion-icon
        :icon="home"
        style="font-size: 2rem; margin-top: 5px"
      ></ion-icon>
      <p style="margin-top: -10px">Inicio</p>
    </div>
    <div
      class="text-center hover:text-green-500"
      @click="router.push('/apartados')"
    >
      <ion-icon :icon="albums" size="large"></ion-icon>
      <p style="margin-top: -10px">Apartados</p>
    </div>
  </section>
</template>

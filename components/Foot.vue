<script setup>
import { home, library, albums } from 'ionicons/icons';
const router = useIonRouter();
</script>

<template>
  <section
    style="
      background-color: #f3f3f3;
      position: fixed;
      bottom: 0px;
      width: 100vw;
      border-radius: 20px 20px 0px 0px;
    "
    class="flex items-center justify-between text-rose-400 text-md px-4 py-3 mt-6"
  >
    <div
      class="text-center hover:text-rose-500"
      @click="router.push('/aprende')"
    >
      <ion-icon :icon="library" size="large"></ion-icon>
      <p style="margin-top: -10px">Aprende</p>
    </div>
    <div
      @click="router.push('/home')"
      class="bg-rose-400 text-center hover:text-rose-500 hover:bg-rose-500"
      style="color: #f3f3f3; width: 4rem; height: 4rem; border-radius: 100%"
    >
      <ion-icon
        :icon="home"
        style="font-size: 2rem; margin-top: 5px"
      ></ion-icon>
      <p style="margin-top: -10px">Inicio</p>
    </div>
    <div
      class="text-center hover:text-rose-500"
      @click="router.push('/apartados')"
    >
      <ion-icon :icon="albums" size="large"></ion-icon>
      <p style="margin-top: -10px">Apartados</p>
    </div>
  </section>
</template>

<script setup>
import { menuOutline, notificationsOutline, close } from 'ionicons/icons';
const router = useIonRouter();
const props = defineProps(['title']);
const sideOpen = ref(false);

const logout = () => {
  localStorage.clear();
  router.push('/');
};
</script>

<template>
  <div>
    <section class="side" :style="`display: ${sideOpen ? 'block' : 'none'}`">
      <p style="padding: 20px 20px; width: 80%">
        Menu
        <ion-icon
          @click="sideOpen = false"
          :icon="close"
          size="is-large"
          style="position: absolute; right: 2rem; padding: 0px 10px"
        ></ion-icon>
      </p>
      <a href="#" @click="router.push('/home')">Inicio</a>
      <a href="#" @click="router.push('/apartados')">Mis Apartados</a>
      <a href="#" @click="router.push('/crearApartado')">Crear Apartado</a>
      <a href="#" @click="router.push('/aprende')">Aprende</a>
      <hr />
      <a href="#" style="display: absolute; bottom: 10px" @click="logout"
        >Cerrar Sesion</a
      >
    </section>
    <section
      class="close-side"
      :style="`display: ${sideOpen ? 'block' : 'none'}`"
      @click="sideOpen = false"
    ></section>
  </div>
  <section
    class="flex items-center justify-between text-rose-400 text-md px-4 py-3 mb-0"
    style="background-color: #f3f3f3"
  >
    <ion-icon :icon="menuOutline" @click="sideOpen = true"></ion-icon>
    <p class="font-bold m-0">{{ props.title }}</p>
    <ion-icon :icon="notificationsOutline"></ion-icon>
  </section>
</template>

<style scoped>
.side {
  width: 80vw;
  height: 100vh;
  position: fixed;
  left: 0;
  background-color: aliceblue;
  z-index: 12;
}

.close-side {
  width: 20vw;
  height: 100vh;
  right: 0;
  background-color: rgba(0, 0, 0, 0.37);
  z-index: 12;
  position: fixed;
}

.side a {
  padding: 20px 20px;
  width: 95%;
  display: inline-block;
}
.side a:hover {
  background-color: rgb(185, 185, 185);
}
</style>

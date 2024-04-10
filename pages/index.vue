<script setup>
const router = useIonRouter();
setTimeout(() => {
  if (localStorage.getItem('user')) {
    return router.push('/home');
  }
  router.push('/welcome');
}, 4000);
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div
        class="text-green-500 flex justify-center items-center min-h-screen flex-col"
      >
        <h1 class="text-7xl font-bold">KIDCASH</h1>
        <p class="italic mb-24">Sembrando habitos de ahorro</p>
        <MazSpinner size="3em" color="success" />
        <p><small>Cargando ...</small></p>
      </div>
    </ion-content>
  </ion-page>
</template>

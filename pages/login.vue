<script setup>
const router = useIonRouter();

const user = ref({
  email: '',
  password: '',
});

const goLogin = () => {
  router.push('/register');
};

const goHome = () => {
  router.push('/home');
};
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <main class="px-5 pt-10 text-green-600">
        <div class="grid grid-cols-10 items-center">
          <div class="col-span-8">
            <h1 class="text-3xl font-bold">Iniciar Sesión</h1>
          </div>
          <img class="col-span-2" src="/img/logo.png" alt="Logo" />
        </div>
        <p class="mt-5">Bienvenido de Nuevo</p>
        <section class="mt-10">
          <div>
            <MazInput
              v-model="user.email"
              label="Correo electronico"
              placeholder="juan98@gmail.com"
              success
            />
            <MazInput
              class="mt-6"
              v-model="user.password"
              label="Contraseña"
              placeholder="********"
              type="password"
              success
            />
            <p class="mt-3 text-gray-500">
              <small
                >Aun no tienes cuenta?
                <strong class="text-green-600" @click="goLogin"
                  >Registrarme</strong
                ></small
              >
            </p>
          </div>
          <div class="text-center mt-10">
            <MazBtn color="success" @click="goHome">Iniciar Sesión</MazBtn>
          </div>
        </section>
      </main>
    </ion-content>
  </ion-page>
</template>

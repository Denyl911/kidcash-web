<script setup>
import { arrowForward } from 'ionicons/icons';

const router = useIonRouter();
const actual = ref(0);
const btnText = ref('Continuar');
const slides = ref([
  '¡Ahora vamos a conocer más sobre ti!',
  'Necesitamos un correo electrónico para notificaciones y una contraseña para iniciar sesión.',
]);

const user = ref({
  name: '',
  lastName: '',
  birthDate: '',
  email: '',
  password: '',
});

const bDate = ref();
const checked = ref(false);

const nextSlide = (n) => {
  if (Number.isInteger(n)) {
    actual.value = n;
  } else {
    if (actual.value < 1) {
      actual.value += 1;
    } else {
      router.push('/home');
    }
  }
  if (actual.value == 1) {
    btnText.value = 'Registrarme';
  } else {
    btnText.value = 'Continuar';
  }
};

const goLogin = () => {
  router.push('/login');
};
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <main class="px-5 pt-10 text-green-600">
        <div class="grid grid-cols-10 items-center">
          <div class="col-span-8">
            <h1 class="text-3xl font-bold">Registro</h1>
          </div>
          <img class="col-span-2" src="/img/logo.png" alt="" />
        </div>
        <div class="flex">
          <img
            class="mr-1"
            :src="actual == 0 ? '/img/circleW.png' : '/img/circleG.png'"
            alt="Step 1"
            @click="nextSlide(0)"
          />
          <img
            class="mr-1"
            :src="actual == 1 ? '/img/circleW.png' : '/img/circleG.png'"
            alt="Step 2"
            @click="nextSlide(1)"
          />
        </div>
        <p class="mt-5">{{ slides[actual] }}</p>
        <section class="mt-10">
          <div v-if="actual == 0">
            <div class="grid grid-cols-2 gap-2">
              <MazInput
                v-model="user.name"
                label="Nombre"
                placeholder="Tu nombre"
                success
              />
              <MazInput
                v-model="user.lastName"
                label="Apellidos"
                placeholder="Tus apellidos"
                success
              />
            </div>
            <MazPicker
              color="success"
              class="mt-8"
              v-model="bDate"
              format="DD-MM-YYYY"
              label="Fecha de nacimiento"
              locale="es-MX"
              success
            />
            <p class="mt-3 text-gray-500">
              <small
                >Ya tienes cuenta?
                <strong class="text-green-600" @click="goLogin"
                  >Iniciar Sesión</strong
                ></small
              >
            </p>
          </div>
          <div v-if="actual == 1">
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
            <MazCheckbox
              v-model="checked"
              size="mini"
              color="success"
              class="mt-5"
            >
              <small class="text-gray-500"
                >Acepto los
                <strong class="text-green-600">Terminos y Condiciones</strong> y
                la
                <strong class="text-green-600"
                  >Politica de Privacidad</strong
                ></small
              >
            </MazCheckbox>
          </div>
          <div class="text-right mt-10">
            <MazBtn color="success" @click="nextSlide"
              >{{ btnText
              }}<ion-icon
                style="position: relative; top: 2px"
                class="ms-2"
                :icon="arrowForward"
              ></ion-icon
            ></MazBtn>
          </div>
        </section>
      </main>
    </ion-content>
  </ion-page>
</template>

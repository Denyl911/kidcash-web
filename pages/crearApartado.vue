<script setup>
import moment from 'moment';
import { menuOutline, notificationsOutline } from 'ionicons/icons';
const router = useIonRouter();
const toast = useToast();

const modalOpen = ref(false);
const alDia = ref(0);
const alaSemana = ref(0);
const alMes = ref(0);
const alAno = ref(0);

onMounted(() => {
  const apartados = JSON.parse(localStorage.getItem('apartados')) || [];
  if (apartados.length == 0) {
    modalOpen.value = true;
  }
});

const apartado = reactive({
  name: '',
  amount: null,
  actual: 0,
  limit: false,
  limitDate: null,
  createdAt: Date.now(),
});

const createApart = () => {
  if (apartado.name && apartado.amount) {
    const apartados = JSON.parse(localStorage.getItem('apartados')) || [];
    apartados.unshift(apartado);
    localStorage.setItem('apartados', JSON.stringify(apartados));
    toast.info('Apartado creado exitosamente');
    router.push('/apartados');
  } else {
    toast.error('Faltan campos por llenar!');
  }
};

watch(apartado, () => {
  if (apartado.limitDate && apartado.amount) {
    const momentFechaInicial = moment();
    const momentFechaFinal = moment(apartado.limitDate);

    const diferenciaDias = momentFechaFinal.diff(momentFechaInicial, 'days');
    alDia.value = apartado.amount / diferenciaDias;

    const diferenciaSemanas = momentFechaFinal.diff(
      momentFechaInicial,
      'weeks'
    );
    if (diferenciaSemanas > 0) {
      alaSemana.value = apartado.amount / diferenciaSemanas;
    }

    const diferenciaMeses = momentFechaFinal.diff(momentFechaInicial, 'months');
    if (diferenciaMeses > 0) {
      alMes.value = apartado.amount / diferenciaMeses;
    }

    const diferenciaAnos = momentFechaFinal.diff(momentFechaInicial, 'years');
    if (diferenciaAnos > 0) {
      alAno.value = apartado.amount / diferenciaAnos;
    }
  }
});

function sC(val) {
  if (val) {
    val = val.toFixed(2);
    let num = val.toString().includes('.')
      ? val.toString().split('.')[0]
      : val.toString();
    let len = num.toString().length;
    let result = '';
    let count = 1;
    for (let i = len - 1; i >= 0; i--) {
      result = num.toString()[i] + result;
      if (count % 3 === 0 && count !== 0 && i !== 0) {
        result = ',' + result;
      }
      count++;
    }
    if (val.toString().includes('.')) {
      result = result + '.' + val.toString().split('.')[1];
    }
    return result;
  }
}
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <Navigation title="APARTADOS" />
      <section class="mx-4 mt-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="font-bold text-rose-400 mb-0">Crear Apartado</h2>
        <p class="text-gray-600 mb-8">
          <small
            >Crea apartados para facilitar la organización de tus ahorros</small
          >
        </p>
          </div>
        <img
          class="mx-auto"
          style="width: 5rem; height: auto"
          src="/img/logo-new.png"
          alt="Logo"
        />
        </div>
        <MazInput
          v-model="apartado.name"
          label="Nombre del Aparatdo"
          placeholder="Ahorro para videojuegos"
          color="danger"
        />
        <MazInputNumber
          label="Meta de ahorro"
          class="mt-5"
          v-model="apartado.amount"
          placeholder="$250"
          :min="1"
          :step="1"
          color="danger"
          style="min-width: 100%"
        />
        <!-- <MazSwitch
          class="text-gray-700 mt-8 mb-3"
          v-model="apartado.limit"
          name="Establecer fecha limite"
          color="success"
        >
          Establecer fecha limite
        </MazSwitch> -->
        <p class="mt-5 mb-1">Establecer fecha limite</p>
        <MazPicker
          color="danger"
          class="mb-5"
          v-model="apartado.limitDate"
          format="YYYY-MM-DD"
          label="Fecha limite"
          locale="es-MX"
          :min-date="new Date()"
        />
        <div class="card shadow-md" v-if="alDia">
          <p class="text-rose-400 font-semibold mb-2">Resumen</p>
          <div class="ms-3">
            <p v-if="alDia">
              Deberias ahorrar
              <span class="text-rose-400">${{ sC(alDia) }}</span> al día
            </p>
            <p v-if="alaSemana">
              O ahorrar
              <span class="text-rose-400">${{ sC(alaSemana) }}</span> a la
              semana
            </p>
            <p v-if="alMes">
              O ahorrar
              <span class="text-rose-400">${{ sC(alMes) }}</span> al mes
            </p>
            <p v-if="alAno">
              O ahorrar
              <span class="text-rose-400">${{ sC(alAno) }}</span> al año
            </p>
          </div>
        </div>
        <div>
          <MazBtn class="mt-6" color="danger" @click="createApart">
            Crear apartado
          </MazBtn>
        </div>
      </section>
      <Foot />
    </ion-content>
  </ion-page>
</template>

<style>
.card {
  padding: 1.2rem;
  border-radius: 15px;
  background-color: rgb(243, 243, 243);
}
</style>

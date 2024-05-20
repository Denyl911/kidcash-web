<script setup>
import moment from 'moment';
import {
  addOutline,
  personCircleOutline,
  swapHorizontalOutline,
} from 'ionicons/icons';
const router = useIonRouter();
const toast = useToast();

const total = ref(0);
const modalOpen = ref(false);
const modalAdd = ref(false);
const allApartados = ref([]);
const allAhorros = ref([]);
const obj = ref(0);

const ahorro = ref({
  amount: 0,
  apartado: '',
  type: 'Ingreso',
  date: null,
});

const alDia = ref(0);
const alaSemana = ref(0);
const alMes = ref(0);
const alAno = ref(0);

const totalDia = ref(0);

onMounted(() => {
  const apartados = JSON.parse(localStorage.getItem('apartados')) || [];
  const ahorros = JSON.parse(localStorage.getItem('ahorros')) || [];
  allApartados.value = apartados;
  allAhorros.value = ahorros;
  ahorros.forEach((el) => {
    if (el.type == 'Ingreso') {
      total.value += el.amount;
    } else {
      total.value -= el.amount;
    }
  });
  if (apartados.length == 0) {
    modalOpen.value = true;
  }

  apartados.forEach((el) => {
    if (el.limitDate && el.amount) {
      const momentFechaInicial = moment();
      const momentFechaFinal = moment(el.limitDate);

      const diferenciaDias = momentFechaFinal.diff(momentFechaInicial, 'days');
      totalDia.value += (el.amount - el.actual) / diferenciaDias;
    }
  });
});

onUpdated(() => {
  const apartados = JSON.parse(localStorage.getItem('apartados')) || [];
  const ahorros = JSON.parse(localStorage.getItem('ahorros')) || [];
  allApartados.value = apartados;
  allAhorros.value = ahorros;
  total.value = 0;
  ahorros.forEach((el) => {
    if (el.type == 'Ingreso') {
      total.value += el.amount;
    } else {
      total.value -= el.amount;
    }
  });
  totalDia.value = 0;
  apartados.forEach((el) => {
    if (el.limitDate && el.amount) {
      const momentFechaInicial = moment();
      const momentFechaFinal = moment(el.limitDate);

      const diferenciaDias = momentFechaFinal.diff(momentFechaInicial, 'days');
      totalDia.value += (el.amount - el.actual) / diferenciaDias;
    }
  });
});

const crearApartado = () => {
  modalOpen.value = false;
  router.push('/crearApartado');
};

const crearAhorro = () => {
  const ahorros = JSON.parse(localStorage.getItem('ahorros')) || [];
  ahorro.value.date = Date.now();
  ahorros.unshift(ahorro.value);
  localStorage.setItem('ahorros', JSON.stringify(ahorros));
  allAhorros.value = ahorros;
  modalAdd.value = false;

  const apt = allApartados.value.find((el) => el.name == ahorro.value.apartado);
  apt.actual += ahorro.value.amount;
  localStorage.setItem('apartados', JSON.stringify(allApartados.value));
  toast.info('Ahorro registrado exitosamente');
};

const setObj = () => {
  obj.value = allApartados.value.find((el) => el.name == ahorro.value.apartado);
  if (obj.value.limitDate && obj.value.amount) {
    const momentFechaInicial = moment();
    const momentFechaFinal = moment(obj.value.limitDate);

    const diferenciaDias = momentFechaFinal.diff(momentFechaInicial, 'days');
    alDia.value = (obj.value.amount - obj.value.actual) / diferenciaDias;

    const diferenciaSemanas = momentFechaFinal.diff(
      momentFechaInicial,
      'weeks'
    );
    if (diferenciaSemanas > 0) {
      alaSemana.value =
        (obj.value.amount - obj.value.actual) / diferenciaSemanas;
    }

    const diferenciaMeses = momentFechaFinal.diff(momentFechaInicial, 'months');
    if (diferenciaMeses > 0) {
      alMes.value = (obj.value.amount - obj.value.actual) / diferenciaMeses;
    }

    const diferenciaAnos = momentFechaFinal.diff(momentFechaInicial, 'years');
    if (diferenciaAnos > 0) {
      alAno.value = (obj.value.amount - obj.value.actual) / diferenciaAnos;
    }
  }
};

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
  return '0.00';
}
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <Navigation title="RESUMEN" />
      <section
        class="text-rose-400 text-center mt-0 pt-10 pb-0"
        style="background-color: #f3f3f3; border-radius: 0px 0px 50px 50px"
      >
        <h2 class="text-2xl mt-0 mb-4">AHORROS TOTALES</h2>
        <p class="text-3xl font-bold mb-0">${{ sC(total) }}</p>
        <img
          class="mx-auto"
          style="width: 7rem; height: auto"
          src="/img/cochi.png"
          alt="Logo"
        />
        <!-- <div style="position: absolute; right: 15px; top: 14vh">
          <img
            style="width: 7rem; height: auto"
            src="/img/cochi.png"
            alt="Logo"
          />
        </div> -->
      </section>

      <section
        v-if="allApartados.length > 0"
        class="text-orange-600 text-center mt-0 py-4 px-4 mt-6 mx-3"
        style="background-color: #f3f3f3; border-radius: 15px"
      >
        <p class="px-4" style="font-size: 0.9rem">
          Hoy deberias ingresar:
          <span class="font-bold">${{ sC(totalDia) }}</span> para continuar con
          tus planes de ahorro
        </p>
      </section>

      <section
        class="flex items-center justify-between text-white bg-rose-300 text-md px-4 py-3 mt-6"
      >
        <ion-icon :icon="swapHorizontalOutline" size="large"></ion-icon>
        <ion-icon
          :icon="addOutline"
          size="large"
          @click="modalAdd = true"
        ></ion-icon>
        <ion-icon :icon="personCircleOutline" size="large"></ion-icon>
      </section>
      <section class="mt-5">
        <p class="mx-3 text-rose-400 font-bold">MOVIMIENTOS</p>
        <Movimiento
          v-for="el in allAhorros"
          :title="el.apartado"
          :amount="el.amount"
          :date="el.date"
          :type="el.type"
        />
        <div
          class="text-center"
          @click="modalAdd = true"
          v-if="allAhorros.length == 0"
        >
          <h4 class="mx-10 pt-28 text-gray-700 font-semibold">
            Parece que no has ahorrado nada crea tu primer ahorro <br />
            <ion-icon
              class="mt-5"
              :icon="addOutline"
              style="font-size: 2rem"
            ></ion-icon>
          </h4>
        </div>
      </section>
      <Foot />

      <MazDialog v-model="modalOpen" no-close persistent>
        <div class="text-center">
          <h2 class="font-bold text-rose-300 mb-5">MI PRIMER AHORRO</h2>
          <p class="text-xl">Vamos a crear tu primer aparatado de ahorro</p>
          <MazBtn class="mt-6" color="danger" @click="crearApartado">
            Crear apartado
          </MazBtn>
        </div>
        <template #footer>
          <!-- <MazBtn @click="close"> Confirm </MazBtn> -->
        </template>
      </MazDialog>

      <MazDialog v-model="modalAdd">
        <div class="text-center">
          <h2 class="font-bold text-rose-400 mb-5" style="margin-top: -2rem">
            AHORRAR
          </h2>
          <div v-if="ahorro.apartado" class="mb-5">
            <h4 class="font-semibold">Objetivo: ${{ sC(obj.amount) }}</h4>
            <div class="" v-if="alDia">
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
          </div>
          <MazSelect
            v-model="ahorro.apartado"
            @selected-option="setObj"
            label="Selecciona el apartado"
            :options="allApartados"
            option-value-key="name"
            option-label-key="name"
            option-input-value-key="name"
          />
          <MazSelect
            class="mt-4"
            v-model="ahorro.type"
            label="Tipo de movimiento"
            :options="[
              { label: 'Ingreso', value: 'Ingreso' },
              { label: 'Retiro', value: 'Retiro' },
            ]"
          />
          <MazInputNumber
            label="Cantidad"
            class="mt-4"
            v-model="ahorro.amount"
            placeholder="$50"
            :min="1"
            :step="1"
            style="min-width: 100%"
          />
          <MazBtn class="mt-7 bg-rose-400" color="danger" @click="crearAhorro">
            Registrar ahorro
          </MazBtn>
        </div>
        <template #footer>
          <!-- <MazBtn @click="close"> Confirm </MazBtn> -->
        </template>
      </MazDialog>
    </ion-content>
  </ion-page>
</template>

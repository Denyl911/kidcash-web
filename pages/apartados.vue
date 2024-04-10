<script setup>
import {
  menuOutline,
  notificationsOutline,
  addOutline,
  personCircleOutline,
  swapHorizontalOutline,
} from 'ionicons/icons';
const router = useIonRouter();
const toast = useToast();

const total = ref(0);
const modalAdd = ref(false);
const allApartados = ref([]);
const allAhorros = ref([]);
const obj = ref(0);
const ahorro = ref({
  amount: 0,
  apartado: '',
  positive: true,
  date: null,
});

onMounted(() => {
  const apartados = JSON.parse(localStorage.getItem('apartados')) || [];
  const ahorros = JSON.parse(localStorage.getItem('ahorros')) || [];
  allApartados.value = apartados;
  allAhorros.value = ahorros;
  ahorros.forEach((el) => {
    if (el.positive) {
      total.value += el.amount;
    } else {
      total.value -= el.amount;
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
    if (el.positive) {
      total.value += el.amount;
    } else {
      total.value -= el.amount;
    }
  });
});

const crearAhorro = () => {
  const ahorros = JSON.parse(localStorage.getItem('ahorros')) || [];
  ahorro.value.date = Date.now();
  ahorros.unshift(ahorro.value);
  localStorage.setItem('ahorros', JSON.stringify(ahorros));
  allAhorros.value = ahorros;
  modalAdd.value = false;
  router.push('/home');
  toast.info('Ahorro registrado exitosamente');
};

const setObj = () => {
  obj.value = allApartados.value.find((el) => el.name == ahorro.value.apartado);
};

const openAhorro = (name) => {
  modalAdd.value = true;
  ahorro.value.apartado = name;
  obj.value = allApartados.value.find((el) => el.name == ahorro.value.apartado);
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
}

function formatearFecha(fecha) {
  if (fecha) {
    fecha = new Date(fecha);
    const meses = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];

    const dia = fecha.getDate();
    const mesIndex = fecha.getMonth();
    const año = fecha.getFullYear();

    return `${meses[mesIndex]} ${dia}, ${año}`;
  }
}
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <section
        class="flex items-center justify-between text-green-700 text-md px-4 py-3 mb-0"
        style="background-color: #e4ebe9"
      >
        <ion-icon :icon="menuOutline"></ion-icon>
        <p class="font-bold m-0">MIS APARTADOS</p>
        <ion-icon :icon="notificationsOutline"></ion-icon>
      </section>
      <section
        class="text-green-700 text-center mt-0 py-10"
        style="background-color: #e4ebe9; border-radius: 0px 0px 50px 50px"
      >
        <h2 class="text-2xl mt-0 mb-4">AHORROS TOTALES</h2>
        <p class="text-3xl font-bold m-0">${{ sC(total) }}</p>
      </section>
      <section
        class="flex items-center justify-between text-white bg-green-600 text-md px-4 py-3 mt-6"
      >
        <ion-icon
          :icon="swapHorizontalOutline"
          @click="router.push('/home')"
          size="large"
        ></ion-icon>
        <ion-icon
          @click="router.push('/crearApartado')"
          :icon="addOutline"
          size="large"
        ></ion-icon>
        <ion-icon :icon="personCircleOutline" size="large"></ion-icon>
      </section>
      <section class="mt-5">
        <div
          v-for="ap in allApartados"
          class="grid grid-cols-10 rounded-lg shadow mx-4 p-3 gap-3 mb-3"
          @click="openAhorro(ap.name)"
        >
          <div class="col-span-3 flex items-center justify-center">
            <img
              src="/img/apartado.png"
              alt="Apartado"
              style="width: 6rem; height: auto"
            />
          </div>
          <div class="col-span-7">
            <h3 class="font-bold">{{ ap.name }}</h3>
            <h3 class="mt-3 text-gray-700">
              Objetivo:
              <span class="font-semibold text-green-600"
                >${{ sC(ap.amount) }}</span
              >
            </h3>
            <div
              class="bg-slate-100 rounded-full"
              style="width: 100%; height: 5px"
            >
              <div
                class="bg-green-500 rounded-full"
                :style="`width: ${(ap.actual * 100) / ap.amount}%; height: 5px`"
              ></div>
            </div>
            <div class="text-right mt-3">
              <p class="text-gray-400 me-4">
                <small>{{ formatearFecha(ap.createdAt) }}</small>
              </p>
            </div>
          </div>
        </div>
        <div
          class="grid grid-cols-10 rounded-lg shadow mx-4 p-3 gap-3 mb-32"
          style="border: 2px dashed #9f9f9f"
          @click="router.push('/crearApartado')"
        >
          <div class="col-span-3 flex items-center justify-center">
            <img
              src="/img/aparta2.png"
              alt="Apartado"
              style="width: 6rem; height: auto"
            />
          </div>
          <div class="col-span-7">
            <h3 class="font-bold text-green-700">Crear aparatado</h3>

            <h5 class="mt-3 text-gray-700 font-sm">
              Crea tu proximo guardadito
            </h5>
          </div>
        </div>
      </section>
      <Foot />

      <MazDialog v-model="modalAdd">
        <div class="text-center">
          <h2 class="font-bold text-green-600 mb-5" style="margin-top: -2rem">
            AHORRAR
          </h2>
          <div v-if="ahorro.apartado" class="mb-5">
            <h4 class="font-semibold">Objetivo: ${{ sC(obj.amount) }}</h4>
            <div
              class="bg-slate-100 rounded-full"
              style="width: 100%; height: 5px"
            >
              <div
                class="bg-green-500 rounded-full"
                :style="`width: ${
                  (obj.actual * 100) / obj.amount
                }%; height: 5px`"
              ></div>
            </div>
          </div>
          <MazSelect
            v-model="ahorro.apartado"
            @selected-option="setObj"
            label="Selecciona el apartado"
            color="success"
            :options="allApartados"
            option-value-key="name"
            option-label-key="name"
            option-input-value-key="name"
          />
          <MazSelect
            class="mt-4"
            v-model="ahorro.positive"
            label="Tipo de movimiento"
            color="success"
            :options="[
              { label: 'Ingreso', value: true },
              { label: 'Retiro', value: false },
            ]"
          />
          <MazInputNumber
            label="Cantidad"
            class="mt-4"
            v-model="ahorro.amount"
            placeholder="$50"
            :min="1"
            :step="1"
            color="success"
            style="min-width: 100%"
          />
          <MazBtn class="mt-7" color="success" @click="crearAhorro">
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

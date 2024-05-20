<script setup>
import { play } from 'ionicons/icons';
const router = useIonRouter();
const toast = useToast();

const cuentos = ref([
  {
    id: 1,
    name: 'El ahorro de la ardilla',
    img: '/img/ardilla.png',
    description: 'Ahorrar y planificar para futuro',
  },
  {
    id: 2,
    name: 'El valor de compartir',
    img: '/img/compartir.png',
    description: 'Solidaridad y ayuda mutua',
  },
  {
    id: 3,
    name: 'El viaje del billete perdido',
    img: '/img/billetera.jpg',
    description: 'Uso responsable del dinero',
  },
  {
    id: 4,
    name: 'La compra inteligente',
    img: '/img/comp-int.jpg',
    description: 'Comparar precios antes de comprar',
  },
  {
    id: 5,
    name: 'El tesoro escondido',
    img: '/img/tesoro.jpg',
    description: 'Uso sabio del dinero',
  },
  {
    id: 6,
    name: 'El dinero compartido',
    img: '/img/compart.jpg',
    description: 'Administrar y compartir dinero',
  },
  {
    id: 7,
    name: 'El regalo del ahorro',
    img: '/img/educash.png',
    description: 'Ahorrar para alcanzar metas',
  },
]);

const randCuento =
  cuentos.value[Math.floor(Math.random() * cuentos.value.length)];

const videos = ref([
  {
    id: 1,
    name: 'Ahorro para niños, como ahorrar',
    url: 'https://www.youtube.com/watch?v=O-GYvpCKJdk',
    img: '/img/v1.jpg'
  },
  {
    id: 2,
    name: 'A Juanita le aprietan sus zapatos',
    url: 'https://www.youtube.com/watch?v=oLIVRI7YtjI',
    img: '/img/v2.jpg'
    
  },
  {
    id: 3,
    name: 'El hábito que beneficia a la familia',
    url: 'https://www.youtube.com/watch?v=4M5Dw2-cEgE',
    img: '/img/v3.jpg'
  },
  {
    id: 4,
    name: 'Qué es el banco?',
    url: 'https://www.youtube.com/watch?v=USte3QP3UwQ',
    img: '/img/v4.jpg'
  },
  {
    id: 5,
    name: 'Que es el dinero? - Cuento',
    url: 'https://www.youtube.com/watch?v=A6913Y9bUBg',
    img: '/img/v5.jpg'
  },
  {
    id: 6,
    name: 'Cómo se gana el dinero?',
    url: 'https://www.youtube.com/watch?v=33Ld059BiS0',
    img: '/img/v6.jpg'
  },
  {
    id: 7,
    name: 'Qué es el dinero?',
    url: 'https://www.youtube.com/watch?v=9ujlPHPgugc',
    img: '/img/v7.jpg'
  },
]);

const lecciones = ref([
  {
    id: 1,
    name: 'La importancia del ahorro',
    img: '/img/ahorro.jpg',
    pass: false,
  },
  { id: 2, name: 'Gastos y presupuesto', img: '/img/presu.jpg', pass: false },
  { id: 3, name: 'Compras inteligentes', img: '/img/inteli.jpg', pass: false },
  { id: 4, name: 'Dar y compartir', img: '/img/compart.png', pass: false },
]);

const readedLec = ref([])

function getThumb(url, size) {
  var video, results, thumburl;

  if (url === null) {
    return '';
  }

  results = url.match('[\\?&]v=([^&#]*)');
  video = results === null ? url : results[1];

  if (size != null) {
    thumburl = 'http://img.youtube.com/vi/' + video + '/' + size + '.jpg';
  } else {
    thumburl = 'http://img.youtube.com/vi/' + video + '/mqdefault.jpg';
  }

  return thumburl;
}
console.log(getThumb(videos.value[0].url));

onMounted(() => {
  const lec = localStorage.getItem('lecciones');
  if (!lec) {
    localStorage.setItem('lecciones' ,JSON.stringify([]));
  } else {
    readedLec.value = JSON.parse(lec);
  }
});
onUpdated(() => {
  const lec = localStorage.getItem('lecciones');
  if (!lec) {
    localStorage.setItem('lecciones' ,JSON.stringify([]));
  } else {
    readedLec.value = JSON.parse(lec);
  }
});
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <Navigation title="APRENDE" />
      <section class="mx-4 mt-6">
        <h2 class="font-bold text-rose-400 mb-4">Cuentos</h2>
        <section
          class=""
          style="overflow-x: scroll; overflow-y: hidden; white-space: nowrap"
        >
          <div
            v-for="cu in cuentos"
            class="bg-rose-200 p-4 rounded-lg text-center mr-4"
            style="display: inline-block; width: 75vw"
          >
            <h4 class="mt-0 font-semibold">{{ cu.name }}</h4>
            <p>{{ cu.description }}</p>
            <img
              class="mx-auto"
              :src="cu.img"
              style="height: 8rem; width: auto; border-radius: 0.4rem"
              alt=""
            />
            <MazBtn
              class="mt-7 bg-rose-400"
              color="danger"
              block
              @click="router.push(`/cuentos/${cu.id}`)"
            >
              <ion-icon :icon="play"></ion-icon> Comenzar
            </MazBtn>
          </div>
        </section>
      </section>
      <section class="mx-4 mt-8">
        <h4 class="font-bold text-rose-400 mb-4">Lecciones</h4>
        <section
          style="overflow-x: scroll; overflow-y: hidden; white-space: nowrap"
        >
          <div
            v-for="lec in lecciones"
            style="width: 90%; display: inline-block"
          >
            <div
            :class="readedLec.includes(lec.id) ? 'bg-green-200' : 'bg-rose-200'"
              class="grid grid-cols-12  p-4 rounded-lg flex items-center mr-4"
              @click="router.push(`/lecciones/${lec.id}`)"
            >
              <div class="col-span-8">
                <p class="font-bold text-md">{{ lec.name }}</p>
              </div>
              <div class="col-span-4">
                <img
                  class="mx-auto"
                  :src="lec.img"
                  style="width: 50%; height: auto; border-radius: 0.4rem"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section class="mx-4 mt-8">
        <h2 class="font-bold text-rose-400 mb-4">Videos</h2>
        <section
          class=""
          style="overflow-x: scroll; overflow-y: hidden; white-space: nowrap"
        >
          <div
            v-for="vi in videos"
            class="bg-rose-200 p-4 rounded-lg text-center mr-4"
            style="display: inline-block; width: 75vw"
          >
            <h4 class="mt-0 font-semibold text truncate hover:text-clip">
              {{ vi.name }}
            </h4>
            <!-- <p>Descripcion lorem</p> -->
            <img
              class="mx-auto"
              :src="vi.img"
              style="height: 8rem; width: auto; border-radius: 0.4rem"
              alt=""
            />
            <MazBtn
              class="mt-7 bg-rose-400"
              color="danger"
              block
              @click="router.push(`/videos/${vi.id}`)"
            >
              <ion-icon :icon="play"></ion-icon> Ver
            </MazBtn>
          </div>
        </section>
      </section>
      <section class="mx-4 mt-8 mb-32">
        <h4 class="font-bold text-rose-400 mb-4">Lectura diaria</h4>
        <div
          class="grid grid-cols-12 bg-rose-200 p-4 rounded-lg flex items-center"
          style="width: 90%"
          @click="router.push(`/cuentos/${randCuento.id}`)"
        >
          <div class="col-span-8">
            <h5 class="mt-0 font-semibold">{{ randCuento.name }}</h5>
            <p>{{ randCuento.description }}</p>
          </div>
          <div class="col-span-4">
            <img
              class="mx-auto"
              :src="randCuento.img"
              style="width: 50%; height: auto; border-radius: 0.4rem"
              alt=""
            />
          </div>
        </div>
      </section>

      <Foot />
    </ion-content>
  </ion-page>
</template>

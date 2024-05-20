<script setup>
import { play, checkmarkOutline } from 'ionicons/icons';
import { useRoute } from 'vue-router';
const router = useIonRouter();
const route = useRoute()
const toast = useToast();




const total = ref(0);
const modalOpen = ref(false);

onMounted(() => {
  const apartados = localStorage.getItem('apartados') || [];
  if (apartados.length == 0) {
    modalOpen.value = true;
  }
});

const cuentos = ref([
  {
    id: 1,
    name: 'El ahorro de la ardilla',
    img: '/img/ardilla.png',
    description: 'Ahorrar y planificar para futuro',
    p1: 'Había una vez una pequeña ardilla llamada Lola que vivía en un hermoso bosque. Lola era muy trabajadora y siempre se aseguraba de tener suficiente comida para el invierno. Todos los días, salía a buscar nueces y bayas, que guardaba en su madriguera.',
    p2: 'Un día, mientras Lola recolectaba comida, se encontró con sus amigos, el conejo y el pájaro. Ambos estaban preocupados por el invierno y cómo conseguir comida suficiente. Lola les mostró su madriguera llena de nueces y bayas y les explicó cómo había ahorrado durante el verano para estar preparada.',
    p3: 'El conejo y el pájaro aprendieron la importancia de ahorrar y planificar para el futuro. Juntos, decidieron trabajar juntos y compartir sus recursos para que todos pudieran disfrutar del invierno sin preocupaciones.',
  },
  {
    id: 2,
    name: 'El valor de compartir',
    img: '/img/compartir.png',
    description: 'Solidaridad y ayuda mutua',
    p1: 'En un bosque muy lejano, vivían muchos animales diferentes: conejos, ardillas, pájaros, y muchos más. Un día, una fuerte tormenta golpeó el bosque y derribó muchos árboles, destruyendo las casas de algunos animales y dejándolos sin comida.',
    p2: 'Los animales se reunieron para ver cómo podían ayudarse mutuamente. El conejo propuso que cada animal compartiera lo que tenía para que todos pudieran tener suficiente comida y refugio. Todos estuvieron de acuerdo y trabajaron juntos para reconstruir las casas y recolectar comida.',
    p3: 'Al final, todos los animales aprendieron que cuando se unen y comparten, pueden superar cualquier dificultad juntos. Aprendieron el valor de la solidaridad y la importancia de ayudarse mutuamente.',
  },
  {
    id: 3,
    name: 'El viaje del billete perdido',
    img: '/img/billetera.jpg',
    description: 'Uso responsable del dinero',
    p1: 'Un día, un billete de cinco dólares salió volando de los bolsillos de un niño mientras jugaba en el parque. El billete comenzó su viaje, siendo llevado por el viento a diferentes lugares.',
    p2: 'Primero, el billete fue encontrado por un anciano que lo guardó en su bolsillo para comprar comida. Luego, el billete fue dado como cambio a una niña que lo guardó en su alcancía para ahorrar para un juguete nuevo. Finalmente, el billete fue usado por un joven para comprar libros para la escuela.',
    p3: 'El billete aprendió que su valor no estaba en el lugar donde estaba, sino en cómo se usaba. Aprendió que el dinero puede cambiar de manos, pero lo importante es cómo se administra y se utiliza de manera responsable.',
  },
  {
    id: 4,
    name: 'La compra inteligente',
    img: '/img/comp-int.jpg',
    description: 'Comparar precios antes de comprar',
    p1: 'Había una vez un niño llamado Juan que quería comprar un juguete nuevo. Antes de ir a la tienda, su mamá le enseñó a comparar precios y buscar ofertas para asegurarse de obtener el mejor precio.',
    p2: 'Juan visitó varias tiendas y encontró el juguete que quería a diferentes precios. Después de comparar, descubrió que una tienda ofrecía un descuento especial, por lo que decidió comprar allí y ahorró dinero.',
    p3: 'Juan aprendió que hacer compras inteligentes significa comparar precios y buscar ofertas antes de tomar una decisión.',
  },
  {
    id: 5,
    name: 'El tesoro escondido',
    img: '/img/tesoro.jpg',
    description: 'Uso sabio del dinero',
    p1: 'Un grupo de amigos estaba jugando en el parque cuando descubrieron un mapa del tesoro. Decidieron seguir el mapa y buscar el tesoro juntos.',
    p2: 'Después de buscar en el parque, encontraron una caja enterrada. Al abrirla, descubrieron monedas de oro y plata. Los amigos decidieron guardar el tesoro y usarlo sabiamente.',
    p3: 'Aprendieron que el dinero es como un tesoro y debe ser guardado y utilizado con cuidado.',
  },
  {
    id: 6,
    name: 'El dinero compartido',
    img: '/img/compart.jpg',
    description: 'Administrar y compartir dinero',
    p1: 'En una familia, cada miembro recibía una pequeña cantidad de dinero cada semana. La mamá les enseñó a sus hijos a dividir su dinero en tres partes: una parte para gastar, una parte para guardar y una parte para dar a los demás.',
    p2: 'Los niños aprendieron a administrar su dinero de manera responsable y a compartir con los demás. A medida que crecían, desarrollaron hábitos financieros saludables y aprendieron el valor de compartir y ayudar a los demás.',
    p3: '',
  },
  {
    id: 7,
    name: 'El regalo del ahorro',
    img: '/img/educash.png',
    description: 'Ahorrar para alcanzar metas',
    p1: 'María quería comprar un regalo especial para el cumpleaños de su mamá, pero no tenía suficiente dinero. Decidió empezar a ahorrar una pequeña cantidad cada semana.',
    p2: 'Después de algunas semanas, María tenía suficiente dinero para comprar el regalo. Su mamá estaba muy feliz y orgullosa de ella por haber ahorrado y planeado con anticipación.',
    p3: 'María aprendió que el ahorro regular puede ayudarte a alcanzar tus metas financieras.',
  },
]);

const cuento = cuentos.value.find((el) => el.id == route.params.id) || {
  id: '',
  name: '',
  img: '',
  description: '',
  p1: '',
  p2: '',
  p3: '',
};
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding ">
      <Navigation title="CUENTOS" />
      <section class="mx-4 mt-6">
        <h1 class="font-bold text-rose-400 mb-4">{{ cuento.name }}</h1>
        <section class="text-left" style="">
          <p class="mb-3">
            {{ cuento.p1 }}
          </p>
          <p class="mb-3">
            {{ cuento.p2 }}
          </p>
          <p class="mb-3">
            {{ cuento.p3 }}
          </p>
          <img class="rounded mx-auto w-60 h-auto" :src="cuento.img" alt="">
          <MazBtn class="mt-7 bg-rose-400 mb-32" color="danger" block @click="router.push('/aprende')">
            Completar Lectura <ion-icon class="text-lg ml-4" :icon="checkmarkOutline"></ion-icon> 
          </MazBtn>
        </section>
      </section>
      <Foot />
    </ion-content>
  </ion-page>
</template>

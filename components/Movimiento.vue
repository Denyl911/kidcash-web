<script setup>
const props = defineProps(['title', 'date', 'amount', 'type']);
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
function formatearHora(fecha) {
  fecha = new Date(fecha);
  let hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const esPM = hora >= 12;

  if (hora > 12) {
    hora -= 12;
  } else if (hora === 0) {
    hora = 12;
  }

  const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;

  return `${hora}:${minutosFormateados} ${esPM ? 'PM' : 'AM'}`;
}

function sC(val) {
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
</script>

<template>
  <div class="grid grid-cols-10 mx-5 mt-3" style="font-size: 1rem">
    <div class="col-span-2">
      <img
        class=""
        :src="`/img/${props.type == 'Ingreso' ? 'happy' : 'angry'}.png`"
        alt=""
      />
    </div>
    <div class="col-span-6">
      <p class="m-0">{{ props.title }}</p>
      <p class="text-gray-400">
        <small>{{ formatearFecha(props.date) }}</small>
      </p>
    </div>
    <div class="col-span-2">
      <p class="m-0">
        {{ props.type == 'Ingreso' ? '+' : '-' }}${{ sC(props.amount) }}
      </p>
      <p class="text-gray-400">
        <small>{{ formatearHora(props.date) }}</small>
      </p>
    </div>
  </div>
</template>

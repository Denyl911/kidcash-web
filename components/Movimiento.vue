<script setup>
const props = defineProps(['title', 'date', 'amount', 'positive']);
</script>

<template>
  <div class="grid grid-cols-12 mx-5 mt-3" style="font-size: 1rem">
    <div class="col-span-2">
      <img class="" src="/img/happy.png" alt="" />
    </div>
    <div class="col-span-8">
      <p class="m-0">{{ props.title }}</p>
      <p class="text-gray-400"><small>Mayo 26,2024</small></p>
    </div>
    <div class="col-span-2">
      <p class="m-0">+$10.00</p>
      <p class="text-gray-400"><small>1:34 PM</small></p>
    </div>
  </div>
</template>

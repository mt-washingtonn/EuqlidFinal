<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import { AkChevronLeft } from "@kalimahapps/vue-icons";
import { AkBookOpen } from "@kalimahapps/vue-icons";
import { ref, onMounted, reactive, } from 'vue';
import axios from 'axios'


const dates = ref(new Date())
const day = ref(dates.value.getDate())
const monthIndex = ref(dates.value.getMonth())
const year = ref(dates.value.getFullYear())
const months = (["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"])
const days = (['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье',])
const monthName = ref(months[monthIndex.value])
const dayName = ref(days[day.value])

const formattedDate = ref(dayName.value + ", " + day.value + ' ' + monthName.value + " " + year.value)
console.log(formattedDate.value);

const date = ref(new Date(formattedDate.value))


const journals = ref([])





onMounted(async () => {
  try {
    const { data } = await axios.get('https://64a91560cae0ffd1.mokky.dev/journallist')
    journals.value = data
  }
  catch (err) {
    console.log(err)
  }
})





</script>


<template>
  <ion-page>
    <ion-content>
      <router-link to="tabs/tab1">
        <header>

          <AkChevronLeft class="size-8 mt-8 ml-8" />

        </header>
      </router-link>
      <div class="m-8">
        <h1 class="font-bold text-xl text-center">{{ formattedDate }}</h1>
        <div class="mt-6 flex justify-center">
          <VDatePicker view="weekly" v-model="date" />
        </div>



        <div class="flex flex-col mt-6">
          <div class="grid grid-flow-col justify-between p-4 mt-2  border-2 rounded-2xl shadow-xl"
            v-for="journal in journals" :key="journal.name">
            <div class="row-start-1">
              <h1 class="text-lg truncate max-w-56">{{ journal.name }}</h1>
              <p>{{ journal.time }}</p>
            </div>
            <div class="row-end-2 row-span-2 mt-2 ">
              <AkBookOpen class="size-8" />
            </div>
          </div>
          <!-- <div class="grid grid-flow-col justify-between p-4 mt-2  border-2 rounded-2xl shadow-xl">
            <div class="row-start-1">
              <h1 class="text-lg">Русский язык</h1>
              <p>12:40 - 14:00</p>
            </div>
            <div class="row-end-2 row-span-2 mt-2 ml-16">
              <AkBookOpen class="size-8" />
            </div>
          </div>
          <div class="grid grid-flow-col justify-between p-4 mt-2  border-2 rounded-2xl shadow-xl">
            <div class="row-start-1">
              <h1 class="text-lg">Русский язык</h1>
              <p>12:40 - 14:00</p>
            </div>
            <div class="row-end-2 row-span-2 mt-2 ml-16">
              <AkBookOpen class="size-8" />
            </div>
          </div>
          <div class="grid grid-flow-col justify-between p-4 mt-2  border-2 rounded-2xl shadow-xl">
            <div class="row-start-1">
              <h1 class="text-lg">Русский язык</h1>
              <p>12:40 - 14:00</p>
            </div>
            <div class="row-end-2 row-span-2 mt-2 ml-16">
              <AkBookOpen class="size-8" />
            </div>
          </div>
          <div class="grid grid-flow-col justify-between p-4 mt-2  border-2 rounded-2xl shadow-xl">
            <div class="row-start-1">
              <h1 class="text-lg">Русский язык</h1>
              <p>12:40 - 14:00</p>
            </div>
            <div class="row-end-2 row-span-2 mt-2 ml-16">
              <AkBookOpen class="size-8" />
            </div>
          </div>
          <div class="grid grid-flow-col justify-between p-4 mt-2  border-2 rounded-2xl shadow-xl">
            <div class="row-start-1">
              <h1 class="text-lg">Русский язык</h1>
              <p>12:40 - 14:00</p>
            </div>
            <div class="row-end-2 row-span-2 mt-2 ml-16">
              <AkBookOpen class="size-8" />
            </div>
          </div> -->

        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

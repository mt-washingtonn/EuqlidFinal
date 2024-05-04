<script setup>
import { AkChevronLeft } from "@kalimahapps/vue-icons";
import { IonPage, IonContent } from '@ionic/vue'
import axios from 'axios'
import { ref, onMounted } from "vue";


const messages = ref([])

onMounted(async () => {
    try {
        const { data } = await axios.get('https://64a91560cae0ffd1.mokky.dev/messages')
        messages.value = data
    }

    catch (err) {
        console.log(err)
    }
})

</script>

<template>
    <ion-page>
        <ion-content>
            <div class="bg-blue-400">
                <header class="pt-8 pb-12 px-8">

                    <h1 class="text-white text-xl mt-6">Сообщения</h1>
                    <div class="flex gap-2 mt-6 text-center">
                        <p class="border-2 border-blue-500 rounded-full bg-white px-8 text-blue-500">Все</p>
                        <p class="border-2 border-blue-500 rounded-full bg-white px-4 text-slate-400">Не прочитанные</p>
                    </div>
                </header>
                <div class="p-6 bg-white rounded-t-2xl z-40">
                    <h1 class="text-xl">Сегодня</h1>
                    <div class="flex mt-8" v-for="message in messages" :key="message.id">
                        <img :src="message.img" alt="" class="border rounded-lg size-14">
                        <div class="flex flex-col text-slate-400 absolute right-0 mr-6 text-center">
                            <p class="text-sm">{{ message.time }}</p>
                            <p class="rounded-full text-white mt-2 px-4 text-sm py-2 bg-blue-600">1</p>
                        </div>
                        <router-link to="/msg">
                            <div class="flex flex-col ml-6 max-w-64 max-h-32">
                                <h1 class="font-bold max-w-48">{{ message.username }}</h1>
                                <p class="mt-2 text-slate-400 text-sm truncate w-48">{{ message.text }}
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <!-- <div class="flex mt-8">
                        <img src="./img/lol1.jpeg" alt="" class="border rounded-lg size-14">
                        <div class="flex flex-col text-slate-400 absolute right-0 mr-6 text-center">
                            <p class="text-sm">14:10</p>
                            <p class="rounded-full text-white mt-2 px-4 text-sm py-2 bg-blue-600">1</p>
                        </div>
                        <div class="flex flex-col ml-6">
                            <h1 class="font-bold">Зауре Байдильдаевна</h1>
                            <p class="text-slate-400 text-sm">Здраствуйте можно ли скинуть учеб. материалы?</p>
                        </div>
                    </div>
                    <div class="flex mt-8">
                        <img src="./img/lol1.jpeg" alt="" class="border rounded-lg size-14">
                        <div class="flex flex-col text-slate-400 absolute right-0 mr-6 text-center">
                            <p class="text-sm">14:10</p>
                            <p class="rounded-full text-white mt-2 px-4 text-sm py-2 bg-blue-600">1</p>
                        </div>
                        <div class="flex flex-col ml-6">
                            <h1 class="font-bold">Зауре Байдильдаевна</h1>
                            <p class="text-slate-400 text-sm">Здраствуйте можно ли скинуть учеб. материалы?</p>
                        </div>
                    </div>
                    <div class="flex mt-8">
                        <img src="./img/lol1.jpeg" alt="" class="border rounded-lg size-14">
                        <div class="flex flex-col text-slate-400 absolute right-0 mr-6 text-center">
                            <p class="text-sm">14:10</p>
                            <p class="rounded-full text-white mt-2 px-4 text-sm py-2 bg-blue-600">1</p>
                        </div>
                        <div class="flex flex-col ml-6">
                            <h1 class="font-bold">Зауре Байдильдаевна</h1>
                            <p class="text-slate-400 text-sm">Здраствуйте можно ли скинуть учеб. материалы?</p>
                        </div>
                    </div>
                    <div class="flex mt-8">
                        <img src="./img/lol1.jpeg" alt="" class="border rounded-lg size-14">
                        <div class="flex flex-col text-slate-400 absolute right-0 mr-6 text-center">
                            <p class="text-sm">14:10</p>
                        </div>
                        <div class="flex flex-col ml-6">
                            <h1 class="font-bold">Зауре Байдильдаевна</h1>
                            <p class="text-slate-400 text-sm">Здраствуйте можно ли скинуть учеб. материалы?</p>
                        </div>
                    </div> -->
                    <div class="mt-8">
                        <h1 class="text-xl">Вчера</h1>
                        <div class="flex mt-8">
                            <img src="./img/lol1.jpeg" alt="" class="border rounded-lg size-14">
                            <div class="flex flex-col text-slate-400 absolute right-0 mr-6 text-center">
                                <p class="text-sm">14:10</p>
                            </div>
                            <div class="flex flex-col ml-6 max-w-64 max-h-32">
                                <h1 class="font-bold">Зауре Байдильдаевна</h1>
                                <p class="text-slate-400 text-sm ">Здраствуйте можно ли скинуть учеб.
                                    материалы?</p>
                            </div>
                        </div>
                        <div class="flex mt-8">
                            <img src="./img/lol1.jpeg" alt="" class="border rounded-lg size-14">
                            <div class="flex flex-col text-slate-400 absolute right-0 mr-6 text-center">
                                <p class="text-sm">14:10</p>
                            </div>
                            <div class="flex flex-col ml-6">
                                <h1 class="font-bold">Зауре Байдильдаевна</h1>
                                <p class="text-slate-400 text-sm">Здраствуйте можно ли скинуть учеб. материалы?</p>
                            </div>
                        </div>
                        <div class="flex mt-8">
                            <img src="./img/lol1.jpeg" alt="" class="border rounded-lg size-14">
                            <div class="flex flex-col text-slate-400 absolute right-0 mr-6 text-center">
                                <p class="text-sm">14:10</p>
                            </div>
                            <div class="flex flex-col ml-6">
                                <h1 class="font-bold">Зауре Байдильдаевна</h1>
                                <p class="text-slate-400 text-sm">Здраствуйте можно ли скинуть учеб. материалы?</p>
                            </div>
                        </div>
                        <div class="flex mt-8">
                            <img src="./img/lol1.jpeg" alt="" class="border rounded-lg size-14">
                            <div class="flex flex-col text-slate-400 absolute right-0 mr-6 text-center">
                                <p class="text-sm">14:10</p>
                            </div>
                            <div class="flex flex-col ml-6">
                                <h1 class="font-bold">Зауре Байдильдаевна</h1>
                                <p class="text-slate-400 text-sm">Здраствуйте можно ли скинуть учеб. материалы?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
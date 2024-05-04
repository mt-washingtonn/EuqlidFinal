<script setup>
import { AkChevronLeft } from "@kalimahapps/vue-icons";
import { IonPage, IonContent } from '@ionic/vue'
</script>

<template>
    <ion-page>
        <ion-content>
            <div class="m-8">
                <header class="flex text-center">
                    <router-link to="/tabs/tab5">
                        <AkChevronLeft class="size-8" />
                    </router-link>
                    <h1 class="grow text-xl font-bold">Учебное заведение</h1>
                </header>
                <div class="flex flex-col items-center gap-2  mt-12">
                    <img src="./img/college.jpeg" alt="" class="shadow-xl rounded-2xl">
                    <h1 class="font-bold text-xl text-center mt-2">ГККП «Высший технический колледж»</h1>
                </div>
                <div class="mt-8">
                    <h1 class="font-bold text-xl">Адрес</h1>
                    <div class="mt-2 border-2 rounded-2xl px-6 py-3 text-xl">
                        Акмолинская область, г.Кокшетау . Ж.Ташенова 115
                    </div>
                    <h1 class="font-bold text-xl mt-6">Email</h1>
                    <div class="mt-2 border-2 rounded-2xl px-6 py-3 text-xl">
                        Politeh127@aqmoedu.kz
                    </div>
                    <h1 class="font-bold text-xl mt-6">Телефон</h1>
                    <div class="mt-2 border-2 rounded-2xl px-6 py-3 text-xl">
                        +7 (716) 250-90-10
                    </div>
                    <h1 class="font-bold text-xl mt-6">Вид организации образования</h1>
                    <div class="mt-2 border-2 rounded-2xl px-6 py-3 text-xl">
                        Высший Колледж
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
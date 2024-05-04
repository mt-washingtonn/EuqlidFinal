<script setup>
import { AkChevronLeft } from "@kalimahapps/vue-icons";
import { IonPage, IonContent } from '@ionic/vue';
</script>

<template>
    <ion-page>
        <ion-content>
            <div class="m-8">
                <header class="flex flex-col">
                    <router-link to="tabs/tab1">
                        <AkChevronLeft class="size-8" />
                    </router-link>
                    <h1 class="text-2xl font-bold mt-6">Успеваемость</h1>
                    <div class="flex mt-6 gap-2">
                        <p class="text-sky-600 border-2 border-sky-600 rounded-full px-6 ">Общая</p>
                        <p class="text-white bg-zinc-300 rounded-full px-6 ">По семестрам</p>
                    </div>
                </header>
                <div class="mt-12 flex flex-col gap-2">
                    <div class="flex justify-between border-2  rounded-2xl text-xl">
                        <p class="p-4">Химия</p>
                        <div class="border-2 p-4 rounded-2xl bg-blue-500 text-white">78</div>
                    </div>
                    <div class="flex justify-between border-2  rounded-2xl text-xl">
                        <p class="p-4">Английский</p>
                        <div class="border-2 p-4 rounded-2xl bg-blue-500 text-white">78</div>
                    </div>
                    <div class="flex justify-between border-2  rounded-2xl text-xl">
                        <p class="p-4">Биология</p>
                        <div class="border-2 p-4 rounded-2xl bg-blue-500 text-white">78</div>
                    </div>
                    <div class="flex justify-between border-2  rounded-2xl text-xl">
                        <p class="p-4">Веб-разработка</p>
                        <div class="border-2 p-4 rounded-2xl bg-blue-500 text-white">78</div>
                    </div>
                    <div class="flex justify-between border-2  rounded-2xl text-xl">
                        <p class="p-4">Физика</p>
                        <div class="border-2 p-4 rounded-2xl bg-blue-500 text-white">78</div>
                    </div>
                    <div class="flex justify-between border-2  rounded-2xl text-xl">
                        <p class="p-4">Математика</p>
                        <div class="border-2 p-4 rounded-2xl bg-blue-500 text-white">78</div>
                    </div>
                    <div class="flex justify-between border-2  rounded-2xl text-xl">
                        <p class="p-4">ОБЖ</p>
                        <div class="border-2 p-4 rounded-2xl bg-blue-500 text-white">78</div>
                    </div>
                    <div class="flex justify-between border-2  rounded-2xl text-xl">
                        <p class="p-4">Физическая культура</p>
                        <div class="border-2 p-4 rounded-2xl bg-blue-500 text-white text-center">78</div>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
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
                    <h1 class="grow text-xl font-bold">Резюме</h1>
                </header>
                <div class="flex flex-col items-center gap-2  mt-12">
                    <img src="./img/lol1.jpeg" alt="" class="border-4 border-orange-400 p-2 rounded-full size-24">
                    <h1 class="font-bold text-xl">Айсулу Нашкенова</h1>
                    <p class="text-sm">VTK college student</p>
                </div>
                <div class="mt-8">
                    <h1 class="font-bold text-xl">Основная информация</h1>
                    <textarea class="mt-2 border-2 rounded-2xl px-6 py-3 relative text-wrap h-32 w-full"
                        placeholder="Можете дополнить информацию"></textarea>
                    <h1 class="font-bold text-xl mt-6">О себе</h1>
                    <textarea class="mt-2 border-2 rounded-2xl px-6 py-3 h-32 w-full"
                        placeholder="Можете дополнить информацию"></textarea>
                    <h1 class="font-bold text-xl mt-6">Учебное заведение</h1>
                    <textarea class="mt-2 border-2 rounded-2xl px-6 py-3 h-32 w-full"
                        placeholder="Можете дополнить информацию"></textarea>
                    <h1 class="font-bold text-xl mt-6">Опыт работы</h1>
                    <textarea class="mt-2 border-2 rounded-2xl px-6 py-3 h-32 w-full"
                        placeholder="Добавить опыт работы"></textarea>
                    <h1 class="font-bold text-xl mt-6">Владение языками</h1>
                    <textarea class="mt-2 border-2 rounded-2xl px-6 py-3 h-32 w-full"
                        placeholder="Добавить языки"></textarea>
                    <h1 class="font-bold text-xl mt-6">Навыки</h1>
                    <textarea class="mt-2 border-2 rounded-2xl px-6 py-3 h-32 w-full"
                        placeholder="Добавить навыки"></textarea>
                    <h1 class="font-bold text-xl mt-6">Достижения</h1>
                    <textarea class="mt-2 border-2 rounded-2xl px-6 py-3 h-32 w-full"
                        placeholder="Добавить навыки"></textarea>
                    <h1 class="font-bold text-xl mt-6">Портфолио</h1>
                    <textarea class="mt-2 border-2 rounded-2xl px-6 py-3 h-32 w-full"
                        placeholder="Добавить работы"></textarea>

                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
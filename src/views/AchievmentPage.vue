<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import { AkChevronLeft } from "@kalimahapps/vue-icons";
</script>


<template>

    <ion-page>

        <ion-content>
            <div class="m-8">
                <header class="flex">
                    <router-link to="tabs/tab1">
                        <AkChevronLeft class="size-8" />
                    </router-link>
                    <h1 class="font-bold text-2xl pl-8">Библиотека</h1>
                </header>

                <div class="mt-12 flex flex-col gap-2">
                    <router-link to="/euqbook">
                        <div class="flex flex-col justify-between border-2 shadow-xl rounded-2xl text-xl">
                            <img src="./img/lol1.jpeg" alt="" class=" size-34 rounded-2xl">
                            <div class="p-6 flex flex-col text-center">
                                <p class="text-xl">Л.Н.Толстой</p>
                                <p class="text-xl">Война и Мир</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>


        </ion-content>

    </ion-page>

</template>
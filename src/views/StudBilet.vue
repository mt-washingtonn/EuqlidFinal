<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import { AkChevronLeft } from "@kalimahapps/vue-icons";


</script>


<template>

    <ion-page>

        <ion-content>
            <div class="m-8">
                <header class="flex">
                    <router-link to="tabs/tab5">
                        <AkChevronLeft class="size-8" />
                    </router-link>
                    <h1 class="font-bold text-2xl pl-8">Студенческий билет</h1>
                </header>

                <div class="flex mt-40 flex-col gap-2 text-white">
                    <router-link to="/euqbook">
                        <div class="flex flex-col justify-between border-2 bg-blue-400 shadow-xl rounded-2xl text-xl">
                            <img src="./img/lol1.jpeg" alt="" class=" size-34 rounded-2xl">
                            <div class="p-6 flex flex-col text-center">
                                <p class="text-xl">Айсулу Нашкенова</p>
                                <p class="text-xl">Высший Технический Колледж г.Кокшетау</p>
                                <p class="text-xl">Студент</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>



        </ion-content>

    </ion-page>

</template>
<script setup>
import { AkChevronLeft } from "@kalimahapps/vue-icons";
import { BsEmojiSmile } from "@kalimahapps/vue-icons";
import { AnOutlinedPaperClip, CaOverflowMenuHorizontal } from "@kalimahapps/vue-icons";
import { IonPage, IonContent } from '@ionic/vue'
</script>


<template>

    <ion-page>


        <ion-content>
            <div>
                <div class="border-b fixed top-0 w-full">
                    <header class="mt-8 ml-8 mr-8 mb-4 flex justify-between">
                        <router-link to="/tabs/tab4">
                            <AkChevronLeft class="size-8" />
                        </router-link>
                        <h1 class="font-bold text-lg text-center">Зауре Байдильдаевна</h1>
                        <CaOverflowMenuHorizontal class="size-8" />
                    </header>
                </div>
                <div class="top-2 mt-4 ml-8 mr-8 flex flex-col ">
                    <div class="mt-24 ml-32 flex text-right">
                        <p class="bg-gray-200 rounded-full p-2 "> спасибо за помощь!!!</p>
                    </div>
                    <div class="flex mt-8">
                        <img src="./img/lol1.jpeg" alt="" class="rounded-full size-12 m-2">
                        <div class="border-2 rounded-full px-4 py-2">
                            <p>Не за что, в следующий раз будь внимательнее</p>
                        </div>
                    </div>
                    <div class="mt-8 flex text-right">
                        <p class="bg-gray-200 rounded-full px-4 py-2 "> Здраствуйте можно ли скинуть
                            учебные
                            материалы?
                        </p>
                    </div>
                </div>
                <div class="border-t fixed bottom-0 w-full">
                    <footer class="m-4 flex">
                        <BsEmojiSmile class="size-6 text-slate-400" />
                        <input type="text" placeholder="Напишите что-нибудь здесь" class="w-full ml-2">
                        <AnOutlinedPaperClip class="size-6 text-slate-400" />
                    </footer>
                </div>
            </div>
        </ion-content>


    </ion-page>

</template>
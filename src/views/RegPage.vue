<script setup>
import { IonPage, IonContent } from '@ionic/vue'
import { AkChevronLeft } from "@kalimahapps/vue-icons";
</script>


<template>

    <ion-page>

        <ion-content>



            <header class="absolute top-8 left-8">
                <router-link to="/loginpage">
                    <AkChevronLeft class="size-8" />
                </router-link>
            </header>


            <div class="h-full mt-14 ml-8 mr-8 flex flex-col justify-center">



                <div class="mt-4 text-center text-4xl font-bold mb-8">
                    <h1 class="">Регистрация</h1>
                </div>

                <div class="flex flex-col">
                    <div class="pl-4 pr-4">
                        <h1 class="text-xl font-bold">ФИО</h1>
                        <input type="text" class="rounded-2xl border-2 mt-2 p-4 w-full" placeholder="Введите свое ФИО">
                    </div>
                    <div class="pl-4 pr-4 pt-2">
                        <h1 class="text-xl font-bold">Телефон</h1>
                        <input type="number" class="rounded-2xl border-2 mt-2 p-4 w-full"
                            placeholder="Введите свой телефон">
                    </div>
                    <div class="pl-4 pr-4 pt-2">
                        <h1 class="text-xl font-bold">Пароль</h1>
                        <input type="number" class="rounded-2xl border-2 mt-2 p-4 w-full"
                            placeholder="Введите свой пароль">
                    </div>
                </div>

                <div class="p-4 text-center">
                    <p class="rounded-2xl border-2 mt-2 p-4 w-full bg-blue-500 text-white">Далее</p>
                </div>

                <div class="p-4 flex flex-col gap-4 text-center">

                    <p class="text-slate-400 underline">Восстановить пароль</p>
                    <p class="font-bold">Зарегестрироваться с помощью</p>

                    <div class="flex gap-4 justify-center p-4">
                        <img src="./img/lol1.jpeg" alt="" class="size-12 rounded-full">
                        <img src="./img/lol1.jpeg" alt="" class="size-12 rounded-full">
                        <img src="./img/lol1.jpeg" alt="" class="size-12 rounded-full">
                    </div>

                </div>



            </div>

        </ion-content>

    </ion-page>

</template>
<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import { AkChevronLeft } from "@kalimahapps/vue-icons";
import { AnOutlinedUser } from "@kalimahapps/vue-icons";
import { BsJournalText } from "@kalimahapps/vue-icons";
import { IoOutlineFlash } from "@kalimahapps/vue-icons";
import { AkStar } from "@kalimahapps/vue-icons";
import { FaTicketSimple } from "@kalimahapps/vue-icons";
import { IcJournal } from "@kalimahapps/vue-icons";
import { BxSupport } from "@kalimahapps/vue-icons";
import { FlFilledSettings } from "@kalimahapps/vue-icons";
</script>


<template>
    <ion-page>
        <ion-content>
            <div class="m-8">
                <header>

                </header>
                <div class="flex flex-col items-center gap-2">
                    <img src="./img/lol1.jpeg" alt="" class="border-4 border-orange-400 p-2 rounded-full size-24">
                    <h1 class="font-bold text-xl">Айсулу Нашкенова</h1>
                    <p class="text-sm">VTK college student</p>
                    <h1 class="font-bold text-4xl text-blue-500">3.66</h1>
                    <p class="font-bold text-sm text-blue-500">GPA</p>
                </div>

                <div
                    class="flex justify-center items-center mt-4 p-2 border-2 rounded-2xl text-center shadow-xl w-full">
                    <router-link to="/studbilet">
                        <div class="flex flex-col items-center  m-2">
                            <AnOutlinedUser class="size-6" />
                            <p class="text-xs mt-2">Студенческий билет</p>
                        </div>
                    </router-link>
                    <router-link to="/busbilet">
                        <div class="flex flex-col  items-center  m-2">
                            <BsJournalText class="size-6" />
                            <p class="text-xs mt-2">Проездной</p>
                        </div>
                    </router-link>
                    <router-link to="/resumepage">
                        <div class="flex flex-col items-center  m-2">
                            <IoOutlineFlash class="size-6" />
                            <p class="text-xs mt-2">Резюме</p>
                        </div>
                    </router-link>
                    <router-link to="/collegepage">
                        <div class="flex flex-col items-center   m-2">
                            <AkStar class="size-6" />
                            <p class="text-xs mt-2">Контакты колледжа</p>
                        </div>
                    </router-link>
                </div>

            </div>
            <div class="m-8">
                <h1 class="font-bold text-xl">Группа</h1>
                <div class="mt-2 border-2 rounded-2xl px-6 py-3 text-xl">
                    ВТ-21-П
                </div>
                <h1 class="font-bold text-xl mt-6">Курс</h1>
                <div class="mt-2 border-2 rounded-2xl px-6 py-3 text-xl">
                    5
                </div>
                <h1 class="font-bold text-xl mt-6">Специальность</h1>
                <div class="mt-2 border-2 rounded-2xl px-6 py-3 text-xl">
                    Вычислительная техника и программное обеспечение
                </div>
                <h1 class="font-bold text-xl mt-6">Срок обучения</h1>
                <div class="mt-2 border-2 rounded-2xl px-6 py-3 text-xl">
                    2021-2024
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
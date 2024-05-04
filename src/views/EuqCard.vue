<script setup>
import { AnOutlinedUser } from "@kalimahapps/vue-icons";
import { BsJournalText } from "@kalimahapps/vue-icons";
import { IoOutlineFlash } from "@kalimahapps/vue-icons";
import { AkStar } from "@kalimahapps/vue-icons";
import { IonRouterOutlet } from '@ionic/vue';
</script>

<template>
    <div class="flex justify-center p-2 m-4 border-2 rounded-2xl text-center shadow-xl">
        <router-link to="/userpage">
            <div class="flex flex-col items-center  m-2">
                <AnOutlinedUser class="size-6" />
                <p class="text-xs mt-2">Профиль</p>
            </div>
        </router-link>
        <router-link to="/journallist">
            <div class="flex flex-col  items-center  m-2">
                <BsJournalText class="size-6" />
                <p class="text-xs mt-2">Расписание</p>
            </div>
        </router-link>
        <router-link to="/studballs">
            <div class="flex flex-col items-center  m-2">
                <IoOutlineFlash class="size-6" />
                <p class="text-xs mt-2">Успеваемость</p>
            </div>
        </router-link>
        <router-link to="/achievmentpage">
            <div class="flex flex-col items-center   m-2">
                <AkStar class="size-6" />
                <p class="text-xs mt-2">Библиотека</p>
            </div>
        </router-link>
    </div>
</template>
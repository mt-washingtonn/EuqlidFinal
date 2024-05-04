<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import EuqCard from './EuqCard.vue';
import NextLesson from './NextLesson.vue';
import EuqNews from './EuqNews.vue'
import { BxLogOutCircle } from "@kalimahapps/vue-icons";





</script>


<template>
  <ion-page>
    <ionContent>
      <div>
        <div class="flex justify-between m-8">
          <h3 class="font-bold">Euqlid Study</h3>
          <router-link to="/loginpage">
            <BxLogOutCircle class="size-8" />
          </router-link>
        </div>
        <h1 class="font-bold m-8 text-4xl">Здраствуй,<br>Айсулу</h1>
      </div>
      <EuqCard />
      <NextLesson />
      <EuqNews />
    </ionContent>
  </ion-page>
</template>

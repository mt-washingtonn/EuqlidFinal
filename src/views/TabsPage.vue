<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import { McHome5Fill } from "@kalimahapps/vue-icons";
import { AnFilledBook } from "@kalimahapps/vue-icons";
import { BxSolidMessageDetail } from "@kalimahapps/vue-icons";
import { BxSolidUser } from "@kalimahapps/vue-icons";
import { ClQrCode } from "@kalimahapps/vue-icons";
</script>


<template>
  <ion-page>

    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <McHome5Fill class="size-6 text-black" />
          <ion-label>Главная</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <AnFilledBook class="size-6 text-black" />
          <ion-label>Расписание</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ClQrCode class=" text-white size-12 rounded-full shadow-md shadow-blue-600/50 p-2 bg-blue-600" />
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <BxSolidMessageDetail class="text-black size-6" />
          <ion-label>Входящие</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tabs/tab5">
          <BxSolidUser class="size-6 text-black" />
          <ion-label>Профиль</ion-label>
        </ion-tab-button>

      </ion-tab-bar>

    </ion-tabs>

  </ion-page>
</template>

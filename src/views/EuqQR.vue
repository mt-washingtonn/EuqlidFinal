<script setup>
import { QrcodeStream } from 'vue-qrcode-reader';
import { IonPage, IonContent } from "@ionic/vue";

</script>




<template>
    <ion-page>
        <ion-content> 
        <div class="absolute h-full">
        <qrcode-stream @detect="onDetect">
            <div class="flex flex-col items-center mt-40">
                <h1 class="text-white">Сканируйте QR-Код</h1>
                <LiFrameExpand class="size-80 text-blue-600" />

                    <h1 class="text-white">Как это работает?</h1>
                
            </div>
        </qrcode-stream>
    </div>
        </ion-content>
    </ion-page>
</template>
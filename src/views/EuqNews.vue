<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const news = ref([])


onMounted(async () => {
    try {
        const { data } = await axios.get('https://64a91560cae0ffd1.mokky.dev/news')
        news.value = data
    }
    catch (err) {
        console.log(err)
    }
})

</script>


<template>
    <p class="font-bold ml-8 mt-8">Вас могут заинтересовать</p>
    <div class="mt-4 ml-8 mr-8">
        <h4>Курсы</h4>
        <div class="grid grid-cols-3 gap-2 mt-4">
            <div class="flex flex-col text-center" v-for="nov in news" :key="nov.id">
                <img :src="nov.img" alt="" class="border rounded-lg row-span-2">
                <p class="text-sm">{{ nov.name }}</p>
            </div>

        </div>
    </div>
</template>
<script setup>
import { BsChevronRight } from "@kalimahapps/vue-icons";
import { reactive, ref, onMounted } from "vue";
import axios from 'axios'


const journals = ref([])

onMounted(async () => {
    try {
        const { data } = await axios.get('https://64a91560cae0ffd1.mokky.dev/journallist')
        journals.value = data
    }
    catch (err) {
        console.log(err)
    }

    nextLesson()
})

const journal = reactive({
    id: 0,
    name: '',
    time: ''
})

const nextLesson = () => {
    for (let i = 0; i < journals.value.length; i++) {

        journal.id = journals.value[i].id
        journal.name = journals.value[i].name
        journal.time = journals.value[i].time


    }
}



</script>

<template>
    <router-link to="/journallist">
        <div class=" m-4">
            <p class="font-bold mt-8">Следующая пара:</p>
            <div class="grid grid-flow-col justify-between p-4 mt-6  border-2 rounded-2xl shadow-xl">
                <div class="row-start-1">
                    <h1 class="font-bold text-lg w-64 truncate">{{ journal.name }}</h1>
                    <p>{{ journal.time }}</p>
                </div>
                <div class="row-end-2 row-span-2 mt-2">
                    <BsChevronRight class="size-8" />
                </div>
            </div>
        </div>
    </router-link>
</template>
<template>
    <section class="pb-32 py-48 bg-gradient-to-br from-cyan-50 via-indigo-100 to-sky-200 backdrop-blur-md">
        <div class="container">
            <div class="flex flex-col text-center xl:max-w-xl mx-auto">
                <h1 class="flex flex-col text-5xl font-extrabold animate__animated animate__fadeInUp">
                    <span class="leading-1 text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500">
                        {{ title }}
                    </span>
                </h1>

                <p class="mt-6 text-lg text-gray-600 md:text-xl animate__animated animate__fadeInUp" v-if="text">
                    {{ text }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
    defineProps({
        title: String,
        text: String,
    })
</script>

<style lang="scss" scoped>

</style>
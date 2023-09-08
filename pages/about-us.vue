<template>
    <InnerPage :title="metaTitle" :text="metaDescription"></InnerPage>

    <section class="py-24 bg-white dark:bg-gray-900">
        <div class="container flex flex-col items-center mx-auto text-center">
            <h2 class="max-w-2xl mx-auto text-2xl font-bold tracking-tight text-gray-800 xl:text-4xl" data-aos="fade-up" data-aos-duration="100">
                Bring your Business to the <span class="text-gradient">next level.</span>
            </h2>

            <p class="max-w-4xl mt-6 text-center text-base text-gray-500" data-aos="fade-up" data-aos-duration="200">
                GOCLOUD Inc. is committed to innovate and simplify day to day data processes of present industries through the most relevant software products. We envision our company's value creation to be a part of the local and international community success - the byproduct of the success of our clients and our employees.
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
    const metaTitle = ref('About Us')
    const metaDescription = ref('We’re a group of passionate individuals that love a challenge.')

    useSeoMeta({
        title: metaTitle,
        ogTitle: metaTitle,
        description: metaDescription,
        ogDescription: metaDescription,
    })
</script>

<style lang="scss" scoped>

</style>
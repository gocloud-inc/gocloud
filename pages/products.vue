<template>
    <InnerPage :title="metaTitle" :text="metaDescription"></InnerPage>

    <section class="py-24">
        <div class="container">
            <h2 class="text-2xl font-bold text-gray-800 capitalize lg:text-3xl" data-aos="fade-up" data-aos-duration="100">
                Our Products
            </h2>

            <p class="mt-4 text-gray-500 xl:mt-3" data-aos="fade-up" data-aos-duration="500">
                Providing you with systems to process industry relevant data
            </p>

            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 md:grid-cols-2 xl:grid-cols-4" data-aos="fade-up">
                <Products></Products>
            </div>
        </div>
    </section>
</template>

<script setup>
    const metaTitle = 'Our Products'
    const metaDescription = 'We work together with you to let the world know we share the mission to make the world a better place with your products and services.'

    useHead({
        title: metaTitle,
        description: metaDescription
    })
</script>

<style lang="scss" scoped>

</style>
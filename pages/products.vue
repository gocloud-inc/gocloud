<template>
    <InnerPage :title="metaTitle" :text="metaDescription"></InnerPage>

    <section class="py-24">
        <div class="container">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3" data-aos="fade-up">
                <Products></Products>

                <div class="space-y-3 rounded-lg p-6 bg-gray-50 hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-6">
                    <div>
                        <div class="text-sm font-medium capitalize text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500">Coming Soon</div>
                        <h3 class="text-xl font-bold text-gray-700 capitalize">Oltrie</h3>
                    </div>

                    <div class="flex flex-nowrap items-center justify-between gap-4">
                        <p class="text-gray-500 dark:text-gray-300">
                            Real Estate Platform
                        </p>

                        <a href="https://academecloud.com/" target="_blank" rel="noopener noreferrer" aria-label="Academe SMS" class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="space-y-3 rounded-lg p-6 bg-gray-50 hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-6">
                    <div>
                        <div class="text-sm font-medium capitalize text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500">Coming Soon</div>
                        <h3 class="text-xl font-bold text-gray-700 capitalize">ETEEAP</h3>
                    </div>

                    <div class="flex flex-nowrap items-center justify-between gap-4">
                        <p class="text-gray-500 dark:text-gray-300">
                            Online Admission Platform
                        </p>

                        <a href="https://demo.eteeapcloud.com/" target="_blank" rel="noopener noreferrer" aria-label="Academe SMS" class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="space-y-3 rounded-lg p-6 bg-gray-50 hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-6">
                    <div>
                        <div class="text-sm font-medium capitalize text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500">Coming Soon</div>
                        <h3 class="text-xl font-bold text-gray-700 capitalize">AUDA</h3>
                    </div>

                    <div class="flex flex-nowrap items-center justify-between gap-4">
                        <p class="text-gray-500 dark:text-gray-300">
                            All Universal Dropshipping Access
                        </p>

                        <a href="https://beta.auda.ph/" target="_blank" rel="noopener noreferrer" aria-label="Academe SMS" class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const metaTitle = ref('Our Products')
    const metaDescription = ref('Providing you with systems to process industry relevant data')

    useSeoMeta({
        title: metaTitle,
        ogTitle: metaTitle,
        description: metaDescription,
        ogDescription: metaDescription,
    })
</script>

<style lang="scss" scoped>

</style>
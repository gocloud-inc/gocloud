<template>
    <footer class="bg-gradient-to-tr from-cyan-800 via-indigo-800 to-sky-800">
        <div class="container py-12">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                    <p class="font-semibold text-gray-400">Quick Link</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <NuxtLink to="/" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Home</NuxtLink>
                        <NuxtLink to="/about-us" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Who We Are</NuxtLink>
                        <NuxtLink to="/services" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Our Services</NuxtLink>
                        <NuxtLink to="/products" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Our Products</NuxtLink>
                        <NuxtLink to="/contact-us" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Contact Us</NuxtLink>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-400">Products</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Academe SMS</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Cloudbiz BMS</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Medisync CMR</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Cloudshop</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Offshore Office 360</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Trietrade</a>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-400">Services</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Web Design</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Mobile App Development</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Web Development</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Content Marketing</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Social Media Marketing</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Search Engine Optimization (SEO)</a>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-400">Contact Us</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">CSFP, St. Kolbe Estate 1 Brgy. Saguin Milk Palm Lot 1 B24-26</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">+63 45-455-1040</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">info@gocloudgroup.com</a>
                    </div>
                </div>
            </div>
            
            <hr class="my-6 border-gray-500 md:my-10">
            
            <div class="flex flex-col items-center justify-between sm:flex-row">
                <p class="mt-4 text-sm text-gray-300 sm:mt-0">© Copyright 2023 Gocloud Inc. All Rights Reserved.</p>

                <div class="flex mt-3 -mx-2 sm:mt-0">
                    <NuxtLink to="/terms-and-conditions" class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-200">Terms of Use</NuxtLink>
                    <NuxtLink to="/privacy-policy" class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-200">Privacy Policy</NuxtLink>
                    <a href="#" class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-200">Cookies</a>
                </div>
            </div>
        </div>
    </footer>
</template>
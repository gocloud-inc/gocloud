<template>
    <nav class="navbar px-6 lg:px-12 py-8 mx-auto fixed top-0 w-full z-10 lg:flex lg:justify-between lg:items-center">
        <div class="flex items-center justify-between">
            <NuxtLink to="/">
                <img class="w-auto h-10" src="@/assets/img/logo.png" alt="">
            </NuxtLink>

            <!-- Mobile menu button -->
            <div class="flex lg:hidden">
                <button class="text-gray-700 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M2 5.75A.75.75 0 0 1 2.75 5h15.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.75Zm0 12a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2.75 11a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5H2.75Z"/></svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="absolute inset-x-0 z-20 w-full px-6 py-6 mt-6 transition-all duration-300 ease-in-out bg-white shadow-md lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:bg-transparent lg:relative lg:w-auto lg:flex lg:items-center hidden">
            <div class="flex flex-col space-y-6 lg:mt-0 lg:flex-row lg:space-y-0">
                <NuxtLink to="/about-us" class="text-gray-700 font-medium lg:mx-6 hover:text-blue-500">About Us</NuxtLink>
                <NuxtLink to="/services" class="text-gray-700 font-medium lg:mx-6 hover:text-blue-500">Services</NuxtLink>
                <NuxtLink to="/products" class="text-gray-700 font-medium lg:mx-6 hover:text-blue-500">Products</NuxtLink>
                <a class="text-gray-700 font-medium lg:mx-6 hover:text-blue-500" href="#">Careers</a>
                <NuxtLink to="/contact-us" class="text-gray-700 font-medium lg:mx-6 hover:text-blue-500">Contact</NuxtLink>
            </div>
        </div>

        <div class="hidden xl:flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
            <a href="#" class="mx-2 text-gray-500 transition-colors duration-300 transform hover:text-gray-700" aria-label="Reddit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096a1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277c-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387c2.704 0 3.203 1.778 3.203 4.092v4.71z"/></svg>
            </a>

            <a href="#" class="mx-2 text-gray-500 transition-colors duration-300 transform hover:text-gray-700" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999c0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891c1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/></svg>
            </a>

            <a href="#" class="mx-2 text-gray-500 transition-colors duration-300 transform hover:text-gray-700" aria-label="Github">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216a4.61 4.61 0 0 0-2.633-2.633a6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42a4.607 4.607 0 0 0-2.633 2.633a6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419a4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187c.043-.962.056-1.267.056-3.71c-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078a1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"/><circle cx="11.994" cy="11.979" r="3.003" fill="currentColor"/></svg>
            </a>
        </div>

    </nav>
    
    <main>
        <slot></slot>
    </main>

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
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Careers</a>
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
                    <a href="#" class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-200" aria-label="Reddit">Cookies</a>
                </div>
            </div>
        </div>
    </footer>

    <CookieConsent></CookieConsent>

</template>

<style lang="css" scoped>
    nav.stay-sticky {
        @apply bg-white py-5 border shadow-sm transition-all duration-300 ease-in-out;
    }

    nav .router-link-exact-active {
        @apply text-blue-500 font-semibold;
    }
</style>
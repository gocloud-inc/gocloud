<template>
    <div id="popup" class="fixed left-0 right-0 m-4 xl:m-0 bottom-0 xl:max-w-md p-4 bg-white border border-gray-200 xl:left-8 xl:bottom-8 rounded-2xl animate__animated animate__bounceInUp hidden">
        <h2 class="font-semibold text-gray-800">🍪 Cookie Notice</h2>

        <p class="mt-4 text-sm text-gray-600 dark:text-gray-300">We use cookies to ensure that we give you the best experience on our website. <NuxtLink to="/privacy-policy" class="text-blue-500 hover:underline">Read cookies policies</NuxtLink>. </p>
        
        <div class="flex items-center justify-between mt-4 gap-x-4 shrink-0">
            <button class="text-xs text-gray-800 underline transition-colors duration-300 hover:text-gray-600 focus:outline-none">
                Manage your preferences
            </button>

            <button id="acceptButton" class="button-primary text-xs">
                Accept
            </button>
        </div>
    </div>
</template>

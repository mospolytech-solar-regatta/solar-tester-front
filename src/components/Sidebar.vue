<template>
  <div>
    <aside
        class="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block h-screen border-r border-gray-200 dark:border-gray-700">
      <div class="py-4 text-gray-500 dark:text-gray-400">
        <router-link class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="/">
          Manta Ray
        </router-link>
        <ul class="mt-12">
          <li class="relative px-6 py-1" v-for="page in pages" :key="page.name">
            <router-link exact-active-class="bg-purple-400 text-white"
                         class="inline-flex items-center w-full text-sm font-semibold transition duration-200 ease-in hover:bg-purple-500 hover:text-white  py-2 px-2 rounded-lg "
                         :to="`/${page.to}`">
              <component :is="page.icon" class="flex-shrink-0 h-6 w-6" aria-hidden="true"/>
              <span class="ml-4">{{ page.name }}</span>
            </router-link>
          </li>

        </ul>

      </div>
    </aside>

    <div v-if="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
         x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
         x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
         x-transition:leave-end="opacity-0"
         class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
         v-on:click="closeSideMenu"></div>
    <aside class="fixed inset-y-0 z-20 flex-shrink-0 w-96 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
           v-if="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
           x-transition:enter-start="opacity-0 transform -translate-x-20" x-transition:enter-end="opacity-100"
           x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
           x-transition:leave-end="opacity-0 transform -translate-x-20" @keydown.escape="closeSideMenu">
      <div class="py-4 text-gray-500 dark:text-gray-400">
        <router-link class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="#">
          Manta Ray
        </router-link>
        <ul>
          <li class="relative px-6 py-3" v-for="page in pages" :key="page.name">
            <router-link active-class="bg-purple-200"
                         class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                         :to="`/${page.to}`">
              <component :is="page.icon" class="flex-shrink-0 h-6 w-6" aria-hidden="true"/>
              <span class="ml-4">{{ page.name }}</span>
            </router-link>
          </li>
          <li class="relative px-6 py-3">
            <button
                class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                v-on:click="togglePagesMenu" aria-haspopup="true">
              <span class="inline-flex items-center">
                <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                     stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
                  </path>
                </svg>
                <span class="ml-4">Pages</span>
              </span>
              <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg>
            </button>

          </li>
        </ul>

      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import {HomeIcon, CursorClickIcon, CollectionIcon} from "@heroicons/vue/outline";

const {isSideMenuOpen} = defineProps(['isSideMenuOpen'])
const emits = defineEmits(['closeSideMenu'])

const pages = [
  {
    name: 'Testing',
    icon: HomeIcon,
    to: ''
  },

  {
    name: 'Logs',
    icon: CursorClickIcon,
    to: 'logs'
  },
  {
    name: 'Empty',
    icon: CollectionIcon,
    to: 'empty'
  }
]


function closeSideMenu() {
  return emits('closeSideMenu')
}
</script>

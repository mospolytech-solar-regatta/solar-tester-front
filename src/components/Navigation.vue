<template>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const emits = defineEmits(['openSideMenu'])

const isProfileMenuOpen = ref(false);
const isNotificationsMenuOpen = ref(false);
const isSideMenuOpen = ref(false);
const dark = ref(false);

function toggleTheme() {
  dark.value = !dark.value;

  const lsDark = localStorage.getItem('theme')

  if (lsDark !== 'dark') {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const search = ref(null)
const searchItem = ref('')
const shortcut = ref("")

function toggleSideMenu() {
  return emits('openSideMenu');
}

function toggleProfileMenu() {
  isProfileMenuOpen.value = !isProfileMenuOpen.value;
}

function toggleNotificationsMenu() {
  isNotificationsMenuOpen.value = !isNotificationsMenuOpen.value;
}

function searchShortcut(e: KeyboardEvent) {
  if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault()

    // @ts-ignore
    search.value.focus()
  }
}

onMounted(() => {
  document.addEventListener('keydown', searchShortcut)
})
onUnmounted(() => {
  document.removeEventListener('keydown', searchShortcut)
})
</script>

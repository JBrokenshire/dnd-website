<script lang="ts" setup>
import { ref } from 'vue'

const isNavOpen = ref(false)
</script>

<template>
  <header class="w-full border-b border-gray-300">
    <div class="max-width padding-x">
      <div class="flex-between py-2">
        <RouterLink class="w-[15%] min-w-[50px] max-w-[75px]" to="/" @click="isNavOpen = false">
          <img src="../../assets/img/website-logo.png" alt="Website Logo" class="aspect-square" />
        </RouterLink>
        <nav>
          <!-- Small Screen Navbar -->
          <section class="flex md:hidden">
            <button class="space-y-2 transition hover:text-primary" @click="isNavOpen = !isNavOpen">
              <span class="sr-only">Open Main Menu</span>
              <svg
                class="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            <div :class="`transition-200 sidebar ${isNavOpen ? 'showMenuNav' : 'hideMenuNav'}`">
              <div class="w-full flex-between px-4 py-2 mb-4">
                <RouterLink
                  class="w-[15%] min-w-[25px] max-w-[50px] block sm:hidden"
                  to="/"
                  @click="isNavOpen = false"
                >
                  <img
                    src="../../assets/img/website-logo.png"
                    alt="Website Logo"
                    class="aspect-square"
                  />
                </RouterLink>
                <button class="w-full flex items-center justify-end" @click="isNavOpen = false">
                  <svg
                    class="h-12 w-12 text-gray-600 transition-200 hover:text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <ul
                v-if="isNavOpen"
                class="flex flex-col items-center sm:items-start justify-between gap-8 text-2xl px-8"
              >
                <li class="my-2">
                  <RouterLink class="nav-link px-2 md:px-4" to="/" @click="isNavOpen = false">
                    <i class="pi pi-home"></i>
                    Home
                  </RouterLink>
                </li>
                <li class="my-2">
                  <RouterLink
                    class="nav-link px-2 md:px-4"
                    to="/characters"
                    @click="isNavOpen = false"
                  >
                    <i class="pi pi-users"></i>
                    Characters
                  </RouterLink>
                </li>
                <li class="my-2">
                  <RouterLink
                    class="nav-link px-2 md:px-4"
                    to="/classes"
                    @click="isNavOpen = false"
                  >
                    <i class="pi pi-shield"></i>
                    Classes
                  </RouterLink>
                </li>
                <li class="my-2">
                  <RouterLink class="nav-link px-2 md:px-4" to="/races" @click="isNavOpen = false">
                    <i class="pi pi-user"></i>
                    Races
                  </RouterLink>
                </li>
              </ul>
            </div>
          </section>

          <!-- Large Screen Navbar -->
          <ul class="hidden space-x-4 md:flex text-xl">
            <li>
              <RouterLink class="nav-link px-2 flex-center gap-2" to="/" @click="isNavOpen = false">
                <i class="pi pi-home"></i>
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="nav-link px-2 flex-center gap-2"
                to="/characters"
                @click="isNavOpen = false"
              >
                <i class="pi pi-users"></i>
                Characters
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="nav-link px-2 flex-center gap-2"
                to="/classes"
                @click="isNavOpen = false"
              >
                <i class="pi pi-shield"></i>
                Classes
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="nav-link px-2 flex-center gap-2"
                to="/races"
                @click="isNavOpen = false"
              >
                <i class="pi pi-user"></i>
                Races
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.sidebar {
  @apply fixed top-0 right-0 h-[100vh] z-[999] border-l border-gray-300 bg-white shadow-lg shadow-gray-700;
}

.hideMenuNav {
  @apply w-0;
}
.showMenuNav {
  @apply w-full sm:w-[250px];
}
</style>

<template>
  <div class="relative w-screen h-screen overflow-hidden">
    <Background />
    <div class="absolute w-full h-full z-50">
      <div class="w-full h-full container mx-auto px-4 md:px-0">
        <MetaHeader>
          <template v-slot:logo>
            <div class="w-[150px] cursor-pointer">
              <img class="cover" src="@/assets/logo.png" alt="Meta Logo" />
            </div>
          </template>
          <template v-slot:nav>
            <nav>
              <ul class="hidden lg:flex">
                <li v-for="(link, index) in NavLinks" class="">
                  <Link
                    :label="link.label"
                    :href="link.href"
                    :class="index == 0 ? 'font-bold' : ''"
                    :key="index"
                  />
                </li>
              </ul>
            </nav>
          </template>
          <template v-slot:right>
            <div>
              <Icon type="search" />
            </div>
          </template>
        </MetaHeader>
        <div class="mt-[15%] md:mt-[4%]">
          <div class="max-w-full md:max-w-md">
            <p
              class="text-5xl text-center md:text-left text-white font-bold lg:text-6xl"
            >
              Connection is
              <span
                class="relative text-[#00A3FF] after:content-[url('@/assets/wave.svg')] after:absolute after:left-0 after:w-full after:-bottom-[2%]"
              >
                evolving
              </span>
              and so are we.
            </p>
          </div>
          <div class="mt-5 max-w-full md:max-w-lg">
            <p class="text-white text-center md:text-left">
              The metaverse is the next evolution of social connection. Our
              company’s vision is to help bring the metaverse to life, so we are
              changing our name to reflect our commitment to this future.
            </p>
          </div>
          <Transition :duration="550" name="nested">
            <div
              v-if="Height >= 750"
              class="mt-10 flex justify-center md:block"
            >
              <button
                class="bg-[#00A3FF] text-sm text-white font-bold py-3 px-6 rounded-full"
              >
                Discovery
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Background from "@/components/Background/index.vue";
import MetaHeader from "@/components/Header/index.vue";
import Icon from "@/components/Icon/index.vue";
import Link from "@/components/Link/link.vue";
import type { LinkProps } from "@/components/Link/link.types";

import { useWindow } from "@/composables";

const { Height } = useWindow();

const NavLinks: LinkProps[] = [
  {
    label: "Who We Are",
    href: "/",
  },
  {
    label: "What We Build",
    href: "/",
  },
  {
    label: "Our Actions",
    href: "/",
  },
  {
    label: "Our Community",
    href: "/",
  },
  {
    label: "Resources",
    href: "/",
  },
];
</script>

<style>
* {
  font-family: Poppins;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.15s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>

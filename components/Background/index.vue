<template>
  <div class="absolute w-screen h-screen z-0">
    <div class="w-full h-full absolute">
      <img
        src="@/assets/background.png"
        alt="background"
        class="w-full h-full cover"
      />
    </div>
    <div
      class="absolute top-0 left-0 sm:-left-[15%] md:left-auto md:top-2 md:-right-[10%] lg:top-[25%] lg:left-[25%] mix-blend-screen"
    >
      <img src="@/assets/earth.png" alt="Earth" class="scale-90 lg:scale-75" />
    </div>

    <div
      class="absolute hidden md:block left-auto -right-24 -bottom-16 lg:-left-14 lg:right-auto lg:-bottom-9 opacity-50 mix-blend-screen lg:especial-matrix"
    >
      <img
        src="@/assets/bottom.gif"
        alt="Bottom"
        class="scale-[0.6] lg:scale-75"
      />
    </div>

    <div
      class="absolute especial-matrix md:especial-matrix-disable right-0 -bottom-[10%] sm:-right-[25%] md:right-auto md:-left-[25%] sm:-bottom-[30%] lg:left-auto lg:bottom-auto lg:-right-[10%] lg:top-[15%] mix-blend-screen lg:especial-matrix lg:-right-[10%] xl:right-0"
    >
      <img src="@/assets/right.gif" alt="Right" class="scale-90 lg:scale-100" />
    </div>
  </div>
</template>

<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .especial-matrix {
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  .especial-matrix-disable {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
}
</style>

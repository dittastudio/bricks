<script lang="ts" setup>
import IconBricks from '@/assets/icons/bricks.svg'
import IconTtob from '@/assets/icons/ttob.svg'
</script>

<template>
  <div class="flex flex-col gap-7 sm:gap-10 sm:flex-row justify-center items-center">
    <IconTtob class="w-auto h-[110px] sm:h-[130px]" />

    <div class="w-[130px] sm:w-[160px] h-[1px] bg-white" />

    <IconBricks class="w-auto h-[110px] sm:h-[130px]" />
  </div>
</template>

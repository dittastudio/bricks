<script lang="ts" setup>
definePageMeta({
  layout: false,
})

interface Props {
  error: {
    statusCode: number
    statusMessage: string
  }
}

const { error } = defineProps<Props>()

useHead({
  title:
    error?.statusCode && error?.statusMessage
      ? `${error?.statusCode} ${error?.statusMessage}`
      : 'An unexpected error occurred',
})
</script>

<template>
  <div class="w-full min-h-screen flex items-center justify-center section wrapper">
    <div class="flex flex-col items-center justify-center gap-20 text-center">
      <NuxtLink to="/">
        <AppLockup class="relative z-20 h-full" />

        <span class="sr-only">Home</span>
      </NuxtLink>

      <p class="max-w-[30ch] text-balance mx-auto text-18 sm:text-27">
        Sorry, the page you were looking for couldn't be found. It may have been moved.
      </p>
    </div>
  </div>
</template>

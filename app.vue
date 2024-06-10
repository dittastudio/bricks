<script lang="ts" setup>
import '@/utilities/colophon'
import { storyblokEditor } from '@/utilities/storyblok'
import { screenSizes } from '@/tailwind.config'
import type { SettingsStoryblok } from '@/types/storyblok'

const route = useRoute()
const story = await useStoryblokStory<SettingsStoryblok>('/settings')

const globalClasses = computed(() => ({
  'is-storyblok-editor': storyblokEditor(route.query),
}))

useHead({
  htmlAttrs: {
    class: globalClasses,
  },
})

useSeoMeta({
  titleTemplate: title => (title ? `${title} - Bricks` : 'Bricks'),
  robots: 'index, follow',
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
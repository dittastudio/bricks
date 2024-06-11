<script lang="ts" setup>
import '@/utilities/colophon'
import { storyblokEditor, storyblokRichTextContent } from '@/utilities/storyblok'
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
  <div class="relative">
    <NuxtPage />

    <div v-if="story?.content" class="flex flex-col lg:flex-row gap-16 w-full px-5 pb-16 sm:px-7 lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2 lg:justify-end">
      <address v-if="story?.content?.address && storyblokRichTextContent(story.content.address)">
        <StoryblokRichText
          :content="story.content.address"
          class="w-full [&>*:not(:last-child)]:mb-5 [&>p]:text-18 [&>p]:text-balance [&>p]:sm:text-27"
        />
      </address>

      <ul v-if="story?.content?.links">
        <li
          v-for="item in story.content.links"
          :key="item._uid"
          class="text-18 sm:text-27"
        >
          <StoryblokLink
            :item="item.link"
            :title="item.title"
          >
            {{ item.title }}
          </StoryblokLink>
        </li>
      </ul>
    </div>
  </div>
</template>

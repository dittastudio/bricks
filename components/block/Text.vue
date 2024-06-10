<script lang="ts" setup>
import { storyblokRichTextContent } from '@/utilities/storyblok'
import type { BlockTextStoryblok } from '@/types/storyblok'

interface Props {
  block: BlockTextStoryblok
}

const { block } = defineProps<Props>()
</script>

<template>
  <div v-editable="block" class="w-full px-5 py-16 sm:px-7">
    <StoryblokRichText
      v-if="storyblokRichTextContent(block.text)"
      :content="block.text"
      class="w-full lg:max-w-[50%] [&>*:not(:last-child)]:mb-5 [&>p]:text-18 [&>p]:text-balance [&>p]:sm:text-27"
    />
  </div>
</template>

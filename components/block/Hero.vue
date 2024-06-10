<script lang="ts" setup>
import type { BlockHeroStoryblok } from '@/types/storyblok'
import { storyblokAssetType } from '@/utilities/storyblok'

interface Props {
  block: BlockHeroStoryblok
}

const { block } = defineProps<Props>()
const assetType = computed(() => storyblokAssetType(block.image?.filename || ''))
const columnSpan = computed(() => Number(block.column_end) - Number(block.column_start))
</script>

<template>
  <div v-editable="block" class="relative w-full h-[300px] sm:h-[460px]">
    <MediaImage
      v-if="block.image && assetType === 'image'"
      class="!absolute !w-full !h-full inset-0 z-10 [&>img]:object-cover [&>img]:w-full [&>img]:!h-full [&>img]:inset-0"
      :asset="block.image"
      :sizes="`
        100vw
        sm:100vw
        md:${columnSpan / 12 * 100}vw
        3xl:${columnSpan / 12 * 1800}px
      `"
    />

    <AppLockup class="relative z-20 h-full" />
  </div>
</template>

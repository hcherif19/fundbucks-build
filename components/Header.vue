<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
  label: 'مبادئنا',
  to: '#mabadea'
},{
  label: 'خدماتنا',
  to: '#khadamet'
}, {
  label: 'محافظنا',
  to: '#mahafedh'
}, ]
</script>

<template >
  <UHeader :links="links" dir="rtl"  class=" ">
    <template #logo ><p class="text-4xl">فندبكس</p>
       <UBadge label="FundBucks" color="purple" variant="subtle" class=" mb-0.5 " />
    </template>

    <template #right>
      <UButton label="تواصل معنا" icon="i-heroicons-arrow-right-20-solid" trailing color="black" to="/" class="hidden lg:flex" />
    </template>

    <template #panel>
      
        <UNavigationTree :links="mapContentNavigation(navigation)" default-open />
     
    </template>
  </UHeader>
</template>

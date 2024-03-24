<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

const items = [
  'https://i.ibb.co/svYQS9q/Copy-of.png',
  'https://i.ibb.co/jR5jZpG/2.jpg',
  'https://i.ibb.co/9WYJK9g/1.jpg',
  'https://i.ibb.co/7V7Q2pF/Copy-of.jpg'
]

const packItems = [{
  label: 'محفظة الدخل',
  content: 'الخيار الأفضل للأفراد الذين يرغبون في تحقيق دخلاّ ثابتّا و مستمرّا من إستثماراتهم',
  typeRev: 'شهرية',
  averageRev: '11.50',
  withdraws: 'شهرية',
  standardDeviation: '40',
  riskIndex: '3/4',
}, {
  label: 'محفظة النمو',
  content: 'واحدة من أهم الخيارات الإستثمارية و تتميز بالإستقرار و تجنب المخاطر',
  typeRev: 'ربع سنوية',
  averageRev: '15.50',
  withdraws: 'شهرية',
  standardDeviation: '15',
  riskIndex: '2/4',
}, {
  label: 'المحفظة المرنة',
  content: 'مزيد من المرونة و السيطرة على مستوى المخاطر و العوائد المتوقعة',
  typeRev: 'سنوية',
  averageRev: '11.50',
  withdraws: 'مرنة',
  standardDeviation: '30',
  riskIndex: '1/4',
}, {
  label: 'المحفظة المتحفظة',
  content: 'مستوى منخفض من المخاطر',
  typeRev: 'شهرية',
  averageRev: '40.50',
  withdraws: 'ربع شهرية',
  standardDeviation: '15',
  riskIndex: '3/4',
}]
const route = useRoute()
const router = useRouter()

const selected = computed({
  get() {
    const index = packItems.findIndex((packItem) => packItem.label === route.query.tab)
    if (index === -1) {
      return 0
    }

    return index
  },
  set(value) {
    // Hash is specified here to prevent the page from scrolling to the top
    router.replace({ query: { tab: packItems[value].label }, hash: '#control-the-selected-index' })
  }
})

const isYearly = ref(false)

</script>

<template>
  <div v-if="page">
    <ULandingHero :title="page.hero.title" :description="page.hero.description" :links="page.hero.links">
      <div
        class="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" />

      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" color="purple"
          class="relative rounded-full font-semibold divide-red-200">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge>
      </template>
    </ULandingHero>

    <ULandingSection>
      <ULandingLogos>
        <UIcon v-for="icon in page.logos.icons" :key="icon" :name="icon"
          class="w-12 h-12 flex-shrink-0 text-gray-500 dark:text-gray-400" />
      </ULandingLogos>
    </ULandingSection>

    <ULandingSection :title="page.features.title" :description="page.features.description" class="text-center" id="mabadea">
      <UPageGrid>
        <ULandingCard v-for="(item, index) in page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>



    

    <ULandingSection id="khadamet" v-for="(section, index) in page.sections" :key="index" :title="section.title"
      :description="section.description" :align="section.align" :features="section.features" class="text-right" >
      <img :src="section.img" alt="" class="rounded-lg">

    </ULandingSection>


    <ULandingSection :title="page.services.title" :description="page.services.description" class="!pt-0" dir="rtl" id="mahafedh">
      <UTabs :items="packItems">
        <template #item="{ item }">
          <UCard>
            <template #header >
              <p class="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                {{ item.label }}
              </p>
              <p class="mt-1 text-base text-gray-500 dark:text-gray-400">
                {{ item.content }}
              </p>


            </template>

            <UCard :ui="{ body: { base: 'grid md:grid-cols-3 sm:grid-cols-12 '  } }">
              <div class="space-y-4 ">
                <UAccordion open-icon="i-heroicons-plus" default-open close-icon="i-heroicons-minus" multiple
                  :items="[{ label: 'نوع العائد',icon: 'i-heroicons-arrow-uturn-left-20-solid', content: item.typeRev },
                  { label: 'السحوبات',icon: 'i-heroicons-arrow-up-on-square-stack-solid', content: item.withdraws }]" />

              </div>

              <UDivider label="بيانات المحفظة" orientation="vertical" />

              <div class="space-y-4">
                <UMeter  color="green" :value="item.averageRev" icon="i-heroicons-arrow-up-on-square-stack" indicator
                  label="متوسط العائد" class="text-2xl" />

                <UMeter  :value="item.standardDeviation" icon="i-heroicons-presentation-chart-line" indicator
                  label="الإنحراف المعياري" />

                <UMeter color="blue"  :value="90" icon="i-heroicons-archive-box-x-mark" label="نسبة المخاطر" />
              </div>
            </UCard>

            <!-- <template #footer>
              <UButton type="submit" color="black">
                Save {{ item.key === 'account' ? 'account' : 'password' }}
              </UButton>
            </template> -->
          </UCard>
        </template>
      </UTabs>
    </ULandingSection>



    <ULandingSection :headline="page.testimonials.headline" :title="page.testimonials.title"
      :description="page.testimonials.description" id="tetaa">
      <UPageColumns class="xl:columns-3">
        <div v-for="(testimonial, index) in page.testimonials.items" :key="index" class="break-inside-avoid">
          <ULandingTestimonial v-bind="testimonial" class="bg-gray-100/50 dark:bg-gray-800/50" />
        </div>
      </UPageColumns>
    </ULandingSection>

    <ULandingSection>
      <ULandingCTA v-bind="page.cta" class="bg-gray-100/50 dark:bg-gray-800/50" />
    </ULandingSection>
  </div>
</template>

<style scoped>
.landing-grid {
  background-size: 100px 100px;
  background-image:
    linear-gradient(to right, rgb(var(--color-gray-200)) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--color-gray-200)) 1px, transparent 1px);
}

.dark {
  .landing-grid {
    background-image:
      linear-gradient(to right, rgb(var(--color-gray-800)) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(var(--color-gray-800)) 1px, transparent 1px);
  }
}
</style>

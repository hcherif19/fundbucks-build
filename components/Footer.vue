<script setup lang="ts">
const links = [ {
  label: 'للتواصل',
  children: [{
    label: 'info@FundBucks.com',
    to : "mailto:info@FundBucks.com"
  }, {
    label: 'سياسة الخصوصية',
    to : '#'
  }
]}, {
  label: 'التطبيق',

  children: [{
    label: 'متجر ابل',
    to: '#'
  }, {
    label: 'متجر جوجل',
    to: '#'
  }]
},{
  label: 'خدماتنا',
  children: [{
    label: 'محافظنا',
    to : '#'
  }, {
    label: 'الموقع',
    to : '#'
  }
]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit () {
  loading.value = true

  setTimeout(() => {
    toast.add({
      title: 'تم الإشتراك !',
      description: 'لقد اشتركت بنجاح في النشرة الإخبارية',
    })

    loading.value = false
  }, 1000)
}
</script>

<template>
  <UFooter dir="rtl">
    <template #top>
      <UFooterColumns :links="links">
        <template #right>
          <form @submit.prevent="onSubmit">
            <UFormGroup label="اشترك في نشرتنا" :ui="{ container: 'mt-3' }">
              <UInput v-model="email" type="email" placeholder="ادخل البريد الالكتروني" :ui="{ icon: { trailing: { pointer: '' } } }" required size="xl" autocomplete="off" class="max-w-sm" input-class="rounded-full">
                <template #trailing>
                  <UButton type="submit" size="xs" color="primary" :label="loading ? 'Subscribing' : 'إشترك'" :loading="loading" />
                </template>
              </UInput>
            </UFormGroup>
          </form>
        </template>
      </UFooterColumns>
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved FundBucks .
      </p>
    </template>

    <template #right>
      <UColorModeButton size="sm" />

      <UButton to="https://github.com/nuxt-ui-pro/saas" target="_blank" icon="i-simple-icons-github" aria-label="GitHub" color="gray" variant="ghost" />
    </template>
  </UFooter>
</template>

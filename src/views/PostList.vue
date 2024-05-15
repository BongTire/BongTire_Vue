<template>
  <div class="mx-auto max-w-2xl lg:max-w-7xl">
    <div class="relative border-b border-gray-200 pb-5 sm:pb-0">
        <div class="md:flex md:items-center md:justify-between">
        <h3 class="text-base font-semibold leading-6 text-gray-900">공지사항</h3>
        <div class="mt-3 flex md:absolute md:right-0 md:top-3 md:mt-0">
            <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Share</button>
            <button type="button" class="ml-3 inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Create</button>
        </div>
        </div>
        <div class="mt-4">
        <div class="sm:hidden">
            <label for="current-tab" class="sr-only">Select a tab</label>
            <select id="current-tab" name="current-tab" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600">
            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
            </select>
        </div>
        <div class="hidden sm:block">
            <nav class="-mb-px flex space-x-8">
            <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
            </nav>
        </div>
        </div>
    </div>
    <ul role="list" class="divide-y divide-gray-100">
    <li v-for="person in people" :key="person.email" class="relative py-5 hover:bg-gray-50">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="mx-auto flex max-w-4xl justify-between gap-x-6">
          <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="person.imageUrl" alt="" />
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                <a :href="person.href">
                  <span class="absolute inset-x-0 -top-px bottom-0" />
                  {{ person.name }}
                </a>
              </p>
              <p class="mt-1 flex text-xs leading-5 text-gray-500">
                <a :href="`mailto:${person.email}`" class="relative truncate hover:underline">{{ person.email }}</a>
              </p>
            </div>
          </div>
          <div class="flex shrink-0 items-center gap-x-4">
            <div class="hidden sm:flex sm:flex-col sm:items-end">
              <p class="text-sm leading-6 text-gray-900">{{ person.role }}</p>
              <p v-if="person.lastSeen" class="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time :datetime="person.lastSeenDateTime">{{ person.lastSeen }}</time>
              </p>
              <div v-else class="mt-1 flex items-center gap-x-1.5">
                <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p class="text-xs leading-5 text-gray-500">Online</p>
              </div>
            </div>
            <ChevronRightIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </div>
        </div>
      </div>
    </li>
  </ul>
  <PostList v-if="isList"/>
  <PostCard v-else/>
  </div>
</template>

<script lang="ts" setup>
import PostList from '@component/Post/List.vue'
import PostCard from '@component/Post/Card.vue'

const tabs = [
  { name: '공지사항', href: '#', current: true },
  { name: '이벤트', href: '#', current: false },
]

const isList = ref(false)

</script>

<style>

</style>
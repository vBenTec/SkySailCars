<script setup lang="ts">

const pages = [{routeName: 'privacy', name: 'Privacy & Policy'}, {routeName: 'terms', name: 'Terms & Condition'}]

const aboutLinks = [
  {name: 'About'},
  {routeName: 'about', name: 'How it works?'},
  {routeName: 'featured', name: 'Featured'},
  {routeName: 'partnership', name: 'Partnership'},
  {routeName: 'privacy', name: 'Business Relation'}]

const communityLinks = [
  {name: 'Community'},
  {routeName: 'community', name: 'Events'},
  {routeName: 'blog', name: 'Blog'},
  {routeName: 'podcast', name: 'Podcast'},
  {routeName: 'friend', name: 'Invite a friend'}
]

const socialLinks = [
  {name: 'Socials'},
  {link: 'www.discord.com', name: 'Discord'},
  {link: 'www.instagram.com', name: 'Instagram'},
  {link: 'www.x.com', name: 'X'},
  {link: 'www.facebook.com', name: 'Facebook'}]


</script>

<template>
  <footer class="footer">
    <div class="footer__upper-container">
      <div>
        <base-logo size="small" class="mb-4"/>
        <p class="text-grey-600 text-base max-w-[18rem]">Our vision is to provide convenience and help increase your
          sales
          business.</p>
      </div>
      <div class="flex justify-between md:justify-start gap-12 flex-wrap">
        <ul class="flex flex-col gap-4 text-grey-600">
          <li class="flex flex-col gap-2" v-for="(link, index) in aboutLinks" :key="index+link.name">
            <nuxt-link :to="link.routeName" v-if="link.routeName">{{ link.name }}</nuxt-link>
            <h5 class="text-secondary-500 mb-2 font-semibold text-lg" v-else>{{ link.name }}</h5>
          </li>
        </ul>
        <ul class="flex flex-col gap-4 text-grey-600">
          <li class="flex flex-col gap-2" v-for="(link, index) in communityLinks" :key="index+link.name">
            <nuxt-link :to="link.routeName" v-if="link.routeName">{{ link.name }}</nuxt-link>
            <h5 class="text-secondary-500 mb-2 font-semibold text-lg" v-else>{{ link.name }}</h5>
          </li>
        </ul>
        <ul class="flex flex-col gap-4 text-grey-600">
          <li class="flex flex-col gap-2" v-for="(link, index) in socialLinks" :key="index+link.name">
            <a rel="nofollow" target="_blank" :href="link.link" v-if="link.link">{{ link.name }}</a>
            <h5 class="text-secondary-500 mb-2 font-semibold text-lg" v-else>{{ link.name }}</h5>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__lower-container">
      <p class="font-semibold text-base">{{ '©' + new Date().getFullYear() }} Dm. All rights reserved</p>
      <ul class="links-container">
        <li class="font-semibold text-secondary-500" v-for="(page, index) in pages" :key="index + page.name">
          <nuxt-link :to="{name: page.routeName}">{{ page.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped lang="postcss">
.footer {
  @apply p-8 md:p-16 bg-white;

  &__upper-container {
    @apply flex flex-col md:flex-row  justify-between gap-4 pb-8 md:pr-20;
  }

  &__lower-container {
    @apply pt-6 md:border-t border-grey-100 flex flex-col md:flex-row justify-between gap-4 text-secondary-500 text-base;

    .links-container {
      @apply -order-2 md:order-1 flex gap-8;
    }
  }
}
</style>
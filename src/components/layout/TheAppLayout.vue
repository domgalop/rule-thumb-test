<template>
  <div class="page__container">
    <TheHeader />
    <main class="app__container">
        <PageInformation />
        <h2 class="vote__title">Votes</h2>
        <VoteSection />
        <SubmitPeople />
    </main>
    <TheFooter />
  </div >
</template>

<script>

import PageInformation from '../ui/PageInformation.vue';
import SubmitPeople from '../ui/SubmitPeople.vue';
import TheFooter from './TheFooter.vue';
import TheHeader from './TheHeader.vue';
import VoteSection from '../ui/VoteSection.vue';

export default {
  name: 'TheAppLayout',
  components: {
    PageInformation,
    SubmitPeople,
    TheFooter,
    TheHeader,
    VoteSection,
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/TheAppLayout.scss';
</style>

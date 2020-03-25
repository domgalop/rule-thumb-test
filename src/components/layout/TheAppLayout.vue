<template>
  <main class="app__container">
    <div class="app__container__content">
      <PageInformation />
      <h2>Votest</h2>
      <Vote />
      <SubmitPeople />
    </div>
  </main>
</template>

<script>

import PageInformation from '../ui/PageInformation.vue';
import SubmitPeople from '../ui/SubmitPeople.vue';
import Vote from '../ui/Vote.vue';

export default {
  name: 'TheAppLayout',
  components: {
    PageInformation,
    SubmitPeople,
    Vote,
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/TheAppLayout.scss';
</style>

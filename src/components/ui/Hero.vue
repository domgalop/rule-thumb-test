<template>
  <article class="hero__wrapper">
    <div class="hero__layout">
      <h2 class="hero__title">
       <span class="hero__title"> What's your opinion on </span>
        <span class="hero__title--highlight">Pope Francis?</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia maxime saepe magnam,
        quia veritatis hic molestias dolore doloremque delectus blanditiis
      </p>
      <a href="https://es.wikipedia.org/wiki/Pope" class="more__info__link">
        <i class="fab fa-wikipedia-w"></i>More Information
      </a>
      <p class="verdict">what's your verdict?</p>
    </div>
      <button class="button__container--hero button__color--thumbUp">
        <i class="fas fa-thumbs-up"></i>
      </button>
      <button class="button__container--hero button__color--thumbDown">
        <i class="fas fa-thumbs-down"></i>
      </button>
  </article>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/Hero.scss';
</style>

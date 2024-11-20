<script setup>
import WorkExperienceComponent from '@/components/misc/WorkExperienceComponent.vue';
import TechStackComponent from '@/components/misc/TechStackComponent.vue';

// Modals
import FinovaModalComponent from '@/components/modals/workexperience/FinovaModalComponent.vue';
import DeverseModalComponent from '@/components/modals/workexperience/DeverseModalComponent.vue';
import IMDModalComponent from '@/components/modals/workexperience/IMDModalComponent.vue';
import OMModalComponent from '@/components/modals/workexperience/OMModalComponent.vue';
import FiverrModalComponent from '@/components/modals/workexperience/FiverrModalComponent.vue';

const techStack = [
  { logo: 'si-vuedotjs', name: 'Vue.js', description: 'JS Framework' },
  { logo: 'co-laravel', name: 'Laravel', description: 'PHP Framework' },
  { logo: 'fa-database', name: 'MySQL', description: 'Databases' },
  { logo: 'co-docker', name: 'Docker', description: 'Environments' },
  { logo: 'fa-git-alt', name: 'Git', description: 'Source Control' },
  { logo: 'co-amazon-aws', name: 'AWS', description: 'Hosting' },
  { logo: 'co-unreal-engine', name: 'Unreal Engine', description: 'Game Engine' },
  { logo: 'co-cplusplus', name: 'C++', description: 'Low-level Language' }
];

const workExperience = [
  { logoAlt: 'Finova Logo', logo: require('@/assets/logos/finova.webp'), company: 'Finova', position: 'Frontend Developer', service: 'Jul 2024 - Current', modal: FinovaModalComponent },
  { logoAlt: 'Deverse Logo', logo: require('@/assets/logos/deverse.webp'), company: 'Deverse', position: 'Founder', service: 'Jun 2021 - Current', modal: DeverseModalComponent },
  { logoAlt: 'IMD Interactive Logo', logo: require('@/assets/logos/imd.webp'), company: 'IMD Interactive', position: 'Freelance Game Developer', service: 'Dec 2020 - Jan 2024', modal: IMDModalComponent },
  { logoAlt: 'Old Mill Logo', logo: require('@/assets/logos/om.svg'), company: 'Old Mill', position: 'Software Developer', service: 'Oct 2019 - Jun 2024', modal: OMModalComponent },
  { logoAlt: 'Fiverr Logo', logo: require('@/assets/logos/fiverr.webp'), company: 'Fiverr', position: 'Software Freelancer', service: 'Jun 2018 - Aug 2019', modal: FiverrModalComponent }
];
</script>

<template>
  <div class="home">
    <div class="home-intro" v-motion-slide-visible-top>
      <img src="@/assets/images/me.webp" width="100" height="100" alt="Photo of Artur Dworaczek" class="home-intro-me-image">
      <h1 class="home-intro-heading">Software developer, founder,<br/>and amateur mechanic.</h1>
      <p>I'm a software developer and founder of <a href="https://deverse.uk/" target="_blank">Deverse</a>, a software as service provider based in the United Kingdom, where we develop technologies that empower regular people and businesses to achieve their goals.</p>
      <div class="home-intro-links">
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/arturdwora/" target="_blank"><v-icon name="bi-linkedin" scale="1.75" /></a>
        <a aria-label="Github" href="https://github.com/arturdworaczek" target="_blank"><v-icon name="bi-github" scale="1.75" /></a>
      </div>
    </div>

    <div class="home-info">
      <div class="home-info-left" v-motion-slide-visible-left>
        <tech-stack-component :tech-stack="techStack" />
      </div>
      <div class="home-info-right" v-motion-slide-visible-right>
        <work-experience-component :work-experience="workExperience" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.home-intro {
  width: 65%;
}

.home-intro-me-image {
  border-radius: 50%;
}

.home-intro-links {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.home-info {
  display: flex;
  gap: 2rem;
}

.home-info-left {
  flex: 0.5;
}

.home-info-articles-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.home-info-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 0.5;
}

@media screen and (max-width: @breakpoint-mobile) {
  .home-intro-heading {
    font-size: 2.25rem;
  }
}

@media screen and (max-width: @breakpoint-tablet) {
  .home-intro {
    width: 100%;
  }
  .home-info {
    flex-direction: column;
  }
}
</style>
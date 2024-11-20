<script setup>
import BackgroundBeamsComponent from '@/components/ui/backgrounds/BackgroundBeamsComponent.vue';
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
    <footer v-motion-slide-visible-bottom>
        <div class="footer-container border background-primary">
            <background-beams-component />
            <div class="footer">
                <div class="footer-contact border-bottom">
                    Like what you see?<br/>Reach out <a class="underline" href="mailto:enquire@dworaczek.uk">via email</a> to collaborate!
                </div>
                <div class="footer-info">
                    <div class="footer-info-contact border background-primary">
                        <span class="footer-info-heading border-bottom">Contact Information</span>
                        <span><strong>Email:</strong> <span class="enable-selection">Enquire@dworaczek.uk</span></span>
                        <span><strong>Location:</strong> Somerset, UK</span>
                    </div>
                    <div class="footer-info-contact border background-primary">
                        <span class="footer-info-heading border-bottom">Social Media</span>
                        <a href="https://www.linkedin.com/in/arturdwora/" target="_blank">LinkedIn</a>
                        <a href="https://github.com/arturdworaczek/" target="_blank">GitHub</a>
                    </div>
                </div>
                <div class="footer-owner border background-primary">
                    <span>Artur Dworaczek</span>
                    <span>© {{ currentYear }} All rights reserved.</span>
                </div>
            </div>
        </div>
        <div class="footer-open-source">
            <v-icon name="ai-open-access-square" scale="1.75" />
            <span class="footer-open-source-title">This website is <a class="underline" href="https://github.com/arturdworaczek/Dworaczek.uk" target="_blank">open source</a>.</span>
        </div>
    </footer>
</template>
  
<style lang="less" scoped>
.footer-container {
    position: relative;
}

.footer {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    font-size: medium;
}

.footer-contact {
    font-family: 'Black';
    font-size: xxx-large;
    padding-bottom: 2.5rem;

    a {
        font-family: 'Black';
    }
}

.footer-info {
    display: flex;
    justify-content: space-between;
    gap: 1.25rem;

    .footer-info-contact {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        span.footer-info-heading {
            font-family: 'Bold';
            font-size: large;
            padding-bottom: 1rem;
            margin: 0 0 0.5rem 0;
        }
    }
}

.footer-owner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-open-source {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .footer-open-source-title {
    font-family: 'Bold';
    font-size: medium;
    a {
      font-family: 'Bold';
      font-size: medium;
    }
  }
}

@media screen and (max-width: @breakpoint-mobile) {
    .footer-contact {
        font-size: xx-large;
    }

    .footer-info {
        flex-direction: column;
    }

    .footer-owner span {
        font-size: x-small;
    }
}
</style>
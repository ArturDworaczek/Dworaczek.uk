<script setup>
import BackgroundComponent from './components/ui/backgrounds/BackgroundDotsComponent.vue';
import HeaderComponent from './components/core/HeaderComponent.vue';
import FooterComponent from './components/core/FooterComponent.vue';
import ScrollTopButtonComponent from './components/ui/buttons/ScrollTopButtonComponent.vue';

import { onMounted, onUnmounted, ref } from 'vue';
import useView from '@/composables/ViewComposable';

const { percentageSeen } = useView();

// Init the data-theme attribute based on the user's system preferences.
document.body.setAttribute('data-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const headerRef = ref(null);
const showScrollTop = ref(false);

var showScrollTopHandler = function () {
  if (percentageSeen(headerRef.value?.$el) == 100) {
    showScrollTop.value = true;
  } else {
    showScrollTop.value = false;
  }
};

onMounted(() => {
  document.addEventListener("scroll", showScrollTopHandler);
});
onUnmounted(() => {
  document.removeEventListener("scroll", showScrollTopHandler);
});
</script>

<template>
  <background-component />
  <header-component ref="headerRef" />
  <router-view />
  <scroll-top-button-component v-if="showScrollTop" />
  <footer-component />
</template>

<style lang="less">
div {
  scrollbar-color: @dworaczek-white-gray transparent;
}
[data-theme="dark"] div {
  scrollbar-color: @dworaczek-light-gray transparent;
}

.background-primary {
  background-color: white;
}
[data-theme="dark"] .background-primary {
  background-color: @dworaczek-gray;
}

.background-secondary {
  background-color: @dworaczek-white-gray;
}
[data-theme="dark"] .background-secondary {
  background-color: @dworaczek-light-gray;
}

.border {
  padding: 1.25rem;
  border-radius: 1.25rem;
  border: 1px solid @dworaczek-white-gray;
}
[data-theme="dark"] .border {
  border: 1px solid @dworaczek-light-gray;
}

.border-bottom {
  border-bottom: 1px solid @dworaczek-white-gray;
}
[data-theme="dark"] .border-bottom {
  border-bottom: 1px solid @dworaczek-light-gray;
}

::-webkit-scrollbar {
  width: 10px;
  border-radius: 5px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 5px;
}

[data-theme="dark"]::-webkit-scrollbar-thumb {
  background: @dworaczek-gray;
}

* {
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

*:focus {
  outline: none;
}

.enable-selection {
  user-select: text;
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
}

html {
  scroll-behavior: smooth;
}

body {
  display: flex;
  position: absolute;
  justify-content: center;
  background-color: white;
  margin: 0;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body[data-theme="dark"] {
  background-color: @dworaczek-gray;
}

#app {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: space-between;
  position: relative;
  font-family: 'Light';
  background-color: rgba(white, 0.975);
  color: black;
  max-width: calc(1280px - 200px);
  min-height: calc(100dvh - 60px);
  width: 100%;
  padding: 30px 100px;
  overflow: hidden;
}
[data-theme="dark"] #app {
  color: @dworaczek-white-gray;
  background-color: rgba(@dworaczek-gray, 0.990);
}

@media screen and (max-width: @breakpoint-mobile) {
  #app {
    width: calc(100% - 60px);
    padding: 30px;
  }
  p {
    font-size: small;
  }
}

h1, h2, h3, h4, h5 {
  font-family: 'Bold';
  margin-bottom: 0;
}
h1 {
  font-family: 'Black';
  font-size: xxx-large;
}
h2 {
  font-size: x-large;
}
p {
  font-family: 'Light';
  margin-bottom: 0;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'Bold';
  vertical-align: middle;
  padding: 10px 25px 10px 25px;
  background-image: linear-gradient(45deg, white, #1dbf73, white);
  background-size: 300% 300%;
  background-position: -51% 4%;
  border: transparent;
  color: black;
  outline: none;
  transition: 0.25s;
  border-radius: 10px;
}
[data-theme="dark"] button {
  background-image: linear-gradient(45deg, @dworaczek-gray, #1dbf73, @dworaczek-gray);
  color: @dworaczek-white-gray;
}

button:disabled {
  cursor: default;
  opacity: 0.25;
}
button:hover:enabled {
  cursor: pointer;
  color: var(--deverse-gray);
  background-position: -100% 100%;
}
button:active {
  opacity: 0.7;
}

.transparent-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: transparent !important;
  padding: 8px 25px 8px 25px;
  border-radius: 10px;
  border: 1px solid @dworaczek-white-gray;
}
[data-theme="dark"] .transparent-button {
    border: 1px solid @dworaczek-light-gray;
}
.transparent-button:disabled{
  opacity: 0.2;
}
.transparent-button:hover:enabled {
  color: #1dbf73;
  border: 1px solid @dworaczek-green;
}

a.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'Bold';
  font-size: 14px;
  padding: 10px 25px 9px 25px;
  background-image: linear-gradient(45deg, white, #1dbf73, white);
  background-size: 300% 300%;
  background-position: -51% 4%;
  border: transparent;
  border-radius: 10px;
  outline: none;
  height: 17px;
  border-bottom: 1px solid rgba(@dworaczek-light-gray, 0.35);
  border-left: 1px solid rgba(@dworaczek-light-gray, 0.75);
}
[data-theme="dark"] a.button {
  color: @dworaczek-white-gray;
  background-image: linear-gradient(45deg, @dworaczek-gray, #1dbf73, @dworaczek-gray);
  border-bottom: 1px solid rgba(@dworaczek-white-gray, 0.35);
  border-left: 1px solid rgba(@dworaczek-white-gray, 0.75);
}

a.button:disabled {
  cursor: default;
  opacity: 0.7;
}

a.button:hover {
  cursor: pointer;
  color: @dworaczek-white-gray;
  background-position: -100% 100%;
  border-left: 0;
  border-right: 1px solid rgba(@dworaczek-light-gray, 0.35);
  border-bottom: 1px solid rgba(@dworaczek-light-gray, 0.75);
}
[data-theme="dark"] a.button:hover {
  border-right: 1px solid rgba(@dworaczek-white-gray, 0.35);
  border-bottom: 1px solid rgba(@dworaczek-white-gray, 0.75);
}

a {
  font-family: 'Regular';
  text-decoration: none;
  color: black;
  transition: 0.25s;
}
[data-theme="dark"] a {
  color: @dworaczek-white-gray;
}

a:hover {
  color: #1dbf73;
}
a:active {
  opacity: 0.7;
}

a.underline {
  text-decoration: underline;
}

input, textarea {
  padding-top: 1px;
  min-height: 24px;
  width: 100%;
  background-color: transparent;
  border: 0;
  color: black;
  font-family: 'Regular';
  resize: none;
}
[data-theme="dark"] input, [data-theme="dark"] textarea {
  color: @dworaczek-white-gray;
}
textarea {
  padding: 3px 0;
}

.error-occurred {
  animation: validation-error-shake 0.5s 1;
  color: @dworaczek-red !important;
  border-color: @dworaczek-red !important;
}

@keyframes background-right-left-animation-light {
  0% { background: linear-gradient(-90deg, @dworaczek-white-gray 0%, rgba(0, 0, 0, 0) 0%); }
  10% { background: linear-gradient(-90deg, @dworaczek-white-gray 0%, rgba(0, 0, 0, 0) 20%); }
  20% { background: linear-gradient(-90deg, @dworaczek-white-gray 0%, rgba(0, 0, 0, 0) 40%); }
  30% { background: linear-gradient(-90deg, @dworaczek-white-gray 10%, rgba(0, 0, 0, 0) 50%); }
  40% { background: linear-gradient(-90deg, @dworaczek-white-gray 20%, rgba(0, 0, 0, 0) 60%); }
  50% { background: linear-gradient(-90deg, @dworaczek-white-gray 30%, rgba(0, 0, 0, 0) 70%); }
  60% { background: linear-gradient(-90deg, @dworaczek-white-gray 40%, rgba(0, 0, 0, 0) 80%); }
  70% { background: linear-gradient(-90deg, @dworaczek-white-gray 50%, rgba(0, 0, 0, 0) 90%); }
  80% { background: linear-gradient(-90deg, @dworaczek-white-gray 70%, rgba(0, 0, 0, 0) 100%); }
  90% { background: linear-gradient(-90deg, @dworaczek-white-gray 90%, rgba(0, 0, 0, 0) 100%); }
  100% { background: linear-gradient(-90deg, @dworaczek-white-gray 100%, rgba(0, 0, 0, 0) 100%); }
}

@keyframes background-right-left-animation-dark {
  0% { background: linear-gradient(-90deg, @dworaczek-light-gray 0%, rgba(0, 0, 0, 0) 0%); }
  10% { background: linear-gradient(-90deg, @dworaczek-light-gray 0%, rgba(0, 0, 0, 0) 20%); }
  20% { background: linear-gradient(-90deg, @dworaczek-light-gray 0%, rgba(0, 0, 0, 0) 40%); }
  30% { background: linear-gradient(-90deg, @dworaczek-light-gray 10%, rgba(0, 0, 0, 0) 50%); }
  40% { background: linear-gradient(-90deg, @dworaczek-light-gray 20%, rgba(0, 0, 0, 0) 60%); }
  50% { background: linear-gradient(-90deg, @dworaczek-light-gray 30%, rgba(0, 0, 0, 0) 70%); }
  60% { background: linear-gradient(-90deg, @dworaczek-light-gray 40%, rgba(0, 0, 0, 0) 80%); }
  70% { background: linear-gradient(-90deg, @dworaczek-light-gray 50%, rgba(0, 0, 0, 0) 90%); }
  80% { background: linear-gradient(-90deg, @dworaczek-light-gray 70%, rgba(0, 0, 0, 0) 100%); }
  90% { background: linear-gradient(-90deg, @dworaczek-light-gray 90%, rgba(0, 0, 0, 0) 100%); }
  100% { background: linear-gradient(-90deg, @dworaczek-light-gray 100%, rgba(0, 0, 0, 0) 100%); }
}
</style>

import { createApp, h } from 'vue';
import { MotionPlugin } from '@vueuse/motion';

import App from './App.vue';
import router from './router';

// oh-vue-icons
import { OhVueIcon, addIcons } from 'oh-vue-icons';
// Social media icons
import { BiGithub, BiLinkedin } from 'oh-vue-icons/icons';
addIcons( BiGithub, BiLinkedin );
// Toggle button icons
import { BiMoonStars, BiSun } from 'oh-vue-icons/icons';
addIcons( BiMoonStars, BiSun );
// Tech Icons
import { CoDocker, FaGitAlt, SiVuedotjs, MdJavascript, SiCsharp, CoCplusplus, CoLaravel, FaDatabase, CoUnrealEngine, CoAmazonAws, CoReact, SiSupabase, SiSwift, SiSqlite, SiAwsamplify, SiAmazons3 } from 'oh-vue-icons/icons';
addIcons( CoDocker, FaGitAlt, SiVuedotjs, MdJavascript, SiCsharp, CoCplusplus, CoLaravel, FaDatabase, CoUnrealEngine, CoAmazonAws, CoReact, SiSupabase, SiSwift, SiSqlite, SiAwsamplify, SiAmazons3 );
// Validation Icons
import { IoCheckmarkCircle, FaRegularTimesCircle, PrTimes } from 'oh-vue-icons/icons';
addIcons( IoCheckmarkCircle, FaRegularTimesCircle, PrTimes );
// Link Icons
import { HiGlobeAlt, IoLogoAppleAppstore } from 'oh-vue-icons/icons';
addIcons( HiGlobeAlt, IoLogoAppleAppstore );
// Misc Icons
import { HiDownload, FaTimesCircle, MdWorkhistory, MdRocketlaunchRound, GiStack, MdVerticalaligntopRound, MdArrowbackRound, AiOpenAccessSquare, RiFileList3Fill, RiUserStarFill, OiDotFill, MdDescriptionRound, PrCircleOn } from 'oh-vue-icons/icons';
addIcons( HiDownload, FaTimesCircle, MdWorkhistory, MdRocketlaunchRound, GiStack, MdVerticalaligntopRound, MdArrowbackRound, AiOpenAccessSquare, RiFileList3Fill, RiUserStarFill, OiDotFill, MdDescriptionRound, PrCircleOn );

// Create Vue App
const app = createApp({
    setup() {
        // Setup Providers Here
    },

    render: () => h(App)
});

app.use(MotionPlugin);
app.use(router);

app.component('v-icon', OhVueIcon);
app.mount('#app');
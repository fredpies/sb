import '@/assets/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const additionalViewports = {
    1024: {
        name: '768p',
        styles: {
            width: '1024px',
            height: '768px'
        }
    }
};

export const parameters = {
    layout: 'left',
    viewport: { viewports: {
        ...additionalViewports,
        ...INITIAL_VIEWPORTS
        }}
};

export const decorators = [(story) => ({
    components: { story },
    template: '<div style="display: flex; justify-content: center; margin: 2rem;"><story /></div>'
})];



import BaseFormField from "@/components/base/BaseFormField";
import { action } from "@storybook/addon-actions";
import Vuex from "vuex";

export default {
    title: 'Base/BaseFormField',
    component: BaseFormField,
    argTypes: {
        label: { defaultValue: 'Label' },
        block: { defaultValue: false },
        size: {
            control: 'select',
            options: ['default', 'small', 'big'],
        },
        errorMessage: {
            defaultValue: 'Invalid value'
        },
        invalid: { defaultValue: false },
        icon: { defaultValue: 'fa fa-check' },
        input: {
            action: 'input'
        },
        bgColor: {
            control: 'color'
        },
        textColor: {
            control: 'color'
        }
    }
};

const Template = (args, { argTypes }) => ({
    components: { BaseFormField },
    props: Object.keys(argTypes),
    template: '<BaseFormField @input="input" v-bind="$props"/>',
});

const TemplateWithStore = (args, { argTypes }) => ({
    components: { BaseFormField },
    props: Object.keys(argTypes),
    store: new Vuex.Store({
        state: {
            currentValue: 0
        },
        mutations: {
            UPDATE_STATE(state, payload) {
                state = payload;
            }
        },
        actions: {
            updateValue({ commit, state }) {
                commit('UPDATE_STATE', state.currentValue++);
                action('state updated')(state.currentValue);
            }
        }
    }),
    methods: {
        logToStore() {
            this.$store.dispatch('updateValue');
        }
    },
    template: '<BaseFormField @input="logToStore" v-bind="$props"/>',
});

export const WithoutIcon = Template.bind({});
export const WithIcon = Template.bind({});
export const Invalid = Template.bind({});
export const asBlock = Template.bind({});
export const smallSize = Template.bind({});
export const baseSize = Template.bind({});
export const bigSize = Template.bind({});

export const withStore = TemplateWithStore.bind({});

WithoutIcon.args = {
    icon: ''
};

WithIcon.args = {
    icon: 'fa fa-calendar'
};

Invalid.args = {
    invalid: true
};

asBlock.args = {
    block: true
};

smallSize.args = {
    size: 'small',
};

baseSize.args = {
    size: 'default',
};

bigSize.args = {
    size: 'big',
};

withStore.args = {
};

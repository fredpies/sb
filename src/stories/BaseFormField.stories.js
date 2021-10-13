import BaseFormField from "@/components/base/BaseFormField";

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

export const WithoutIcon = Template.bind({});
export const WithIcon = Template.bind({});
export const Invalid = Template.bind({});
export const asBlock = Template.bind({});
export const smallSize = Template.bind({});
export const baseSize = Template.bind({});
export const bigSize = Template.bind({});

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

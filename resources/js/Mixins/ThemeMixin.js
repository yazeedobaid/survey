import {mapState} from 'vuex';

const questionsTheme = {
    computed: {
        ...mapState(['theme']),
        textQuestionTheme() {
            return [
                'w-full',
                'max-w-lg',
                'mx-4',
                'px-2',
                'py-4',
                'box-border',
                'leading-5',
                'text-xl',
                `text-${this.theme.primaryColor}-400`,
                'border-b-2',
                'outline-none',
                'focus:border-b-2',
                `focus:border-${this.theme.primaryColor}-300`,
            ].join(' ');
        },
        multiLineTextQuestionTheme() {
            return [
                'w-full',
                'max-w-lg',
                'max-h-64',
                'absolute',
                'resize-none',
                'mx-4',
                'px-2',
                'py-4',
                'box-border',
                'text-xl',
                `text-${this.theme.primaryColor}-400`,
                'border-b-2',
                'outline-none',
                'focus:border-b-2',
                `focus:border-${this.theme.primaryColor}-300`,
                'overflow-y-hidden',
            ].join(' ');
        },
        singleSelectQuestionTheme() {
            return [
                'w-6',
                'h-6',
                'bg-white',
                'appearance-none',
                'inline-block',
                'align-middle',
                'object-center',
                'rounded-full',
                'border',
                'select-none',
                `text-${this.theme.primaryColor}-400`,
                'checked:border-transparent',
                `checked:bg-${this.theme.primaryColor}-400`,
                'checked:bg-cover',
                'checked:bg-center',
                'checked:bg-no-repeat',
                'focus:outline-none',
                'focus:shadow-outline',
                `focus:border-${this.theme.primaryColor}-400`,
                'cursor-pointer',
                'flex-shrink-0',
                'flex-grow-0',
                `hover:bg-${this.theme.primaryColor}-400`,
            ].join(' ');
        },
        multiSelectQuestionTheme() {
            return [
                'w-6',
                'h-6',
                'bg-white',
                'appearance-none',
                'inline-block',
                'align-middle',
                'object-center',
                'rounded',
                'border',
                'select-none',
                `text-${this.theme.primaryColor}-400`,
                'checked:border-transparent',
                `checked:bg-${this.theme.primaryColor}-400`,
                'checked:bg-cover',
                'checked:bg-center',
                'checked:bg-no-repeat',
                'focus:outline-none',
                'focus:shadow-outline',
                `focus:border-${this.theme.primaryColor}-400`,
                'flex-shrink-0',
                'flex-grow-0',
                `hover:bg-${this.theme.primaryColor}-400`,
            ].join(' ');
        },
        questionLabelTheme() {
            return [
                'block',
                'w-full',
                'max-w-3xl',
                'mx-4',
                'py-4',
                'text-2xl',
                'tracking-wide',
                'text-gray-900'
            ].join(' ');
        },
        buttonTheme() {
            return [
                'px-2',
                'py-1',
                `bg-${this.theme.primaryColor}-400`,
                'text-white',
                'shadow',
                `hover:bg-${this.theme.primaryColor}-300`,
            ];
        },
        textTheme() {
            return [
                `text-${this.theme.primaryColor}-500`,
            ];
        }
    }
};

export default questionsTheme;

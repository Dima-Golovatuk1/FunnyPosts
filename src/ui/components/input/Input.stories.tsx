import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from './Input'

const meta = {
    title: 'Form/Input',
    component: Input
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof meta>

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            console.log("Дані форми:", Object.fromEntries(formData.entries()));
        };

export const Text: Story = {
    args: {
        type: "text",
        clearable: true,
        placeholder: "Enter your text..",
        required: true,
        name: "text"
    },
    render: (args) => {
        return (
            <form onSubmit={handleSubmit}>
                <Input {...args} />
                <button type="submit">
                    Send Data
                </button>
            </form>
        );
    }
}

export const Email: Story = {
    args: {
        type: "email",
        clearable: true,
        placeholder: "Enter your email...",
        required: true
    }
}

export const Password: Story = {
    args: {
        type: "password",
        clearable: true,
        placeholder: "Enter your password...",
        required: true,
    }
}

export const Search: Story = {
    args: {
        type: "search",
        clearable: true,
        placeholder: "Search...",
        required: true
    }
}


import { Button } from "../components/Button";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & {
	// custom props
	buttonText: string;
};

const meta: Meta<StoryProps> = {
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			options: ["primary", "secondary"],
			control: {
				type: "select",
			},
		},
		size: {
			options: ["sm", "md", "lg"],
			control: {
				type: "radio",
			},
		},
	},
	args: {
		onClick: fn(),
	},
};

export default meta;

export const primary: StoryObj<StoryProps> = {
	args: {
		variant: "primary",
		size: "md",
		buttonText: "Primary",
	},

	/*
	
	render: ({ buttonText, ...args }: StoryProps) => (
		<Button {...args} onClick={() => console.log("clicked")}>
			{buttonText}
		</Button>
	),
	
	*/

	render: ({ buttonText, ...args }: StoryProps) => (
		<Button {...args}>{buttonText}</Button>
	),
};

export const secondary: StoryObj<StoryProps> = {
	args: {
		variant: "secondary",
		size: "md",
		buttonText: "Secondary",
	},
	render: ({ buttonText, ...args }: StoryProps) => (
		<Button {...args}>{buttonText}</Button>
	),
};

# Story Book

<details>
<summary>Index</summary>

## Index

- Introduction
- Setup
- Documentation

</details>

---

<details>
<summary>Introduction</summary>

## Introduction

- Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.
- Storybook is a free, open-source tool that helps you build and test individual UI components without running your whole app. It's like a workshop where you can create and check different states of components easily. It works with frameworks like React, Vue, and Angular. Many teams use it for developing, testing, and documenting their UIs.

### Key Features:

- Component Isolation: Develop and test components independently.
- Interactive Playground: Create stories to visualize different states of components.
- Documentation: Automatically generate component documentation.

### Why Use Storybook?

- Ensures consistent UI development.
- Facilitates collaboration between developers, designers, and QA teams.
- Speeds up development by enabling component reuse and testing in isolation.
</details>

---

<details>
<summary>Setup</summary>

## Setup

- Install Framework : `npx create-vite .`
- Install Storybook : `npx storybook@latest init`

- Solve the Installation Problems

```cmd

C:\Windows\System32

C:\Windows\System32>D:

D:mkdir \temp

D:set TMP=D:\temp

D:set TEMP=D:\temp

D:\02-laptop\01-Client Interview\02 Skills\02-ui\11-story-book\02 Setup>npx storybook@latest init
```

- If any conflicts comes, change the versions.

```cmd
npm uninstall vite
npm install vite@^5.0.0
```

</details>

---

<details>
<summary>Stories</summary>

## Stories

- If you want to create story, create `Button.stories.ts` this type of `.stories.ts` extension then only storybooks knows the story.

### Template

```ts
import { Button } from "../components/Button";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
	component: Button,
};

export default meta;

export const primary: StoryObj<StoryProps> = {
	args: {
		variant: "primary",
		size: "md",
	},
	render: (args: StoryProps) => <Button {...args}>Button</Button>,
};
```

</details>

---

<details>
<summary>Documentation</summary>

## Documentation

- Official Website : [https://storybook.js.org/docs]
</details>

---

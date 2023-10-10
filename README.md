![ssoma-design-system-logo](ssoma-logo.svg)
# Ssoma Design System

**ssoma-design-system: "🧠 💬 A design system for the era of Trustworthy AI."**

## **What is ssoma-design-system?**
This repo, ssoma-design-system, is an open source project under the MIT license that has a vision of making AI a household product that expands every person’s efforts in word by helping us both convey and understand meanings, and in deed by helping us create tangible outcomes.

## **How to contribute for designers/developers 🤝**
Your contribution, small or large, is valued and welcome. Please read and familiarize yourself with the the Code of Conduct and the Contributing guide to get started. To install this repository for development, first install Node.js. From [these instructions](https://github.com/vitejs/vite/blob/main/packages/create-vite/README.md) for creating Vite projects, you should first install Node.js:

> Compatibility Note: Vite requires Node.js version 18+, 20+. However, some templates require a higher Node.js > version to work, please upgrade if your package manager warns about it.

Here is [a link for accessing Node.js](https://nodejs.org/en).

Then, run the following commands:

```bash
git clone https://github.com/rela-v/ssoma-design-system
cd ssoma-design-system
npm install
```

From there, to access storybook directly run the following command:

```bash
npm run storybook
```

Alternatively, to access the Vite website, run the following command:

```bash
npm run dev
```

## **More about ssoma-design-system and how it was developed**

**The Story**
In fall of 2023, rela-v (me) was an overworked student. And so, I wanted to improve my workflow: AI was a natural choice of tooling for this job. Unfortunately, the AI of today presumes massive model size, with cloud-based providers which are now equally massive in terms of their scope, reach, and organizational size. This leaves many questions: perhaps the most important question is one of trust - how can I trust artificial intelligence? What does that even mean to trust it? On the bright side, there has been a plethora of research on this exact subject and intensive efforts dedicated towards answering these critical questions. After reading for what felt like many days, I found that there is guidance for those who are creating artificial intelligence for trustworthiness by design (per both the NIST and the EU).

**The Challenge**
While there is guidance for the design of the artificial intelligence application itself, the pragmatic creator is left with many questions, not the least of which is the challenge which this repository intends to meet. How might we design user interfaces for the coming era of trustworthy AI?

**The Solution**
After analyzing the current research, and pending the results of ongoing research projects, I will propose the guidance by which this design system shall be created.

- Goal: To design and develop a comprehensive open-source design system for building trustworthy AI user interfaces, guided by the latest evidence and best practices, supported by a vibrant community of users and contributors, with widespread adoption by industry.

- Solution: This ambitious project shall have multiple facets, including but not limited to: (1) The Design System, (2) Documentation of the System, and (3) Promotion of the System. The Design System shall be detailed. Trustworthiness in AI importantly has two major categories: social trustworthiness, a measure of whether or not a person or group should trust the system in the same way they would trust a person, and technical trustworthiness, a measure of whether or not a person or group should trust the system in the same way they would trust a tool. A Design System which addresses both shall inherently have the following properties, confer those properties to compliant UIs, and imply the same properties for the applications that compliant UIs interface with:

1) Transparency: this addresses social trustworthiness. It means having *clear information*, *accessibile information*, *comprehensive information*, *contextualized information*, and *user-centered and user-controlled information flow*.

2) Reliability: this addresses technical trustworthiness. It means being *predictable (by the user)*, *accurate (up-to-date)*, *available (responsive and fast)*, *secure (protected against misuse)*, and *robust (shock-tested)*.

3) Flexibility: this means being prepared for what might come in the future, whether that is new evidence which changes the Design System, compliant UIs, or its applications. This implies being *atomic (boiled down to its smallest constituent parts and combined to form more complex structures)*, *loosely coupled (with minimized dependency on other components)*, *configurable (with options for personalization)*, *observable (with systems implemented to track its usage)*, and *agnostic (widely applicable, with a focus on functionality as opposed to implementation)*.

## **A Word of Thanks**
Thank you for your consideration towards this project. I would like to thank my dear and close friends who have supported me throughout my most formative years and encouraged me to pursue this project.
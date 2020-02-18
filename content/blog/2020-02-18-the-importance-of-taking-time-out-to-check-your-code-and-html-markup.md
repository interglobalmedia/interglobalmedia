---
title: The importance of taking time out to check your code and html markup
date: 2020-02-18T12:31:56.085Z
description: >-
  In this episode, I discuss what tools will help you in checking your source
  code AND html markup, thereby reducing the number of errors present in your
  code base or html markup.
image: /img/pawel-czerwinski-knx8h8schdk-unsplash.jpg
tags:
  - vscode
  - html-linting
  - javascript-linting
  - javascript-formatting
categories:
  - linting
author: Maria D. Campbell
---
- Link to [The importance of taking time out to check your code and html markup](https://anchor.fm/maria-campbell/episodes/The-importance-of-taking-time-out-to-check-your-code-and-html-markup-eatgo6) on anchorfm

I am noticing more and more that developers, new and experienced, rush to get their code deployed or sent for review, etc., and don't check their code carefully before doing so. As a result, silly errors, which could cause not so silly issues, are overlooked. This means sloppy code.

It is so important to check your code as you go along. `JavaScript linters` such as `ESLint for VS Code` (that is the editor I use, for example), `Prettier Formatter for VS Code` for `JavaScript` **code formatting** are ***helpful*** and ***important*** to **have**, but oftentimes, the **errors** ***reside*** in the `html`! It is ***equally important*** to **check** for ***errors*** in the `html` **markup**. There are ***three*** `VS Code extensions` I find **extremely helpful** in ***checking for errors*** in `html` **markup**:

- `HTMLHint VS Code` **extension** by ***Mike Kaufman***
- `Code Spell Checker` **extension** by ***Street Side Software***
- `Highlight Matching Tag` **extension** by ***vincasIt***

`HTMLHint` is a **static code analysis tool** for `HTML`. The way it works is that ***errors*** in `HTML` **files** are ***highlighted*** with `squiggly lines` and you can ***hover*** **over** the `squiggly lines` to see the **error message**. `HTMLHint` will ***only analyze*** the **currently open** `HTML` **file**, and ***does not*** **search** for `HTML` **files** to analyze ***within*** your **project folder**.

`Code Spell Checker` is a **spelling checker** for `source code`. It also ***works well*** with `camelCase code`.

`Highlight Matching Tag` ***highlights*** `opening` or `closing` **matching tags**. This extension will ***try*** to **match** from ***anywhere***: `tag attributes`, from `inside strings`, any `file`, while also **providing** ***extensive styling options*** to customize how **tags** are `highlighted`.

These extensions are ***especially useful*** when the `code base/html` **markup** becomes ***very large***, and it would become **very difficult** to ***find errors*** without them!

When you are working on a project, ***take the time*** to **check** for ***errors*** after **creating** your `code` or `html markup`, and ***use tools*** such as **these three plugins**, ***along with*** the `EsLint` (dbaeumer.vscode-eslint) **extension** for `VS Code` by ***Dirk Baeumer***, and `Prettier Code Formatter` **extension** for `VS Code` by ***Esben Petersen***. Those ***few extra minutes*** you **take** to ***check*** your `code` will ***save you*** **much time** and **aggravation** in the ***long run***. Things can get very sticky when you are going through thousands of ***lines*** of `code` or `html markup`!

I will be embedding this episode of **Plugging in The Holes** along with a ***transcript*** in the form of a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for your ***hearing*** and ***reading*** pleasure. I will be including the related resource links mentioned in the podcast of course. Always do. Bye for now!

## Related Resources:

- [Visual Studio Code](https://code.visualstudio.com/)

---
title: Migrating from Gatsby v2 to v3
date: 2021-04-10T13:47:09.974Z
description:
    In this episode, I discuss the minimum required changes I had to make to my
    Gatsby site when migrating from version 2 to version 3.
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
    - gatsbyjs-v2
    - gatsbyjs-v3
    - version-migrations
    - npm
    - yarn
    - css-modules
    - node-sass
    - peer-dependencies
categories:
    - gatsbyjs-v3
author: Maria D. Campbell
---

-   Link to the
    [Migrating from Gatsby v2 to v3](https://anchor.fm/maria-campbell/episodes/Migrating-from-Gatsby-v2-to-v3-eukj32)
    podcast on anchorfm

This past week I had to migrate my `Gatsby` **site** from `version 2` to
`version 3`. What **_motivated_** me to do this at this **particular time**?
There were **_two things_** that **_triggered_** the **move**. **_First_**, when
I ran `npm audit`, I noticed that I my `npm packages` had a **high number** of
`moderate` and `severe vulnerabilities`. When I tried to run `npm audit fix`,
**_enough_** of **_them_** `required` **manual fixes** to make me **_want_** to
`update` **_all_** my **packages**.

**_Because_** of the `npm update`, my `Gatsby` **version** went from `v 2.14.+`
to `3.2.1`, which is the **_latest version_** right now.

The **_other_** (and **_first thing_**) that I **noticed** on `my site` was that
my `gatsby-remark-reading-time` **plugin** was **_not_**
`functioning correctly`, and I **wanted** to **_fix_** it.

**_However_**, **after** I ran `npm update`, my `site` went **_bezerk_**. That
told me that `Gatsby version 3` must have been a `major update` that
**_required_** some **major refactoring**. I **_pursued_** this to find that my
**hunch** was **_correct_**.

This `post` is **_not_** about the `details`, as I have **_much further_**
`refactoring` to do **regarding** the `migration` from `version 2` to
`version 3`, but to **talk about** `npm` vs `yarn` (among **_other things_**)
when **using** `Gatsby version 3`.

**_First_** of all, **because** of `peer dependency` **_issues_**, I had to
`downgrade` to `Gatsby 3.0.3`, which was a **requirement** for **_just about_**
all of the **_required_** `peer dependencies`. But that was **_not enough_**.

**_According_** to the `Gatsby` **documentation**, the `Gatsby version` to
**_update_** to (this was **written** in `March 2021`, when the `major update`
was **_released_**), it is the **_following_**:

```json
package.json
{
  "dependencies": {
    "gatsby": "^3.0.0"
  }
}
```

I **made it** `3.0.3` **_because_** of what was **printed out** to the `console`
when I **_ran_** `npm update`.

**_Next_**, it **mentioned** that if you **_already_** had `npm 7`, you **could
run** the **_following_** (command) in `Terminal`:

```shell
npm install gatsby@latest --legacy-peer-deps
```

This **_would have_** been **great** to do if I **_actually_** had `npm 7`
(installed). **_However_**, `npm 7` does **_not_** come with `Node.js 14.16.1`,
which is the **_latest_** `stable version` of `Node.js`. And I **_don’t_**
consider it **good practice** to do a **_separate_** `global install` of `npm`
that is NOT **included** in the **version** of `Node.js` I am **using** on my
**_computer_**. So **this step** will **have** to **_wait_**.

**_Next_**, the `Gatsby docs` **_suggested running_** the `npm outdated`
**command** to **see** what `npm packages` **_didn’t_** have the
`latest versions` **_installed_**. I did that. And **_that’s when_** the
`peer dependency issues` **_exploded_**.

**_First_** I **tried** to **_fix_** them via `npm` using a **package** called
`install-peerdeps`. Did not help. It **_probably_** would have worked for
`packages` **_other than_** `Gatsby`, but it did **_not_** work for `Gatsby`.

**_Then_**, after **a lot** of **_failed experimentation_** with `npm`, I
**_figured_** that there **must be** a **_deeper_** `npm` vs `Gatsby v3`
**compatibility issue**. So I **_went back_** into the `Gatsby` **post
documentation** entitled
[Migrating from v2 to v3](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/)
to **_dig deeper_** `beneath` the `surface` of this **issue**.

For example, I **found** the **_following_** regarding
`“Handling version mismatches”` in `npm`:

```shell
When upgrading an already existing project (that has an existing node_modules folder and package-lock.json file) you might run into version mismatches for your packages as npm/yarn don’t resolve to the latest/correct version. An example would be a version mismatch of webpack@4 and webpack@5 that can throw an error like this:

Error: NormalModuleFactory.afterResolve (ReactRefreshPlugin) is no longer a waterfall hook, but a bailing hook instead.

An effective way to get around this issue is deleting node_modules and package-lock.json and then running npm install again. Alternatively, you can use npm dedupe.
```

I **_tried_** that **suggestion**. It did **_not_** `resolve` my `issues`
**_completely_**.

What was **happening** with **_me_** when **using** `npm`, **_first_** `14.4.0`,
which was what I was **_initially using_**, and then when I **_updated_** to
`14.16.1`, is that **when** I **ran** `gatsby build` or `gatsby develop`,
**_both_** (`commands`) **broke**.

**Out** of **_desperation_**, I decided to **try** the `yarn` **route**. I
**_don’t like_** `installing` anything `globally` if I can **_help it_**, so I
**used** `npx yarn`. **Doing** it **_this way_**, however, **meant** that
`my packages` **_really_** had to be **updated** to **versions** that the
**_latest version_** of `yarn` would **recognize**. Why? Because **using** `npx`
**means** that you are **fetching** the **_latest version_** of the `package`
from the `npm repository`. That **_means then_**, that **all** your
`dependencies` and `devDependencies` **must have** their **_latest versions_**
(or **at least** `versions` that the **_latest version_** of `yarn` would
**recognize**) **_installed_**.

**_According_** to the `Gatsby` **documentation** on their `post` entitled
[Migrating from v2 to v3](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/),

```shell
Depending on how the plugin authors have declared dependencies (e.g. marking a package as a dependency instead of a peerDependency) within those plugins, there could be a myriad of failures that arise. If you encounter any of these issues when migrating your project to Gatsby Version 3, we recommend that you use Yarn resolutions within your package.json.
```

**_This_** is what `alerted` me to the **_possibility_** that `npm` was **_no
longer_** the **way** to **go** with `Gatsby` **_moving forward_**. So I
**_removed_** my `package-lock.json` **altogether**, and **just have** a
`yarn.lock` now. This **_ultimately_** `fixed` my `issues`.

In **_addition_**, I had to **_add_** some `resolutions` to my `package.json`. I
**_did this_** after **_much_** `trial` and `error` because of the
**_following_** `stated` in the `Gatsby docs` as well:

```shell
If you rely on a plugin that is not found within the list of plugins within the Gatsby framework, you very well may need to use the following resolutions in the near term.
The specific resolutions we recommend at this time are found below:
```

And to **add** the **_following_** to one's `package.json` file:

```json
package.json
{
  "resolutions": {
    "graphql": "^15.4.0",
    "graphql-compose": "^7.25.0",
    "webpack": "^5.24.2"
  }
}
```

At **_one point_**, these `versions` will **have** to be **_changed_** when the
**_latest_** `package versions` **_change_**.

After **_much experimentation_** and probably **_incorrect_** `sequence` of
`steps`, I **_finally_** got my `gatsby develop` to **_not_** `break`. It
**_only_** `hung`. And I **_think_** that was **because** I have a **_number_**
of (new) `“warnings”` I **_need_** to **address**. I think **_after_** they are
**addressed** (I say this from **_experience_**), the `command` **should work**.
**_However_**, my `build command` **_was_** `successful`, and I was **able** to
get **_everything_** on my `site` to **_work again_**!

But to **_backtrack_** a **bit**, there were a **_few new_** `node-sass`
**related** issues of which the **_purported solutions_** were **_extremely
confusing_** and **_not_** `necessarily correct`. I **_believe_** the
`solutions` people were **_providing_** were `temporary fixes`, and did
**_not_** address what was **_really_** going on. In the `case` of **_my_**
`workflow config` and `Site config`, I **_found_** the `culprit`! And it had
**_everything_** to do with **how** I **_configured_** my `styles`, which was
**fine** and **correct** for `Gatsby v2`, but **_no longer_** `worked` for
`Gatsby v3`.

I think **a lot** of `developers`, **_including_** `myself` at first, did
**_not_** `connect` the `dots` with various **_subtle_** and **_not_** so
**subtle changes** that were **made** to **_approaching_** `CSS` in `Gatsby v3`.

**_First_** of all, I **used** to **use** `CSS modules` in my `Gatsby site`. I
had **_removed_** just about **all** of them **_previously_** and **placed
them** in (my) `global scss`. And there were also a **_few_** `local css` files
I **kept** but **_imported_** them as **regular** `local css` **_instead_** of
**importing** them as `CSS modules`. Those **worked fine**.

But there was ONE **_lingering_** `file` I **_still_** was **importing** as a
`CSS module`. I had **_forgotten_** about it (I **_created_** it **_so long
ago_**), and could **_not understand_** at first **why** the **_break_** in the
`build` because of `CSS modules`, and that it was **_affecting_** my `css` and
**_indirectly_** my `external` (`non-react`)`JavaScript`, until I **_removed_**
the `local CSS module` for my `Search component` and **placed** it (the
`CSS code`) inside my `scss`. This **_solved_** the `issue`. My `node-sass`
**worked** as **_expected_** again. The `JavaScript` that was **_depending_** on
the `scss` in **_order_** to **work**, was **working** as **_expected_**, and my
`Google Search component` was **working again** as **_expected_**!

What was it about the CSS modules that broke my site? If we wanted to use CSS
modules, there was some code refactoring involved, but the name of the file
changed as well. So Search.css had to be changed to Search.module.css. This in
of itself is not enough, but I was happy to place the CSS code needed for my
Search component inside my scss code since nothing else on the site depended on
those styles.

## Deploying my site to Netlify

And then there was **_one last_** `important thing` I **had** to **_add_** to
the `root` of my `site` in **order** to **_make sure_** my `build`
**_succeeded_** when I **deployed** my `site` to `Netlify`!

I **_inspected_** my `build process` on `Netlify` **_carefully_** after it had
**crashed** on `remote`, but was **successful** `locally`. The **_reason_** for
that was that the **_default version_** of `Node.js` that is **currently** being
**used** on `Netlify` is `v 10+`. I was **_shocked_** to **find** this
**_out_**. But Gatsby v3 now only accepts Node.js v 12+. And I had **_no idea_**
how to **make** `Netlify` use **_my version_** of `Node.js`!

I **went** onto the `Netlify forums` to **_find out_**, and **one** of the
**community managers** was **_very nice_** to **share** that **information**
with me. **_Luckily_**, it **involved** `nvm` (`Node Version Manager`), which I
**use** on **_my computer_**, so the **fix** was **_easy_**! All I **had** to
**_do_** was **add** an `.nvmrc` **file** at the `root` of my `site`, and then
**_place_** the `version` (`number`) of `Node.js`I **_wanted_** `Netlify` to
**use**, **_inside_**. **_After_** I **did that**, I **had** to **run** the
`nvm use 14.16.1` (`command`) in the `command line` at the `root` of my `site`
so that `Netlify` would **_actually recognize_** that **version**. This step is
**_crucial_** to **make** the **_addition_** of the `.nvmrc` file **work** on
`Netlify` **during** the `build process`! To **_learn more_** about **adding**
an `.nvmrc` **file** to your `Gatsby site`when **using** `Netlify` as a
`hosting service`, **please visit** the **post** entitled
[Manage build dependencies](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript)
in the `Netlify docs`.

**_My_** `.nvmrc file` **contains** the **_following_**:

```shell
14.16.1
```

**Hope** this **_helps_** those that **_might_** have been having **_similar
issues_**!

I will be **posting** about **_other changes_** I **had** to **make** to
**_complete_** my **migration** from `Gatsby v2` to `v3` as I find the time to
implement them, but **these** are the **_bare minimum_** `changes` I **had** to
**make** in **_order_** for **everything** on the `site` to **work** as
**_expected_**!

I will be **embedding** this **episode** of **Plugging in The Holes** along with
a **transcript** in the **_form_** of
a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for
your **_hearing_** and **_reading_** pleasure. Bye for now!

## Related Resources

-   [Migrating from v2 to v3](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/)

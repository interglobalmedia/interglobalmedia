---
title: When the Homebrew command brew update fails
date: 2019-12-23T00:17:30.665Z
description: When the Homebrew command brew update fails.
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
    - homebrew
    - catalina
    - git
categories:
    - homebrew
author: Maria D. Campbell
---

Today I had to update my version of node on this site. Again, I was having
issues with **GatsbyJS**. My deploy failed because of the "Error: Cannot find
module 'gatsby/dist/utils/create-content-digest'". Damned if I know what that
is. That's a new one to me.

I have so far tried several solutions I came across when googling the issue, but
none have worked so far. It could be a **Node.js** incompatibility. Things
worked so well when I used **Node.js 11.14.0** and **Gatsby.JS 2.10.0**? But I
knew that eventually I would have to move on. And I did have to. However, this
resulted in this new issue that I now have to resolve.

But I digress. During this process, one of the solutions involved updating
**Homebrew**. So I did the following in **Terminal**:

```
brew update
```

But instead of updating, the following was printed out to the **Terminal**
window:

```
fatal: could not read Username for 'https://github.com': terminal prompts disabled
Error: Fetching [redacted] failed!
```

This was probably because I had recently upgraded my **OSX** operating system to
**Catalina**. It must have screwed up my **Homebrew** install. It had nothing to
do with my SSH public and private **Github** SSH keys, because I have had no
issues pushing to **Github**. In order to fix this problem, I had to type the
following **command** in the **Terminal** window:

```
git config --global --add url."git@github.com:".insteadOf "https://github.com/"
```

When I typed brew update again, I got the following in **Terminal**:

```
Another active Homebrew update process is already in progress.
Please wait for it to finish or terminate it to continue.
```

I hit Ctrl + C and killed the brew update process. However, when I typed

```
brew update
```

I got the following:

```
ERROR: Repository not found.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
Error: homebrew/homebrew-dupes does not exist! Run 'brew untap homebrew/homebrew-dupes'
```

I followed the above instructions, and typed the following in **Terminal**:

```
brew untap homebrew/homebrew-dupes
```

It resulted in:

```
Untapping homebrew/dupes...
Untapped (117 files, 133.5KB).
```

Then I typed the command:

```
brew update
```

which resulted in:

```
Already up-to-date.
```

Now I was ready to use Homebrew again.

-   [Git Error: Could not read Username for 'https://github.com': terminal prompts disabled](https://jacopretorius.net/2018/05/git-error-could-not-read-username.html)

---
title:
    'How to immediately increase the accessibility rating of your (GatsbyJS)
    site'
image: neonbrand-395901-unsplash.jpg
description:
    'How to immediately increase the accessibility rating of your (GatsbyJS)
    site.'
date: '2019-06-12'
tags:
    [
        'lighthouse-for-web-developers',
        'lighthouse-audits',
        'web-accessibility',
        'wcag',
        'color-contrast',
        'tooltips',
    ]
categories: ['web-accessibility']
author: 'Maria D. Campbell'
---

When I first started working with [GatsbyJS](https://www.gatsbyjs.org), I
focused on creating fun colorful sites and honestly not really focusing on
accessibility (**a11y**). In that way I had been severely spoiled with
**WordPress**. I usually used themes which already had built in accessibility,
so aside from color, there was not much else I had to do to make a site
accessible. That changed when I switched over to building with
[GatsbyJS](https://www.gatsbyjs.org).

That is not to say that I was not being reminded of the importance of a11y when
developing a site. A few years ago (2016 I think?)
[eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) came
out. One can parse this plugin with an editor lint plugin, thereby adding
accessibility standards into an application in real-time. I have been using this
in my React development workflow for a while now, but often I used to simply
turn off individual rules I did not know about.

Then I started working with [GatsbyJS](https://www.gatsbyjs.org). Around the
same time I started seeing much reference to **_a11y_** on **Twitter** amongst
developers I follow. I also heard about cases where people with accessibility
issues were suing site owners with low or no accessibility ratings, and I
started to pay attention.

When I migrated my **_WordPress_** websites over to
[GatsbyJS](https://www.gatsbyjs.org), at first I did not pay any heed to
accessibility when re-building my developer blog. I didn't think it would matter
much there. By the time I got to working on my business site, I decided to learn
more about what an accessible friendly site meant and how to **_increase_** its
accessibility rating.

The **_first thing_** I **learned** was that I had to **_pay attention_** to
**color contrast**. According to the article
[Contrast and Color Accessibility](https://webaim.org/articles/contrast/) on the
[WebAIM](https://webaim.org/) (web accessibility in mind) website,

> Contrast and color use are vital to accessibility. Users, including users with
> visual disabilities, must be able to perceive content on the page.

Initially, the colors I chose for my developer blog failed miserably. I later
found out that I (originally) had an overall
[Lighthouse](https://developers.google.com/web/tools/lighthouse/) accessibility
rating of 57! But what struck me the most was when I finished my business site
for which I was extremely a11y conscious and revisited my developer blog, I
screeched! In fact, I shared the following tweet on **Twitter** when that
happened:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Forcing myself to make my sites more accessible has made me more sensitive to color choices and look at colors differently. When I completed my biz site and went back to my dev blog, I screeched! And now am working on making it more accessible all around. It&#39;s a process.</p>&mdash; Maria Campbell (@letsbsocial1) <a href="https://twitter.com/letsbsocial1/status/1138089288774692864?ref_src=twsrc%5Etfw">June 10, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

So why is web accessibility SOOO important now? Because now, more than ever, we
are all extremely dependent on the internet. For example, physical businesses
are closing in favor of ecommerce. There is less and less physical mail in favor
of email. The list goes on and on. So in order for the web experience to be
useful to those with impairments, we need to continue to make the web more
accessible. We did it with wheelchair access on the physical plane, for example,
so why not provide accessibility support on the internet?

As I mentioned in my tweet, it is a process. It is especially a process for
creative types who want to show off their skills and creativity! We just have to
become more creative within the confines of accessibility. That is a creative
skill in itself, and that is how we should look at it. Things are ever evolving,
and we have evolved into more of an a11y society. I don't know how things work
around the rest of the world, but it is definitely a big issue here in the
States (as it should be).

Getting back to my accessibility journey with
[GatsbyJS](https://www.gatsbyjs.org), when it came to my business site, I wanted
to make one that was "colorful" but still "color accessible". To do that, I had
to find tools that would help me get there.

First off, I made sure to make frequent use of **Google's** **_Lighthouse Tool
for Web Developers_**. According to the
[Lighthouse](https://developers.google.com/web/tools/lighthouse/) page,

> Lighthouse is an open-source, automated tool for improving the quality of web
> pages. You can run it against any web page, public or requiring
> authentication. It has audits for performance, accessibility, progressive web
> apps, and more.

Next I had to find a tool which would let me know whether my color combinations
passed the a11y **_"Contrast Ratio"_** test. I came across a great tool called
[ColorCube](https://oomphinc.github.io/colorcube/).
[ColorCube](https://oomphinc.github.io/colorcube/) is

> … an a11y tool aimed at designers and developers. From a list of colors, we
> give you lots of information about how those colors perform with common color
> combinations.

Created by [Oomph](https://www.oomphinc.com/), they state that

> A better web is an accessible web for all. We wanted a tool that could be used
> before a project starts—one that helps assess how an existing brand color
> palette might perform in an accessible way. Starting early means that we can
> make adjustments early to avoid non-accessible colors later.

However, they also state

> The algorithm used in this tool and subsequent results are based on the
> luminosity algorithm recommended in the WCAG 2.0 (Web Content Accessibility
> Guidelines) to test for contrast. This tool is for general assessment purposes
> only and not a guarantee of compliance.

That being said, I was **_literally_** **copying** and **pasting** a myriad of
`rgb` and `hex` **colors** to see which ones MIGHT pass the **contrast test**.
It was brutal, and the most frequent colors that popped up were black and white,
and very dark accompanied by very light colors. This meant that sticking to
accessibility guidelines means being severely restricted to what colors are
acceptable!

Recently I (re)visited the [A11y Project](https://a11yproject.com/) website.
There, within the **Resources** page, I found a bunch of tools which would aid
me even better in increasing the
[Lighthouse](https://developers.google.com/web/tools/lighthouse/) (color)
accessibility rating of my (and my clients') sites. A number of them are
available as Chrome extensions as well. I have already added several of them and
will be trying them out immediately! I will be sharing links to various a11y
related resources, including the [A11y Project](https://a11yproject.com/), at
the end of this post.

I didn't want to stop at color contrast. I wanted to make my site immediately
more accessible in other ways. After some research, I found that **adding**
**_tooltips_** via the `title attribute` to links (or other html tags) would
somewhat increase a site's accessibility rating. In may case, it helped A LOT.

I still have more to address on my websites, but on my business site, overall my
accessibility rating on the pages ranges from 81 to 91! That's a tremendous
increase from 65. On my home page, initially I got it up to 83, but with the
addition of a text carousel yesterday with purportedly low contrast colors, it
fell to 75. I will have to be revisiting it in order to boost that number
pronto!

On my developer blog, the rating jumped from 57 to mostly 91+, with a couple of
ratings in the 80s. Not bad for a quick start!

**_Happy a11y design and development!_**

## Related Resources:

-   <a href="https://a11yproject.com/" title="visit link to the Accessibility (A11y) Project website">The
    A11y Project</a>

-   <a href="https://uxdesign.cc/the-easiest-part-about-designing-accessible-websites-76cd6b9a7ae4" title="visit link to the article entitled 'Designing for accessibility, step 1: Color contrast' on the UX Design website">Designing
    for accessibility, step 1: Color contrast</a>

-   <a href="https://developers.google.com/web/tools/lighthouse/" title="visit link to Google's Lighthouse for Web Developers Tool page to learn more about what it can do for you and your website">Google's
    Lighthouse for Web Developers Tool</a>

-   <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" title="visit link to W3C.org's Web Accessibility Initiative website web page dedicated to Web Content Accessibility Guidelines (WCAG) Overview">Web
    Content Accessibility Guidelines (WCAG) Overview</a>

-   <a href="https://webaim.org/articles/contrast/" title="visit link to article entitled 'Contrast and Color Accessibility' on the WebAIM website">Contrast
    and Color Accessibility</a>

-   <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y" title="visit link to the eslint jsx a11y plugin on Github to learn more">eslint-plugin-jsx-a11y
    on Github</a>

-   <a href="https://medium.com/@emilymears/getting-started-with-web-accessibility-in-react-9e591fdb0d52" title="visit link to article on Medium entitled 'Getting Started with Web Accessibility in React' by Emily Mears to learn more about web accessibility and React">Getting
    Started with Web Accessibility in React</a>

-   <a href="https://reactjs.org/docs/accessibility.html" title="visit link to page about Accessibility (and React) on the Official ReactJS Website">About
    Accessibility (and React) on the Official ReactJS Website</a>

-   <a href="https://blog.bitsrc.io/achieving-accessibility-in-react-applications-d762f8f2a3e7" title="visit link to article on Medium entitled 'Achieving Accessibility in React Applications' by Nwase Lotanna to learn more about accessibility and React">Achieving
    Accessibility in React Applications</a>

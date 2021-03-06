---
title: 'GatsbyJS and Security'
image: /img/calvin-ma-1270886-unsplash.jpg
description:
    'The past couple of days(and later tonight) has been all about web security,
    so in this episode of Plugging In The Holes podcast I talk about web
    security and why one would choose GatsbyJS over other static frameworks.'
date: '2019-06-20'
tags:
    [
        'podcasting',
        'technology',
        'web-security',
        'official-aws-meetup',
        'armor-defense',
        'owasp',
        'gatsbyjs',
    ]
categories: ['podcasting']
author: 'Maria D. Campbell'
---

-   [Link to GatsbyJS and Security podcast on anchorfm](https://anchor.fm/maria-campbell/episodes/GatsbyJS-and-Security-e4d5ms)

The past couple of days(and later tonight) has been all about web security.

It can be hard to wrap one's head around the concept of **_security_** and
**static sites**, especially when there is no collection of (sensitive) data.

Last night I attended an
[AWS New York | Official Meetup](https://www.meetup.com/AWS-NYC/) event at
American Whiskey on West 30th Street in Manhattan. I expected attendance to be
higher, but then that might have had more to do with where it was taking place.
I, for one, did not even bother to bring my laptop because my first reaction
was,

> How serious can this be if it is taking place at a Whiskey Bar?

Also, I was afraid that my computer could potentially be damaged within such an
environment.

It was a bit difficult to follow the hacking demonstration from where I was
sitting, so at one point I moved much closer in order see and hear better. But
it was a good demonstration. I just wish it had taken place in an environment
more conducive to presentations. It would have been nice if it took place at the
**AWS Loft** downtown, but they close at 6pm. Hopefully the next event will take
place at a better location. On a more positive note, the hors d'hoeuvres and the
wait staff upstairs were super nice, and [Armor Defense](https://www.armor.com/)
were very generous with the drink tickets.

The event did get me curious about how **GatsbyJS** rated security-wise. I came
across the following post entitled **Security For Modern Web Frameworks** on
their website:

[Security for Modern Web Frameworks](https://www.gatsbyjs.org/blog/2019-04-06-security-for-modern-web-frameworks/)

It contained a link to an article entitled
[Security for Static Websites](https://blog.sqreen.com/static-websites-security/).
It's perhaps a bit outdated by now, but it definitely gets you thinking.

Then I wanted to find out more about why one would choose **GatsbyJS** over
other frameworks when it comes to security. I found a list of reasons on the
[GatsbjJS repository on Github](https://github.com/gatsbyjs/gatsby) entitled
[Answering IT and Security Questions](https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/answering-it-security.md).
It stated the following:

> At larger companies, such as the Fortune 500, there are Security teams that
> audit new technologies being used inside the company. If security engineers
> are interested in your project, some talking points that can help answer their
> questions include:
>
> -   Because Gatsby compiles your site to flat files, rather than having
>     running app servers and databases users are targeting, it reduces the
>     attack surface of the site to outsiders.
> -   Gatsby adds a layer of indirection which obscures your CMS -- so even if
>     your CMS is vulnerable, bad actors have no idea where to find it. This is
>     in contrast to systems where bad actors can easily locate the admin
>     dashboard at, for example, /wp-admin and attempt to hack in.
> -   Gatsby lets you serve your site from a global CDN, likely whatever CDN
>     your company is using (for example, Akamai, Cloudflare, Fastly...), which
>     effectively eliminates the risk of DDOS attacks. It's helpful to emphasize
>     to security personnel that these benefits were a factor in why Gatsby was
>     selected for the project. You chose Gatsby, in part, because it
>     is more secure." Read about security in
>     [Gatsby](https://www.gatsbyjs.org/): [Security For Modern Web Frameworks](https://www.gatsbyjs.org/blog/2019-04-06-security-for-modern-web-frameworks/#reach-skip-nav)
>     -- Note: do you have additional ideas on how to answer IT and security
>     questions for Gatsby projects? We welcome contributions to the Gatsby
>     docs. Find
>     out [how to contribute](https://www.gatsbyjs.org/contributing/how-to-contribute/).

Other links in the [Security For Modern Web
Frameworks]([Security For Modern Web Frameworks](https://www.gatsbyjs.org/blog/2019-04-06-security-for-modern-web-frameworks/#reach-skip-nav))
article are
[The OWASP Top Ten](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project),
listing top website security vulnerabilities.
[OWASP](https://www.owasp.org/index.php/Main_Page), aka **Open Web Application
Security Project**, is an excellent resource for security. They also have a
[meetup you can join](https://www.meetup.com/owaspnyc/). I just found out today
that there is also an
[OWASP meetup for WOMEN in security](https://www.meetup.com/womeninappsec/).
Yay!

Then there is a link to an
[OWASP cheat sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/REST_Security_Cheat_Sheet.md)
for information on securing all APIs (authenticated or not).

Having started development some years ago with
[WordPress](https://wordpress.org/download/), I am always striving to learn more
about **_web security_**. There, I was constantly riddled with various security
issues when it came to my community website or my entertainment publication I
ran for several years.

We have always had to deal with security issues on the web. The difference today
is that the number of **_nefarious hackers_** out to destroy people's lives for
no real reason has increased tremendously because technology has also advanced
tremendously. It is no longer a matter of **_can_** someone **hack** into the
**system** or **website**. It's a matter of **_will_** they decide to choose you
over someone else as a target.

_BTW_, this morning I came across an article published yesterday on
[The Hacker News](https://thehackernews.com/), a publication dedicated to cyber
security, entitled
[Firefox Releases Critical Patch Update To Stop Ongoing Zero Day Attacks](https://thehackernews.com/2019/06/mozilla-firefox-patch-update.html).
According to the article,

> Mozilla earlier today released Firefox 67.0.3 and Firefox ESR 60.7.1 versions
> to patch a critical zero-day vulnerability in the browsing software that
> hackers have been found exploiting in the wild.

According to **_Samuel Groß_**, in **cyber security research** at
[Google Project Zero](https://googleprojectzero.blogspot.com/),

> ...the vulnerability could allow attackers to remotely execute arbitrary code
> on machines running vulnerable Firefox versions and take full control of them.

> The vulnerability, identified as CVE-2019-11707, affects anyone who uses
> Firefox on desktop (Windows, macOS, and Linux) — whereas, Firefox for Android,
> iOS, and Amazon Fire TV are not affected.

Lucky I went in to check out the latest news, because I had been using
**_Firefox_** in local development before yesterday, and yesterday, had
conducted an update to the _"latest version"_, which is **Firefox Quantum
67.0.3** (on Mac).

What web security issues have you encountered that you are still trying to solve
or have solved either as a developer or business owner? I would love to hear
from you. Feel free to **_email_** me or **leave** me a **voice message** on the
[Plugging In The Holes public page](https://anchor.fm/maria-campbell) on
[anchor.fm](https://anchor.fm/).

I will be embedding this episode of
[Plugging in The Holes](https://anchor.fm/maria-campbell/episodes/GatsbyJS-and-Security-e4d5ms)
along with a transcript in the form of a post on
[interglobalmedianetwork.com](https://www.interglobalmedianetwork.com) for your
hearing and reading pleasure. Bye for now!

## Related Resources

-   [The Hacker News](https://thehackernews.com/)

---
title: Zoom has invaded the web page too
date: 2021-03-07T01:44:52.556Z
description:
    I this episode, I discuss how zoom as invaded the web page, and how to avoid
    it.
image: /img/charles-deluvio-bxqomf5tvdk-unsplash.jpg
tags:
    - zoom
    - tel-url-scheme
    - iphone
    - google-voice
    - osx
    - web-design
    - web-development
categories:
    - zoom
author: Maria D. Campbell
---

-   Link to
    [Zoom has invaded the web page too](https://anchor.fm/maria-campbell/episodes/Zoom-has-invaded-the-web-page-too-ernoph)
    podcast on anchorfm

So I am finishing a `responsive semantic html5 resume` for the `Web Design 1`
class I am teaching, and I wanted to add my cell phone number in the resume
footer. This is not so much for me as for the students, so that potential
employers could call them on their cell phones.

I am on a `Mac`, and I have an `iPhone`, so the ideal situation for me would be
for the other person to also be on a `Mac` and have an `iPhone` so they could
call from either the `iPhone` or the `Mac`.

But when I set up the telephone call link using the `anchor` (`a`) `element`,
and I did it in the following way:

```html
<a href="“tel:+1-xxx-xxx-xxxx”" target="_blank" rel="noreferrer noopener"
    >1-xxx-xxx-xxxx</a
>
```

I was not directed to `Face Time`, but asked whether I wanted to use `zoom` for
the call. What??? Enough already with `zoom`.

Everyone is `zoom crazy`. How did that happen? I guess I wouldn’t say that if I
didn’t have `Blackboard` for teaching. I guess I would use `zoom` for work
outside of that. But I just didn’t like the idea that from nowhere, I didn’t
even have `zoom` open, I was being directed by default to zoom and not to my
**native** `Face Time`.

I finally figured out, however, how to avoid this. I changed the anchor element
markup to the following:

```html
<a href="“tel:+1-xxx-xxx-xxxx”" target="_blank" rel="noreferrer noopener"
    >Click to call</a
>
```

Instead of the text content of the anchor element containing a phone number, I
changed it to “Click to call”. The rest I kept the same. I also did not use
Chrome. Chrome makes you sign in in order to make the call. Enough already!

When I use the native Safari browser, however, it just opens the `Face Time` app
and gives you the option to call the number that you have supplied. Naturally,
it detects that the device you are calling is an Apple device.

Then I tried yet something else because I wanted to provide the same experience
across browsers. I **replaced** my `iPhone number` with my
`Google Voice number`. Then I added the `Google Voice number` as the
`text content` for the `anchor element`. **_No more_** `zoom` **invasions**. It
must be that I probably provided my cell phone number to zoom when I signed up,
and it then detects your number and automatically links to your number being
called from your device to `zoom`. I am guessing, but I am sure that is the
case. Honestly, I don’t even remember, but I am sure I did provide my cell phone
number.

So much technology on the web has changed in so little time. And so many
applications, like `zoom` for example, are so invasive. And not even necessary
for Apple devices, for instance! Does everything HAVE to be recorded and saved
afterwards? Is anything private anymore? The line between private life and work
has disappeared with the advent of `COVID 19`.

Everyone, get the damn vaccination and get back at least part of your life.
Protect yourself in the process as much as you can. I have already gotten the
first shot and will soon be getting the second. The minute I was invited to take
it, I ran for it. I personally am fed up with the current state of affairs, and
nothing is working properly. Nothing.

I will be **embedding** this **episode** of **Plugging in The Holes** along with
a **transcript** in the **_form_** of
a **post** on [interglobalmedianetwork.com](https://www.interglobalmedianetwork.com/) for
your **_hearing_** and **_reading_** pleasure. Bye for now!

## Related Resources

-   [zoom](https://zoom.us/)

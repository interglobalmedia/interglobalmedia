---
title: Running the Docker Tutorial
date: 2021-05-09T14:34:36.965Z
description: In this post, I talk about how to bypass the issue one most
  probably will come across when attempting to begin the Docker tutorial on
  docker.com. It involves the docker run command that they provide. It does not
  take into account that the default port it points to, port 80, is not already
  being used by something else on the system, when the probability is VERY HIGH
  that it is!
image: /img/stanislav-kondratiev-123540-unsplash.jpg
tags:
  - php
  - composer
  - package-managers
  - wordpress
  - phpdotenv
  - docker
  - composer
  - workflows
  - development-workflows
categories:
  - php
  - wordpress
  - docker
  - composer
author: Maria D. Campbell
---
I have ***just started*** learning `Docker`, because the `wp-env` **node module** I want(ed) to use for my `environment variables` ***locally*** that **include** an `API Key`, ***require*** using `Docker Compose`. This is ***similar to***, but would be ***in lieu*** of the `Composer` **package manager**.

When I went onto the `Docker` **website** to ***check out*** their `tutorial` so I could ***get started*** with **using** `Docker` with the `Wordpress` **website** I am ***building***, I saw the ***following***:

```shell
Docker Desktop (the new Docker, totally different from the previous Docker)

Docker Desktop is a native application that delivers all of the Docker tools to your Mac or Windows Computer.

Docker Desktop is a native application that delivers all of the Docker tools to your Mac or Windows Computer.

1. Open Docker Desktop. (Download [here](https://www.docker.com/products/docker-desktop) if you don't have it).
2. Type the following command in your terminal: \`docker run -dp 80:80 docker/getting-started\`
3.  Open your browser to [http://localhost](http://localhost/)
4. Have fun!
```

And:

```shell
Play with Docker

Play with Docker is an interactive playground that allows you to run Docker commands on a linux terminal, no downloads required.

1. Open Docker Desktop. (Download [here](https://www.docker.com/products/docker-desktop) if you don't have it).
2. Type the following command in your terminal: docker run -dp 80:80 docker/getting-started
3. Open your browser to http://localhost
4. Have fun!
```

I am ***specifically*** referring to the `command`

```shell
docker run -dp 80:80 docker/getting-started
```

or

```shell
docker run -dp 80:80 docker/getting-started:pwd
```

When I ***ran*** the ***first command***, I **got back** the ***following*** in `Terminal`:

```shell
docker run -dp 80:80 docker/getting-started                         ⏎
a6df47c9de95cd206c18599321d5dfd920dc3307782d8762e706a88e673b6d49
docker: Error response from daemon: Ports are not available: listen tcp 0.0.0.0:80: bind: address already in use.
```

For the ***second command***, I **got** the ***following***:

```shell
docker run -dp 80:80 docker/getting-started:pwd                     ⏎
Unable to find image 'docker/getting-started:pwd' locally
pwd: Pulling from docker/getting-started
89d9c30c1d48: Pull complete
24f1c4f0b2f4: Pull complete
16542569a10d: Pull complete
08396939143d: Pull complete
Digest: sha256:9156d395e7e41498d5348e95513d61fc7929db720393448306c5d7263d7f2696
Status: Downloaded newer image for docker/getting-started:pwd
05c1c07ff23f3e4f94b29fef1cbff36125d812dfebfeb0155c8904120cfe87b1
docker: Error response from daemon: Ports are not available: listen tcp 0.0.0.0:80: bind: address already in use.
```

When I ***ran*** the **command** `sudo lsof -i -P -n | grep 80` to find out what was **running** on `port 80` in the **background**, I **got** the ***following***:

```shell
identitys   324       mariacam   43u  IPv6 0x459711abdda06415      0t0    TCP [fe80:d::aaac:a8:598f:c1f9]:1024->[fe80:d::68ee:9100:3bd5:b0bb]:1024 (ESTABLISHED)
identitys   324       mariacam   47u  IPv6 0x459711abde57fdb5      0t0    TCP [fe80:d::aaac:a8:598f:c1f9]:29190->[fe80:d::68ee:9100:3bd5:b0bb]:1025 (ESTABLISHED)
identitys   324       mariacam   48u  IPv6 0x459711abde57fdb5      0t0    TCP [fe80:d::aaac:a8:598f:c1f9]:29190->[fe80:d::68ee:9100:3bd5:b0bb]:1025 (ESTABLISHED)
Dropbox     514       mariacam  180u  IPv4 0x459711abe0b3b955      0t0    TCP 192.168.0.4:53880->162.125.19.131:443 (ESTABLISHED)
StocksWid  1901       mariacam    5u  IPv6 0x459711abe2b4b0d5      0t0    TCP [2603:7000:4440:6b00:cc53:54f7:48b4:8417]:59377->[2600:141b:5000:580::3efe]:443 (CLOSED)
Code\x20H 81122       mariacam   66u  IPv4 0x459711abf5b0536d      0t0    TCP 192.168.0.4:50263->142.250.80.10:443 (ESTABLISHED)
nginx     83679       mariacam    7u  IPv4 0x459711abe601b5e5      0t0    TCP *:80 (LISTEN)
nginx     83679       mariacam    8u  IPv6 0x459711abdd6ea415      0t0    TCP *:80 (LISTEN)
nginx     83681       mariacam    7u  IPv4 0x459711abe601b5e5      0t0    TCP *:80 (LISTEN)
nginx     83681
```

Simply running the command(s) that `Docker` ****provided*** me with, was ***not*** an option!

I ***dug deeper***, and **found** the ***following*** on `The Practical Dev` (a `wonderful resource` by the way, and great `developer community`):

* [Docker Basics for Data Apps
  ](https://dev.to/analythium/docker-basics-for-data-apps-2e4l)

Within that **post**, I ***found*** the ***following resource***:

* [Docker Curriculum](https://docker-curriculum.com/)

I started ***going through*** the `documentation`, and ***following*** the `tutorial`. Low and behold, I ***found*** the `answer/solution` I was ***looking for***. A **way** of ***running*** `Docker` ***without*** specifying `port 80` ***specifically***. I ***found*** a `command` which ***publishes*** the **port** `Docker` is ***running on***, but in a way that my `Terminal` was ***not attached*** to the **running container**, meaning ***not running*** on `port 80` ***directly***, which is **used** for `HTTP` (`Hyper Text Transfer Protocol`) **connection** by ***default***. It is a ***popular*** and ***widely used*** `port` across the world. `Port 80` was **introduced** by [Tim Berners-Lee](https://www.w3.org/People/Berners-Lee) in `1991` in the `HTTP 0.9 document`. The `document` ***states*** that if there is ***no*** `port` **assigned** for `HTTP connection`, `Port 80` is **used** by ***default***. It ***connects*** you to the `World Wide Web` (`WWW`). A **user**, with the ***help*** of this `port`, can ***connect*** to `webpages` **available** on the `Internet`. It ***means*** `unencoded` **data exchange** takes place between the **user**’s `browser` and the `server` **using** this `port`. This `port` ***relates*** to `TCP` (`Transfer Control Protocol`- a `protocol` ***used*** in `data transmission`). He was ***also*** the **founder** of `World Wide Web` (`WWW`) in `1989`.

The `command` was the ***following***:

```shell
docker run -d -P --name static-site <name of static site>
```

The `-d` ***detaches*** my `Terminal` **instance** from the ***running container***, which would by ***default*** run on `port 80`. ***However***, there were ***other*** instance(s) **running** on `port 80`, which made this ***impossible*** for me to **connect** to the `Docker` **tutorial** using their `command`! Using the `-d` flag ***means*** that `Docker` has **gone** into `detached mode`. This ***also means*** that when you **close** your **instance** of `Terminal` **running** the **container**, the **container** will ***continue*** to **run** in the ***background***. The `-P` flag ***publishes*** all **exposed ports** used by ***running*** the `docker run` **command**. The `—name` flag ***corresponds*** to a `name` I want to give ***followed*** by the `name`.

***After*** I ran the above `command`, I ran the `command`

```shell
docker port static-site
```

to ***see*** the `ports` ***exposed*** being **used** by `Docker` when **running** the ***particular instance***. I **got back** the ***following***:

**Command**:

```shell
docker port static-site
```

**which returned**:

```shell
443/tcp -> 0.0.0.0:55000
80/tcp -> 0.0.0.0:55001
```

The ***second*** `port` is what **worked** for ***me***. So it could be the ***first*** or ***second*** `port` which ***could connect*** me to the **running container**. `TCP` stands for [Transmission Control Protocol](https://www.sdxcentral.com/resources/glossary/transmission-control-protocol-tcp), which is a ***connection-oriented*** `communications protocol` that ***facilitates*** the **exchange** of **messages** between **computing devices** in a `network`. It is the ***most common*** `protocol` in `networks` that ***use*** the `Internet Protocol` (`IP`), ***Together*** they are sometimes referred to as `TCP/IP`.

If you are ***also new*** to `Docker`, and you ***can’t get*** the `tutorial` **running** (probably not) using the `command` that ***they provide***, do the above.

**Note**: I ***decided*** to go with [phpdotenv](https://github.com/vlucas/phpdotenv) using the `Composer` **package manager**. I also ***wanted*** to **double check** if my `Mac` still had `PHP` ***installed***. I found out that ***probably*** `Big Sur` will be the ***last*** `Mac OS` that will ***include*** `PHP`, and right now it is ***only*** for `legacy purposes`. Probably **installing** `PHP` on my `computer` would be a ***very good*** idea. Just as I ***ended up*** doing with `Python 3.8+`.

I ***still intend*** on using `Docker` as part of my `workflow`, since so much is starting to require that step anyway!

It’s NOT just about the `code` anymore. It is ALSO about the `tools` that ***enable*** you to `“publish”` the `code`.
---
title: "My Poor Man's Steam Machine"
description: 'How I turned a retired office ThinkCentre into a couch gaming console — and why I kept Windows on it instead of going the SteamOS route.'
date: '2026-07-28'
tags: ['gaming']
cover: '/blog/thinkcentre-couch-setup.jpg'
coverAlt: 'A black Lenovo ThinkCentre tower standing on a desk, with two Xbox controllers resting on top of it'
draft: false
---

I wanted a couch gaming setup: flop on the sofa, grab a controller, play. A console,
basically — except I already own a Steam library, and buying a console to re-buy games I
have felt silly. So instead of buying anything, I went digging in the closet.

## The hardware

The star is a **Lenovo ThinkCentre M710t**, one of those office towers companies buy by
the pallet and throw out three years later. Mine is a retired work machine, and it's small
enough that it doesn't scream "gaming" sitting under the TV.

- **PC:** Lenovo ThinkCentre M710t — free, it was already in the closet
- **CPU:** Intel Core i5-7400 (2017, 4 cores)
- **GPU:** GTX 1650 4GB — the one thing I actually bought
- **RAM:** 16GB (4×4GB) · **Storage:** 256GB SATA SSD
- **Wi-Fi:** Mercusys MA30H USB — no Ethernet near the couch
- **Controllers:** 2× 8BitDo Ultimate 2C Wireless
- **OS:** Windows 11 Pro, running Steam in Big Picture Mode

Nothing here is fast by 2026 standards. But for what I play on a couch — not exactly
ray-traced showcases — it's fine. Big Picture boots, the controllers connect, it feels
like a console. That was the whole goal.

## Why Windows?

The "correct" move for a couch console is **SteamOS** or **Bazzite** — Linux setups
actually _designed_ to boot into a controller-friendly interface, no desktop, no fuss.

I kept Windows anyway, for one boring reason: my library just works. No compatibility
layer to babysit, no checking whether a game runs under Proton before buying it. A
dedicated Linux distro gives you the purer experience; Windows gave me the shortest path
to _just playing my games_. Not the elegant choice — the lazy-but-reliable one.

## Where Windows fights back

Windows is not built to live under a TV. It wants you to log in, manage an account, look
at a lock screen with a Bing photo of a fjord. None of that belongs in a living room where
the only input device is a controller.

The big one was **autologin**. Normally you untick "users must enter a password" in
`netplwiz` and you're done — except Windows 11 with a **Microsoft account** hides that
option entirely. The checkbox isn't there anymore.

The fix was **[Sysinternals Autologon](https://learn.microsoft.com/sysinternals/downloads/autologon)**.
It's a tiny official Microsoft tool: enter your credentials once, it stores them encrypted
in the registry as an LSA secret, and from then on the machine boots straight to the
desktop and into Big Picture.

So "less tinkering" needed an asterisk. I still had to reach for a Sysinternals tool to
make a PC do the one thing a console does out of the box. Hold that thought.

## Then Valve shipped an actual Steam Machine

In 2026 Valve released a real
**[Steam Machine](https://store.steampowered.com/steammachine)** — a boxy little console
running SteamOS natively. Which makes this a fair fight:

|                      | My ThinkCentre                       | Steam Machine (base)               |
| -------------------- | ------------------------------------ | ---------------------------------- |
| **What I paid**      | ~€150 (GPU, controllers, Wi-Fi)      | $1,049                             |
| **CPU**              | i5-7400 — 2017, 4 cores              | Zen 4, 6 cores                     |
| **GPU**              | GTX 1650 4GB                         | RDNA3, 28 CUs + 8GB VRAM           |
| **Realistic target** | 1080p, medium, older and indie games | modern titles, higher res with FSR |
| **Boots to Steam**   | after a Sysinternals workaround      | natively, out of the box           |
| **Size / noise**     | an office tower                      | console-sized                      |

The Steam Machine costs roughly **seven times** what I spent. It is not seven times the
machine — call it three or four times the GPU, plus a CPU two generations newer. On raw
price-to-performance, the recycled box wins comfortably and it isn't close.

But that framing flatters me, and it's the wrong one. What the extra thousand buys isn't
framerate — it's the absence of friction. No Wi-Fi dongle, no `netplwiz` dead end, no
third-party autologin tool, no Windows update rebooting into a login screen while someone
sits on the sofa holding a controller. Valve's box does natively the exact thing I had to
force onto a generic office PC. That's worth real money to plenty of people.

## So was it worth it?

For me, yes — but not for the reason you'd expect. The €150 didn't buy a console. It
bought **the answer to whether I'd actually use one.**

That was the genuine unknown. I'd never had a couch setup, and "I think I'd play more if
the games were on the TV" is exactly the kind of thing you believe about yourself right up
until the machine sits unused for four months. Finding out cost me a cheap GPU and an
evening with a Sysinternals tool. Finding out the other way costs a thousand euros.

Now I know I use it. Which means if this box ever becomes the bottleneck, the Steam
Machine stops being an impulse and becomes an upgrade I can justify — with four months of
evidence that I'll get my money's worth. And if it had gathered dust, I'd be out €150
instead of a grand.

Cheap hardware you already own isn't only the frugal option. It's the experiment that
tells you whether the expensive option is worth buying.

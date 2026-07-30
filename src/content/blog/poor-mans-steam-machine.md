---
title: "My Poor Man's Steam Machine"
description: 'How I turned a €218 second-hand ThinkCentre into a couch gaming console, why it still runs Windows, and how it stacks up against an actual Steam Machine.'
date: '2026-07-28'
tags: ['gaming']
cover: '/blog/thinkcentre-couch-setup.jpg'
coverAlt: 'A black Lenovo ThinkCentre tower standing on a desk, with two Xbox controllers resting on top of it'
draft: false
---

I wanted a couch gaming setup: flop on the sofa, grab a controller, play. A console,
basically — except I already own a Steam library, and buying a console to re-buy games I
have felt silly. So instead of buying a console, I built one out of parts nobody wanted.

## The hardware

The star is a **Lenovo ThinkCentre M710t**, one of those office towers companies buy by
the pallet and throw out three years later. I picked one up second-hand for €100, and it's
small enough that it doesn't scream "gaming" sitting under the TV.

- **PC:** Lenovo ThinkCentre M710t — €100 used
- **CPU:** Intel Core i5-7400 (2017, 4 cores)
- **GPU:** GTX 1650 4GB — €50
- **RAM:** 16GB (4×4GB) · **Storage:** 256GB SATA SSD
- **Wi-Fi:** Mercusys MA30H USB — €8, no Ethernet near the couch
- **Controllers:** 2× 8BitDo Ultimate 2C Wireless — €30 each
- **OS:** Windows 11 Pro, running Steam in Big Picture Mode

**€218 all in.** Hold on to that number.

Nothing here is fast by 2026 standards. But for what I play on a couch — not exactly
ray-traced showcases — it's fine. Big Picture boots, the controllers connect, it feels
like a console. That was the whole goal.

## Windows, for now

The "correct" move here is **SteamOS** or **Bazzite** — Linux setups actually _designed_
to boot into a controller-friendly interface, no desktop, no fuss. Bazzite is where this is
heading. But I wanted the thing working the same weekend I bought it, and Windows was the
shortest path: my library just runs, no compatibility layer to babysit, no checking whether
a game works under Proton first.

The catch is that Windows is not built to live under a TV. It wants you to log in, manage
an account, look at a lock screen with a Bing photo of a fjord. None of that belongs in a
living room where the only input device is a controller.

The big one was **autologin**. Normally you untick "users must enter a password" in
`netplwiz` and you're done — except Windows 11 with a **Microsoft account** hides that
option entirely. The checkbox isn't there anymore.

The fix was **[Sysinternals Autologon](https://learn.microsoft.com/sysinternals/downloads/autologon)**,
a tiny official Microsoft tool: enter your credentials once, it stores them encrypted in
the registry as an LSA secret, and from then on the machine boots straight to the desktop
and into Big Picture.

So "the shortest path" needed an asterisk. I still had to reach for a Sysinternals tool to
make a PC do the one thing a console does out of the box. Hold that thought.

## Then Valve shipped an actual Steam Machine

In 2026 Valve released a real
**[Steam Machine](https://store.steampowered.com/steammachine)** — a boxy little console
running SteamOS natively. Which makes this a fair fight:

|                      | My ThinkCentre                          | Steam Machine (base)               |
| -------------------- | --------------------------------------- | ---------------------------------- |
| **What I paid**      | €218 — PC 100, GPU 50, pads 60, Wi-Fi 8 | $1,049                             |
| **CPU**              | i5-7400 — 2017, 4 cores                 | Zen 4, 6 cores                     |
| **GPU**              | GTX 1650 4GB                            | RDNA3, 28 CUs + 8GB VRAM           |
| **Realistic target** | 1080p, medium, older and indie games    | modern titles, higher res with FSR |
| **Boots to Steam**   | after a Sysinternals workaround         | natively, out of the box           |
| **Size / noise**     | an office tower                         | console-sized                      |

The Steam Machine costs roughly **five times** what I spent. It is not five times the
machine — call it three or four times the GPU, plus a CPU two generations newer. On raw
price-to-performance the recycled box still wins, though by less than the sticker prices
suggest.

But that framing flatters me, and it's the wrong one. What the extra thousand buys isn't
framerate — it's the absence of friction. No Wi-Fi dongle, no `netplwiz` dead end, no
third-party autologin tool, no Windows update rebooting into a login screen while someone
sits on the sofa holding a controller. Valve's box does natively the exact thing I had to
force onto a generic office PC. That's worth real money to plenty of people.

## So was it worth it?

For me, yes — but not for the reason you'd expect. The €218 didn't buy a console. It
bought **the answer to whether I'd actually use one.**

That was the genuine unknown. I'd never had a couch setup, and "I'd play more if the games
were on the TV" is exactly the kind of thing you believe about yourself right up until the
machine sits unused for months. Finding out cost me €218 and an evening with a Sysinternals
tool. Finding out the other way costs a thousand.

Now I know I use it. Which means if this box ever becomes the bottleneck, the Steam Machine
stops being an impulse and becomes an upgrade I can justify — with months of evidence that
I'd get my money's worth. And if it had gathered dust, I'd be out €218 instead of a grand.

The next experiment is free, though. **Bazzite on the same box** is the obvious move: if the
friction I papered over with a Sysinternals tool simply stops existing, I get most of what
the Steam Machine sells for a thousand euros, on hardware I already have. That's the version
of this machine I actually wanted — and it costs an afternoon, not an upgrade.

Cheap second-hand hardware isn't only the frugal option. It's the experiment that tells you
whether the expensive option is worth buying.

# Time of Wheels

Spin the wheel to get a random game, app, or topic to build, with steps, a twist, and a time limit.

**Play it:** https://nehaat7.github.io/Time-of-Wheels/

## How it works

1. Pick a wheel: **Games**, **Apps**, **Topics**, or **My wheel**.
2. Tap **SPIN** in the middle, or press <kbd>Space</kbd>.
3. You get a build brief with:
   - a short pitch for the project
   - four steps to build it
   - a suggested tech stack and what you'll practice
   - a time limit, from a 1-hour sprint to a full week
   - a twist, such as "add dark mode" or "no libraries allowed"
4. Click **New twist** to swap the twist, or **Copy brief** to paste it somewhere.

## Features

- **Three built-in wheels** with 12 ideas each, from beginner to advanced
- **My wheel**: type your own ideas, one per line (2 to 24 ideas)
- **Recent spins**: your last 8 results, saved in your browser
- **Tick sound** while the wheel spins, which you can turn off
- **Dark mode**, following your system setting
- **Reduced motion**: shorter spins if your system asks for less animation
- Works on phones and desktops

## Run it locally

You don't need to install or build anything. Download or clone the repo and open `index.html` in a browser.

```bash
git clone https://github.com/YOUR-USERNAME/time-of-wheels.git
cd time-of-wheels
open index.html   # macOS. On Windows, double-click the file.
```

## Project files

| File | What's in it |
|---|---|
| `index.html` | The page layout |
| `style.css` | Colors, layout, and dark mode |
| `script.js` | The wheel drawing, spin animation, and all the ideas |

## Add your own ideas

Open `script.js` and edit these lists near the top:

- `DATA.game`, `DATA.app`, `DATA.topic`: the ideas on each wheel
- `TWISTS`: the twists that get added to each brief
- `TIMEBOXES`: the time limits

Each idea looks like this:

```js
{ label: "Simon", title: "Simon Says", pitch: "Repeat a growing pattern...",
  level: "Beginner", stack: "HTML + CSS + Web Audio", learn: "Arrays, async timing, sound",
  steps: ["Make four colored pads", "Play a random sequence", "Check the player's taps", "Add one step each round"] }
```

`label` is the short text shown on the wheel, and `title` is the heading on the brief.

## Built with

Plain HTML, CSS, and JavaScript, drawn on a `<canvas>`. Fonts come from Google Fonts. If you're offline, the page uses your system fonts instead.

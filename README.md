# Instagram Clone 📸

A simple Instagram-style mobile UI built with **HTML**, **Tailwind CSS** and **vanilla JavaScript**.

🔗 **Live demo:** [insta-project-roan.vercel.app](https://insta-project-roan.vercel.app/)

---

## Features

### Stories
- Story bar with gradient rings that turn grey after a story is seen
- Full-screen story viewer with progress bars
- Image and video stories (video length is read from the video itself)
- Tap the right side for the next story, the left side for the previous one
- Swipe down to close
- Keyboard support: `←` `→` to navigate, `Esc` to close
- Like a story and send a message
- Media is fully loaded before it is shown, so there is no flicker between stories

### Post
- Autoplaying video post with a sound on/off button
- Click the video to pause / play
- Double-click the video to like it, with a heart animation
- Like and save buttons with a live like counter

### Comments
- Comments sheet that slides up from the bottom
- Add, edit and delete your own comments (same logic as a to-do list)
- Reply to a comment, with the `@username` shown in blue
- Like any comment
- Works with both Persian (RTL) and English text

### Profile
- Profile page with avatar, stats and bio
- The Home icon in the navigation bar is filled on the home page and outlined on the profile page

### Layout
- Full width on mobile, a 420px phone-like frame on large screens
- Stories, comments and navigation all stay inside the frame

---

## Tech Stack

- HTML5
- [Tailwind CSS v3](https://tailwindcss.com/)
- Vanilla JavaScript (no frameworks, no build tools for the app itself)
- Deployed on [Vercel](https://vercel.com/)

---

## Project Structure

```
instaProject/
├── image/              # avatars, stories, post video, icons
├── index.html          # page layout
├── script.js           # all data and logic
├── input.css           # Tailwind entry file
├── output.css          # generated CSS (used by the page)
├── tailwind.config.js
└── package.json
```

All content lives in `script.js` as arrays of objects:

- `stories` — every user and their story items (`image` or `video`)
- `post` — the post data and its `comments`
- `profile` — the profile page info

To add a new story, just add a new object to the `stories` array.

---

## Getting Started

```bash
# clone the project
git clone https://github.com/salamat-dev/instaProject.git
cd instaProject

# install Tailwind
npm install

# build the CSS and watch for changes
npm run dev
```

Then open `index.html` in your browser (or use the Live Server extension in VS Code).

> **Note:** `output.css` is committed to the repo because Vercel serves the files as they are.
> Make sure it is up to date (`npm run dev` running) before you push.

---

## Author

Made by **[salamat-dev](https://github.com/salamat-dev)** as a front-end learning project.

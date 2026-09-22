// =====================================================
// DATA
// =====================================================

const profile = {
  username: "salamat_dev",
  avatar: "image/IMG_0747.JPG",
  title: "Web Designer",
  bio: "Learning...\nFront-end Developer\nParnian School",
  posts: 0,
  followers: 93,
  following: 51,
};

// Every user with their story items (type: 'image' or 'video')
const stories = [
  {
    username: "reyhaneh.alt",
    trayName: "reyhaneh.alt",
    avatar: "image/reyAvatar.jpg",
    seen: false,
    items: [{ type: "video", src: "image/reyStory.mp4" }],
  },
  {
    username: "farzin_n1991",
    trayName: "farzin_dev",
    avatar: "image/farAvatar.jpg",
    seen: false,
    items: [{ type: "image", src: "image/farStory.jpg" }],
  },
  {
    username: "nastaran__dev",
    trayName: "nastaran__dev",
    avatar: "image/photo_2025-12-07_15-09-20.jpg",
    seen: false,
    items: [
      { type: "image", src: "image/storyNas1.jpg" },
      { type: "image", src: "image/storyNas2.jpg" },
    ],
  },
  {
    username: "parsa_dehghanpour_dev",
    trayName: "parsa_deh...",
    avatar: "image/deh.jpg",
    seen: false,
    items: [{ type: "image", src: "image/parStory.jpg" }],
  },
  {
    username: "yasaman_dev",
    trayName: "yasaman_dev",
    avatar: "image/yas.jpg",
    seen: false,
    items: [{ type: "image", src: "image/yasStory.jpg" }],
  },
  {
    username: "setayeshmehr.dev",
    trayName: "setayeshm...",
    avatar: "image/amiAvatar.jpg",
    seen: false,
    items: [{ type: "image", src: "image/anirStory.jpg" }],
  },
  {
    username: "hivadi.dev",
    trayName: "hivadi_dev",
    avatar: "image/hivaAvatar.jpg",
    seen: false,
    items: [{ type: "image", src: "image/hivStory.jpg" }],
  },
  {
    username: "pegahmobasherii",
    trayName: "pegahmoba...",
    avatar: "image/pegAvatar.jpg",
    seen: false,
    items: [{ type: "image", src: "image/pegStory.jpg" }],
  },
];

const post = {
  username: "parsa_ghorbanian_web",
  avatar: "image/IMG_20251227_194423_767.jpg",
  video: "image/VID_20251231_114300_027.mp4",
  caption:
    "یکی از بهترین های تاریخ پرنیان از نظر احترام،سواد ، ادب و...به جرات مهندس پارسا دهقان پور هست. ایشان چندماه پیش استخدام شدند و بخاطر جنگ،مجدد شرکتشون رو عوض کردند.برای ایشان و سایر دانشجوهای خوبمون بهترین آرزوها رو داریم🌹",
  likes: 1034,
  liked: false,
  saved: false,
  comments: [
    {
      username: "parsa_dehghanpour_dev",
      avatar: "image/deh.jpg",
      text: "استاد عزیز،ممنونم بابت این همه لطف و محبتتون❤ واقعا خوشحالم که توی مسیر یادگیری فرانت اند شاگرد شما بودم.خیلی از چیزهایی که امروز بلدم رو مدیون آموزش ها و راهنمایی‌های شما هستم.",
      likes: 9,
      liked: false,
    },
    {
      username: "reyhaneh.alt",
      avatar: "image/reyAvatar.jpg",
      text: "🔥🔥🔥",
      likes: 6,
      liked: false,
    },
    {
      username: "salamat_dev",
      avatar: "image/IMG_0747.JPG",
      text: "😍🔥",
      likes: 4,
      liked: false,
    },
    {
      username: "farzin_n1991",
      avatar: "image/farAvatar.jpg",
      text: "آفرین،دقیقاً همینو انتظار داشتم ازت. 🙏",
      likes: 3,
      liked: false,
    },
    {
      username: "yasaman_dev",
      avatar: "image/yas.jpg",
      text: "خیلی خوشحال شدم امیدوارم در مراحل بعدی زندگیت هم موفق باشی.",
      likes: 2,
      liked: false,
    },
  ],
};

// Heart icon path (used in several places)
const heartPath =
  "M12 20.25c-.35 0-8.75-4.85-8.75-10.6A4.9 4.9 0 0 1 8.1 4.75c1.7 0 3 .9 3.9 2.35.9-1.45 2.2-2.35 3.9-2.35a4.9 4.9 0 0 1 4.85 4.9c0 5.75-8.4 10.6-8.75 10.6Z";

// =====================================================
// STORY TRAY (the row of avatars)
// =====================================================

const storyTray = document.getElementById("storyTray");

function renderStoryTray() {
  // "Your Story" is always first
  let html = `
    <li class="flex w-[70px] shrink-0 flex-col items-center gap-1">
      <div class="relative">
        <img src="${profile.avatar}" alt="" draggable="false" class="h-[66px] w-[66px] rounded-full object-cover" />
        <span class="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#0095f6] text-sm leading-none text-white">+</span>
      </div>
      <span class="w-full truncate text-center text-xs text-gray-500">Your Story</span>
    </li>`;

  stories.forEach((user, index) => {
    html += `
      <li class="storyAvatar flex w-[70px] shrink-0 cursor-pointer flex-col items-center gap-1" data-index="${index}">
        <div class="story-ring ${user.seen ? "seen" : ""}">
          <img src="${
            user.avatar
          }" alt="" draggable="false" class="h-[62px] w-[62px] rounded-full border-2 border-white object-cover" />
        </div>
        <span class="w-full truncate text-center text-xs">${
          user.trayName
        }</span>
      </li>`;
  });

  storyTray.innerHTML = html;
}

renderStoryTray();

// Drag the tray with the mouse (touch screens scroll by themselves)
let isDragging = false;
let dragMoved = false;
let dragStartX = 0;
let dragStartScroll = 0;

storyTray.addEventListener("mousedown", (e) => {
  isDragging = true;
  dragMoved = false;
  dragStartX = e.clientX;
  dragStartScroll = storyTray.scrollLeft;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - dragStartX;
  if (Math.abs(deltaX) > 5) dragMoved = true;
  storyTray.scrollLeft = dragStartScroll - deltaX;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// Open a story when an avatar is clicked (but not after a drag)
storyTray.addEventListener("click", (e) => {
  if (dragMoved) return;
  const avatar = e.target.closest(".storyAvatar");
  if (avatar) showStory(Number(avatar.dataset.index), 0);
});

// =====================================================
// STORY VIEWER
// =====================================================

const storyViewer = document.getElementById("storyViewer");
const storyImg = document.getElementById("storyImg");
const storyVideo = document.getElementById("storyVideo");
const storyBars = document.getElementById("storyBars");
const storyAvatar = document.getElementById("storyAvatar");
const storyName = document.getElementById("storyName");
const storyLike = document.getElementById("storyLike");
const storyInput = document.getElementById("storyInput");

let currentUser = -1; // index in stories array (-1 = viewer closed)
let currentItem = 0; // index in user.items
let storyTimer = null; // the ONLY timer that moves to the next story
let loadCounter = 0; // used to ignore old loads when the user taps fast
let storyLiked = false;

function showStory(userIndex, itemIndex) {
  const user = stories[userIndex];
  const item = user.items[itemIndex];

  clearTimeout(storyTimer);
  loadCounter++;
  const thisLoad = loadCounter;

  // First time opening: show the viewer and pause the post video
  if (currentUser === -1) {
    storyViewer.classList.remove("hidden");
    pausePostVideo();
  }

  // Load the media BEFORE showing it -> no empty frame (this was the "jump")
  if (item.type === "image") {
    const img = new Image();
    img.src = item.src;
    img.onload = () => {
      if (thisLoad !== loadCounter) return; // user already moved on
      storyVideo.pause();
      storyVideo.classList.add("hidden");
      storyImg.src = item.src;
      storyImg.classList.remove("hidden");
      afterStoryLoaded(userIndex, itemIndex, 5000);
    };
    img.onerror = img.onload; // broken image: don't get stuck
  } else {
    storyVideo.src = item.src;
    storyVideo.onloadeddata = () => {
      if (thisLoad !== loadCounter) return;
      storyImg.classList.add("hidden");
      storyVideo.classList.remove("hidden");
      storyVideo.currentTime = 0;
      // If the browser blocks sound, play it muted instead
      storyVideo.play().catch(() => {
        storyVideo.muted = true;
        storyVideo.play();
      });
      afterStoryLoaded(userIndex, itemIndex, storyVideo.duration * 1000);
    };
  }
}

// Runs when the new media is ready: update header, bars and timer together
function afterStoryLoaded(userIndex, itemIndex, duration) {
  const user = stories[userIndex];

  // New user -> new header and new bars
  if (userIndex !== currentUser) {
    storyAvatar.src = user.avatar;
    storyName.textContent = user.username;
    storyBars.innerHTML = "";
    user.items.forEach(() => {
      storyBars.innerHTML += `
        <div class="h-[2px] flex-1 overflow-hidden rounded-full bg-white/40">
          <div class="bar h-full w-0 bg-white"></div>
        </div>`;
    });
  }

  currentUser = userIndex;
  currentItem = itemIndex;

  // Reset like icon
  storyLiked = false;
  storyLike.style.fill = "none";
  storyLike.style.color = "white";

  // Mark as seen (grey ring)
  user.seen = true;
  renderStoryTray();

  // Bars: previous = full, next = empty, current = animate
  const bars = storyBars.querySelectorAll(".bar");
  bars.forEach((bar, i) => {
    bar.style.transition = "none";
    bar.style.width = i < itemIndex ? "100%" : "0%";
  });

  const currentBar = bars[itemIndex];
  currentBar.offsetWidth; // force the browser to apply width 0 before animating
  currentBar.style.transition = `width ${duration}ms linear`;
  currentBar.style.width = "100%";

  // One timer for going next
  storyTimer = setTimeout(goNext, duration);
}

function goNext() {
  const user = stories[currentUser];
  if (currentItem < user.items.length - 1) {
    showStory(currentUser, currentItem + 1);
  } else if (currentUser < stories.length - 1) {
    showStory(currentUser + 1, 0);
  } else {
    closeStory();
  }
}

function goPrevious() {
  if (currentItem > 0) {
    showStory(currentUser, currentItem - 1);
  } else if (currentUser > 0) {
    const prevUser = stories[currentUser - 1];
    showStory(currentUser - 1, prevUser.items.length - 1);
  } else {
    showStory(currentUser, 0); // first story: start it again
  }
}

function closeStory() {
  clearTimeout(storyTimer);
  loadCounter++; // cancel any loading media
  storyVideo.pause();
  storyVideo.classList.add("hidden");
  storyImg.classList.add("hidden"); // next time don't show the old story while loading
  storyViewer.classList.add("hidden");
  storyInput.value = "";
  currentUser = -1;
  playPostVideo();
}

document.getElementById("closeStory").addEventListener("click", closeStory);

// Tap left 30% = previous, right side = next, swipe down = close
let touchStartY = 0;

storyViewer.addEventListener("pointerdown", (e) => {
  touchStartY = e.clientY;
});

storyViewer.addEventListener("pointerup", (e) => {
  // Ignore taps on buttons, input and icons
  if (e.target.closest("button, input, svg")) return;

  const deltaY = e.clientY - touchStartY;
  if (deltaY > 80) {
    closeStory();
    return;
  }

  const box = storyViewer.getBoundingClientRect();
  if (e.clientX - box.left < box.width * 0.3) {
    goPrevious();
  } else {
    goNext();
  }
});

// Like a story
storyLike.addEventListener("click", () => {
  storyLiked = !storyLiked;
  storyLike.style.fill = storyLiked ? "#ff3040" : "none";
  storyLike.style.color = storyLiked ? "#ff3040" : "white";
});

// Send a message (just clears the input)
storyInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") storyInput.value = "";
});

// =====================================================
// POST
// =====================================================

const postBox = document.getElementById("postBox");

postBox.innerHTML = `
  <article class="border-b border-gray-200 pb-4">
    <!-- Post header -->
    <div class="flex items-center gap-3 px-3 py-2.5">
      <img src="${
        post.avatar
      }" alt="" class="h-8 w-8 rounded-full object-cover" />
      <span class="flex-1 text-sm font-semibold">${post.username}</span>
      <span class="cursor-pointer text-xl font-bold leading-none">•••</span>
    </div>

    <!-- Video -->
    <div class="relative h-[550px] bg-black">
      <video id="postVideo" src="${
        post.video
      }" class="h-full w-full cursor-pointer object-cover object-[50%_20%]" autoplay muted loop playsinline></video>
      <button id="soundToggle" class="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white">
        <svg id="soundIcon" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M11 5 6 9H2v6h4l5 4Z"/><path id="soundWaves" d="m22 9-6 6M16 9l6 6"/>
        </svg>
      </button>
      <img id="bigHeart" src="image/Heart_corazón.svg.png" alt="" class="pointer-events-none absolute left-1/2 top-1/2 -ml-[50px] -mt-[50px] hidden h-[100px] w-[100px]" />
            <!-- Icon in the middle while the video is paused -->
      <div id="pauseIcon" class="pointer-events-none absolute left-1/2 top-1/2 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/50">
        <svg class="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7 4.5v15l12-7.5Z"/></svg>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-4 px-3 pt-3">
      <svg id="likeBtn" class="h-6 w-6 cursor-pointer" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" viewBox="0 0 24 24"><path d="${heartPath}"/></svg>
      <svg id="openComments" class="h-6 w-6 cursor-pointer" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20.66 17.03A9.5 9.5 0 1 0 17.03 20.66L21.5 21.5Z"/></svg>
      <svg class="h-6 w-6 cursor-pointer" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 3 9.22 10.08"/><path d="M22 3 15 21l-3.8-10.9L2 6.7Z"/></svg>
      <svg id="saveBtn" class="ml-auto h-6 w-6 cursor-pointer" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M19.5 21 12 14.8 4.5 21V3.5h15Z"/></svg>
    </div>

    <!-- Likes -->
    <p class="px-3 pt-2 text-sm font-semibold"><span id="likeCount">${post.likes.toLocaleString()}</span> likes</p>

    <!-- Caption -->
    <div class="px-3 pt-1 text-sm">
      <p class="font-semibold">${post.username}</p>
      <p class="whitespace-pre-line text-gray-800" dir="auto">${
        post.caption
      }</p>
    </div>

    <!-- Open comments -->
    <button id="viewComments" class="px-3 pt-1 text-sm text-gray-500"></button>
  </article>`;

const postVideo = document.getElementById("postVideo");
const soundWaves = document.getElementById("soundWaves");
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
const bigHeart = document.getElementById("bigHeart");
const saveBtn = document.getElementById("saveBtn");
const viewComments = document.getElementById("viewComments");

function pausePostVideo() {
  postVideo.pause();
  postVideo.muted = true;
  soundWaves.setAttribute("d", "m22 9-6 6M16 9l6 6"); // muted icon
}

const pauseIcon = document.getElementById("pauseIcon");

function playPostVideo() {
  postVideo.play();
  pauseIcon.classList.add("hidden");
  pauseIcon.classList.remove("flex");
}

// Click on the video: pause / play
function togglePlay() {
  if (postVideo.paused) {
    playPostVideo();
  } else {
    postVideo.pause();
    pauseIcon.classList.remove("hidden");
    pauseIcon.classList.add("flex");
  }
}

// Wait a little: if a second click comes, it's a double click (like), not a pause
let clickTimer = null;

postVideo.addEventListener("click", () => {
  clearTimeout(clickTimer);
  clickTimer = setTimeout(togglePlay, 250);
});

// Sound on / off
document.getElementById("soundToggle").addEventListener("click", () => {
  postVideo.muted = !postVideo.muted;
  if (postVideo.muted) {
    soundWaves.setAttribute("d", "m22 9-6 6M16 9l6 6");
  } else {
    soundWaves.setAttribute(
      "d",
      "M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"
    );
  }
});

// Like / unlike
function toggleLike() {
  post.liked = !post.liked;

  if (post.liked) {
    post.likes++;
    likeBtn.style.fill = "#ff3040";
    likeBtn.style.color = "#ff3040";
  } else {
    post.likes--;
    likeBtn.style.fill = "none";
    likeBtn.style.color = "";
  }

  likeCount.textContent = post.likes.toLocaleString();
}

likeBtn.addEventListener("click", toggleLike);

// Double click on the video: like + big heart
postVideo.addEventListener("dblclick", () => {
  clearTimeout(clickTimer); // cancel the pause from the single click
  if (!post.liked) toggleLike();

  bigHeart.classList.remove("hidden");
  bigHeart.style.animation = "heartAnim 1s ease-out forwards";

  setTimeout(() => {
    bigHeart.classList.add("hidden");
    bigHeart.style.animation = "";
  }, 1000);
});

// Save
saveBtn.addEventListener("click", () => {
  post.saved = !post.saved;
  saveBtn.style.fill = post.saved ? "currentColor" : "none";
});

function updateCommentCount() {
  const count = post.comments.length;
  viewComments.textContent =
    count === 0 ? "Add a comment..." : `View all ${count} comments`;
}

updateCommentCount();

// COMMENTS (same idea as the to-do list)
// =====================================================

const commentSheet = document.getElementById("commentSheet");
const sheetPanel = document.getElementById("sheetPanel");
const commentList = document.getElementById("commentList");
const commentInput = document.getElementById("commentInput");
const commentBtn = document.getElementById("commentBtn");

let editIndex = null; // index of the comment being edited (null = adding)
let replyIndex = null; // index of the comment we are replying to

function openComments() {
  commentSheet.classList.remove("hidden");
  renderComments();
  // small delay so the slide-up animation runs
  setTimeout(() => sheetPanel.classList.remove("translate-y-full"), 10);
}

function closeComments() {
  sheetPanel.classList.add("translate-y-full");
  setTimeout(() => commentSheet.classList.add("hidden"), 300);
  resetInput();
}

document.getElementById("openComments").addEventListener("click", openComments);
viewComments.addEventListener("click", openComments);
document
  .getElementById("sheetBackdrop")
  .addEventListener("click", closeComments);

function renderComments() {
  commentList.innerHTML = "";

  if (post.comments.length === 0) {
    commentList.innerHTML = `
      <li class="py-16 text-center">
        <p class="text-2xl font-bold">No comments yet</p>
        <p class="mt-2 text-sm text-gray-500">Start the conversation.</p>
      </li>`;
    return;
  }

  post.comments.forEach((comment, index) => {
    const li = document.createElement("li");
    li.className = "flex gap-3 py-3";

    // Only my own comments get Edit and Delete
    const isMine = comment.username === profile.username;

    li.innerHTML = `
      <img src="${
        comment.avatar
      }" alt="" class="h-8 w-8 shrink-0 rounded-full object-cover" />
      <div class="min-w-0 flex-1">
        <p class="text-xs font-semibold">${comment.username}</p>
        <p class="commentText mt-0.5 break-words text-sm" dir="auto"></p>
        <div class="mt-1.5 flex gap-4 text-xs font-semibold text-gray-500">
          ${comment.likes > 0 ? `<span>${comment.likes} likes</span>` : ""}
          <button class="replyBtn">Reply</button>
          ${
            isMine
              ? '<button class="editBtn">Edit</button><button class="deleteBtn">Delete</button>'
              : ""
          }
        </div>
        <ul class="replies mt-3 flex flex-col gap-3"></ul>
      </div>
      <svg class="likeComment h-4 w-4 shrink-0 cursor-pointer self-center" fill="${
        comment.liked ? "#ff3040" : "none"
      }"
        stroke="${
          comment.liked ? "#ff3040" : "#737373"
        }" stroke-width="2" stroke-linejoin="round" viewBox="0 0 24 24">
        <path d="${heartPath}"/>
      </svg>`;

    // textContent = user text can't break the page with HTML
    li.querySelector(".commentText").textContent = comment.text;

    // Show the replies under the comment
    const repliesBox = li.querySelector(".replies");
    (comment.replies || []).forEach((reply) => {
      const replyLi = document.createElement("li");
      replyLi.className = "flex gap-2";
      replyLi.innerHTML = `
        <img src="${reply.avatar}" alt="" class="h-6 w-6 shrink-0 rounded-full object-cover" />
        <div class="min-w-0">
          <p class="text-xs font-semibold">${reply.username}</p>
          <p class="replyText break-words text-sm" dir="auto"></p>
        </div>`;
      // Make the @username at the start blue, the rest normal
      const replyText = replyLi.querySelector(".replyText");
      const mention = reply.text.split(" ")[0]; 
      const rest = reply.text.slice(mention.length); // the rest of the text

      const mentionSpan = document.createElement("span");
      mentionSpan.className = "text-[#00376b]";
      mentionSpan.textContent = mention;

      replyText.append(mentionSpan, rest);
      repliesBox.appendChild(replyLi);
    });

    // Reply: put @username in the input and remember which comment
    li.querySelector(".replyBtn").addEventListener("click", () => {
      editIndex = null;
      replyIndex = index;
      commentInput.value = "@" + comment.username + " ";
      commentBtn.textContent = "Post";
      commentInput.focus();
    });

    // Like
    li.querySelector(".likeComment").addEventListener("click", () => {
      comment.liked = !comment.liked;
      comment.likes += comment.liked ? 1 : -1;
      renderComments();
    });

    if (isMine) {
      // Edit: put the text in the input, button becomes "Save"
      li.querySelector(".editBtn").addEventListener("click", () => {
        editIndex = index;
        replyIndex = null;
        commentInput.value = comment.text;
        commentBtn.textContent = "Save";
        commentInput.focus();
      });

      // Delete
      li.querySelector(".deleteBtn").addEventListener("click", () => {
        if (confirm("Delete this comment?")) {
          post.comments.splice(index, 1);
          resetInput();
          renderComments();
          updateCommentCount();
        }
      });
    }

    commentList.appendChild(li);
  });
}

function resetInput() {
  commentInput.value = "";
  commentBtn.textContent = "Post";
  editIndex = null;
  replyIndex = null;
}

function saveComment() {
  const text = commentInput.value.trim();
  if (text === "") return;

  if (editIndex !== null) {
    // Save the edited comment
    post.comments[editIndex].text = text;
  } else if (replyIndex !== null && text.startsWith("@")) {
    // Add a reply under the chosen comment
    const parent = post.comments[replyIndex];
    if (!parent.replies) parent.replies = [];
    parent.replies.push({
      username: profile.username,
      avatar: profile.avatar,
      text: text,
    });
  } else {
    // Add a new comment to the top
    post.comments.unshift({
      username: profile.username,
      avatar: profile.avatar,
      text: text,
      likes: 0,
      liked: false,
    });
    commentList.scrollTop = 0;
  }

  resetInput();
  renderComments();
  updateCommentCount();
}

commentBtn.addEventListener("click", saveComment);
commentInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") saveComment();
});

// =====================================================

const homePage = document.getElementById("homePage");
const profilePage = document.getElementById("profilePage");

profilePage.innerHTML = `
  <div class="flex h-14 items-center justify-between border-b border-gray-200 px-4">
    <button id="backFromProfile" class="text-2xl">←</button>
    <h2 class="font-semibold">${profile.username}</h2>
    <svg class="h-6 w-6 cursor-pointer" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
  </div>

  <div class="px-4 pb-4 pt-6">
    <div class="flex items-center gap-6">
      <div class="relative">
        <img src="${profile.avatar}" alt="" class="h-[86px] w-[86px] rounded-full object-cover" />
        <span class="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#0095f6] leading-none text-white">+</span>
      </div>
      <div class="grid flex-1 grid-cols-3 text-center">
        <div><p class="font-semibold">${profile.posts}</p><p class="text-sm">posts</p></div>
        <div><p class="font-semibold">${profile.followers}</p><p class="text-sm">followers</p></div>
        <div><p class="font-semibold">${profile.following}</p><p class="text-sm">following</p></div>
      </div>
    </div>

    <p class="mt-3 text-sm font-semibold">${profile.title}</p>
    <p class="whitespace-pre-line text-sm">${profile.bio}</p>

    <div class="mt-4 flex gap-2">
      <button class="h-8 flex-1 rounded-lg bg-gray-100 text-sm font-semibold">Edit profile</button>
      <button class="h-8 flex-1 rounded-lg bg-gray-100 text-sm font-semibold">Share profile</button>
    </div>
  </div>

  <div class="flex flex-col items-center border-t border-gray-200 py-16">
    <div class="flex h-20 w-20 items-center justify-center rounded-full border-2 border-black text-4xl font-light">+</div>
    <h3 class="mt-4 text-2xl font-extrabold">No Posts Yet</h3>
  </div>`;

const homeIcon = document.getElementById("homeIcon");

function showHome() {
  profilePage.classList.add("hidden");
  homePage.classList.remove("hidden");
  document
    .getElementById("profileBtn")
    .classList.remove("ring-2", "ring-black");
  homeIcon.setAttribute("fill", "currentColor"); // on home: filled black icon
  playPostVideo();
}

function showProfile() {
  homePage.classList.add("hidden");
  profilePage.classList.remove("hidden");
  document.getElementById("profileBtn").classList.add("ring-2", "ring-black");
  homeIcon.setAttribute("fill", "none"); // on profile: empty (outline) icon
  pausePostVideo();
}

document.getElementById("profileBtn").addEventListener("click", showProfile);
document.getElementById("homeIcon").addEventListener("click", showHome);
document.getElementById("backFromProfile").addEventListener("click", showHome);

// =====================================================
// KEYBOARD
// =====================================================

document.addEventListener("keydown", (e) => {
  if (e.target === commentInput || e.target === storyInput) return;

  if (currentUser !== -1) {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrevious();
    if (e.key === "Escape") closeStory();
  } else if (e.key === "Escape" && !commentSheet.classList.contains("hidden")) {
    closeComments();
  }
});

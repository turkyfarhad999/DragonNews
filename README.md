# 🐉 DragonNews

A modern, full-stack news web application built with **Next.js 16 (App Router)**, featuring secure authentication, category-based browsing, and a clean, responsive UI powered by Tailwind CSS and DaisyUI.

**🔗 Live Demo:** [dragon-news-seven-inky.vercel.app](https://dragon-news-seven-inky.vercel.app)

---

## ✨ Features

- 🔐 **Authentication** — Email/password auth with [Better Auth](https://www.better-auth.com/) and a MongoDB adapter for secure session management
- 📰 **Category-based News Browsing** — Dynamic routing to browse news articles by category
- 🧭 **Route Groups & Layouts** — Separate `(auth)` and `(main)` route groups, each with its own layout for a clean separation between authenticated and public pages
- 🖥️ **Server & Client Components** — Efficient data fetching using Next.js Server Components, with Client Components only where interactivity is needed
- 🎨 **Responsive UI** — Styled with Tailwind CSS v4 and DaisyUI components, using the Poppins font for a polished look
- 📅 **Smart Date Formatting** — Human-readable timestamps powered by `date-fns`
- 📝 **Form Handling** — Robust forms built with `react-hook-form`
- 🖼️ **Optimized Images** — Remote image handling via `next/image` with custom remote pattern configuration
- 🔄 **Marquee & Icons** — Scrolling headlines with `react-fast-marquee` and iconography via `react-icons`
- 🔒 **Protected Routes** — Middleware-based session protection to guard authenticated pages and handle post-login/logout redirects

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) |
| Authentication | [Better Auth](https://www.better-auth.com/) + `@better-auth/mongo-adapter` |
| Database | [MongoDB Atlas](https://www.mongodb.com/atlas) |
| Forms | React Hook Form |
| Utilities | date-fns, react-icons, react-fast-marquee |
| Deployment | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```
DragonNews/
├── public/                # Static assets
├── src/
│   ├── app/
│   │   ├── (auth)/        # Auth route group (login, register) with its own layout
│   │   ├── (main)/        # Main app route group (home, categories, etc.)
│   │   └── ...
│   └── components/        # Reusable UI components (Navbar, etc.)
├── next.config.mjs
├── tailwind.config / postcss.config.mjs
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB Atlas cluster (or local MongoDB instance)

### Installation

```bash
# Clone the repository
git clone https://github.com/turkyfarhad999/DragonNews.git
cd DragonNews

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com/), the platform built by the creators of Next.js. Push to `main` and Vercel handles the rest.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/turkyfarhad999/DragonNews/issues).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Turky Farhad**
CSE Student, RUET | Member, Photographic Society of RUET (PSR)
GitHub: [@turkyfarhad999](https://github.com/turkyfarhad999)

---

⭐ If you found this project useful, consider giving it a star on GitHub!
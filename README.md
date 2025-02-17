# Toast Reel

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Check out the live version of the project:  https://toast-reel-far3ldprl-isholahs-projects.vercel.app

Toast Reel simulates a video reel, similar to Instagram's story feature, using the YouTube API for autoplay functionality when a video comes into view.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

This will start the Next.js development server, and your app will be available at http://localhost:3000.

Features
Autoplaying YouTube Videos: Videos start playing automatically when they come into view, similar to Instagram's story feature.
Mute/Unmute: Users can toggle the sound of the videos.
Like and Share: Buttons for liking and sharing videos.
Responsive Design: The application adapts to both mobile and desktop screen sizes.
Error Handling: Graceful fallback for video load errors or YouTube player issues.
Technologies Used
Next.js 15.1.7: Framework for building the user interface.
YouTube Iframe API: To load and control YouTube videos.
React Intersection Observer: Detects when a video enters the viewport for autoplay functionality.
TailwindCSS: Utility-first CSS framework for styling.
TypeScript: Adds static type checking for better development experience.
React Icons: Used for buttons (e.g., like, share, menu).
Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.


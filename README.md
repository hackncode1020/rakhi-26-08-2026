<div align="center">
# ðŸ’™ Best Brother Interactive ðŸ’™
### A tiny digital keepsake for a very big bond
<p>
   <strong>Animated memories Â· playful interactions Â· heartfelt messages Â· joyful surprises</strong>
</p>
<p>
   <img src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
   <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5.8" />
   <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 6" />
   <img src="https://img.shields.io/badge/Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Motion 12" />
</p>
<p>
   <a href="#quick-start">Quick start</a> Â·
   <a href="#run-on-a-laptop">Laptop</a> Â·
   <a href="#run-on-a-mobile-phone">Mobile</a> Â·
   <a href="#customization-guide">Customize</a> Â·
   <a href="#deployment">Deploy</a>
</p>
</div>
---
## âœ¨ What This Is
Best Brother Interactive is a warm, playful, single-page React experience made to celebrate a brother who deserves more than an ordinary message.
It turns a simple greeting into a small journey.
The visitor enters through an animated surprise screen.
They move through a message, a letter, and a memory gallery.
The final question leads to a cheerful celebration.
Every stage has its own motion, sound, typography, and emotional beat.
The app is intentionally lightweight.
There is no database.
There is no account system.
There is no server-side API required for the experience.
The application runs in the browser as a static front end.
That makes it easy to run locally, share across a home network, or deploy to a static hosting provider.
---
## ðŸŽ Experience At A Glance
| Stage | What happens | Main interaction |
| --- | --- | --- |
| Intro | A glowing welcome and surprise invitation appear. | Open the surprise or tap the talisman. |
| Main card | The relationship theme and central character are introduced. | Continue with `NEXT`. |
| Letter | A personal brother note opens inside an ornate frame. | Read the letter and continue. |
| Memories | Five playful memory chapters appear as a carousel. | Tap arrows, swipe, like, or enlarge. |
| Question | The visitor is asked the affectionate final question. | Choose `YES`; the `NO` button moves playfully. |
| Celebration | Confetti, music, a certificate, and sharing tools appear. | Open the gift, create more confetti, share, or replay. |
The flow is deliberately linear.
Each button advances the emotional story.
The progress dots show the middle part of the journey.
The replay action returns the visitor to the beginning without a page refresh.
---
## ðŸŒ¸ Highlights
- A polished blue, white, and sky palette.
- Fredoka, Outfit, and Caveat typography.
- Motion-powered page transitions.
- Floating hearts, flowers, sparkles, and evil-eye badges.
- Tap-generated emoji particles on the background.
- A responsive memory carousel.
- Touch swipe support for the gallery.
- A playful moving `NO` button.
- A browser-generated music-box soundtrack.
- Sound effects for taps, dodges, sparkles, and celebration.
- A large canvas confetti celebration.
- A gift-opening interaction.
- A certificate reveal.
- A clipboard share message.
- A replay path for repeated viewing.
- Mobile-friendly spacing and text sizing.
- No image upload or backend configuration required.
---
## ðŸ§­ Quick Start
The fastest path from a fresh clone to the running experience is below.
### 1. Check Node.js
Open a terminal and run:
```bash
node --version
npm --version
```
Use a current LTS version of Node.js.
Node.js 20 LTS or newer is recommended.
Node.js includes npm.
If the command is not found, install Node.js from [nodejs.org](https://nodejs.org/).
Close and reopen the terminal after installation.
Then run the version commands again.
### 2. Open the project
In VS Code, open the `best-brother-interactive` folder.
The folder should contain `package.json`.
The terminal should use that folder as its working directory.
### 3. Install dependencies
```bash
npm install
```
This installs React, Motion, Tailwind CSS, Lucide icons, canvas-confetti, Vite, TypeScript, and the supporting packages.
Run this command once after cloning.
Run it again when dependencies change.
### 4. Start the development server
```bash
npm run dev
```
Vite starts on port `3000`.
Open [http://localhost:3000](http://localhost:3000) on the laptop.
The development server supports fast refresh while files are edited.
### 5. Begin the interaction
Click `Open My Surprise`.
The first click also gives the browser a user gesture for Web Audio.
If audio is not desired, use the sound toggle in the upper-right corner.
---
## ðŸ’» Run On A Laptop
### Windows
1. Install Node.js LTS.
2. Open the project folder in VS Code.
3. Open `Terminal > New Terminal`.
4. Confirm the terminal path is the project folder.
5. Run `npm install`.
6. Run `npm run dev`.
7. Open `http://localhost:3000`.
PowerShell and Command Prompt both work.
The integrated VS Code terminal is convenient because it opens in the workspace folder.
### macOS
1. Install Node.js LTS.
2. Open Terminal.
3. Move into the project folder with `cd`.
4. Run `npm install`.
5. Run `npm run dev`.
6. Visit `http://localhost:3000`.
### Linux
1. Install Node.js LTS using your preferred package manager or Node installer.
2. Open a terminal.
3. Move into the project folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Visit `http://localhost:3000`.
### Laptop controls
- Click `Open My Surprise` to start.
- Click `NEXT` to move forward.
- Click the sound control to mute or unmute.
- Click empty background space for an emoji sparkle.
- Use the memory arrows to browse chapters.
- Drag the memory card left or right.
- Click the heart control on a memory to like it.
- Open a memory for its larger view.
- Select `YES` on the final question.
- Click the gift on the celebration screen.
- Use the confetti action for another burst.
- Use the share action to copy the celebration text.
- Use replay to start again.
---
## ðŸ“± Run On A Mobile Phone
The phone and laptop must be connected to the same Wi-Fi network.
The laptop runs the Vite server.
The phone opens the laptop's local network address.
### 1. Find the laptop IP address
On Windows, run:
```powershell
ipconfig
```
Find the `IPv4 Address` for the active Wi-Fi adapter.
It often looks like `192.168.1.25` or `10.0.0.25`.
On macOS or Linux, run:
```bash
ifconfig
```
Or use:
```bash
ip addr
```
Find the local IPv4 address on the connected interface.
Do not use `127.0.0.1` on the phone.
That address points back to the phone itself.
### 2. Start Vite for network access
The project script already includes the network host setting:
```json
"dev": "vite --port=3000 --host=0.0.0.0"
```
Start it normally:
```bash
npm run dev
```
Vite will print a local URL and may print a network URL.
### 3. Open the network URL
On the phone, open Chrome, Safari, or another modern browser.
Visit this format:
```text
http://YOUR-LAPTOP-IP:3000
```
Example:
```text
http://192.168.1.25:3000
```
Keep the terminal and development server running while the phone is connected.
### 4. Enable sound with a tap
Mobile browsers commonly block audio until the user interacts with the page.
Tap `Open My Surprise` to authorize the audio context.
The sound toggle can then mute or unmute music and effects.
### 5. Test the mobile gestures
- Tap the background for floating emoji particles.
- Swipe the memory card horizontally.
- Tap the carousel arrows.
- Tap the memory action controls.
- Tap the final answer button.
- Rotate the phone to test layout changes.
### Mobile troubleshooting
If the page does not load, confirm both devices are on the same Wi-Fi.
Check that the laptop IP address is current.
Try disabling a strict public-network firewall rule temporarily.
Make sure port `3000` is allowed for Node.js on the local network.
Do not close the terminal running Vite.
Do not use `localhost` from the phone.
If Wi-Fi isolation is enabled by the router, devices may be unable to communicate.
Try a trusted private network instead.
---
## ðŸ—ï¸ Project Structure
```text
best-brother-interactive/
â”œâ”€â”€ assets/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ App.tsx
â”‚   â”œâ”€â”€ index.css
â”‚   â”œâ”€â”€ main.tsx
â”‚   â”œâ”€â”€ types.ts
â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ BackgroundFloatingElements.tsx
â”‚   â”‚   â”œâ”€â”€ CelebrationView.tsx
â”‚   â”‚   â”œâ”€â”€ CuteCharacter.tsx
â”‚   â”‚   â”œâ”€â”€ EvilEyeBadge.tsx
â”‚   â”‚   â”œâ”€â”€ HeartCursorTrail.tsx
â”‚   â”‚   â”œâ”€â”€ IntroScreen.tsx
â”‚   â”‚   â”œâ”€â”€ LetterScreen.tsx
â”‚   â”‚   â”œâ”€â”€ MainCardScreen.tsx
â”‚   â”‚   â”œâ”€â”€ MemoriesScreen.tsx
â”‚   â”‚   â”œâ”€â”€ OpeningAnimation.tsx
â”‚   â”‚   â”œâ”€â”€ OrnateFrame.tsx
â”‚   â”‚   â”œâ”€â”€ QuestionCard.tsx
â”‚   â”‚   â””â”€â”€ SoundToggle.tsx
â”‚   â””â”€â”€ utils/
â”‚       â””â”€â”€ audio.ts
â”œâ”€â”€ index.html
â”œâ”€â”€ metadata.json
â”œâ”€â”€ package.json
â”œâ”€â”€ tsconfig.json
â””â”€â”€ vite.config.ts
```
### `src/App.tsx`
Owns the top-level stage state.
Defines the stage order.
Mounts the global background atmosphere.
Mounts the sound toggle.
Mounts the cursor trail when the relevant stage is active.
Creates tap particles.
Coordinates transitions between screens.
### `src/components/IntroScreen.tsx`
Displays the welcome message.
Shows the evil-eye badge.
Starts music and sound on the first action.
Moves the visitor into the main card.
### `src/components/MainCardScreen.tsx`
Introduces the brother bond.
Uses the framed character composition.
Advances to the letter screen.
### `src/components/LetterScreen.tsx`
Displays the personal note.
Uses a patterned letter surface.
Uses Caveat for the handwritten sign-off.
Advances to memories.
### `src/components/MemoriesScreen.tsx`
Contains the five in-code memory chapters.
Supports previous and next navigation.
Supports horizontal drag gestures.
Supports liking a chapter.
Supports opening a larger memory view.
Advances to the question.
### `src/components/QuestionCard.tsx`
Displays the final affectionate question.
Tracks each `NO` attempt.
Moves the `NO` button to safe offsets.
Changes the character mood after each attempt.
Eventually removes the `NO` option.
Leaves `YES` as the celebration path.
### `src/components/CelebrationView.tsx`
Plays the victory fanfare.
Starts the opening confetti sequence.
Reveals the certificate after a short delay.
Opens a gift interaction.
Creates additional confetti.
Copies a share message through the Clipboard API.
Returns to the intro on replay.
### `src/components/BackgroundFloatingElements.tsx`
Renders decorative background elements.
Animates hearts, flowers, sparkles, and badges.
Renders temporary particles from taps and button interactions.
Caps the interactive particle history for a clean experience.
### `src/components/HeartCursorTrail.tsx`
Uses a canvas overlay for a subtle heart trail.
Activates during memories and the final question.
Only listens for pointer movement while active.
Bounds the particle count for performance.
### `src/utils/audio.ts`
Creates the Web Audio context lazily.
Synthesizes the background progression.
Provides pop, dodge, sparkle, and fanfare effects.
Respects the global muted state.
### `src/index.css`
Loads Tailwind CSS.
Defines the palette variables.
Defines the app background.
Defines reusable animation keyframes.
Defines button and glass-panel styles.
### `src/types.ts`
Defines stage names.
Defines floating element data.
Defines interactive particle data.
Keeps shared component contracts readable.
---
## ðŸŽ¨ Customization Guide
The app is designed to be personalized without changing its architecture.
### Change the page title
Edit the `<title>` in `index.html`.
Update the description meta tag at the same time.
Keep the title short enough for mobile browser tabs.
### Change the opening message
Edit the heading and subtitle in `IntroScreen.tsx`.
Keep the first screen focused on one emotional idea.
The `handleProceed` function should continue to start audio before changing stage.
### Change the main message
Edit the heading and supporting text in `MainCardScreen.tsx`.
The character is rendered through `CuteCharacter`.
The frame is supplied by `OrnateFrame`.
### Change the letter
Edit the paragraphs in `LetterScreen.tsx`.
Use short paragraphs for phone readability.
Preserve the final handwritten paragraph for a personal signature.
### Add or edit memories
Edit `GALLERY_PHOTOS` in `MemoriesScreen.tsx`.
Each item has a chapter label.
Each item has a date or life phase.
Each item has a title.
Each item has a caption.
Each item has a longer note.
Each item has an emoji.
Each item has Tailwind gradient classes.
Each item has an accent color class.
Each item has a sticker.
Keep the title compact on narrow screens.
Use real image assets only when they are appropriate and available.
Avoid adding private photos to a public deployment without permission.
### Change the final question
Edit the heading in `QuestionCard.tsx`.
Edit the response messages in `getCuteMessage`.
Edit the moods returned by `getCharacterMood`.
Adjust the mobile and desktop offsets in `computeSafeOffset`.
Keep the offsets within the visible question area.
### Change the celebration copy
Edit the celebration heading in `CelebrationView.tsx`.
Edit the certificate content in the same file.
Edit the Clipboard API message in `handleShare`.
Keep the share message understandable when pasted outside the app.
### Change colors
Update the variables at the top of `index.css`.
The main palette uses primary blue, soft blue, accent blue, and white.
Also search component class names for hard-coded accent colors.
Check contrast after any palette change.
Preserve clear focus and hover states.
### Change fonts
Google Fonts are linked from `index.html`.
Fredoka is used for playful display text.
Outfit is used for readable body text.
Caveat is used for the handwritten sign-off.
If you replace fonts, update both the link and CSS families.
Do not use a decorative font for long paragraphs.
### Change animation
Motion transitions are defined close to the screens that use them.
Reusable CSS keyframes are in `index.css`.
Use short entrance animations for content.
Avoid making text move continuously while it is being read.
Keep important buttons stable enough to tap.
Respect the user's reduced-motion preference if adding large new effects.
### Change background particles
Edit the `staticFloatingItems` list in `BackgroundFloatingElements.tsx`.
Each item has a percentage position.
Each item has a size.
Each item has an animation duration.
Each item has a delay.
Each item has an opacity.
Keep decorative elements pointer-transparent.
Keep them behind the main content.
### Change sounds
The audio engine is in `src/utils/audio.ts`.
The background music is synthesized from chord data.
The scheduler uses a short look-ahead window.
Effects are generated with oscillators and gain envelopes.
The browser may require a gesture before audio begins.
Do not start audio during module evaluation.
Keep the mute state centralized.
### Change confetti
Confetti is configured in `CelebrationView.tsx`.
Change colors in the `colors` arrays.
Change particle counts for performance.
Change `ticks` for particle lifetime.
Change origins and angles for different launch patterns.
The default sequence intentionally lasts about fourteen seconds.
Shorten it for lower-power devices if needed.
---
## ðŸ§ª Available Commands
### Development
```bash
npm run dev
```
Starts Vite on port `3000`.
The server listens on all interfaces for phone testing.
### Type checking
```bash
npm run lint
```
Runs TypeScript with `--noEmit`.
This checks the project without creating build files.
Run it after editing component props or shared types.
### Production build
```bash
npm run build
```
Creates the optimized production output in `dist/`.
The build bundles React, Motion, styles, and application code.
### Preview the production build
```bash
npm run preview
```
Serves the existing `dist/` output locally.
Run `npm run build` first.
### Clean generated output
```bash
npm run clean
```
Removes generated distribution and server artifacts defined by the script.
Review the script before using it in a shared workspace.
---
## ðŸ” Quality Checklist
Before sharing the page, check the complete journey.
- The intro loads without console errors.
- The surprise button advances once.
- The talisman does not create duplicate navigation.
- Music begins only after a gesture.
- The sound toggle updates its label and icon.
- Every `NEXT` button advances correctly.
- Progress dots reflect the current middle stage.
- Background taps create temporary particles.
- The memory carousel loops from the last chapter to the first.
- The memory carousel loops from the first chapter to the last.
- Horizontal swipes work on a touch device.
- Like controls do not navigate the carousel unexpectedly.
- Larger memory viewing can be closed.
- The question remains readable on a narrow screen.
- The `NO` button stays inside the intended interaction area.
- The `NO` button eventually disappears.
- `YES` reaches the celebration screen.
- Confetti appears after celebration begins.
- The certificate appears after the reveal delay.
- The gift interaction responds to a tap.
- The share action handles Clipboard API availability.
- Replay returns to the intro.
- The layout works in portrait orientation.
- The layout works in landscape orientation.
- Text does not overflow its parent.
- Buttons remain comfortable to tap.
- The final build completes successfully.
---
## â™¿ Accessibility And Comfort
The app is primarily visual and playful, but it should still be comfortable to use.
Use descriptive labels on icon-only controls.
Keep button text meaningful.
Preserve readable contrast between text and surfaces.
Keep touch targets large enough for a phone.
Avoid placing important text underneath decoration.
Do not rely on sound to communicate the stage.
Keep the visual journey understandable with audio muted.
Consider adding a reduced-motion mode before introducing more continuous effects.
Test with browser zoom when changing typography.
Test with a keyboard when adding new controls.
Test with a screen reader when adding important content.
Use `aria-label` for controls whose icon is the only visible label.
Keep dynamic celebration content from blocking the primary message.
---
## ðŸš€ Deployment
This project builds as a static Vite site.
The output directory is `dist/`.
### Build locally
```bash
npm install
npm run lint
npm run build
```
Open the generated site through a static server.
Do not open the production `index.html` with a `file://` URL if the host requires module serving.
### Vercel
1. Import the repository into Vercel.
2. Set the framework preset to Vite if it is not detected.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Deploy.
No environment variable is required by the current front-end experience.
### Netlify
1. Add the repository as a new site.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. Deploy the site.
### GitHub Pages
Build the project in CI.
Publish the contents of `dist/`.
If the site is hosted below a repository path, configure Vite's `base` option before deploying.
Test the deployed route directly after publishing.
### Static hosting notes
The current app uses a single entry point.
There are no client-side routes to rewrite.
The Clipboard API generally requires a secure context in production.
HTTPS hosting is recommended.
Audio behavior still depends on browser gesture policies.
Mobile autoplay is not guaranteed before interaction.
---
## ðŸ” Privacy And Data
The experience keeps its interaction state in React memory.
Refreshing the page resets the journey.
The app does not require a login.
The app does not send the letter or interaction state to a server.
The share action writes a fixed message to the local clipboard when permitted.
The app does not upload clipboard contents.
The app does not request camera, microphone, or location permissions.
Review any third-party hosting analytics before sharing a public deployment.
Review photo rights before adding personal images to `assets/`.
---
## ðŸ› ï¸ Troubleshooting
### `npm` is not recognized
Install Node.js LTS.
Restart VS Code.
Open a new terminal.
Run `node --version` again.
### The page is blank
Check the terminal for build errors.
Run `npm run lint`.
Run `npm run build`.
Refresh after fixing the reported source error.
### Port `3000` is busy
Stop the process using the port.
Or run Vite with another port for a temporary test:
```bash
npx vite --host=0.0.0.0 --port=3001
```
Use the matching port in the browser URL.
### The phone cannot connect
Confirm the laptop and phone share Wi-Fi.
Use the laptop's private IPv4 address.
Keep `--host=0.0.0.0` enabled.
Check the firewall prompt for Node.js.
Try a different private network.
### Music is silent
Tap the main action first.
Check the sound toggle.
Check the phone's media volume.
Check that another browser tab is not controlling audio focus.
Some browsers suspend audio contexts until a gesture.
### Confetti is not visible
Check that JavaScript is enabled.
Check the browser console.
Try the celebration action again.
Check whether a browser extension is blocking canvas effects.
### Share does not copy
Clipboard access depends on browser permissions.
Use HTTPS when deployed.
Allow clipboard access when prompted.
The celebration message can still be copied manually from the source if needed.
### Fonts look different
The page loads fonts from Google Fonts.
Offline usage may fall back to local font stacks.
Check the network panel for blocked font requests.
Keep the fallback fonts defined in `index.css`.
---
## ðŸ¤ Contribution Workflow
1. Create a focused change.
2. Keep content personal and respectful.
3. Run `npm run lint`.
4. Run `npm run build`.
5. Test desktop and phone layouts.
6. Review the full story from intro to replay.
7. Keep unrelated files unchanged.
Small, focused changes are easiest to review.
Prefer existing components and styles before adding new abstractions.
Keep shared data typed.
Keep user-facing copy easy to edit.
---
## ðŸ“œ Credits
- React provides the component model.
- TypeScript provides static typing.
- Vite provides local development and production bundling.
- Motion provides screen and interaction animation.
- Tailwind CSS provides utility styling.
- Lucide provides interface icons.
- canvas-confetti provides the celebration effect.
- Web Audio API provides the synthesized music and sounds.
- Google Fonts provides Fredoka, Outfit, and Caveat.
This project is a personal-style interactive greeting.
Please personalize the words before sharing it with someone you love.
---
## ðŸ’™ Final Note
The best part of this project is not the confetti.
It is the feeling that someone took the time to make a moment just for one person.
Change the names.
Change the memories.
Change the jokes.
Keep the affection.
Then run the app, hand over the phone, and let the surprise unfold.
Made with eternal love for the best brother. ðŸ’™ ðŸŒ¸ ðŸ§¿

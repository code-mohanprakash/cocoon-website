# Cocoon - Meeting Transcriber

## Brand Identity & Tagline

**App Name:** Cocoon
**Tagline:** "Your conversations don't belong in ads or the cloud."
**Philosophy:** Privacy-first, 100% on-device AI

---

## The Vibe

Cocoon is designed to feel **warm, trustworthy, and premium** - like a personal assistant that respects your privacy. The aesthetic is:

- **Warm & Approachable** - Cream backgrounds, soft shadows, rounded corners
- **Professional Yet Friendly** - Clean typography with playful accents
- **Trustworthy** - Shield iconography, privacy-focused messaging
- **Minimal & Focused** - No clutter, clear hierarchy, purposeful animations

### The Butterfly Metaphor
The app uses a **butterfly emerging from a cocoon** as its core metaphor:
- Your conversations are protected in a "cocoon" (encrypted, on-device)
- When ready, insights "emerge" as beautiful summaries
- Transformation: raw audio → transcription → actionable insights

---

## Color Palette

### Primary Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Claude Orange** | `#D97333` | `rgb(217, 115, 51)` | Primary accent, CTAs, highlights, branding |
| **Royal Blue** | `#405AC0` | `rgb(64, 90, 192)` | Notes feature, secondary accent, links |
| **Record Red** | `#D94040` | `rgb(217, 64, 64)` | Recording state, alerts, action items |

### Neutral Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Ink** | `#1A1A1A` | `rgb(26, 26, 26)` | Primary text, headings |
| **Charcoal** | `#4A4A4A` | `rgb(74, 74, 74)` | Secondary text, body copy |
| **Slate** | `#8A8A8A` | `rgb(138, 138, 138)` | Tertiary text, timestamps, hints |
| **Silver** | `#E5E5E5` | `rgb(229, 229, 229)` | Borders, dividers, disabled states |

### Background Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Warm Cream** | `#FDF8F3` | `rgb(253, 248, 243)` | Primary background (warm, inviting) |
| **Card White** | `#FFFFFF` | `rgb(255, 255, 255)` | Cards, elevated surfaces |
| **Secondary BG** | `#F5F5F5` | `rgb(245, 245, 245)` | Section backgrounds |

### Accent Colors (Secondary)

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Idea Yellow** | `#F2BF33` | `rgb(242, 191, 51)` | Ideas, lightbulb moments |
| **Todo Green** | `#33B366` | `rgb(51, 179, 102)` | Completed items, success states |
| **Purple** | `#8B5CF6` | `rgb(139, 92, 246)` | AI/Magic features (sparkles) |

---

## Typography

### Font Family
**System Font (SF Pro)** - Native iOS feel, excellent legibility

### Type Scale

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| **Hero** | 28pt | Bold | Page titles, greetings |
| **Title** | 20pt | Bold | Section headers, card titles |
| **Headline** | 17pt | Semibold | List item titles, buttons |
| **Body** | 15pt | Regular | Body text, descriptions |
| **Subheadline** | 14pt | Medium | Secondary info, metadata |
| **Caption** | 12pt | Regular | Timestamps, hints, labels |
| **Caption 2** | 11pt | Regular | Fine print, badges |

### Design Style
- **Rounded design** (`design: .rounded`) for friendly feel
- **Letter spacing** on section labels (1pt tracking)
- **Line height** 1.4-1.6 for readability

---

## App Features

### 1. Meeting Recording & Transcription

**What it does:**
- Records meetings with one tap
- Transcribes speech to text in real-time
- Works completely offline - no internet required
- Supports background recording

**Key Features:**
- Live waveform visualization during recording
- Real-time transcript preview
- Pause/resume recording
- Automatic silence detection (VAD)
- Speaker detection (identifies who said what)

**Privacy:**
- Audio never leaves your device
- No cloud processing
- Optional local encryption

---

### 2. AI-Powered Summaries

**What it does:**
- Generates intelligent meeting summaries
- Extracts key points, action items, and decisions
- Multiple tone options for different contexts

**Summary Tones:**
| Tone | Description |
|------|-------------|
| **Professional** | Formal, business-appropriate language |
| **Casual** | Friendly, conversational style |
| **Brief** | Bullet points, ultra-concise |
| **Detailed** | Comprehensive with context |

**Key Features:**
- One-tap summary generation
- Regenerate with different tones
- Rephrase options (shorter, longer, simpler, more formal)
- Copy & share summaries

---

### 3. Quick Notes

**What it does:**
- Capture voice memos (30-60 seconds)
- Instant transcription
- Categorize notes automatically

**Categories:**
| Category | Icon | Color | Use Case |
|----------|------|-------|----------|
| **Note** | `doc.text` | Royal Blue | General notes |
| **Idea** | `lightbulb` | Yellow | Brainstorms, inspiration |
| **Reminder** | `bell` | Orange | Time-sensitive items |
| **Todo** | `checkmark.circle` | Green | Tasks, action items |

---

### 4. AI Chat

**What it does:**
- Ask questions about any meeting
- Get instant answers from the transcript
- Find specific information quickly

**Example Questions:**
- "What was discussed?"
- "What decisions were made?"
- "What are the action items?"
- "What did [person] say about [topic]?"

---

### 5. Meeting Library

**What it does:**
- Browse all recorded meetings
- Search across transcripts
- Filter by date, duration, keywords

**Features:**
- Meeting cards with preview
- Duration and date badges
- Quick access to transcript and summary

---

### 6. Export & Sharing

**Formats:**
- Plain text (.txt)
- Markdown (.md)
- PDF (formatted)
- Copy to clipboard

**Share Options:**
- AirDrop
- Messages
- Email
- Any app via share sheet

---

## Technical Design

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         UI Layer                             │
│              SwiftUI Views + MVVM ViewModels                 │
├─────────────────────────────────────────────────────────────┤
│                      Business Logic                          │
│   TranscriptionCoordinator │ SummarizationCoordinator       │
│              ModelMemoryManager (1 model at a time)          │
├─────────────────────────────────────────────────────────────┤
│                       ML Services                            │
│         WhisperService          │      LLaMAService          │
│        (Speech-to-Text)         │    (Summarization)         │
├─────────────────────────────────────────────────────────────┤
│                     Native Bridges                           │
│      WhisperBridge.mm (C++)     │    LLaMABridge.mm (C++)    │
├─────────────────────────────────────────────────────────────┤
│                    ML Libraries                              │
│         whisper.cpp             │       llama.cpp            │
│     (Metal GPU Accelerated)     │   (Metal GPU Accelerated)  │
└─────────────────────────────────────────────────────────────┘
```

### On-Device AI Models

| Model | Purpose | Size | Technology |
|-------|---------|------|------------|
| **Whisper Base** | Speech-to-Text | ~140MB | whisper.cpp + Metal |
| **SmolLM3 3B** | Summarization & Chat | ~1.8GB | llama.cpp + Metal |

### Why 100% On-Device?

1. **Privacy** - Your conversations never leave your phone
2. **Speed** - No network latency, instant processing
3. **Reliability** - Works offline, in airplane mode, anywhere
4. **Security** - No server breaches, no data leaks possible
5. **Cost** - No ongoing cloud fees for AI processing

### Device Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| **iOS Version** | iOS 16.0 | iOS 17.0+ |
| **iPhone** | iPhone 13 | iPhone 14 Pro+ |
| **Chip** | A15 Bionic | A16/A17 Pro |
| **RAM** | 4GB | 6GB+ |
| **Storage** | 3GB free | 5GB+ free |

### Memory Management

The app intelligently manages memory to run on mobile devices:

- Only one AI model loaded at a time
- Whisper loads for recording → unloads when done
- LLaMA loads for summaries → unloads after generation
- Peak memory: ~2GB during inference
- Idle memory: ~100MB

### Privacy & Security

| Feature | Implementation |
|---------|----------------|
| **On-Device Processing** | All AI runs locally via Metal GPU |
| **No Network Calls** | Zero data sent to servers |
| **Local Storage** | Core Data with optional encryption |
| **No Analytics** | No tracking, no telemetry |
| **No Accounts** | No sign-up required |

---

## Screen-by-Screen Design

### 1. Splash Screen

**Duration:** 5 seconds (first launch), 3 seconds (returning)

**Elements:**
- Animated butterfly emerging from cocoon
- App name "Cocoon" in Claude Orange
- Privacy slogan: "Your conversations don't belong in ads or the cloud."
- Shield icon with "100% on-device. Always private."
- Warm cream background with subtle gradient

**Animation:**
- Cocoon gently pulses
- Butterfly wings flutter with 3D effect
- Smooth fade transition to home

---

### 2. Home Screen

**Layout:** Single scroll view with sticky bottom actions

**Sections:**
1. **Greeting** - Time-based ("Good morning/afternoon/evening") with animated sun/moon icon
2. **Search Bar** - "Search meetings or notes"
3. **Stats Card** - Notes count, Meetings count, Total duration, Word count
4. **Tabbed Content** - Toggle between Notes and Meetings
5. **Quick Actions** - Bottom bar with Note, Record, Chat, Meetings

**Quick Actions Bar:**
| Action | Icon | Color | Description |
|--------|------|-------|-------------|
| Note | `doc.text.fill` | Royal Blue | Quick voice note |
| Record | `mic.fill` | Record Red | Start meeting recording |
| Chat | `bubble.left.and.bubble.right.fill` | Charcoal | AI chat with meetings |
| Meetings | `folder.fill` | Claude Orange | Browse all meetings |

---

### 3. Recording Screen

**States:**
1. **Pre-Recording** - Meeting name input, feature tags, countdown
2. **Recording** - Live waveform, duration timer, transcript preview
3. **Paused** - Resume/Stop options
4. **Processing** - Saving progress indicator

**Feature Tags (below meeting name):**
| Tag | Icon | Color |
|-----|------|-------|
| Live Transcription | `waveform` | Claude Orange |
| AI Summary | `sparkles` | Royal Blue |
| Action Items | `checkmark.circle` | Record Red |

**Recording Controls:**
- Large circular record button (grey when idle, red when recording)
- Pause button appears during recording
- Stop button to finish

---

### 4. Meeting Detail Screen

**Tabs:**
1. **Transcript** - Full meeting transcript with speaker labels
2. **Summary** - AI-generated summary with key points

**Summary Section Features:**
- Progress indicator during generation
- Tone selector (Professional, Casual, Brief, Detailed)
- Regenerate button
- Rephrase options
- Save and Copy buttons
- "Generated on-device" badge with sparkle icon

---

### 5. Quick Note Screen

**Layout:** Full-screen recording interface

**Elements:**
- Large microphone button (center)
- Category picker (Note, Idea, Reminder, Todo)
- Duration counter
- Waveform visualization
- Cancel and Save buttons

**Category Picker Style:**
- Rounded squares with subtle color fill
- Icon + label for each category
- Selection indicated by colored border

---

### 6. Chat Screen

**Layout:** Messaging-style interface

**Elements:**
- Meeting header (title, date, duration)
- Message bubbles (user = accent color, AI = white)
- Quick suggestion chips
- Text input with send button
- Loading indicator (typing dots)

**AI Avatar:** Sparkles icon in charcoal circle

---

### 7. Settings Screen

**Sections:**
1. **AI Settings** - Summary tone, language, custom dictionary
2. **Audio Settings** - Recording quality, noise reduction
3. **Privacy** - Local storage, encryption options
4. **About** - Version, privacy policy, support

---

## Iconography

### System Icons Used

| Feature | Icon | SF Symbol |
|---------|------|-----------|
| Record | Microphone | `mic.fill` |
| Transcript | Document | `doc.text` |
| Summary | Sparkles | `sparkles` |
| Chat | Bubbles | `bubble.left.and.bubble.right.fill` |
| Settings | Gear | `gearshape` |
| Privacy | Shield | `shield.checkered` |
| Export | Share | `square.and.arrow.up` |
| Delete | Trash | `trash` |
| Search | Magnifier | `magnifyingglass` |
| Clock | Clock | `clock.fill` |
| Calendar | Calendar | `calendar` |
| Person | Person | `person.fill` |
| Folder | Folder | `folder.fill` |

### Custom Elements

- **Butterfly Logo** - Custom animated SVG for splash
- **Waveform** - Real-time audio visualization
- **Progress Ring** - Circular progress for AI generation

---

## Animations & Micro-interactions

### Splash Screen
- Cocoon pulse: 2s ease-in-out, repeating
- Butterfly flutter: 3D rotation, 0.6s duration
- Fade out: 0.5s ease-out

### Recording
- Waveform: Real-time audio amplitude
- Pulse rings: Expanding circles during recording
- Button press: Scale to 0.92, spring back

### AI Generation
- Progress ring: Smooth 0-100% fill
- Stage text: Fade between stages
- Completion: Checkmark with scale animation

### Navigation
- Card press: Scale to 0.96, spring back
- Tab switch: 0.2s ease-in-out slide
- Sheet present: Spring animation (response: 0.4, damping: 0.8)

### Loading States
- Typing indicator: Three dots with staggered bounce
- Skeleton: Shimmer effect left-to-right

---

## Accessibility

### VoiceOver Support
- All interactive elements labeled
- Meaningful descriptions for icons
- Reading order optimized

### Dynamic Type
- All text scales with system settings
- Minimum touch targets: 44x44pt

### Color Contrast
- All text meets WCAG AA standards
- Important info not conveyed by color alone

### Reduced Motion
- Respects system preference
- Falls back to fade transitions

---

## App Store Metadata

### App Name
**Cocoon - Meeting Transcriber**

### Subtitle
**Private AI Notes & Summaries**

### Keywords
`meeting transcriber, voice recorder, ai summary, speech to text, offline transcription, private notes, meeting notes, voice memo, whisper ai, local ai`

### Description (Short)
Record meetings, get AI summaries, and keep your conversations private. 100% on-device - nothing leaves your phone.

### Description (Full)
Cocoon transforms how you capture and understand meetings. With powerful on-device AI, you get instant transcriptions and intelligent summaries without sacrificing privacy.

**Why Cocoon?**
- 100% Private: All processing happens on your device
- No Cloud: Your conversations never leave your phone
- No Account: Start using immediately, no sign-up required
- Works Offline: Perfect for flights, remote locations, or secure environments

**Features:**
- Real-time meeting transcription
- AI-powered meeting summaries
- Quick voice notes with categories
- Chat with your meeting transcripts
- Speaker detection
- Export to PDF, Markdown, or text
- Beautiful, intuitive interface

**Powered by:**
- Whisper AI for speech recognition
- Advanced language models for summarization
- Metal GPU acceleration for speed

Your conversations are valuable. Keep them private with Cocoon.

---

## Website Sections Suggested

1. **Hero** - App mockup + tagline + download button
2. **Privacy Promise** - "100% on-device" explanation with visual
3. **Features Grid** - 6 feature cards with icons
4. **How It Works** - 3-step visual flow
5. **Technical** - "Powered by" section for tech-savvy users
6. **Testimonials** - User quotes (when available)
7. **FAQ** - Common questions about privacy, device requirements
8. **Download CTA** - App Store button + QR code

---

## Brand Assets Needed

- [ ] App Icon (1024x1024)
- [ ] Butterfly logo (SVG)
- [ ] App screenshots (6.7", 6.5", 5.5")
- [ ] Feature illustrations
- [ ] Social preview image (1200x630)
- [ ] Favicon (32x32, 180x180)

---

*Document Version: 1.0*
*Last Updated: February 2025*
*For: Cocoon iOS App Website*

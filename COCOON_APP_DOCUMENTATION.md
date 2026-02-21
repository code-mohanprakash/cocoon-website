# Cocoon - Complete App Documentation

**Your meetings. Your AI. Your privacy.**

*Private AI meeting transcriber for iOS and macOS*

---

## Table of Contents

1. [About Cocoon](#about-cocoon)
2. [Core Features](#core-features)
3. [iOS Features](#ios-features)
4. [macOS Features](#macos-features)
5. [AI Models & Technology](#ai-models--technology)
6. [Privacy & Security](#privacy--security)
7. [System Requirements](#system-requirements)
8. [Privacy Policy (Full)](#privacy-policy-full)
9. [Contact Information](#contact-information)

---

## About Cocoon

### Our Mission

Cocoon is built on the belief that powerful AI tools should respect your privacy. We created Cocoon to give you the benefits of AI-powered meeting transcription and summarization without ever compromising your data.

In a world where most apps send your data to the cloud, we take a different approach: everything stays on your device. Always.

### Why Cocoon?

Privacy isn't a feature at Cocoon — it's the foundation. We designed every aspect of the app around this principle to give you enterprise-grade AI capabilities without sacrificing your privacy.

Whether you're a student recording lectures, a professional documenting meetings, or someone who wants to capture important moments, Cocoon is designed for you.

---

## Core Features

### 🎙️ Smart Recording
- **One-tap recording** with background support
- Never miss a moment, even when multitasking
- Background audio processing on iOS
- System microphone and external device support on macOS
- High-quality audio capture with real-time monitoring

### ✍️ Instant Transcription
- **AI-powered speech-to-text** using OpenAI's Whisper model
- Accurate transcriptions in real-time, completely offline
- Speaker diarization support (macOS)
- Real-time transcript preview during recording
- Support for multiple languages

### ✨ Smart Summaries
- **Automatic AI-generated summaries** using Meta's LLaMA model
- Key points extraction
- Action items identification
- Decision highlights
- Contextual insights
- Hybrid summarization (on-device + cloud-assisted for better quality on macOS)

### 💬 Chat with AI
- Ask questions about your meetings
- Get instant answers from your meeting history
- Context-aware responses using hybrid retrieval (BM25 + semantic search)
- Chat about specific meetings or across all your recordings
- Intelligent context retrieval for accurate answers

### 🔒 100% Private
- Everything runs on your device
- No servers, no cloud processing, no data collection
- AES-256 encrypted local storage
- No accounts, no sign-ins required
- Works perfectly offline after initial setup

### 📝 Quick Notes
- Capture fleeting thoughts in 30-60 seconds
- Perfect for ideas, reminders, and voice memos
- Instant AI-generated titles
- Full transcription and summarization
- Organize alongside your full meetings

### 📂 Organization
- Folder-based organization system
- Tag and categorize meetings
- Search across all transcripts
- Filter by date, folder, or tags
- Export transcripts in multiple formats

### 🔄 iCloud Sync
- Seamlessly sync across all your Apple devices (optional)
- End-to-end encrypted sync using Apple CloudKit
- Apple cannot read your data, and neither can we
- Sync meetings, transcripts, summaries, and optionally audio files
- Start on one device, continue on another

---

## iOS Features

### Core Capabilities
- **iPhone and iPad support** with optimized layouts
- **Background recording** - record while using other apps
- **Lock screen controls** for easy access during recording
- **Today widget** for quick recording access
- **Portrait and landscape** orientation support
- **Universal app** - one purchase for iPhone and iPad

### Recording Features
- Tap to start/stop recording
- Real-time audio level monitoring
- Background audio continuation
- Pause and resume recording
- Auto-save and recovery after crashes

### AI Processing
- On-device Whisper model (distil-medium, 394MB)
- On-device LLaMA model for summarization (3B or 8B variants)
- Metal GPU acceleration on supported devices
- Intelligent memory management
- Real-time transcription as you speak

### Organization
- Folder-based organization
- Search across all meetings
- Sort by date, title, or duration
- Swipe actions for quick operations
- Bulk operations on multiple meetings

### Privacy Features
- All data encrypted with AES-256
- No cloud uploads (unless iCloud sync enabled)
- Face ID / Touch ID protection (optional)
- Secure enclave integration
- Automatic backup exclusion for sensitive data

### Export & Sharing
- Export transcripts as text or PDF
- Share summaries and action items
- Copy specific segments
- AirDrop support

---

## macOS Features

### Desktop-Optimized Experience
- **Native macOS design** with AppKit/SwiftUI
- **Menu bar access** - quick access without leaving your current app
- **Keyboard shortcuts** for all major actions
- **Multi-window support**
- **Drag and drop** file operations

### Calendar Integration
- **View upcoming meetings** from your macOS Calendar
- Start recording with one click from calendar view
- See meeting details and participants
- Quick meeting context at a glance

### Recording Features
- Desktop microphone support
- External audio device support
- System audio capture options
- High-quality audio recording
- Audio level monitoring with VU meter

### Advanced AI Features
- **Speaker diarization** - identify different speakers
- **Hybrid summarization** - combine on-device and cloud AI for better quality
- **Advanced context retrieval** - BM25 + semantic embeddings
- GPU acceleration with Metal framework
- Optimized for Apple Silicon (M1/M2/M3)

### Productivity
- **Menu bar widget** - see recording status at a glance
- **Global keyboard shortcuts**
  - Start/stop recording
  - Create quick note
  - Open main window
- **Notification center integration**
- **Spotlight integration** for searching meetings
- **Quick Look support** for transcript previews

### Sync & Collaboration
- iCloud sync with iOS devices
- End-to-end encrypted sync
- Sync audio files (optional)
- Team sharing features (upcoming)

### Professional Features
- Export to multiple formats (TXT, MD, PDF, DOCX)
- Batch export operations
- Custom summary templates
- Action item tracking
- Decision logging

---

## AI Models & Technology

### Whisper - Speech Recognition

**Model:** OpenAI Whisper (distil-medium variant)

**Details:**
- **Size:** 394MB
- **Type:** Distilled speech-to-text transformer model
- **Accuracy:** State-of-the-art speech recognition
- **Speed:** 2x faster than Whisper Large model
- **Languages:** Multi-language support (optimized for English)
- **Processing:** 100% on-device inference
- **Framework:** Runs via llama.cpp with Metal GPU acceleration

**Critical Parameters:**
- `token_timestamps = true` - Enables precise word-level timing
- `max_len = 1` - Optimizes for real-time processing
- `language = "en"` - Default to English for reliability
- Auto-unload after 5 minutes of inactivity to save memory

**How It Works:**
1. Audio is captured in real-time from your device microphone
2. Audio is processed in chunks by the Whisper model
3. Text is generated with timestamps for each word/phrase
4. Results are displayed in real-time as you speak

### LLaMA - AI Summarization & Chat

**Model:** Meta LLaMA 3.2 (3B or 8B variants)

**Details:**
- **Size:**
  - 3B variant: ~2.3GB (recommended for 8GB RAM devices)
  - 8B variant: ~5.3GB (requires 16GB+ RAM)
- **Type:** Large language model for text generation
- **Capabilities:** Summarization, key point extraction, action items, Q&A
- **Processing:** 100% on-device inference
- **Framework:** llama.cpp with Metal GPU acceleration

**GPU Acceleration:**
- Metal GPU support on Apple Silicon Macs
- Automatic fallback to CPU on Intel Macs or when GPU memory insufficient
- `n_gpu_layers` parameter controls GPU/CPU split
- Optimized batch processing for efficiency

**Use Cases:**
1. **Meeting Summarization** - Generate concise summaries of long transcripts
2. **Key Points Extraction** - Identify main discussion topics
3. **Action Items** - Detect tasks and follow-ups
4. **Decision Tracking** - Highlight key decisions made
5. **Chat Assistant** - Answer questions about your meetings

**Manual Sampling (Custom Implementation):**
- `llama_get_logits_ith(ctx, -1)` - Get output probabilities
- `llama_sampler_apply()` - Apply sampling strategy
- `llama_sampler_accept()` - Finalize token selection
- Fresh context initialization per generation for stability

### Hybrid Retrieval System (macOS)

**Components:**
- **BM25 Retrieval** - Traditional keyword-based search
- **Semantic Embeddings** - MiniLM embeddings for semantic search
- **Hybrid Ranking** - Combines both approaches for best results

**How It Works:**
1. User asks a question in chat
2. BM25 finds keyword matches in transcripts
3. Semantic embeddings find conceptually similar content
4. Results are combined and ranked
5. Top context is passed to LLaMA for answer generation

### Model Downloads

**Source:** Hugging Face (huggingface.co)

**Process:**
1. On first launch, app downloads AI models from Hugging Face
2. Models are downloaded once via HTTPS
3. Models are stored locally on your device
4. All subsequent AI processing is 100% offline

**Privacy:**
- During download, Hugging Face may collect connection metadata (IP address, device info)
- No personal data, user accounts, or meeting content is sent
- After download, no internet connection required for AI features

### Memory Management (Critical)

**ModelMemoryManager Pattern:**
- **Only ONE model loaded at a time** (enum: none, whisper, llama)
- **Auto-swapping:** Loading Whisper unloads LLaMA; loading LLaMA unloads Whisper
- **GPU cooldown:** 500ms wait between unload/load operations
- **Memory checks:** Before loading (1GB for Whisper, 2.5GB for LLaMA)
- **Defensive unloading:** Always attempts unload even if state says not loaded
- **Thread-safe:** All operations are @MainActor

**Startup Memory Strategy:**
- **iOS:** Only auto-load Whisper on startup
- **macOS:** Only auto-load Whisper on startup
- LLaMA loads on-demand (generateTitle, generateSummary, chat)
- Prevents kernel panic on 8GB RAM devices

---

## Privacy & Security

### Privacy-First Architecture

Cocoon operates entirely on your device:

✅ **What We DO:**
- All audio recording and transcription happens locally
- All AI processing runs on-device using embedded ML models
- Store everything encrypted on your device
- Provide optional end-to-end encrypted iCloud sync
- Function fully offline after initial model download

❌ **What We DON'T DO:**
- Upload recordings to servers
- Process data in the cloud
- Require user accounts or sign-ins
- Use advertising networks or analytics SDKs
- Perform telemetry, usage tracking, or behavioral profiling
- Share, sell, rent, or trade your data

### Data Storage & Encryption

**Local Storage:**
- **Encryption:** AES-256 encryption via Apple's CryptoKit
- **Storage:** Core Data database on iOS/macOS
- **Protection:** Platform-level encryption (Data Protection on iOS)
- **Backup:** Session logs excluded from iCloud backup
- **Control:** Delete individual meetings or all data anytime

**iCloud Sync (Optional):**
- **Method:** Apple CloudKit with CKRecord.encryptedValues
- **Encryption:** End-to-end encrypted - only your devices can read data
- **Control:** Enable/disable anytime in Settings
- **Audio:** Audio files only synced if separately enabled
- **Scope:** Meeting data, transcripts, summaries

### Security Features

**Encryption:**
- AES-256 encryption for all meeting data
- CryptoKit framework for cryptographic operations
- Encrypted values in CloudKit sync
- Secure key storage in iOS Keychain

**Access Control:**
- Face ID / Touch ID protection (optional on iOS)
- Device-level encryption via Data Protection
- No external access - data never leaves your devices

**Network Security:**
- HTTPS for model downloads from Hugging Face
- CloudKit secure communication (when sync enabled)
- No other network activity

### Third-Party Services

**Hugging Face (huggingface.co):**
- **Used for:** One-time download of open-source AI models
- **What's shared:** Connection metadata only (IP, device info)
- **What's NOT shared:** Personal data, meeting content, usage data
- **Privacy Policy:** https://huggingface.co/privacy

**Apple iCloud (Optional):**
- **Used for:** End-to-end encrypted sync between your devices
- **Encryption:** Apple cannot read your meeting content
- **Control:** You can disable sync anytime

**NOT Included:**
- ❌ No advertising networks or ad SDKs
- ❌ No analytics services (Google Analytics, Firebase, Mixpanel)
- ❌ No crash reporting (Crashlytics, Sentry)
- ❌ No social media SDKs
- ❌ No attribution or tracking frameworks

### Device Permissions

**Required:**
- 🎤 **Microphone** - Record meeting audio for transcription (audio processed and stored locally)

**Optional:**
- 📅 **Calendar** (macOS only) - Display upcoming meetings for context (never stored or transmitted)
- ☁️ **iCloud** - Sync meeting data across devices using end-to-end encryption

### Your Rights

**Access:** View all recordings, transcripts, and summaries directly in the app

**Delete:** Remove any individual meeting or all data at any time

**Export:** Export transcripts and summaries for personal use

**Revoke:** Disable microphone access at any time via system settings

**Control:** Full control over iCloud sync (enable/disable anytime)

### Compliance

**GDPR (European Users):**
- Data minimization principle
- Right to erasure
- No international data transfers (data never leaves your device)
- Local processing only

**CCPA/CPRA (California Users):**
- Right to know what data is collected
- Right to delete
- Right to opt-out of sale
- We do not sell personal information and never have

**COPPA (Children's Privacy):**
- Not directed at children under 13 (or 16 in EEA)
- We do not knowingly collect data from children

---

## System Requirements

### iOS Requirements

**Operating System:**
- iOS 16.0 or later
- iPadOS 16.0 or later

**Device Compatibility:**
- iPhone 8 or newer
- iPad (5th generation) or newer
- iPad Air (3rd generation) or newer
- iPad Pro (all models)
- iPad mini (5th generation) or newer

**Hardware:**
- **RAM:** 4GB minimum, 6GB+ recommended
- **Storage:** 5GB available space for AI models
- **Microphone:** Required for recording
- **Neural Engine:** Recommended for best performance

**Network:**
- Internet connection required for initial model download only
- Offline functionality after setup

### macOS Requirements

**Operating System:**
- macOS 14 Sonoma or later

**Processor:**
- **Apple Silicon:** M1, M2, M3 (recommended)
- **Intel:** Intel Mac with 16GB+ RAM

**Hardware:**
- **RAM:**
  - 8GB minimum (LLaMA 3B model only)
  - 16GB+ recommended (LLaMA 8B model)
- **Storage:** 5GB available space for AI models
- **Microphone:** Built-in or external microphone required
- **GPU:** Metal-compatible GPU (all Apple Silicon Macs)

**Network:**
- Internet connection required for initial model download only
- Offline functionality after setup

### Storage Requirements

**AI Models:**
- Whisper (distil-medium): 394MB
- LLaMA 3B: ~2.3GB
- LLaMA 8B: ~5.3GB
- Total: ~3GB - 6GB depending on LLaMA variant

**Per Meeting:**
- Audio file: ~1-5MB per hour (compressed)
- Transcript: ~50-200KB per hour
- Summary: ~5-20KB
- Metadata: ~10KB

**Estimated Total:**
- 50 meetings: ~250MB - 1GB
- 100 meetings: ~500MB - 2GB
- 500 meetings: ~2.5GB - 10GB

---

## Privacy Policy (Full)

### Last Updated: February 11, 2026
### Effective Date: February 11, 2026

### 1. Introduction

Cocoon ("the App", "we", "us", or "our") is a meeting transcription and AI summarization application available on iOS (iPhone/iPad) and macOS. This Privacy Policy describes how we collect, use, store, and protect your information when you use our App.

Cocoon is built on a foundational principle: your conversations are private and should never leave your device. We designed every feature around this commitment.

By downloading or using Cocoon, you agree to this Privacy Policy. If you do not agree, please do not use the App.

### 2. Our Privacy-First Architecture

Cocoon operates entirely on your device. This means:

- All audio recording and transcription happens locally on your device
- All AI-powered summarization runs on-device using embedded machine learning models
- Your meeting recordings, transcripts, and summaries are never uploaded to any server
- No user accounts or sign-ins are required
- No advertising networks or analytics SDKs are embedded in the App
- No telemetry, usage tracking, or behavioral profiling is performed
- The App functions fully offline after the initial one-time model download
- Optional iCloud sync (when enabled) uses Apple's end-to-end encrypted CloudKit storage — only your devices can read your data

### 3. Information We Collect

**a) Audio Recordings**

When you use the recording feature, Cocoon captures audio through your device's microphone. This audio is processed in real-time by the on-device Whisper speech recognition model and is stored locally on your device. Audio data is never transmitted to any external server or third party.

**b) Transcripts & AI Summaries**

Transcripts are generated from your audio using the on-device Whisper model. Summaries, key points, and action items are generated using the on-device LLaMA language model. All AI inference runs locally — no API calls are made to cloud AI services.

**c) User Profile**

You may optionally set a display name during onboarding. This is stored locally on your device using UserDefaults and is never transmitted externally.

**d) App Preferences & Settings**

Language preferences, theme settings, and other configurations are stored locally on your device using standard platform storage mechanisms (UserDefaults on iOS, UserDefaults on macOS).

**e) Calendar Data (macOS only)**

On macOS, Cocoon may request access to your calendar to display upcoming meetings for context. Calendar data is read locally and is never stored, copied, or transmitted by the App.

### 4. Data Storage & Security

All meeting data is stored locally on your device using the following protections:

- **Encrypted Storage:** Meeting transcripts and summaries are encrypted using AES-256 encryption via Apple's CryptoKit framework before being stored in Core Data
- **Platform Encryption:** Data is further protected by iOS/macOS device-level encryption (Data Protection)
- **No Cloud Backup of Sensitive Data:** Session logs and meeting backup directories are excluded from automatic iCloud backup
- **Local-Only Storage:** By default, all data resides exclusively on your device's local storage
- **Optional iCloud Sync:** When enabled, meeting data is synced via Apple CloudKit using CKRecord.encryptedValues (end-to-end encrypted). Audio files are only synced if you separately enable audio sync. You can disable sync at any time in Settings

You maintain full control over your data and can delete individual meetings or all data at any time through the App's interface.

### 5. AI Model Downloads & Hugging Face

On first launch, Cocoon downloads two open-source AI models to enable on-device processing:

- **Whisper (Speech Recognition)** — An open-source speech-to-text model developed by OpenAI, downloaded from Hugging Face
- **LLaMA (Summarization)** — An open-source language model developed by Meta, downloaded from Hugging Face

These models are downloaded once over HTTPS from Hugging Face (huggingface.co), a trusted open-source AI model repository. After download, the models are stored locally and all AI processing happens entirely offline.

During the download, Hugging Face and its infrastructure providers may automatically collect connection metadata including IP address, device information, and download request metadata. Cocoon does not send any personal data, user accounts, app usage data, or meeting content to Hugging Face.

For full details, see Hugging Face's Privacy Policy at https://huggingface.co/privacy.

### 6. Network Activity

Cocoon makes network requests only in the following limited circumstances:

- **Model Downloads:** One-time HTTPS downloads from Hugging Face to retrieve AI model files during initial setup
- **iCloud Sync (Optional):** When enabled, Cocoon uses Apple CloudKit to sync meeting data between your devices. All data is end-to-end encrypted — Apple cannot read your meeting content

After models are downloaded and aside from optional iCloud sync, Cocoon requires no internet connection.

### 7. Third-Party Services

**Hugging Face (huggingface.co)** — Used exclusively for the one-time download of open-source AI model files.

**Apple iCloud (Optional)** — When iCloud sync is enabled, meeting data is stored in your private iCloud CloudKit database using end-to-end encryption. Apple cannot read your meeting content.

Cocoon does not integrate any of the following:

- Advertising networks or ad SDKs
- Analytics or telemetry services (e.g., Google Analytics, Firebase, Mixpanel)
- Crash reporting services (e.g., Crashlytics, Sentry)
- Social media SDKs
- Attribution or tracking frameworks

### 8. Device Permissions

- **Microphone (Required):** Used to record meeting audio for transcription. Audio is processed and stored locally.
- **Calendar (macOS only, Optional):** Used to display upcoming meetings for context. Never stored or transmitted.
- **iCloud (Optional):** When enabled, syncs meeting data across devices using end-to-end encryption.

### 9. Data Sharing & Disclosure

We do not share, sell, rent, trade, or transfer your personal data to any third party. Since all data remains on your device and we have no access to it, there is no data for us to share.

### 10. Data Retention & Deletion

- **On-Device Data:** Retained until you choose to delete it
- **iCloud Data:** Synced if enabled; removed when you delete meetings in the App
- **Complete Removal:** Uninstalling the App removes all locally stored data

### 11. Your Rights

- **Access:** View all your recordings, transcripts, and summaries directly in the App
- **Delete:** Remove any individual meeting or all data at any time
- **Export:** Export transcripts and summaries for personal use
- **Revoke Permissions:** Disable microphone access at any time

### 12. European Users (GDPR)

If you are located in the EEA, UK, or Switzerland, you have rights under GDPR including data minimization, right to erasure, and no international data transfers (your data never leaves your device).

### 13. California Users (CCPA/CPRA)

California residents have rights including right to know, right to delete, and right to opt-out of sale. We do not sell your personal information and have never done so.

### 14. Children's Privacy

Cocoon is not directed at children under 13 (or 16 in the EEA). We do not knowingly collect personal information from children.

### 15. Changes to This Policy

We may update this Privacy Policy to reflect changes in our practices or applicable laws. When we make changes, we will update the "Last updated" date. Continued use of the App after changes constitutes acceptance.

### 16. Contact Us

If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:

**Email:** privacy@cocoonapp.com

---

## Contact Information

### Support
- **Email:** privacy@cocoonapp.com
- **Website:** cocoonapp.com (coming soon)

### Download
- **App Store (iOS):** Coming soon
- **TestFlight (iOS):** Available for beta testing
- **App Store (macOS):** Coming soon
- **Direct Download (macOS):** Available at cocoonapp.com

### Social Media
- **Twitter:** @CocoonApp
- **Instagram:** @CocoonApp
- **LinkedIn:** Cocoon
- **GitHub:** github.com/cocoonapp (open-source components)

### Legal
- **Company:** Cocoon Technologies
- **Location:** Privacy-focused, user-first
- **Copyright:** © 2026 Cocoon. All rights reserved.
- **Tagline:** Made with care for your privacy.

---

## Technical Specifications Summary

### AI Models
- **Whisper:** distil-medium (394MB) - Speech-to-text
- **LLaMA:** 3B or 8B variant (2.3GB - 5.3GB) - Summarization & chat

### Frameworks
- **iOS:** SwiftUI, Core Data, CryptoKit, AVFoundation
- **macOS:** SwiftUI, AppKit, Core Data, CryptoKit, AVFoundation, EventKit
- **AI:** llama.cpp with Metal GPU acceleration
- **Sync:** CloudKit (end-to-end encrypted)

### Encryption
- **Algorithm:** AES-256
- **Framework:** CryptoKit
- **Storage:** Core Data with encrypted attributes
- **Sync:** CloudKit CKRecord.encryptedValues

### Platforms
- **iOS:** iPhone, iPad (iOS 16+)
- **macOS:** Apple Silicon & Intel (macOS 14+)

### Bundle Identifier
- **iOS:** com.cocoon.app
- **macOS:** com.cocoon.desk

### Version
- **Current:** 1.0 (February 2026)

---

**Last Updated:** February 16, 2026

*This document contains all technical, feature, privacy, and legal information about Cocoon for website content creation.*

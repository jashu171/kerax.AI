# Kerax.ai 🤖

An AI-powered meeting assistant that revolutionizes how you manage and interact with your meetings. Stay focused on what matters while Kerax.ai takes care of the notes with intelligent speaker-wise summaries and seamless cross-platform support.

🎙️ **Perfect for:** Corporate meetings, startup huddles, remote calls, and any scenario where you need accurate meeting documentation without the distraction of manual note-taking.

## 🌐 Live Demo

Visit [Kerax.ai](https://kerax-ai.vercel.app/) to experience the application in action.

## ✨ Features

🎙️ **Core Functionality:**
- **Speaker-wise Summaries** - Automatically generates meeting summaries with clear attribution of who said what
- **Dual Summary Modes** - Choose between compact and detailed summaries powered by Gemini LLM
- **Audio Processing** - Seamlessly processes meeting audio to extract key insights and action items

🌐 **Cross-Platform Support:**
- **Progressive Web App (PWA)** - Install and use offline on any device
- **Multi-OS Compatibility** - Works on Mac, Windows, and mobile devices
- **Offline Capability** - Download and run locally without internet dependency

💼 **Meeting Types Supported:**
- Corporate meetings and board discussions
- Startup huddles and team sync-ups
- Remote 1-on-1 calls and client meetings
- Conference calls and webinars

🎨 **User Experience:**
- **Modern UI/UX** - Built with React and styled with Tailwind CSS
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Fast Performance** - Powered by Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Frontend**: React with TypeScript
- **AI Integration**: Gemini LLM for intelligent summary generation
- **Audio Processing**: Advanced speech-to-text with speaker identification
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **PWA**: Vite PWA plugin with Workbox for offline functionality
- **Code Quality**: ESLint with TypeScript support

## 🎯 Use Cases

Kerax.ai is designed to enhance productivity across various meeting scenarios:

- **📋 Corporate Meetings**: Board meetings, quarterly reviews, and strategic planning sessions
- **🚀 Startup Environment**: Daily standups, sprint planning, and investor pitches
- **🤝 Client Interactions**: Sales calls, client onboarding, and consultation sessions
- **👥 Remote Collaboration**: Virtual team meetings, cross-functional sync-ups, and global conferences
- **📞 Meeting Sessions**: Performance reviews, mentoring calls, and personal check-ins

*Focus on the conversation, let Kerax.ai handle the documentation.*

## 🚀 Getting Started

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kerax-ai.git
cd kerax-ai
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
kerax-ai/
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   └── pwa-icons/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design System

The application uses a custom design system built on top of Tailwind CSS with:

- **Typography**: Inter for body text, Montserrat for headings
- **Color Palette**: HSL-based color system with CSS custom properties
- **Components**: Radix UI primitives for accessibility
- **Animations**: Custom keyframes and Framer Motion integration

## 📱 PWA Features

Kerax.ai is a fully-featured Progressive Web App with:

- **🔄 Offline Support** - Process meetings without internet connection
- **📲 Install Prompt** - Can be installed on Mac, Windows, and mobile devices
- **⚡ Service Worker** - Caches resources for instant loading
- **🎨 Responsive Icons** - Optimized for different screen sizes and platforms
- **💾 Local Processing** - Download and run entirely on your device for privacy

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
# Add your environment variables here
VITE_API_URL=your_api_url
```

### Customization

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font families in the Tailwind configuration
- **PWA Settings**: Adjust PWA configuration in `vite.config.ts`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: https://kerax-ai.vercel.app/


## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Run `npm run lint` before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

- **Issues**: [GitHub Issues](https://github.com/jashu171)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/kerax-ai/discussions)
- **Email**: jashwanthboddupally@gmail.com

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Powered by [Gemini LLM](https://deepmind.google/technologies/gemini/) for intelligent summaries
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Big thanks to the open-source community for making this possible

## 💬 Feedback & Demo

Would love to hear your thoughts and suggestions! If you'd like to try a demo or discuss potential use cases, feel free to connect:

- **Demo Request**: [Contact for Demo](https://drive.google.com/file/d/14YCAPL0w09GfhqfHr6PTEV0TZGBkdqEM/view?usp=sharing)
- **Feedback**: [Share Your Thoughts](https://github.com/jashu171)
- **Feature Requests**: [GitHub Issues](https://github.com/jashu171/kerax-ai)

---

<div align="center">
  <strong>Made by jashu with ❤️ for better meetings</strong>
</div>

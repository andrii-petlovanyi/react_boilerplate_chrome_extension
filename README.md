# React Chrome Extension Boilerplate

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/andrii-petlovanyi/react_boilerplate_chrome_extension)](https://github.com/andrii-petlovanyi/react_boilerplate_chrome_extension/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/andrii-petlovanyi/react_boilerplate_chrome_extension)](https://github.com/andrii-petlovanyi/react_boilerplate_chrome_extension/network)
[![GitHub issues](https://img.shields.io/github/issues/andrii-petlovanyi/react_boilerplate_chrome_extension)](https://github.com/andrii-petlovanyi/react_boilerplate_chrome_extension/issues)
[![GitHub license](https://img.shields.io/github/license/andrii-petlovanyi/react_boilerplate_chrome_extension)](https://github.com/andrii-petlovanyi/react_boilerplate_chrome_extension/blob/main/LICENSE)


Modern, feature-rich boilerplate for creating Chrome extensions using React, TypeScript, and Webpack 5. Get started with Chrome extension development in minutes!

[Report Bug](https://github.com/andrii-petlovanyi/react_boilerplate_chrome_extension/issues) · [Request Feature](https://github.com/andrii-petlovanyi/react_boilerplate_chrome_extension/issues)

</div>

## ⭐️ Why This Boilerplate?

- 🚀 **Ready to Use**: Set up a new Chrome extension project in minutes
- 🔄 **Hot Reload**: Instant feedback during development
- 📦 **Modern Stack**: React 19, TypeScript, Webpack 5
- 🔐 **Manifest V3**: Built with the latest Chrome extension manifest version
- 🎯 **Type Safety**: Full TypeScript support
- 🎨 **Asset Support**: Handle CSS, images, and other assets out of the box
- 🔍 **Developer Experience**: Source maps for better debugging
- ⚡ **Performance**: Optimized production builds
- 📚 **Well Documented**: Clear documentation and examples

## 🚀 Features

- ⚛️ React 19 with TypeScript
- 📦 Webpack 5 with optimizations
- 🔥 Hot Reload for fast development
- 🎨 CSS and assets support
- 🔍 Source Maps for debugging
- 📝 TypeScript for type safety
- 🔐 Manifest V3
- 🎯 Import aliases

## 📋 Prerequisites

- Node.js 18+ 
- npm 7+
- Chrome/Chromium browser

## 🛠️ Quick Start

1. Use this template or clone the repository:
```bash
# Using template (Recommended)
Click the "Use this template" button above

# Or clone the repository
git clone https://github.com/andrii-petlovanyi/react_boilerplate_chrome_extension.git
cd react_boilerplate_chrome_extension
```

2. Install dependencies:
```bash
npm install
```

3. Start development:
```bash
npm run dev
```

4. Load extension in Chrome:
- Open chrome://extensions/
- Enable "Developer mode"
- Click "Load unpacked"
- Select the `dist` folder

## 📦 What's Included?

- **React 18**: Latest version of React with all its features
- **TypeScript**: For type safety and better developer experience
- **Webpack 5**: Modern bundling with optimizations
- **Hot Reload**: See changes instantly
- **Manifest V3**: Latest Chrome extension manifest version
- **Asset Handling**: Support for CSS, images, and other assets
- **Source Maps**: For better debugging
- **Import Aliases**: Clean and maintainable imports
- **Production Optimization**: Minification and optimization for production

## 🔍 Available Scripts

- `npm run dev` - Start development mode
- `npm start` - Start production mode with watch
- `npm run build` - Build for production
- `npm run build:extension` - Build extension package
  - Creates `extension` directory with all necessary files
  - Updates manifest version
  - Generates ZIP archive for Chrome Web Store
- `npm run build:all` - Full build process
  - Builds React application
  - Packages extension
  - Creates final ZIP archive

The build process includes:
1. **Cleaning** - Removes previous build artifacts
2. **Building** - Compiles React application
3. **Packaging** - Copies extension files
4. **Archiving** - Creates ZIP package

Output files:
- `dist/` - Production build files
- `extension/` - Extension package
- `extension-vX.X.X.zip` - Final archive for Chrome Web Store

## 🎯 Import Aliases

The project is configured with the following aliases:
- `@components/*` -> `src/components/*`
- `@core/*` -> `src/core/*`
- `@assets/*` -> `src/assets/*`
- `@styles/*` -> `src/styles/*`
- `@utils/*` -> `src/utils/*`
- `@hooks/*` -> `src/hooks/*`
- `@types/*` -> `src/types/*`

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🌟 Show your support

Give a ⭐️ if this project helped you!

## 👥 Author

👤 **Andrii Petlovanyi**
- GitHub: [@andrii-petlovanyi](https://github.com/andrii-petlovanyi)
- LinkedIn: [@andrii-petlovanyi](https://linkedin.com/in/andriipetlovanyi)

## 📫 Contact

Have a question? Feel free to reach out!
- Email: andrey.petlovany@gmail.com
- LinkedIn: [@andrii-petlovanyi](https://linkedin.com/in/andriipetlovanyi)
- GitHub Issues: [Create an issue](https://github.com/andrii-petlovanyi/react_boilerplate_chrome_extension/issues)

## Project Structure

```
src/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # React components
├── core/          # Core extension functionality
├── hooks/         # React hooks
│   ├── useMessage.ts  # Hook for message handling
│   ├── useStorage.ts  # Hook for storage management
│   └── index.ts       # Hooks exports
├── services/      # API and data services
├── styles/        # Styles and CSS modules
├── types/         # TypeScript types and interfaces
├── utils/         # Utility functions
└── manifest.json  # Extension configuration
```

## Core Features

- **Type Safety**: Full TypeScript support with strict type checking
- **Message System**: Type-safe message passing between extension parts
- **Storage Management**: Safe and type-checked storage operations
- **Component Architecture**: Reusable React components with proper typing
- **Development Tools**: Hot reloading and source maps for development

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

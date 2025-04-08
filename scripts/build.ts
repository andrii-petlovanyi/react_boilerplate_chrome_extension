const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const BUILD_DIR = 'dist';
const EXTENSION_DIR = 'extension';

// Get version from package.json or environment variable
function getVersion(): string {
  // Try to get version from environment variable (GitHub Actions)
  if (process.env.EXTENSION_VERSION) {
    return process.env.EXTENSION_VERSION;
  }
  
  // Try to get version from package.json
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    if (packageJson.version) {
      return packageJson.version;
    }
  } catch (error) {
    console.warn('⚠️ Could not read version from package.json');
  }
  
  // Try to get version from manifest.json
  try {
    const manifest = JSON.parse(fs.readFileSync('src/manifest.json', 'utf-8'));
    if (manifest.version) {
      return manifest.version;
    }
  } catch (error) {
    console.warn('⚠️ Could not read version from manifest.json');
  }
  
  // Default version
  return '1.0.0';
}

const VERSION = getVersion();
console.log(`📦 Building extension version: ${VERSION}`);

// Clean directories
function cleanDirectories(): void {
  console.log('🧹 Cleaning directories...');
  if (fs.existsSync(BUILD_DIR)) {
    fs.rmSync(BUILD_DIR, { recursive: true });
  }
  if (fs.existsSync(EXTENSION_DIR)) {
    fs.rmSync(EXTENSION_DIR, { recursive: true });
  }
}

// Build React app
function buildReactApp(): void {
  console.log('🏗️ Building React app...');
  execSync('npm run build', { stdio: 'inherit' });
}

// Copy extension files
function copyExtensionFiles(): void {
  console.log('📦 Copying extension files...');
  
  // Create directory
  fs.mkdirSync(EXTENSION_DIR, { recursive: true });
  
  // Copy and update manifest.json
  const manifest = JSON.parse(fs.readFileSync('src/manifest.json', 'utf-8'));
  manifest.version = VERSION;
  fs.writeFileSync(
    path.join(EXTENSION_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  // Copy all files from dist directory except .map files
  const files: string[] = fs.readdirSync(BUILD_DIR);
  
  files.forEach((file: string) => {
    // Skip .map files
    if (file.endsWith('.map')) {
      return;
    }
    
    const source = path.join(BUILD_DIR, file);
    const destination = path.join(EXTENSION_DIR, file);
    
    if (fs.existsSync(source)) {
      if (fs.lstatSync(source).isDirectory()) {
        fs.cpSync(source, destination, { recursive: true });
      } else {
        fs.copyFileSync(source, destination);
      }
      console.log(`📄 Copied: ${file}`);
    }
  });
}

// Create archive
function createArchive(): void {
  console.log('📦 Creating archive...');
  
  const output = fs.createWriteStream(`extension-v${VERSION}.zip`);
  const archive = archiver('zip', { zlib: { level: 9 } });
  
  output.on('close', () => {
    console.log(`✅ Archive created: extension-v${VERSION}.zip (${archive.pointer()} bytes)`);
  });
  
  archive.on('error', (err: Error) => {
    throw err;
  });
  
  archive.pipe(output);
  archive.directory(EXTENSION_DIR, false);
  archive.finalize();
}

// Main function
async function main(): Promise<void> {
  try {
    cleanDirectories();
    buildReactApp();
    copyExtensionFiles();
    createArchive();
    console.log('🎉 Build completed successfully!');
  } catch (error) {
    console.error('❌ Build error:', error);
    process.exit(1);
  }
}

main(); 
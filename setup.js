#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Next.js Starter Template...\n');

// Update package.json with user's project name
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Get project name from current directory or user input
const projectName = process.argv[2] || path.basename(process.cwd());

console.log(`📦 Project name: ${projectName}`);

// Update package.json
packageJson.name = projectName;
packageJson.description = `A modern Next.js application built with ${projectName}`;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// Create .env.local from example
const envExamplePath = path.join(process.cwd(), 'env.example');
const envLocalPath = path.join(process.cwd(), '.env.local');

if (fs.existsSync(envExamplePath) && !fs.existsSync(envLocalPath)) {
  fs.copyFileSync(envExamplePath, envLocalPath);
  console.log('✅ Created .env.local from env.example');
}

// Install dependencies
console.log('\n📥 Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully');
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message);
  process.exit(1);
}

// Initialize git repository if not already initialized
if (!fs.existsSync(path.join(process.cwd(), '.git'))) {
  console.log('\n🔧 Initializing git repository...');
  try {
    execSync('git init', { stdio: 'inherit' });
    execSync('git add .', { stdio: 'inherit' });
    execSync(
      'git commit -m "feat: initial commit from Next.js starter template"',
      { stdio: 'inherit' }
    );
    console.log('✅ Git repository initialized');
  } catch (error) {
    console.warn('⚠️  Failed to initialize git repository:', error.message);
  }
}

// Setup Husky
console.log('\n🔧 Setting up Husky...');
try {
  execSync('npx husky install', { stdio: 'inherit' });
  console.log('✅ Husky setup complete');
} catch (error) {
  console.warn('⚠️  Failed to setup Husky:', error.message);
}

console.log('\n🎉 Setup complete!');
console.log('\nNext steps:');
console.log('1. Update the README.md with your project information');
console.log('2. Configure your environment variables in .env.local');
console.log('3. Start the development server: npm run dev');
console.log('4. Open http://localhost:3000 to see your app');
console.log('\nHappy coding! 🚀');

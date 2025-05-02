import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  logLevel: 'debug',
  build: {
    sourcemap: false,     // disables source maps to reduce I/O
    minify: false,        // skips minification to reduce CPU load
    cssCodeSplit: false   // keeps CSS in one file to reduce file operations
  }
})

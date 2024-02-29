/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import removeConsole from "vite-plugin-remove-console";
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/layout-bre/',
  build: {
    chunkSizeWarningLimit: 3000,
  },
  // esbuild: {
  //   drop: ['console', 'debugger'],
  // },
})

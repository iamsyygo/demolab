import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite';
import path from 'node:path';
import tjsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),tjsx(),unocss()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  }
})

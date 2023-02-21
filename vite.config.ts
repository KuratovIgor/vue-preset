import { fileURLToPath, URL } from 'node:url'
import StyleLintPlugin from 'vite-plugin-stylelint'
import EslintPlugin from 'vite-plugin-eslint'
import VitePluginFonts from 'vite-plugin-fonts'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

const styleLintConfig = StyleLintPlugin({
  files: ['src/**/*.{vue,scss}'],
  fix: true,
})

const eslintConfig = EslintPlugin({
  fix: true,
  cache: false,
})

const fontsConfig = VitePluginFonts({
  custom: {
    families: [
      {
        name: 'SourceSansPro',
        local: 'SourceSansPro',
        src: './src/styles/fonts/*.ttf',
      },
    ],
  },
})

const svgIconsConfig = createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
  symbolId: 'icon-[dir]-[name]',
  inject: 'body-first',
  customDomId: '__svg__icons__dom__',
})

export default defineConfig({
  plugins: [vue(), styleLintConfig, eslintConfig, fontsConfig, svgIconsConfig],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/resources" as *; @use "@/styles/vendor" as *;',
      },
    },
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import PurgeIcons from 'vite-plugin-purge-icons';
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from '@unocss/vite'
import presetWind from '@unocss/preset-wind'
const path = require('path');

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  },
  css: {
    modules: { // css模块化 文件以.module.[css|less|scss]结尾
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      hashPrefix: 'prefix',
    },
    preprocessorOptions: {
      scss: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8',
            '> 1%',
          ],
          grid: true,
        }),
        require('postcss-flexbugs-fixes'),
      ],
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    VueSetupExtend(),
    AutoImport({
      // dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
      imports: ['vue']
    }),
    PurgeIcons({ content: ['**/*.html', '**/*.ts', '**/*.js', '**/*.vue'] }),
    Unocss({
      presets: [
        presetWind(),
      ]
    }),
  ]
})
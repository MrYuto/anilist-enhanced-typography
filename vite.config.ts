import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'Anilist Enhanced Typography',
        version: '1.2.1',
        description:
          'Enhance your AniList reading experience with improved font sizes and styles.',
        license: 'MIT',
        match: ['https://anilist.co/*'],
        namespace: 'anilist-enhanced-typography',
      },
    }),
  ],
});

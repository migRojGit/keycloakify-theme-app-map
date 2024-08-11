import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { keycloakify } from 'keycloakify/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    keycloakify({
      accountThemeImplementation: 'none',
      keycloakVersionTargets: {
        "21-and-below": false,
        "22-and-above": "kapp-map-theme.jar",
      },
      themeVersion: "a1.0.0",
      keycloakifyBuildDirPath: './keycloakify-theme-dist/',
    })
  ],
})

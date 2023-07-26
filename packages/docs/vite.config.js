// Para o typescript entender que eu estou usando o vite e liberar algumas tipagens
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
})

/// <reference types="vite/client" />

declare const __BASE_PATH__: string;

interface ImportMetaEnv {
  /** Optional: where the contact form posts. Set in Vercel project settings. */
  readonly VITE_FORM_ENDPOINT?: string;
}

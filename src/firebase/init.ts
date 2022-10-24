import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'vue-kanbam.firebaseapp.com',
  projectId: 'vue-kanbam',
  storageBucket: 'vue-kanbam.appspot.com',
  messagingSenderId: '1072054473651',
  appId: '1:1072054473651:web:d1c314f13147e3a85231c6',
  measurementId: 'G-012P75CJD5'
}

export const app = initializeApp(firebaseConfig)

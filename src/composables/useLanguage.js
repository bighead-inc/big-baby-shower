import { ref, watch } from 'vue'

const language = ref(localStorage.getItem('lang') || 'en')

watch(language, (newLang) => {
  localStorage.setItem('lang', newLang)
})

export function useLanguage() {
  const setLanguage = (lang) => {
    language.value = lang
  }

  const toggleLanguage = () => {
    language.value = language.value === 'en' ? 'es' : 'en'
  }

  return { language, setLanguage, toggleLanguage }
}

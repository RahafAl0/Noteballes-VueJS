import { watch } from 'vue'

export function useWatchChar(toWatch: any, maxChars: number=100) {
  watch(toWatch, (newValue) => {
    if (newValue.length === maxChars) {
      alert(`You have reached the maximum number of characters for a note! Only ${maxChars} characters are allowed.`)
    }
  })

}
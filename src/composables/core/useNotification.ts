import { ref } from 'vue'

const alertState = {
  active: ref(false),
  message: ref('')
}
const loadingState = {
  active: ref(false),
  message: ref('')
}

export const useAlert = () => {
  const openAlert = (msg: string) => {
    alertState.message.value = msg
    alertState.active.value = true
    setTimeout(closeAlert, 5000)
  }
  const closeAlert = () => {
    alertState.message.value = ''
    alertState.active.value = false
  }

  return { ...alertState, openAlert, closeAlert }
}

export const useLoading = () => {
  const openLoading = (msg: string) => {
    loadingState.message.value = msg
    loadingState.active.value = true
  }
  const closeLoading = () => {
    loadingState.message.value = ''
    loadingState.active.value = false
  }
  return { ...loadingState, openLoading, closeLoading }
}

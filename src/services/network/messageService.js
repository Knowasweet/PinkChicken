export const delay = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const sendMessage = async (message) => {
  await delay(2000)
  return `Приветствую, чем могу помочь?`
}

export const orderMediaPlan = async () => {
  await delay(3000)
  return 'Медиаплан в процессе составления'
}

export const orderReport = async () => {
  await delay(4000)
  return 'Отчет формируется'
}

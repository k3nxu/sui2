import { greet, date } from "./date";
import { bindThemeButtons, loadTheme } from "./themer";
import { initKeyboardSearch } from "./search"

const t0 = new Date()

document.addEventListener('DOMContentLoaded', async () => {

  loadTheme()
  date()
  greet()
  bindThemeButtons()
  initKeyboardSearch()
  initCollapsible()
  setInterval(date, 1000 * 60)
  console.log('done DOMContentLoaded', `${new Date() - t0}ms`)
})

function initCollapsible() {
  document.querySelectorAll('h3.collapsible').forEach(h3 => {
    h3.addEventListener('click', () => {
      h3.classList.toggle('collapsed')
    })
  })
}

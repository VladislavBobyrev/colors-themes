// const themeGroup = document.querySelector('.group-theme')
const themeGroup = document.querySelector('.navigation')

const setTheme = (theme) =>
{
  const themeLink = document.querySelector('html[data-theme]')
  themeLink.classList.add('color-theme-in-transition')
  themeLink.dataset.theme = theme
   
  
  

  window.setTimeout(function() {
  themeLink.classList.remove('color-theme-in-transition')
  }, 300)
}

const getThemeLockalStorage = () =>
{
  if (!localStorage.getItem('theme')) return 
  if (localStorage.getItem('theme') == 'dark') return

  document.querySelector('li[data-theme="dark"]').classList.remove('active')
  document.querySelector('li[data-theme="light"]').classList.add('active')

  const theme = localStorage.getItem('theme')
  setTheme(theme)
}
getThemeLockalStorage()

const setThemeLockalStorage = (theme) =>
{
  localStorage.setItem('theme', theme)
}

const changeTheme = (e) =>
{
  const theme = e.target.dataset.theme
  
  console.log(theme)
  setTheme(theme)
  setThemeLockalStorage(theme)
}

themeGroup.addEventListener('click', changeTheme)


// ===================== NAV
const list = document.querySelectorAll('.list')

function activeLinc()
{ 
  list.forEach(item =>
    {
      item.classList.remove('active')
    })
  this.classList.add('active')
}

list.forEach(item =>
{
  item.addEventListener('click', activeLinc)
})

const toggle = () =>
{
  const modal = document.querySelector('.modal')
  modal.classList.toggle('active')
}
const card = document.querySelectorAll('.card')
card.forEach(item =>
{
  item.addEventListener('click', toggle)
})
const close = document.querySelector('.close')
close.addEventListener('click', toggle)
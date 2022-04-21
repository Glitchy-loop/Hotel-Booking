let current = 0
for (var i = 0; i < document.links.length; i++) {
  if (document.links[i].href === document.URL) {
    current = i
  }
}
document.links[current].className = 'current'

const startDate = document.querySelector('#checkIn')

startDate.addEventListener('change', e => {
  const startDateValue = startDate.value

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Dec']
  const day = new Date(startDateValue).getDate()
  const month = new Date(startDateValue).getMonth()

  let checkInMonth = document.querySelector('#checkInas .month')
  checkInMonth.innerHTML = months[month]

  let checkInDay = document.querySelector('#checkInas .day')
  checkInDay.innerHTML = day
})

const finishDate = document.querySelector('#checkOut')

finishDate.addEventListener('change', e => {
  const startDateValue = finishDate.value

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Dec']
  const day = new Date(startDateValue).getDate()
  const month = new Date(startDateValue).getMonth()

  let checkInMonth = document.querySelector('#checkOutas .month')
  checkInMonth.innerHTML = months[month]

  let checkInDay = document.querySelector('#checkOutas .day')
  checkInDay.innerHTML = day
})

const form = document.forms.book

form.addEventListener('submit', e => {
  e.preventDefault()

  const checkIn = e.target.elements.checkIn.value.trim()
  const checkOut = e.target.elements.checkOut.value.trim()
  const guests = e.target.elements.guests.value.trim()

  console.log(checkIn, checkOut, guests)

  location.replace(`rooms.html?guests=${guests}`)
})

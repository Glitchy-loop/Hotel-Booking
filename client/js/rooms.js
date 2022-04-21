let current = 0
for (var i = 0; i < document.links.length; i++) {
  if (document.links[i].href === document.URL) {
    current = i
  }
}
document.links[current].className = 'current'

const rooms = document.querySelector('.rooms')

const getRooms = async () => {
  const res = await fetch(
    `http://localhost:8080/rooms/${location.search.replace('?guests=', '')}`
  )
  const data = await res.json()

  console.log(data)

  data.forEach(room => {
    const div = document.createElement('div')
    div.className = 'room'

    const img = document.createElement('img')

    const title = document.createElement('div')
    title.className = 'title'
    title.textContent = room.hotel_name

    const guests = document.createElement('div')
    guests.className = 'guests'
    guests.textContent = room.room_capacity

    const desc = document.createElement('div')
    desc.className = 'description'
    desc.textContent = room.room_description

    rooms.append(div)

    div.append(img, title, guests, desc)
  })
}

getRooms()

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
    img.src =
      'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg'

    const title = document.createElement('div')
    title.className = 'title'
    title.textContent = room.hotel_name

    const guests = document.createElement('div')
    guests.className = 'guests'

    const guestsCount = document.createElement('div')
    guestsCount.className = 'guestsCount'
    guestsCount.textContent = `${room.room_capacity} Guests`

    const rating = document.createElement('div')
    rating.className = 'rating'
    rating.textContent = `${room.hotel_rating} /5`

    const desc = document.createElement('div')
    desc.className = 'description'
    desc.textContent = room.room_description

    const bookNowBtn = document.createElement('button')
    bookNowBtn.className = 'bookNow'
    bookNowBtn.textContent = `BOOK NOW FOR ${room.room_price}$`

    guests.append(guestsCount, rating)
    rooms.append(div)

    div.append(img, title, guests, desc, bookNowBtn)
  })
}

getRooms()



const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)

    // const socketUrl = 'http://localhost:3000'
    const socketUrl = 'https://whispering-oasis-15144.herokuapp.com/'
    const socketBuilder = new SocketBuilder({ socketUrl })

    const peerConfig = Object.values({
      id: undefined,
      config: {
        host: 'enigmatic-meadow-34756.herokuapp.com',
        secure: true,    // é o mesmo que usar https
        // port: 9000,
        // host: 'localhost',
        path: '/'
      }
    })
    const peerBuilder = new PeerBuilder({peerConfig})

    const view = new View()
    const media = new Media()
    const deps = {
      view,
      media, 
      room,
      socketBuilder,
      peerBuilder
    }

    Business.initialize(deps)
    // view.renderVideo({ userId: 'test01', url: 'https://media.giphy.com/media/a8a62Qd2GRhT9Hglcs/giphy.mp4'})
  // view.renderVideo({ userId: 'test01', isCurrentId:true, url: 'https://media.giphy.com/media/a8a62Qd2GRhT9Hglcs/giphy.mp4'})
  // view.renderVideo({ userId: 'test02', url: 'https://media.giphy.com/media/a8a62Qd2GRhT9Hglcs/giphy.mp4'})

}

window.onload = onload
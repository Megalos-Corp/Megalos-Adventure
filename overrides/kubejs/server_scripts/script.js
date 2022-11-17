console.info('Hello, World! (You will see this line every time server resources reload)')
  onEvent('player.chat', (event) => {
	if (event.message.trim().equalsIgnoreCase('!report')) {
	  event.server.scheduleInTicks(1, event.server, (callback) => {
		callback.data.tell(Text.gold('-> Report Bug <-').click('https://github.com/Megalos-Corp/Megalos-Adventure/issues')) 
	  })
	}
  })



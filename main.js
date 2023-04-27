window.onload = function() {

	setTimeout(function() {

		document.body.classList.add('loaded')

	
			Draggable.create('.prilouder', {
				bounds: 'body',
				inertia: true
			})
			
		})

	}


AOS.init();
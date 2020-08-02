document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector('.grid');
	let width = 10;
	let failAmount = 20;
	let squares = [];

	function createBoard(){
		const bombsArray = Array(failAmount).fill('Fail');
		const emptyArray = Array(width*width - failAmount).fill('win');
		const gameArray = emptyArray.concat(bombsArray);
		const shuffleArray = gameArray.sort(() => Math.random() -0.5);


		for(let i = 0; i< width*width; i++){
			const square = document.createElement('div');
			square.setAttribute('id', i);
			square.classList.add(shuffleArray[i]);
			grid.appendChild(square);
			squares.push(square);

			square.addEventListener('click', function(e){
				click(square);
			})
		}	
	}
	createBoard()


	function click(square){
		if (square.classList.contains('bomb')){
			alert('Game Over');
		}
	}
})

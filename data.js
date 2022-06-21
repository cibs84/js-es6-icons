// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
// 
// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.


// Creo l'array contenente i dati relativi alle icone
const allIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Seleziono il container delle icone
const iconsContainer = document.getElementById('icons-container')

// Per ogni elemento dell'array 'allIcons':
allIcons.forEach(element => {
	// Genero un codice colore esadecimale random da inserire nella key 'color' dell'oggetto
	element.color = generateColor();
});


// Stampo gli elementi dell'array 'allIcons' nel container html 'iconsContainer'
printArray(allIcons, iconsContainer);


// Prendo il selettore html del filtro categoria
const selectCategory = document.getElementById('category');
// e gli assegno il valore di default 'all'
selectCategory.value = 'all';


// Richiamo una funzione anonima tutte le volte che lo stato del selettore filtro categoria cambia stato
selectCategory.addEventListener('change', 
	function() {
		// Prendo il valore del selettore filtro categoria
		const currentFilterValue = this.value;

		// Ad ogni cambio filtro svuoto il contenitore 'iconsContainer' per evitare che le icone si vadano ad aggiungere a quelle generate con la precedente impostazione del filtro
		iconsContainer.innerHTML = '';

		// SE il filtro 'currentFilterValue' NON ha valore 'all' ( = non è impostato su All)
		if (currentFilterValue !== 'all') {
			// ALLORA inserisci nel nuovo array 'filteredAllIcons' gli elementi dell'array 'allIcons' FILTRATI in base al tipo 'element.type' indicato dal valore del filtro 'currentFilterValue'
			const filteredAllIcons = allIcons.filter(element => {
				return element.type === currentFilterValue; 
			});

			// Stampo gli elementi del nuovo array 'filteredAllIcons' nel contenitore html	
			printArray(filteredAllIcons, iconsContainer);
		// ALTRIMENTI stampo gli elementi NON FILTRATI dell'array 'allIcons' nel contenitore html 'iconsContainer'
		} else {
			printArray(allIcons, iconsContainer);
		}
	}
);


// ---------------
// FUNCTION
// ---------------


// Stampa un array di oggetti in un container html
// array -> array con gli elementi da stampare
// container -> elemento html in cui stampare gli elementi dell'array
function printArray(array, container) {
	// Per ogni elemento dell'Array:
	array.forEach((element) => {
		// Destrutturo l'oggetto estrapolandomi tutte le chiavi in apposite costanti
		const {name, prefix, type, family, color} = element;
		
		// Creo in una costante il template html da stampare 
		const templateCardIcon = `
		<li class="icon" style="color:${color}">
			<i class="${family} ${prefix}${name}"></i>
			<span>${name}</span>
		</li>
		`;
		
		// Stampo l'elemento dell'array concatenandolo nel container html
		container.innerHTML += templateCardIcon;
	})
}


// Genera un codice colore esadecimale casuale  - (Es. #5cfe49)
function generateColor() {
	// Creo la variabile dove salvare il codice esadecimale casuale, concatenandolo al carattere cancelletto già assegnato
	let color = '#';

	// Stringa da cui estrapolare 6 caratteri alfanumerici in modo casuale
	const symbols = '0123456789abcdef';

	// Per 6 volte, quanto il numero di caratteri alfanumerici da generare:
	for (let i = 0; i < 6; i++) {
		// Estraggo in modo casuale un numero di indice all'interno della lunghezza massima dall'array 'symbols' che corrisponde al numero di caratteri alfanumerici contenuti
		const randomIndex = getRndInteger(0, symbols.length-1)

		// Prendo un elemento casuale direttamente dall'array 'symbols', inserendo nell'indice il 'randomIndex'. L'elemento che estraggo è uno dei caratteri contenuto nella stringa alfanumerica presente nell'array 'symbols'
		const randomSymbol = symbols[randomIndex];

		// Concateno nella variabile 'color' uno dei 6 caratteri che andranno a creare il codice colore esadecimale 
		color += randomSymbol;
	}

	// L'output della funzione sarà la stringa del codice colore esadecimale contenuta nella variabile 'color'
	return color;
}


// Genera un numero casuale in un range tra min e max
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
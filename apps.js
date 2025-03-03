const words = [
    { polish: "sztuczny aromat", english: "artificial flavour", weight: 1 },
    { polish: "data ważności", english: "best-before day", weight: 1 },
    { polish: "naczynia stołowe", english: "crockery", weight: 1 },
    { polish: "sztućce", english: "cutlery", weight: 1 },
    { polish: "kuchnia zagraniczna", english: "cuisine", weight: 1 },
    { polish: "żywność genetycznie zmotyfikowana", english: "GM food", weight: 1 },
    { polish: "przekąsić coś", english: "have a snack", weight: 1 },
    { polish: "porcja", english: "helping", weight: 1 },
    { polish: "na pusty żołądek", english: "on an empty stomach", weight: 1 },
    { polish: "żywność organiczna", english: "organic food", weight: 1 },
    { polish: "po dacie ważności", english: "past the sell-by-date", weight: 1 },
    { polish: "ugasić pragnienie", english: "quench your thirst", weight: 1 },
    { polish: "gotowe jedzenie", english: ["ready-made food", "convenience food"], weight: 1 },
    { polish: "przystawka", english: "side dish", weight: 1 },
    { polish: "przyprawy", english: "spices", weight: 1 },
    { polish: "pełnowartościowy posiłek", english: "square meal", weight: 1 },
    { polish: "szparagi", english: "asparagus", weight: 1 },
    { polish: "bakłażan", english: "aubergine", weight: 1 },
    { polish: "czarna porzeczka", english: "blackcurrant", weight: 1 },
    { polish: "nadziewany", english: "stuffed", weight: 1 },
    { polish: "mandarynka", english: "tangerine", weight: 1 },
    { polish: "dorsz", english: "cod", weight: 1 },
    { polish: "węgorz", english: "eel", weight: 1 },
    { polish: "śledź", english: "herring", weight: 1 },
    { polish: "jagnięcina", english: "lamb", weight: 1 },
    { polish: "wieprzowina", english: "pork", weight: 1 },
    { polish: "wędzony łosoś", english: "smoked salmon", weight: 1 },
    { polish: "pstrąg", english: "trout", weight: 1 },
    { polish: "indyk", english: "turkey", weight: 1 },
    { polish: "cielęcina", english: "veal", weight: 1 },
    { polish: "śmietana", english: "cream", weight: 1 },
    { polish: "żółtko", english: "egg yolk", weight: 1 },
    { polish: "białko", english: ["egg white", "protein"], weight: 1 },
    { polish: "kawa bezkofeinowa", english: ["decaf coffe", "decaffeinated coffe"], weight: 1},
    { polish: "domowej roboty", english: "home-made", weight: 1 },
    { polish: "chude mięso", english: "lean meat", weight: 1 },
    { polish: "tłuste mięso", english: "fatty meat", weight: 1 },
    { polish: "apetyczny", english: "mouth-watering", weight: 1 },
    { polish: "marynowany", english: "pickled", weight: 1 },
    { polish: "surowe mięso", english: "raw meat", weight: 1 },
    { polish: "wytrawny", english: "savoury", weight: 1 },
    { polish: "gazowany", english: "sparkling", weight: 1 },
    { polish: "niegazowany", english: "still", weight: 1 },
    { polish: "pikatny", english: "spicy", weight: 1 },
    { polish: "bez cukru", english: "sugar-free", weight: 1 },
    { polish: "znakomity", english: "superb", weight: 1 },
    { polish: "smaczny", english: "tasty", weight: 1 },
    { polish: "kuszący", english: "tempting", weight: 1 },
    { polish: "delikatne mięso", english: "tender meat", weight: 1 },
    { polish: "twarde mięso", english: "tough meat", weight: 1 },
    { polish: "gęsty sos", english: "thick sauce", weight: 1 },
    { polish: "chleb pełnoziarnisty", english: "wholemeal bread", weight: 1 },
    { polish: "czerstwy chleb", english: "stale bread", weight: 1 },
    { polish: "wapń", english: "calcium", weight: 1 },
    { polish: "węglowodany", english: "carbohydrates", weight: 1 },
    { polish: "błonnik", english: "fibre", weight: 1 },
    { polish: "skrobia", english: "starch", weight: 1 },
    { polish: "tłuszcze nasycone", english: "saturated fats", weight: 1 },
    { polish: "tłuszcze nienasycone", english: "unsaturated fats", weight: 1 },
    { polish: "dodać", english: "to add", weight: 1 },
    { polish: "ubijać jajka", english: "beat eggs", weight: 1 },
    { polish: "gotować", english: "boil", weight: 1 },
    { polish: "miska", english: "bowl", weight: 1 },
    { polish: "podkładka", english: "coaster", weight: 1 },
    { polish: "odcedzać(makaron)", english: "drain (pasta)", weight: 1 },
    { polish: "smażyć", english: "fry", weight: 1 },
    { polish: "trzeć na tarce", english: "grate", weight: 1 },
    { polish: "składnik", english: "ingredient", weight: 1 },
    { polish: "mieszać", english: "mix", weight: 1 },
    { polish: "kroić na plasterki", english: "slice", weight: 1 },
    { polish: "mieszać (np. łyżką)", english: "stir", weight: 1 },
    { polish: "puszka", english: ["can", "tin"], weight: 1 },
    { polish: "pojemnik", english: "container", weight: 1 },
    { polish: "łyżka stołowa", english: "tablespoon", weight: 1 },
    { polish: "szczypta", english: "pinch of", weight: 1 },
    { polish: "tubka", english: "tube", weight: 1 },
    { polish: "niezdrowe jedzenie", english: "junk food", weight: 1 },
    { polish: "tłuszcze", english: "fats", weight: 1 },
    { polish: "produkty zbożowe", english: "cereal products", weight: 1 },
    { polish: "nabiał", english: "dairy", weight: 1 },
    { polish: "przestrzegać rozsądnej diety", english: "to follow a sensible diet", weight: 1 },
    { polish: "lekka dieta", english: "light diet", weight: 1 },
    { polish: "zdrowy tryb życia", english: "healthy lifestyle", weight: 1 },
    { polish: "ograniczać tłuste jedzenie", english: "to cut down fatty food", weight: 1 },
    { polish: "polecać", english: "to recommend", weight: 1 },
    { polish: "paragon", english: "receipt", weight: 1 },
    { polish: "danie główne", english: "main course", weight: 1 },
    { polish: "silna wola", english: "will power", weight: 1 },
    { polish: "wysportowany", english: "athletic", weight: 1 },
    { polish: "unikać stresu", english: "avoid stress", weight: 1 },
    { polish: "być fanatykiem fitnessu", english: "be a fitness fanatic", weight: 1 },
    { polish: "wysypiać się", english: "get enough sleep", weight: 1 },
    { polish: "rzucić palenie", english: "give up smoking", weight: 1 },
    { polish: "biegać", english: "go jogging", weight: 1 },
    { polish: "schudnąć", english: "lose weight", weight: 1 },
    { polish: "jedzenie niskokaloryczne", english: "low-calorie food", weight: 1 },
    { polish: "jedzenie niskotłusczowe", english: "low-fat food", weight: 1 },
    { polish: "w słabej formie", english: "out of shape", weight: 1 },
    { polish: "przybrać na wadze", english: "put on weight", weight: 1 },
    { polish: "mieć nadwagę", english: "be overweight", weight: 1 },
    { polish: "redukować stress", english: "reduce stress", weight: 1 },
    { polish: "siedzący tryb życia", english: "sedentary lifestyle", weight: 1 },
    { polish: "leniuch", english: "slob", weight: 1 },
    { polish: "utrzymywać formę", english: "stay in shape", weight: 1 },
    { polish: "zacząć uprawiać sport", english: "take up sport", weight: 1 },
    { polish: "ćwiczyć na siłowni", english: "work out in the gym", weight: 1 },
    { polish: "być w świetnej formie", english: "be as fit as a fiddle", weight: 1 },
    { polish: "witaminy", english: "vitamins", weight: 1 },
    { polish: "kotlet", english: "chop", weight: 1 },
    { polish: "kaloria", english: "calorie", weight: 1 },
    { polish: "jeść wolno/szybko", english: "eat slowly/quickly", weight: 1 },
    { polish: "minerał", english: "mineral", weight: 1 },
    { polish: "dieta wegańska", english: "vegan diet", weight: 1 },
    { polish: "dieta wegetariańska", english: "vegetarian diet", weight: 1 },
    { polish: "leniuch (osoba spędzająca dużo czasu przy TV)", english: "couch potato", weight: 1 },
    { polish: "regularnie ćwiczyć", english: "do regular exercise", weight: 1 },
    { polish: "jedzenie typu fast food", english: "fast food", weight: 1 },
    { polish: "w formie", english: "fit", weight: 1 },
    { polish: "utrzymywać formę", english: "keep fit", weight: 1 },
    { polish: "wyglądać na wysportowanego", english: "look fit", weight: 1 }
];

let remainingWords = [...words]; // Kopia tablicy słówek
let selectedWord = {};  // Zmienna do przechowywania obecnie wybranego słowa

document.getElementById("checkAnswerButton").addEventListener("click", checkAnswer);
document.getElementById("nextWordButton").addEventListener("click", loadNextWord);
document.getElementById("toggleListButton").addEventListener("click", toggleWordList);
document.getElementById("showAnswerButton").addEventListener("click", showCorrectAnswer);

document.getElementById("answer").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (document.getElementById("nextWordButton").style.display === "inline-block") {
            loadNextWord();
        } else {
            checkAnswer();
        }
    }
});

// Funkcja ładująca słowo na podstawie jego wagi
function loadWord() {
    if (remainingWords.length === 0) {
        // Jeśli wszystkie słowa zostały wybrane, resetujemy tablicę
        remainingWords = [...words];
    }

    // Obliczamy całkowitą wagę
    const totalWeight = remainingWords.reduce((acc, word) => acc + word.weight, 0);
    
    // Losowanie słowa na podstawie wagi
    let randomIndex = Math.floor(Math.random() * totalWeight);
    
    // Przesuwamy "wskaźnik" wagi, aby znaleźć odpowiednie słowo
    let accumulatedWeight = 0;
    for (let i = 0; i < remainingWords.length; i++) {
        accumulatedWeight += remainingWords[i].weight;
        if (randomIndex < accumulatedWeight) {
            selectedWord = remainingWords[i];
            break;
        }
    }

    document.getElementById("polishWord").innerText = selectedWord.polish;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("nextWordButton").style.display = "none";
    document.getElementById("showAnswerButton").style.display = "none";

    // Usuwamy słowo z listy dostępnych słów
    remainingWords = remainingWords.filter(word => word !== selectedWord);
}

// Funkcja sprawdzająca odpowiedź
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswers = Array.isArray(selectedWord.english)
    ? selectedWord.english.map(answer => answer.toLowerCase())
    : [selectedWord.english.toLowerCase()];

if (correctAnswers.includes(userAnswer)) {
    document.getElementById("result").innerText = "Good job! Correct answer.";
    document.getElementById("nextWordButton").style.display = "inline-block";
    selectedWord.weight = Math.max(1, selectedWord.weight - 1);  // Zmniejszamy wagę przy poprawnej odpowiedzi
} else {
    document.getElementById("result").innerText = "Try again.";
    document.getElementById("answer").focus();
    document.getElementById("showAnswerButton").style.display = "inline-block";  // Pokazujemy przycisk "Pokaż odpowiedź"
    selectedWord.weight += 1;  // Zwiększamy wagę przy błędnej odpowiedzi
}

}    

// Funkcja ładująca następne słowo
function loadNextWord() {
    loadWord();
}

// Funkcja toggle (pokazanie/ukrycie listy słówek)
function toggleWordList() {
    const wordList = document.getElementById("wordList");
    const toggleButton = document.getElementById("toggleListButton");

    // Sprawdzenie, czy lista jest widoczna, jeśli tak to ją ukryj
    if (wordList.style.display === "none") {
        wordList.style.display = "block";
        toggleButton.innerText = "Hide the list of words.";
    } else {
        wordList.style.display = "none";
        toggleButton.innerText = "Show the list of words.";
    }
}

// Funkcja, która dodaje słówka do tabeli
function populateWordList() {
    const tableBody = document.querySelector("#wordTable tbody");
    tableBody.innerHTML = "";  // Czyścimy tabelę przed dodaniem nowych danych

    words.forEach(word => {
        const row = document.createElement("tr");

        const polishCell = document.createElement("td");
        polishCell.textContent = word.polish;
        row.appendChild(polishCell);

        const englishCell = document.createElement("td");
        englishCell.textContent = word.english;
        row.appendChild(englishCell);

        tableBody.appendChild(row);
    });
}

function showCorrectAnswer() {
    const correctAnswers = Array.isArray(selectedWord.english)
        ? selectedWord.english.join(" lub ")
        : selectedWord.english;
    document.getElementById("result").innerText = `The correct answer is: ${correctAnswers}`;
    document.getElementById("showAnswerButton").style.display = "none";
    document.getElementById("nextWordButton").style.display = "inline-block";
}


// Inicjalizacja
populateWordList();
loadWord();

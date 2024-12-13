// Wczytaj słowa z Local Storage lub użyj domyślnych
let words = JSON.parse(localStorage.getItem("words")) || [
    { polish: "dom", spanish: "casa" },
    { polish: "pies", spanish: "perro" },
    { polish: "kot", spanish: "gato" },
    { polish: "samochód", spanish: "coche" },
    { polish: "stół", spanish: "mesa" },
    { polish: "krzesło", spanish: "silla" },
    { polish: "drzewo", spanish: "árbol" },
    { polish: "okno", spanish: "ventana" }
];

let currentWordIndex = 0;
let correctAnswers = 0;
let totalQuestions = 0;

document.getElementById("checkAnswerButton").addEventListener("click", checkAnswer);
document.getElementById("nextWordButton").addEventListener("click", loadNextWord);

// Obsługa Enter w polu odpowiedzi
document.getElementById("answer").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (document.getElementById("nextWordButton").style.display === "inline-block") {
            loadNextWord();
        } else {
            checkAnswer();
        }
    }
});

function loadWord() {
    document.getElementById("polishWord").innerText = words[currentWordIndex].polish;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("nextWordButton").style.display = "none";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = words[currentWordIndex].spanish.toLowerCase().split(" || "); // Obsługa wielu odpowiedzi

    totalQuestions++;

    if (correctAnswer.includes(userAnswer)) {
        correctAnswers++;
        document.getElementById("result").innerText = `Brawo! Poprawna odpowiedź. Twoje wyniki: ${correctAnswers}/${totalQuestions}`;
        document.getElementById("nextWordButton").style.display = "inline-block";
    } else {
        document.getElementById("result").innerText = "Niepoprawna odpowiedź. Spróbuj ponownie.";
        document.getElementById("answer").focus();
    }
}

function loadNextWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    loadWord();
}

loadWord();

document.getElementById("addWordButton").addEventListener("click", function () {
    const newPolishWord = document.getElementById("newPolishWord").value.trim();
    const newSpanishWord = document.getElementById("newSpanishWord").value.trim();

    if (newPolishWord && newSpanishWord) {
        words.push({ polish: newPolishWord, spanish: newSpanishWord });
        localStorage.setItem("words", JSON.stringify(words)); // Zapis do Local Storage
        alert(`Dodano nowe słowo: "${newPolishWord}" - "${newSpanishWord}"`);
        document.getElementById("newPolishWord").value = "";
        document.getElementById("newSpanishWord").value = "";
    } else {
        alert("Wypełnij oba pola, aby dodać nowe słowo.");
    }
});

// Statystyki wyświetlane w czasie rzeczywistym
setInterval(() => {
    document.getElementById("result").innerText = `Twoje wyniki: ${correctAnswers}/${totalQuestions}`;
}, 1000);

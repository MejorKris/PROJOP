## Cel aplikacji
Aplikacja ma na celu ułatwienie nauki słówek angielskich poprzez interaktywny quiz. Główne cele to:
- Nauka słownictwa: Użytkownik uczy się tłumaczeń słów z języka polskiego na angielski.
- Utrwalanie wiedzy: Mechanizm wag `(weight)` pozwala na częstsze wyświetlanie słówek, z którymi użytkownik ma problem.
- Szybkie sprawdzanie postępów: Użytkownik może na bieżąco sprawdzać swoje odpowiedzi i poprawiać błędy.
- Dostęp do listy słówek: Użytkownik ma możliwość przejrzenia pełnej listy słówek, co ułatwia powtarzanie i utrwalanie wiedzy.

## Zasada działania
1. Inicjalizacja: 
- Po uruchomieniu aplikacji wyświetlane jest pierwsze słowo w języku polskim.
- Lista słówek jest przechowywana w tablicy `words` w pliku `apps.js`.
2. Losowanie słówek:
- Słowa są losowane na podstawie ich wagi `(weight)`. Słowa, które użytkownik zna gorzej, są wyświetlane częściej.
3. Sprawdzanie odpowiedzi:
- Użytkownik wpisuje tłumaczenie słowa w języku angielskim w polu tekstowym.
- Aplikacja porównuje odpowiedź użytkownika z poprawnym tłumaczeniem:
   - Jeśli odpowiedź jest poprawna, wyświetla komunikat "Good job! Correct answer." i pokazuje przycisk "Next word".
   - Jeśli odpowiedź jest błędna, wyświetla komunikat "Try again." i pokazuje przycisk "Show the answer".
4. Przechodzenie do kolejnych słówek:
- Po udzieleniu poprawnej odpowiedzi użytkownik może przejść do kolejnego słowa, klikając przycisk "Next word".
5. Pokazywanie listy słówek:
- Użytkownik może w każdej chwili wyświetlić pełną listę słówek, klikając przycisk "Show the list of words".
6. Obsługa klawisza Enter:
- Aplikacja obsługuje klawisz Enter, co pozwala na szybsze sprawdzanie odpowiedzi lub przechodzenie do kolejnego słowa.

## Mechanizm interakcji z użytkownikiem
1. Interfejs użytkownika:
- Prosty i czytelny interfejs z przyciskami, polami tekstowymi i komunikatami.
- Responsywny design, który działa na różnych urządzeniach (komputery, tablety, smartfony).
2. Komunikaty:
- Informacje zwrotne po udzieleniu odpowiedzi (np. "Good job! Correct answer." lub "Try again.").
- Możliwość wyświetlenia poprawnej odpowiedzi po błędzie
3. Przyciski:
- `Check the answer:` Sprawdza odpowiedź użytkownika.
- `Next word:` Przechodzi do kolejnego słowa.
- `Show the answer:` Pokazuje poprawną odpowiedź po błędzie.
- `Show the list of words:` Wyświetla pełną listę słówek.
4. Obsługa klawiatury:
- Użytkownik może używać klawisza Enter do sprawdzania odpowiedzi lub przechodzenia do kolejnego słowa, co przyspiesza interakcję.
5. Personalizacja nauki:
- Mechanizm wag `(weight)` dostosowuje częstotliwość wyświetlania słówek do poziomu znajomości użytkownika.

## Wersja
**Wersja 0.1 - Wersja początkowa**

- Podstawowa implementacja logowania z wykorzystaniem sesji PHP.
- Zabezpieczony dostęp do strony głównej.
- Funkcjonalność wylogowania.

**Wersja 0.2 - Optymalizacja kodu z zastosowaniem zasad Clean Code**
- Zastosowano zasadę `DRY (Don't Repeat Yourself)`, aby wyeliminować powielanie kodu dotyczącego sesji i logowania.
- Zastosowano zasadę `SRP (Single Responsibility Principle)`, przenosząc logikę sesji do oddzielnego pliku (sesja.php).
- Zmieniono nazwy zmiennych i funkcji, stosując zasadę `Meaningful Names`, aby kod był bardziej czytelny.
- Uproszczono niektóre struktury kodu, stosując zasadę `KISS (Keep It Simple, Stupid)`, co poprawiło czytelność i utrzymanie.
- Usunięto nieużywany kod zgodnie z zasadą `YAGNI (You Ain't Gonna Need It)`.

 
# Historia Wersji

## Wersja 0.1 - Wersja początkowa
- Stworzono podstawowy system logowania z wbudowanymi danymi logowania (`nazwa` jako 'marek' i `haslo` jako 'zs10').
- Użytkownicy mogą logować się przez prosty formularz (`loguj.php`).
- Po zalogowaniu użytkownicy są przekierowywani na stronę `strona.php`.
- Zaimplementowano podstawową obsługę sesji.
- Funkcja wylogowania (`wyloguj.php`) niszczy sesję.

## Wersja 0.2 - Refaktoryzacja z użyciem zasad Clean Code
- Zastosowano zasady Clean Code, aby ulepszyć strukturę aplikacji.
- **DRY** (Don't Repeat Yourself): Wyeliminowano powtarzalne fragmenty kodu związane z obsługą sesji i logowaniem, przenosząc je do osobnych funkcji w nowym pliku (`sesja.php`).
- **SRP** (Single Responsibility Principle): Każdy plik oraz funkcja mają teraz jednoznacznie przypisaną odpowiedzialność. Logowanie i sprawdzanie danych użytkownika zostało --wydzielone do funkcji, a zarządzanie sesją oddzielono do pliku (`sesja.php`).
- **Meaningful Names:** Zmieniono nazwy zmiennych i funkcji na bardziej opisowe, np. zmiana `$_SESSION['log']` na `$_SESSION['username']` oraz funkcji `sprawdzDaneLogowania()`.
- **KISS** (Keep It Simple, Stupid): Uproszczono logikę formularza logowania i wylogowywania. Dodano prosty sposób sprawdzania, czy formularz został wysłany `($_SERVER['REQUEST_METHOD'] === 'POST')`.
- **YAGNI** (You Ain't Gonna Need It): Usunięto niepotrzebne fragmenty kodu, które nie były używane ani potrzebne, aby poprawić czytelność i wydajność.
- Stworzono nowy plik (`sesja.php`) do obsługi funkcji sesji i zarządzania logowaniem.


## Wersja 0.3 Beta - Stworzenie nowego projektu
- Zamiana projektu logowania się na tłumaczenie słówek w języku hiszpańskim


## Wersja 0.4 Beta - Rozszerzenie funkcjonalności i optymalizacja

**Dynamiczne przechowywanie słów w Local Storage:**
- Użytkownicy mogą teraz zapisywać dodane słowa w przeglądarce, dzięki czemu będą one dostępne po ponownym uruchomieniu aplikacji.

**Dodanie systemu statystyk:**
- Licznik poprawnych odpowiedzi i ogólnej liczby pytań.
- Wyświetlanie wyników użytkownika w czasie rzeczywistym.

**Walidacja i podpowiedzi dla użytkownika:**
- W przypadku błędnych odpowiedzi dodano możliwość wyświetlenia poprawnej odpowiedzi po trzech próbach.

**Obsługa wielu poprawnych odpowiedzi:**
- Dostosowanie funkcji `checkAnswer()` do uwzględnienia różnych poprawnych wariantów tłumaczenia.

## Wersja 0.5 Beta - Komentowanie kodu
- Skomentowanie kodu

## Wersja 0.6 Beta - Testowanie aplikacji
- `Wybrana metoda:` Testowanie systemowe (System Testing).
- Dlaczego?
  - Testowanie systemowe sprawdza, czy cała aplikacja działa poprawnie jako zintegrowany system.
  - Obejmuje wszystkie główne funkcje aplikacji, takie jak wyświetlanie słówek, sprawdzanie odpowiedzi, przechodzenie do następnego słowa, pokazywanie listy słówek i obsługa klawisza Enter.
2. Zaplanowanie testu aplikacji
- 1. **Wyświetlanie słówek:**
   - Sprawdzenie, czy po uruchomieniu aplikacji wyświetla się pierwsze słowo w języku polskim.
- 2. **Sprawdzanie poprawnej odpowiedzi:**
   - Wprowadzenie poprawnej odpowiedzi i sprawdzenie, czy aplikacja wyświetla komunikat "Good job! Correct answer." oraz pokazuje przycisk "Next word".
- 3. **Sprawdzanie błędnej odpowiedzi:**
   - Wprowadzenie błędnej odpowiedzi i sprawdzenie, czy aplikacja wyświetla komunikat "Try again." oraz pokazuje przycisk "Show the answer".
- 4. **Przechodzenie do następnego słowa:**
   - Kliknięcie przycisk "Next word" i sprawdzenie, czy wyświetla się nowe słowo.
- 5. **Pokazywanie listy słówek:**
   - Kliknięcie przycisk "Show the list of words" i sprawdzenie, czy lista słówek jest wyświetlana w formie tabeli.
- 6. **Obsługa klawisza Enter:**
   - Sprawdzenie, czy naciśnięcie klawisza Enter działa jak kliknięcie przycisku "Check the answer" lub "Next word".
3. **Kryteria akceptacji:**
- Wszystkie funkcje muszą działać zgodnie z oczekiwaniami.
- Komunikaty błędów i sukcesów muszą być wyświetlane poprawnie.
- Interakcje z użytkownikiem (klikanie przycisków, wpisywanie odpowiedzi) muszą być płynne i bezbłędne.
4. **Ukończyć test:**
- Jeśli wszystkie testy zakończyły się sukcesem, aplikacja jest gotowa do dalszego rozwoju lub wdrożenia.
- Jeśli wystąpiły błędy, należy je zgłosić i poprawić.

## Wersja 0.8 Beta - Debugowanie aplikacji

**Cel wersji:** Wersja 0.8 Beta skupia się na identyfikacji i eliminacji błędów w działaniu aplikacji. Celem jest zwiększenie stabilności, poprawności działania oraz wydajności aplikacji przed ewentualnym wydaniem wersji finalnej.

**Wprowadzone zmiany i usprawnienia:**
**Naprawa błędów logicznych:**
- Zoptymalizowano działanie funkcji losującej słowa, by nie powtarzała zbyt często tych samych słów z niską wagą.
- Poprawiono błąd, w którym po kliknięciu „Next word” nie resetowało się pole tekstowe.
- Upewniono się, że po kliknięciu „Show the answer” użytkownik nie może ponownie zatwierdzić odpowiedzi.

**Poprawki interfejsu:**
- Ulepszono wyświetlanie komunikatów, by nie nachodziły na siebie w przypadku szybkich odpowiedzi.
- Zwiększono czytelność przycisków i pól tekstowych na urządzeniach mobilnych.
- Stabilność działania:
- Zabezpieczono aplikację przed zawieszeniem się przy pustej liście słówek.
- Dodano warunki sprawdzające poprawność danych pobieranych z Local Storage.

**Usprawnienie kodu:**
- Wprowadzono dodatkowe komentarze i refaktoryzację w miejscach, gdzie logika była nieczytelna.
- Wykryto i usunięto zbędne zmienne globalne.

**Testy regresji:**
- Przeprowadzono testy regresji, aby upewnić się, że nowe zmiany nie spowodowały błędów w działających wcześniej funkcjach (m.in. losowanie słów, przyciski, lista słówek).

## Wersja 1.0 Beta - Finalna wersja aplikacji

**Wszystkie główne funkcje aplikacji zostały zaimplementowane:**
- Dodano licencje oprogramowania.
- Możliwość sprawdzania odpowiedzi i przechodzenia do następnego słowa.
- Zintegrowany mechanizm wag dostosowujący częstotliwość wyświetlania słówek.
- Wyświetlanie pełnej listy słówek.
- Obsługa klawisza Enter do szybszej nawigacji.
- Responsywny interfejs na urządzeniach mobilnych.
- Aplikacja jest gotowa do użycia.

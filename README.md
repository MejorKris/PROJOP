## Cel aplikacji
Aplikacja służy do zarządzania logowaniem użytkownika, oferując podstawowy mechanizm autoryzacji. Użytkownicy mogą zalogować się przy użyciu nazwy użytkownika `marek` i hasła `zs10`, a po zalogowaniu mają dostęp do chronionej strony. Aplikacja pozwala także na bezpieczne wylogowanie się, co kończy sesję użytkownika.

## Zasada działania
Aplikacja działa na bazie sesji PHP. Kiedy użytkownik poprawnie się zaloguje, sesja zostaje utworzona i użytkownik zostaje przekierowany na stronę główną. Na stronie głównej może przeglądać treści dostępne tylko dla zalogowanych użytkowników. W momencie wylogowania sesja zostaje zniszczona, co skutkuje przerwaniem dostępu do chronionych zasobów.

## Mechanizm interakcji z użytkownikiem
1. Użytkownik wprowadza swoją nazwę użytkownika `marek` i hasło `zs10` na stronie logowania.
2. Po przesłaniu formularza aplikacja sprawdza poprawność danych:
   - Jeśli dane są poprawne, użytkownik zostaje zalogowany i przekierowany na stronę główną.
   - Jeśli dane są niepoprawne, wyświetla się komunikat o błędnych danych logowania.
3. Na stronie głównej użytkownik widzi powitanie i ma możliwość wylogowania się.
4. Wylogowanie powoduje usunięcie sesji użytkownika i przekierowanie na stronę logowania.

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

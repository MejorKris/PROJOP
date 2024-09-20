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

 
# Historia Wersji

## Wersja 0.1 - Wersja początkowa
- Stworzono podstawowy system logowania z wbudowanymi danymi logowania (`nazwa` jako 'marek' i `haslo` jako 'zs10').
- Użytkownicy mogą logować się przez prosty formularz (`loguj.php`).
- Po zalogowaniu użytkownicy są przekierowywani na stronę `strona.php`.
- Zaimplementowano podstawową obsługę sesji.
- Funkcja wylogowania (`wyloguj.php`) niszczy sesję.


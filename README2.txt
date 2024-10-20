Dzień dobry, przesyłam Panu etap2. Pozdrawiam

Link do repozytorium: https://github.com/MejorKris/PROJOP

Zmiany:

1. Zastosowano zasadę DRY (Don't Repeat Yourself), aby wyeliminować powielanie kodu dotyczącego sesji i logowania.

Wprowadzono funkcję jestZalogowany() w pliku sesja.php, aby sprawdzać, czy użytkownik jest zalogowany, 
co eliminowało duplikowanie tego kodu w plikach loguj.php, strona.php i wyloguj.php.

2. Zastosowano zasadę SRP (Single Responsibility Principle), przenosząc logikę sesji do oddzielnego pliku (sesja.php).

Wydzielono funkcje odpowiedzialne za sprawdzanie logowania i zarządzanie sesjami do jednego pliku, co ułatwiło zarządzanie kodem.

3. Zmieniono nazwy zmiennych i funkcji, stosując zasadę Meaningful Names, aby kod był bardziej czytelny.

Na przykład, zmieniono $_SESSION['log'] na $_SESSION['username'], co lepiej oddaje zawartość tej zmiennej.

4. Uproszczono niektóre struktury kodu, stosując zasadę KISS (Keep It Simple, Stupid), co poprawiło czytelność i utrzymanie.

Zredukowano złożoność warunków w plikach loguj.php i wyloguj.php, co sprawiło, że kod stał się bardziej przejrzysty.

5. Usunięto nieużywany kod zgodnie z zasadą YAGNI (You Ain't Gonna Need It).

Usunięto komentarze oraz zbędne linie kodu, które nie były potrzebne, co pozwoliło na lepszą organizację i czytelność plików.
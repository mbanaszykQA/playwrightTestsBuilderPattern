# playwrightTestsPOMPattern

# Playwright Tests – POM Pattern

## 📌 Opis projektu

Projekt prezentuje przykładową automatyzację testów **UI oraz API** z wykorzystaniem **Playwright** oraz wzorca projektowego **Builder**. Repozytorium zostało przygotowane jako projekt demonstracyjny / rekrutacyjny, pokazujący dobre praktyki w automatyzacji testów E2E.

Testy UI oparte są na aplikacji **SauceDemo**, natomiast testy API wykorzystują publiczne REST API **PokeAPI** (in progress).

---

## 🧱 Technologie i narzędzia

* **TypeScript**
* **Playwright** (testy UI + API)
* **Builder**
* **Node.js / npm**

---

## 📂 Struktura projektu

```
playwrightTestsBuilderPattern/
├─ builders/              # mapowanie operacji na UI 
├─ api/                   # mapowanie API
├─ interfaces/            # Interfejsy wykorzystywane w innych plikach
├─ tests/                 # Konkretne scenariusze testowe
├── playwright.config.ts  # Konfiguracja Playwright
├─ node_modules/
├── package.json
└─ tsconfig.json

```

---

## 🧪 Zakres testów

### ✅ Testy UI (SauceDemo)

* Prawidłowe logowanie użytkownika `standard_user`
* Nieprawidłowe logowanie użytkownika `locked_out_user`
* Weryfikacja komunikatu błędu przy błędnych danych
* Wykorzystanie wzorca projektowego Builder

### ✅ Testy API (PokeAPI) - in progress

Testy API realizowane są z użyciem **Playwright API Testing**:

* **GET** – pobranie danych Pokémon (`/pokemon/ditto`)
* **POST** – weryfikacja, że metoda nie jest obsługiwana (status 404/405)
* **DELETE** – weryfikacja, że metoda nie jest obsługiwana (status 404/405)

> ℹ️ PokeAPI jest API typu *read-only*, dlatego POST i DELETE testują poprawną obsługę błędów.

---

## ▶️ Uruchamianie projektu

### 1️⃣ Instalacja zależności

```bash
npm install
```

### 2️⃣ Uruchomienie wszystkich testów

```bash
npx playwright test
```

### 5️⃣ Raport z testów

```bash
npx playwright show-report
```

---

## 🧩 Builder

Projekt wykorzystuje wzorzec **Builder**, który:

* separuje konfigurację od wykonania
* poprawia czytelność i ułatwia utrzymanie kodu
* poprawia skalowalność testów




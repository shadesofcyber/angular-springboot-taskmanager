# Task Management API

Eine Full-Stack Task-Management-Anwendung mit Angular-Frontend und Spring-Boot-Backend.

Das Projekt zeigt eine typische mehrschichtige Architektur mit REST API, DTOs, Validierung, Exception Handling, Status-Filterung, CRUD-Funktionen und interaktiver API-Dokumentation über Swagger / OpenAPI.

## Screenshots

### Dashboard

![Dashboard](./screenshots/dashboard.png)

### Swagger API Documentation

![Swagger](./screenshots/swagger.png)

## Tech Stack

### Frontend

- Angular 21.2
- TypeScript 5.9
- Tailwind CSS 4
- Angular Signals
- Angular HttpClient
- RxJS

### Backend

- Java 17
- Spring Boot 4.1
- Gradle
- Spring Web
- Spring Data JPA
- H2 In-Memory Database
- Jakarta Validation
- Lombok
- Swagger / OpenAPI mit Springdoc 3.0.3

## Features

### Task-Funktionen

- Tasks erstellen
- Tasks anzeigen
- Tasks nach Status filtern
- Status einer Task aktualisieren
- Priorität einer Task aktualisieren
- Tasks löschen

### Backend-Funktionen

- REST API mit Spring Boot
- Mehrschichtige Architektur: Controller → Service → Repository → Datenbank
- Request DTOs und Response DTOs
- Validierung eingehender Daten
- Globales Exception Handling
- Status-Filterung über Query Parameter
- Persistenz mit Spring Data JPA
- H2-Datenbank für lokale Entwicklung
- Swagger / OpenAPI Dokumentation

### Frontend-Funktionen

- Angular Standalone Components
- Wiederverwendbare Komponenten
- Service Layer für API-Kommunikation
- State Management mit Angular Signals
- Dynamische Filterung nach Task-Status
- Formularvalidierung im Frontend
- Tailwind CSS Styling

## Projektstruktur

```text
task-app/
├── backend/
└── frontend/
```

## Backend-Architektur

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

Die Backend-Architektur trennt HTTP-Logik, Businesslogik und Datenbankzugriff voneinander.

- Controller nehmen HTTP-Requests entgegen.
- Services enthalten die Anwendungslogik.
- Repositories übernehmen den Datenbankzugriff.
- DTOs trennen API-Daten von Entity-Daten.
- Exception Handler liefern kontrollierte Fehlerantworten.

## Frontend-Architektur

```text
Component
    ↓
Service
    ↓
REST API
```

Das Frontend nutzt Angular Components für die UI und Angular Services für die Kommunikation mit dem Spring-Boot-Backend.

## API-Dokumentation

Nach dem Start des Backends ist die Swagger UI erreichbar unter:

```text
http://localhost:8080/swagger-ui/index.html
```

Die OpenAPI JSON-Dokumentation ist erreichbar unter:

```text
http://localhost:8080/v3/api-docs
```

## Backend starten

```bash
cd backend
./gradlew bootRun
```

Backend läuft standardmäßig unter:

```text
http://localhost:8080
```

## Frontend starten

```bash
cd frontend
npm install
npm start
```

Frontend läuft standardmäßig unter:

```text
http://localhost:4200
```

## Lokale Datenbank

Das Projekt nutzt aktuell H2 als In-Memory-Datenbank.

Das bedeutet:

- keine zusätzliche Datenbankinstallation notwendig
- ideal für lokale Entwicklung und Tests
- Daten werden beim Neustart der Anwendung zurückgesetzt

## Beispiel-Endpunkte

```http
GET /api/tasks
```

Lädt alle Tasks.

```http
GET /api/tasks?status=TODO
```

Lädt Tasks mit dem Status `TODO`.

```http
POST /api/tasks
```

Erstellt eine neue Task.

```http
PUT /api/tasks/{id}
```

Aktualisiert eine vorhandene Task.

```http
DELETE /api/tasks/{id}
```

Löscht eine Task.

## Zweck des Projekts

Dieses Projekt wurde als Portfolio-Projekt zur Vorbereitung auf eine Entwicklerrolle erstellt. Ziel war es, den typischen Architektur-Workflow mit Angular und Java Spring Boot praktisch umzusetzen.

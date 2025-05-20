# Proiect Cloud Computing 2025 - Verificator IP - Detecție activități suspecte

**Nume:** Burciu Andreea-Claudia
**Grupa:** 1132

---

### Link video prezentare:


### Link aplicație publicată:
https://proiect-cc-sigma.vercel.app/

---

## 1. Introducere

Acest proiect constă într-o aplicație web care permite verificarea unei adrese IP pentru a vedea dacă a fost raportată pentru activități suspecte. Am realizat aplicația folosind Next.js (React + API routes), iar datele sunt afișate în mod interactiv cu componente precum Leaflet pentru hartă și Recharts pentru grafic. Informațiile despre IP sunt obținute în timp real folosind două API-uri externe, iar istoricul căutărilor este salvat într-o bază de date MongoDB Atlas, pentru a putea fi vizualizat ulterior.

Am folosit următoarele servicii cloud:
MongoDB Atlas – pentru salvarea și gestionarea căutărilor în cloud;
Vercel – pentru deploy și hosting automat al aplicației.

---

## 2. Descriere problemă

IP-urile pot fi implicate în activități rău intenționate (spam, hacking, botnets etc.), iar identificarea acestora e importantă în contextul securității cibernetice. De cele mai multe ori, este util să știm dacă un IP este de încredere sau a fost deja raportat. Astfel, am creeat o soluție care permite utilizatorului să introducă o adresă IP și să afle imediat dacă aceasta a fost raportată, în ce țară se află și ce ISP o deține. În plus, am adăugat un sistem de salvare automată a căutărilor într-o bază de date (MongoDB Atlas), pentru a putea fi analizate ulterior vizual printr-un grafic de tip bar chart.

---

## 3. Descriere API

a) API-uri externe folosite

1. AbuseIPDB
Link: https://www.abuseipdb.com
Este un serviciu care returnează un „abuseConfidenceScore” și numărul de raportări pentru o adresă IP.
Pentru a putea folosi acest API, mi-am creat un cont și am generat o cheie API personală, care a fost salvată în fișierul .env.local pentru a nu fi expusă publicului.

Exemplu request către AbuseIPDB:
---
![image](https://github.com/user-attachments/assets/62b61c9d-a4ff-4a35-82a3-7c29b5f93de6)
---

2. ipwho.is
Link: https://ipwho.is
API gratuit, fără autentificare, folosit pentru a obține locația geografică a unui IP (țară, oraș, latitudine, longitudine).

b) API intern propriu (Next.js)

Am creat un endpoint intern /api/searches, care gestionează salvarea și citirea istoricului:
- **GET /api/searches – întoarce toate IP-urile salvate în MongoDB - Răspuns: 200 OK + JSON**
- **POST /api/searches – salvează o nouă căutare în baza de date (dacă IP-ul nu a mai fost salvat deja) - Răspuns: 201 Created sau 409 Conflict**

---

## 4. Flux de date

a) Utilizatorul introduce o adresă IP.
b) Se face o cerere către AbuseIPDB pentru scorul de abuz.
c) Se face o altă cerere către ipwho.is pentru locație (oraș, țară, coordonate).
d) Datele sunt afișate în aplicație:
   - **Detalii IP**
   - **Hartă cu locația**
   - **Grafic cu scorurile din istoric**
e) Se salvează căutarea în MongoDB printr-un POST către /api/searches.
f) Se preiau toate căutările salvate și sunt afișate într-un grafic Recharts.

Exemplu request POST:
---
![image](https://github.com/user-attachments/assets/a532d10b-9724-4ad9-a0a6-a225d1f08af4)
---

---

  ## 5. Capturi ecran aplicație
  
![image](https://github.com/user-attachments/assets/bfbf47da-9043-40a9-9174-b0ead4143fdb)
![image](https://github.com/user-attachments/assets/d10ca362-9df7-4c09-8ed0-87533f5f6a39)
![image](https://github.com/user-attachments/assets/f9c235d9-5960-4b3b-a892-65c618b0bddc)
![image](https://github.com/user-attachments/assets/f02a4ce5-98b1-4978-b46b-289e27cb9e41)

---

  ## 6. Referințe

- **Next.js** – framework pentru React cu API routes
- **MongoDB Atlas** – bază de date cloud pentru salvarea istoricului
- **Vercel** – platformă de hosting și deploy automat
- **Leaflet** – afișarea locației IP-ului pe hartă
- **Recharts** – grafic pentru afișarea scorurilor IP-urilor verificate
- **AbuseIPDB** – API
- **ipwho.is ** – API





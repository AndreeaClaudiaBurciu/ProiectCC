# Proiect Cloud Computing 2025 - Verificator IP - Detecție activități suspecte

**Nume:** Burciu Andreea-Claudia
**Grupa:** 1132

---

### Link video prezentare:


### Link aplicație publicată:
https://proiect-cc-sigma.vercel.app/

---

## 1. Introducere

Aplicația realizată în cadrul acestui proiect are ca scop verificarea unei adrese IP din perspectiva securității cibernetice. Mai exact, proiectul constă într-o aplicație web interactivă care permite utilizatorilor să verifice dacă o adresă IP a fost implicată în activități suspecte, precum spam, atacuri cibernetice sau alte acțiuni malițioase. Proiectul a fost dezvoltat folosind Next.js, un framework pentru React care permite construirea de aplicații full-stack, inclusiv rutare API pe server-side.
	Datele sunt obținute în timp real prin interogarea a două API-uri externe: AbuseIPDB, pentru reputația IP-ului, și ipwho.is, pentru informații de geolocalizare. Ulterior, aceste date sunt procesate și afișate în interfață. De asemenea, fiecare căutare efectuată este salvată într-o bază de date MongoDB Atlas, permițând astfel agregarea rezultatelor și afișarea unui istoric în format grafic.
	Aplicația este publicată și găzduită în cloud prin intermediul platformei Vercel, care gestionează automat procesul de build și deploy continuu.
	Tehnologii utilizate:
-	Next.js – pentru aplicația web și gestionarea rutelor API
-	MongoDB Atlas – pentru persistarea și gestionarea datelor în cloud
-	Vercel – pentru deploy și hosting
-	Leaflet.js – pentru afișarea poziției IP-ului pe hartă
-	Recharts – pentru reprezentarea vizuală a istoricului căutărilor

---

## 2. Descriere problemă

Adresele IP pot deveni surse de activitate dăunătoare în rețea, fiind utilizate pentru spam, atacuri informatice, tentative de phishing sau ca parte a rețelelor botnet. În contextul actual al securității informatice, identificarea rapidă a unei surse potențial malițioase devine esențială. Prin urmare, scopul aplicației este de a permite unui utilizator să verifice dacă un IP a fost anterior raportat pentru abuzuri. În plus, sunt oferite detalii precum țara de proveniență, furnizorul de servicii (ISP) și coordonatele geografice. Funcționalitatea aplicației include și salvarea căutărilor efectuate, pentru a putea analiza ulterior frecvența și distribuția scorurilor de abuz ale IP-urilor interogate.

---

## 3. Descriere API

a) API-uri externe folosite

1. AbuseIPDB
Link: https://www.abuseipdb.com
Este un serviciu care returnează un „abuseConfidenceScore” și numărul de raportări pentru o adresă IP.
Pentru a putea folosi acest API, mi-am creat un cont și am generat o cheie API personală, care a fost salvată în fișierul .env.local pentru a nu fi expusă publicului.

2. ipwho.is
Link: https://ipwho.is
API gratuit, fără autentificare, folosit pentru a obține locația geografică a unui IP (țară, oraș, latitudine, longitudine).

b) API intern propriu (Next.js)
Am creat un endpoint intern /api/searches, care gestionează salvarea și citirea istoricului:

---

## 4. Flux de date

a) Utilizatorul introduce o adresă IP.
b) Se face o cerere către AbuseIPDB pentru scorul de abuz.
c) Se face o altă cerere către ipwho.is pentru locație (oraș, țară, coordonate).
d) Datele sunt afișate în aplicație:

   - Detalii IP
   - Hartă cu locația
   - Grafic cu scorurile din istoric
     
e) Se salvează căutarea în MongoDB printr-un POST către /api/searches.
f) Se preiau toate căutările salvate și sunt afișate într-un grafic Recharts.

Exemplu request / response și metode HTTPS:
![image](https://github.com/user-attachments/assets/414f64a9-7503-4186-b300-5c6af29427a7)
![image](https://github.com/user-attachments/assets/594ec4d8-ade0-483b-b07b-000f6bc33165)

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





# Lesson 1: កុំព្យូទ័រ & Internet ដំណើរការយ៉ាងដូចម្តេច

> **Part:** 1 — មូលដ្ឋាន (Beginner)
> **រយៈពេល:** 2-3 ម៉ោង
> **កម្រិត:** គ្មានតម្រូវការមុន (No Prerequisites)

---

## 🎯 គោលបំណង (Learning Objectives)

បន្ទាប់ពីរៀន Lesson នេះចប់ សិស្សនឹងអាច៖
1. ពន្យល់ពីផ្នែកសំខាន់ៗរបស់កុំព្យូទ័រ (CPU, RAM, Storage)
2. ពន្យល់ពីភាពខុសគ្នារវាង Internet និង World Wide Web
3. ពន្យល់ពី Client-Server Model
4. ពន្យល់ពីដំណើរការរបស់ HTTP/HTTPS
5. ពន្យល់ពីអ្វីកើតឡើងពេល Type URL ក្នុង Browser

---

## 📚 មាតិកាលម្អិត (Detailed Content)

---

### 1. កុំព្យូទ័រដំណើរការយ៉ាងដូចម្តេច

#### កុំព្យូទ័រជាអ្វី?
កុំព្យូទ័រគឺជាម៉ាស៊ីនដែលអាចទទួល Input (ការបញ្ចូល), ដំណើរការ (Process), និង បញ្ចេញ Output (លទ្ធផល)។

```
Input → Process → Output
(Keyboard, Mouse) → (CPU ដំណើរការ) → (Screen, Speaker)
```

#### ផ្នែកសំខាន់ៗរបស់កុំព្យូទ័រ (Hardware)

##### CPU (Central Processing Unit) — ខួរក្បាលរបស់កុំព្យូទ័រ
- ជា "ខួរក្បាល" របស់កុំព្យូទ័រ
- ធ្វើការគណនា និង ដំណើរការ Instructions ទាំងអស់
- វាស់ Speed ដោយ GHz (Gigahertz)
- ឧទាហរណ៍: Intel Core i5, AMD Ryzen 5, Apple M2

```
🧠 CPU ដូចជាខួរក្បាលមនុស្ស
   - ទទួល Instructions
   - គណនា/ដំណើរការ
   - បញ្ចេញលទ្ធផល
```

##### RAM (Random Access Memory) — ការចងចាំរយៈពេលខ្លី
- ជា "ការចងចាំរយៈពេលខ្លី" (Short-term Memory)
- រក្សាទុក Data ដែលកំពុងប្រើប្រាស់ជាបណ្តោះអាសន្ន
- Data នឹងបាត់នៅពេលបិទកុំព្យូទ័រ (Volatile)
- វាស់ដោយ GB (Gigabytes): 4GB, 8GB, 16GB, 32GB

```
📋 RAM ដូចជាតុការងារ
   - ទំហំតុធំ = អាចដាក់ឯកសារច្រើន = ធ្វើការច្រើនក្នុងពេលតែមួយ
   - ទំហំតុតូច = ដាក់ឯកសារបានតិច = ដំណើរការយឺត
```

##### Storage (Hard Drive / SSD) — ការចងចាំរយៈពេលវែង
- ជា "ការចងចាំរយៈពេលវែង" (Long-term Memory)
- រក្សាទុក Files, Programs, OS ជាអចិន្ត្រៃយ៍
- Data នៅតែមានបើទោះបិទកុំព្យូទ័រ (Non-Volatile)
- ប្រភេទ: HDD (យឺតជាង, ថោកជាង) vs SSD (លឿន, ថ្លៃជាង)
- វាស់ដោយ GB / TB: 256GB, 512GB, 1TB

```
📦 Storage ដូចជាទូខោអាវ
   - រក្សាទុករបស់របរជាអចិន្ត្រៃយ៍
   - HDD = ទូធម្មតា (ធំ, យឺត)
   - SSD = ទូទំនើប (លឿន, ថ្លៃ)
```

##### ការប្រៀបធៀបមួយដែលងាយយល់

```
🍳 ការធ្វើម្ហូបក្នុងផ្ទះបាយ

CPU    = មេចុងភៅ (Chef)         → ជាអ្នកធ្វើម្ហូប/ដំណើរការ
RAM    = តុធ្វើម្ហូប (Counter)    → កន្លែងដាក់គ្រឿងផ្សំកំពុងប្រើ
Storage = ទូទឹកកក (Fridge)      → កន្លែងរក្សាទុកគ្រឿងផ្សំទាំងអស់
Screen = ចាន (Plate)            → បង្ហាញលទ្ធផល (ម្ហូបរួចរាល់)
```

##### ផ្នែកផ្សេងៗទៀត
| ផ្នែក | មុខងារ | ឧទាហរណ៍ |
|------|--------|---------|
| GPU | ដំណើរការក្រាហ្វិក/រូបភាព | NVIDIA, AMD |
| Motherboard | ភ្ជាប់ផ្នែកទាំងអស់ | Main Circuit Board |
| Power Supply | ផ្គត់ផ្គង់អគ្គិសនី | PSU |
| Input Devices | បញ្ចូល Data | Keyboard, Mouse, Mic |
| Output Devices | បង្ហាញ Data | Monitor, Speaker, Printer |

---

### 2. Internet & World Wide Web

#### Internet ជាអ្វី?
- Internet ជា **បណ្តាញកុំព្យូទ័រសកល** (Global Network of Computers)
- កុំព្យូទ័ររាប់ពាន់លានភ្ជាប់គ្នាទូទាំងពិភពលោក
- ប្រើខ្សែ Fiber Optic ក្រោមសមុទ្រ, Satellites, Cell Towers
- ចាប់ផ្តើមពីឆ្នាំ 1969 (ARPANET — US Military)

```
🌍 Internet = ផ្លូវថ្នល់ (Roads/Highways)
   - ជាហេដ្ឋារចនាសម្ព័ន្ធ (Infrastructure)
   - ភ្ជាប់កុំព្យូទ័រទាំងអស់ជាមួយគ្នា
   - អនុញ្ញាតឱ្យ Data ធ្វើដំណើរពីកន្លែងមួយទៅកន្លែងមួយ
```

#### World Wide Web (WWW) ជាអ្វី?
- WWW ជា **សេវាកម្មមួយ** ដែលដំណើរការ​នៅលើ Internet
- បង្កើតដោយ **Tim Berners-Lee** ក្នុងឆ្នាំ 1989
- ប្រើ Web Pages (HTML), Links (URLs), និង Browser ដើម្បី Access

```
🚗 WWW = រថយន្តដែលដំណើរការលើផ្លូវថ្នល់
   - Internet = ផ្លូវ
   - WWW = រថយន្ត
   - Websites = គោលដៅ (Destinations)
```

#### ភាពខុសគ្នា: Internet vs WWW

| | Internet | World Wide Web |
|---|---------|---------------|
| ជាអ្វី | Network of Computers | Service on the Internet |
| ចាប់ផ្តើម | 1969 (ARPANET) | 1989 (Tim Berners-Lee) |
| ប្រើសម្រាប់ | ភ្ជាប់កុំព្យូទ័រ | មើល Web Pages |
| ឧទាហរណ៍ | Email, FTP, WWW | Websites, Web Apps |
| ប្រៀបធៀប | ផ្លូវថ្នល់ | រថយន្តលើផ្លូវ |

#### សេវាកម្មផ្សេងៗដែលដំណើរការលើ Internet
- **WWW** — Websites & Web Apps
- **Email** — Electronic Mail (Gmail, Yahoo)
- **FTP** — File Transfer Protocol
- **VoIP** — Voice over IP (Zoom, Skype)
- **Streaming** — Video/Audio (YouTube, Spotify)

---

### 3. Client vs Server (Client-Server Model)

#### Client ជាអ្វី?
- Client ជា **កុំព្យូទ័រ/App ដែលស្នើសុំ (Request)** សេវាកម្ម
- ឧទាហរណ៍: Browser (Chrome, Firefox), Mobile App, Desktop App
- Client **ផ្ញើ Request** ទៅ Server ហើយ **ទទួល Response** ត្រឡប់មក

#### Server ជាអ្វី?
- Server ជា **កុំព្យូទ័រដែលផ្តល់សេវាកម្ម (Response)** ទៅ Client
- ដំណើរការ 24/7 ហើយរង់ចាំទទួល Requests
- រក្សាទុក Data, Files, Websites, APIs
- ឧទាហរណ៍: Web Server (Nginx, Apache), Database Server

#### ដំណើរការ Client-Server

```
┌─────────┐         Request          ┌─────────┐
│         │  ──────────────────────►  │         │
│  Client │    "Give me google.com"   │  Server │
│(Browser)│                           │ (Google │
│         │  ◄──────────────────────  │  Server)│
│         │         Response          │         │
└─────────┘   (HTML, CSS, JS files)   └─────────┘
```

#### ឧទាហរណ៍ពិតៗ

```
🍽️ ប្រៀបធៀបជាមួយភោជនីយដ្ឋាន:

Client  = អតិថិជន (Customer)        → ស្នើសុំម្ហូប
Request = ការ Order ម្ហូប             → "ខ្ញុំចង់បាន បាយឆា"
Server  = ផ្ទះបាយ/មេចុងភៅ (Kitchen)  → ធ្វើម្ហូប
Response = ម្ហូបដែលរៀបចំរួច          → បាយឆាដាក់ចាន
```

#### ប្រភេទ Server

| Server Type | មុខងារ | ឧទាហរណ៍ |
|-------------|--------|---------|
| Web Server | Serve Websites/Pages | Nginx, Apache |
| API Server | Serve Data (JSON) | Express.js, Django |
| Database Server | Store & Manage Data | MongoDB, MySQL |
| File Server | Store Files | AWS S3, Google Drive |
| Mail Server | Handle Emails | Gmail Server |

---

### 4. HTTP / HTTPS Protocol

#### Protocol ជាអ្វី?
- Protocol ជា **វិធានសម្រាប់ទំនាក់ទំនង** (Rules for Communication)
- ដូចជាភាសាដែល Client និង Server ប្រើនិយាយគ្នា
- បើគ្មាន Protocol → Client និង Server មិនយល់គ្នា

#### HTTP (HyperText Transfer Protocol)
- **ច្បាប់សម្រាប់ផ្ទេរ Web Pages** រវាង Client និង Server
- បង្កើតដោយ Tim Berners-Lee
- ដំណើរការលើ **Port 80**
- **មិនមាន Encryption** → Data ផ្ញើជា Plain Text

```
⚠️ HTTP ដូចជាផ្ញើសំបុត្របើក (Postcard)
   - រាល់គ្នាអាចអានបាន
   - មិនមានសុវត្ថិភាព
```

#### HTTPS (HTTP Secure)
- ដូច HTTP តែ **បន្ថែម SSL/TLS Encryption**
- Data ត្រូវ Encrypt មុនពេលផ្ញើ → មានសុវត្ថិភាព
- ដំណើរការលើ **Port 443**
- មាន 🔒 Icon ក្នុង Browser

```
🔒 HTTPS ដូចជាផ្ញើសំបុត្រក្នុងស្រោមបិទជិត (Sealed Envelope)
   - មានតែអ្នកទទួលអាចអានបាន
   - មានសុវត្ថិភាព
```

#### ភាពខុសគ្នា HTTP vs HTTPS

| | HTTP | HTTPS |
|---|------|-------|
| Security | ❌ No Encryption | ✅ SSL/TLS Encrypted |
| Port | 80 | 443 |
| URL | http://example.com | https://example.com |
| Browser Icon | ⚠️ Not Secure | 🔒 Secure |
| ប្រើពេល | ស្ទើរតែលែងប្រើហើយ | ស្ទើរគ្រប់ Website |

#### HTTP Methods (វិធីសម្រាប់ Request)

| Method | មុខងារ | ឧទាហរណ៍ |
|--------|--------|---------|
| GET | ទាញយក Data | មើល Website, ស្វែងរក |
| POST | ផ្ញើ Data ថ្មី | Register, Login, Submit Form |
| PUT | Update Data ទាំងមូល | Edit Profile |
| DELETE | លុប Data | Delete Account |

```
📱 ឧទាហរណ៍ Facebook:
GET    → មើល News Feed
POST   → Post Status ថ្មី
PUT    → Edit Status ដែលមានរួច
DELETE → Delete Status
```

#### HTTP Status Codes (Response Codes)

| Code | អត្ថន័យ | ឧទាហរណ៍ |
|------|---------|---------|
| 200 | ✅ OK — ជោគជ័យ | Website Load ជោគជ័យ |
| 301 | ↪️ Redirect — ផ្លាស់ទី | Website ផ្លាស់ Address |
| 404 | ❌ Not Found — រកមិនឃើញ | Page មិនមាន |
| 500 | 💥 Server Error — Server មានបញ្ហា | Server Crash |

```
🏠 ប្រៀបធៀបជាមួយការដឹកជញ្ជូន:
200 = ទំនិញដល់ដៃអតិថិជន ✅
301 = អតិថិជនផ្លាស់ Address ថ្មី ↪️
404 = រកផ្ទះអតិថិជនមិនឃើញ ❌
500 = រថយន្តដឹកខូច 💥
```

---

### 5. DNS — Domain Name System

#### DNS ជាអ្វី?
- DNS ជា **"សៀវភៅទូរស័ព្ទ" របស់ Internet** (Phone Book of the Internet)
- បំប្លែង **Domain Name** (google.com) → **IP Address** (142.250.190.78)
- កុំព្យូទ័រប្រើ IP Address ដើម្បីរកគ្នា តែមនុស្សចាំ Domain Name ងាយជាង

```
📞 DNS ដូចជា Contacts ក្នុង Phone:
   - "Mom" → 012-345-678
   - "google.com" → 142.250.190.78

   យើងចាំ "Mom" មិនចាំលេខទូរស័ព្ទ
   យើងចាំ "google.com" មិនចាំ IP Address
```

#### IP Address ជាអ្វី?
- ជា **អាសយដ្ឋានតែមួយគត់** របស់កុំព្យូទ័រនីមួយៗ​នៅលើ Internet
- ដូចជា Address ផ្ទះ — ដើម្បីផ្ញើសំបុត្រ ត្រូវដឹង Address
- **IPv4**: `192.168.1.1` (4 ក្រុមលេខ ពី 0-255)
- **IPv6**: `2001:0db8:85a3:0000:0000:8a2e:0370:7334` (វែងជាង, សម្រាប់អនាគត)

#### Domain Name ជាអ្វី?
- ជា **ឈ្មោះដែលមនុស្សចាំបានងាយ** ជំនួស IP Address
- ឧទាហរណ៍: `google.com`, `facebook.com`, `youtube.com`

##### ផ្នែកនៃ Domain Name
```
https://www.example.com
│       │    │       │
│       │    │       └── TLD (Top Level Domain): .com, .org, .net, .kh
│       │    └────────── Domain Name: example
│       └─────────────── Subdomain: www (ឬ mail, blog, app)
└─────────────────────── Protocol: https
```

##### ប្រភេទ TLD (Top Level Domain)

| TLD | ប្រើសម្រាប់ | ឧទាហរណ៍ |
|-----|------------|---------|
| .com | Commercial/General | google.com |
| .org | Organization | wikipedia.org |
| .net | Network | cloudflare.net |
| .edu | Education | mit.edu |
| .gov | Government | whitehouse.gov |
| .kh | Cambodia | example.com.kh |
| .dev | Developer | web.dev |

#### ដំណើរការរបស់ DNS (DNS Resolution)

```
អ្នក Type "google.com" ក្នុង Browser

Step 1: Browser ពិនិត្យ Cache (ធ្លាប់ចូលមុនទេ?)
        ↓ មិនមានក្នុង Cache
Step 2: សួរ DNS Resolver (ISP's DNS Server)
        ↓ មិនដឹង
Step 3: សួរ Root DNS Server → បញ្ជូនទៅ .com Server
        ↓
Step 4: សួរ .com TLD Server → បញ្ជូនទៅ Google's DNS
        ↓
Step 5: សួរ Google's DNS → ចម្លើយ: 142.250.190.78
        ↓
Step 6: Browser ភ្ជាប់ទៅ 142.250.190.78
        ↓
Step 7: Google Server ផ្ញើ Website ត្រឡប់មក ✅
```

```
🗺️ ប្រៀបធៀបជាមួយការស្វែងរក Address:

"តើផ្ទះ សុខា នៅឯណា?"
Step 1: សួរមិត្តភ័ក្តិ → មិនដឹង
Step 2: សួរអ្នកភូមិ → "នៅភូមិ X"
Step 3: ទៅភូមិ X សួរ → "នៅផ្លូវ Y"
Step 4: ទៅផ្លូវ Y → រកឃើញផ្ទះ ✅
```

---

### 6. Browser ដំណើរការយ៉ាងដូចម្តេច

#### Browser ជាអ្វី?
- ជា **Software ដែលប្រើមើល Websites** (&Web Apps)
- ផ្ញើ HTTP Requests ទៅ Servers ហើយ Render HTML/CSS/JS សម្រាប់បង្ហាញ
- ឧទាហរណ៍: Chrome, Firefox, Safari, Edge

#### ផ្នែកសំខាន់ៗរបស់ Browser

| ផ្នែក | មុខងារ |
|------|--------|
| User Interface | Address bar, Back/Forward buttons, Bookmarks |
| Browser Engine | ភ្ជាប់ UI ជាមួយ Rendering Engine |
| Rendering Engine | បង្ហាញ HTML & CSS ជាទំព័រ (Blink in Chrome, Gecko in Firefox) |
| JavaScript Engine | ដំណើរការ JavaScript Code (V8 in Chrome) |
| Networking | ផ្ញើ/ទទួល HTTP Requests |
| Storage | Cookies, LocalStorage, SessionStorage, Cache |

#### អ្វីកើតឡើងពេល Type URL ក្នុង Browser? (សំខាន់បំផុត!)

នេះជាសំណួរដ៏ពេញនិយមក្នុង Interview!

```
អ្នក Type "https://www.google.com" ហើយចុច Enter...

╔══════════════════════════════════════════════════════════╗
║  Step 1: URL Parsing                                     ║
║  Browser ផ្តាច់ URL ជាផ្នែក                              ║
║  Protocol: https | Domain: www.google.com | Path: /       ║
╠══════════════════════════════════════════════════════════╣
║  Step 2: DNS Lookup                                       ║
║  បំប្លែង "google.com" → IP Address (142.250.190.78)       ║
║  ពិនិត្យ Cache → DNS Resolver → Root → TLD → Auth DNS    ║
╠══════════════════════════════════════════════════════════╣
║  Step 3: TCP Connection                                   ║
║  បង្កើត Connection ទៅ Server (3-Way Handshake)             ║
║  Client: SYN → Server: SYN-ACK → Client: ACK              ║
╠══════════════════════════════════════════════════════════╣
║  Step 4: SSL/TLS Handshake (HTTPS)                       ║
║  បង្កើត Encrypted Connection                              ║
║  ផ្លាស់ប្តូរ Encryption Keys                               ║
╠══════════════════════════════════════════════════════════╣
║  Step 5: HTTP Request                                     ║
║  Browser ផ្ញើ GET Request ទៅ Server                       ║
║  "GET / HTTP/1.1  Host: www.google.com"                   ║
╠══════════════════════════════════════════════════════════╣
║  Step 6: Server Processing                                ║
║  Server ទទួល Request ហើយ ដំណើរការ                        ║
║  រក HTML file ដែលត្រូវការ                                 ║
╠══════════════════════════════════════════════════════════╣
║  Step 7: HTTP Response                                    ║
║  Server ផ្ញើ Response ត្រឡប់មក                             ║
║  Status: 200 OK + HTML Content                            ║
╠══════════════════════════════════════════════════════════╣
║  Step 8: Browser Rendering                                ║
║  a. Parse HTML → DOM Tree                                 ║
║  b. Parse CSS → CSSOM Tree                                ║
║  c. Combine → Render Tree                                 ║
║  d. Layout → Calculate Position & Size                    ║
║  e. Paint → Draw Pixels on Screen                         ║
╠══════════════════════════════════════════════════════════╣
║  Step 9: Load Additional Resources                        ║
║  Browser ទាញយក CSS files, JS files, Images               ║
║  (ផ្ញើ Request បន្ថែមសម្រាប់ Resource នីមួយៗ)               ║
╠══════════════════════════════════════════════════════════╣
║  Step 10: JavaScript Execution                            ║
║  Browser ដំណើរការ JavaScript Code                         ║
║  Interactive elements ដំណើរការ ✅                          ║
╚══════════════════════════════════════════════════════════╝
```

#### Browser Rendering Process (លម្អិត)

```
HTML File                     CSS File
    │                             │
    ▼                             ▼
 DOM Tree                    CSSOM Tree
    │                             │
    └──────────┬──────────────────┘
               ▼
          Render Tree
               │
               ▼
            Layout
      (Calculate positions)
               │
               ▼
            Paint
      (Draw to screen)
               │
               ▼
        🖥️ Website Displayed!
```

##### DOM Tree ជាអ្វី?
- DOM = Document Object Model
- Browser បំប្លែង HTML ទៅជា Tree Structure

```html
<!-- HTML Code -->
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>
```

```
<!-- DOM Tree -->
          html
         /    \
      head     body
       |       /   \
     title    h1    p
       |       |    |
   "My Page" "Hello" "World"
```

---

## 📊 សង្ខេប (Summary)

### Key Concepts ដែលត្រូវចាំ

| Concept | ពន្យល់ |
|---------|--------|
| CPU | ខួរក្បាលកុំព្យូទ័រ — ដំណើរការ Instructions |
| RAM | ការចងចាំរយៈពេលខ្លី — Data បណ្តោះអាសន្ន |
| Storage | ការចងចាំរយៈពេលវែង — Data អចិន្ត្រៃយ៍ |
| Internet | បណ្តាញកុំព្យូទ័រសកល (Infrastructure) |
| WWW | សេវាកម្ម Web ដែលដំណើរការលើ Internet |
| Client | កុំព្យូទ័រ/App ដែល Request សេវាកម្ម |
| Server | កុំព្យូទ័រដែល Respond ទៅ Requests |
| HTTP/HTTPS | ច្បាប់ទំនាក់ទំនងរវាង Client-Server |
| DNS | បំប្លែង Domain Name → IP Address |
| Browser | Software ដែលមើល Websites & Render HTML/CSS/JS |

### ដំណើរការពេល Type URL

```
Type URL → DNS Lookup → TCP Connect → HTTP Request → Server Response → Browser Render → Website! 🎉
```

---

## ✏️ លំហាត់ (Exercises)

### លំហាត់ទី 1: គូសដ្យាក្រាម Client-Server

គូសដ្យាក្រាម (Diagram) បង្ហាញពីដំណើរការ Request/Response ពេលអ្នកចូល Facebook:

**តម្រូវការ:**
1. បង្ហាញ Client (Browser) និង Server (Facebook Server)
2. បង្ហាញ Request (ផ្ញើពី Client ទៅ Server)
3. បង្ហាញ Response (ផ្ញើពី Server ត្រឡប់ Client)
4. សរសេរ HTTP Method និង Status Code

**ឧទាហរណ៍:**
```
[Your Browser]  ---GET /feed--->  [Facebook Server]
[Your Browser]  <--200 OK + HTML---  [Facebook Server]
```

---

### លំហាត់ទី 2: អ្វីកើតឡើងពេល Type URL

សរសេរពន្យល់ជា Steps ពីអ្វីកើតឡើងពេល Type `https://www.youtube.com` ក្នុង Browser:

**តម្រូវការ:**
- សរសេរយ៉ាងតិច 7 Steps
- ប្រើពាក្យផ្ទាល់ខ្លួន (មិនចាំបាច់ Copy ពី Notes)
- រួមបញ្ចូល: DNS, HTTP Request, Server Response, Rendering

---

### លំហាត់ទី 3: កំណត់ Client vs Server

សម្រាប់ សេណារីយ៉ូ នីមួយៗខាងក្រោម សរសេរថា Client និង Server ជាអ្វី:

| សេណារីយ៉ូ | Client | Server |
|-----------|--------|--------|
| មើល YouTube Video | ? | ? |
| ផ្ញើ Email តាម Gmail | ? | ? |
| ស្វែងរកក្នុង Google | ? | ? |
| Download App ពី Play Store | ? | ? |
| Post រូបលើ Instagram | ? | ? |

---

### លំហាត់ទី 4: HTTP Status Codes

ផ្គូផ្គង Status Code ទៅនឹងស្ថានភាព:

| ស្ថានភាព | Status Code |
|----------|-------------|
| Website Load ជោគជ័យ | ? |
| Page រកមិនឃើញ | ? |
| Server Crash | ? |
| Website ផ្លាស់ Address | ? |

---

### លំហាត់ទី 5: DNS បកស្រាយ

ពន្យល់ដោយប្រើការប្រៀបធៀបផ្ទាល់ខ្លួន (not ពី Notes) ថា DNS ដំណើរការយ៉ាងដូចម្តេច? ហេតុអ្វីយើងត្រូវការ DNS?

---

## 🏠 ការងារផ្ទះ (Homework)

### Task 1: Research
ស្រាវជ្រាវហើយឆ្លើយសំណួរខាងក្រោម:
1. Internet Speed វាស់ដោយអ្វី? (Mbps ជាអ្វី?)
2. Fiber Optic Cable ក្រោមសមុទ្រមានប៉ុន្មាន? (Google: "Submarine cable map")
3. Server Farm / Data Center ជាអ្វី? មើលទៅបែបណា?

### Task 2: បើក Chrome DevTools
1. បើក Chrome Browser
2. ចុច `F12` ឬ `Right Click → Inspect`
3. ចូល Tab "Network"
4. ចូល Website មួយ (ឧ. google.com)
5. Screenshot ហើយរកមើល:
   - Request Method (GET/POST)
   - Status Code (200, 301, 404...)
   - Time taken (ms)

### Task 3: អាន
អានបន្ថែមអំពី:
- "How the Internet Works" (search Google)
- មើល Video: "How does the INTERNET work?" នៅលើ YouTube

---

## 📖 Resources បន្ថែម

**Videos:**
- "How The Internet Works" — Code.org (YouTube)
- "What is HTTP?" — Fireship (YouTube)
- "DNS Explained" — PowerCert (YouTube)

**Articles:**
- MDN Web Docs: "How the Web Works"
- FreeCodeCamp: "How the Internet Works"

---

## ❓ សំណួរឆែកចំណេះដឹង (Quiz)

1. CPU ជាអ្វី ហើយមុខងារវាជាអ្វី?
2. RAM និង Storage ខុសគ្នាយ៉ាងដូចម្តេច?
3. Internet និង WWW ខុសគ្នាយ៉ាងដូចម្តេច?
4. Client និង Server ជាអ្វី?
5. HTTP និង HTTPS ខុសគ្នាយ៉ាងដូចម្តេច?
6. DNS ជាអ្វី ហើយដំណើរការយ៉ាងដូចម្តេច?
7. ពេល Type URL ក្នុង Browser មានអ្វីកើតឡើង? (ពន្យល់ 5+ steps)
8. HTTP Status Code 200, 404, 500 មានន័យថាអ្វី?
9. Domain Name មានផ្នែកអ្វីខ្លះ? ឧ. `https://www.example.com`
10. Browser Rendering Process មានជំហានអ្វីខ្លះ?

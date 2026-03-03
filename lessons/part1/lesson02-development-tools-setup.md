# Lesson 2: Development Tools Setup

> **Part:** 1 — មូលដ្ឋាន (Beginner)
> **រយៈពេល:** 2-3 ម៉ោង
> **កម្រិត:** បានរៀន Lesson 1 រួច (Prerequisites: Lesson 1)

---

## 🎯 គោលបំណង (Learning Objectives)

បន្ទាប់ពីរៀន Lesson នេះចប់ សិស្សនឹងអាច៖
1. ដំឡើង និង ប្រើប្រាស់ VS Code ជាមួយ Extensions សំខាន់ៗ
2. ប្រើ Terminal / Command Line ដើម្បីគ្រប់គ្រង Files & Folders
3. ប្រើ Chrome DevTools សម្រាប់ Inspect & Debug
4. រៀបចំ File & Folder Structure សម្រាប់ Web Project
5. បង្កើត Project "Hello World" ដំបូង ហើយបើកដោយ Live Server

---

## 📚 មាតិកាលម្អិត (Detailed Content)

---

### 1. Code Editor — VS Code

#### Code Editor ជាអ្វី?
- Code Editor ជា **Software ដែលប្រើសម្រាប់សរសេរ Code**
- ដូចជា Microsoft Word សម្រាប់សរសេរ Document, Code Editor សម្រាប់សរសេរ Code
- មានមុខងារពិសេសដូចជា: Syntax Highlighting, Auto-complete, Error Detection

```
📝 Code Editor ដូចជាតុការងាររបស់ Developer
   - មានឧបករណ៍គ្រប់យ៉ាងដែលត្រូវការ
   - ជួយឱ្យសរសេរ Code បានលឿន និង មានប្រសិទ្ធភាព
```

#### ហេតុអ្វីប្រើ VS Code?
- **ឥតគិតថ្លៃ** (Free & Open Source) — បង្កើតដោយ Microsoft
- **ពេញនិយមបំផុត** — Developer ជាង 70% ប្រើ VS Code
- **Extensions ច្រើន** — បន្ថែម Features បានតាមតម្រូវការ
- **Cross-platform** — ដំណើរការលើ Windows, macOS, Linux
- **Built-in Terminal** — មាន Terminal ភ្ជាប់មកជាមួយ
- **IntelliSense** — Auto-complete Code ដ៏ឆ្លាត

#### Code Editors ផ្សេងៗ

| Editor | លក្ខណៈពិសេស | តម្លៃ |
|--------|-------------|------|
| **VS Code** | ពេញនិយមបំផុត, Extensions ច្រើន | Free |
| Sublime Text | លឿន, Lightweight | Free/$99 |
| WebStorm | Full IDE, Powerful Features | Paid |
| Vim/Neovim | Terminal-based, Advanced | Free |
| Notepad++ | Simple, Windows Only | Free |

#### ការដំឡើង VS Code

##### Step 1: Download
1. ចូល **https://code.visualstudio.com**
2. ចុច Download button (វានឹង Detect OS ស្វ័យប្រវត្តិ)
3. រង់ចាំ Download រួចរាល់

##### Step 2: Install

**Windows:**
```
1. Double-click file .exe ដែល Download រួច
2. Accept License Agreement
3. Check "Add to PATH" (សំខាន់!)
4. Check "Add 'Open with Code' action"
5. Click Install → Click Finish
```

**macOS:**
```
1. បើក file .dmg ដែល Download រួច
2. Drag "Visual Studio Code" ទៅក្នុង Applications folder
3. បើក VS Code ពី Applications
4. (Optional) ដាក់ Icon នៅ Dock សម្រាប់ងាយបើក
```

##### Step 3: ស្គាល់ Interface របស់ VS Code

```
+------------------------------------------------------+
|  Menu Bar (File, Edit, View, ...)                     |
+--------+---------------------------------------------+
|        |              Editor Area                    |
|  Side  |         (សរសេរ Code នៅទីនេះ)                |
|  Bar   |                                             |
| FILES  |  +--- Tab 1 --+--- Tab 2 --+               |
| SEARCH |  | index.html  | style.css  |               |
| GIT    |  |  <html>     |            |               |
| DEBUG  |  |   <body>    |            |               |
| EXTS   |  |   </body>   |            |               |
|        |  |  </html>    |            |               |
+--------+---------------------------------------------+
|  Terminal / Output Panel                              |
+------------------------------------------------------+
|  Status Bar                                           |
+------------------------------------------------------+
```

##### ផ្នែកសំខាន់ៗរបស់ VS Code

| ផ្នែក | មុខងារ | Shortcut |
|------|--------|----------|
| **Explorer** | មើល Files & Folders | `Ctrl+Shift+E` / `Cmd+Shift+E` |
| **Search** | ស្វែងរក Text ក្នុង Project | `Ctrl+Shift+F` / `Cmd+Shift+F` |
| **Source Control** | Git Integration | `Ctrl+Shift+G` / `Cmd+Shift+G` |
| **Extensions** | ដំឡើង Plugins | `Ctrl+Shift+X` / `Cmd+Shift+X` |
| **Terminal** | Command Line ក្នុង VS Code | `` Ctrl+` `` / `` Cmd+` `` |

##### Keyboard Shortcuts សំខាន់ៗ

| Shortcut (Win / Mac) | មុខងារ |
|----------------------|--------|
| `Ctrl+S` / `Cmd+S` | Save File |
| `Ctrl+Z` / `Cmd+Z` | Undo |
| `Ctrl+Shift+Z` / `Cmd+Shift+Z` | Redo |
| `Ctrl+C` / `Cmd+C` | Copy |
| `Ctrl+V` / `Cmd+V` | Paste |
| `Ctrl+X` / `Cmd+X` | Cut (ពេល Cursor នៅលើ Line) |
| `Ctrl+D` / `Cmd+D` | Select Next Occurrence |
| `Alt+Up/Down` / `Option+Up/Down` | Move Line Up/Down |
| `Shift+Alt+Up/Down` / `Shift+Option+Up/Down` | Duplicate Line |
| `Ctrl+/` / `Cmd+/` | Toggle Comment |
| `Ctrl+P` / `Cmd+P` | Quick Open File |
| `Ctrl+Shift+P` / `Cmd+Shift+P` | Command Palette |

---

### 2. VS Code Extensions

#### Extension ជាអ្វី?
- Extension ជា **Plugin បន្ថែម Feature ថ្មី** ទៅក្នុង VS Code
- ដូចជា App ក្នុង Phone — ដំឡើងបន្ថែមតាមតម្រូវការ
- មាន Extensions រាប់ពាន់នៅក្នុង VS Code Marketplace

#### របៀបដំឡើង Extension

```
Step 1: ចុច Extensions Icon នៅ Side Bar ឬចុច Ctrl+Shift+X
Step 2: Type ឈ្មោះ Extension ក្នុង Search Box
Step 3: ចុច "Install" Button
Step 4: Extension រួចរាល់ ដំណើរការភ្លាម!
```

#### Extensions ចាំបាច់សម្រាប់ Web Development

##### 1. Live Server (by Ritwick Dey)
- បើក HTML File ក្នុង Browser ដោយស្វ័យប្រវត្តិ ហើយ **Auto-Reload** ពេល Save
- ពេល Edit Code ហើយ Save → Browser Refresh ស្វ័យប្រវត្តិ (មិនចាំបាច់ F5 ម្តងម្តងៗ)

**របៀបប្រើ:**
1. បើក HTML File ក្នុង VS Code
2. Right-click ក្នុង Editor → **"Open with Live Server"**
3. ឬចុច **"Go Live"** Button នៅ Status Bar
4. Browser នឹងបើកដោយស្វ័យប្រវត្តិ

##### 2. Prettier — Code Formatter
- **Format Code ឱ្យស្អាត** ដោយស្វ័យប្រវត្តិ
- Setup: Settings → Search "Format On Save" → Check Enable
- Search "Default Formatter" → Select "Prettier"

##### 3. Auto Rename Tag (by Jun Han)
- ពេល Rename HTML Opening Tag → **Closing Tag ប្តូរតាម** ស្វ័យប្រវត្តិ

##### 4. Extensions បន្ថែមដែលមានប្រយោជន៍

| Extension | មុខងារ | Priority |
|-----------|--------|----------|
| **HTML CSS Support** | Auto-complete CSS class names ក្នុង HTML | ខ្ពស់ |
| **Auto Close Tag** | បិទ HTML Tag ស្វ័យប្រវត្តិ | ខ្ពស់ |
| **Path Intellisense** | Auto-complete File Paths | មធ្យម |
| **Material Icon Theme** | Icon ស្អាតសម្រាប់ Files & Folders | មធ្យម |

---

### 3. Terminal / Command Line មូលដ្ឋាន

#### Terminal ជាអ្វី?
- Terminal ជា **វិធីគ្រប់គ្រងកុំព្យូទ័រដោយ Text Commands** (ជំនួសការ Click)
- ហៅផ្សេងៗ: Terminal, Command Line, Shell, CLI
- Developer ប្រើ Terminal ប្រចាំថ្ងៃដើម្បី: បង្កើត Files, ដំណើរការ Programs, គ្រប់គ្រង Projects

#### ហេតុអ្វី Developer ប្រើ Terminal?
1. **លឿនជាង** — Command មួយ = ការ Click ច្រើន
2. **ថាមពលខ្លាំង** — ធ្វើអ្វីៗបានច្រើនជាង GUI
3. **Automation** — អាច Automate ការងារដដែលៗ
4. **ចាំបាច់** — Tools ជាច្រើន (Git, npm, etc.) ដំណើរការតែក្នុង Terminal
5. **Server** — Server ភាគច្រើនមិនមាន GUI → ប្រើ Terminal ទាំងអស់

#### របៀបបើក Terminal

**ក្នុង VS Code:** `` Ctrl+` `` (Windows) / `` Cmd+` `` (Mac)

**ក្រៅ VS Code:**
- **Windows:** Search "Command Prompt" ឬ "PowerShell"
- **macOS:** Search "Terminal" ក្នុង Spotlight (Cmd+Space)

#### Terminal Commands ចាំបាច់

##### `pwd` — Print Working Directory (បង្ហាញ Location បច្ចុប្បន្ន)

```bash
$ pwd
/Users/student/Documents/my-project
```

##### `ls` — List (បង្ហាញ Files & Folders)

```bash
$ ls
index.html    style.css    images/    scripts/

# បង្ហាញលម្អិត (macOS/Linux)
$ ls -la
```


```bash
$ cd Documents          # ចូលទៅ Folder មួយ
$ cd ..                 # ថយក្រោយ 1 Level
$ cd ~                  # ត្រឡាត់ទៅ Home Directory
$ cd /Users/student     # ចូលដោយប្រើ Full Path
```

```
🚶 cd ដូចជាការដើរចូលបន្តាត់ផ្សេង:
   cd Documents = ដើរចូលបន្តាត់ Documents
   cd ..        = ដើរចេញក្រៅមួយជំហាន
   cd ~         = ត្រឡាត់ទៅផ្ទះ (Home)
```

##### `mkdir` — Make Directory (បង្កើត Folder ថ្មី)

```bash
$ mkdir my-project              # បង្កើត Folder មួយ
$ mkdir css js images           # បង្កើត Folder ច្រើនក្នុងពេលតែមួយ
$ mkdir -p project/css/parts    # បង្កើត Nested Folders
```

##### `touch` — បង្កើត File ថ្មី (macOS/Linux)

```bash
$ touch index.html                           # បង្កើត File មួយ
$ touch index.html style.css script.js       # បង្កើត Files ច្រើន

# Windows (PowerShell):
$ New-Item index.html
```

##### `rm` — Remove (លុប)

```bash
# សូមប្រយ័ត្ន! rm លុបជាអចិន្ត្រៃយ៍ (មិនចូល Recycle Bin)!

$ rm unwanted-file.txt         # លុប File មួយ
$ rmdir empty-folder           # លុប Folder ទទេ
$ rm -r old-project            # លុប Folder និង Content ទាំងអស់
```

##### `cp` — Copy (ចម្លង)

```bash
$ cp index.html backup.html           # ចម្លង File
$ cp style.css css/style.css          # ចម្លង File ទៅ Folder ផ្សេង
$ cp -r my-project my-project-backup  # ចម្លង Folder ទាំងមូល
```

##### `mv` — Move / Rename (ផ្លាស់ទី ឬ ប្តូរឈ្មោះ)

```bash
$ mv style.css css/                    # ផ្លាស់ទី File ទៅ Folder ផ្សេង
$ mv old-name.html new-name.html      # ប្តូរឈ្មោះ File
```

##### `clear` — សម្អាត Terminal Screen

```bash
$ clear
# Shortcut: Ctrl+L
```

#### សង្ខេប Commands

| Command | មុខងារ | ឧទាហរណ៍ |
|---------|--------|---------|
| `pwd` | បង្ហាញ Location បច្ចុប្បន្ន | `pwd` |
| `ls` | បង្ហាញ Files & Folders | `ls`, `ls -la` |
| `cd` | ផ្លាស់ទី Location | `cd Documents`, `cd ..` |
| `mkdir` | បង្កើត Folder | `mkdir my-project` |
| `touch` | បង្កើត File | `touch index.html` |
| `rm` | លុប File | `rm file.txt` |
| `rm -r` | លុប Folder | `rm -r folder` |
| `cp` | ចម្លង File/Folder | `cp a.txt b.txt` |
| `mv` | ផ្លាស់ទី/ប្តូរឈ្មោះ | `mv old.txt new.txt` |
| `clear` | សម្អាត Screen | `clear` |

#### Path (Absolute vs Relative)

```
Absolute Path (ផ្លូវពេញ):
/Users/student/Documents/my-project/index.html
→ ចាប់ផ្តើមពី Root (/)
→ ដូចកាន់ Address ពេញលេញ មិនអាស្រ័យលើទីតាំងបច្ចុប្បន្ន

Relative Path (ផ្លូវទាក់ទង):
./index.html         = File ក្នុង Folder បច្ចុប្បន្ន
../style.css         = File ក្នុង Folder មួយក្រៅ
images/photo.jpg     = ក្នុង Folder "images"
```

---

### 4. Chrome DevTools

#### Chrome DevTools ជាអ្វី?
- Chrome DevTools ជា **ឧបករណ៍សម្រាប់ Developer** ក្នុង Chrome Browser
- អាច Inspect HTML, CSS, JavaScript, Network Requests
- Developer ប្រើ DevTools សម្រាប់ Debug, Test, និង Optimize

#### របៀបបើក DevTools

1. **Keyboard Shortcut:** F12 (Windows/Linux) ឬ Cmd+Option+I (macOS)
2. **Right-click:** Right-click លើ Element ណាមួយ → "Inspect"
3. **Menu:** Chrome Menu → More Tools → Developer Tools

#### Tabs សំខាន់ៗក្នុង DevTools

##### Elements Tab — Inspect HTML & CSS
- មើល HTML Structure របស់ Web Page
- មើលនិង Edit CSS Styles របស់ Element នីមួយៗ
- Edit HTML/CSS បានបណ្តោះអាសន្ន (Refresh នឹងត្រឡាប់វិញ)
- Hover លើ Element → Highlight លើ Page

##### Console Tab — JavaScript Console
- រៀងដំណើរការ JavaScript ដោយផ្ទាល់
- មើល Error Messages របស់ JavaScript
- Debug ដោយប្រើ `console.log()`
- ចូលដៅ DOM — អាចគ្រប់គ្រង HTML Elements ដោយ JavaScript

##### Network Tab — Monitor Requests
- មើល HTTP Requests ទាំងអស់ដែល Browser ផ្ញើ
- មើល Status Codes (200 OK, 404 Not Found, 500 Error)
- មើល Loading Time របស់ Resource នីមួយៗ
- មើល File Sizes — សម្រាប់ Optimize

#### DevTools Tabs សង្ខេប

| Tab | មុខងារ | ប្រើសម្រាប់ |
|-----|--------|----------|
| **Elements** | Inspect/Edit HTML & CSS | Layout & Style |
| **Console** | Run JavaScript, See Errors | Debug & Test Code |
| **Network** | Monitor HTTP Requests | Performance & API Debug |
| **Sources** | JavaScript Source Files | Advanced Debugging |
| **Application** | Cookies, Storage, Cache | Storage Management |

---

### 5. File & Folder Structure

#### ហេតអ្វីត្រូវការ File Structure ល្អ?
- Code ត្រូវ **រៀបចំឱ្យមានរបៀបរបប** → ងាយស្វែងរក និងងាយកែ
- File Structure ល្អ → Project ងាយគ្រប់គ្រងបាន
- Developer ទាំងអស់ត្រូវដឹង File Structure Standard

```
Good Structure:               Bad Structure:
my-project/                   my-project/
+-- index.html                +-- index.html
+-- css/                      +-- style.css
|   +-- style.css             +-- about.html
+-- js/                       +-- script.js
|   +-- script.js             +-- photo1.jpg
+-- images/                   +-- photo2.jpg
|   +-- logo.png              +-- logo.png
+-- pages/                    +-- contact.html
    +-- about.html            +-- app.js
    +-- contact.html
```

#### Standard Web Project Structure

```
my-website/
+-- index.html              <-- Main Page (Homepage)
+-- css/
|   +-- style.css           <-- Main Stylesheet
+-- js/
|   +-- script.js           <-- Main JavaScript File
+-- images/
|   +-- logo.png
|   +-- hero.jpg
+-- pages/                  <-- Other HTML Pages (optional)
|   +-- about.html
|   +-- contact.html
+-- fonts/                  <-- Custom Fonts (optional)
    +-- custom-font.woff2
```

#### ច្បាប់ File Naming

| Rule | Good | Bad |
|------|------|-----|
| Lowercase | `style.css` | `Style.CSS` |
| No Spaces | `my-project` | `my project` |
| Use Hyphens | `about-us.html` | `about_us.html` |
| Descriptive | `hero-image.jpg` | `img1.jpg` |
| Correct Extension | `style.css` | `style.txt` |

---

### 6. បង្កើត Project "Hello World"

#### Step 1: បង្កើត Project Folder ដោយប្រើ Terminal

```bash
$ cd ~/Documents
$ mkdir hello-world
$ cd hello-world
$ mkdir css js images
$ touch index.html css/style.css js/script.js
$ ls
css/    images/    index.html    js/
```

#### Step 2: បើក Project ក្នុង VS Code

```bash
$ code .
# "." = បើក Folder បច្ចុប្បន្ន
```

#### Step 3: សរសេរ Code ក្នុង index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World - My First Website</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header>
      <h1>Hello World!</h1>
      <p>This is my first website!</p>
    </header>

    <main>
      <section>
        <h2>About Me</h2>
        <p>My name is <strong>[Your Name]</strong>. I am learning Web Development!</p>
      </section>

      <section>
        <h2>What I'm Learning</h2>
        <ul>
          <li>HTML - Structure</li>
          <li>CSS - Style</li>
          <li>JavaScript - Interactivity</li>
        </ul>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 My First Website. All rights reserved.</p>
    </footer>

    <script src="js/script.js"></script>
  </body>
</html>
```

##### ពន្យល់ Code:
```
<!DOCTYPE html>          ← ប្រាប់ Browser ថាជា HTML5
<html lang="en">         ← Root Element
<head>                   ← Meta Data, Title, CSS Link
<meta charset="UTF-8">   ← Support អក្សរគ្រប់យ៉ាង
<meta name="viewport">   ← Responsive សម្រាប់ Mobile
<title>                  ← Title បង្ហាញលើ Browser Tab
<link rel="stylesheet">  ← ភ្ជាប់ CSS File
<body>                   ← Content ដែលបង្ហាញ
<script src="">          ← ភ្ជាប់ JavaScript File
```

#### Step 4: សរសេរ CSS (css/style.css)

```css
/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  padding: 40px 0;
  background-color: #f0f8ff;
  border-radius: 10px;
  margin-bottom: 30px;
}

header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

header p {
  font-size: 1.2rem;
  color: #7f8c8d;
}

section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

section h2 {
  color: #2c3e50;
  margin-bottom: 15px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 5px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

ul li:last-child {
  border-bottom: none;
}

footer {
  text-align: center;
  padding: 20px 0;
  color: #999;
  font-size: 0.9rem;
  border-top: 1px solid #eee;
  margin-top: 30px;
}
```

#### Step 5: សរសេរ JavaScript (js/script.js)

```javascript
// My First JavaScript!
console.log("Hello World! My website is working!");

// Display current date and time
const now = new Date();
console.log("Current Date:", now.toLocaleDateString());
console.log("Current Time:", now.toLocaleTimeString());
```

#### Step 6: បើកដោយ Live Server

1. ចូល VS Code → បើក index.html
2. Right-click ក្នុង Editor → "Open with Live Server"
3. Browser នឹងបើកស្វ័យប្រវត្តិ: http://127.0.0.1:5500
4. មើល Website របស់អ្នក!
5. ចុច F12 បើក Console Tab
6. មើល "Hello World! My website is working!"

---

## 📊 សង្ខេប (Summary)

### Key Concepts

| Concept | Description |
|---------|-------------|
| VS Code | Code Editor ពេញនិយមបំផុតសម្រាប់ Developer |
| Extensions | Plugin បន្ថែម Feature ទៅ VS Code |
| Live Server | Auto-reload Browser ពេល Save |
| Prettier | Auto-format Code ឱ្យស្អាត |
| Terminal | គ្រប់គ្រងកុំព្យូទ័រដោយ Text Commands |
| DevTools | Chrome ឧបករណ៍សម្រាប់ Inspect & Debug |
| File Structure | រៀបចំ Files & Folders ក្នុង Project |

### Flow

```
mkdir project → cd project → mkdir css js images → touch files → code . → Start Coding!
```

---

## ✏️ លំហាត់ (Exercises)

### លំហាត់ទី 1: ដំឡើង VS Code + Extensions

1. Download និងដំឡើង VS Code
2. ដំឡើង Extensions: Live Server, Prettier, Auto Rename Tag, Auto Close Tag, HTML CSS Support
3. Setup "Format On Save"
4. Screenshot បង្ហាញលទ្ធផល

---

### លំហាត់ទី 2: Terminal Practice

អនុវត្ត Commands ខាងក្រោមក្នុង Terminal:

```bash
$ pwd                                          # បង្ហាញ Location
$ cd ~/Desktop                                 # ចូលទៅ Desktop
$ mkdir practice                               # បង្កើត Folder
$ cd practice                                  # ចូលចូលក្នុង
$ mkdir html css js                            # បង្កើត Folders
$ touch index.html html/about.html css/style.css js/app.js
$ ls                                           # បង្ហាញលទ្ធផល
$ cp index.html backup.html                    # Copy file
$ ls
$ rm backup.html                               # Delete file
$ ls
```

---

### លំហាត់ទី 3: បង្កើត Folder Structure

ប្រើ Terminal បង្កើត Folder Structure ខាងក្រោម:

```
my-portfolio/
+-- index.html
+-- css/
|   +-- style.css
+-- js/
|   +-- main.js
+-- images/
+-- pages/
    +-- about.html
    +-- contact.html
```

---

### លំហាត់ទី 4: បើក HTML File ដោយ Live Server

1. បើក `my-portfolio/index.html` ក្នុង VS Code
2. សរសេរ HTML: Title, `<h1>`, `<p>`, `<ul>` សម្រាប់ Skills
3. បើក Live Server មើលក្នុង Browser
4. បើក Chrome DevTools (F12):
   - **Elements Tab**: Inspect HTML Elements
   - **Console Tab**: សាកល្បង `console.log("Hello!")`
   - **Network Tab**: មើល Requests

---

## 🏠 ការងារផ្ទះ (Homework)

### Task 1: Shortcut Practice
អនុវត្ត VS Code Shortcuts ខាងក្រោម 10 ដង:
`Ctrl+S`, `Ctrl+P`, `Ctrl+Shift+P`, `` Ctrl+` ``, `Ctrl+/`, `Alt+Up/Down`, `Ctrl+D`, `Ctrl+Shift+F`, `Ctrl+Z`, `Ctrl+Shift+Z`

### Task 2: Terminal Exploration
1. បង្ហាញ Home Directory និង Folders ទាំងអស់ (`ls`)
2. បង្កើត Folder "terminal-practice" និង Sub-folders 5
3. បង្កើត File ក្នុង Sub-folder នីមួយៗ
4. Practice `cd`, `ls`, `pwd`, `mkdir`, `touch`, `rm`

### Task 3: DevTools Exploration
1. បើក Website មួយ (google.com)
2. បើក DevTools (F12)
3. **Elements Tab**: Edit Heading text និង Color
4. **Console Tab**: សាកល្បង `document.title` និង `alert("Hello!")`
5. **Network Tab**: Refresh page មើល Requests
6. Screenshot

---

## 📖 Resources

**Videos:**
- "Visual Studio Code Tutorial for Beginners" — Traversy Media (YouTube)
- "Command Line Crash Course" — freeCodeCamp (YouTube)
- "Chrome DevTools Tutorial" — Google Chrome Developers (YouTube)

**Articles:**
- VS Code Docs: https://code.visualstudio.com/docs
- MDN: "What are browser developer tools?"
- Command Line for Beginners — freeCodeCamp

---

## ❓ សំណូរឆែកចំណេហដឹង (Quiz)

1. Code Editor ជាអ្វី? ហេតអ្វីប្រើ VS Code?
2. Extension ជាអ្វី? ប្រាប់ Extensions 3 សម្រាប់ Web Development?
3. Live Server ដំណើរការយ៉ាងដូចម្តេច?
4. Prettier ជាអ្វី? របៀប Setup Format on Save?
5. Terminal ជាអ្វី? ហេតអ្វី Developer ប្រើ Terminal?
6. ពន្យល់មុខងារ: `pwd`, `ls`, `cd`, `mkdir`, `touch`, `rm`?
7. Absolute Path និង Relative Path ខុសគ្នាយ៉ាងដូចម្តេច?
8. Chrome DevTools ជាអ្វី? ពន្យល់ Elements, Console, Network Tab?
9. ហេតអ្វី File Structure សំខាន់? ប្រាប់ 3 ច្បាប់?
10. ក្នុង Web Project index.html សំខាន់យ៉ាងដូចម្តេច?

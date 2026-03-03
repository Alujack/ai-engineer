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

##### `cd` — Change Directory (ផ្លាស់ទី Location)

```bash
$ cd Documents          # ចូលទៅ Folder មួorg org org org
$ cd ..                 # org org org org org org org org 1 Level
$ cd ~                  # org org org org org org org org org org Home Directory
$ cd /Users/student     # org org org org org org org org org org Full Path
```

```
🚶 cd ដorg org org org org org org org org org org org org org org org org org org org org org org org org org org:
   cd Documents = ដorg org org org org org org org org org org org org Documents
   cd ..        = org org org org org org org org org org org org org org org org org org org
   cd ~         = org org org org org org org org org org org org org (Home)
```

##### `mkdir` — Make Directory (បorg org org org org org org Folder org org org org)

```bash
$ mkdir my-project              # បorg org org org org org org org Folder org org org org org
$ mkdir css js images           # org org org org org org org org Folder org org org org org org org org org org org org org org org org org
$ mkdir -p project/css/parts    # org org org org org Nested Folders
```

##### `touch` — បorg org org org org org org File org org org org (macOS/Linux)

```bash
$ touch index.html                           # org org org org org org org org File org org org org org
$ touch index.html style.css script.js       # org org org org org org org org Files org org org org org org org org org org org org org org org org org org

# Windows (PowerShell):
$ New-Item index.html
```

##### `rm` — Remove (org org org)

```bash
# សorg org org org org org org org org org org org org! rm org org org org org org org org org org org org org org org org org org org (org org org org org org org org Recycle Bin)!

$ rm unwanted-file.txt         # org org File org org org
$ rmdir empty-folder           # org org Folder org org org org
$ rm -r old-project            # org org Folder org org Content org org org org org org org org org
```

##### `cp` — Copy (org org org org)

```bash
$ cp index.html backup.html           # org org org File
$ cp style.css css/style.css          # org org org File org org Folder org org org org
$ cp -r my-project my-project-backup  # org org org Folder org org org org org org org org
```

##### `mv` — Move / Rename (org org org org org org org org org org org org org org org)

```bash
$ mv style.css css/                    # org org org org File org org Folder org org org org
$ mv old-name.html new-name.html      # org org org org org org org File
```

##### `clear` — org org org org org Terminal Screen

```bash
$ clear
# Shortcut: Ctrl+L
```

#### org org org org Commands

| Command | មorg org org org | org org org org org org org org |
|---------|--------|---------|
| `pwd` | បorg org org org Location បorg org org org org org org | `pwd` |
| `ls` | បorg org org org Files & Folders | `ls`, `ls -la` |
| `cd` | org org org org org Location | `cd Documents`, `cd ..` |
| `mkdir` | org org org org Folder | `mkdir my-project` |
| `touch` | org org org org File | `touch index.html` |
| `rm` | org org org org org File | `rm file.txt` |
| `rm -r` | org org org org org Folder | `rm -r folder` |
| `cp` | org org org org org org org File/Folder | `cp a.txt b.txt` |
| `mv` | org org org org org org org org/org org org org org org org org org org org org org | `mv old.txt new.txt` |
| `clear` | org org org org org org org org org Screen | `clear` |

#### Path (Absolute vs Relative)

```
Absolute Path:
/Users/student/Documents/my-project/index.html
→ org org org org org org org org Root (/)
→ org org org org org org org org org org Location org org org org org org org org org org org org org org org org org org org org org org org org org org org org org org

Relative Path:
./index.html         = File org org org org Folder org org org org org org org org org
../style.css         = File org org org Folder org org org org org org org
images/photo.jpg     = org org org Folder "images" org org org org org org org org org org org org
```

---

### 4. Chrome DevTools

#### Chrome DevTools ជorg org org org org org?
- Chrome DevTools ជorg org org **org org org org org org org org org org org org org org org org org org org org org org org** org org org org org Chrome Browser
- org org org org org org org Inspect HTML, CSS, JavaScript, Network Requests org org org org org org org
- Developer org org org org org org org org org DevTools org org org org org org org org org org org org org Debug, Test org org org org org org org org org org org org org org org org org org

#### org org org org org org org org org org DevTools

1. **Keyboard Shortcut:** F12 (Windows/Linux) org org org Cmd+Option+I (macOS)
2. **Right-click:** Right-click org org org org org org Element → "Inspect"
3. **Menu:** Chrome Menu → More Tools → Developer Tools

#### Tabs org org org org org org org org DevTools

##### Elements Tab — Inspect HTML & CSS
- org org org org org org org org HTML Structure org org org org org org Web Page
- org org org org org org org org org CSS Styles org org org org org org org org org org Element
- Edit HTML/CSS org org org org org org org org org org org org org (Refresh org org org org org org org org org org org org org org org)
- Hover org org org org org Element → Highlight org org org org org Page

##### Console Tab — JavaScript Console
- org org org org org org org org org org org JavaScript org org org org org org org org org org org org org org
- org org org org org Error Messages org org org JavaScript org org org org org org org org org org org org org org
- Debug org org org org org org org org org org — org org org `console.log()`
- org org org org org org org org org DOM — org org org org org org HTML Elements org org org JavaScript

##### Network Tab — Monitor Requests
- org org org org org org org HTTP Requests org org org org org org org org org org Browser org org org org org org org org org
- org org org org org Status Codes (200 OK, 404 Not Found, 500 Error)
- org org org org org Loading Time org org org org org org Resource org org org org org org org
- org org org org org File Sizes — org org org org org org org org Optimize

#### DevTools Tabs org org org org org org org org org

| Tab | មorg org org org org org | org org org org org org org org org org org |
|-----|--------|----------|
| **Elements** | Inspect/Edit HTML & CSS | Layout & Style |
| **Console** | Run JavaScript, See Errors | Debug & Test Code |
| **Network** | Monitor HTTP Requests | Performance & API Debug |
| **Sources** | JavaScript Source Files | Advanced Debugging |
| **Application** | Cookies, Storage, Cache | Storage Management |

---

### 5. File & Folder Structure

#### org org org org org org org File Structure org org org org org org org org?
- Code org org org **org org org org org org org org org org org org** → org org org org org org org org org org org org org org org org org org
- File Structure org org org org org org → Project org org org org org org org org org org org org org org org
- Developer org org org org org org org org org org org org org File Structure Standard org org org org org org org org

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

#### org org org org org org org org org File Naming

| Rule | Good | Bad |
|------|------|-----|
| Lowercase | `style.css` | `Style.CSS` |
| No Spaces | `my-project` | `my project` |
| Use Hyphens | `about-us.html` | `about_us.html` |
| Descriptive | `hero-image.jpg` | `img1.jpg` |
| Correct Extension | `style.css` | `style.txt` |

---

### 6. បorg org org org org org org org Project "Hello World"

#### Step 1: org org org org org org org Project Folder org org org org org Terminal

```bash
$ cd ~/Documents
$ mkdir hello-world
$ cd hello-world
$ mkdir css js images
$ touch index.html css/style.css js/script.js
$ ls
css/    images/    index.html    js/
```

#### Step 2: org org org org org Project org org org org VS Code

```bash
$ code .
# "." = org org org org org org org org Folder org org org org org org org org org org org
```

#### Step 3: org org org org org org org org org index.html

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

##### org org org org org org org org org Code:
```
<!DOCTYPE html>          ← org org org org org org org Browser org org org org org org org HTML5
<html lang="en">         ← Root Element org org org org org org org org org org org org org org org
<head>                   ← Meta Data, Title, CSS Link
<meta charset="UTF-8">   ← Support org org org org org org org org org org org org org
<meta name="viewport">   ← Responsive org org org Mobile
<title>                  ← Title org org org org org org org Browser Tab
<link rel="stylesheet">  ← org org org org org org CSS File
<body>                   ← Content org org org org org org org org org org org org org org org org org org
<script src="">          ← org org org org org org JavaScript File
```

#### Step 4: org org org org org org org CSS (css/style.css)

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

#### Step 5: សorg org org org org org org org JavaScript (js/script.js)

```javascript
// My First JavaScript!
console.log("Hello World! My website is working!");

// Display current date and time
const now = new Date();
console.log("Current Date:", now.toLocaleDateString());
console.log("Current Time:", now.toLocaleTimeString());
```

#### Step 6: org org org org org org org org org org Live Server

1. org org org org VS Code → org org org org org index.html
2. Right-click org org org Editor → "Open with Live Server"
3. Browser org org org org org org org org org org org: http://127.0.0.1:5500
4. org org org org org org Website org org org org org org org org org!
5. org org org F12 org org org org org Console Tab
6. org org org org org org "Hello World! My website is working!"

---

## 📊 org org org org org org (Summary)

### Key Concepts

| Concept | Description |
|---------|-------------|
| VS Code | Code Editor ពorg org org org org org org org org org org org org org org org org org org |
| Extensions | Plugin org org org org org org org Feature org org org org VS Code |
| Live Server | Auto-reload Browser org org org Save |
| Prettier | Auto-format Code org org org org org org org org org org org |
| Terminal | org org org org org org org org org org org org org org Text Commands |
| DevTools | Chrome org org org org org org org org org org Inspect & Debug |
| File Structure | org org org org org org org org org org Files & Folders org org org Project |

### Flow

```
mkdir project → cd project → mkdir css js images → touch files → code . → Start Coding!
```

---

## ✏org org org org org org org org (Exercises)

### org org org org org org org 1: org org org org org org VS Code + Extensions

1. Download org org org org org org org VS Code
2. org org org org org org org Extensions: Live Server, Prettier, Auto Rename Tag, Auto Close Tag, HTML CSS Support
3. Setup "Format On Save"
4. Screenshot org org org org org org org

---

### org org org org org org org 2: Terminal Practice

org org org org Commands org org org org org org org org org org org Terminal:

```bash
$ pwd                                          # org org org org org org Location
$ cd ~/Desktop                                 # org org org org org org Desktop
$ mkdir practice                               # org org org org org org Folder
$ cd practice                                  # org org org org org org org org org org
$ mkdir html css js                            # org org org org org org Folders
$ touch index.html html/about.html css/style.css js/app.js
$ ls                                           # org org org org org org org org org org org org org
$ cp index.html backup.html                    # Copy file
$ ls
$ rm backup.html                               # Delete file
$ ls
```

---

### org org org org org org org 3: org org org org org org Folder Structure

org org org org Terminal org org org org org org Folder Structure org org org org org org org:

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

### org org org org org org org 4: org org org org HTML File org org org org org org Live Server

1. org org org `my-portfolio/index.html` org org org VS Code
2. org org org HTML: Title, `<h1>`, `<p>`, `<ul>` org org org Skills
3. org org org Live Server org org org org Browser
4. org org org Chrome DevTools (F12):
   - **Elements Tab**: Inspect HTML Elements
   - **Console Tab**: org org org `console.log("Hello!")`
   - **Network Tab**: org org org Requests

---

## 🏠 org org org org org org org org org (Homework)

### Task 1: Shortcut Practice
org org org org org VS Code Shortcuts org org org org org org org 10 org org org org:
`Ctrl+S`, `Ctrl+P`, `Ctrl+Shift+P`, `` Ctrl+` ``, `Ctrl+/`, `Alt+Up/Down`, `Ctrl+D`, `Ctrl+Shift+F`, `Ctrl+Z`, `Ctrl+Shift+Z`

### Task 2: Terminal Exploration
1. org org org org org org Home Directory org org org org org org org Folders (`ls`)
2. org org org org org org Folder "terminal-practice" org org org org org Sub-folders 5 org org org org org org
3. org org org org org org File org org org org org org org org org org Sub-folder
4. Practice `cd`, `ls`, `pwd`, `mkdir`, `touch`, `rm`

### Task 3: DevTools Exploration
1. org org org org org Website org org org org org org org org org (google.com)
2. org org org org org DevTools (F12)
3. **Elements Tab**: Edit Heading text org org org Color
4. **Console Tab**: org org org org org `document.title` org org org `alert("Hello!")`
5. **Network Tab**: Refresh page org org org org org org Requests
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

## ❓ org org org org org org org org org org org org org org org org org org org (Quiz)

1. Code Editor ជorg org org org org org org org? org org org org org org org org org org VS Code?
2. Extension ជorg org org org org org org org? org org org Extensions 3 org org org org org org org org org org org org Web Development?
3. Live Server org org org org org org org org org org org org org org org?
4. Prettier org org org org org org org org org org? របorg org org org org org org org org Format on Save?
5. Terminal ជorg org org org org org org org? org org org org org org org org org org org Developer org org org Terminal?
6. org org org org org org org org org org org org org org `pwd`, `ls`, `cd`, `mkdir`, `touch`, `rm`?
7. Absolute Path org org org org Relative Path org org org org org org org org org org org org org org org?
8. Chrome DevTools ជorg org org org org org org org org? org org org org org org org org org Elements, Console, Network Tab?
9. org org org org org org org org File Structure org org org org org org org org org org? org org org org org org org org 3 org org org org org org org org?
10. org org org org org Web Project org org org org org org org org org org org org org org org index.html org org org org org org org org org org org?

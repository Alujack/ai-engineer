# Lesson 3: HTML មូលដ្ឋាន

> **Part:** 1 — មូលដ្ឋាន (Beginner)
> **រយៈពេល:** 2-3 ម៉ោង
> **កម្រិត:** បានរៀន Lesson 2 រួច (Prerequisites: Lesson 2)

---

## 🎯 គោលបំណង (Learning Objectives)

បន្ទាប់ពីរៀន Lesson នេះចប់ សិស្សនឹងអាច៖
1. យល់ដឹងពី HTML Document Structure
2. ប្រើ HTML Tags មូលដ្ឋានដើម្បីបង្កើតមាតិកា
3. បង្កើត Web Page ដែលមាន Headings, Text, Links, Images, Lists
4. ប្រើ Div & Span ដើម្បីរៀបចំ Layout
5. សរសេរ HTML Comments ត្រឹមត្រូវ

---

## 📚 មាតិកាលម្អិត (Detailed Content)

---

### 1. HTML ជាអ្វី?

**HTML** មានន័យថា **HyperText Markup Language**។

- HTML **មិនមែន** Programming Language ទេ — វាជា **Markup Language**
- HTML ប្រើ **Tags** ដើម្បី "mark up" ឬ ដាក់ស្លាកអត្ថបទ ដើម្បីប្រាប់ Browser ថាអ្វីដែលនឹងបង្ហាញ
- Browser (Chrome, Firefox) អាន HTML ហើយបង្ហាញជា Webpage

**譬如:**
```
"Hello World"         ← Plain text, Browser មិនដឹងថានឹងបង្ហាញយ៉ាងណា
<h1>Hello World</h1>  ← HTML tag, Browser ដឹងថា "Hello World" ជា Title ធំ
```

---

### 2. HTML Document Structure

HTML document ស្ដង់ដារមានរចនាសម្ព័ន្ធដូចខាងក្រោម:

```html
<!DOCTYPE html>
<html lang="km">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ឈ្មោះ Page</title>
  </head>
  <body>
    <!-- មាតិកានៅទីនេះ -->
    <h1>ស្វាគមន៍!</h1>
  </body>
</html>
```

#### ពន្យល់ Tag និមួយៗ:

| Tag | ន័យ |
|-----|-----|
| `<!DOCTYPE html>` | ប្រាប់ Browser ថានេះជា HTML5 document |
| `<html lang="km">` | ចាប់ផ្ដើម HTML document, `lang` ប្រាប់ភាសា |
| `<head>` | ផ្ទុក Metadata — ព័ត៌មានដែល Browser ត្រូវការ ប៉ុន្តែ User មើលមិនឃើញ |
| `<meta charset="UTF-8">` | ប្រាប់ Browser ឱ្យប្រើ Character Encoding UTF-8 (ទ្រទ្រង់ភាសាខ្មែរ) |
| `<meta name="viewport">` | ធ្វើឱ្យ Page Responsive នៅលើ Mobile |
| `<title>` | ឈ្មោះ Page ដែលបង្ហាញលើ Browser Tab |
| `<body>` | ផ្ទុក**មាតិការទាំងអស់**ដែល User មើលឃើញ |

> **💡 សំណួរ:** Browser Tab ដែលចេញជា "Google" ឬ "Facebook" — ចេញមកពី Tag អ្វី?
> **ចម្លើយ:** `<title>` Tag!

---

### 3. HTML Tags — របៀបប្រើ

**Tag** ភាគច្រើនមាន 2 ផ្នែក:
```html
<tagname>   ← Opening Tag (ចាប់ផ្ដើម)
</tagname>  ← Closing Tag (បញ្ចប់)
```

**Self-closing Tags** — Tags ខ្លះមិនត្រូវការ Closing Tag:
```html
<img src="photo.jpg" alt="Photo">
<br>
<hr>
<meta charset="UTF-8">
```

**Attributes** — ព័ត៌មានបន្ថែមនៅក្នុង Tag:
```html
<a href="https://google.com">ចូល Google</a>
   ^^^^ ^^^^^^^^^^^^^^^^^^
   ឈ្មោះ Attribute  Value
```

---

### 4. Headings — ចំណងជើង

HTML មាន Heading 6 កម្រិត ពី `<h1>` (ធំបំផុត) ដល់ `<h6>` (តូចបំផុត):

```html
<h1>ចំណងជើងធំបំផុត (Page Title)</h1>
<h2>ចំណងជើងផ្នែក (Section Title)</h2>
<h3>ចំណងជើងអនុផ្នែក (Subsection)</h3>
<h4>ចំណងជើងកម្រិត 4</h4>
<h5>ចំណងជើងកម្រិត 5</h5>
<h6>ចំណងជើងតូចបំផុត</h6>
```

> **⚠️ ល្អប្រើ:**
> - `<h1>` — ប្រើ **1 ដង** ក្នុងម្ដង Page (ជា Main Title)
> - `<h2>` — ចំណងជើងរបស់ Section ចំបង
> - `<h3>` — ចំណងជើង Sub-section
> - **កុំ** លោត h1 → h3 ដោយមិនប្រើ h2 (ខូច SEO & Accessibility)

---

### 5. Paragraphs & Text Formatting

#### Paragraph
```html
<p>នេះជាកថាខ័ណ្ឌទី 1។ អ្នកអាចសរសេរអត្ថបទវែងបានតាមចិត្ត។</p>
<p>នេះជាកថាខ័ណ្ឌទី 2។ Browser នឹងដាក់ Space ចន្លោះ Paragraph ដោយស្វ័យប្រវត្តិ។</p>
```

#### Text Formatting Tags
```html
<strong>អត្ថបទ Bold — សំខាន់</strong>
<em>អត្ថបទ Italic — សង្កត់អត្ថន័យ</em>
<u>អត្ថបទ Underline</u>
<s>អត្ថបទ Strikethrough</s>
<small>អត្ថបទតូច</small>
<mark>អត្ថបទ Highlight</mark>
<code>console.log("Code")</code>
```

#### Line Break
```html
<p>
  បន្ទាត់ទី 1<br>
  បន្ទាត់ទី 2<br>
  បន្ទាត់ទី 3
</p>
```

> **💡 ចំណាំ:** `<br>` ប្រើដើម្បីចុះបន្ទាត់ក្នុង Paragraph ជាញឹកញាប់ — ប៉ុន្តែ **កុំ** ប្រើ `<br>` ច្រើនជ្រុលដើម្បីបង្កើត Space — ប្រើ CSS margin/padding វិញ

#### Horizontal Rule
```html
<hr>  <!-- បន្ទាត់ផ្តេក — ដំណើរការជា Separator -->
```

---

### 6. Links — តំណ

**`<a>` tag** (Anchor) ប្រើដើម្បីបង្កើត Link:

```html
<!-- Link ទៅ Website ខាងក្រៅ -->
<a href="https://google.com">ចូល Google</a>

<!-- Link ទៅ Page ផ្សេង -->
<a href="about.html">អំពីយើង</a>

<!-- Link ទៅ Section ក្នុង Page តែមួយ (Anchor Link) -->
<a href="#contact">ទំនាក់ទំនង</a>
<section id="contact">...</section>

<!-- Link ផ្ញើ Email -->
<a href="mailto:hello@example.com">ផ្ញើ Email</a>

<!-- Link ទូរស័ព្ទ -->
<a href="tel:+85512345678">ហៅទូរស័ព្ទ</a>

<!-- Link បើកនៅ Tab ថ្មី -->
<a href="https://google.com" target="_blank">បើកនៅ Tab ថ្មី</a>
```

#### Attributes សំខាន់:
| Attribute | ន័យ |
|-----------|-----|
| `href` | URL ឬ Path ដែល Link ទៅ |
| `target="_blank"` | បើកនៅ Tab ថ្មី |
| `target="_self"` | បើកនៅ Tab ដដែល (Default) |

---

### 7. Images — រូបភាព

```html
<img src="photo.jpg" alt="រូបថតរបស់ខ្ញុំ">
```

#### Attributes:
| Attribute | ន័យ |
|-----------|-----|
| `src` | Path ឬ URL នៃរូបភាព |
| `alt` | អត្ថបទ Alternative — បង្ហាញពេល Image Load មិនឡើង, ចាំបាច់សម្រាប់ Accessibility |
| `width` | ទទឹងរបស់ Image (px ឬ %) |
| `height` | កម្ពស់របស់ Image |

```html
<!-- Image ពី Folder ដូចគ្នា -->
<img src="photo.jpg" alt="Profile Photo" width="200">

<!-- Image ពី Subfolder -->
<img src="images/banner.jpg" alt="Banner">

<!-- Image ពី Internet -->
<img src="https://example.com/photo.jpg" alt="Online Image">

<!-- Image ជា Link -->
<a href="about.html">
  <img src="logo.png" alt="Logo">
</a>
```

> **💡 Tips:**
> - **តែងតែ** ដាក់ `alt` attribute — ចាំបាច់សម្រាប់ SEO & Accessibility
> - ប្រើ `width` & `height` ប្រសើរជាងទុកឱ្យ Image ល្មមដើម (ការពារ Layout Shift)

---

### 8. Lists — បញ្ជី

#### Unordered List (បញ្ជីគ្មានលេខ)
```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```
លទ្ធផល:
- HTML
- CSS
- JavaScript

#### Ordered List (បញ្ជីមានលេខ)
```html
<ol>
  <li>ចូលទៅ Website</li>
  <li>ចុច Register</li>
  <li>បំពេញ Form</li>
  <li>ចុច Submit</li>
</ol>
```
លទ្ធផល:
1. ចូលទៅ Website
2. ចុច Register
3. បំពេញ Form
4. ចុច Submit

#### Nested List (List ក្នុង List)
```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </li>
</ul>
```

#### Description List
```html
<dl>
  <dt>HTML</dt>
  <dd>ភាសាដែលប្រើបង្កើតរចនាសម្ព័ន្ធ Webpage</dd>

  <dt>CSS</dt>
  <dd>ភាសាដែលប្រើ Style Webpage</dd>
</dl>
```

---

### 9. Div & Span

`<div>` និង `<span>` គឺជា **Generic Container Tags** — Tags ដែលគ្មានអត្ថន័យពិសេស ប្រើសម្រាប់រៀបចំ Layout និង Style ជាមួយ CSS។

#### `<div>` — Block Container
- **Block-level element**: ចាប់ Line ថ្មី, ពង្រីក Width ពេញ
- ប្រើដើម្បី **Group** Elements ជា Section ឬ ផ្នែក

```html
<div class="card">
  <h2>ឈ្មោះផលិតផល</h2>
  <p>ការពិពណ៌នា...</p>
  <a href="#">ទិញឥឡូវ</a>
</div>

<div class="card">
  <h2>ផលិតផលទី 2</h2>
  <p>ការពិពណ៌នា...</p>
  <a href="#">ទិញឥឡូវ</a>
</div>
```

#### `<span>` — Inline Container
- **Inline element**: មិនចាប់ Line ថ្មី, ពង្រីករៀបតែ Content
- ប្រើដើម្បី Style **ផ្នែកតូចៗ** ក្នុងអត្ថបទ

```html
<p>
  តម្លៃ: <span class="price">$25</span> ក្នុង 1 ខែ
</p>

<p>
  នេះជា <span style="color: red;">ពាក្យពណ៌ក្រហម</span> ក្នុងប្រយោគ
</p>
```

#### ភាពខុសគ្នា:
| | `<div>` | `<span>` |
|-|---------|----------|
| ប្រភេទ | Block | Inline |
| ប្រើ | Group Sections | Style ផ្នែកអត្ថបទ |
| ចាប់ Line ថ្មី | ✅ | ❌ |

---

### 10. HTML Comments

Comments ជាអត្ថបទពន្យល់ Code ដែល **Browser មើលមិនឃើញ**:

```html
<!-- នេះជា Comment មួយ Line -->

<!--
  នេះជា Comment
  ច្រើន Lines
  ប្រើដើម្បីពន្យល់ Section ធំ
-->

<header>
  <!-- Navigation Menu -->
  <nav>...</nav>
</header>

<!-- TODO: បន្ថែម Footer -->
<!-- <div>Code ដែល Disable ជាបណ្ដោះអាសន្ន</div> -->
```

> **💡 ហេតុអ្វីប្រើ Comments?**
> - ពន្យល់ Code ឱ្យ Developer ផ្សេង (ឬខ្លួនឯងពេលអនាគត)
> - Disable Code បណ្ដោះអាសន្ន
> - Organize Code ជា Section

---

### 11. HTML Entities (តួអក្សរពិសេស)

តួអក្សរខ្លះ HTML ប្រើជា Tag — ដូច្នេះត្រូវ Escape:

```html
<!-- ខុស: Browser ច្រឡំថានេះជា Tag -->
<p>5 < 10 and 10 > 5</p>

<!-- ត្រូវ: ប្រើ HTML Entities -->
<p>5 &lt; 10 and 10 &gt; 5</p>
```

| Character | Entity |
|-----------|--------|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |
| `"` | `&quot;` |
| ` ` (Space) | `&nbsp;` |
| `©` | `&copy;` |

---

## 💻 Code សំរាប់ Demo

```html
<!DOCTYPE html>
<html lang="km">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>អំពីខ្ញុំ</title>
  </head>
  <body>

    <!-- Header Section -->
    <div>
      <h1>សួស្ដី! ខ្ញុំឈ្មោះ សុខ វិចិត្រ</h1>
      <img src="profile.jpg" alt="Profile Photo" width="150">
    </div>

    <!-- About Section -->
    <div>
      <h2>អំពីខ្ញុំ</h2>
      <p>
        ខ្ញុំជា <strong>Web Developer</strong> ចាប់ផ្ដើមថ្មី។
        ខ្ញុំស្រឡាញ់ Technology និង <em>Design</em>។
      </p>
    </div>

    <!-- Skills Section -->
    <div>
      <h2>ជំនាញ</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript (រៀន)</li>
      </ul>
    </div>

    <!-- Steps Section -->
    <div>
      <h2>គោលដៅ</h2>
      <ol>
        <li>រៀន HTML & CSS</li>
        <li>រៀន JavaScript</li>
        <li>បង្កើត Project ដំបូង</li>
        <li>រក Job ជា Developer</li>
      </ol>
    </div>

    <!-- Contact Section -->
    <div>
      <h2>ទំនាក់ទំនង</h2>
      <p>Email: <a href="mailto:vichit@example.com">vichit@example.com</a></p>
      <p>
        ស្វែងរកខ្ញុំ:
        <a href="https://github.com" target="_blank">GitHub</a>
      </p>
    </div>

  </body>
</html>
```

---

## 🏋️ លំហាត់ (Exercise)

### លំហាត់ 1: "About Me" Page

បង្កើត File `about.html` ដែលមាន:
- [ ] `<!DOCTYPE html>` Structure ត្រឹមត្រូវ
- [ ] `<h1>` — ឈ្មោះអ្នក
- [ ] `<img>` — រូបភាពអ្នក (ឬ placeholder)
- [ ] `<p>` — ពន្យល់ខ្លួនឯង ប្រើ `<strong>` & `<em>`
- [ ] `<ul>` — List ជំនាញ ឬ Hobbies
- [ ] `<ol>` — List ជំហានដែលអ្នកចង់ធ្វើ (Goals)
- [ ] `<a href="mailto:...">` — ទំនាក់ទំនង

### លំហាត់ 2: Link ចន្លោះ 2 Pages

1. បង្កើត `index.html` — Home Page
   - ដាក់ Link ទៅ `about.html`
2. នៅ `about.html` ដែលអ្នកបានបង្កើតហើយ
   - ដាក់ Link Back ទៅ `index.html`
3. ទាំងពីរ Pages ត្រូវ Link ទៅគ្នា ហើយបើកតាម Live Server

### លំហាត់ 3: Bonus — Profile Card

ប្រើ `<div>` & `<span>` បង្កើត Profile Card មួយ:
```
┌─────────────────────────┐
│  [Photo]                │
│  ឈ្មោះ: សុខ វិចិត្រ         │
│  អាយុ: 20 ឆ្នាំ           │
│  ជំនាញ: HTML, CSS        │
└─────────────────────────┘
```

---

## 🧠 ចំណុចសំខាន់ (Key Takeaways)

1. **HTML** ជា Markup Language ប្រើ Tags ដើម្បីរៀបចំ Content
2. HTML Document ចាប់ផ្ដើមដោយ `<!DOCTYPE html>` ហើយមាន `<head>` & `<body>`
3. `<head>` = Metadata, `<body>` = Content ដែល User មើលឃើញ
4. Tags ភាគច្រើនមី Opening & Closing (`<p>...</p>`) ខ្លះ Self-closing (`<img>`, `<br>`)
5. Attributes ដូចជា `href`, `src`, `alt` ផ្ដល់ព័ត៌មានបន្ថែម
6. `<div>` (Block) & `<span>` (Inline) ជា Generic Containers
7. Comments (`<!-- -->`) ជួយ Document Code

---

## 🔗 ធនធានបន្ថែម (Resources)

- [MDN HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [HTML Validator](https://validator.w3.org/) — ពិនិត្យ HTML Code ថាត្រូវ Standard

---

> **Lesson បន្ទាប់:** Lesson 4 — HTML Forms & Semantic HTML

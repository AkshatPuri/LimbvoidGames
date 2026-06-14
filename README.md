# Limbvoid Games Portfolio

A premium, responsive matrix-inspired bento grid portfolio website showcasing games, tools, and graphics prototypes.

🔗 **Live Portfolio Site**: [akshatpuri.github.io/LimbvoidGames/](https://akshatpuri.github.io/LimbvoidGames/)

---

## 🚀 Key Features

*   **Matrix-Inspired Bento Grid**: Responsive layout combining a retro-futuristic hacker aesthetic with modern glassmorphism, terminal carets, and subtle glow animations.
*   **Dynamic Tech Stack Filtering**: Instantly filters portfolio cards by C++, C#, Tools, or Games. Perfect for recruiters seeking specific engineering skillsets.
*   **Interactive Project Details**: Hover effects on work cards featuring smooth transformations and interactive badges.
*   **Theme Integration**: Supports responsive dark/light/arcade mode design palettes.

---

## 🛠️ Project Architecture

```
LimbvoidGames/
├── index.html                 # Portfolio main page
├── css/
│   └── style.css              # Core typography, animations, and theme layout stylesheet
├── javascript/
│   └── script.js              # Bento grid filtering and animations logic
├── tools/
│   └── add_project_card.py    # Class-based Tkinter GUI card builder utility
├── img/                       # Project screenshots and image assets
├── gifs/                      # Shipped game/tool gameplay GIF previews
└── AkshatPuriResume.pdf       # Integrated engineering resume
```

---

## 🎴 Portfolio Card Builder GUI

The project includes an interactive Python-based desktop application inside `tools/` that lets you construct, test, and safely delete project cards from `index.html` without manually editing code markup.

### Running the Builder

Ensure Python 3 is installed on your system, then launch the app:

```bash
py tools/add_project_card.py
```

### Key Tool Features

*   **Instant Form Validation**: Guides you with real-time field validation to prevent inserting incomplete cards.
*   **Intelligent Platform Inference**: Automatically determines the link icon (e.g. Itch.io, Steam, Google Play, App Store, Nintendo Switch, Xbox, GitHub) by parsing your entered project URL.
*   **Visual Dry-run Testing**: Adds a temporary card with the `[DRY-RUN]` label into your HTML layout so you can check alignments and hover scales before saving.
*   **One-Click Card Deletion**: Lists all active cards inside a dropdown, allowing you to select and permanently remove any project card.
*   **Descriptive Field Tooltips**: Displays format examples on hover to guide input styling.

---

## 💻 Tech Stack & Credits

*   **Web Core**: Semantic HTML5, Vanilla CSS3 (Custom properties, transitions, and filters), Vanilla ES6 JavaScript.
*   **Typography**: Inter (Google Fonts) and JetBrains Mono for system terminals.
*   **Icons**: Font Awesome (Brands & Solid packages).
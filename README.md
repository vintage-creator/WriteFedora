
# WriteFedora – Fedora Documentation Helper for VS Code and Open VSX Editors

**Enhance your Fedora documentation workflow with templates, snippets, linting, and previews — in VS Code, VSCodium, Gitpod, and other Open VSX-compatible editors.**

## Features

- 📝 **Predefined Templates** — Access up to 7 starter templates for Fedora Docs.
- ⚡ **AsciiDoc Snippets** — Boost your writing speed with handy AsciiDoc completions.
- 🟣 **Vale Linting** — Enforce Fedora's Documentation Style automatically.
- 🖼️ **Preview Support** — Preview AsciiDoc documents right inside VS Code.
- 🎨 **Syntax Highlighting** — Clear and easy-to-read syntax while writing.
- ⏱️ **Snippets Completion** — Just type `f` to trigger helpful completions.


## Requirements

- **VS Code** `1.54.0` or later
- **Vale** (style linter)
    ```bash
    brew install vale
    ```
- **Asciidoctor** (for document previews)
    ```bash
    brew install asciidoctor
    ```


## Installation

1. Open **VS Code**.
2. Go to **Extensions** (`Ctrl+Shift+X` or `Cmd+Shift+X` on Mac).
3. Search for `WriteFedora`.
4. Click **Install**.

Or install via CLI:
```bash
code --install-extension writefedora
```


## ⚡ Usage

### Access WriteFedora Toolkit

Once installed, locate the WriteFedora icon in the **Activity Bar** on the left-hand side of your VS Code window.
Click it to reveal the toolkit panel.

### Generate a Fedora Docs Template

1. Press `Ctrl+Shift+P` (`Cmd+Shift+P` on Mac).
2. Select `WriteFedora: Generate Fedora Docs Template`.
3. Choose your desired template.

### Snippets Cheat Sheet

When you type `f` in an `.adoc` file, the following completions are available:

| Snippet | Description |
|---------|-------------|
| `fcode` | Insert a code block |
| `fcodeinline` | Insert inline code |
| `ftable` | Insert a table |
| `ftableheader` | Insert a table header |
| `fnote` | Insert a "Note" admonition |
| `ftip` | Insert a "Tip" admonition |
| `fimportant` | Insert an "Important" admonition |
| `fwarn` | Insert a "Warning" admonition |
| `fanchor` | Insert an anchor link |
| `flink` | Insert a hyperlink |
| `fimage` | Insert an image |
| `fordered` | Create an ordered list |
| `funordered` | Create an unordered list |
| `fblockquote` | Insert a blockquote |


## 💡 Recommended Workflow

1. Write using snippets and templates.
2. Use the preview to see your document live.
3. Let Vale lint your document automatically.
4. Focus on writing. Let WriteFedora handle the rest!


## 👥 Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for setup, development, commit guidelines, and pull request instructions.


## License

MIT License — See [LICENSE](LICENSE) for details.


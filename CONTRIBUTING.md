# Contributing to WriteFedora

Thank you for considering contributing to WriteFedora! Contributions are highly appreciated and help make this extension better for everyone.

---

## Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 🛠️ Fix existing issues
- 📝 Improve documentation
- 💙 Spread the word

---

## Setup Instructions

1. Fork the repository.
2. Clone your fork:
   ```bash
   git clone https://github.com/vintage-creator/WriteFedora
   cd WriteFedora
   ```

---

## Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

Make your changes.

---

## 🧑‍💻 Development Notes

- Recommended editor: **VS Code**

- Vale is required for style linting:

```bash
brew install vale
```

- Asciidoctor is recommended for previews:

```bash
brew install asciidoctor
```

- Snippets are only triggered inside `.adoc` files.

- Follow Fedora Documentation Style whenever applicable.

---

## ✅ Commit Message Guidelines

| Type      | Description                                 |
|-----------|---------------------------------------------|
| feat      | New feature                                 |
| fix       | Bug fix                                     |
| docs      | Documentation changes                       |
| chore     | Maintenance / build tasks                   |
| refactor  | Code refactoring without feature change     |

### Example commit messages:

```pgsql
feat: add snippet for Fedora warning admonitions
fix: correct typo in Vale rule description
docs: update README with installation steps
```

---

## ✅ Submitting a Pull Request

1. Push your branch:

```bash
git push origin feature/your-feature-name
```

2. Open a Pull Request (PR) on GitHub.
3. Use a clear and descriptive title.
4. Link related issues if available.
5. Mark as draft if the PR is not yet ready for review.

---

## 🧪 Before You Submit

- ✅ Check that the extension still loads correctly.
- ✅ Run Vale locally (`vale .`) and resolve linting errors.
- ✅ Test new snippets and templates inside VS Code.
- ✅ Update documentation if you added or changed features.

---

## 💙 Thank You!

By contributing, you help improve the Fedora documentation experience for everyone.


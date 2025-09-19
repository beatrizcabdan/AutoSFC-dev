# [AutoSFC](https://www.autosfc.org/)

AutoSFC (Auto Space Filling Curve) is a web-based demo showcasing research activities around the use of **Space-Filling Curves (SFCs)** for encoding and reducing the dimensionality of automotive data. While the primary focus is on automotive applications, the approach can be extended to other types of data.

---

## 🚀 Features

**Encoding demo**
- Displays original signal plots alongside encoded signal blocks.
- Demonstrates how multidimensional signals are transformed into a one-dimensional signal.
- Built with reusable UI components (TypeScript, React, Material UI).

**Characteristic Stripe Pattern Comparison (CSP) Demo**
- Upload two different files for comparison.
- View the Characteristic Stripe Pattern.
- Apply/reset transformations.
- Adjust ranges displayed.
- Experiment with different dimensionality reduction algorithms and parameters.

**Previous work**
- Includes cards linking to relevant publications from the team and external sources.

---

## 🛠️ Tech

**[TypeScript](https://www.typescriptlang.org/)**
Provides strong typing, class-based structure, and robust tooling for building complex UI components.

**[React](https://react.dev/)**
Library for building fast, interactive user interfaces.

**[Material UI](https://mui.com/)**
Modern UI framework with reusable components. Features like drag & drop are directly integrated to speed up development.

**Deployment & CI/CD**
- GitHub Actions automatically check, build, and deploy the app to **GitHub Pages** whenever changes are pushed to the `main` branch.
- Dependencies are managed through `package.json`.

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/beatrizcabdan/AutoSFC.git
cd AutoSFC
npm install
````

---

## ▶️ Usage

Run the development server locally:

```bash
npm start
```

Build the project for production:

```bash
npm run build
```

The production-ready build will be output to the `build/` directory.

  * Access the deployed version on GitHub Pages after pushing changes to `main`. 
  * GitHub Actions automatically deploy changes to GitHub Pages whenever commits are merged into `main`.

---

## 📚 Contributing

This project supports ongoing research into dimensionality reduction using Space-Filling Curves.
For more information, see the included research papers section on the website for references and related publications.
  * You can also check: [PCICF: A Pedestrian Crossing Identification and Classification Framework](https://github.com/Claud1234/PCICF)

Contributions are welcome! Please fork the repository and create a pull request with your proposed changes.

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

Anton J Olsson

Beatriz Cabrero-Daniel

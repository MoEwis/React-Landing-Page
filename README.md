# 🚀 EdgeAI – React + TypeScript + Vite

This project provides a clean and modern setup using **React**, **TypeScript**, and **Vite**. It includes Hot Module Replacement (HMR), ESLint configuration, and integrates with powerful tools like Zustand for state management and Tailwind CSS for UI styling.

---

## 🔍 Project Preview

![Preview](./assets/preview.png)

---

## 🛠️ Tech Stack

- ⚛️ **React**
- 💨 **Tailwind CSS**
- ⚡ **Vite**
- 🟦 **TypeScript**
- 🧠 **Zustand**

---

## 🧩 Features

- ✅ Fast Refresh with SWC or Babel
- ✅ ESLint configuration for production-ready apps
- ✅ Scalable file structure
- ✅ Customizable state management with Zustand
- ✅ Beautiful and responsive UI with Tailwind CSS

---

## 🔧 ESLint: Expanding Configuration

For a more robust setup in production, update your ESLint config to enable type-aware rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})

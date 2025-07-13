# Vanilla‑Router

A lightweight, dependency‑free client‑side router for modern web apps written in TypeScript and JavaScript.

## 🚀 Features

- **Zero dependencies**: Pure JavaScript, no frameworks required  
- **Dynamic route parameters**: Route definitions like `/todo/:id`  
- **Route guards** with `onBeforeRoute` support  
- **Error handling** via `onRouteFail`  
- **History API support** with proper URL and browser back/forward  
- **Default NotFound route** using wildcard (`*`) patterns  

---

## 📦 Installation

You can directly clone the repo or include the file in your project.

```bash
git clone https://github.com/SamuelBajracharya/Vanilla-Router.git
```

---

## 🔧 Usage

### 1. Define your routes

```js
const routes = [
  { path: '/', component: () => '<h1>Home</h1>' },
  { path: '/about', component: () => '<h1>About</h1>' },
  { path: '/user/:id', component: (params) => \`<h1>User ID: \${params.id}</h1>\` },
  { path: '*', component: () => '<h1>404 - Not Found</h1>' },
];
```

### 2. Initialize the Router

```js
const appRoot = document.getElementById('app');
const router = new Router(routes, appRoot);
```

### 3. Navigate Programmatically

```js
router.to('/user/123');
```

### 4. Create Navigational Links

```js
const link = document.createElement('a');
link.href = '/about';
link.textContent = 'Go to About';
link.addEventListener('click', (e) => {
  e.preventDefault();
  router.to('/about');
});
document.body.appendChild(link);
```

---

## 🧠 API Reference

### `new Router(routes, rootElement)`

- `routes`: Array of route definitions  
- `rootElement`: DOM element where components render  

### Router Methods

- `to(path, state?)`: Navigates to given route  
- `onBeforeRoute`: Guard function to allow/block navigation  
- `onRouteFail`: Callback when guard fails or error occurs  

---

## ✅ How to Run

```bash
npm install
npm run dev
```

Or simply open `index.html` in your browser.

---

## 📄 License

MIT © 2025 Samuel Bajracharya

---

## 📝 Contributing

Pull requests and issues are welcome.

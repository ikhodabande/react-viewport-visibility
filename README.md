
# React Viewport Visibility

A tiny and flexible React hook and component to detect when an element enters or leaves the viewport using the Intersection Observer API.

## ✨ Features

- Lightweight and dependency-free
- Built with TypeScript
- Supports `once`, `threshold`, and `rootMargin`
- Easy to use as a hook or component

## 📦 Installation

```bash
npm install react-viewport-visibility
```

or with Yarn:

```bash
yarn add react-viewport-visibility
```

## 🚀 Usage

### Hook Example

```tsx
import React, { useRef } from 'react';
import { useVisibility } from 'react-viewport-visibility';

function MyComponent() {
  const ref = useRef(null);
  const { isVisible } = useVisibility(ref, { threshold: 0.5 });

  return (
    <div ref={ref}>
      {isVisible ? 'Visible' : 'Not Visible'}
    </div>
  );
}
```

### Component Example

```tsx
import React, { useState } from 'react';
import { VisibilitySensor } from 'react-viewport-visibility';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <VisibilitySensor onVisibilityChange={setVisible} threshold={0.5}>
      <div style={{ height: 200, background: visible ? 'green' : 'red' }}>
        {visible ? 'I am visible!' : 'Scroll to reveal me'}
      </div>
    </VisibilitySensor>
  );
}
```

## 📚 API

### useVisibility(ref, options?)

- `ref`: A React ref pointing to a DOM element
- `options`: `{ threshold?: number, once?: boolean, rootMargin?: string }`

Returns:
```ts
{
  isVisible: boolean,
  ratio: number
}
```

### VisibilitySensor Props

| Prop                | Type                                  | Description                            |
|---------------------|---------------------------------------|----------------------------------------|
| `threshold`         | `number`                              | Visibility ratio (default: `0.1`)      |
| `once`              | `boolean`                             | Stop observing after first visibility  |
| `rootMargin`        | `string`                              | Margin around root (default: `"0px"`)  |
| `onVisibilityChange`| `(visible: boolean) => void`          | Callback when visibility changes       |
| `children`          | `React.ReactNode`                     | Children to render                     |

## 🛠 Development

```bash
npm install
npm run build
```

## 📝 License

MIT © 2025 Amir Mohammad Khodabande

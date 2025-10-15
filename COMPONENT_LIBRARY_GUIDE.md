# 🎨 Gibli Component Library

A modern, accessible, and beautifully animated React component library built with TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, professional components with smooth animations
- **Accessibility**: Built with accessibility in mind using proper ARIA attributes
- **TypeScript**: Full TypeScript support with comprehensive type definitions
- **Customizable**: Easy to customize with Tailwind CSS classes
- **Animation**: Smooth animations powered by Framer Motion
- **Responsive**: Mobile-first design that works on all screen sizes

## 🚀 Quick Start

### Installation

The component library is already set up in your project. Simply import the components you need:

```tsx
import { Button, Input, Card, Modal } from '../src/components';
```

### Basic Usage

```tsx
import { Button, Card, CardContent } from '../src/components';

function MyComponent() {
  return (
    <Card>
      <CardContent>
        <Button variant="primary" size="lg">
          Click me!
        </Button>
      </CardContent>
    </Card>
  );
}
```

## 📦 Components

### Foundation Components

#### Button
A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '../src/components';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With icons
<Button leftIcon={<UserIcon />}>With Icon</Button>
<Button isLoading>Loading...</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `isLoading`: boolean
- `leftIcon`: React.ReactNode
- `rightIcon`: React.ReactNode

#### Input
A form input component with validation states and icons.

```tsx
import { Input } from '../src/components';

<Input 
  label="Email" 
  placeholder="Enter your email"
  leftIcon={<MailIcon />}
  error="Invalid email"
  helperText="We'll never share your email"
/>
```

**Props:**
- `label`: string
- `error`: string
- `helperText`: string
- `leftIcon`: React.ReactNode
- `rightIcon`: React.ReactNode

#### Card
A container component for grouping related content.

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../src/components';

<Card variant="elevated" hover>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Interactive Components

#### Modal
A modal dialog component with backdrop and animations.

```tsx
import { Modal, Button } from '../src/components';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
        <div className="p-6">
          <h3>Modal Title</h3>
          <p>Modal content</p>
        </div>
      </Modal>
    </>
  );
}
```

**Props:**
- `isOpen`: boolean
- `onClose`: () => void
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `closeOnOverlayClick`: boolean
- `showCloseButton`: boolean

#### Tooltip
A tooltip component that appears on hover.

```tsx
import { Tooltip, Button } from '../src/components';

<Tooltip content="This is a helpful tooltip" position="top">
  <Button>Hover me</Button>
</Tooltip>
```

### Advanced Components

#### AnimatedCard
A 3D tilt card with customizable glow effects.

```tsx
import { AnimatedCard } from '../src/components';

<AnimatedCard intensity={20} glowColor="#10b981">
  <h3>3D Card</h3>
  <p>Hover to see the effect!</p>
</AnimatedCard>
```

#### LoadingSpinner
Various loading spinner animations.

```tsx
import { LoadingSpinner } from '../src/components';

<LoadingSpinner variant="spinner" size="lg" />
<LoadingSpinner variant="dots" size="md" />
<LoadingSpinner variant="pulse" size="sm" />
<LoadingSpinner variant="wave" size="xl" />
```

## 🎨 Customization

### Theme Colors
All components use Tailwind CSS classes, making it easy to customize colors:

```tsx
// Custom button with different colors
<Button className="bg-purple-600 hover:bg-purple-700">
  Custom Button
</Button>
```

### Animations
Components use Framer Motion for animations. You can customize animations by passing motion props:

```tsx
import { motion } from 'framer-motion';

<Button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Animated Button
</Button>
```

## 📁 File Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Tooltip.tsx
│   │   ├── AnimatedCard.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── index.ts
│   └── index.ts
└── utils/
    └── cn.ts
```

## 🛠 Development

### Adding New Components

1. Create a new component file in `src/components/ui/`
2. Export the component and its types from `src/components/ui/index.ts`
3. Update the main `src/components/index.ts` file
4. Add the component to the demo page in `app/page.tsx`

### Best Practices

1. **Use TypeScript**: Always define proper interfaces for props
2. **Accessibility**: Include proper ARIA attributes and keyboard navigation
3. **Consistency**: Follow the existing naming conventions and patterns
4. **Documentation**: Document all props and provide usage examples
5. **Testing**: Test components in different states and scenarios

## 🎯 Future Enhancements

- [ ] Add more form components (Select, Checkbox, Radio)
- [ ] Create layout components (Grid, Stack, Container)
- [ ] Add data display components (Table, List, Badge)
- [ ] Implement theme switching
- [ ] Add more animation variants
- [ ] Create 3D components using Three.js
- [ ] Add comprehensive test suite
- [ ] Set up Storybook for component development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

# 🎨 UI Components

> Коллекция переиспользуемых UI компонентов на базе **shadcn/ui** в архитектуре **FSD**

## 📁 Структура

```
src/shared/ui/
├── button.tsx          # Кнопка с различными вариантами
├── index.ts           # Централизованный экспорт
└── README.md          # Документация
```

## 🚀 Использование

### Импорт компонентов

```tsx
import { Button } from '@shared/ui'
```

### Примеры использования

```tsx
// Варианты кнопки
<Button>По умолчанию</Button>
<Button variant="outline">Контурная</Button>
<Button variant="secondary">Вторичная</Button>
<Button variant="destructive">Опасная</Button>
<Button variant="ghost">Призрачная</Button>
<Button variant="link">Ссылка</Button>

// Размеры
<Button size="sm">Маленькая</Button>
<Button size="default">Обычная</Button>
<Button size="lg">Большая</Button>
<Button size="icon">Иконка</Button>

// Состояния
<Button disabled>Отключена</Button>
<Button loading>Загрузка...</Button>
```

## ➕ Добавление новых компонентов

```bash
# Установка нового компонента
npx shadcn@latest add [component-name]

# Примеры
npx shadcn@latest add input
npx shadcn@latest add card
npx shadcn@latest add dialog
```

> **Примечание:** Компоненты автоматически создаются в `src/shared/ui/` благодаря настройке в `components.json`

## 🔗 Алиасы

| Алиас               | Описание                 |
| ------------------- | ------------------------ |
| `@shared/ui`        | UI компоненты            |
| `@shared/lib/utils` | Утилиты (cn, clsx, etc.) |
| `@shared/lib/hooks` | Кастомные React хуки     |

## 🎯 Принципы

- **Консистентность** — единый стиль всех компонентов
- **Переиспользование** — компоненты для всей системы
- **Типизация** — полная поддержка TypeScript
- **Доступность** — соответствие стандартам a11y

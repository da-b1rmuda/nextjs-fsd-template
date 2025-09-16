# 🚀 Next.js App Router + FSD Starter Template

Это стартовый шаблон для быстрого создания современного **Next.js** приложения с использованием **App Router** и архитектуры **Feature-Sliced Design (FSD)**.

## 🚀 Технологии

| Технология                | Описание                       |
| ------------------------- | ------------------------------ |
| **Next.js 15**            | React фреймворк с App Router   |
| **React 19**              | UI библиотека                  |
| **TypeScript**            | Статическая типизация          |
| **Tailwind CSS v4**       | Utility-first CSS фреймворк    |
| **shadcn/ui**             | Переиспользуемые UI компоненты |
| **Feature-Sliced Design** | Архитектурная методология      |
| **Biome**                 | Линтер и форматтер кода        |
| **Turbopack**             | Быстрая сборка и dev сервер    |

## 🛠 Быстрый старт

```bash
# Клонирование репозитория
git clone https://github.com/da-b1rmuda/nextjs-fsd-template
cd nextjs-fsd-template

# Установка зависимостей
pnpm install

# Запуск dev сервера
pnpm dev
```

## 📝 Доступные команды

| Команда       | Описание                       |
| ------------- | ------------------------------ |
| `pnpm dev`    | Запуск dev сервера с Turbopack |
| `pnpm build`  | Сборка для production          |
| `pnpm start`  | Запуск production сервера      |
| `pnpm lint`   | Проверка кода с Biome          |
| `pnpm format` | Форматирование кода            |

## 📁 Структура проекта

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Глобальные стили
│   ├── layout.tsx         # Корневой layout
│   └── page.tsx           # Главная страница
├── pages/                  # ⚠️ Пустая папка (требуется для совместимости)
├── src/
│   ├── entities/          # Бизнес-сущности
│   ├── features/          # Use-case функциональности
│   ├── shared/            # Общие ресурсы
│   │   ├── ui/            # UI компоненты (shadcn/ui)
│   │   └── lib/           # Утилиты и хуки
│   ├── widgets/           # Составные UI блоки
│   └── pages/             # FSD-страницы (не Next.js routes!)
├── public/                # Статические файлы
└── components.json        # Конфигурация shadcn/ui
```

> **⚠️ Важно:** Папка `pages/` должна существовать для совместимости с FSD tooling, но остается пустой при использовании App Router.

## ⚡ Алиасы TypeScript

```json
{
	"paths": {
		"@/*": ["./*"],
		"@app/*": ["app/*"],
		"@src/*": ["src/*"],
		"@entities/*": ["src/entities/*"],
		"@features/*": ["src/features/*"],
		"@shared/*": ["src/shared/*"],
		"@pages/*": ["src/pages/*"],
		"@widgets/*": ["src/widgets/*"]
	}
}
```

### Примеры использования

```tsx
import { Button } from '@shared/ui'
import { userModel } from '@entities/user'
import { authForm } from '@features/auth'
import { Header } from '@widgets/header'
```

## 🎨 UI компоненты

### Добавление новых компонентов

```bash
# Установка компонента shadcn/ui
npx shadcn@latest add [component-name]

# Примеры
npx shadcn@latest add input
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Компоненты автоматически создаются в `src/shared/ui/` благодаря настройке в `components.json`.

## 📚 Документация

- [Feature-Sliced Design](https://feature-sliced.design/) - Архитектурная методология
- [shadcn/ui](https://ui.shadcn.com/) - UI компоненты
- [Tailwind CSS](https://tailwindcss.com/) - CSS фреймворк
- [Next.js](https://nextjs.org/) - React фреймворк

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature ветку
3. Внесите изменения
4. Создайте Pull Request

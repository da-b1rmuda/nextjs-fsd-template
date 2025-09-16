import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	// Оптимизация для production
	compress: true,
	poweredByHeader: false,

	// Настройки изображений
	images: {
		formats: ['image/webp', 'image/avif'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},

	// Настройки экспериментальных функций
	experimental: {
		optimizePackageImports: ['lucide-react'],
	},

	// Настройки webpack
	webpack: (config, { dev, isServer }) => {
		// Оптимизация для production
		if (!dev && !isServer) {
			config.optimization.splitChunks = {
				chunks: 'all',
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			}
		}

		return config
	},
}

export default nextConfig

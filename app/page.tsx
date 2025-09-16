import Image from 'next/image'

export default function Home() {
	return (
		<main className='h-screen w-screen flex justify-center items-center bg-background'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='text-4xl font-bold text-foreground mb-8'>
					shadcn/ui + Tailwind v4 + FSD
				</h1>
				<Image src='/start.jpg' alt='start' width={200} height={200} />
			</div>
		</main>
	)
}

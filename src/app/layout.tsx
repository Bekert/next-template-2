import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme'
import QueryProvider from '@/components/QueryProvider'

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto'
})

export const metadata: Metadata = {
	title: 'Next template',
	description: 'Next template'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={roboto.variable}>
				<QueryProvider>
					<ThemeProvider theme={theme}>
						<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
					</ThemeProvider>
				</QueryProvider>
			</body>
		</html>
	)
}

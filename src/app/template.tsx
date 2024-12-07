import { Box, Typography } from '@mui/material'
import Link from 'next/link'

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Box component={'header'} display={'flex'} alignItems={'flex-end'} gap={5}>
				<Typography variant='h1'>Next template</Typography>
				<Link href='/'>
					<Typography variant='h2' color='primary'>
						Home
					</Typography>
				</Link>
				<Link href='/posts'>
					<Typography variant='h2' color='primary'>
						Posts
					</Typography>
				</Link>
			</Box>
			<Box component={'main'}>{children}</Box>
		</>
	)
}

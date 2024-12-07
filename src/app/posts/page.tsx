import { Typography } from '@mui/material'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import PostsList from './components/PostsList'
import { getPosts } from '@/api'

export default async function Posts() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({ queryKey: ['posts'], queryFn: getPosts })

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Typography variant='h3'>Posts page</Typography>
			<PostsList />
		</HydrationBoundary>
	)
}

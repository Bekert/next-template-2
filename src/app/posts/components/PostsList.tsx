'use client'

import { getPosts } from '@/api'
import { Box, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'

export default function PostsList() {
	const { data } = useQuery({ queryKey: ['posts'], queryFn: () => getPosts() })

	return (
		<Box>
			{data?.map(post => (
				<Box key={post.id}>
					<Typography>
						Post #{post.id}: {post.title}
					</Typography>
				</Box>
			))}
		</Box>
	)
}

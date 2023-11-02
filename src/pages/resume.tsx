'use client'
import { Link } from '@chakra-ui/next-js'

export default function Page() {
  return (
    <Link href='/resume' color='red.400' _hover={{ color: 'red.500' }}>
      CV
    </Link>
  )
}

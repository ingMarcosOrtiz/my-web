import React from 'react'

export function ContainerHome({ children }: { children: React.ReactNode }) {
  return (
    <main className='max-w-screen-lg mx-auto my-4  border-primary	border rounded-md'>
      {children}
    </main>
  )
}

{
  /* <Box
      component={'main'}
      // width={'95%'}
      maxWidth={'1024px'}
      m={{ sx: '0', md: '24px auto' }}
      //   p={'24px'}
      // border={{ xs: '', md: '1px solid ' }}
      borderColor='divider'
      minHeight={'80vh'}
      bgcolor={'background.surface'}
      borderRadius={'lg'}>
      {children}
    </Box> */
}

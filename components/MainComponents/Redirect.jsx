import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const Redirect = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000);
    }, [router]);
  return (
    <div className='text-gray-400 font-light'>Перенаправление на главную...</div>
  )
}

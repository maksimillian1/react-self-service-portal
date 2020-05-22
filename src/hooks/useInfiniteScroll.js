import { useEffect } from "react"

export const useInfiniteScroll = (onScroll) => {
    useEffect(() => {
        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);
    }, [onScroll])
}
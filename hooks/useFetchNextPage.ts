import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';
import { useEffect } from 'react';

const useFetchNextPage = (
  hasNextPage: boolean | undefined,
  callBack: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<any, unknown>>,
) => {
  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await callBack();
        fetching = false;
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [callBack, hasNextPage]);
};

export default useFetchNextPage;

import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { dehydrate, QueryClient } from 'react-query';

const Todo: FC = (): JSX.Element => {
  return <div>TODO PAGE</div>;
};

export default Todo;

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

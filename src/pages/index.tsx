import * as React from 'react';
import { PageWrapper } from 'src/components/PageWrapper';
import { TeamLayout } from 'src/contents/team/TeamLayout';
import '../../src/styles/tailwind.output.css';

const IndexPage = () => {
  return (
    <PageWrapper>
      <TeamLayout />
    </PageWrapper>
  )
}

export default IndexPage

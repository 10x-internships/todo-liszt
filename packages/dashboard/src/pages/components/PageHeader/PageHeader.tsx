import { Heading, HeadingVariants, TypoTags } from "@todo-liszt/common";

import * as Styled from "./components";

interface PageHeaderProps {
  title: string;
  children?: React.ReactNode;
}

const PageHeader = ({ title, children }: PageHeaderProps) => {
  return (
    <Styled.PageHeader>
      <Heading as={TypoTags.H1} variant={HeadingVariants.Headline2}>
        {title}
      </Heading>

      <Styled.PageHeaderContent>{children}</Styled.PageHeaderContent>
    </Styled.PageHeader>
  );
};

export default PageHeader;

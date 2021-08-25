import { Heading, HeadingVariants, TypoTags } from "@todo-liszt/common";

import * as Styled from "./components";

interface SceneHeaderProps {
  title: string;
  children?: React.ReactNode;
}

const SceneHeader = ({ title, children }: SceneHeaderProps) => {
  return (
    <Styled.SceneHeader>
      <Heading as={TypoTags.H1} variant={HeadingVariants.Headline2}>
        {title}
      </Heading>

      <Styled.SceneHeaderContent>{children}</Styled.SceneHeaderContent>
    </Styled.SceneHeader>
  );
};

export default SceneHeader;

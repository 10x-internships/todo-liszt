import { Text, TextVariants, TypoTags } from "@todo-liszt/common";

import * as Styled from "./components";

const ListEmpty = () => {
  return (
    <Styled.ListEmpty>
      <img
        src="/assets/images/list-empty.png"
        alt="Water color"
        width={360}
        height={360}
      />
      <Text as={TypoTags.P} variant={TextVariants.Body1} isBold>
        Enjoy your day off
      </Text>
    </Styled.ListEmpty>
  );
};

export default ListEmpty;

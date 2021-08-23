import * as Styled from "./components";
import { SearchBoxProps } from "./types";
import { Text, TextVariants, TypoTags } from "../Typography";
import { Search as SearchIcon } from "../Icons";

const SearchBox = ({ label, id, ...others }: SearchBoxProps) => {
  return (
    <>
      {label && (
        <Styled.SearchLabel htmlFor={id}>
          <Text as={TypoTags.Span} variant={TextVariants.Hairline2}>
            {label}
          </Text>
        </Styled.SearchLabel>
      )}

      <Styled.SearchGroup>
        <Styled.SearchInput type="text" id={id} {...others} />

        <Styled.SearchButton type="submit">
          <SearchIcon />
        </Styled.SearchButton>
      </Styled.SearchGroup>
    </>
  );
};

export default SearchBox;

import React from 'react';
import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';

const DocsContainer = ({ children, context }: { children: React.ReactNode; context: any }) => {
  const dark = useDarkMode();

  return (
    <BaseContainer
      context={{
        ...context,
        parameters: {
          ...context.parameters,
          docs: {
            ...context.parameters.docs,
            theme: dark ? themes.dark : themes.light,
          },
        },
      }}
    >
      {children}
    </BaseContainer>
  );
};

export default DocsContainer;

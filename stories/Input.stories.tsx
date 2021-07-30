import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input, InputIcon } from '../components/Input';
import { Eye } from '../components/Icons';
import Wrapper from './Wrapper';

export default {
  title: 'Input/Text Field',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default = () => {
  return (
    <Wrapper>
      <div>
        <Input label="First name" placeholder="Your first name" id="firstName" />
      </div>
      <div>
        <Input label="Error" placeholder="Error state" isError id="error" />
      </div>
      <div>
        <Input
          label="Error with message"
          placeholder="Error state with message"
          isError
          message="Invalid email"
          id="errorMessage"
        />
      </div>
      <div>
        <Input
          label="Valid"
          placeholder="Valid state"
          defaultValue="abc@gmail.com"
          isSuccess
          id="valid"
        />
      </div>
      <div>
        <Input
          label="Valid with message"
          placeholder="Valid state with message"
          defaultValue="abc@gmail.com"
          isSuccess
          message="Good email"
          id="validMessage"
        />
      </div>
    </Wrapper>
  );
};

export const WithIcon = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Input
      label="Password"
      placeholder="Your password"
      type={showPassword ? 'text' : 'password'}
      id="password"
      inputIcon={
        <InputIcon onClick={() => setShowPassword(!showPassword)}>
          <Eye />
        </InputIcon>
      }
    />
  );
};

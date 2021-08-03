export type ToastTypes = {
  id?: string | number;
  message: string;
  state: 'error' | 'success';
  isCloseable?: true;
};

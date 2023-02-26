export interface FormErrors {
  required: string;
}

export const useFormError = () => {
  const getValidateMessages = (): FormErrors => ({
    required: 'Field is required',
  });

  return { getValidateMessages };
};

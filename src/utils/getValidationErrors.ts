import { ValidationError } from 'yup';

interface ErrorResponse {
  [key: string]: string;
}

const getValidationErrors = (errors: ValidationError): ErrorResponse => {
  const validationErrors: ErrorResponse = {};

  errors.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
};

export default getValidationErrors;

export type EnvConfig = {
  HTTPSERVER: number;
};

export type CustomError = {
  statusCode: number;
  data: null;
  message: string;
  errors: any;
  success: boolean;
  stack: string;
};

export type ErrorMap = {
  field: String;
  message: String;
};

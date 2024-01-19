class ApiError extends Error {
  // Data Members
  public statusCode: number;
  public data: null;
  public message: string;
  public errors: any = [];
  public success: boolean;
  public stack: string;

  // Constructor
  constructor(statusCode: number, message: string = "Error", stack: string) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    if (stack) this.stack = stack;
    else Error.captureStackTrace(this, this.constructor);
  }
}

export { ApiError };

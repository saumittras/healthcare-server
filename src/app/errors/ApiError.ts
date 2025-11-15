class ApiError extends Error {
  ststusCode: number;
  constructor(statusCode: number, message: string | undefined, stack = "") {
    super(message);
    this.ststusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;

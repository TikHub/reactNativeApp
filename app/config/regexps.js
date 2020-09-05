const regexps = {
  securePassword: {
    pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    error:
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
  },
};

export default regexps;

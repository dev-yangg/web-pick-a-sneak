const authCommons = [
  {
    type: "email",
    label: "email",
    name: "email",
    placeholder: "you@example.com",
  },
  { type: "password", label: "password", name: "password" },
];
const loginContent = {
  headline: "Welcome Back",
  subheadline: "Log in to access your account, orders, and exclusive drops.",
  form: [...authCommons],
};

const registerContent = {
  headline: "Create Account",
  subheadline: "Join and get access to drops, offers, and more",
  form: [
    {
      type: "text",
      label: "full name",
      name: "full-name",
      placeholder: "John Doe",
    },
    ...authCommons,
    { type: "password", label: "confirm password", name: "confirm-password" },
  ],
};

export { loginContent, registerContent };

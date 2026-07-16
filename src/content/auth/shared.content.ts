const authCommons = [
  { type: "email", label: "email" },
  { type: "password", label: "password" },
];
const loginContent = {
  headline: "Welcome Back",
  subheadline: "Log in to access your account, orders, and exclusive drops.",
  form: [...authCommons],
};

const registerContent = {
  headline: "Create Account",
  subheadline: "Join Pick a Sneak and get access to drops, offers, and more",
  form: [
    { type: "text", label: "Full Name" },
    ...authCommons,
    { type: "password", label: "Confirm Password" },
  ],
};

export { loginContent, registerContent };

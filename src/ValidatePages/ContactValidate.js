 export default function ContactValidate(name, email, message) {
  if (!name || !email || !message) {
    return "All fields are required.";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email address.";
  }
  return null;
}

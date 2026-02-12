/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  var cnt = 0 ;
  // check the length
  if (password === "" || typeof password !== "string") {
    return "weak";
  }
  if (password.length >= 8){
    cnt += 1;
  }
  // check for special chars
  function hasSpecial(){
    return /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password);
  }
  if (hasSpecial()) {
    cnt += 1 ;
  }
  // check for numbers
  if (/[0-9]/.test(password)) {
    cnt += 1;
  }
  // check for upper case and lower case alphabets

  if (/[a-z]/.test(password)) {
    cnt += 1;
  }
  if (/[A-Z]/.test(password)) {
    cnt += 1;
  }

  if (cnt <= 1){
    return "weak";
  }
  else if (cnt <= 3){
    return "medium";
  }
  else if (cnt <= 4){
    return "strong";
  }
  else if (cnt == 5){
    return "very strong";
  }
  else{
    return "weak";
  }
}

/**
 * Password validator for login pages
 */
import value from '@/assets/scss/themes-vars.module.scss';

// has number
const hasNumber = (password: string): boolean => new RegExp(/[0-9]/).test(password);

// has mix of small and capitals
const hasMixed = (password: string): boolean =>
    new RegExp(/[a-z]/).test(password) && new RegExp(/[A-Z]/).test(password);

// has special chars
const hasSpecial = (password: string): boolean => new RegExp(/[!#@$%^&*)(+=._-]/).test(password);

// set color based on password strength
export const strengthColor = (count: number): { label: string; color: string } => {
    if (count < 2) return { label: 'Poor', color: value.errorMain };
    if (count < 3) return { label: 'Weak', color: value.warningDark };
    if (count < 4) return { label: 'Normal', color: value.orangeMain };
    if (count < 5) return { label: 'Good', color: value.successMain };
    if (count < 6) return { label: 'Strong', color: value.successDark };
    return { label: 'Poor', color: value.errorMain };
};

// password strength indicator
export const strengthIndicator = (password: string): number => {
    let strengths = 0;
    if (password.length > 5) strengths += 1;
    if (password.length > 7) strengths += 1;
    if (hasNumber(password)) strengths += 1;
    if (hasSpecial(password)) strengths += 1;
    if (hasMixed(password)) strengths += 1;
    return strengths;
};

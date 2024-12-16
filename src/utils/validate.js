export const validateEmail = (email) => {
    if (!email) {
        return 'Email is required'
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        return "Invalid email format.";
    }

    return true
}

export const validatePassword = (password) => {
    if (!password) {
        return "Password is required"
    }

    if (password.length <= 8) {
        return "Password length should be greater than 8"
    }

    return true

}

export const validateName = (name) => {
    if (!name.trim()) {
        return 'Name is required'
    }

    if (name.length < 3) {
        return 'Name should not be less than 3 characters'
    }

    return true
}

export const validatePhone = (phone) => {
    if (!phone.trim()) {
        return 'Phone is required'
    }
}



export const validateDates = (date) => {
    if (!date) {
        return 'Select date'
    }

    return true
}
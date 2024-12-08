function signup(userName) {
    const users = ["Alice", "Bob", "Charlie"]; // Predefined usernames

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

// Example usage
console.log(signup("Alice")); // User Already Registered, Please Login
console.log(signup("David")); // Signup Successful, Please Login

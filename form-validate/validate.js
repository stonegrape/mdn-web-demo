function validateForename(field) {
    if (field == "") {
        return "No Forename was enter.\n"
    } else {
        return "";
    }
}
function validateUsername(field) {
    if (field == "") {
        return "No Surname was enter.\n"
    } else if (/[^a-zA-Z0-9_-]/.test(field)) {
        return "Only a-z, A-Z, 0-9, - and _ allowed in Username";
    } else {
        return "";
    }
}
function validatePassword(field) {
    if (field == "") {
        return "No Password was enter.\n"
    } else if (field.length < 6) {
        return "password lenght must be at least 6 characters.\n";
    } else if (!/[a-z]/.test(field) || !/[A-Z]/.test(field) || !/[0-9]/.test(field)) {
        return "Passwords requires one each of a-z, A-Z and 0-9.\n";
    } else {
        return "";
    }
}
function validateEmail(field) {
    if (field == "") {
        return "No Email was enter.\n"
    } else if (!(field.indexOf(".") > 0) && (field.indexOf("@") > 0) || /^a-zA-Z0-9.@_-/.test(field)) {
        return "The Email address is invalid."
    } else {
        return "";
    }
}


exports.VEmailValidationFunc = (input) => {
    var isValid = input ? input.trim() !== ""
    && /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input)
        : false
    return isValid;
}


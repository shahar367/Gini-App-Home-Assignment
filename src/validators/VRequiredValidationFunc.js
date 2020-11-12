exports.VRequiredValidationFunc = (input) => {
    var isValid = input ? input.trim() !== "" : false;
    return isValid;
}
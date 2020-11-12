exports.VPhoneNumberValidationFunc = (input) => {
    console.log(input)
    var isValid = input ?  input.trim() !== "" && /^\d+$/.test(input) && input.length === 10 : false;
    return isValid;
}
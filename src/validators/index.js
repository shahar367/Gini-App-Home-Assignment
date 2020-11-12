
var validators = [];

module.exports = {
    InvokeValidation: (type, input) => {
        return validators[`${type}`](input)
    },

    createValidator: (type, func) => {
        validators[`${type}`] = func;
    },
}
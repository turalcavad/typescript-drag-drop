export function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null &&
        typeof validatableInput.minLength === "string") {
        isValid = isValid && validatableInput.value > validatableInput.minLength;
    }
    if (validatableInput.maxLength != null &&
        typeof validatableInput.maxLength === "string") {
        isValid = isValid && validatableInput.value < validatableInput.maxLength;
    }
    if (validatableInput.min != null &&
        typeof validatableInput.min === "number") {
        isValid = isValid && validatableInput.value > validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.max === "number") {
        isValid = isValid && validatableInput.value < validatableInput.max;
    }
    return isValid;
}
//# sourceMappingURL=validation.js.map
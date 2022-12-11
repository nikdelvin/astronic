// @ts-check
/**
 * @function formValidation Validate a form
 * @param {HTMLElement} element The field name
 * @param {Object} [fields] The field options. The options will be merged with the original validator rules
 * @param {Object} [plugins] Plugins list
 * if the field is already defined
*/
const formValidation = function (element, fields, plugins) {
    const form = globalThis.FormValidation.formValidation(element, { fields, plugins })
    /**
     * @function addField Add a field
     * @param {String} field The field name
     * @param {Object} [options] The field options. The options will be merged with the original validator rules
     * if the field is already defined
    */
    const addField = function (field, options) { return form.addField(field, options) }
    /**
     * @function deregisterFilter Deregister a filer
     * @param {String} name The name of filter
    */
    const deregisterFilter = function (name) { return form.deregisterFilter(name) }
    /**
     * @function deregisterPlugin Deregister a plugin
     * @param {String} name The name of plugin
    */
    const deregisterPlugin = function (name) { return form.deregisterPlugin(name) }
    /**
     * @function destroy Destroy everything created by the library
    */
    const destroy = function () { return form.destroy() }
    /**
     * @function disableValidator Disable particular validator for given field
     * @param {String} field The field name
     * @param {String} [validator] The validator name. If it isn't specified, all validators will be disabled
    */
    const disableValidator = function (field, validator) { return form.disableValidator(field, validator) }
    /**
     * @function enableValidator Enable particular validator for given field
     * @param {String} field The field name
     * @param {String} [validator] The validator name. If it isn't specified, all validators will be enabled
    */
    const enableValidator = function (field, validator) { return form.enableValidator(field, validator) }
    /**
     * @function getElements Return an array of field elements by given field name
     * @param {String} field The field name
    */
    const getElements = function (field) { return form.getElements(field) }
    /**
     * @function getElementValue Return the element value
     * @param {String} field The field name
     * @param {HTMLElement} ele The field element
     * @param {String} [validator] The validator name
    */
    const getElementValue = function (field, ele, validator) { return form.getElementValue(field, ele, validator) }
    /**
     * @function getFields Return entire `fields` option
    */
    const getFields = function () { return form.getFields() }
    /**
     * @function getFormElement Return the form element
    */
    const getFormElement = function () { return form.getFormElement() }
    /**
     * @function getPlugin Return an instance of plugin by given name
     * @param {String} name The plugin name
    */
    const getPlugin = function (name) { return form.getPlugin(name) }
    /**
     * @function removeEvent Remove the given handler on particular event
     * @param {String} event The event name
     * @param {Function} func The event handler
    */
    const removeEvent = function (event, func) { return form.off(event, func) }
    /**
     * @function callEvent Listen on particular event
     * @param {String} event The event name
     * @param {Function} func The event handler
    */
    const callEvent = function (event, func) { return form.on(event, func) }
    /**
     * @function registerFilter Register a filter
     * @param {String} name The name of filter
     * @param {Function} func The filter function
    */
    const registerFilter = function (name, func) { return form.registerFilter(name, func) }
    /**
     * @function registerPlugin Register a plugin
     * @param {String} name The name of plugin
     * @param {Object} plugin The plugin instance
    */
    const registerPlugin = function (name, plugin) { return form.registerPlugin(name, plugin) }
    /**
     * @function registerValidator Register a validator
     * @param {String} name The name of validator
     * @param {Function} func The validator function
    */
    const registerValidator = function (name, func) { return form.registerValidator(name, func) }
    /**
     * @function removeField Remove given field by name
     * @param {String} field The field name
    */
    const removeField = function (field) { return form.removeField(field) }
    /**
     * @function resetField Reset the field
     * @param {String} field The field name
     * @param {Boolean} [reset] If true, the method resets field value to empty or remove checked, selected attributes
    */
    const resetField = function (field, reset) { return form.resetField(field, reset) }
    /**
     * @function resetForm Reset the form
     * @param {Boolean} [reset] If true, the method resets field value to empty or remove checked, selected attributes
    */
    const resetForm = function (reset) { return form.resetForm(reset) }
    /**
     * @function revalidateField Revalidate a particular field
     * @param {String} field The field name
    */
    const revalidateField = function (field) { return form.revalidateField(field) }
    /**
     * @function setFieldOptions Set the options for given field
     * @param {String} field The field name
     * @param {Object} options The field options
    */
    const setFieldOptions = function (field, options) { return form.setFieldOptions(field, options) }
    /**
     * @function setLocale Set the locale and the localization data
     * @param {String} locale The locale in the format of countrycode_LANGUAGECODE (en_US, de_DE, fr_FR, vi_VN, for example)
     * @param {Object} localization An object containing the translation of all validators
    */
    const setLocale = function (locale, localization) { return form.setLocale(locale, localization) }
    /**
     * @function updateElementStatus Update the element status
     * @param {String} field The field name
     * @param {HTMLElement} ele The field element
     * @param {String} status The new status
     * @param {String} [validator] The validator name. If it isn't specified, all validators will be updated
    */
    const updateElementStatus = function (field, ele, status, validator) {
        return form.updateElementStatus(field, ele, status, validator)
    }
    /**
     * @function updateFieldStatus Update the field status
     * @param {String} field The field name
     * @param {String} status The new status
     * @param {String} [validator] The validator name. If it isn't specified, all validators will be updated
    */
    const updateFieldStatus = function (field, status, validator) {
        return form.updateFieldStatus(field, status, validator)
    }
    /**
     * @function updateValidatorOption Update option of particular validator for given field
     * @param {String} field The field name
     * @param {String} validator The validator name
     * @param {String} name The option's name
     * @param {any} value The option's name
    */
    const updateValidatorOption = function (field, validator, name, value) {
        return form.updateValidatorOption(field, validator, name, value)
    }
    /**
     * @function validate Validate all fields
    */
    const validate = function () { return form.validate() }
    /**
     * @function validateElement Validate a particular element
     * @param {String} field The field name
     * @param {HTMLElement} element The field element
    */
    const validateElement = function (field, element) { return form.validateElement(field, element) }
    /**
     * @function validateField Validate a particular field
     * @param {String} field The field name
    */
    const validateField = function (field) { return form.validateField(field) }
    return {
        form,
        addField,
        deregisterFilter,
        deregisterPlugin,
        destroy,
        disableValidator,
        enableValidator,
        getElements,
        getElementValue,
        getFields,
        getFormElement,
        getPlugin,
        removeEvent,
        callEvent,
        registerFilter,
        registerPlugin,
        registerValidator,
        removeField,
        resetField,
        resetForm,
        revalidateField,
        setFieldOptions,
        setLocale,
        updateElementStatus,
        updateFieldStatus,
        updateValidatorOption,
        validate,
        validateElement,
        validateField
    }
}
export default formValidation

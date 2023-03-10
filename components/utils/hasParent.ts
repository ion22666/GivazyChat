export default (childElement: HTMLElement, parentElement: HTMLElement): boolean => {
    let element = childElement;
    while (element) {
        if (element === parentElement) {
            return true;
        }
        element = element.parentElement;
    }
    return false;
};

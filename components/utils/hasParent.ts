/** 
introduci un childElement si un parentElement si zice daca child este copilu lu parent
**/
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

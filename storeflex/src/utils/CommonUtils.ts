export const CHARACTER_ONLY = /^[A-Za-z ,.'-]+$/;
export const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const regex_specialChar = /^[A-Za-z ]+$/;
export const regex_pass = /4^((?!.*[\s])(?=.*[A-Z])(?=.*\d).{8,15})/;
export const regex_url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
export const regex_phone = /^[6789]\d{9}$/;
export const regex_gstid = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/; // Add comment
export const regex_minlen = /^.{4,}$/;

export const validateCharacterLength = (text: string, minLen:number, maxLen:number) => {
    const isValid = (text.length < minLen || text.length > maxLen)?false:true;
    return isValid;
}

export const validateSpecialCharExistance= (text: string) => {
    const isValid = (regex_specialChar.test(text))?true:false;
    return isValid;
}

export const validateEmail = (email: string) => {
    const isValid = regex_email.test(String(email).toLocaleLowerCase())?true:false;
    return isValid;
}

export const validateMinLen = (val: string, trim?: boolean) => {
    const minLen = 4;
    if(val) {
        const value  = trim ? val.trim() : val;
        return value.length >= minLen ? true : false;
    } else {
        return false;
    }
}
export const validatePassword = (password: string) => {
    const isValid = regex_pass.test(String(password))?true:false;
    return isValid;
}

export const validateCompanyName = (companyName: string) => {
    const isValid = false;
    return isValid;
}

export const validateWebUrl = (webUrl: string) => {
    
    const isValid = regex_url.test(String(webUrl))?true:false;

    return isValid;
}

export const validatePhone = (phone:string) => {
    const isValid = regex_phone.test(String(phone))?true:false;
    
    return isValid;
}

export const validateGst = (gst: string) => {
    
    const isValid = regex_gstid.test(String(gst))?true: false;

    return isValid;
}

export const validatePinCode = (pincode: number) => {
    
    const isValid = false;

    return isValid;
}

export const validateCity = (city: string) => {
    
    const isValid = false;

    return isValid;
}

export const validateState = (state: string) => {
    
    const isValid = false;

    return isValid;
}

export const validateCountry = (country: string) => {
    
    const isValid = false;

    return isValid;
}

export const setUserLoggedIn = (val: string | boolean) => {
    if(val) {
        sessionStorage.setItem('isLoggedIn', String(val));
    } else {
        sessionStorage.setItem('isLoggedIn', 'false');
    }
}
export const getUserLoggedIn = () => {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if(loggedIn === 'true') {
        return true;
    } else {
        return false;
    }
}

export const setUserType = (val: string) => {
    sessionStorage.setItem('userType', String(val));
}

export const getUserType = () => {
    const userType = sessionStorage.getItem('userType');
    return userType;
}



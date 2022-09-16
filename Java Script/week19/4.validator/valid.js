class Validator {
    isEmail(email) {
        const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email.match(emailFormat)) {
            return true;
        } else {
            return false;
        }
    }

    isDomain(domain) {
        const domainFormat = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
        if (domain.match(domainFormat)) {
            return true;
        } else {
            return false;
        }
    }

    isDate(date) {
        const dateFormat =
            /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi;
        if (date.match(dateFormat)) {
            return true;
        } else {
            return false;
        }
    }

    isPhone(phone) {
        const phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (phone.match(phoneFormat)) {
            return true;
        } else {
            return false;
        }
    }
}

class ValidatorStatic {
    static isEmail(email) {
        const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email.match(emailFormat)) {
            return true;
        } else {
            return false;
        }
    }

    static isDomain(domain) {
        const domainFormat = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
        if (domain.match(domainFormat)) {
            return true;
        } else {
            return false;
        }
    }

    static isDate(date) {
        const dateFormat =
            /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi;
        if (date.match(dateFormat)) {
            return true;
        } else {
            return false;
        }
    }

    static isPhone(phone) {
        const phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (phone.match(phoneFormat)) {
            return true;
        } else {
            return false;
        }
    }
}

//стандартная 
var validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+375296319584')); //специально сделала false

//статическая 
console.log(ValidatorStatic.isEmail('krasavceva.va@mail.ru'));
console.log(ValidatorStatic.isDomain('ceramicgroup.by'));
console.log(ValidatorStatic.isDate('31.10.1991'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));
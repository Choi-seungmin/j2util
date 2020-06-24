'use strict';

module.exports = {
    checkEmail: function (email) {
        let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        
        if (!regExp.test(num)) {
            return false;
        }
        return true;
    },

    /**
     * @description 휴대폰 번호의 유무를 체크.
     * @param {*} num 
     */
    checkMobileNumber: function (num) {
        let regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!regExp.test(num)) {
            return false;
        }
        return true;
    },
}

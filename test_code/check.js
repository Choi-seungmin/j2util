const utils = require('../Util');



let phone = '02312341234';

if (utils.checkMobileNumber(phone)) {
    console.log('PASS!!');
} else {
    console.log(`정확한 전화번호를 입력하세요.`);
}
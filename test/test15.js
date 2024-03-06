function solution(str_list) {
    let temp1 = str_list.join("");
    let temp2 = temp1.replace("l", "").replace("r", "");

    if (temp1.indexOf("l") < temp1.indexOf("r")) {
        return temp2.split('');
    } else {
        let result = temp2.split('').reverse().join('');
        if (result == "") {
            return [];
        } else {
            return result;
        }
    }
}
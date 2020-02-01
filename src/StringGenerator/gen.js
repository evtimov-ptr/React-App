function generateRandomStr(length){
    let _text = "";
    let _possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++)
        _text += _possible.charAt(Math.floor(Math.random() * _possible.length));

    return _text;
}

export default generateRandomStr;
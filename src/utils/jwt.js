

export function parseToken(token) {
    let payload = token.split(".")[1] //分割提取信息
    return JSON.parse(
        decodeURIComponent( //解码URI特殊字符(# / ￥)
            window.atob(payload.replace(/-/g, "+").replace(/_/g, "/"))  //替换特殊字符
        )
    )
}
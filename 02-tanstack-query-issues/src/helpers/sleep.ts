export const sleep = (millisencods: number) => {
    return new Promise(r => {
        setTimeout(() => {
            r(true)
        }, millisencods);
    })
}
const Enum = ['+', '--', '*', '/'];
export function separate(value: string) {
    let res: string[] = [];
    let type: string = '';
    Enum.forEach(item => {
        let arr = value.split(item)
        if (arr.length > 1) {
            type = item;
            return res = arr;
        }
    })
    return { res, type };
}
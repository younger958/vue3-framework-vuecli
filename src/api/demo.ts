export function demo() {
    return new Promise<{ payload: { [key: string]: boolean } }>(resolve => {
        setTimeout(() => {
            const data = {
                payload: {
                    home: true,
                    manage: true,
                    report: true
                },
            };
            resolve(data);
        }, 0);
    });
}
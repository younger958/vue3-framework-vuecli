export function demo() {
    return new Promise<{ payload: string[] }>(resolve => {
        setTimeout(() => {
            const data = {
                payload: ['home', 'manage', 'test', 'report', 'production'],
            };
            resolve(data);
        }, 1000);
    });
}
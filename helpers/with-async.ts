
async function withAsync(fn: Function) {
    try {
        const {data} = await fn();
        return {
            response: data,
            error: null
        }
    } catch (error) {
        return {
            response: null,
            error: error,
        }
    }
}

export default withAsync;
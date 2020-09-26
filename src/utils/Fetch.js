export async function fetchRetry(url, options, n = 3) {
    for (let i = 0; i < n; i++) {
        try {
            const response = await fetch(url, options);
            if (response.ok) {
                try {
                    return await response.json();
                } catch (error) {
                    console.log(error);
                }
            }
            break;
        } catch (err) {
           console.log(err)
        }
    }
}

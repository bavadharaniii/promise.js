function fetchData() {
    return new Promise((resolve, reject) => {
        let success = false;

        if (success) {
            resolve("Success!");
        } else {
            reject("Something went wrong.");
        }
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();
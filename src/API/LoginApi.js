export class LoginApi {
    // eslint-disable-next-line no-unused-vars
    static getUser(resultData) {
        // eslint-disable-next-line no-undef
        return $.ajax({
            // url: "https://jsonplaceholder.typicode.com/posts",
            url: "http://localhost:8081/WebApp/rest/goods/get/all",
            type: "GET",
            success: function (result) {
                resultData = result;
            },
            error: function (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            }
        });
    }
}
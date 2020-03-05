export class AppConfig {
    static appUrl = "http://localhost:8081/WebApp/rest/";
    static parseParam(args = []) {
        let result = '';
        args.forEach((stringArg) => {
            result += '/' + stringArg;
        });
        return result;
    }
}
export abstract class Api {

    static baseUrl = "https://api-aonetest.mhdson.com/index.php/";

    public static urlAbout(){

        return this.baseUrl + "about";

    }

    public static urlProfile(){

        return this.baseUrl + "profile";

    }

    public static urlUsers(){

        return this.baseUrl + "users";

    }


}

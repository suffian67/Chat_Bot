class WidgetApi {

    async getConfig() {

        const response = await fetch(

            "/api/v1/widget/config"

        );

        return response.json();

    }

}

export default new WidgetApi();
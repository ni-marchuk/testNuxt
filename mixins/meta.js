export default {
    head() {

        //заменнить на главной main на pageInfo(проверить на остальных)
        //сделать проверки ||

        return {
            // title: this.pageInfo.title, переписать!
            meta: [
                {
                    property: 'og:title',
                    content: this.metaInformation.ogTitle,
                },
                {
                    property: 'og:image',
                    content: this.metaInformation.ogThumb,
                },
                {
                    property: 'og:description',
                    content: this.metaInformation.ogDescription,
                },
                {
                    name: 'keywords',
                    content: this.metaInformation.metaKeyword,
                },
                {
                    name: 'description',
                    content: this.metaInformation.metaDescription,
                },
            ],
        }
    },
};
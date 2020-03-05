export default {
    head() {

        //заменнить на главной main на pageInfo(проверить на остальных)
        //сделать проверки ||

        return {

            title: this.pageInfo.title || this.metaInformation.name,

            link: [{
                rel: 'canonical',
                href: 'https://ufparitet.ru' +((this.$route.path.slice(-1)==='/') ? this.$route.path.slice(0,-1) : this.$route.path),
            }],

            meta: [
                {
                    property: 'og:title',
                    content: this.metaInformation.ogTitle || this.metaInformation.name,
                },
                {
                    property: 'og:image',
                    content: this.metaInformation.ogThumb || this.metaInformation.ogThumb2x,
                },
                {
                    property: 'og:description',
                    content: this.metaInformation.ogDescription || this.metaInformation.name,
                },
                {
                    name: 'keywords',
                    content: this.metaInformation.metaKeyword || this.metaInformation.name,
                },
                {
                    name: 'description',
                    content: this.metaInformation.metaDescription || this.metaInformation.name,
                },
            ],

        }
    },
};
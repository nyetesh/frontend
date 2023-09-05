export class Page {
    page: number;
    pageSize: number;
    total: number;

    constructor() {
        this.page = 1;
        this.pageSize = 20;
        this.total = 0;
    }
}

export class SiteSetting {
    /**
     * @param {Object} data
     * @param {string} data.key
     * @param {string} [data.value]
     */
    constructor(data) {
        this.key = data.key;
        this.value = data.value || null;
    }
}

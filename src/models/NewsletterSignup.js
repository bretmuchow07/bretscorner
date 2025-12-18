export class NewsletterSignup {
    /**
     * @param {Object} data
     * @param {number} data.id
     * @param {string} data.email
     * @param {string|Date} data.created_at
     */
    constructor(data) {
        this.id = data.id;
        this.email = data.email;
        this.createdAt = new Date(data.created_at);
    }
}

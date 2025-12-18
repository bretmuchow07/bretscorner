export class Comment {
    /**
     * @param {Object} data
     * @param {number} data.id
     * @param {string} data.content
     * @param {string} [data.author_name] - Default 'Anonymous'
     * @param {number} [data.post_id]
     * @param {string|Date} data.created_at
     */
    constructor(data) {
        this.id = data.id;
        this.content = data.content;
        this.authorName = data.author_name || 'Anonymous';
        this.postId = data.post_id || null;
        this.createdAt = new Date(data.created_at);
    }
}

export class Like {
    /**
     * @param {Object} data
     * @param {number} data.id
     * @param {string} [data.user_id]
     * @param {number} [data.post_id]
     * @param {number} [data.comment_id]
     * @param {string|Date} data.created_at
     */
    constructor(data) {
        this.id = data.id;
        this.userId = data.user_id || null;
        this.postId = data.post_id || null;
        this.commentId = data.comment_id || null;
        this.createdAt = new Date(data.created_at);
    }
}

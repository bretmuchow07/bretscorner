export class Post {
    /**
     * @param {Object} data
     * @param {number} data.id
     * @param {string} data.title
     * @param {string} [data.content]
     * @param {string} [data.slug]
     * @param {string} [data.category]
     * @param {string} [data.cover_image_url]
     * @param {string} data.status - Default 'published'
     * @param {string} [data.author_id]
     * @param {string|Date} data.created_at
     */
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.content = data.content || '';
        this.slug = data.slug || null;
        this.category = data.category || null;
        this.coverImageUrl = data.cover_image_url || null;
        this.status = data.status || 'published';
        this.authorId = data.author_id || null;
        this.createdAt = new Date(data.created_at);
    }
}

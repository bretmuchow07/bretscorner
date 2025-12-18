export class User {
    /**
     * @param {Object} data
     * @param {string} data.id
     * @param {string} [data.username]
     * @param {string} [data.email]
     * @param {string} [data.avatar_url]
     * @param {string} [data.bio]
     * @param {string} data.role - Default 'writer'
     * @param {string|Date} data.created_at
     */
    constructor(data) {
        this.id = data.id;
        this.username = data.username || null;
        this.email = data.email || null;
        this.avatarUrl = data.avatar_url || null;
        this.bio = data.bio || null;
        this.role = data.role || 'writer';
        this.createdAt = new Date(data.created_at);
    }

    /**
     * Checks if user is admin or writer (if that logic is needed)
     */
    get canPost() {
        return this.role === 'writer' || this.role === 'admin';
    }
}

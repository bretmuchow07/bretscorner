export class Tag {
    /**
     * @param {Object} data
     * @param {number} data.id
     * @param {string} data.name
     */
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
    }
}

export class PostTag {
    /**
     * @param {Object} data
     * @param {number} data.post_id
     * @param {number} data.tag_id
     */
    constructor(data) {
        this.postId = data.post_id;
        this.tagId = data.tag_id;
    }
}

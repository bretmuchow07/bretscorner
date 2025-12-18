import { createClient } from '@supabase/supabase-js';

let supabase = null;

function ensureClient() {
  if (supabase) return supabase;
  const url = process.env.REACT_APP_SUPABASE_URL;
  const key = process.env.REACT_APP_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error(
      'Supabase environment variables not set. Add REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_KEY to .env.local and restart the dev server.'
    );
  }
  supabase = createClient(url, key);
  return supabase;
}

// ========== POSTS ==========
// ========== POSTS ==========
export const getAllPosts = async () => {
  const client = ensureClient();
  const { data, error } = await client
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
};

export const getRecentPosts = async (limit = 3) => {
  const client = ensureClient();
  const { data, error } = await client
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return data;
};

export const getPostBySlug = async (slug) => {
  const client = ensureClient();
  const { data, error } = await client
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error) throw error;
  return data;
};

export const getPostById = async (id) => {
  const client = ensureClient();
  const { data, error } = await client
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

export const createPost = async (post) => {
  const client = ensureClient();
  const { data, error } = await client
    .from('posts')
    .insert([post])
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updatePost = async (id, post) => {
  const client = ensureClient();
  const { data, error } = await client
    .from('posts')
    .update(post)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deletePost = async (id) => {
  const client = ensureClient();
  const { error } = await client
    .from('posts')
    .delete()
    .eq('id', id);
  if (error) throw error;
};

// ========== COMMENTS ==========
export const getComments = async (entityId, entityType) => {
  const client = ensureClient();
  // Filter based on entity type and id
  // Schema assumption: comments has entity_type and entity_id columns, OR specific columns
  // Using entity_type/entity_id approach for flexibility as planned
  const { data, error } = await client
    .from('comments')
    .select('*')
    .eq('entity_type', entityType)
    .eq('entity_id', entityId)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data;
};

export const addComment = async (comment) => {
  const client = ensureClient();
  const { data, error } = await client
    .from('comments')
    .insert([comment])
    .select()
    .single();
  if (error) throw error;
  return data;
};

// ========== LIKES ==========
// Using a simple 'likes' table that stores individual likes or just a count table?
// Plan said: "likes table with id, entity_id, entity_type" and count = select count(*).
export const getLikesCount = async (entityId, entityType) => {
  const client = ensureClient();
  const { count, error } = await client
    .from('likes')
    .select('*', { count: 'exact', head: true })
    .eq('entity_type', entityType)
    .eq('entity_id', entityId);

  if (error) throw error;
  return count;
};

export const addLike = async (entityId, entityType) => {
  // For now, anonymous likes. Just insert a row.
  // In future, might want to check IP or user ID to prevent spam.
  const client = ensureClient();
  const { error } = await client
    .from('likes')
    .insert([{ entity_id: entityId, entity_type: entityType }]);

  if (error) throw error;
};


// ========== NEWSLETTER ==========
export const subscribeToNewsletter = async (email) => {
  const client = ensureClient();
  const { error } = await client
    .from('newsletter_subscribers')
    .insert([{ email }]);

  if (error) {
    // Handle unique constraint error gracefully if needed
    if (error.code === '23505') { // Postgres unique violation code
      throw new Error("This email is already subscribed!");
    }
    throw error;
  }
};

// ========== TAGS (Optional) ==========
export const getAllTags = async () => {
  const client = ensureClient();
  const { data, error } = await client
    .from('tags')
    .select('*')
    .order('name');
  if (error) throw error;
  return data;
};

// ========== POST TAGS ==========
export const getTagsForPost = async (postId) => {
  const client = ensureClient();
  const { data, error } = await client
    .from('post_tags')
    .select('tag_id, tags(name)')
    .eq('post_id', postId);
  if (error) throw error;
  return data;
};

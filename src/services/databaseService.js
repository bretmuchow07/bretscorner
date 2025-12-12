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
export const getAllPosts = async () => {
  const client = ensureClient();
  const { data, error } = await client
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
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
export const getCommentsForPost = async (postId) => {
  const client = ensureClient();
  const { data, error } = await client
    .from('comments')
    .select('*')
    .eq('post_id', postId)
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

import { createClient } from 'npm:@supabase/supabase-js@2'

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY ;
const supabase = createClient(supabaseUrl, supabaseKey);

// ========== POSTS ==========
export const getAllPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
};

export const getPostBySlug = async (slug) => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error) throw error;
  return data;
};

export const createPost = async (post) => {
  const { data, error } = await supabase
    .from('posts')
    .insert([post])
    .select()
    .single();
  if (error) throw error;
  return data;
};

// ========== COMMENTS ==========
export const getCommentsForPost = async (postId) => {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('post_id', postId)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return data;
};

export const addComment = async (comment) => {
  const { data, error } = await supabase
    .from('comments')
    .insert([comment])
    .select()
    .single();
  if (error) throw error;
  return data;
};

// ========== TAGS (Optional) ==========
export const getAllTags = async () => {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .order('name');
  if (error) throw error;
  return data;
};

// ========== POST TAGS ==========
export const getTagsForPost = async (postId) => {
  const { data, error } = await supabase
    .from('post_tags')
    .select('tag_id, tags(name)')
    .eq('post_id', postId);
  if (error) throw error;
  return data;
};

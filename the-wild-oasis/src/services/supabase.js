import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wldfqiseabaagerudxta.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZGZxaXNlYWJhYWdlcnVkeHRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NzEyOTMsImV4cCI6MjA3ODA0NzI5M30.GfXihwT0kV4Rn9F4DsvfYDtjSbGQ_kYLMk4cprImYzs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

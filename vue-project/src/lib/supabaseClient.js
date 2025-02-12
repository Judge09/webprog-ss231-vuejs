import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('https://thlgxguclvxwglxehivg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRobGd4Z3VjbHZ4d2dseGVoaXZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNTQxMTEsImV4cCI6MjA1NDkzMDExMX0.J6GBl2lvpZA_tEa31qqoBaoltId_ZZo77Il7Ug47ZSU')
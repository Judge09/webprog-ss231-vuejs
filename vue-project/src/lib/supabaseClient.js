import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('https://qdtyzoiwcvknwzgmnnul.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkdHl6b2l3Y3Zrbnd6Z21ubnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMjU5ODUsImV4cCI6MjA1MzYwMTk4NX0.d98pA7Nxxgj2pbq99hr0YYbgI7rl0LgNAhusdkP58rE  ')
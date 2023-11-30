import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://duolbnpyoekpwelxcbjv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1b2xibnB5b2VrcHdlbHhjYmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzODExODQsImV4cCI6MjAxNjk1NzE4NH0.tAECY5YM6kQPxU75G1ez-Hj4PTzB6eLnyXupOXU23sA')
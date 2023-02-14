import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uowbpugqtwynlosbefix.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvd2JwdWdxdHd5bmxvc2JlZml4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzODgzMjAsImV4cCI6MTk5MTk2NDMyMH0.vDRvB5Ylp0aPESzaenbMusexKFKX_UCkXs24t9tuhVM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

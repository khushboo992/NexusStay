import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tsrkjbcotkiyurioiqhv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzcmtqYmNvdGtpeXVyaW9pcWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwMjIwMTksImV4cCI6MjA5MTU5ODAxOX0.RvOVjhpWYqqJPjBOLvsy0YWGZhusVw89R-y8YCbHx50";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://exxahraxbkkekoqkzvrs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4eGFocmF4YmtrZWtvcWt6dnJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NDMxMzAsImV4cCI6MjA5NTExOTEzMH0.qfowrfnoMNUpDULkSpNvn5U71lKmN0VQCPBI1yiDnRU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

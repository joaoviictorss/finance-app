import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cimarzpqcicwijdkgzri.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpbWFyenBxY2ljd2lqZGtnenJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1MTYwMDcsImV4cCI6MjAzNzA5MjAwN30.FCYuvHJCF5vu4ses6w9QYc9Xv54AGOsJsUPq7BHJ5yQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

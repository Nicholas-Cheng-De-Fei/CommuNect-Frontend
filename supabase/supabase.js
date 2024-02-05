import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://idersmoptsfgcxaraoeu.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkZXJzbW9wdHNmZ2N4YXJhb2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNDMyOTMsImV4cCI6MjAyMjcxOTI5M30.43SoHxvUYP6acf1SaVgVQqlNJs9v_jTrn6-omlyiU3A"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
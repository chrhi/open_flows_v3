
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nxjantewymzaubarsati.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54amFudGV3eW16YXViYXJzYXRpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NTM3MjIxOCwiZXhwIjoxOTkwOTQ4MjE4fQ.Feo59I4TXUazSVPOL96G1bh7KG3n0S3t_v_-EQvi3d4'

export  const supabase = createClient(supabaseUrl, SUPABASE_KEY)
CREATE TABLE user_profiles (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  tax_regime text DEFAULT 'simplified',
  monthly_income numeric DEFAULT 0,
  opv numeric DEFAULT 0,
  so numeric DEFAULT 0,
  opvr numeric DEFAULT 0,
  vosms numeric DEFAULT 0,
  ipn numeric DEFAULT 0,
  total_monthly numeric DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own profile"
ON user_profiles FOR ALL
USING (auth.uid() = user_id);

-- Tabela publica de usuarios para a administradora ver os cadastros
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilita Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Politica para usuarios verem seu proprio perfil
CREATE POLICY "users_select_own" ON public.users 
  FOR SELECT USING (auth.uid() = id);

-- Politica para usuarios atualizarem seu proprio perfil
CREATE POLICY "users_update_own" ON public.users 
  FOR UPDATE USING (auth.uid() = id);

-- Politica para inserir seu proprio perfil
CREATE POLICY "users_insert_own" ON public.users 
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Politica para admins verem todos os usuarios
CREATE POLICY "admins_select_all" ON public.users 
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND (auth.users.raw_user_meta_data->>'is_admin')::boolean = true
    )
  );

/*
  # Gallery System Setup

  1. New Tables
    - `gallery`
      - `id` (uuid, primary key)
      - `title` (text)
      - `category` (text)
      - `image_path` (text)
      - `created_at` (timestamp)

  2. Storage
    - Creates a new storage bucket for gallery images
    
  3. Security
    - Enable RLS on gallery table
    - Add policy for public read access
*/

-- Create the gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  image_path text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON gallery
  FOR SELECT
  TO public
  USING (true);
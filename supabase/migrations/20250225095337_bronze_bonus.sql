/*
  # Create contacts table

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `business_name` (text)
      - `problem` (text)
      - `service` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for inserting new contacts
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_name text NOT NULL,
  problem text NOT NULL,
  service text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new contacts
CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view contacts
CREATE POLICY "Only authenticated users can view contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);
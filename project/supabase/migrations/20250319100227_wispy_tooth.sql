/*
  # Insert test data for gallery

  This migration adds some test data to verify the gallery functionality
*/

INSERT INTO gallery (title, category, image_path)
VALUES 
  ('Test Bathroom 1', 'bathroom', 'bathroom1.jpg'),
  ('Modern Kitchen', 'kitchen', 'kitchen1.jpg'),
  ('Renovation Project', 'renovation', 'renovation1.jpg'),
  ('Installation Work', 'installation', 'installation1.jpg');
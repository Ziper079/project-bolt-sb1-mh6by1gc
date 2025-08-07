/*
  # Add more gallery images

  Adds more images from the Badkamers folder to the gallery table
*/

-- Add more bathroom images
INSERT INTO gallery (title, category, image_path)
VALUES 
  ('Moderne Badkamer Design', 'bathroom', '/Badkamers/IMG_2749.JPEG'),
  ('Luxe Badkamer Afwerking', 'bathroom', '/Badkamers/IMG_2751.JPEG'),
  ('Complete Badkamer Renovatie', 'bathroom', '/Badkamers/IMG_2753.JPEG');

-- Add more kitchen images
INSERT INTO gallery (title, category, image_path)
VALUES 
  ('Strakke Keuken Installatie', 'kitchen', '/Badkamers/IMG_4864.JPEG'),
  ('Moderne Keuken Design', 'kitchen', '/Badkamers/IMG_4922.JPEG'),
  ('Luxe Keuken Afwerking', 'kitchen', '/Badkamers/IMG_4923.JPEG');

-- Add more renovation images
INSERT INTO gallery (title, category, image_path)
VALUES 
  ('Volledige Renovatie Project', 'renovation', '/Badkamers/IMG_6882.JPEG'),
  ('Interieur Verbouwing', 'renovation', '/Badkamers/IMG_6884.JPEG'),
  ('Keuken Renovatie', 'renovation', '/Badkamers/IMG_6885.JPEG');

-- Add more installation images
INSERT INTO gallery (title, category, image_path)
VALUES 
  ('Professionele Installatie', 'installation', '/Badkamers/IMG_7408.JPG'),
  ('Technische Installatie', 'installation', '/Badkamers/IMG_7428.JPG'),
  ('Sanitair Installatie', 'installation', '/Badkamers/IMG_7602.JPG');
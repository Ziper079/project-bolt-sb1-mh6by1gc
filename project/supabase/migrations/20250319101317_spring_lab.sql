/*
  # Add all gallery images from Badkamers folder

  1. Changes
    - Add all remaining images from the Badkamers folder to the gallery table
    - Categorize images appropriately between bathrooms, kitchens, renovations, and installations
*/

-- Add all bathroom images
INSERT INTO gallery (title, category, image_path)
VALUES 
  ('Moderne Badkamer', 'bathroom', '/Badkamers/IMG_0839.JPEG'),
  ('Luxe Badkamer', 'bathroom', '/Badkamers/IMG_0865.JPEG'),
  ('Complete Badkamer', 'bathroom', '/Badkamers/IMG_0886.JPEG'),
  ('Badkamer Design', 'bathroom', '/Badkamers/IMG_0887.JPEG'),
  ('Stijlvolle Badkamer', 'bathroom', '/Badkamers/IMG_1020.JPEG'),
  ('Moderne Badkamer Suite', 'bathroom', '/Badkamers/IMG_1030.JPEG'),
  ('Luxe Badkamer Ontwerp', 'bathroom', '/Badkamers/IMG_1031.JPEG'),
  ('Badkamer Renovatie', 'bathroom', '/Badkamers/IMG_2738.JPEG'),
  ('Moderne Sanitair', 'bathroom', '/Badkamers/IMG_2739.JPEG'),
  ('Badkamer Installatie', 'bathroom', '/Badkamers/IMG_2740.JPEG');

-- Add kitchen images
INSERT INTO gallery (title, category, image_path)
VALUES 
  ('Moderne Keuken', 'kitchen', '/Badkamers/IMG_3161.JPEG'),
  ('Design Keuken', 'kitchen', '/Badkamers/IMG_3163.JPEG'),
  ('Luxe Keuken', 'kitchen', '/Badkamers/IMG_3164.JPEG'),
  ('Keuken Installatie', 'kitchen', '/Badkamers/IMG_3734.JPEG'),
  ('Complete Keuken', 'kitchen', '/Badkamers/IMG_3843.JPEG'),
  ('Strakke Keuken', 'kitchen', '/Badkamers/IMG_4170.JPEG'),
  ('Moderne Keukenontwerp', 'kitchen', '/Badkamers/IMG_4171.JPEG'),
  ('Keuken Design', 'kitchen', '/Badkamers/IMG_4172.JPEG'),
  ('Luxe Keukeninstallatie', 'kitchen', '/Badkamers/IMG_4173.JPEG'),
  ('Keuken Renovatie', 'kitchen', '/Badkamers/IMG_4174.JPEG');

-- Add renovation images
INSERT INTO gallery (title, category, image_path)
VALUES 
  ('Complete Renovatie', 'renovation', '/Badkamers/IMG_4373.JPEG'),
  ('Badkamer Renovatie', 'renovation', '/Badkamers/IMG_4620.JPEG'),
  ('Keuken Renovatie Project', 'renovation', '/Badkamers/IMG_4621.JPEG'),
  ('Volledige Verbouwing', 'renovation', '/Badkamers/IMG_5391.JPEG'),
  ('Interieur Renovatie', 'renovation', '/Badkamers/IMG_5420.JPEG'),
  ('Moderne Verbouwing', 'renovation', '/Badkamers/IMG_5944.JPEG'),
  ('Complete Verbouwing', 'renovation', '/Badkamers/IMG_5945.JPEG'),
  ('Renovatie Project', 'renovation', '/Badkamers/IMG_5946.JPEG'),
  ('Luxe Renovatie', 'renovation', '/Badkamers/IMG_5947.JPEG'),
  ('Totale Renovatie', 'renovation', '/Badkamers/IMG_6125.JPEG');

-- Add installation images
INSERT INTO gallery (title, category, image_path)
VALUES 
  ('Professionele Installatie', 'installation', '/Badkamers/IMG_6503.JPEG'),
  ('Sanitair Installatie', 'installation', '/Badkamers/IMG_6511.JPEG'),
  ('Technische Installatie', 'installation', '/Badkamers/IMG_6512.JPEG'),
  ('Complete Installatie', 'installation', '/Badkamers/IMG_6755.JPEG'),
  ('Badkamer Installatie', 'installation', '/Badkamers/IMG_6756.JPEG'),
  ('Keuken Installatie', 'installation', '/Badkamers/IMG_6757.JPEG'),
  ('Moderne Installatie', 'installation', '/Badkamers/IMG_6759.JPEG'),
  ('Installatie Project', 'installation', '/Badkamers/IMG_7604.JPG'),
  ('Vakkundige Installatie', 'installation', '/Badkamers/IMG_7605.JPG');
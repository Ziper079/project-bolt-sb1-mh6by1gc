/*
  # Update gallery categories

  1. Changes
    - Remove all images from kitchen, renovation, and installation categories
    - Keep only bathroom images from the Badkamers folder
*/

-- First, delete all non-bathroom images
DELETE FROM gallery 
WHERE category IN ('kitchen', 'renovation', 'installation');

-- Keep only bathroom images and update their paths
UPDATE gallery 
SET image_path = CASE title
  WHEN 'Moderne Badkamer' THEN '/Badkamers/IMG_0839.JPEG'
  WHEN 'Luxe Badkamer' THEN '/Badkamers/IMG_0865.JPEG'
  WHEN 'Complete Badkamer' THEN '/Badkamers/IMG_0886.JPEG'
  WHEN 'Badkamer Design' THEN '/Badkamers/IMG_0887.JPEG'
  WHEN 'Stijlvolle Badkamer' THEN '/Badkamers/IMG_1020.JPEG'
  WHEN 'Moderne Badkamer Suite' THEN '/Badkamers/IMG_1030.JPEG'
  WHEN 'Luxe Badkamer Ontwerp' THEN '/Badkamers/IMG_1031.JPEG'
  WHEN 'Badkamer Renovatie' THEN '/Badkamers/IMG_2738.JPEG'
  WHEN 'Moderne Sanitair' THEN '/Badkamers/IMG_2739.JPEG'
  WHEN 'Badkamer Installatie' THEN '/Badkamers/IMG_2740.JPEG'
  ELSE image_path
END
WHERE category = 'bathroom';
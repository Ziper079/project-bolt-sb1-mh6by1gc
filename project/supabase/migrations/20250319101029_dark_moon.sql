/*
  # Update gallery images to use local paths

  Updates the image paths in the gallery table to use local images from the public/Badkamers folder
*/

-- Update bathroom images
UPDATE gallery 
SET image_path = '/Badkamers/IMG_2752.JPEG'
WHERE category = 'bathroom';

-- Update kitchen images
UPDATE gallery 
SET image_path = '/Badkamers/IMG_4862.JPEG'
WHERE category = 'kitchen';

-- Update renovation images
UPDATE gallery 
SET image_path = '/Badkamers/IMG_6881.JPEG'
WHERE category = 'renovation';

-- Update installation images
UPDATE gallery 
SET image_path = '/Badkamers/IMG_7473.JPG'
WHERE category = 'installation';
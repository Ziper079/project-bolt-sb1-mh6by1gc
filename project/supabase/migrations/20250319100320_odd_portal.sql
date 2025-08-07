/*
  # Update gallery test data with valid image URLs
  
  Updates the test data to use actual images from Unsplash
*/

UPDATE gallery 
SET image_path = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80'
WHERE category = 'bathroom';

UPDATE gallery 
SET image_path = 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80'
WHERE category = 'kitchen';

UPDATE gallery 
SET image_path = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80'
WHERE category = 'renovation';

UPDATE gallery 
SET image_path = 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&q=80'
WHERE category = 'installation';
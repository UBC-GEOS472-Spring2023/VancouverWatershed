import json

# Load the GeoJSON file
with open('C:/Users/Jeremy/OneDrive/Documents/GitHub/ioromieh.github.io/projects/VancouverWatershed/vector_geojson/vancouver_mainline_full.geojson', 'r') as f:
    geojson_data = json.load(f)

# Extract the features from the GeoJSON
features = geojson_data['features']

# Loop through each feature
for feature in features:
    # Extract the coordinates from the feature
    coordinates = feature['geometry']['coordinates']

    # Reverse the order of the coordinates
    coordinates.reverse()

    # Update the feature with the reversed coordinates
    feature['geometry']['coordinates'] = coordinates

# Save the updated GeoJSON to a new file
with open('vancouver_mainline_full_reorder.geojson', 'w') as f:
    json.dump(geojson_data, f)

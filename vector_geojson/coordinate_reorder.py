import json
import math

# Define a custom comparison function for sorting coordinates
def compare_coordinates(coord1, coord2, prev_coord):
    # Calculate distances between coord1 and prev_coord, and coord2 and prev_coord
    distance1 = math.sqrt((coord1[0] - prev_coord[0]) ** 2 + (coord1[1] - prev_coord[1]) ** 2)
    distance2 = math.sqrt((coord2[0] - prev_coord[0]) ** 2 + (coord2[1] - prev_coord[1]) ** 2)

    if coord1[0] < coord2[0]:
        return -1
    elif coord1[0] > coord2[0]:
        return 1
    else:
        if distance1 < distance2:
            return -1
        elif distance1 > distance2:
            return 1
        else:
            return 0

# Load the GeoJSON file
with open('C:/Users/Jeremy/OneDrive/Documents/GitHub/ioromieh.github.io/projects/VancouverWatershed/vector_geojson/vancouver_mains3_testfeature.geojson', 'r') as f:
    geojson_data = json.load(f)

# Extract the features from the GeoJSON
features = geojson_data['features']

# Loop through each feature
for feature in features:
    # Extract the coordinates from the feature
    coordinates = feature['geometry']['coordinates']

    # Sort the coordinates based on the longitude (X) value, using the custom comparison function
    sorted_coordinates = [coordinates[0]]
    prev_coord = coordinates[0]
    coordinates.remove(prev_coord)

    while coordinates:
        next_coord = min(coordinates, key=lambda coord: math.sqrt((coord[0] - prev_coord[0]) ** 2 + (coord[1] - prev_coord[1]) ** 2))
        sorted_coordinates.append(next_coord)
        prev_coord = next_coord
        coordinates.remove(next_coord)

    # Reverse the sorted list of coordinates to order them from furthest west to furthest east
    sorted_coordinates.reverse()

    # Update the feature with the sorted coordinates
    feature['geometry']['coordinates'] = sorted_coordinates

# Save the updated GeoJSON to a new file
with open('output.geojson', 'w') as f:
    json.dump(geojson_data, f)

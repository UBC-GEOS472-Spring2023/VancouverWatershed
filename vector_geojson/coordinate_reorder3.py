from shapely.geometry import MultiLineString, LineString

# Example MultiLineString
multiline = MultiLineString([[(0, 0), (1, 1)], [(2, 2), (3, 3)]])

# Convert MultiLineString to LineString
linestring = LineString([pt for line in multiline for pt in line])

print(linestring)  # Output: LINESTRING (0 0, 1 1, 2 2, 3 3)

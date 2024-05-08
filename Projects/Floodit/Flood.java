// Imports for the parameters of flood
import java.lang.reflect.Array;
import java.util.*;


public class Flood {

    // Students implement this flood function.
    public static void flood1(WaterColor color,
                             LinkedList<Coord> flooded_list,
                             Tile[][] tiles,
                             Integer board_size) {
        // YOUR CODE
        int i = 0;
        while (i < flooded_list.size()) {
            for (Coord neighbors : flooded_list.get(i).neighbors(board_size)) {
                if (tiles[neighbors.getY()][neighbors.getX()].getColor() == color && !flooded_list.contains(neighbors)) {
                    flooded_list.add(neighbors);
                }
            }
            i++;
        }
    }


    // An alternative implementation goes here.
    public static void flood(WaterColor color,
                             LinkedList<Coord> flooded_list,
                             Tile[][] tiles,
                             Integer board_size) {
        // YOUR CODE
        HashSet<Coord> visited = new HashSet<>(flooded_list);
        List<Coord> toVisit = new ArrayList<>(flooded_list);
        int i = 0;
        while (i < toVisit.size()){
            for (Coord neighbor : toVisit.get(i).neighbors(board_size)){
                if(tiles[neighbor.getY()][neighbor.getX()].getColor() == color && !visited.contains(neighbor)){
                    visited.add(neighbor);
                    toVisit.add(neighbor);
                }
            }
            i++;
        }

        flooded_list.clear();
        flooded_list.addAll(visited);
    }
}

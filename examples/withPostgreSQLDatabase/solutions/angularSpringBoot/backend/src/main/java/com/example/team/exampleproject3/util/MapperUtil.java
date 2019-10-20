package com.example.team.exampleproject3.util;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;

/**
 * Util class for Mapper Model operations.
 *
 * @author Virtus
 */
public final class MapperUtil {

    /**
     * Model mapper.
     */
    protected static final ModelMapper MODEL_MAPPER = new ModelMapper();

    /**
     * Private Constructor.
     */
    private MapperUtil() {
    }

    /**
     * Maps the source to destination class.
     *
     * @param source    Source.
     * @param destClass Destination class.
     * @return Instance of destination class.
     */
    public static <S, D> D mapTo(S source, Class<D> destClass) {
        return MODEL_MAPPER.map(source, destClass);
    }

    /**
     * Converts the source list to a destination list mapping the source items
     * to destination type items.
     *
     * @param items     Source items.
     * @param destClass Destination class.
     * @return List of instances of destination type.
     */
    public static <D, S> List<D> toList(Iterable<S> items, Class<D> destClass) {
        List<D> dests = new ArrayList<>();

        if (items != null) {
            items.forEach(item -> dests.add(mapTo(item, destClass)));
        }
        return dests;
    }
}
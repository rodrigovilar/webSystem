import { ActivatedRoute } from '@angular/router';

/**
 * Gets the param from the activated route.
 *
 * @param {string} param
 * @returns {string}
 */
export function getParam(route: ActivatedRoute, param: string): string {
    return route
        ? route.snapshot.paramMap.get(param)
        : null;
}
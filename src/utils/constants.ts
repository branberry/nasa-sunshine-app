export const NASA_POWER_API = "https://85419g087g.execute-api.us-east-1.amazonaws.com/prod/sunshine/";

/**
 * Parameters for the NASA POWER API
 */
export const SOLAR_IRRADIANCE_DEFICIT_7DAY = "SOLAR_DEFICITS_BLW_CONSEC_07";
export const SOLAR_IRRADIANCE_OPTIMAL = "SI_EF_TILTED_SURFACE_OPTIMAL";
export const SOLAR_GEOMETRY = "SG_DAY_HOURS"

/**
 * Temporal resolutions
 */
export const CLIMATOLOGY = "climatology";
export const MONTHLY = "monthly";
export const DAILY = "daily";
export const HOURLY = "hourly";

export type PowerAPIParameter = typeof SOLAR_IRRADIANCE_DEFICIT_7DAY | typeof SOLAR_IRRADIANCE_OPTIMAL | typeof SOLAR_GEOMETRY;
export type Resolution = typeof CLIMATOLOGY | typeof MONTHLY | typeof DAILY | typeof HOURLY;
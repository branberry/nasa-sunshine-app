export const NASA_POWER_API = "https://85419g087g.execute-api.us-east-1.amazonaws.com/prod/sunshine/";

/**
 * Parameters for the NASA POWER API
 */
export const SOLAR_IRRADIANCE_DEFICIT_7DAY = "SOLAR_DEFICITS_BLW_CONSEC_07";
export const SOLAR_IRRADIANCE_OPTIMAL = "SI_EF_TILTED_SURFACE_OPTIMAL";

export type PowerAPIParameter = typeof SOLAR_IRRADIANCE_DEFICIT_7DAY | typeof SOLAR_IRRADIANCE_OPTIMAL;
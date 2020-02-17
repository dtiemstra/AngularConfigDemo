import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<ConfigSettings>('settings from config.json');

export class ConfigSettings{
    configValue1: string;
    configValue2: string;
}
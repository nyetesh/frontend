import { TemplateRef } from '@angular/core';

export class AlertData {
  type?: AlertType;
  description?: string;
  template?: TemplateRef<any>;
  templateContext?: {};
  heading!: string;
  hasLink?: boolean;
  link?: {
      label?: string;
      route?: string;
      type?: string;
  };
}

export interface AlertDataWithLink {
    type?: AlertType;
    description: string;
    heading: string;
    link?: {
        label?: string;
        route?: string;
        type?: string;
    }
}

export interface AlertDataDefault {
    type?: AlertType;
    description: string;
    heading: string;
}

export type AlertType = 'warning' | 'info' | 'success' | 'danger';

export interface AlertConfig {
    position?: {
        bottom?: number;
        right?: number;
    };
    animation?: {
        fadeOut?: number;
        fadeIn?: number;
    };
}

export const defaultAlertConfig: AlertConfig = {
    position: {
        bottom: 20,
        right: 20,
    },
    animation: {
        fadeOut: 1000,
        fadeIn: 300,
    },
};
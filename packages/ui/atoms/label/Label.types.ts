export type LabelProps = {
  labelText: string;
  labelType:LabelType;
  labelSize: 'xsmall' | 'small' | 'large';
  testId?: string;
  iconComponent?: JSX.Element;
};

 export enum LabelType {
    primary = 'primary',
    secondary = 'secondary',
    alert = 'alert',
    success = 'success',
    success_light = 'success_light',
    disabled ='disabled',
}

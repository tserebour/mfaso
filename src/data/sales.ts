import { SvgIconProps } from '@mui/material';
import OrderIcon from 'components/icons/OrderIcon';
import SalesIcon from 'components/icons/SalesIcon';

export interface SaleItem {
  label: string;
  value: string;
  growth: string;
  bgColor: string;
  iconBackgroundColor: string;
  icon?: string;
  svgIcon?: (props: SvgIconProps) => JSX.Element;
}

export const sales: SaleItem[] = [
  {
    label: 'Service Charges',
    value: 'R17 294 101',
    growth: '+8% from yesterday',
    bgColor: 'error.lighter',
    iconBackgroundColor: 'error.main',
    svgIcon: SalesIcon,
  },
  {
    label: 'Rental Income',
    value: 'R17 294 101',
    growth: '+8% from yesterday',
    bgColor: 'warning.lighter',
    iconBackgroundColor: 'error.dark',
    svgIcon: OrderIcon,
  },
  {
    label: 'Interest and Investments',
    value: 'R17 294 101',
    growth: '+8% from yesterday',
    bgColor: 'success.lighter',
    iconBackgroundColor: 'success.darker',
    icon: 'ion:pricetag',
  },
  {
    label: 'Agency Service',
    value: 'R17 294 101',
    growth: '+8% from yesterday',
    bgColor: 'secondary.lighter',
    iconBackgroundColor: 'secondary.main',
    icon: 'material-symbols:person-add',
  },
];
